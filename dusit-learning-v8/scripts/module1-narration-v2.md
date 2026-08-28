# Module 1 — Rate Architecture · Narration Script v2 (24-slide build)

**Target build:** `dusit-learning-v8/docs/dusit_module1_rate_architecture.html`
**Supersedes:** `module1-narration.md` (v1 was the 14-slide earlier build)
**Voice:** Charlotte, ElevenLabs (ID `XB0fDUnXU5powFXDhCwa`) · playbackRate 0.9 · preservesPitch on
**Pace target:** 145 wpm · **Total runtime target:** 15:30 content + 5:30 assessment + 1:00 close

## Rules for the voice-render pipeline

1. **Numbers written as words.** `$113` → "one hundred and thirteen dollars." `−15%` → "fifteen percent off." Never speak `.05` or similar; the rounded display value is always the spoken value.
2. **No em-dashes in this file.** They render as unpredictable pauses in TTS. Use full stops or commas.
3. **`[pause N.Ns]` markers** are honoured as silent gaps between MP3 clips (`interCueGap` in the Cueline runtime).
4. **Cue IDs** map directly to `Cueline.register(slideIdx, [...])` entries in the HTML.
5. **Pronunciation:** Dusit = "DOO-sit" · BAR = spoken as "bar" · DLOYAL = "D-loyal" · DBRRT = "D-B-R-R-T" spelled out · SynXis = "SIN-ziss" · OTA/GDS/FIT = letters · MICE = "mice" · RevPAR = "rev-par."
6. **Register:** measured and warm. A senior colleague explaining something. Flat-to-warm energy, no upward inflection on statements or enthusiasm lift on numbers.

---

## Slide 1 (s-0) — Hook · A guest just caught you out

### Reading text (~34 sec)

> A guest at check-in shows the front desk her phone.
>
> [pause 0.8s]
>
> She says: I checked on Booking.com and the rate is cheaper than what you just quoted me.
>
> [pause 0.8s]
>
> The associate replies: Ah, yes, OTA rates can be different sometimes.
>
> [pause 0.8s]
>
> The guest asks: Why? It is the same room.
>
> [pause 1.0s]
>
> By the end of this module, your team will know exactly how to answer that.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | —      | A guest at check-in shows the front desk her phone. |
| 1 | narrate | —      | She says: I checked on Booking.com and the rate is cheaper than what you just quoted me. |
| 2 | narrate | —      | The associate replies: Ah, yes, OTA rates can be different sometimes. |
| 3 | narrate | —      | The guest asks: Why? It is the same room. |
| 4 | narrate | —      | By the end of this module, your team will know exactly how to answer that. |

**Actor notes:** The three character lines should shift register slightly — guest inquisitive, associate deflecting, guest sharper on "It is the same room." Not caricatured. Land the headline at a fresh, measured pace.

---

## Slide 2 (s-1) — What rate architecture actually is

### Reading text (~28 sec)

> Before we go anywhere, let's answer the simplest question.
>
> [pause 0.6s]
>
> Rate architecture is the connected pricing system that decides every rate at your hotel, automatically and for a reason.
>
> [pause 0.6s]
>
> Every rate the guest sees, and every rate the hotel earns, comes out of it.
>
> [pause 0.8s]
>
> One distinction to keep clean. The rate is the number on the guest's screen. The net is what the hotel keeps after commission. Right Channel walks the numbers.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | —      | Before we go anywhere, let's answer the simplest question. |
| 1 | reveal  | def-1  | Rate architecture is the connected pricing system that decides every rate at your hotel, automatically and for a reason. |
| 2 | reveal  | def-2  | Every rate the guest sees, and every rate the hotel earns, comes out of it. |
| 3 | reveal  | def-3  | One distinction to keep clean. The rate is the number on the guest's screen. The net is what the hotel keeps after commission. Right Channel walks the numbers. |

---

## Slide 3 (s-2) — The five questions

### Reading text (~48 sec)

> So. Let's start with the first thing on the list. The five questions every rate answers.
>
> [pause 0.5s]
>
> Revenue management is often described as selling at the highest price. That's not quite right.
>
> [pause 0.6s]
>
> The real job is selling to...
>
> [pause 0.3s]
>
> ...the right guest...
> ...in the right room...
> ...at the right time...
> ...at the right price...
> ...through the right channel.
>
> [pause 0.6s]
>
> Five questions. Every rate at your hotel is an answer to all five. Rate architecture is the system that answers them, automatically. One question at a time.

