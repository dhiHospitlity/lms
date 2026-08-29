# Module 3. OTA1 · Distribution Basic Knowledge · Narration Script

**Target build:** [modules/module3-distribution-basic.html](../../modules/module3-distribution-basic.html)
**Voice:** George · ElevenLabs (ID `JBFqnCBsd6RMkjVDRZzb`) · warm British baritone
**Model:** `eleven_multilingual_v2` · `stability: 0.5 · style: 0.45 · similarity_boost: 0.75 · speaker_boost: on`
**Pace target:** 140 wpm · **Total runtime target:** ~24 min content · ~7 min quiz + KC

**Rules for the voice-render pipeline (per [tone-rubric.md](./tone-rubric.md)):**
1. Numbers written as words. "One hundred and thirteen dollars," not "$113."
2. No em-dashes in this file. Use full stops or commas.
3. `[pause N.Ns]` markers are honoured as silent gaps between MP3 clips (`interCueGap` in Cueline).
4. Cue IDs map directly to `Cueline.register(slideIdx, [...])` in the HTML.
5. **Pronunciation:**
   - BAR = "bar" (one word, never spelled out)
   - **Dusit = "DOO-sit"** (handled by the pipeline's `PRONUNCIATION_OVERRIDES` map — do NOT phonetically respell here)
   - PMS / CRS / RMS / OTA / GDS / B2B / B2C / DMC = letters spelled out ("P-M-S", "O-T-A", "B-2-B")
   - RevPAR = "rev-par"
   - Booking.com / dusit.com = read as-is (never "dot com")
   - Sabre = "SAY-ber"
   - SynXis = "SIN-sis"
   - D-Edge = "D-edge" (letter + word)
6. Register: measured, warm, senior-colleague-explaining. Flat-to-warm energy.

---

## Slide 0 (s-hook). Someone is booking your hotel right now

### Reading text (~50 sec)

> Right now, somewhere, a guest is looking at your hotel on their phone. They find it, they like the look of it. They tap Book Now.
>
> [pause 0.7s]
>
> What happens next is invisible to them. It is invisible to most of your team as well.
>
> [pause 0.7s]
>
> Before that reservation lands in Opera, it has passed through three systems. Availability was checked. A rate was pulled from a central database. And the booking was routed through a connection.
>
> [pause 0.5s]
>
> That connection might be an O-T-A. Or a wholesaler. Or a travel agent. Or your own website. Each of those routes costs the hotel a different amount.
>
> [pause 0.6s]
>
> Same room. Same guest. Same night. Different money in the bank. This module is about that journey.

### Cue map

| # | Action  | Target       | Spoken line |
|---|---------|--------------|-------------|
| 0 | reveal  | phone        | Right now, somewhere, a guest is looking at your hotel on their phone. They find it, they like the look of it. They tap Book Now. |
| 1 | reveal  | invisible    | What happens next is invisible to them. It is invisible to most of your team as well. |
| 2 | reveal  | systems      | Before that reservation lands in Opera, it has passed through three systems. Availability was checked. A rate was pulled from a central database. And the booking was routed through a connection. |
| 3 | reveal  | channels     | That connection might be an O-T-A. Or a wholesaler. Or a travel agent. Or your own website. Each of those routes costs the hotel a different amount. |
| 4 | reveal  | headline     | Same room. Same guest. Same night. Different money in the bank. This module is about that journey. |

**Actor notes:** Slow, deliberate open. Beats 0 and 1 are almost conspiratorial — bring the learner in. Beat 2 shifts into explanatory mode. Beat 4 lands the take-away flat, no lift on "different money."

---

## Slide 1 (s-loc). The bigger picture

### Reading text (~55 sec)

> Before we get into channels, one piece of context.
>
> [pause 0.5s]
>
> Everything your commercial team does rolls up to a single number. Grow profitable total hotel revenue.
>
> [pause 0.5s]
>
> Six levers pull on that number.
>
> [pause 0.3s]
>
> Drive rev-par growth.
>
> [pause 0.3s]
>
> Gain market share.
>
> [pause 0.3s]
>
> Grow digital delivery.
>
> [pause 0.3s]
>
> Grow non-room revenue.
>
> [pause 0.3s]
>
> Maintain parity.
>
> [pause 0.5s]
>
> And distribution. This module sits inside one part of it. Retail and leisure distribution.
>
> [pause 0.6s]
>
> One thing worth carrying forward. When you make a channel decision, you are not adjusting a technical setting. You are pulling on that number in the middle.

### Cue map

| # | Action  | Target       | Spoken line |
|---|---------|--------------|-------------|
| 0 | narrate | .            | Before we get into channels, one piece of context. |
| 1 | reveal  | wheel-centre | Everything your commercial team does rolls up to a single number. Grow profitable total hotel revenue. |
| 2 | reveal  | lever-1      | Drive rev-par growth. |
| 3 | reveal  | lever-2      | Gain market share. |
| 4 | reveal  | lever-3      | Grow digital delivery. |
| 5 | reveal  | lever-4      | Grow non-room revenue. |
| 6 | reveal  | lever-5      | Maintain parity. |
| 7 | reveal  | lever-6      | And distribution. This module sits inside one part of it. Retail and leisure distribution. |
| 8 | reveal  | takeaway     | One thing worth carrying forward. When you make a channel decision, you are not adjusting a technical setting. You are pulling on that number in the middle. |

**Actor notes:** Cues 2–6 are the pale-wedge levers. Each spoken as a short deliberate beat, wedge + list row light together. Cue 7 is the gold-wedge climax — same cadence as the previous five but slightly longer as the module's own home lights up. Cue 8 lands with quiet conviction.

---

## Slide 2 (s-def). What distribution actually means

### Reading text (~48 sec)

> Let's start with the plain version. Distribution is how your rooms get marketed, sold, and delivered to guests.
>
> [pause 0.5s]
>
> That is broader than it sounds. It is not just where you advertise. It is every route a booking can physically take to reach you.
>
> [pause 0.5s]
>
> Four families of route.
>
> [pause 0.3s]
>
> Direct. Your website. Your phone. Your front desk.
>
> [pause 0.4s]
>
> O-T-A. The big online travel agencies. Booking.com, Expedia, Agoda, Trip.com.
>
> [pause 0.4s]
>
> B-2-B. Wholesalers who sell your rooms on to travel agents.
>
> [pause 0.4s]
>
> G-D-S. The network that corporate travel bookers work inside.
>
> [pause 0.5s]
>
> Every booking your hotel takes arrives through one of those four. The rest of this module is about telling them apart, and knowing what each one costs you.

### Cue map

| # | Action  | Target       | Spoken line |
|---|---------|--------------|-------------|
| 0 | narrate | .            | Let's start with the plain version. Distribution is how your rooms get marketed, sold, and delivered to guests. |
| 1 | reveal  | def          | That is broader than it sounds. It is not just where you advertise. It is every route a booking can physically take to reach you. |
| 2 | narrate | .            | Four families of route. |
| 3 | reveal  | card-direct  | Direct. Your website. Your phone. Your front desk. |
| 4 | reveal  | card-ota     | O-T-A. The big online travel agencies. Booking.com, Expedia, Agoda, Trip.com. |
| 5 | reveal  | card-b2b     | B-2-B. Wholesalers who sell your rooms on to travel agents. |
| 6 | reveal  | card-gds     | G-D-S. The network that corporate travel bookers work inside. |
| 7 | reveal  | closer       | Every booking your hotel takes arrives through one of those four. The rest of this module is about telling them apart, and knowing what each one costs you. |

**Actor notes:** Cues 3-6 are the four channel cards. Deliver each as a self-contained beat, not a run-on list. Beat 4's OTA examples (Booking.com through Trip.com) are read naturally as brand names, not spelled letter by letter.

---

## Slide 3 (s-b2c-b2b). B2C and B2B, who is the customer?

### Reading text (~55 sec)

> Here is the split that everything else hangs off. Who is the customer?
>
> [pause 0.6s]
>
> In B-2-C, the customer is the guest. They see a rate. They book it. They pay it. They turn up.
>
> [pause 0.5s]
>
> Your website is B-2-C. So is the front desk. So, importantly, is an O-T-A, because the guest is still the one choosing and paying. The O-T-A just sits in the middle.
>
> [pause 0.7s]
>
> In B-2-B, the customer is not the guest. It is a business. A wholesaler. A bedbank. A tour operator.
>
> [pause 0.5s]
>
> They buy your rooms at a net rate. Then they resell them to their own customers, usually travel agents, at whatever price they choose.
>
> [pause 0.6s]
>
> In B-2-C you control the price the guest sees. In B-2-B you control the price your partner pays. After that it is out of your hands. Which is exactly where the problems start.

### Cue map

| # | Action  | Target       | Spoken line |
|---|---------|--------------|-------------|
| 0 | narrate | .            | Here is the split that everything else hangs off. Who is the customer? |
| 1 | reveal  | col-b2c      | In B-2-C, the customer is the guest. They see a rate. They book it. They pay it. They turn up. |
| 2 | reveal  | b2c-examples | Your website is B-2-C. So is the front desk. So, importantly, is an O-T-A, because the guest is still the one choosing and paying. The O-T-A just sits in the middle. |
| 3 | reveal  | col-b2b      | In B-2-B, the customer is not the guest. It is a business. A wholesaler. A bedbank. A tour operator. |
| 4 | reveal  | b2b-examples | They buy your rooms at a net rate. Then they resell them to their own customers, usually travel agents, at whatever price they choose. |
| 5 | reveal  | pull-quote   | In B-2-C you control the price the guest sees. In B-2-B you control the price your partner pays. After that it is out of your hands. Which is exactly where the problems start. |

**Actor notes:** Beats 1 and 3 are the framing sentences for the two columns. Deliver them with matched cadence so the split reads as symmetrical. Beat 5 lands the setup for the next slide — small dramatic pause on "problems start."

---

## Slide 4 (s-blurred). The line blurred

### Reading text (~58 sec)

> Now the honest version. That clean split I just drew you is how it used to work. It does not work like that any more.
>
> [pause 0.6s]
>
> Wholesalers sell to guests now. Through connected agents. Affiliate deals. And white-label websites that look nothing like a wholesaler.
>
> [pause 0.5s]
>
> And it runs the other way too. Consumer platforms offer reseller tools, so travel agents book through channels built for guests.
>
> [pause 0.6s]
>
> There is no clean line any more between who is a guest and who is a trade partner.
>
> [pause 0.7s]
>
> Here is why that should concern you. You sold a room to a wholesaler at a net rate, on the understanding it would reach a travel agent. Instead it appears on a public website at a price below your own.
>
> [pause 0.5s]
>
> Your guest sees it. Your parity is gone. And you did not do anything wrong.
>
> [pause 0.8s]
>
> That is rate leakage. The single biggest reason distribution is managed as tightly as it is.

### Cue map

| # | Action  | Target       | Spoken line |
|---|---------|--------------|-------------|
| 0 | reveal  | band-past    | Now the honest version. That clean split I just drew you is how it used to work. It does not work like that any more. |
| 1 | reveal  | band-today   | Wholesalers sell to guests now. Through connected agents. Affiliate deals. And white-label websites that look nothing like a wholesaler. |
| 2 | narrate | .            | And it runs the other way too. Consumer platforms offer reseller tools, so travel agents book through channels built for guests. |
| 3 | narrate | .            | There is no clean line any more between who is a guest and who is a trade partner. |
| 4 | reveal  | band-impact  | Here is why that should concern you. You sold a room to a wholesaler at a net rate, on the understanding it would reach a travel agent. Instead it appears on a public website at a price below your own. |
| 5 | narrate | .            | Your guest sees it. Your parity is gone. And you did not do anything wrong. |
| 6 | reveal  | leak-headline | That is rate leakage. The single biggest reason distribution is managed as tightly as it is. |

**Actor notes:** Slide 4 is the emotional pivot of the module — the moment the tidy picture from slide 3 collapses. Beat 6 delivers "rate leakage" with weight; slight pause before it.

---
