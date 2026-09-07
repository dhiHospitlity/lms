# Module 1. Revenue Management Foundation · Narration Script

**Purpose:** Source-of-truth narration for Module 1. Two audiences:
- **Voice actor / ElevenLabs:** reads the *Reading text* section verbatim per slide.
- **Build pipeline:** consumes the *Cue map* to sync visual reveals to audio timestamps.

**Editing rules:**
- Every edit to spoken text must land in *both* the Reading text block and the Cue map row.
- `[pause N.Ns]` markers are honoured by the pipeline as silent gaps between MP3 clips.
- Cue IDs correspond to `data-cue="..."` attributes and slide indexes in [modules/module1-rate-architecture.html](../../modules/module1-rate-architecture.html).
- Style rules: see the six-rule style guide at the bottom of this file.

---

## Slide 0. Every rate has a reason (Module intro)

### Reading text (~14 sec spoken)

> Before we get into it, let's answer the simplest question first.
>
> [pause 0.6s]
>
> Every rate at Dusit is an answer to five questions — asked and answered for every booking, automatically. This module walks you through each one.

### Cue map

| # | Action  | Target  | Spoken line                                                                                                                        |
|---|---------|---------|------------------------------------------------------------------------------------------------------------------------------------|
| 0 | narrate |.       | Before we get into it, let's answer the simplest question first.                                                                   |
| 1 | reveal  | def-1   | Every rate at Dusit is an answer to five questions — asked and answered for every booking, automatically. This module walks you through each one.         |

**Notes for the actor:** Land the definition warmly. This is the module's opening thesis — say it as a considered thought, not a headline.

*(The original slide had a third cue — "It works on every booking. In every channel. For every guest." — removed 2026-09-07 because it was redundant with the "automatically" clause in the main definition and the visual size/colour split was reading as a font mismatch.)*

---

## Slide 1. What you'll learn today (Agenda)

### Reading text (~24 sec spoken)

> Here's what we'll cover.
>
> [pause 0.5s]
>
> We'll start with the five questions every rate answers.
>
> [pause 0.4s]
>
> Then we'll see how the whole system stays in sync, automatically.
>
> [pause 0.4s]
>
> And we'll finish with the do's and don'ts that protect your revenue on every shift.

### Cue map

| # | Action  | Target  | Spoken line                                                                              |
|---|---------|---------|------------------------------------------------------------------------------------------|
| 0 | narrate |.       | Here's what we'll cover.                                                                 |
| 1 | reveal  | item-1  | We'll start with the five questions every rate answers.                                  |
| 2 | reveal  | item-2  | Then we'll see how the whole system stays in sync, automatically.                        |
| 3 | reveal  | item-3  | And we'll finish with the do's and don'ts that protect your revenue on every shift.      |

**Notes for the actor:** The three agenda items are one flowing sentence broken by breath, not three numbered items. The connective openers ("We'll start" / "Then we'll see" / "And we'll finish") replace the earlier "First / Second / Third" enumeration, which TTS reads as a robotic checklist.

---

## Slide 2. Overview: The 5 Questions

### Reading text (~40 sec spoken)

> So, let's start with the first thing on the list. The five questions every rate answers.
>
> [pause 0.6s]
>
> Revenue management is often described as "selling at the highest price." That's not quite right.
>
> [pause 0.8s]
>
> The real job is selling to the right guest, at the right time, through the right channel, at the right price, in the right room.
>
> [pause 0.6s]
>
> Five questions. Every rate at your hotel is an answer to all five. Revenue management is the system that answers them, automatically, one question at a time.

### Cue map

| # | Action  | Target       | Spoken line                                                                                                                                                          |
|---|---------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0 | narrate |.            | So, let's start with the first thing on the list. The five questions every rate answers.                                                                            |
| 1 | narrate |.            | Revenue management is often described as "selling at the highest price." That's not quite right.                                                                     |
| 2 | narrate |.            | The real job is selling to…                                                                                                                                          |
| 3 | lit     | card-1       | …the right guest…                                                                                                                                                    |
| 4 | lit     | card-2       | …at the right time…                                                                                                                                                  |
| 5 | lit     | card-3       | …through the right channel…                                                                                                                                          |
| 6 | lit     | card-4       | …at the right price…                                                                                                                                                 |
| 7 | lit     | card-5       | …in the right room.                                                                                                                                                  |
| 8 | pulse   | .ov-grid     | Five questions. Every rate at your hotel is an answer to all five. Revenue management is the system that answers them, automatically, one question at a time.        |