### Cue map

| # | Action  | Target   | Spoken line |
|---|---------|----------|-------------|
| 0 | narrate | —        | So. Let's start with the first thing on the list. The five questions every rate answers. |
| 1 | narrate | —        | Revenue management is often described as selling at the highest price. That's not quite right. |
| 2 | narrate | —        | The real job is selling to... |
| 3 | lit     | card-1   | ...the right guest... |
| 4 | lit     | card-2   | ...in the right room... |
| 5 | lit     | card-3   | ...at the right time... |
| 6 | lit     | card-4   | ...at the right price... |
| 7 | lit     | card-5   | ...through the right channel. |
| 8 | pulse   | .ov-grid | Five questions. Every rate at your hotel is an answer to all five. Rate architecture is the system that answers them, automatically. One question at a time. |

**Actor notes:** Cues 2–7 are one connected sentence, not eight bullet points. Deliver as an unbroken flow, with the card reveals pacing you. The pause after cue 7 lets the pulse register before the closing thought lands.

---

## Slide 4 (s-3) — Right Guest · Framework

### Reading text (~22 sec)

> Let's start with the first question. The right guest.
>
> [pause 0.5s]
>
> Guest arrives. Segment tag at check-in. Rate applied. That is the whole loop.
>
> [pause 0.5s]
>
> The tag drives the rate, the report, the forecast and the commission. Segments and codes live in Module 2.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | — | Let's start with the first question. The right guest. |
| 1 | narrate | — | Guest arrives. Segment tag at check-in. Rate applied. That is the whole loop. |
| 2 | narrate | — | The tag drives the rate, the report, the forecast and the commission. Segments and codes live in Module 2. |

**Framework panel:** three-box cause-effect diagram (Guest arrives → Segment tag → Rate applied). No taxonomy shown here — that is Module 2's teaching space.

---

## Slide 5 (s-4) — Right Guest · In practice

### Reading text (~32 sec)

> Same standard room. Same night. Two very different guests.
>
> [pause 0.5s]
>
> A Dusit Gold member pays one hundred and thirteen. Fifteen percent off, applied automatically. The system reads the segment tag D-loyal and lands the discount.
>
> [pause 0.5s]
>
> A walk-in tourist has no qualifying account. She pays BAR — one hundred and thirty-three. The system tags her D-B-R-R-T.
>
> [pause 0.6s]
>
> The tag drives the rate, the report, the forecast and the commission. Tag it wrong at check-in and every number downstream is lying.

### Cue map

| # | Action  | Target  | Spoken line |
|---|---------|---------|-------------|
| 0 | narrate | —       | Same standard room. Same night. Two very different guests. |
| 1 | reveal  | card-a  | A Dusit Gold member pays one hundred and thirteen. Fifteen percent off, applied automatically. The system reads the segment tag D-loyal and lands the discount. |
| 2 | reveal  | card-b  | A walk-in tourist has no qualifying account. She pays BAR, one hundred and thirty-three. The system tags her D-B-R-R-T. |
| 3 | reveal  | key     | The tag drives the rate, the report, the forecast and the commission. Tag it wrong at check-in and every number downstream is lying. |

---

## Slide 6 (s-5) — Right Room · Framework

### Reading text (~36 sec)

> Second question. The right room. A Standard room and a Suite are not the same product. The ladder prices each type relative to the derived rate below it.
>
> [pause 0.5s]
>
> Standard room, Gold derived rate. One hundred and thirteen. BAR one hundred and thirty-three, minus fifteen percent.
>
> [pause 0.3s]
>
> Deluxe room. Seventeen dollars on top of the derived rate. One hundred and thirty.
>
> [pause 0.3s]
>
> Suite. Fifty dollars on top. One hundred and sixty-three.
>
> [pause 0.6s]
>
> You might expect the supplement lands on BAR directly. It does not. And the order matters.

### Cue map

