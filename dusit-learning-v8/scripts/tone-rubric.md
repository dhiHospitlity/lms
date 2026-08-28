# Dusit LMS · Tone & Voice Rubric

**Purpose:** Locks the register, vocabulary, on-slide copy discipline, audio-to-slide relationship, typography, and reveal-pattern rules established during Module 1 build so every subsequent module (Module 2 Segmentation onward) reads as one cohesive programme.

**Status:** Extracted from Module 1 build · Approved 2026-08-28 · Applied module-wide from Module 2 onward.

---

## Register

- "Senior colleague explaining something." Measured, warm, factual.
- Never sales-y, never preachy, never a corporate-training register.
- Flat-to-warm energy. No rising intonation on statements, no enthusiasm lift on numbers.

## Audience

- **Directors** — GM / DOS / DOR / DOM. Not front desk associates.
- Second-person addresses **the director**. The team (frontline) is referred to as **"the team," "the desk," "the front desk," "your team,"** never "you."
- Commercial decisions belong to the reader; operational actions belong to the team.

## Vocabulary — locked terms

| Term | Rule |
|---|---|
| **BAR** | Always caps on-slide. **Spoken as "bar" (one word), never spelled out.** |
| **PMS · CRS · RMS · OTA · GDS · FIT · ISO** | System/industry acronyms. Always caps on-slide. Spelled out letter-by-letter in audio ("P-M-S", "O-T-A"). |
| **Market-segment / source codes** (`DLOYAL`, `ECOMM`, `CORPP`, `GCORP`, `DIR`, `IND`, `ACT`, `AIRCW`, `GTOUR`, `CCT`, etc.) | **Audio:** speak the full name always ("Loyalty code", "E-Commerce code", "Transient Corporate", "Corporate Group", "Direct", "Indirect", "Accounts Transfer code", "Airline Crew", "Tour Group", "Channel Manager"). Never the letters. **On slide:** use the friendly name on teaching-narrative slides (hook, overview, what-is, golden rules, do/don't, checklist). Code letters remain visible **only** on data cards teaching the identifier (Who Books MARKET/SOURCE), drill-down state-machines, and quiz stems + feedback. |
| **MICE** | Spoken as "mice" (word). |
| **RevPAR** | Spoken as "rev-par". |
| **Tracking field** | For the four Dusit data fields (market segment, source, origin, country of residence). |
| **Market code / segment code** | Never "tag". |
| **Segment** | The concept. Specific codes ("DLOYAL", "ECOMM") named only when the slide teaches them. |
| **Guest** | Not "customer". |
| **Booking.com · dusit.com** | Written as-is. Read naturally in audio — never spell out "dot com". |
| **Dusit** | Pronounced "DOO-sit". |

## Sentence rhythm

- Short → medium → short. Declarative sentences.
- **No em-dashes** in on-screen text or in the audio script (they break TTS pacing).
- **No italic** for emphasis anywhere. Use weight and color contrast instead.
- Numbers written as words in the audio script only ("one hundred and thirty-three"). On-slide stays as digits ("$133").

## On-slide copy budget

- Card labels: **2-4 words**
- Card descriptions: **5-8 words**
- Body lines: **8-12 words max**
- Panel eyebrow (uppercase label): 10-11px, 700 weight, gold
- One key principle per pillar / concept slide — one sentence
- **Never verbose paragraphs on the slide.** The audio carries the explanation.

## Audio ↔ slide relationship

**The audio expands what's on the slide. It never repeats the on-slide copy verbatim.**

- Slide shows the concept (short); audio narrates the reasoning (fuller).
- Captions match the audio, word for word — not the on-slide text.
- **Discipline:** whatever gets trimmed off the slide is owed back in the audio script.

## Reveal pattern (Cueline)

- **3–8 beats per slide.**
- Elements carry `data-cue="target-key"` and reveal on cue.
- Content reveals in beats synced to audio, never appears all at once.
- Auto-advance to next slide 1.8s after final beat lands — content slides only.
- Quiz, KC, close slides never auto-advance.
- Interactive drill-downs (state machines) are one beat — the drill-down IS the interaction.

## Typography scale (5 tiers)

| Tier | Size | Weight | Family | Use |
|---|---|---|---|---|
| Eyebrow | 10-11px | 700 uppercase | DusitDisplay | Panel labels, section tags |
| Body | 13px | 400-500 | DusitText | Slide copy, card descriptions |
| Slide heading | 22px | 800 | DusitDisplay | Pillar names, `.sh`, `.deep-title` |
| Price / number | 26px | 800 | DusitDisplay | `$113`, `.ov-num` |
| Deep number | 44px | 800 | DusitDisplay | `01` `02` `03` on pillar left panels |

## Voice roster (locked 2026-08-28)

British accent is the anchor. Two voices rotate module-to-module so learners never sit with the same voice back-to-back across a 40+ module programme.

| Role | Voice | ElevenLabs ID | Character |
|---|---|---|---|
| Primary female | **Charlotte** | `XB0fDUnXU5powFXDhCwa` | Soft British female, deliberate cadence, warm |
| Primary male | **George** | `JBFqnCBsd6RMkjVDRZzb` | Warm British baritone, senior-colleague register |

**Deployment:** *Alternate primary voice per module.*
- Module 1 (Rate Architecture): Charlotte ✓
- Module 2 (Tracking Segmentation): Charlotte ✓
- Module 3 (OTA1 · Distribution Basic Knowledge): **George**
- Module 4: Charlotte
- Module 5: George
- …continue.

**Multi-voice within one module** — allowed for dialogue slides. Use the per-cue `[voice:name]` tag in `narration.md`:

```
| 0 | reveal | bubble-1 | [voice:charlotte] The Revenue Manager. We're behind on groups. |
| 1 | reveal | bubble-2 | [voice:george] The Director of Sales. That can't be right. |
```

Text hashes include voice ID, so voice swaps invalidate cache correctly.

**Common voice settings (applies to all roster voices):**
- **Model:** `eleven_multilingual_v2`
- **voice_settings:** `stability: 0.5, style: 0.45, similarity_boost: 0.75, use_speaker_boost: true`
- **Server speed:** native (v2 does not support `voice_settings.speed`)
- **Cueline `playbackRate`:** 1.0 default. Per-slide overrides via `slidePlaybackRates` map for slides that read too fast/flat.
- **`interCueGap`:** 400ms between chained cues.
- **Render discipline:** all cues in one continuous pass per module. Eliminates inter-session variation.

**Module-to-voice mapping** lives in `MODULE_VOICES` inside [../build-pipeline/build_audio.js](../build-pipeline/build_audio.js). Adding a new module = adding its entry to that map.

---

## Pronunciation overrides — automated at render time

Any word ElevenLabs mispronounces gets a phonetic respell in the pipeline, applied ONLY to the text sent to the API. Captions, on-slide copy, and narration source keep the correct spelling.

**Source of truth:** [../build-pipeline/build_audio.js](../build-pipeline/build_audio.js) — `PRONUNCIATION_OVERRIDES` array. The text hash computes over the preprocessed output, so future overrides only invalidate cues that actually contain the affected word (not the whole module).

**Locked overrides (2026-08-28):**

| Written | Sent to ElevenLabs | Notes |
|---|---|---|
| `Dusit` | `Doo-sit` | Default reads as "DEW-sit"; brand is "DOO-sit" |

**How to add a new override:**

1. Append `{ pattern: /\bWord\b/g, replacement: 'Fone-tik' }` to the `PRONUNCIATION_OVERRIDES` array in `build_audio.js`
2. Run `node build_audio.js <module>` — cache invalidates only for cues containing that word
3. Document the addition in the table above

**Do not** hand-edit narration scripts or module HTML to spell words phonetically — that pollutes captions and on-slide copy. Use the pipeline override.

---

## How to apply

Before writing any narration script or trimming any slide copy in a new module, cross-check against this rubric. Deviations require explicit approval — do not "improve" the register, the pacing, or the vocabulary without asking.

When drafting per-module narration (`dusit-learning-v8/scripts/moduleN-narration.md`), include the pronunciation table at the top of the file so the ElevenLabs pipeline honours it consistently. Actual pronunciation rendering is handled automatically by the pipeline override; the table is human-reference.