**Notes for the actor:** Cues 2-7 form one connected sentence; deliver as an unbroken flow with the visuals pacing you.

---

## Slide 3. Right Guest

### Reading text (~55 sec spoken)

> So let's take the first question. The right guest.
>
> [pause 0.5s]
>
> Imagine your hotel tonight, two hundred rooms. Two people arrive to check in. Same standard room, same date.
>
> [pause 0.3s]
>
> One is a Dusit Gold member.
>
> [pause 0.2s]
>
> The other is a walk-in tourist.
>
> [pause 0.6s]
>
> Should they pay the same rate?
>
> [pause 1.5s]
>
> The answer is no. And it's not unfair.
>
> [pause 0.3s]
>
> The Gold member has a loyalty relationship the hotel wants to reward.
>
> [pause 0.2s]
>
> The walk-in has no qualifying account, yet.
>
> [pause 0.5s]
>
> Here's what that looks like on the system. The Gold member's rate comes in at one hundred and seventy dollars, a fifteen percent discount, applied automatically. The walk-in pays the Best Available Rate — two hundred dollars.
>
> [pause 0.4s]
>
> Same room. Different guests. Different rates. And notice, the segment tag is different too. That's how the system remembers which discount to apply, every single time.
>
> [pause 0.7s]
>
> The rate difference isn't generosity. It's the pricing system recognising who qualifies for what.

### Cue map

| # | Action  | Target       | Spoken line                                                                                                                                                          |
|---|---------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0  | narrate |.            | So let's take the first question. The right guest.                                                                                                                    |
| 1  | narrate |.            | Imagine your hotel tonight, two hundred rooms. Two people arrive to check in. Same standard room, same date.                                                          |
| 2  | lit     | card-gold    | One is a Dusit Gold member.                                                                                                                                            |
| 3  | lit     | card-walkin  | The other is a walk-in tourist.                                                                                                                                        |
| 4  | narrate |.            | Should they pay the same rate?                                                                                                                                        |
| 5  | narrate |.            | The answer is no. And it's not unfair.                                                                                                                                 |
| 6  | lit     | card-gold    | The Gold member has a loyalty relationship the hotel wants to reward.                                                                                                  |
| 7  | lit     | card-walkin  | The walk-in has no qualifying account, yet.                                                                                                                            |
| 8  | reveal  | card-gold    | Here's what that looks like on the system. The Gold member's rate comes in at one hundred and seventy dollars, a fifteen percent discount, applied automatically.     |
| 9  | reveal  | card-walkin  | The walk-in pays the Best Available Rate — two hundred dollars.                                                                                                        |
| 10 | narrate |.            | Same room. Different guests. Different rates. And notice, the segment tag is different too. That's how the system remembers which discount to apply, every single time. |
| 11 | reveal  | key-1        | The rate difference isn't generosity. It's the pricing system recognising who qualifies for what.                                                                     |

**Notes for the actor:** The 1.5-second pause after "Should they pay the same rate?" is deliberate, it's the Socratic beat. Do not fill it. Let the silence sit. Cues 2/3 and 6/7 are the name-drop beats — say each guest's name at a slightly slower cadence so the visual highlight on the card lands with the word.

---

## Slide 4. Right Time

### Reading text (~42 sec spoken)

> That's the first question. Let's move to the second, the right time.
>
> [pause 0.5s]
>
> Same standard room. Same hotel.
>
> [pause 0.4s]
>
> But a quiet Tuesday in February…
>
> [pause 0.2s]
>
> …is not the same product as New Year's Eve.
>
> [pause 0.5s]
>
> On a slow Tuesday, demand is low. The hotel needs bookings. BAR comes down. One hundred and ten dollars gets more heads on pillows.
>
> [pause 0.4s]
>
> On New Year's Eve, demand far exceeds supply. BAR rises to two hundred and eighty dollars, and every linked rate follows automatically.
>
> [pause 0.4s]
>
> This isn't overcharging. It's how every market in the world works.
>
> [pause 0.5s]
>
> BAR is not a fixed price. When the Revenue Manager moves it, every derived rate, corporate, OTA, member, moves with it.

### Cue map

