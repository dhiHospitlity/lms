/* ═══════════════════════════════════════════════════════════════════════
   build_audio.js — renders per-cue narration MP3s via ElevenLabs
   ───────────────────────────────────────────────────────────────────────
   Reads cue text from the module's narration markdown script
   (dusit-learning-v8/scripts/<moduleKey>-narration.md), calls
   ElevenLabs' /v1/text-to-speech/{voice_id}/with-timestamps for each
   cue, and writes:
     assets/audio/<moduleKey>/s<slide>-c<cue>.mp3
     assets/audio/<moduleKey>/s<slide>-c<cue>.json   (alignment)

   Usage:
     node build_audio.js module1
     node build_audio.js module1 --force   (ignore cache, re-render all)

   Idempotent — safe to re-run after editing the script; only cues whose
   text (SHA-1) has changed are re-rendered.
   ═══════════════════════════════════════════════════════════════════════ */

'use strict';

const fs    = require('fs');
const path  = require('path');
const https = require('https');
const crypto = require('crypto');

// ── .env loader (no npm deps) ───────────────────────────────────────────
function loadEnv(){
  const envPath = path.resolve(__dirname, '..', '..', '.env');
  if(!fs.existsSync(envPath)){
    throw new Error('.env not found at ' + envPath);
  }
  const env = {};
  for(const raw of fs.readFileSync(envPath, 'utf-8').split(/\r?\n/)){
    const line = raw.trim();
    if(!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if(eq < 0) continue;
    env[line.slice(0, eq).trim()] = line.slice(eq + 1).trim();
  }
  return env;
}

// ── Narration script parser ─────────────────────────────────────────────
// Extracts per-slide cue lists from the markdown "Cue map" tables.
function parseNarrationScript(mdPath){
  const md = fs.readFileSync(mdPath, 'utf-8');
  // Split by '## Slide N' headings (N is captured)
  const parts = md.split(/^## Slide (\d+)[^\n]*$/m);
  const bySlide = {};
  // parts = [preamble, N, body, N, body, ...]
  for(let i = 1; i < parts.length; i += 2){
    const slideIdx = parseInt(parts[i], 10);
    const body     = parts[i + 1];

    // Locate the Cue map table
    const tblMatch = body.match(/### Cue map\s*\n\n?([\s\S]*?)(?=\n\n\*\*|\n---|\n## |\n### |$)/);
    if(!tblMatch) continue;
    const tableBlock = tblMatch[1];

    // Parse table rows — first line is header, second is separator, rest are data
    const rows = tableBlock.split(/\r?\n/).filter(l => l.trim().startsWith('|'));
    if(rows.length < 3) continue;

    const cues = [];
    for(let r = 2; r < rows.length; r++){
      // Split on | but ignore leading/trailing empties
      const cells = rows[r].split('|').slice(1, -1).map(c => c.trim());
      if(cells.length < 4) continue;
      const { voiceName, text } = extractVoiceTag(cells[3]);
      cues.push({
        id:        cells[0],
        action:    cells[1],
        target:    cells[2] === '—' ? null : cells[2],
        text,
        voiceName  // null if no [voice:name] tag on the line — resolved to module default at render time
      });
    }
    if(cues.length) bySlide[slideIdx] = cues;
  }
  return bySlide;
}

// ── Voice roster + per-module mapping ──────────────────────────────────
// British roster locked 2026-08-28. Alternate primary voice per module to
// avoid single-voice fatigue across the 40+ module programme. Multi-voice
// within a single module is supported via the [voice:name] tag on
// individual cue lines in narration.md (see parseNarrationScript).
const VOICES = {
  charlotte: 'XB0fDUnXU5powFXDhCwa', // Soft British female, deliberate, warm
  george:    'JBFqnCBsd6RMkjVDRZzb'  // Warm British baritone, senior-colleague
};

const MODULE_VOICES = {
  module1: 'charlotte',   // shipped, do not change
  module2: 'charlotte',   // shipped, do not change (roster locked after render)
  module3: 'george',      // OTA1 · Distribution Basic Knowledge — rotation kicks in here
  module4: 'charlotte',
  module5: 'george'
  // Continue alternating for every new module entry.
};

function resolveVoice(voiceName, fallbackId){
  if(!voiceName) return fallbackId;
  const id = VOICES[voiceName.toLowerCase()];
  if(!id) throw new Error('Unknown voice name: ' + voiceName + '. Registered: ' + Object.keys(VOICES).join(', '));
  return id;
}

// Strip [voice:name] tag from a spoken line and return { voiceName, text }.
// Tag must be the first non-whitespace token, e.g. "[voice:george] Some text."
function extractVoiceTag(text){
  const m = text.match(/^\s*\[voice:([a-z]+)\]\s*/i);
  if(!m) return { voiceName: null, text };
  return { voiceName: m[1].toLowerCase(), text: text.slice(m[0].length) };
}

// ── Pronunciation overrides ────────────────────────────────────────────
// Words ElevenLabs mispronounces at defaults. Applied only to the text sent
// to the API; captions and narration source keep the correct spelling.
// Extend as we hit more mis-pronunciations across modules.
const PRONUNCIATION_OVERRIDES = [
  // "Dusit" reads as "DEW-sit" by default. Should be "DOO-sit."
  // Whole-word only (case-insensitive on the first letter), preserves possessives.
  { pattern: /\bDusit\b/g, replacement: 'Doo-sit' }
];

function applyPronunciationOverrides(text){
  let out = text;
  for(const { pattern, replacement } of PRONUNCIATION_OVERRIDES){
    out = out.replace(pattern, replacement);
  }
  return out;
}

// ── ElevenLabs API call ────────────────────────────────────────────────
function ttsWithTimestamps(text, voiceId, apiKey){
  // Apply pronunciation overrides right before the API call.
  text = applyPronunciationOverrides(text);
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      // Reverted to multilingual_v2 on 2026-08-28 after v3 produced audible
      // voice drift between cues even at stability 0.5. v2 is more stable
      // per-call, at the cost of expression. Slowdown for the intro slides
      // is now handled client-side via Cueline's slidePlaybackRates map,
      // since v2 does not support voice_settings.speed.
      model_id: 'eleven_multilingual_v2',
      voice_settings: {
        stability:         0.5,
        similarity_boost:  0.75,
        style:             0.45,
        use_speaker_boost: true
      }
    });
    const req = https.request({
      method:   'POST',
      hostname: 'api.elevenlabs.io',
      path:     '/v1/text-to-speech/' + voiceId + '/with-timestamps',
      headers: {
        'xi-api-key':     apiKey,
        'Content-Type':   'application/json',
        'Content-Length': Buffer.byteLength(body),
        'Accept':         'application/json'
      }
    }, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf-8');
        if(res.statusCode !== 200){
          reject(new Error('ElevenLabs API ' + res.statusCode + ': ' + raw.slice(0, 400)));
          return;
        }
        try {
          const j = JSON.parse(raw);
          resolve({
            audioBase64:          j.audio_base64,
            alignment:            j.alignment,
            normalizedAlignment:  j.normalized_alignment
          });
        } catch(e){ reject(e); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// ── Hash helper for idempotency ────────────────────────────────────────
// Hashes the FINAL text (after pronunciation overrides) so cache invalidates
// only for cues whose preprocessed output actually changed. Adding a new
// PRONUNCIATION_OVERRIDES entry only re-renders cues that contain the
// affected word — not the whole module.
function textHash(text, voiceId){
  // Fold voice ID into the hash so voice swaps invalidate cache correctly.
  const key = (voiceId || '') + '::' + applyPronunciationOverrides(text);
  return crypto.createHash('sha1').update(key).digest('hex').slice(0, 12);
}

// ── Main ────────────────────────────────────────────────────────────────
async function main(){
  const moduleKey = process.argv[2];
  const force     = process.argv.includes('--force');
  if(!moduleKey){
    console.log('Usage: node build_audio.js <moduleKey> [--force]');
    console.log('Example: node build_audio.js module1');
    process.exit(1);
  }

  const env     = loadEnv();
  const apiKey  = env.ELEVENLABS_API_KEY;
  const envVoiceId = env.ELEVENLABS_VOICE_ID;
  if(!apiKey){ throw new Error('ELEVENLABS_API_KEY missing in .env'); }

  // Resolve default voice for this module. Precedence:
  //   1. MODULE_VOICES entry for this moduleKey
  //   2. ELEVENLABS_VOICE_ID from .env (legacy fallback)
  const moduleVoiceName = MODULE_VOICES[moduleKey];
  const defaultVoiceId  = moduleVoiceName ? VOICES[moduleVoiceName] : envVoiceId;
  if(!defaultVoiceId){
    throw new Error('No voice configured for ' + moduleKey + '. Add to MODULE_VOICES or set ELEVENLABS_VOICE_ID.');
  }

  const REPO_ROOT  = path.resolve(__dirname, '..', '..');
  const scriptPath = path.join(REPO_ROOT, 'dusit-learning-v8', 'scripts', moduleKey + '-narration.md');
  const outputDir  = path.join(REPO_ROOT, 'assets', 'audio', moduleKey);
  fs.mkdirSync(outputDir, { recursive: true });

  if(!fs.existsSync(scriptPath)){
    throw new Error('Narration script not found: ' + scriptPath);
  }

  const bySlide = parseNarrationScript(scriptPath);
  const slides  = Object.keys(bySlide).map(Number).sort((a, b) => a - b);
  const totalCues = slides.reduce((n, s) => n + bySlide[s].length, 0);

  console.log('\n─── Rendering ' + moduleKey + ' ───');
  console.log('Default voice: ' + (moduleVoiceName || defaultVoiceId));
  console.log('Slides: ' + slides.length + '   Cues: ' + totalCues);
  if(force) console.log('Mode:  --force (ignoring cache)');
  console.log('');

  let done = 0, rendered = 0, cached = 0, chars = 0;

  for(const slideIdx of slides){
    for(const cue of bySlide[slideIdx]){
      const baseName = 's' + slideIdx + '-c' + cue.id;
      const mp3Path  = path.join(outputDir, baseName + '.mp3');
      const jsonPath = path.join(outputDir, baseName + '.json');
      const cueVoiceId = resolveVoice(cue.voiceName, defaultVoiceId);
      const hash     = textHash(cue.text, cueVoiceId);
      done++;

      // Cache check — skip only if both files exist AND stored hash matches
      if(!force && fs.existsSync(mp3Path) && fs.existsSync(jsonPath)){
        try {
          const existing = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
          if(existing.textHash === hash){
            cached++;
            console.log('  [' + done + '/' + totalCues + '] ' + baseName + '  — cached');
            continue;
          }
        } catch(_){/* fall through and re-render */}
      }

      // Render
      const result = await ttsWithTimestamps(cue.text, cueVoiceId, apiKey);
      fs.writeFileSync(mp3Path, Buffer.from(result.audioBase64, 'base64'));
      fs.writeFileSync(jsonPath, JSON.stringify({
        text:                cue.text,
        textHash:            hash,
        action:              cue.action,
        target:              cue.target,
        alignment:           result.alignment,
        normalizedAlignment: result.normalizedAlignment,
        voice:               cueVoiceId,
        voiceName:           cue.voiceName || moduleVoiceName || null,
        renderedAt:          new Date().toISOString()
      }, null, 2));

      const sz = fs.statSync(mp3Path).size;
      chars   += cue.text.length;
      rendered++;
      console.log('  [' + done + '/' + totalCues + '] ' + baseName + '  — ' + (sz / 1024).toFixed(1) + ' KB  (' + cue.text.length + ' chars)');
    }
  }

  console.log('');
  console.log('✓ Rendered: ' + rendered + '  Cached: ' + cached);
  console.log('✓ Chars billed: ' + chars);
  console.log('✓ Output: ' + path.relative(REPO_ROOT, outputDir));
}

main().catch(e => {
  console.error('\n✗ ' + e.message);
  process.exit(1);
});
