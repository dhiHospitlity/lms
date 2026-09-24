// Render each module in headless Chrome, run its own _splitCaption over its own
// cues, and measure every resulting chunk in the real caption box. Fails loudly
// if any chunk renders on more than two lines.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '../..');
const DIR = path.join(ROOT, 'modules');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const FILES = fs.readdirSync(DIR).filter(f => f.endsWith('.html') && !f.startsWith('__'));

const PROBE = `
<script>
(function(){
  function run(){
    var out = {err:null};
    try{
      Cueline.ccEl = Cueline.ccEl || document.getElementById('cc-overlay');
      var probe = Cueline._ensureCaptionProbe();
      var ov = document.getElementById('cc-overlay');
      var all = [];
      Object.keys(Cueline.cues).forEach(function(k){
        Cueline.cues[k].forEach(function(c){ if(c.cc) all.push(c.cc); });
      });
      function linesOf(t){
        probe.textContent = t;
        var cs = getComputedStyle(probe);
        var lh = parseFloat(cs.lineHeight);
        var inner = probe.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
        return Math.round(inner / lh);
      }
      var chunks = 0, over = 0, maxLines = 0, multi = 0, lossy = 0;
      var worst = [];
      all.forEach(function(t){
        var parts = Cueline._splitCaption(t);
        chunks += parts.length;
        if(parts.length > 1) multi++;
        if(parts.join(' ').replace(/\\s+/g,' ').trim() !== t.replace(/\\s+/g,' ').trim()) lossy++;
        parts.forEach(function(p){
          var L = linesOf(p);
          if(L > maxLines) maxLines = L;
          if(L > 2){ over++; if(worst.length < 3) worst.push(L + ' lines | ' + p); }
        });
      });
      // widest the box can actually get, with long text in it
      ov.textContent = all.join(' ').slice(0, 400) || 'x';
      out.boxW = ov.offsetWidth;
      out.probeW = probe.offsetWidth;
      ov.textContent = '';
      out.cues = all.length; out.chunks = chunks; out.multi = multi;
      out.over = over; out.maxLines = maxLines; out.lossy = lossy; out.worst = worst;
    }catch(e){ out.err = e.message; }
    var pre = document.createElement('pre');
    pre.id = 'ccaudit';
    pre.textContent = 'CCAUDIT' + JSON.stringify(out) + 'ENDCC';
    document.body.appendChild(pre);
  }
  if(document.readyState === 'complete') setTimeout(run, 300);
  else window.addEventListener('load', function(){ setTimeout(run, 300); });
})();
</script>
`;

let failed = false;
FILES.forEach(rel => {
  const tmpName = '__ccaudit.html';
  const tmp = path.join(DIR, tmpName);
  const src = fs.readFileSync(path.join(DIR, rel), 'utf-8');
  fs.writeFileSync(tmp, src.replace(/<\/body>/i, PROBE + '</body>'));
  let dom = '';
  try {
    dom = execFileSync(CHROME, [
      '--headless=new', '--disable-gpu', '--no-sandbox', '--allow-file-access-from-files',
      '--virtual-time-budget=6000', '--dump-dom',
      'file:///' + tmp.replace(/\\/g, '/'),
    ], { encoding: 'utf-8', maxBuffer: 1 << 28, stdio: ['ignore', 'pipe', 'ignore'] });
  } catch (e) { dom = (e.stdout || '').toString(); }
  fs.unlinkSync(tmp);

  // Must target the output element — the injected <script> source also contains
  // the marker text, and appears first in the dumped DOM.
  const m = dom.match(/<pre id="ccaudit">CCAUDIT([\s\S]*?)ENDCC<\/pre>/);
  if (!m) { failed = true; console.log('x ' + rel + ' — audit did not run'); return; }
  let r;
  try { r = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')); }
  catch (e) { failed = true; console.log('x ' + rel + ' — bad payload: ' + m[1].slice(0, 200)); return; }
  if (r.err) { failed = true; console.log('x ' + rel + ' — ' + r.err); return; }

  const ok = r.over === 0 && r.lossy === 0;
  if (!ok) failed = true;
  console.log((ok ? 'v ' : 'x ') + rel.padEnd(44) +
    ' box:' + String(r.boxW).padStart(4) + 'px' +
    ' cues:' + String(r.cues).padStart(4) +
    ' split:' + String(r.multi).padStart(3) +
    ' avg:' + (r.chunks / r.cues).toFixed(2) +
    ' maxLines:' + r.maxLines +
    ' over2:' + r.over +
    ' lossy:' + r.lossy);
  (r.worst || []).forEach(w => console.log('      ! ' + w));
});
console.log(failed ? '\nFAIL' : '\nEvery chunk renders in <=2 lines, no text lost.');
process.exit(failed ? 1 : 0);