| # | Action  | Target   | Spoken line |
|---|---------|----------|-------------|
| 0 | narrate | —        | Second question. The right room. A Standard room and a Suite are not the same product. The ladder prices each type relative to the derived rate below it. |
| 1 | reveal  | rung-std | Standard room, Gold derived rate. One hundred and thirteen. BAR one hundred and thirty-three, minus fifteen percent. |
| 2 | reveal  | rung-dlx | Deluxe room. Seventeen dollars on top of the derived rate. One hundred and thirty. |
| 3 | reveal  | rung-ste | Suite. Fifty dollars on top. One hundred and sixty-three. |
| 4 | narrate | —        | You might expect the supplement lands on BAR directly. It does not. And the order matters. |

---

## Slide 7 (s-6) — Right Room · In practice

### Reading text (~34 sec)

> Two Deluxe rooms tonight. Both walk-ins. Walk-in has no segment discount, so the derived rate is BAR.
>
> [pause 0.5s]
>
> Deluxe King, ocean view, breakfast. One hundred and thirty-three, plus seventeen Deluxe, plus twenty-five ocean, plus ten breakfast. One hundred and eighty-five.
>
> [pause 0.4s]
>
> Deluxe Twin, city view, room only. One hundred and thirty-three, plus seventeen. One hundred and fifty.
>
> [pause 0.5s]
>
> The ladder is one axis, attributes are others. Every supplement stacks on the derived rate, never on BAR.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | —      | Two Deluxe rooms tonight. Both walk-ins. Walk-in has no segment discount, so the derived rate is BAR. |
| 1 | reveal  | card-a | Deluxe King, ocean view, breakfast. One hundred and thirty-three, plus seventeen Deluxe, plus twenty-five ocean, plus ten breakfast. One hundred and eighty-five. |
| 2 | reveal  | card-b | Deluxe Twin, city view, room only. One hundred and thirty-three, plus seventeen. One hundred and fifty. |
| 3 | reveal  | key    | The ladder is one axis, attributes are others. Every supplement stacks on the derived rate, never on BAR. |

---

## Slide 8 (s-7) — Right Time · Framework

### Reading text (~30 sec)

> Third question. The right time. Every segment has a booking signature.
>
> [pause 0.5s]
>
> Business Groups book furthest ahead. Months, sometimes a year out. Wholesale Static contracts sit long too.
>
> [pause 0.4s]
>
> Leisure Groups and Loyalty sit in the middle. Corporate Static books close. Retail Internal, the direct channel, spans the full range.
>
> [pause 0.5s]
>
> Read your property's booking-pace data. Each pillar you build sits on those bars.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | — | Third question. The right time. Every segment has a booking signature. |
| 1 | narrate | — | Business Groups book furthest ahead. Months, sometimes a year out. Wholesale Static contracts sit long too. |
| 2 | narrate | — | Leisure Groups and Loyalty sit in the middle. Corporate Static books close. Retail Internal, the direct channel, spans the full range. |
| 3 | narrate | — | Read your property's booking-pace data. Each pillar you build sits on those bars. |

**Segments in this order:** Business Groups · Wholesale Static · Leisure Groups · Loyalty &amp; Partnership · Retail External (OTA) · Corporate Static · Retail Internal (Direct — variable band). Names verified against the Module 2 taxonomy (6 groups → 13 segments → 40 codes).

---

## Slide 9 (s-8) — Right Time · In practice

### Reading text (~34 sec)

> Same room. Same night. Two conditions.
>
> [pause 0.5s]
>
> Advance Saver, prepaid and inside the advance window. One hundred and twenty. Ten percent off BAR. The guest earned it by committing early.
>
> [pause 0.5s]
>
> Flexible, booked at the desk. One hundred and thirty-three. Full BAR. The hotel carries the cancellation risk, and that risk is priced in.
>
> [pause 0.5s]
>
> Every segment has a booking signature. Read the curve and you know when to hold rate and when to release inventory.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | —      | Same room. Same night. Two conditions. |
| 1 | reveal  | card-a | Advance Saver, prepaid and inside the advance window. One hundred and twenty. Ten percent off BAR. The guest earned it by committing early. |
| 2 | reveal  | card-b | Flexible, booked at the desk. One hundred and thirty-three. Full BAR. The hotel carries the cancellation risk, and that risk is priced in. |
| 3 | reveal  | key    | Every segment has a booking signature. Read the curve and you know when to hold rate and when to release inventory. |

