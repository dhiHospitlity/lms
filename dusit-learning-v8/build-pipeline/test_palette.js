// Palette compliance — the rules agreed 2026-09-25, as a test rather than a memo.
//
// Navy and gold are TYPE and ACCENT, never surfaces inside the canvas. Hierarchy
// comes from type weight, colour and scale. The dark chrome (sidebar, top bar,
// fullscreen bars, results overlay) is deliberately excluded: that black frame is
// what makes the light canvas read premium.
//
// Run after ANY visual edit:
//   node dusit-learning-v8/build-pipeline/test_palette.js
// Companion tests: test_contrast.js (is it readable), test_captions.js (do captions fit).
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const DIR = path.join(ROOT, 'modules');
const FILES = fs.readdirSync(DIR).filter(f => f.endsWith('.html') && !f.startsWith('__'));

// Fills that are allowed to survive, because they are data, controls or small
// diagram nodes rather than decoration. Matched against the element's open tag.
const ALLOWED_FILL = [
  'id="bar-hub"',                                    // 80px hub node
  'width:32px;height:6px;background:var(--b900)',    // 6px tab marker
  'data-cue="hub-centre"',                           // Dusit node, M3 ecosystem map
  'id="pc-bar"', 'id="dc-bar"',                      // data bars
  'width:28px;height:15px;border-radius:8px;background:var(--gold)', // toggles
  'height:2px', 'height:3px', 'height:6px;',         // hairline rules and dots
  'width:6px;height:6px',
  'border-radius:50%',                               // dots
  'width:78px;height:100px',                         // chart column
  'width:78px;height:78px',                          // M2 field-type tiles (white text, >4.5:1)
];
// Raw hexes that carry meaning rather than decoration.
const ALLOWED_HEX = ['#FFF', '#FFFFFF', '#5B8C7A', '#8B4A5A'];

// Selectors whose surface is dark, so gold/cream text there is correct.
const DARK_SEL = /(\.sb-|\.sidebar|\.topbar|\.tb-|#fs-|\.fs-|\.res-|\.results-|#cc-|\.btn|\.q-dot|\.ndot|\.mod-tag|cueline-btn)/;
const DARK_NODE = ['id="bar-hub"', 'data-cue="hub-centre"', 'id="fs-top"', 'id="fs-bot"'];

let problems = 0;
const fail = (f, msg) => { problems++; console.log('  x ' + f + ': ' + msg); };

FILES.forEach(rel => {
  const src = fs.readFileSync(path.join(DIR, rel), 'utf-8');
  const cut = src.indexOf('</style>');
  const head = src.slice(0, cut), body = src.slice(cut);
  const before = problems;

  // ── 1. brand-colour fills in slide markup ──
  for (const fill of ['var(--gold-l)', 'var(--gold)', 'var(--b900)', 'var(--dark)']) {
    const needle = 'background:' + fill;
    let at = -1;
    while ((at = body.indexOf(needle, at + 1)) > -1) {
      const start = body.lastIndexOf('<', at);
      const tag = body.slice(start, body.indexOf('>', at) + 1);
      if (ALLOWED_FILL.some(a => tag.includes(a))) continue;
      fail(rel, 'brand-colour fill "' + needle + '" on ' + tag.slice(0, 90).replace(/\s+/g, ' '));
    }
  }

  // ── 2. raw hex fills ──
  const hexes = [...body.matchAll(/background(?:-color)?:(#[0-9A-Fa-f]{3,8})/g)]
    .map(m => m[1].toUpperCase())
    .filter(h => !ALLOWED_HEX.includes(h));
  [...new Set(hexes)].forEach(h => fail(rel, 'raw hex fill ' + h + ' — use a token'));

  // ── 3. gold TEXT on light must be --gold-d, never --gold (2.29:1 on white) ──
  head.replace(/([^{}]*)\{([^{}]*)\}/g, (m, sel, decl) => {
    if (decl.includes('color:var(--gold)') && !DARK_SEL.test(sel)) {
      fail(rel, 'gold text on a light surface: "' + sel.trim().slice(0, 60) + '" — use --gold-d');
    }
    return m;
  });
  // Excise the subtrees that are still dark, by balanced tag rather than by a
  // fixed window — gold text inside them is correct and must not be flagged.
  let protectedBody = body;
  DARK_NODE.forEach(anchor => {
    let at;
    while ((at = protectedBody.indexOf(anchor)) > -1) {
      const start = protectedBody.lastIndexOf('<', at);
      const name = (protectedBody.slice(start + 1).match(/^(div|span)/) || [])[1];
      if (!name) break;
      const open = new RegExp('<' + name + '\\b', 'g'), close = new RegExp('</' + name + '>', 'g');
      let depth = 1, i = start + 1, end = -1;
      while (depth > 0) {
        open.lastIndex = i; close.lastIndex = i;
        const o = open.exec(protectedBody), c = close.exec(protectedBody);
        if (!c) break;
        if (o && o.index < c.index) { depth++; i = o.index + 1; }
        else { depth--; i = c.index + 1; if (depth === 0) end = c.index + name.length + 3; }
      }
      if (end < 0) break;
      protectedBody = protectedBody.slice(0, start) + protectedBody.slice(end);
    }
  });
  const inlineGold = (protectedBody.match(/color:var\(--gold\)(?!-)/g) || []).length;
  if (inlineGold) fail(rel, inlineGold + ' inline "color:var(--gold)" on light — use --gold-d');

  // ── 4. the caption box contract (see module-template-spec.md) ──
  if (/#cc-overlay[^{]*\{[^}]*-webkit-line-clamp/.test(head))
    fail(rel, '#cc-overlay has a line-clamp — it hides overflow instead of preventing it');
  if (/#cc-overlay[^{]*\{[^}]*left:50%/.test(head))
    fail(rel, '#cc-overlay centred with left:50% — caps its width at half the canvas');
  if (!/--gold-d:/.test(head)) fail(rel, 'missing --gold-d token');

  if (problems === before) console.log('v ' + rel);
});

console.log(problems ? '\n' + problems + ' palette violation(s)' : '\nPalette clean across all modules.');
process.exit(problems ? 1 : 0);
