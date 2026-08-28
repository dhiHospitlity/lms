# Module 1. Rate Architecture · Narration Script

**Purpose:** Source-of-truth narration for Module 1. Two audiences:
- **Voice actor / ElevenLabs:** reads the *Reading text* section verbatim per slide.
- **Build pipeline:** consumes the *Cue map* to sync visual reveals to audio timestamps.

**Editing rules:**
- Every edit to spoken text must land in *both* the Reading text block and the Cue map row.
- `[pause N.Ns]` markers are honoured by the pipeline as silent gaps between MP3 clips.
- Cue IDs correspond to `data-cue="..."` attributes and slide indexes in [modules/module1-rate-architecture.html](../../modules/module1-rate-architecture.html).
- Style rules: see the six-rule style guide at the bottom of this file.

---

## Slide 0. What is rate architecture? (Definition)

### Reading text (~20 sec spoken)

> Before we get into it, let's answer the simplest question first.
>
> [pause 0.6s]
>
> Rate architecture is the connected pricing system that decides every rate at your hotel, automatically, and for a reason.
>
> [pause 0.5s]
>
> It works on every booking. In every channel. For every guest.

### Cue map

| # | Action  | Target  | Spoken line                                                                                                                        |
|---|---------|---------|------------------------------------------------------------------------------------------------------------------------------------|
| 0 | narrate |.       | Before we get into it, let's answer the simplest question first.                                                                   |
| 1 | reveal  | def-1   | Rate architecture is the connected pricing system that decides every rate at your hotel, automatically, and for a reason.         |
| 2 | reveal  | def-2   | It works on every booking. In every channel. For every guest.                                                                      |

**Notes for the actor:** The three short phrases at the end ("On every booking. In every channel. For every guest.") land as three deliberate beats, not run together. The "It works on" lead-in stitches them to the definition above so the delivery flows as one thought instead of a bullet list.

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
> Five questions. Every rate at your hotel is an answer to all five. Rate architecture is the system that answers them, automatically, one question at a time.

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
| 8 | pulse   | .ov-grid     | Five questions. Every rate at your hotel is an answer to all five. Rate architecture is the system that answers them, automatically, one question at a time.        |

**Notes for the actor:** Cues 2-7 form one connected sentence; deliver as an unbroken flow with the visuals pacing you.

---

## Slide 3. Right Guest

### Reading text (~55 sec spoken)

> So let's take the first question. The right guest.
>
> [pause 0.5s]
>
> Imagine your hotel tonight, two hundred rooms. Two people arrive to check in. Same standard room, same date. One is a Dusit Gold member. The other is a walk-in tourist.
>
> [pause 0.6s]
>
> Should they pay the same rate?
>
> [pause 1.5s]
>
> The answer is no. And it's not unfair. The Gold member has a loyalty relationship the hotel wants to reward. The walk-in has no qualifying account, yet.
>
> [pause 0.5s]
>
> Here's what that looks like on the system. The Gold member's rate comes in at one hundred and thirteen dollars, a fifteen percent discount, applied automatically. The walk-in pays the Best Available Rate. $133.
>
> [pause 0.4s]
>
> Same room. Different guests. Different rates. And notice, the segment tag is different too. That's how the system remembers which discount to apply, every single time.
>
> [pause 0.7s]
>
> The rate difference isn't generosity. It's rate architecture recognising who qualifies for what.

### Cue map

| # | Action  | Target       | Spoken line                                                                                                                                                          |
|---|---------|--------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0 | narrate |.            | So let's take the first question. The right guest.                                                                                                                    |
| 1 | narrate |.            | Imagine your hotel tonight, two hundred rooms. Two people arrive to check in. Same standard room, same date. One is a Dusit Gold member. The other is a walk-in tourist. |
| 2 | narrate |.            | Should they pay the same rate?                                                                                                                                        |
| 3 | narrate |.            | The answer is no. And it's not unfair. The Gold member has a loyalty relationship the hotel wants to reward. The walk-in has no qualifying account, yet.            |
| 4 | reveal  | card-gold    | Here's what that looks like on the system. The Gold member's rate comes in at one hundred and thirteen dollars, a fifteen percent discount, applied automatically.                                  |
| 5 | reveal  | card-walkin  | The walk-in pays the Best Available Rate. $133.                                                                                                                     |
| 6 | narrate |.            | Same room. Different guests. Different rates. And notice, the segment tag is different too. That's how the system remembers which discount to apply, every single time. |
| 7 | reveal  | key-1        | The rate difference isn't generosity. It's rate architecture recognising who qualifies for what.                                                                     |

**Notes for the actor:** The 1.5-second pause after "Should they pay the same rate?" is deliberate, it's the Socratic beat. Do not fill it. Let the silence sit.

---

## Slide 4. Right Time

