/* One-off · test Charlotte on eleven_v3 with the current warmth settings.
   Writes to assets/audio/module1/test-v3-s1-c0.mp3 so nothing production is touched.
   Errors cleanly if the plan does not include v3. */

'use strict';
const fs    = require('fs');
const path  = require('path');
const https = require('https');

function loadEnv(){
  const envPath = path.resolve(__dirname, '..', '..', '.env');
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

function tts(text, voiceId, apiKey, modelId){
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text,
      model_id: modelId,
      voice_settings: {
        stability:         0.35,
        similarity_boost:  0.75,
        style:             0.45,
        use_speaker_boost: true
      }
    });
    const req = https.request({
      method:   'POST',
      hostname: 'api.elevenlabs.io',
      path:     '/v1/text-to-speech/' + voiceId,
      headers: {
        'xi-api-key':     apiKey,
        'Content-Type':   'application/json',
        'Content-Length': Buffer.byteLength(body),
        'Accept':         'audio/mpeg'
      }
    }, res => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        if(res.statusCode !== 200){
          reject(new Error('HTTP ' + res.statusCode + ': ' + buf.toString('utf-8').slice(0, 400)));
          return;
        }
        resolve(buf);
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main(){
  const env    = loadEnv();
  const apiKey = env.ELEVENLABS_API_KEY;
  const voice  = 'Xb7hH8MSUJpSbSDYk0k2';   // Alice — British female, warmer / more conversational than Charlotte
  const text   = "Here's what we'll cover.";
  const model  = 'eleven_v3';

  const outPath = path.resolve(__dirname, '..', '..', 'assets', 'audio', 'module1', 'test-v3-alice-s1-c0.mp3');

  console.log('Test render');
  console.log('  Voice: ' + voice + ' (Alice)');
  console.log('  Model: ' + model);
  console.log('  Text:  "' + text + '" (' + text.length + ' chars)');
  console.log('');

  try {
    const audio = await tts(text, voice, apiKey, model);
    fs.writeFileSync(outPath, audio);
    console.log('✓ ' + (audio.length / 1024).toFixed(1) + ' KB written to ' + path.relative(process.cwd(), outPath));
  } catch(e){
    console.error('✗ ' + e.message);
    process.exit(1);
  }
}

main();
