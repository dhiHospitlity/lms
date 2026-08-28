# Module 2. Revenue Tracking Segmentation · Narration Script

**Target build:** [modules/module2-segmentation.html](../../modules/module2-segmentation.html)
**Voice:** Charlotte, ElevenLabs (ID `XB0fDUnXU5powFXDhCwa`) · playbackRate 1.0 · preservesPitch on
**Model:** `eleven_multilingual_v2` · `stability: 0.5 · style: 0.45 · similarity_boost: 0.75 · speaker_boost: on`
**Pace target:** 145 wpm · **Total runtime target:** 14-18 min content · 5-6 min assessment

**Rules for the voice-render pipeline (per [tone-rubric.md](./tone-rubric.md)):**
1. Numbers written as words. "One hundred and thirteen dollars," not "$113."
2. No em-dashes in this file. Use full stops or commas.
3. `[pause N.Ns]` markers are honoured as silent gaps between MP3 clips (`interCueGap` in Cueline).
4. Cue IDs map directly to `Cueline.register(slideIdx, [...])` in the HTML.
5. **Pronunciation:** BAR = "bar" (one word, never spelled out). **Dusit = "DOO-sit" (handled automatically by the pipeline's `PRONUNCIATION_OVERRIDES` map, do NOT spell it phonetically here).** PMS / CRS / RMS / OTA / GDS = letters spelled out ("P-M-S," "O-T-A"). MICE = "mice." RevPAR = "rev-par." Market/source codes = full names in audio (Loyalty Program, E-Commerce, Transient Corporate, etc.), never letter-spelled. Booking.com / dusit.com = read as-is (never "dot com"). See [tone-rubric.md](./tone-rubric.md) for the full override table + how to add more.
6. Register: measured, warm, senior-colleague-explaining. Flat-to-warm energy.

---

## Slide 0 (s-hook). A forecast that lied

### Reading text (~32 sec)

> The Revenue Manager, in Monday's review. "We're behind on groups versus last year."
>
> [pause 0.7s]
>
> The Director of Sales. "That can't be right. We have two groups on the books this month."
>
> [pause 0.6s]
>
> The Revenue Manager. "Let me check."
>
> [pause 0.9s]
>
> "Both groups were tracked under Transient Corporate. The group number looks empty. The transient number is inflated."
>
> [pause 1.0s]
>
> By the end of this module, your team will know exactly which code goes where. And why the data has to tell the truth.

### Cue map

| # | Action  | Target    | Spoken line |
|---|---------|-----------|-------------|
| 0 | reveal  | bubble-1  | The Revenue Manager, in Monday's review. We're behind on groups versus last year. |
| 1 | reveal  | bubble-2  | The Director of Sales. That can't be right. We have two groups on the books this month. |
| 2 | reveal  | bubble-3  | The Revenue Manager. Let me check. |
| 3 | reveal  | bubble-4  | Both groups were tracked under Transient Corporate. The group number looks empty. The transient number is inflated. |
| 4 | reveal  | headline  | By the end of this module, your team will know exactly which code goes where. And why the data has to tell the truth. |

**Actor notes:** Three voices, each a different register. Revenue Manager factual (opening the review), Director of Sales sharper ("That can't be right"), Revenue Manager realising ("Let me check") then landing the diagnosis flat. Headline arrives after a full second of silence, deliberate landing. No acronyms in this slide's audio; the module hasn't taught the codes yet.

---

## Slide 1 (s-0). Overview

<!-- (Slide index 1 in the runtime, after the hook.) -->

### Reading text (~26 sec)

> Welcome to Module 2. Tracking segmentation.
>
> [pause 0.6s]
>
> Every booking Dusit takes lives inside four tracking fields. Get them right and every report, every forecast, every rate decision runs on clean data.
>
> [pause 0.6s]
>
> Market Segment. Source Code. Origin Code. Country of Residence. Four fields. One story per booking.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate |.      | Welcome to Module 2. Tracking segmentation. |
| 1 | narrate |.      | Every booking Dusit takes lives inside four tracking fields. Get them right and every report, every forecast, every rate decision runs on clean data. |
| 2 | lit     | card-1 | Market Segment. |
| 3 | lit     | card-2 | Source Code. |
| 4 | lit     | card-3 | Origin Code. |
| 5 | lit     | card-4 | Country of Residence. |
| 6 | narrate |.      | Four fields. One story per booking. |

---

## Slide 2 (s-1). What is Tracking Segmentation?

### Reading text (~24 sec)

> Every booking has a story.
>
> [pause 0.5s]
>
> When a reservation comes in, two things happen. Someone books a room. Someone stays in it. Often not the same person.
>
> [pause 0.6s]
>
> Tracking records both sides. Booking-side and guest-side. Together they tell the complete story of the reservation.

### Cue map

| # | Action  | Target  | Spoken line |
|---|---------|---------|-------------|
| 0 | narrate |.       | Every booking has a story. |
| 1 | narrate |.       | When a reservation comes in, two things happen. Someone books a room. Someone stays in it. Often not the same person. |
| 2 | reveal  | diagram | Tracking records both sides. Booking-side and guest-side. |
| 3 | narrate |.       | Together they tell the complete story of the reservation. |

---

## Slide 3 (s-1b). Who Books

### Reading text (~32 sec)

> Who books the room? Not always the person who stays.
>
> [pause 0.5s]
>
> A travel agent books for the guest via GDS. Commissioned.
>
> [pause 0.4s]
>
> A company travel desk books an employee at a negotiated rate.
>
> [pause 0.4s]
>
> A guest books through Booking.com, Agoda or Expedia. Retail rate.
>
> [pause 0.6s]
>
> The market code says who is booking. The source code says how they got there.

### Cue map

| # | Action  | Target  | Spoken line |
|---|---------|---------|-------------|
| 0 | narrate |.       | Who books the room? Not always the person who stays. |
| 1 | reveal  | card-1  | A travel agent books for the guest via GDS. Commissioned. |
| 2 | reveal  | card-2  | A company travel desk books an employee at a negotiated rate. |
| 3 | reveal  | card-3  | A guest books through Booking.com, Agoda or Expedia. Retail rate. |
| 4 | narrate |.       | The market code says who is booking. The source code says how they got there. |

---

## Slide 4 (s-1c). Who Stays

### Reading text (~34 sec)

> Now the other side. Who actually stays in the room.
>
> [pause 0.5s]
>
> A family on leisure. Three to five nights. Retail segment.
>
> [pause 0.3s]
>
> A business traveller. One or two nights. Corporate segment.
>
> [pause 0.3s]
>
> Airline crew. Contracted block. Recurring stays under AIRCW.
>
> [pause 0.3s]
>
> A tour group booked through a wholesaler. Coded as GTOUR.
>
> [pause 0.5s]
>
> Different guest, different profile. The right tracking fields keep the data honest.

### Cue map

| # | Action  | Target  | Spoken line |
|---|---------|---------|-------------|
| 0 | narrate |.       | Now the other side. Who actually stays in the room. |
| 1 | reveal  | card-1  | A family on leisure. Three to five nights. Retail segment. |
| 2 | reveal  | card-2  | A business traveller. One or two nights. Corporate segment. |
| 3 | reveal  | card-3  | Airline crew. Contracted block. Recurring stays under the Airline Crew market code. |
| 4 | reveal  | card-4  | A tour group booked through a wholesaler. Coded as Tour Group. |
| 5 | narrate |.       | Different guest, different profile. The right tracking fields keep the data honest. |

---

## Slide 5 (s-2). Market Segment · Overview

### Reading text (~22 sec)

> The Market Segment is the first tracking field. It captures who is booking and why.
>
> [pause 0.5s]
>
> Dusit organises segments into six major groups. Thirteen segments underneath. Forty codes underneath those.
>
> [pause 0.6s]
>
> Click any group to see the segments and codes it holds.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate |. | The Market Segment is the first tracking field. It captures who is booking and why. |
| 1 | narrate |. | Dusit organises segments into six major groups. Thirteen segments underneath. Forty codes underneath those. |
| 2 | narrate |. | Click any group to see the segments and codes it holds. |

**Actor notes:** This slide's teaching payload is the interactive drill-down. Narration is brief, it invites the learner to explore. Do not read out the six groups here.

---

## Slide 6 (s-6). Source Codes

### Reading text (~18 sec)

> The Source Code is the second tracking field. It captures the exact channel the booking came through.
>
> [pause 0.5s]
>
> Website. Phone. Walk-in. GDS terminal. OTA. Group booking desk. Each has its own code.
>
> [pause 0.5s]
>
> Click a group to see the codes.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate |. | The Source Code is the second tracking field. It captures the exact channel the booking came through. |
| 1 | narrate |. | Website. Phone. Walk-in. G-D-S terminal. O-T-A. Group booking desk. Each has its own code. |
| 2 | narrate |. | Click a group to see the codes. |

---

## Slide 7 (s-7). Origin Codes

### Reading text (~14 sec)

> The Origin Code is the third tracking field. It answers one question.
>
> [pause 0.4s]
>
> Did the booking come direct, or through an intermediary? Two codes. D-I-R for direct. I-N-D for indirect.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate |. | The Origin Code is the third tracking field. It answers one question. |
| 1 | narrate |. | Did the booking come direct, or through an intermediary? Two codes. Direct. And indirect. |

---

## Slide 8 (s-8). Country of Residence

### Reading text (~30 sec)

> The fourth tracking field. Country of Residence.
>
> [pause 0.5s]
>
> Not where the guest is from. Where they currently live.
>
> [pause 0.5s]
>
> A French national living in Singapore books a room. Passport French. Residence Singapore. Enter S-G, not F-R.
>
> [pause 0.5s]
>
> Common mistakes. Spain is E-S, not S-P. France is F-R, not F. United Kingdom is G-B, not U-K. Two-letter codes following I-S-O standards.
>
> [pause 0.5s]
>
> Ask at the time of booking. What country are you currently based in?

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate |.      | The fourth tracking field. Country of Residence. |
| 1 | narrate |.      | Not where the guest is from. Where they currently live. |
| 2 | reveal  | card-1 | A French national living in Singapore books a room. Passport French. Residence Singapore. Enter S-G, not F-R. |
| 3 | reveal  | card-2 | Common mistakes. Spain is E-S, not S-P. France is F-R, not F. United Kingdom is G-B, not U-K. Two-letter codes following I-S-O standards. |
| 4 | reveal  | card-3 | Ask at the time of booking. What country are you currently based in? |

---

## Slide 9 (s-9). The 6 Golden Rules

### Reading text (~50 sec)

> Six rules that keep every Dusit property's data clean and consistent.
>
> [pause 0.5s]
>
> One. The market code must match in P-M-S, C-R-S, and R-M-S. All three systems, every time.
>
> [pause 0.4s]
>
> Two. D-L-O-Y-A-L is only for Dusit Gold loyalty. No other use.
>
> [pause 0.4s]
>
> Three. All O-T-A rates use E-C-O-M-M. No exceptions.
>
> [pause 0.4s]
>
> Four. Keep it simple. The main reason defines the whole stay.
>
> [pause 0.4s]
>
> Five. Free-of-charge rooms in a group take the same code as the core business.
>
> [pause 0.4s]
>
> Six. The market code is set at booking. It never changes. Not for groups. Not for anyone.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate |.      | Six rules that keep every Dusit property's data clean and consistent. |
| 1 | reveal  | rule-0 | One. The market code must match in P-M-S, C-R-S, and R-M-S. All three systems, every time. |
| 2 | reveal  | rule-1 | Two. The Loyalty Program market code is only for Dusit Gold members. No other use. |
| 3 | reveal  | rule-2 | Three. All OTA bookings use the E-Commerce market code. No exceptions. |
| 4 | reveal  | rule-3 | Four. Keep it simple. The main reason defines the whole stay. |
| 5 | reveal  | rule-4 | Five. Free-of-charge rooms in a group take the same code as the core business. |
| 6 | reveal  | rule-5 | Six. The market code is set at booking. It never changes. Not for groups. Not for anyone. |

---

## Slide 10 (s-10). Do / Don't

### Reading text (~44 sec)

> Guardrails for every shift.
>
> [pause 0.5s]
>
> The dos. Set the market code at booking and leave it. Use E-C-O-M-M for every O-T-A booking without exception. Make the market code match across P-M-S, C-R-S, and R-M-S. Ask where the guest lives, not where they're from. And keep complimentary rooms in a group under the group's own code.
>
> [pause 0.7s]
>
> The don'ts. Never change the market code after booking. Never use D-L-O-Y-A-L for anything but a Dusit Gold rate. Never use A-C-T. That's Finance department only. Never guess the country code. Check the I-S-O list. And never leave a tracking field blank. Incomplete records corrupt every downstream report.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate |.     | Guardrails for every shift. |
| 1 | reveal  | dos   | The dos. Set the market code at booking and leave it. Use the E-Commerce code for every OTA booking without exception. Make the market code match across P-M-S, C-R-S, and R-M-S. Ask where the guest lives, not where they're from. And keep complimentary rooms in a group under the group's own code. |
| 2 | reveal  | donts | The don'ts. Never change the market code after booking. Never use the Loyalty code for anything but a Dusit Gold rate. Never use the Finance-only Accounts Transfer code, which is Finance department only. Never guess the country code. Check the I-S-O list. And never leave a tracking field blank. Incomplete records corrupt every downstream report. |

---

## Slide 11 (s-11). Quick Checklist

### Reading text (~30 sec)

> Five statements. Tick each one you can confidently say is true.
>
> You can name the four tracking fields.
>
> You know that D-L-O-Y-A-L is Gold members, and E-C-O-M-M is all O-T-A bookings.
>
> Market codes are set at booking. They never change.
>
> You know the difference between D-I-R and I-N-D origin codes.
>
> Country of Residence uses I-S-O codes. Where the guest lives.
>
> [pause 0.6s]
>
> Tick all five, then the quiz unlocks.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate |.     | Five statements. Tick each one you can confidently say is true. |
| 1 | reveal  | chk-1 | You can name the four tracking fields. |
| 2 | reveal  | chk-2 | You know that the Loyalty code is for Gold members, and the E-Commerce code is for all OTA bookings. |
| 3 | reveal  | chk-3 | Market codes are set at booking. They never change. |
| 4 | reveal  | chk-4 | You know the difference between Direct and Indirect origin codes. |
| 5 | reveal  | chk-5 | Country of Residence uses I-S-O codes. Where the guest lives. |
| 6 | narrate |.     | Tick all five, then the quiz unlocks. |

---

## Slides 12–16 (s-12 to s-16). Quiz Q1–Q5

**No narration.** Silent. Learner reads and answers at their own pace.

---

## Render manifest

**File count:** ~48 cue-level MP3s.

Naming per Cueline convention: `s{slideIdx}-c{cueIdx}.mp3`, e.g. `s0-c0.mp3` through `s0-c6.mp3`.

| Slide | Cues | Files |
|-------|------|-------|
| s-0 (Overview)              | 7 | s0-c0 ., s0-c6 |
| s-1 (What is Tracking)      | 4 | s1-c0 ., s1-c3 |
| s-2 (Who Books)             | 5 | s2-c0 ., s2-c4 |
| s-3 (Who Stays)             | 6 | s3-c0 ., s3-c5 |
| s-4 (Market Segment)        | 3 | s4-c0 ., s4-c2 |
| s-5 (Source Codes)          | 3 | s5-c0 ., s5-c2 |
| s-6 (Origin Codes)          | 2 | s6-c0 ., s6-c1 |
| s-7 (Country of Residence)  | 5 | s7-c0 ., s7-c4 |
| s-8 (Golden Rules)          | 7 | s8-c0 ., s8-c6 |
| s-9 (Do/Don't)              | 3 | s9-c0 ., s9-c2 |
| s-10 (Checklist)            | 7 | s10-c0 ., s10-c6 |
| s-11..s-15 (Quiz Q1–Q5)     | 0 |. |

**Total:** ~52 cues · ~3,800 characters spoken. Roughly 4% of Charlotte's monthly Creator quota. Total runtime at 145 wpm ≈ 4–5 minutes of continuous audio inside the ~20-minute module envelope (rest is dwell + drill-down interaction + quiz).

**Re-render triggers:** any change to a **Spoken line** field above re-renders that one cue's MP3. Cache is text-hash driven.