---

## Slide 10 (s-9) — Right Price · Framework

### Reading text (~30 sec)

> Fourth question. The right price. Price is not set. Price is derived.
>
> [pause 0.6s]
>
> Start from BAR. Subtract the segment discount. Add the room supplement. Adjust for yield. Apply the rate-plan condition. That order is the rate.
>
> [pause 0.5s]
>
> And BAR itself moves. Around one hundred and ten on a quiet weekday. Up to two hundred and eighty at peak. Every derived rate follows automatically.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | — | Fourth question. The right price. Price is not set. Price is derived. |
| 1 | narrate | — | Start from BAR. Subtract the segment discount. Add the room supplement. Adjust for yield. Apply the rate-plan condition. That order is the rate. |
| 2 | narrate | — | And BAR itself moves. Around one hundred and ten on a quiet weekday. Up to two hundred and eighty at peak. Every derived rate follows automatically. |

---

## Slide 11 (s-10) — Right Price · In practice

### Reading text (~40 sec)

> Same Deluxe room. Same weekend night. Two guests.
>
> [pause 0.5s]
>
> Gold, Deluxe, weekend, Advance Saver. One hundred and thirty-three, to one hundred and thirteen Gold, to one hundred and thirty Deluxe, to one hundred and forty weekend, then minus ten percent Advance Saver. One hundred and twenty-six.
>
> [pause 0.6s]
>
> Walk-in, Deluxe, weekend, Flexible. One hundred and thirty-three, to one hundred and fifty Deluxe, plus eight percent weekend. One hundred and sixty-two. No discounts.
>
> [pause 0.5s]
>
> Price is not set. It is derived. Wrong order, wrong price.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | —      | Same Deluxe room. Same weekend night. Two guests. |
| 1 | reveal  | card-a | Gold, Deluxe, weekend, Advance Saver. One hundred and thirty-three, to one hundred and thirteen Gold, to one hundred and thirty Deluxe, to one hundred and forty weekend, then minus ten percent Advance Saver. One hundred and twenty-six. |
| 2 | reveal  | card-b | Walk-in, Deluxe, weekend, Flexible. One hundred and thirty-three, to one hundred and fifty Deluxe, plus eight percent weekend. One hundred and sixty-two. No discounts. |
| 3 | reveal  | key    | Price is not set. It is derived. Wrong order, wrong price. |

**Actor notes:** The composition walk-throughs are the pillar's teaching payload. Deliberate cadence between each arrow step. Do not rush.

---

## Slide 12 (s-11) — Right Channel · Framework

### Reading text (~34 sec)

> Fifth question. The right channel. On a one hundred and thirty-three dollar public rate, the guest sees the same number everywhere.
>
> [pause 0.5s]
>
> Direct, dusit.com, phone or walk-in, nets the full one hundred and thirty-three. GDS takes eleven percent, hotel nets one hundred and eighteen. OTA takes eighteen percent, hotel nets one hundred and nine.
>
> [pause 0.5s]
>
> Public rates hold parity. Qualified rates, Gold, corporate, negotiated, sit below by design. See OTA 101 for the full distribution ecosystem.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | — | Fifth question. The right channel. On a one hundred and thirty-three dollar public rate, the guest sees the same number everywhere. |
| 1 | narrate | — | Direct, dusit.com, phone or walk-in, nets the full one hundred and thirty-three. GDS takes eleven percent, hotel nets one hundred and eighteen. OTA takes eighteen percent, hotel nets one hundred and nine. |
| 2 | narrate | — | Public rates hold parity. Qualified rates, Gold, corporate, negotiated, sit below by design. See OTA 101 for the full distribution ecosystem. |

---

## Slide 13 (s-12) — Right Channel · In practice

### Reading text (~28 sec)

> The public rate is the same on both channels. What the hotel keeps is not.
>
> [pause 0.5s]
>
> Direct on dusit.com. One hundred and thirty-three, and the hotel keeps every dollar.
>
> [pause 0.4s]
>
> OTA on Booking.com. One hundred and thirty-three to the guest. Twenty-four to the OTA. Hotel nets one hundred and nine.
>
> [pause 0.5s]
>
> The guest sees one public price. What the hotel keeps changes with every channel.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | —      | The public rate is the same on both channels. What the hotel keeps is not. |
| 1 | reveal  | card-a | Direct on dusit.com. One hundred and thirty-three, and the hotel keeps every dollar. |
| 2 | reveal  | card-b | OTA on Booking.com. One hundred and thirty-three to the guest. Twenty-four to the OTA. Hotel nets one hundred and nine. |
| 3 | reveal  | key    | The guest sees one public price. What the hotel keeps changes with every channel. |