| # | Action  | Target    | Spoken line |
|---|---------|-----------|-------------|
| 0 | narrate |.         | That's the first question. Let's move to the second, the right time. |
| 1 | narrate |.         | Same standard room. Same hotel. |
| 2 | lit     | card-feb  | But a quiet Tuesday in February… |
| 3 | lit     | card-nye  | …is not the same product as New Year's Eve. |
| 4 | reveal  | card-feb  | On a slow Tuesday, demand is low. The hotel needs bookings. BAR comes down. One hundred and ten dollars gets more heads on pillows. |
| 5 | reveal  | card-nye  | On New Year's Eve, demand far exceeds supply. BAR rises to two hundred and eighty dollars, and every linked rate follows automatically. |
| 6 | narrate |.         | This isn't overcharging. It's how every market in the world works. |
| 7 | reveal  | key-time  | BAR is not a fixed price. When the Revenue Manager moves it, every derived rate, corporate, OTA, member, moves with it. |

---

## Slide 5. Right Channel

### Reading text (~40 sec spoken)

> Third question, the right channel.
>
> [pause 0.5s]
>
> Where a guest books from changes what the hotel actually earns. Same room, same rate on the screen, but very different amounts land in the hotel's account.
>
> [pause 0.5s]
>
> A guest who books on dusit.com pays two hundred dollars. The hotel keeps the full amount.
>
> [pause 0.4s]
>
> A guest who books on Booking.com also pays two hundred dollars — but the OTA takes around thirty dollars in commission. The hotel nets only about one hundred and seventy.
>
> [pause 0.5s]
>
> This is why we call it the channel-cost principle. Same room, different acquisition cost, different net revenue.
>
> [pause 0.5s]
>
> Rate parity: OTAs and direct show the guest the same price. Commission is what changes what the hotel actually keeps.

### Cue map

| # | Action  | Target       | Spoken line |
|---|---------|--------------|-------------|
| 0 | narrate |.            | Third question, the right channel. |
| 1 | narrate |.            | Where a guest books from changes what the hotel actually earns. Same room, same rate on the screen, but very different amounts land in the hotel's account. |
| 2 | reveal  | card-direct  | A guest who books on dusit.com pays two hundred dollars. The hotel keeps the full amount. |
| 3 | reveal  | card-ota     | A guest who books on Booking.com also pays two hundred dollars — but the OTA takes around thirty dollars in commission. The hotel nets only about one hundred and seventy. |
| 4 | narrate |.            | This is why we call it the channel-cost principle. Same room, different acquisition cost, different net revenue. |
| 5 | reveal  | key-channel  | Rate parity: OTAs and direct show the guest the same price. Commission is what changes what the hotel actually keeps. |

---

## Slide 6. Right Price

### Reading text (~42 sec spoken)

> Fourth question, the right price.
>
> [pause 0.5s]
>
> Two guests. Same room. Same night.
>
> [pause 0.3s]
>
> One can cancel anytime, full refund.
>
> [pause 0.2s]
>
> The other prepaid and cannot cancel.
>
> [pause 0.4s]
>
> Should they pay the same?
>
> [pause 1.2s]
>
> The answer is no. Certainty and flexibility carry different value.
>
> [pause 0.5s]
>
> The flexible guest pays two hundred dollars, full BAR. Because the hotel is holding a room that might empty out at the last minute. That risk is priced in.
>
> [pause 0.4s]
>
> The Advance Saver guest prepaid, non-refundable. They pay one hundred and eighty dollars, a ten percent discount. The hotel gets certainty; the guest gets a lower rate.
>
> [pause 0.5s]
>
> That's the whole architecture. BAR at full flexibility, Advance Saver ten percent off with prepayment, Stay Longer fifteen percent off with a minimum stay. Two conditioned rates on top of BAR — deliberately simple.

### Cue map