### Reading text (~40 sec spoken)

> That's the first question. Let's move to the second, the right time.
>
> [pause 0.5s]
>
> Same standard room. Same hotel. But a quiet Tuesday in February is not the same product as New Year's Eve.
>
> [pause 0.5s]
>
> On a slow Tuesday, demand is low. The hotel needs bookings. BAR comes down. $110 gets more heads on pillows.
>
> [pause 0.4s]
>
> On New Year's Eve, demand far exceeds supply. BAR rises to $280, and every linked rate follows automatically.
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
| 1 | narrate |.         | Same standard room. Same hotel. But a quiet Tuesday in February is not the same product as New Year's Eve. |
| 2 | reveal  | card-feb  | On a slow Tuesday, demand is low. The hotel needs bookings. BAR comes down. $110 gets more heads on pillows. |
| 3 | reveal  | card-nye  | On New Year's Eve, demand far exceeds supply. BAR rises to $280, and every linked rate follows automatically. |
| 4 | narrate |.         | This isn't overcharging. It's how every market in the world works. |
| 5 | reveal  | key-time  | BAR is not a fixed price. When the Revenue Manager moves it, every derived rate, corporate, OTA, member, moves with it. |

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
> A guest who books on dusit.com pays $133. The hotel keeps the full $133.
>
> [pause 0.4s]
>
> A guest who books on Booking.com also pays $133, but the OTA takes around $20 in commission. The hotel nets only about $113.
>
> [pause 0.5s]
>
> This is why we call it the channel-cost principle. Same room, different acquisition cost, different net revenue.
>
> [pause 0.5s]
>
> OTA rates are set as a percentage below BAR, so the hotel stays competitive without cannibalising direct bookings or breaking rate parity.

### Cue map

| # | Action  | Target       | Spoken line |
|---|---------|--------------|-------------|
| 0 | narrate |.            | Third question, the right channel. |
| 1 | narrate |.            | Where a guest books from changes what the hotel actually earns. Same room, same rate on the screen, but very different amounts land in the hotel's account. |
| 2 | reveal  | card-direct  | A guest who books on dusit.com pays $133. The hotel keeps the full $133. |
| 3 | reveal  | card-ota     | A guest who books on Booking.com also pays $133, but the OTA takes around $20 in commission. The hotel nets only about $113. |
| 4 | narrate |.            | This is why we call it the channel-cost principle. Same room, different acquisition cost, different net revenue. |
| 5 | reveal  | key-channel  | OTA rates are set as a percentage below BAR, so the hotel stays competitive without cannibalising direct bookings or breaking rate parity. |

---

## Slide 6. Right Price

### Reading text (~40 sec spoken)

> Fourth question, the right price.
>
> [pause 0.5s]
>
> Two guests. Same room. Same night. One can cancel anytime, full refund. The other prepaid and cannot cancel. Should they pay the same?
>
> [pause 1.2s]
>
> The answer is no. Certainty and flexibility carry different value.
>
> [pause 0.5s]
>
> The flexible guest pays $133, full BAR. Because the hotel is holding a room that might empty out at the last minute. That risk is priced in.
>
> [pause 0.4s]
>
> The Saver guest prepaid, non-refundable. They pay $120, a 10 percent discount. The hotel gets certainty; the guest gets a lower rate.
>
> [pause 0.5s]
>
> Three levels: Flexible, Saver ten percent off, and Stay Longer fifteen percent off. Each rewards a different kind of commitment.

### Cue map

| # | Action  | Target      | Spoken line |
|---|---------|-------------|-------------|
| 0 | narrate |.           | Fourth question, the right price. |
| 1 | narrate |.           | Two guests. Same room. Same night. One can cancel anytime, full refund. The other prepaid and cannot cancel. Should they pay the same? |
| 2 | narrate |.           | The answer is no. Certainty and flexibility carry different value. |
| 3 | reveal  | card-flex   | The flexible guest pays $133, full BAR. Because the hotel is holding a room that might empty out at the last minute. That risk is priced in. |
| 4 | reveal  | card-saver  | The Saver guest prepaid, non-refundable. They pay $120, a 10 percent discount. The hotel gets certainty; the guest gets a lower rate. |
| 5 | reveal  | key-cond    | Three levels: Flexible, Saver ten percent off, and Stay Longer fifteen percent off. Each rewards a different kind of commitment. |

---

## Slide 7. Right Room

### Reading text (~50 sec spoken)