---

## Slide 14 (s-13) — The System · watch BAR move

### Reading text (~34 sec)

> So far we've looked at each question in isolation. Now watch how they connect.
>
> [pause 0.5s]
>
> BAR is the single source of truth. Every derived rate is a fixed relationship to BAR.
>
> [pause 0.6s]
>
> Watch BAR move. One hundred and thirty-three, one hundred and fifty, one hundred and fifteen, one hundred and seventy-five. Every rate at your hotel updates in seconds, with zero manual work. Tap the hub to run it again.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | — | So far we've looked at each question in isolation. Now watch how they connect. |
| 1 | narrate | — | BAR is the single source of truth. Every derived rate is a fixed relationship to BAR. |
| 2 | narrate | — | Watch BAR move. One hundred and thirty-three, one hundred and fifty, one hundred and fifteen, one hundred and seventy-five. Every rate at your hotel updates in seconds, with zero manual work. Tap the hub to run it again. |

**Actor notes:** The animation self-triggers 700 ms after slide entry. Line up beat 2's opening ("BAR is the single source...") with the first hub-firing so caption and pulse are synchronised on Charlotte's natural pace.

---

## Slide 15 (s-14) — Sort the booking

### Reading text (~8 sec)

> Sort the segments by booking window. Longest lead time first, shortest last. Drag to arrange.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | — | Sort the segments by booking window. Longest lead time first, shortest last. Drag to arrange. |

**Actor notes:** Short line, deliberate. Give the learner space to actually drag; the module holds this slide for 1:40 of dwell time.

---

## Slide 16 (s-15) — Do / Don't

### Reading text (~44 sec)

> Guardrails for every shift.
>
> [pause 0.5s]
>
> The dos. Treat rate as a connected system. The team flags any channel mismatch to the RM the moment they see it. The desk codes every booking to a segment at check-in. Every rate has a reason, and the desk can give it.
>
> [pause 0.7s]
>
> The don'ts. No rate changes at the desk without the RM's sign-off. Never assume all channels are aligned, check the live rate before quoting. Nobody quotes from memory. Nobody says that is just how it is.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | —     | Guardrails for every shift. |
| 1 | reveal  | dos   | The dos. Treat rate as a connected system. The team flags any channel mismatch to the RM the moment they see it. The desk codes every booking to a segment at check-in. Every rate has a reason, and the desk can give it. |
| 2 | reveal  | donts | The don'ts. No rate changes at the desk without the RM's sign-off. Never assume all channels are aligned, check the live rate before quoting. Nobody quotes from memory. Nobody says that is just how it is. |

---

## Slide 17 (s-16) — Quick checklist

### Reading text (~40 sec)

> Five statements. Tick each one you can confidently say is true.
>
> You can name the five questions: right guest, right room, right time, right price, right channel.
>
> You understand BAR is the single source of truth all rates link to.
>
> You can explain why different guests pay different rates for the same room.
>
> You know who your team calls when they spot a rate discrepancy between channels.
>
> You know the three rate products: Flexible, Advance Saver at minus ten percent prepaid, and Stay Longer at minus fifteen percent, minimum three nights.
>
> [pause 0.6s]
>
> Tick all five, then pass the three-question check on the next slide. The quiz unlocks after that.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | —     | Five statements. Tick each one you can confidently say is true. |
| 1 | reveal  | chk-1 | You can name the five questions: right guest, right room, right time, right price, right channel. |
| 2 | reveal  | chk-2 | You understand BAR is the single source of truth all rates link to. |
| 3 | reveal  | chk-3 | You can explain why different guests pay different rates for the same room. |
| 4 | reveal  | chk-4 | You know who your team calls when they spot a rate discrepancy between channels. |
| 5 | reveal  | chk-5 | You know the three rate products: Flexible, Advance Saver at minus ten percent prepaid, and Stay Longer at minus fifteen percent, minimum three nights. |
| 6 | narrate | —     | Tick all five, then pass the three-question check on the next slide. The quiz unlocks after that. |