| # | Action  | Target      | Spoken line |
|---|---------|-------------|-------------|
| 0 | narrate |.           | Fourth question, the right price. |
| 1 | narrate |.           | Two guests. Same room. Same night. |
| 2 | lit     | card-flex   | One can cancel anytime, full refund. |
| 3 | lit     | card-saver  | The other prepaid and cannot cancel. |
| 4 | narrate |.           | Should they pay the same? |
| 5 | narrate |.           | The answer is no. Certainty and flexibility carry different value. |
| 6 | reveal  | card-flex   | The flexible guest pays two hundred dollars, full BAR. Because the hotel is holding a room that might empty out at the last minute. That risk is priced in. |
| 7 | reveal  | card-saver  | The Advance Saver guest prepaid, non-refundable. They pay one hundred and eighty dollars, a ten percent discount. The hotel gets certainty; the guest gets a lower rate. |
| 8 | reveal  | key-cond    | That's the whole architecture. BAR at full flexibility, Advance Saver ten percent off with prepayment, Stay Longer fifteen percent off with a minimum stay. Two conditioned rates on top of BAR — deliberately simple. |

---

## Slide 7. Right Room

### Reading text (~52 sec spoken)

> Fifth and final question, the right room.
>
> [pause 0.5s]
>
> A Standard room…
>
> [pause 0.2s]
>
> …and a Suite are not the same product.
>
> [pause 0.3s]
>
> The room ladder prices each type relative to the one below it.
>
> [pause 0.5s]
>
> Standard room: two hundred dollars, the base derived rate.
>
> [pause 0.3s]
>
> Deluxe room: two hundred and twenty — that's twenty dollars added on top.
>
> [pause 0.3s]
>
> Suite: two hundred and fifty — fifty dollars added on top of Standard.
>
> [pause 0.7s]
>
> Now, you might expect the supplement is added to BAR directly. It isn't. And the order matters.
>
> [pause 0.7s]
>
> The supplement is added to the derived rate, after the segment discount. Corporate Deluxe equals BAR times zero point eight five, then plus twenty dollars. Not BAR plus twenty, then discounted. Get this order wrong and margins leak.
>
> [pause 0.8s]
>
> That's the five questions — guest, time, channel, price, room. Every rate at Dusit is built from those five.

### Cue map

| # | Action  | Target    | Spoken line |
|---|---------|-----------|-------------|
| 0 | narrate |.         | Fifth and final question, the right room. |
| 1 | lit     | rung-std  | A Standard room… |
| 2 | lit     | rung-ste  | …and a Suite are not the same product. |
| 3 | narrate |.         | The room ladder prices each type relative to the one below it. |
| 4 | reveal  | rung-std  | Standard room: two hundred dollars, the base derived rate. |
| 5 | reveal  | rung-dlx  | Deluxe room: two hundred and twenty — that's twenty dollars added on top. |
| 6 | reveal  | rung-ste  | Suite: two hundred and fifty — fifty dollars added on top of Standard. |
| 7 | narrate |.         | Now, you might expect the supplement is added to BAR directly. It isn't. And the order matters. |
| 8 | reveal  | key-room  | The supplement is added to the derived rate, after the segment discount. Corporate Deluxe equals BAR times zero point eight five, then plus twenty dollars. Not BAR plus twenty, then discounted. Get this order wrong and margins leak. |
| 9 | narrate |.         | That's the five questions — guest, time, channel, price, room. Every rate at Dusit is built from those five. |

**Notes for the actor:** Cue 7 is a preempt-the-confusion beat, deliver with a small warning intonation, then a beat of silence before cue 8 lands the correction. Cue 9 is the section-1 closer — land it warmly, as a settled thought, since it's the last beat before section 2 opens.

---

## Slide 8. Rate architecture · Intro (Dusit-narrow sense: BAR + 2 conditioned rates)

### Reading text (~50 sec)

> Section two. Rate architecture. Dusit runs one of the simplest rate architectures in the industry. Just BAR, plus two conditioned rates on top.
>
> [pause 0.5s]
>
> BAR is the anchor. It's the number every other rate is derived from.
>
> [pause 0.4s]
>
> From BAR, two conditioned rates cascade.
>
> [pause 0.4s]
>
> Advance Saver takes ten percent off. The guest prepays at booking, non-refundable. The trade is simple — commit early, save ten percent.
>
> [pause 0.4s]
>
> Stay Longer takes fifteen percent off. The guest commits to a minimum three-night stay, also non-refundable. The trade is the same shape — commit longer, save fifteen percent.
>
> [pause 0.4s]
>
> That's the whole architecture.
>
> [pause 0.4s]
>
> Deliberately minimal. Enough to serve every market, every connected partner — and nothing extra to maintain.

### Cue map

