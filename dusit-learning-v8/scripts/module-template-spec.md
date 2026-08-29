# Dusit LMS module template — canonical shell for all 40+ modules

**Status:** Locked 2026-08-28 after Module 1 (Rate Architecture) and Module 2 (Tracking Segmentation) shipped. Every new module clones from the most recent shipped module. Deviations from this shell require sign-off from Prakash.

**Sister docs:**
- [tone-rubric.md](tone-rubric.md) — voice, vocabulary, on-slide copy rules
- [brand-tokens.md](brand-tokens.md) — color palette + typography scale
- [dusit-rate-constants.md](dusit-rate-constants.md) — locked figures used across modules

## Canonical module arc

```
[Hook (optional)]  →  [Content slides]  →  [Checklist gate]  →  [Quiz]  →  [Summary]
        1                   3–15                  1                5           1
```

| Slot | Duration | Auto-advance | Notes |
|---|---|---|---|
| Hook | 30–90 s | No | Cold open, dialogue bubbles, or animated sequence. Not gated. |
| Locator | 30–45 s | Yes | "Where this sits" — reusable across modules within a track (e.g. OTA track uses strategy wheel with different wedges lit). |
| Concept | 60–120 s | Yes | One teaching point per slide. Card grid or split panel. |
| Interaction | 90–180 s | No | Drill-down / drag / branching. Add to `noAutoAdvanceSlides`. |
| Transition | 20–30 s | Yes | Full-bleed navy section marker. |
| Checklist | 60–90 s | No | 5 statements + all content slides visited = quiz unlocks. |
| Quiz | 60–90 s / question | No | 5 questions, one per slide, immediate per-option feedback. 60% pass (3 of 5). |
| Summary | 30–60 s | No | One-line takeaway + retry / next-module CTA. |

## Runtime — Cueline

Shared narration-synced staging engine. Same code in every module. Bug fixes ripple across all modules; do not fork per module.

```js
Cueline.register(slideIdx, [
  { do:'narrate', target:null,       cc:'Spoken line, verbatim from narration.md' },
  { do:'reveal',  target:'card-1',   cc:'...' },
  { do:'lit',     target:'card-2',   cc:'...' },
  { do:'pulse',   target:'.ov-grid', cc:'...' },
  { do:'reveal',  target:'card-3',   cc:'...', voice:'george' }  // per-cue voice override
]);
```

**Config:**
- `interCueGap: 400` — ms between chained cues
- `slidePlaybackRates: { 0: 0.85, 1: 0.85 }` — per-slide playback speed override
- `noAutoAdvanceSlides: new Set([5,6,7,11])` — indices that don't auto-advance
- `autoAdvanceMaxSlide: CONTENT_END - 1` — halts auto-advance at the checklist

**Actions:**
- `narrate` — audio only, no DOM effect
- `reveal` — element with `data-cue="target-key"` fades/slides in
- `lit` — element highlights (usually a card in a grid)
- `pulse` — element pulses (attention only)

## Sidebar

Left-side nav, same shell in every module. Only labels change.

- Top: series eyebrow (e.g. "REVENUE & COMMERCIAL")
- Module label: "MODULE X · <TITLE>" (uppercase, gold)
- Section markers (uppercase, letter-spaced, muted)
- Per-slide items: lock icon → progress dot → active highlight
- Quiz item locked until `quizUnlocked = true`
- Footer: "Complete all content slides and tick the checklist to unlock the quiz."

## Transport bar (fullscreen)

Bottom-right, common to every module:
- ▶ / ⏸ — Play / Pause narration (`Cueline.toggleTransport()`)
- ⏭ — Skip to next beat (`Cueline.step()`)
- CC — Toggle captions (`Cueline.toggleCC()`)
- ✕ — Exit fullscreen (`toggleFS()`)
- Keyboard: **Space** = play/pause, **ESC** = exit

## Interactive patterns (reuse; don't invent)

- **State-machine drill-down** — `hvRender()` pattern. Root → group → item, 2 or 3 layers. Back button on non-root levels. Owner slide goes in `noAutoAdvanceSlides`.
- **Drag-and-drop** — practice-only, ungraded. All items placed before Continue activates. Feedback per drop.
- **Branching decision** — sequential stages, unlimited retries, feedback per option.
- **Knowledge check** — 2–3 questions before graded quiz, unlimited attempts, all correct to proceed.

## Scaffold checklist (starting a new module)

1. **Clone the shell** from the most recent shipped module — currently [modules/module2-segmentation.html](../../modules/module2-segmentation.html).
2. **Update header block:**
   - `SLIDE_IDS` — array of slide DOM ids
   - `N` — total slide count
   - `CONTENT_END` — index of the checklist slide
   - `QUIZ_START` — index of Q1
   - `noAutoAdvanceSlides` — interactive/quiz slide indices
   - `slidePlaybackRates` — per-slide TTS pacing overrides
3. **Update sidebar** — series/module labels, section markers, per-slide labels.
4. **Update SCORM registry** — add entry to `MODULES` map in [build_scorm.js](../build-pipeline/build_scorm.js):
   ```js
   moduleN: {
     identifier: 'dusit_moduleN_slug',
     title:      'Module N — Human Title',
     htmlPath:   'modules/moduleN-slug.html',
     masteryScore: 60,
     duration:   'PT20M'
   }
   ```