> Fifth and final question, the right room.
>
> [pause 0.5s]
>
> A Standard room and a Suite are not the same product. The room ladder prices each type relative to the one below it.
>
> [pause 0.5s]
>
> Standard room: $133, the base derived rate. No supplement.
>
> [pause 0.3s]
>
> Deluxe room: $150, that's $17 added on top.
>
> [pause 0.3s]
>
> Suite: $183. $50 added on top of Standard.
>
> [pause 0.7s]
>
> Now, you might expect the supplement is added to BAR directly. It isn't. And the order matters.
>
> [pause 0.7s]
>
> The supplement is added to the derived rate, after the segment discount. Corporate Deluxe equals BAR times 0.85, then plus $17. Not BAR plus $17, then discounted. Get this order wrong and margins leak.

### Cue map

| # | Action  | Target    | Spoken line |
|---|---------|-----------|-------------|
| 0 | narrate |.         | Fifth and final question, the right room. |
| 1 | narrate |.         | A Standard room and a Suite are not the same product. The room ladder prices each type relative to the one below it. |
| 2 | reveal  | rung-std  | Standard room: $133, the base derived rate. No supplement. |
| 3 | reveal  | rung-dlx  | Deluxe room: $150, that's $17 added on top. |
| 4 | reveal  | rung-ste  | Suite: $183. $50 added on top of Standard. |
| 5 | narrate |.         | Now, you might expect the supplement is added to BAR directly. It isn't. And the order matters. |
| 6 | reveal  | key-room  | The supplement is added to the derived rate, after the segment discount. Corporate Deluxe equals BAR times 0.85, then plus $17. Not BAR plus $17, then discounted. Get this order wrong and margins leak. |

**Notes for the actor:** Cue 5 is a *preempt-the-confusion* beat, deliver with a small warning intonation, then a beat of silence before cue 6 lands the correction.

---

## Slide 8. The System (BAR propagation)

### Reading text (~40 sec spoken)

> So far we've looked at each question in isolation. Now let's see how they connect.
>
> [pause 0.6s]
>
> BAR is the single source of truth. Every channel rate you saw is a fixed percentage of BAR.
>
> [pause 0.5s]
>
> Watch what happens when the Revenue Manager moves BAR from ฿4,000 to ฿5,000.
>
> [pause 0.6s, animation begins auto-playing on the right]
>
> Corporate updates. OTA updates. Member updates. Direct updates. GDS updates. Wholesale updates. Every rate at your hotel moves, in seconds, with zero manual work.
>
> [pause 0.5s]
>
> Tap the BAR hub on the right to run the propagation again. This is the whole system, and this is why architecture matters.

### Cue map

| # | Action  | Target    | Spoken line |
|---|---------|-----------|-------------|
| 0 | narrate |.         | So far we've looked at each question in isolation. Now let's see how they connect. |
| 1 | narrate |.         | BAR is the single source of truth. Every channel rate you saw is a fixed percentage of BAR. |
| 2 | reveal  | sys-demo  | Watch what happens when the Revenue Manager moves BAR from ฿4,000 to ฿5,000. |
| 3 | narrate |.         | Corporate updates. OTA updates. Member updates. Direct updates. GDS updates. Wholesale updates. Every rate at your hotel moves, in seconds, with zero manual work. |
| 4 | narrate |.         | Tap the BAR hub on the right to run the propagation again. This is the whole system, and this is why architecture matters. |

**Notes for the actor + timing:** The right-side BAR propagation animation self-triggers 700 ms after this slide activates and runs for about 2.5 seconds. Time cue 3 so the narration lands *during* the propagation, not after, the visual and the words should feel synchronous.

---

## Slide 9. Do / Don't

### Reading text (~35 sec spoken)

> Before you head into the quiz, here are the guardrails that keep this system honest on your shift.
>
> [pause 0.6s]
>
> The do's. Treat rate as a connected system. Flag discrepancies to the RM immediately. Use the correct market segment code. And always be able to explain why a guest pays what they pay.
>
> [pause 0.6s]
>
> The don'ts. Never override rates without RM approval. Never assume all channels show the same price. Never quote from memory. And never, ever, tell a guest a rate "is just how it is." If you're operating inside rate architecture, you can always explain it.

### Cue map

| # | Action  | Target  | Spoken line |
|---|---------|---------|-------------|
| 0 | narrate |.       | Before you head into the quiz, here are the guardrails that keep this system honest on your shift. |
| 1 | reveal  | dos     | The do's. Treat rate as a connected system. Flag discrepancies to the RM immediately. Use the correct market segment code. And always be able to explain why a guest pays what they pay. |
| 2 | reveal  | donts   | The don'ts. Never override rates without RM approval. Never assume all channels show the same price. Never quote from memory. And never, ever, tell a guest a rate "is just how it is." If you're operating inside rate architecture, you can always explain it. |

---

## Slide 10. Checklist (before the quiz)

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
> And you know the three rate levels: Flexible, Saver at ten percent off, and Stay Longer at fifteen percent off.
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
| 5 | reveal  | chk-5   | And you know the three rate levels: Flexible, Saver at ten percent off, and Stay Longer at fifteen percent off. |
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