| # | Action  | Target      | Spoken line |
|---|---------|-------------|-------------|
| 0 | reveal  | ra-why      | Section two. Rate architecture. Dusit runs one of the simplest rate architectures in the industry. Just BAR, plus two conditioned rates on top. |
| 1 | reveal  | ra-bar      | BAR is the anchor. It's the number every other rate is derived from. |
| 2 | reveal  | ra-trunk    | From BAR, two conditioned rates cascade. |
| 3 | reveal  | ra-adv      | Advance Saver takes ten percent off. The guest prepays at booking, non-refundable. The trade is simple — commit early, save ten percent. |
| 4 | reveal  | ra-stay     | Stay Longer takes fifteen percent off. The guest commits to a minimum three-night stay, also non-refundable. The trade is the same shape — commit longer, save fifteen percent. |
| 5 | reveal  | ra-caption  | That's the whole architecture. |
| 6 | reveal  | ra-key      | Deliberately minimal. Enough to serve every market, every connected partner — and nothing extra to maintain. |

**Notes for the actor:** Cue 0 lands the section title — deliver "Section two. Rate architecture." with the quiet weight of a chapter opener, then transition into the definition. Cue 1 is the anchor beat; small emphasis on "anchor" and "derived". Cues 3 and 4 are structurally parallel (product + trade-off); mirror the cadence between them so the pair reads as one design pattern. Cue 6 lands the "deliberately simple" thesis warmly — this is the takeaway.

---

## Slide 9. The System (BAR propagation)

*(Renumbered from Slide 8 on 2026-09-04 when Slide 8 was inserted for
'Conditions on top of BAR' — rate architecture in the Dusit-narrow sense.)*

### Reading text (~40 sec spoken)

> The system. This is where BAR, Advance Saver, Stay Longer, and every channel rate meet — and stay in sync automatically.
>
> [pause 0.6s]
>
> BAR is the single source of truth. Every channel rate you see is a fixed percentage of BAR.
>
> [pause 0.5s]
>
> Watch what happens when the Revenue Manager moves BAR from two hundred dollars to two hundred and fifty dollars.
>
> [pause 0.6s, animation begins auto-playing on the right]
>
> Corporate updates. OTA updates. Member updates. Direct updates. GDS updates. Wholesale updates. Every rate at your hotel moves, in seconds, with zero manual work.
>
> [pause 0.5s]
>
> Tap the BAR hub on the right to run the propagation again. This is the whole system, and this is why architecture matters.
>
> [pause 0.8s]
>
> We'll go deeper on the system architecture — how rates actually flow through Dusit's stack — in upcoming modules.

### Cue map

| # | Action  | Target    | Spoken line |
|---|---------|-----------|-------------|
| 0 | narrate |.         | The system. This is where BAR, Advance Saver, Stay Longer, and every channel rate meet — and stay in sync automatically. |
| 1 | narrate |.         | BAR is the single source of truth. Every channel rate you see is a fixed percentage of BAR. |
| 2 | reveal  | sys-demo  | Watch what happens when the Revenue Manager moves BAR from two hundred dollars to two hundred and fifty dollars. |
| 3 | narrate |.         | Corporate updates. OTA updates. Member updates. Direct updates. GDS updates. Wholesale updates. Every rate at your hotel moves, in seconds, with zero manual work. |
| 4 | narrate |.         | Tap the BAR hub on the right to run the propagation again. This is the whole system, and this is why architecture matters. |
| 5 | narrate |.         | We'll go deeper on the system architecture — how rates actually flow through Dusit's stack — in upcoming modules. |

**Notes for the actor + timing:** Cue 0 is now a self-sufficient opener — no back-reference to the previous slide. The right-side BAR propagation animation self-triggers 700 ms after this slide activates and runs for about 2.5 seconds. Time cue 3 so the narration lands *during* the propagation, not after, the visual and the words should feel synchronous. Cue 5 is a forward-reference to future modules — deliver as a warm invitation, not a hurried outro.

---

## Slide 10. Do / Don't

### Reading text (~35 sec spoken)

> Before you head into the quiz, here are the guardrails that keep this system honest on your shift.
>
> [pause 0.6s]
>
> The do's. Treat rate as a connected system. Flag discrepancies to the RM immediately. Use the correct market segment code. And always be able to explain why a guest pays what they pay.
>
> [pause 0.6s]
>
> The don'ts. Never override rates without RM approval. Never assume all channels show the same price. Never quote from memory. And never, ever, tell a guest a rate "is just how it is." If you're operating inside this system, you can always explain it.