---

## Slide 18 (s-17) — Three checks before the quiz

### Reading text (~10 sec)

> Three checks before the quiz. All three must be right. Retry as many times as you need, this one is ungraded.

### Cue map

| # | Action  | Target | Spoken line |
|---|---------|--------|-------------|
| 0 | narrate | — | Three checks before the quiz. All three must be right. Retry as many times as you need, this one is ungraded. |

---

## Slides 19–23 (s-18 to s-22) — Quiz Q1–Q5

**No narration.** Silent. Learner reads and answers at their own pace. Feedback text renders on submission and is not spoken.

---

## Slide 24 (s-23) — The system is already running

### Reading text (~28 sec)

> The system is already running. Your job is to work with it correctly.
>
> [pause 0.6s]
>
> Every booking your team codes correctly feeds accurate data into the revenue decisions.
>
> [pause 0.4s]
>
> Every rate question your team can answer builds guest trust and cuts escalations.
>
> [pause 0.4s]
>
> Every discrepancy caught early protects the hotel's revenue and its parity.

### Cue map

| # | Action  | Target  | Spoken line |
|---|---------|---------|-------------|
| 0 | narrate | —       | The system is already running. Your job is to work with it correctly. |
| 1 | reveal  | close-1 | Every booking your team codes correctly feeds accurate data into the revenue decisions. |
| 2 | reveal  | close-2 | Every rate question your team can answer builds guest trust and cuts escalations. |
| 3 | reveal  | close-3 | Every discrepancy caught early protects the hotel's revenue and its parity. |

**Actor notes:** The last three consequences land at the same pace — deliberate, one-per-breath. Not rising. Not fading.

---

## Render manifest

**File count when rendered:** 74 cue-level MP3s.

Naming per Cueline convention: `s{slide}-c{cueIdx}.mp3` — e.g. `s0-c0.mp3` through `s0-c4.mp3`, `s1-c0.mp3` through `s1-c3.mp3`, etc.

| Slide | Cues | Files |
|-------|------|-------|
| s-0   | 5 | s0-c0.mp3 .. s0-c4.mp3 |
| s-1   | 4 | s1-c0.mp3 .. s1-c3.mp3 |
| s-2   | 8 | s2-c0.mp3 .. s2-c7.mp3 |
| s-3   | 3 | s3-c0.mp3 .. s3-c2.mp3 |
| s-4   | 4 | s4-c0.mp3 .. s4-c3.mp3 |
| s-5   | 5 | s5-c0.mp3 .. s5-c4.mp3 |
| s-6   | 4 | s6-c0.mp3 .. s6-c3.mp3 |
| s-7   | 4 | s7-c0.mp3 .. s7-c3.mp3 |
| s-8   | 4 | s8-c0.mp3 .. s8-c3.mp3 |
| s-9   | 3 | s9-c0.mp3 .. s9-c2.mp3 |
| s-10  | 4 | s10-c0.mp3 .. s10-c3.mp3 |
| s-11  | 3 | s11-c0.mp3 .. s11-c2.mp3 |
| s-12  | 4 | s12-c0.mp3 .. s12-c3.mp3 |
| s-13  | 3 | s13-c0.mp3 .. s13-c2.mp3 |
| s-14  | 1 | s14-c0.mp3 |
| s-15  | 3 | s15-c0.mp3 .. s15-c2.mp3 |
| s-16  | 7 | s16-c0.mp3 .. s16-c6.mp3 |
| s-17  | 1 | s17-c0.mp3 |
| s-18..s-22 | 0 | — (no quiz narration) |
| s-23  | 4 | s23-c0.mp3 .. s23-c3.mp3 |

**Total:** ~11,400 characters of spoken text. Roughly 13% of Charlotte on Creator ($22/mo, 100k chars). Total runtime at 145 wpm × playbackRate 0.9 ≈ 18–19 minutes of continuous audio inside the 25-minute module envelope (rest is dwell + interaction + quiz).

## Re-render triggers

Only re-render an individual cue's mp3 when its **Spoken line** field changes above. Editing on-slide text, visuals, layout, quiz options or interaction behaviour does not require a re-render.
