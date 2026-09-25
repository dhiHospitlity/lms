// Walk every slide of every module in headless Chrome and flag text whose
// contrast against its effective background has collapsed. This is the exact
// failure mode a colour sweep causes: a fill goes light, the text inside stays
// white, and the copy vanishes. Nothing catches that except rendering it.
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const REPO = path.resolve(__dirname, '../..');
const DIR = path.join(REPO, 'modules');
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const FILES = fs.readdirSync(DIR).filter(f => f.endsWith('.html') && !f.startsWith('__'));

const PROBE = `
<script>
(function(){
 function run(){
  var out={slides:0,bad:[],err:null};
  try{
   window.quizUnlocked=true;
   function lum(c){
     var m=c.match(/[\\d.]+/g).map(Number);
     var a=m.slice(0,3).map(function(v){v/=255;return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);});
     return 0.2126*a[0]+0.7152*a[1]+0.0722*a[2];
   }
   function alpha(c){var m=c.match(/[\\d.]+/g);return m&&m.length>3?Number(m[3]):1;}
   function bgOf(el){
     var n=el;
     while(n&&n!==document.documentElement){
       var b=getComputedStyle(n).backgroundColor;
       if(b&&b!=='transparent'&&alpha(b)>0.5) return b;
       n=n.parentElement;
     }
     return 'rgb(255,255,255)';
   }
   function ratio(a,b){var L1=lum(a),L2=lum(b);var hi=Math.max(L1,L2),lo=Math.min(L1,L2);return (hi+0.05)/(lo+0.05);}
   // Drive the slides directly rather than through nav(): nav gates on quiz
   // locks and progress, and leaves .on where it was. Also force every
   // cue-gated element visible, or the audit only sees the first beat.
   var st=document.createElement('style');
   st.textContent='.slide [data-cue]{opacity:1 !important;transform:none !important;filter:none !important;}';
   document.head.appendChild(st);
   document.body.classList.remove('cueline-active');
   var all=Array.prototype.slice.call(document.querySelectorAll('.slide'));
   for(var i=0;i<all.length;i++){
     all.forEach(function(s){ s.classList.remove('on'); });
     var slide=all[i];
     slide.classList.add('on');
     slide.getBoundingClientRect();
     out.slides++;
     var els=slide.querySelectorAll('*');
     for(var k=0;k<els.length;k++){
       var el=els[k];
       var txt='';
       for(var c=0;c<el.childNodes.length;c++) if(el.childNodes[c].nodeType===3) txt+=el.childNodes[c].nodeValue;
       txt=txt.replace(/\\s+/g,' ').trim();
       if(!txt) continue;
       var cs=getComputedStyle(el);
       if(cs.visibility==='hidden'||cs.display==='none') continue;
       if(parseFloat(cs.opacity)<0.15) continue;
       var r=el.getBoundingClientRect(); if(r.width<2||r.height<2) continue;
       var cr=ratio(cs.color,bgOf(el));
       if(cr<2.5&&out.bad.length<40){
         out.bad.push({s:i,t:txt.slice(0,44),r:Math.round(cr*100)/100,fg:cs.color,bg:bgOf(el)});
       }
     }
   }
  }catch(e){out.err=e.message;}
  var p=document.createElement('pre');p.id='ccontrast';
  p.textContent='CQ'+JSON.stringify(out)+'QC';
  document.body.appendChild(p);
 }
 if(document.readyState==='complete') setTimeout(run,400);
 else window.addEventListener('load',function(){setTimeout(run,400);});
})();
</script>`;

let failed = false;
FILES.forEach(rel => {
  const tmp = path.join(DIR, '__contrast.html');
  fs.writeFileSync(tmp, fs.readFileSync(path.join(DIR, rel), 'utf-8').replace(/<\/body>/i, PROBE + '</body>'));
  let dom = '';
  try {
    dom = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--no-sandbox',
      '--allow-file-access-from-files', '--virtual-time-budget=12000', '--dump-dom',
      'file:///' + tmp.replace(/\\/g, '/')], { encoding: 'utf-8', maxBuffer: 1 << 28, stdio: ['ignore', 'pipe', 'ignore'] });
  } catch (e) { dom = (e.stdout || '').toString(); }
  fs.unlinkSync(tmp);

  const m = dom.match(/<pre id="ccontrast">CQ([\s\S]*?)QC<\/pre>/);
  if (!m) { failed = true; console.log('x ' + rel + ' — probe did not run'); return; }
  const r = JSON.parse(m[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
  if (r.err) { failed = true; console.log('x ' + rel + ' — ' + r.err); return; }
  const ok = r.bad.length === 0;
  if (!ok) failed = true;
  console.log((ok ? 'v ' : 'x ') + rel.padEnd(44) + ' slides:' + String(r.slides).padStart(3) + '  low-contrast:' + r.bad.length);
  const seen=new Set();r.bad.filter(b=>{const k=b.t+b.fg+b.bg;if(seen.has(k))return false;seen.add(k);return true;}).forEach(b => console.log('      slide ' + b.s + '  ratio ' + b.r + '  ' + b.fg + ' on ' + b.bg + '  "' + b.t + '"'));
});
console.log(failed ? '\nFAIL' : '\nNo unreadable text on any slide.');
process.exit(failed ? 1 : 0);