### Cue map

| # | Action  | Target  | Spoken line |
|---|---------|---------|-------------|
| 0 | narrate |.       | Before you head into the quiz, here are the guardrails that keep this system honest on your shift. |
| 1 | reveal  | dos     | The do's. Treat rate as a connected system. Flag discrepancies to the RM immediately. Use the correct market segment code. And always be able to explain why a guest pays what they pay. |
| 2 | reveal  | donts   | The don'ts. Never override rates without RM approval. Never assume all channels show the same price. Never quote from memory. And never, ever, tell a guest a rate "is just how it is." If you're operating inside this system, you can always explain it. |

---

## Slide 11. Checklist (before the quiz)

### Reading text (~35 sec spoken)

> Last stop before the quiz. Five statements, tick each one you can confidently say is true for you.
>
> [pause 0.5s]
>
> You can name the five questions: right guest, right time, right channel, right price, right room.
>
> [pause 0.4s]
>
> You understand BAR is the single source of truth all rates link to.
>
> [pause 0.4s]
>
> You can explain why different guests pay different rates for the same room.
>
> [pause 0.4s]
>
> You know who to call the moment you spot a rate discrepancy between channels.
>
> [pause 0.4s]
>
> And you know Dusit's rate architecture: BAR at full flexibility, Advance Saver at ten percent off, and Stay Longer at fifteen percent off.
>
> [pause 0.6s]
>
> Tick all five, then press Next to take the quiz.

### Cue map

| # | Action  | Target  | Spoken line |
|---|---------|---------|-------------|
| 0 | narrate |.       | Last stop before the quiz. Five statements, tick each one you can confidently say is true for you. |
| 1 | reveal  | chk-1   | You can name the five questions: right guest, right time, right channel, right price, right room. |
| 2 | reveal  | chk-2   | You understand BAR is the single source of truth all rates link to. |
| 3 | reveal  | chk-3   | You can explain why different guests pay different rates for the same room. |
| 4 | reveal  | chk-4   | You know who to call the moment you spot a rate discrepancy between channels. |
| 5 | reveal  | chk-5   | And you know Dusit's rate architecture: BAR at full flexibility, Advance Saver at ten percent off, and Stay Longer at fifteen percent off. |
| 6 | narrate |.       | Tick all five, then press Next to take the quiz. |

**Total narrated length across all 11 content slides:** approximately **6 minutes** of spoken audio (excluding pauses). Fits neatly under the module's `PT30M` upper bound while leaving the learner ample time to think, click, and re-read.

---

## Style guide (6 rules)

1. **Open with the promise**, every module starts *"By the end of this, you'll be able to [do specific job task]."* Not "we'll cover."
2. **Write for the ear, not the eye**, read every sentence aloud. If you run out of breath, cut it.
3. **Anchor before you abstract**, every concept gets one concrete scene before the definition arrives.
4. **Turn declaratives into Socratic beats** where possible. *"should X pay the same as Y?"* beats *"X and Y pay different rates because…"*
5. **Signpost every slide transition** with a one-line handoff. *"So far we've done X. Now let's look at Y."* Never let a new slide arrive silently.
6. **Preempt the confusion**, if a slide contains a trap or counter-intuitive rule, name the wrong assumption first, then correct it.

---

## The six Smitha-style narration moves (reference)

Applied on every module going forward.

| Move | Example use in Module 1 |
|---|---|
| **1. Hook with a promise, not a topic** | Slide 0 opening: *"…you'll be able to look at any rate on your system and explain exactly why it is what it is."* |
| **2. Concrete anchor before abstraction** | Slide 1: *"Imagine your hotel tonight, two hundred rooms. Two people arrive to check in…"* |
| **3. Name the pattern, then define it** | Slide 3 (channel): *"This is what we call the channel-cost principle. Same room, different acquisition cost, different rate."* (to be written) |
| **4. Ask the decision, then answer it** | Slide 1: *"Should they pay the same rate?"* [pause] *"The answer is no."* |
| **5. Signpost every transition** | Slide 1 opening: *"So let's take the first question. The right guest."* |
| **6. Preempt the confusion** | Slide 5 (room ladder): *"You might expect the supplement is added to BAR directly. It isn't. And the order matters, here's why."* (to be written) |
