/* ═══════════════════════════════════════════════════════════════════════
   build_scorm.js — packages a Dusit LMS module as a SCORM 1.2 zip
   for direct upload into Moodle.
   ───────────────────────────────────────────────────────────────────────
   Usage:
     node build_scorm.js <moduleKey>
     node build_scorm.js all

   Output:
     dist/scorm/<moduleKey>-scorm12.zip

   Zero external dependencies. Uses PowerShell's Compress-Archive for zipping
   (Windows-native, no npm install required).
   ═══════════════════════════════════════════════════════════════════════ */

'use strict';

const fs           = require('fs');
const path         = require('path');
const { execSync } = require('child_process');

// ── Paths ───────────────────────────────────────────────────────────────
const REPO_ROOT  = path.resolve(__dirname, '..', '..');
const OUTPUT_DIR = path.join(REPO_ROOT, 'dist', 'scorm');

// ── Module registry ─────────────────────────────────────────────────────
// One entry per module we can package. Adding a new module = one entry here.
const MODULES = {
  module1: {
    identifier: 'dusit_module1_rate_architecture',
    title:      'Module 1 — Dusit Rate Architecture',
    htmlPath:   'modules/module1-rate-architecture.html',
    masteryScore: 60,       // percent required to pass — matches finishQuiz scaling
    duration:   'PT15M'
  },
  module2: {
    identifier: 'dusit_module2_tracking_segmentation',
    title:      'Module 2 — Revenue Tracking Segmentation',
    htmlPath:   'modules/module2-segmentation.html',
    masteryScore: 60,
    duration:   'PT20M'
  }
  // Future entries follow the same shape.
};