5. **Register voice** — add entry to `MODULE_VOICES` map in [build_audio.js](../build-pipeline/build_audio.js). Alternate M/F per module.
6. **Write narration.md** — at `dusit-learning-v8/scripts/<moduleKey>-narration.md`. Follow the tone rubric. Cue map format:
   ```
   | # | Action  | Target | Spoken line |
   |---|---------|--------|-------------|
   | 0 | narrate |.      | Text |
   | 1 | reveal  | card-1 | [voice:george] Text |
   ```
7. **Single-cue audio test** — render just one cue to confirm voice + pronunciation before full run.
8. **Render full audio** — `node build_audio.js <moduleKey>`.
9. **Update landing tile** — [index.html](../../index.html) TRACKS map. Status flow: `soon` → `wip` → `live`.
10. **Build SCORM zip** — `node build_scorm.js <moduleKey>` → `dist/scorm/<moduleKey>-scorm12.zip`.
11. **Commit + push** — GitHub Pages deploys to `lmsdusit.dhihospitality.com`.

## Content-slide design patterns (locked 2026-08-29 after Module 3 Section 1)

**Light-only backgrounds.** Every slide sits on white or `--g50`. Never full-bleed navy or dark. Navy is text and accent only.

**Vertically centered content.** `.s-inner` and `.slide` use `justify-content: center` by default. Content sits balanced in the ~430px between the top of the canvas and the 110px CC safe zone.

**Reveal is a one-shot pulse.** `.reveal` triggers a 1.4s `@keyframes revealPulse` (subtle gold glow, brief lift, return to rest). Never a persistent shadow — that just accumulates highlight noise.

**Per-cue staggered reveals for lists.** For any set the narration walks through item-by-item, split into individual `data-cue="item-1"`…`item-N` targets. Cueline fires each element together with its matching narration beat (share the data-cue value between the SVG element and the list row so they light in sync). See slide 1 (s-loc) — the six strategy wheel wedges + numbered list rows.

**Vertical column split with gold gradient dividers.** For compare (B2C vs B2B) or progression (Past → Today → Impact) slides, use a grid with 1px–3px gold-gradient vertical dividers between columns rather than tinted card backgrounds. Divider fades at top and bottom: `linear-gradient(to bottom, transparent 0%, var(--gold) 15%, var(--gold) 85%, transparent 100%)`. Content on white; differentiation via typography. `min-height` on header rows keeps columns aligned when titles wrap.

**Mini-diagram + looping CSS animation per column.** Where a concept has a visual metaphor (parallel lanes, crossing lanes, a leaking rail), build a small SVG (≤180×90 viewport) into each column and animate what's happening with CSS `@keyframes` on the elements. Continuous loop, `transform: translate(x,y)`, fade at edges. Slide 4 is the reference.

**Column order — label, text, animation.** In a multi-column layout with diagrams, each column reads top-to-bottom: label (01 · PAST) → text description → animation. Never diagram first.

**Uniform cards in a single inline flow.** When showing a sequence of things a booking touches (OTA → Channel Manager → CRS → Opera), all boxes get identical size, style, border weight — white bg with matching navy border, gold arrows between each pair. No visual hierarchy between peers.

**Hero visuals for anchor moments.** The hook, the summary, and any slide that opens or closes an arc gets a prominent visual — sized ~2× a normal card, with real device-shape details where applicable (rounded corners, notch, home indicator, drop shadow, live-looking content). Slide 0's phone is the reference. Not on every slide — punctuation, not sentence.

**"Premium" content-slide pattern** (multi-item concept slide): h2 title (no section eyebrow above), optional gold-l definition callout at top, 2×N card grid with white cards + gold left rule + numbered gold uppercase eyebrow ("Family 01", "Segment 01"), plain-text closer beneath. See slide 2 (s-def) — the four channel families.

**Standalone callouts get plain text, not gold-rule containers.** The gold left rule is functional on card *grids* (rhythm across a set) but decorative on solo takeaways / pull-quotes / one-liners. Plain centered text — muted body colour with the emphasized phrase in bold navy — is the default for takeaways.

**No section eyebrow above every slide's title.** The sidebar carries the section. Only use an eyebrow when it's a functional signal specific to the slide ("Before the quiz", "Take-away", the module-tag on the hook).

## What NOT to change per module

- Canvas size (900 × 540)
- Brand tokens (see [brand-tokens.md](brand-tokens.md))
- Cueline runtime (fixes ripple; don't fork)
- Sidebar shell (labels only)
- Transport bar
- SCORM wrapper (`scorm-api.js`)
- Voice settings (`stability: 0.5 / style: 0.45 / similarity_boost: 0.75`)
- Pronunciation overrides (add to `build_audio.js`, never inline per-module)

## What CHANGES per module

- Slide content, count, section groupings
- Which voice is primary (alternate M/F — see rotation in `MODULE_VOICES`)
- Per-slide playback rates
- Interactive-slide indices
- Quiz Qs, answers, feedback
- Checklist statements
- Module registry entries in `build_scorm.js` + `MODULE_VOICES`
