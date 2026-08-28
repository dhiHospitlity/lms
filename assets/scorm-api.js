/* ═══════════════════════════════════════════════════════════════
   SCORM 1.2 wrapper — Dusit Revenue Training Programme
   ───────────────────────────────────────────────────────────────
   Exposes a small `window.SCORM` object with the calls we actually
   need. If a SCORM API is found (parent frame chain, as required
   by the SCORM 1.2 spec) it drives the LMS. If not — running
   standalone at lmsdusit.dhihospitality.com or as a plain file —
   it falls back to localStorage so the module still works and
   remembers progress locally.

   Contract used by module HTML:
     SCORM.init()                     — on page load
     SCORM.setLocation(slideIdx)      — every slide change (bookmark)
     SCORM.getLocation()              — restore bookmark on resume
     SCORM.setScore(raw, max, min)    — after quiz submission
     SCORM.setStatus(status)          — 'passed' | 'failed' | 'completed'
     SCORM.commit()                   — force a write
     SCORM.finish()                   — on tab close / unload
   ═══════════════════════════════════════════════════════════════ */

(function(global){
  'use strict';

  const STORAGE_KEY = 'dusit-scorm-fallback';
  const MAX_FIND_DEPTH = 500;

  // ── Locate the SCORM 1.2 API by walking up parent frames ──
  // (Standard pattern from the SCORM 1.2 Run-Time Environment spec.)
  function findAPI(win){
    let attempts = 0;
    while ((typeof win.API === 'undefined' || win.API === null)
           && win.parent && win.parent !== win
           && attempts < MAX_FIND_DEPTH){
      attempts++;
      win = win.parent;
    }
    return win.API || null;
  }

  function locateAPI(){
    let api = findAPI(window);
    if(!api && window.opener) api = findAPI(window.opener);
    return api;
  }

  const api = locateAPI();
  const hasLMS = !!api;

  // ── localStorage fallback (standalone / preview mode) ──
  function readFallback(){
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
    catch(e){ return {}; }
  }
  function writeFallback(patch){
    try {
      const cur = readFallback();
      Object.assign(cur, patch);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cur));
    } catch(e){}
  }

  // ── Safe wrapper around an LMS call ──
  function safe(fn, label){
    try { return fn(); }
    catch(e){ console.warn('[SCORM] ' + label + ' failed:', e); return null; }
  }

  const SCORM = {
    hasLMS,               // read-only flag: are we running inside a real LMS?
    _initialised: false,

    init(){
      if(this._initialised) return;
      this._initialised = true;
      if(hasLMS){
        safe(() => {
          api.LMSInitialize('');
          const currentStatus = api.LMSGetValue('cmi.core.lesson_status');
          // Only reset to 'incomplete' on the very first launch. Preserve
          // 'passed'/'failed'/'completed' if the learner is returning.
          if(currentStatus === 'not attempted' || currentStatus === ''){
            api.LMSSetValue('cmi.core.lesson_status', 'incomplete');
          }
          api.LMSCommit('');
        }, 'init');
      }
      // Auto-finish on tab close / navigation away — SCORM 1.2 requires it.
      global.addEventListener('beforeunload', () => this.finish());
    },

    setStatus(status){
      // status ∈ {'passed', 'failed', 'completed', 'incomplete', 'browsed'}
      if(hasLMS){
        safe(() => {
          api.LMSSetValue('cmi.core.lesson_status', status);
          api.LMSCommit('');
        }, 'setStatus');
      } else {
        writeFallback({ status });
      }
    },

    setScore(raw, max, min){
      max = max == null ? 100 : max;
      min = min == null ? 0   : min;
      if(hasLMS){
        safe(() => {
          api.LMSSetValue('cmi.core.score.raw', String(raw));
          api.LMSSetValue('cmi.core.score.max', String(max));
          api.LMSSetValue('cmi.core.score.min', String(min));
          api.LMSCommit('');
        }, 'setScore');
      } else {
        writeFallback({ score: { raw, max, min } });
      }
    },

    setLocation(loc){
      // Slide index bookmark — LMS restores this on resume.
      if(hasLMS){
        safe(() => {
          api.LMSSetValue('cmi.core.lesson_location', String(loc));
          api.LMSCommit('');
        }, 'setLocation');
      } else {
        writeFallback({ location: String(loc) });
      }
    },

    getLocation(){
      if(hasLMS){
        return safe(() => api.LMSGetValue('cmi.core.lesson_location'), 'getLocation') || '';
      }
      return readFallback().location || '';
    },

    commit(){
      if(hasLMS) safe(() => api.LMSCommit(''), 'commit');
    },

    finish(){
      if(!this._initialised) return;
      this._initialised = false;
      if(hasLMS){
        safe(() => {
          api.LMSCommit('');
          api.LMSFinish('');
        }, 'finish');
      }
    }
  };

  global.SCORM = SCORM;

  // Small dev hint — visible in the browser console during preview.
  if(!hasLMS && typeof console !== 'undefined'){
    console.info('[SCORM] No LMS API detected. Running in standalone mode (localStorage fallback).');
  } else {
    console.info('[SCORM] Connected to LMS API.');
  }
})(window);