// ── Entry ───────────────────────────────────────────────────────────────
function main(){
  const arg = process.argv[2];
  if(!arg){
    console.log('Usage: node build_scorm.js <moduleKey|all>');
    console.log('Modules:', Object.keys(MODULES).join(', '));
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const keys = arg === 'all' ? Object.keys(MODULES) : [arg];
  for(const key of keys){
    if(!MODULES[key]){
      console.error('Unknown module: ' + key);
      process.exit(1);
    }
    build(key);
  }
}

// ── Build one module ────────────────────────────────────────────────────
function build(moduleKey){
  const mod       = MODULES[moduleKey];
  const stageDir  = path.join(OUTPUT_DIR, moduleKey + '-stage');
  const zipPath   = path.join(OUTPUT_DIR, moduleKey + '-scorm12.zip');

  console.log('\n─── Building ' + moduleKey + ' ───');

  // 1. Clean stage
  if(fs.existsSync(stageDir)) fs.rmSync(stageDir, { recursive: true, force: true });
  fs.mkdirSync(stageDir, { recursive: true });

  // 2. Copy module HTML → index.html, rewrite '../assets/' → 'assets/'
  const srcHtmlPath = path.join(REPO_ROOT, mod.htmlPath);
  if(!fs.existsSync(srcHtmlPath)){
    throw new Error('Module HTML not found: ' + srcHtmlPath);
  }
  const srcHtml    = fs.readFileSync(srcHtmlPath, 'utf-8');
  const rewritten  = srcHtml.replace(/\.\.\/assets\//g, 'assets/');
  fs.writeFileSync(path.join(stageDir, 'index.html'), rewritten);
  console.log('  ✓ index.html          (' + kb(rewritten.length) + ')');

  // 3. Copy assets folder — flatten to sit alongside index.html
  const assetsSrc = path.join(REPO_ROOT, 'assets');
  const assetsDst = path.join(stageDir, 'assets');
  copyDir(assetsSrc, assetsDst, {
    // Skip files that don't belong in a delivered SCORM package
    skipExts: ['.ai', '.eps'],
    skipNames: ['build_fonts_css.py', 'desktop.ini']
  });
  const assetCount = countFiles(assetsDst);
  console.log('  ✓ assets/             (' + assetCount + ' files, ' + kb(dirSize(assetsDst)) + ')');

  // 4. Generate imsmanifest.xml (must enumerate every file for strict LMSs)
  const manifest = buildManifest(mod, stageDir);
  fs.writeFileSync(path.join(stageDir, 'imsmanifest.xml'), manifest);
  console.log('  ✓ imsmanifest.xml     (' + kb(manifest.length) + ')');

  // 5. Zip — PowerShell Compress-Archive (Windows-native, zero deps)
  if(fs.existsSync(zipPath)) fs.rmSync(zipPath);
  const psCmd =
    `Compress-Archive -Path '${stageDir}\\*' -DestinationPath '${zipPath}' -Force`;
  execSync(`powershell -NoProfile -ExecutionPolicy Bypass -Command "${psCmd}"`,
           { stdio: ['ignore', 'ignore', 'inherit'] });

  const zipSize = fs.statSync(zipPath).size;
  console.log('\n  ✓ ' + path.relative(REPO_ROOT, zipPath));
  console.log('    ' + kb(zipSize) + '  — ready to upload to Moodle');
}

// ── Manifest builder ────────────────────────────────────────────────────
function buildManifest(mod, stageDir){
  const files = listFilesRelative(stageDir).filter(f => f !== 'imsmanifest.xml');
  const fileEntries = files.map(f => '      <file href="' + f + '"/>').join('\n');

  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<manifest identifier="${mod.identifier}" version="1.2"
  xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd
                      http://www.imsglobal.org/xsd/imsmd_rootv1p2p1 imsmd_rootv1p2p1.xsd
                      http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <metadata>
    <schema>ADL SCORM</schema>
    <schemaversion>1.2</schemaversion>
  </metadata>
  <organizations default="ORG-DUSIT">
    <organization identifier="ORG-DUSIT">
      <title>Dusit Revenue Training Programme</title>
      <item identifier="ITEM-${mod.identifier}" identifierref="RES-${mod.identifier}">
        <title>${escapeXml(mod.title)}</title>
        <adlcp:masteryscore>${mod.masteryScore}</adlcp:masteryscore>
        <adlcp:maxtimeallowed>${mod.duration}</adlcp:maxtimeallowed>
      </item>
    </organization>
  </organizations>
  <resources>
    <resource identifier="RES-${mod.identifier}" type="webcontent" adlcp:scormtype="sco" href="index.html">
${fileEntries}
    </resource>
  </resources>
</manifest>
`;
}

// ── Filesystem helpers ──────────────────────────────────────────────────
function copyDir(src, dst, opts){
  opts = opts || {};
  const skipExts  = new Set((opts.skipExts  || []).map(x => x.toLowerCase()));
  const skipNames = new Set(opts.skipNames || []);
  fs.mkdirSync(dst, { recursive: true });
  for(const item of fs.readdirSync(src, { withFileTypes: true })){
    if(skipNames.has(item.name)) continue;
    const srcPath = path.join(src, item.name);
    const dstPath = path.join(dst, item.name);
    if(item.isDirectory()){
      copyDir(srcPath, dstPath, opts);
    } else {
      const ext = path.extname(item.name).toLowerCase();
      if(skipExts.has(ext)) continue;
      fs.copyFileSync(srcPath, dstPath);
    }
  }
}

function listFilesRelative(dir, prefix){
  prefix = prefix || '';
  const out = [];
  for(const item of fs.readdirSync(dir, { withFileTypes: true })){
    const rel = prefix ? prefix + '/' + item.name : item.name;
    if(item.isDirectory()){
      out.push(...listFilesRelative(path.join(dir, item.name), rel));
    } else {
      out.push(rel);
    }
  }
  return out;
}

function countFiles(dir){
  return listFilesRelative(dir).length;
}

function dirSize(dir){
  let total = 0;
  for(const rel of listFilesRelative(dir)){
    total += fs.statSync(path.join(dir, rel)).size;
  }
  return total;
}

function kb(bytes){
  if(bytes < 1024) return bytes + ' B';
  if(bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

function escapeXml(s){
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// ── Run ─────────────────────────────────────────────────────────────────
main();
