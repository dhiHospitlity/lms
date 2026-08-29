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

### Reading text (~60 sec)

> Before we get into channels, one piece of context.
>
> [pause 0.5s]
>
> Everything your commercial team does rolls up to a single number. Grow profitable total hotel revenue.
>
> [pause 0.5s]
>
> Six levers pull on that number. Let's name them.
>
> [pause 0.4s]
>
> One. Drive rev-par growth.
>
> [pause 0.35s]
>
> Two. Gain market share.
>
> [pause 0.35s]
>
> Three. Grow digital delivery.
>
> [pause 0.35s]
>
> Four. Grow non-room revenue.
>
> [pause 0.35s]
>
> Five. Maintain parity.
>
> [pause 0.6s]
>
> And the sixth is where this module lives. Retail and leisure distribution.
>
> [pause 0.7s]
>
> One thing worth carrying forward. When you make a channel decision, you are not adjusting a technical setting. You are pulling on that number in the middle.

### Cue map

| # | Action  | Target         | Spoken line |
|---|---------|----------------|-------------|
| 0 | narrate | .              | Before we get into channels, one piece of context. |
| 1 | reveal  | wheel-centre   | Everything your commercial team does rolls up to a single number. Grow profitable total hotel revenue. |
| 2 | reveal  | levers-header  | Six levers pull on that number. Let's name them. |
| 3 | reveal  | lever-1        | One. Drive rev-par growth. |
| 4 | reveal  | lever-2        | Two. Gain market share. |
| 5 | reveal  | lever-3        | Three. Grow digital delivery. |
| 6 | reveal  | lever-4        | Four. Grow non-room revenue. |
| 7 | reveal  | lever-5        | Five. Maintain parity. |
| 8 | reveal  | lever-6        | And the sixth is where this module lives. Retail and leisure distribution. |
| 9 | reveal  | takeaway       | One thing worth carrying forward. When you make a channel decision, you are not adjusting a technical setting. You are pulling on that number in the middle. |

**Actor notes:** Cue 2 is the bridge — "Let's name them" invites the learner into the walk-through with a slight lift, not a monologue. Cues 3–7 use number prefixes (One/Two/Three...) so each beat has a small anchor and the delivery has natural stress on the number then the lever. Cue 8 gets warmth on "where this module lives" — the moment the gold wedge lights up as the module's own home. Cue 9 lands with quiet conviction.

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
> Your website is B-2-C. So is the front desk. And so is an O-T-A, because the guest is still the one choosing and paying. The O-T-A just sits in the middle.
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
| 2 | reveal  | b2c-examples | Your website is B-2-C. So is the front desk. And so is an O-T-A, because the guest is still the one choosing and paying. The O-T-A just sits in the middle. |
| 3 | reveal  | col-b2b      | In B-2-B, the customer is not the guest. It is a business. A wholesaler. A bedbank. A tour operator. |
| 4 | reveal  | b2b-examples | They buy your rooms at a net rate. Then they resell them to their own customers, usually travel agents, at whatever price they choose. |
| 5 | reveal  | pull-quote   | In B-2-C you control the price the guest sees. In B-2-B you control the price your partner pays. After that it is out of your hands. Which is exactly where the problems start. |

**Actor notes:** Beats 1 and 3 are the framing sentences for the two columns. Deliver them with matched cadence so the split reads as symmetrical. Beat 5 lands the setup for the next slide — small dramatic pause on "problems start."

---

## Slide 4 (s-blurred). The line blurred

### Reading text (~58 sec)

> Now the honest version. That clean split we walked through on the last slide isn't how it works any more.
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
| 0 | reveal  | band-past    | Now the honest version. That clean split we walked through on the last slide isn't how it works any more. |
| 1 | reveal  | band-today   | Wholesalers sell to guests now. Through connected agents. Affiliate deals. And white-label websites that look nothing like a wholesaler. |
| 2 | narrate | .            | And it runs the other way too. Consumer platforms offer reseller tools, so travel agents book through channels built for guests. |
| 3 | narrate | .            | There is no clean line any more between who is a guest and who is a trade partner. |
| 4 | reveal  | band-impact  | Here is why that should concern you. You sold a room to a wholesaler at a net rate, on the understanding it would reach a travel agent. Instead it appears on a public website at a price below your own. |
| 5 | narrate | .            | Your guest sees it. Your parity is gone. And you did not do anything wrong. |
| 6 | reveal  | leak-headline | That is rate leakage. The single biggest reason distribution is managed as tightly as it is. |

**Actor notes:** Slide 4 is the emotional pivot of the module — the moment the tidy picture from slide 3 collapses. Beat 6 delivers "rate leakage" with weight; slight pause before it.

---

## Slide 5 (s-eco-mark). § The Dusit distribution ecosystem

### Reading text (~20 sec)

> So that is what distribution is, and how the lines have blurred.
>
> [pause 0.5s]
>
> Now let's look at what Dusit actually runs. Who is connected, who is not, and what the systems underneath are doing.

### Cue map

| # | Action  | Target       | Spoken line |
|---|---------|--------------|-------------|
| 0 | narrate | .            | So that is what distribution is, and how the lines have blurred. |
| 1 | reveal  | section-mark | Now let's look at what Dusit actually runs. Who is connected, who is not, and what the systems underneath are doing. |

**Actor notes:** Slower, deliberate. This is a rest point between the concept section and the ecosystem walk-through — let the second beat settle before slide 6 begins.

---

## Slide 6 (s-channels). The four connected channels

### Reading text (~45 sec)

> Connected is the word to hold on to. A connected channel talks to our systems automatically. Rates out, availability out, bookings back. Nobody types anything.
>
> [pause 0.6s]
>
> Four families of connected channel come off the Dusit hub.
>
> [pause 0.3s]
>
> Direct. Your own website, phone, and central reservations.
>
> [pause 0.3s]
>
> OTAs. Ten of them, organised in three tiers. We'll come back to that.
>
> [pause 0.3s]
>
> B-2-B. More than twenty wholesale partners.
>
> [pause 0.3s]
>
> And the GDS. Amadeus, Sabre, and Travelport.
>
> [pause 0.6s]
>
> Everything on this diagram moves automatically. That is what makes it powerful. It is also why an error moves just as fast as a correction does.

### Cue map

| # | Action  | Target          | Spoken line |
|---|---------|-----------------|-------------|
| 0 | reveal  | hub-centre      | Connected is the word to hold on to. A connected channel talks to our systems automatically. Rates out, availability out, bookings back. Nobody types anything. |
| 1 | narrate | .               | Four families of connected channel come off the Dusit hub. |
| 2 | reveal  | channel-direct  | Direct. Your own website, phone, and central reservations. |
| 3 | reveal  | channel-ota     | OTAs. Ten of them, organised in three tiers. We'll come back to that. |
| 4 | reveal  | channel-b2b     | B-2-B. More than twenty wholesale partners. |
| 5 | reveal  | channel-gds     | And the GDS. Amadeus, Sabre, and Travelport. |
| 6 | reveal  | key-note        | Everything on this diagram moves automatically. That is what makes it powerful. It is also why an error moves just as fast as a correction does. |

**Actor notes:** Cues 2–5 are the four families. Each one short and deliberate. Cue 3 (OTAs) teases the next slide — light lift on "we'll come back to that." Cue 6 lands the "error moves as fast as a correction" line with weight.

---

## Slide 7 (s-ota-tiers). OTAs, in three tiers

### Reading text (~50 sec)

> Zooming in on the OTA side. Dusit is live with ten. But they are not all managed the same way, and that difference is worth understanding.
>
> [pause 0.5s]
>
> Four of them sit closest. Expedia. Booking.com. Agoda. Trip.com. Each has a named account manager, we run contracted promotions with all four. You will hear these called the Major 4.
>
> [pause 0.5s]
>
> A second group is growing into that. MakeMyTrip. tiket.com. Traveloka. Account management is in place; promotions being contracted now.
>
> [pause 0.5s]
>
> And a third group that is simply live and connected. Gother. Hopper. Klook. The plumbing works; there is no dedicated account manager.
>
> [pause 0.6s]
>
> Same connection under the hood. Different depth of relationship.

### Cue map

| # | Action  | Target         | Spoken line |
|---|---------|----------------|-------------|
| 0 | reveal  | tier-intro     | Zooming in on the OTA side. Dusit is live with ten. But they are not all managed the same way, and that difference is worth understanding. |
| 1 | reveal  | tier-major     | Four of them sit closest. Expedia. Booking.com. Agoda. Trip.com. Each has a named account manager, we run contracted promotions with all four. You will hear these called the Major 4. |
| 2 | reveal  | tier-growing   | A second group is growing into that. MakeMyTrip. tiket.com. Traveloka. Account management is in place; promotions being contracted now. |
| 3 | reveal  | tier-connected | And a third group that is simply live and connected. Gother. Hopper. Klook. The plumbing works; there is no dedicated account manager. |
| 4 | reveal  | tier-closer    | Same connection under the hood. Different depth of relationship. |

**Actor notes:** Cues 1–3 escalate warmth on Major 4 (closest partners), settle on Growing, and cool toward "connected only." Cue 4 lands the summarising line quietly.

---

## Slide 8 (s-b2b-math). How wholesale actually works — the math

### Reading text (~40 sec)

> Say BAR is two hundred dollars.
>
> [pause 0.5s]
>
> You sell to your wholesale partner at a net rate. Twenty-three percent off. That is one hundred and fifty-four dollars.
>
> [pause 0.6s]
>
> The partner adds their margin. Sells to a travel agent at one hundred and eighty.
>
> [pause 0.5s]
>
> The agent adds their own margin. Sells to the guest at two hundred.
>
> [pause 0.7s]
>
> The guest pays what they would have paid direct. You receive one hundred and fifty-four. The partner and the agent split the forty-six dollars in between.
>
> [pause 0.6s]
>
> Same room. Same guest. Different money in the bank.

### Cue map

| # | Action  | Target        | Spoken line |
|---|---------|---------------|-------------|
| 0 | narrate | .             | Say BAR is two hundred dollars. |
| 1 | reveal  | chain-hotel   | You sell to your wholesale partner at a net rate. Twenty-three percent off. That is one hundred and fifty-four dollars. |
| 2 | reveal  | chain-partner | The partner adds their margin. Sells to a travel agent at one hundred and eighty. |
| 3 | reveal  | chain-agent   | The agent adds their own margin. Sells to the guest at two hundred. |
| 4 | reveal  | chain-guest   | The guest pays what they would have paid direct. You receive one hundred and fifty-four. The partner and the agent split the forty-six dollars in between. |
| 5 | reveal  | math-summary  | Same room. Same guest. Different money in the bank. |

**Actor notes:** This is a slow, considered slide — the math is the point, not any rhetorical lift. Cues 1–4 each land one number cleanly, with a small breath before the next node in the chain. Cue 5 is a quiet takeaway; deliver "different money in the bank" flat and confident, not punched.

---

## Slide 9 (s-b2b). B2B partners — the wholesale channel

### Reading text (~60 sec)

> Wholesale works differently from everything else, so it is worth slowing down.
>
> [pause 0.5s]
>
> You give the partner a net rate. That is your number, the one you are content to receive. They add their own margin, sell it on to travel agents, who sell it to the guest. You do not see the final price, and you do not control it.
>
> [pause 0.7s]
>
> Dusit has more than twenty connected wholesale partners. That sounds like a lot until you look at how they are organised, because the portfolio is not built around size. It is built around markets.
>
> [pause 0.5s]
>
> A handful are genuinely global. Hotelbeds. WebBeds. TBO. Dida. Dnata. Miki.
>
> [pause 0.4s]
>
> The rest are there because they own a market. Akbar, Ottila, GRN and Stuba reach the Indian travel trade. Almosafer, Happy Travel, iTrip and Nirvana reach the GCC. Hotelpass and Tidequare reach Korea. Asian Trails brings European tour business into Asia.
>
> [pause 0.7s]
>
> Now the rule that matters. And it is the one worth taking away from this whole module. B-2-B rates are room-only products, and they belong in B-2-B channels. They must not be sold, directly or indirectly, to consumers.

### Cue map

| # | Action  | Target       | Spoken line |
|---|---------|--------------|-------------|
| 0 | narrate | .            | Wholesale works differently from everything else, so it is worth slowing down. |
| 1 | reveal  | flow         | You give the partner a net rate. That is your number, the one you are content to receive. They add their own margin, sell it on to travel agents, who sell it to the guest. You do not see the final price, and you do not control it. |
| 2 | reveal  | portfolio    | Dusit has more than twenty connected wholesale partners. That sounds like a lot until you look at how they are organised, because the portfolio is not built around size. It is built around markets. |
| 3 | reveal  | market-global | A handful are genuinely global. Hotelbeds. WebBeds. TBO. Dida. Dnata. Miki. |
| 4 | reveal  | market-rest  | The rest are there because they own a market. Akbar, Ottila, GRN and Stuba reach the Indian travel trade. Almosafer, Happy Travel, iTrip and Nirvana reach the GCC. Hotelpass and Tidequare reach Korea. Asian Trails brings European tour business into Asia. |
| 5 | reveal  | b2b-rule     | Now the rule that matters. And it is the one worth taking away from this whole module. B-2-B rates are room-only products, and they belong in B-2-B channels. They must not be sold, directly or indirectly, to consumers. |

**Actor notes:** Cues 3–4 are two contrasting waves — the six global partners as a rhythm of proper nouns, then the market-by-market list at slightly higher pace. Cue 5 is the module's most important line. Deliberate, weighty, no lift on the last clause.

---

## Slide 10 (s-non). Non-connected players

### Reading text (~35 sec)

> Not everything plugs in. Plenty of business still arrives the old way.
>
> [pause 0.4s]
>
> A local agent who emails. A corporate account with a negotiated rate. A small tour operator. A DMC arranging a group.
>
> [pause 0.6s]
>
> None of that is automatic. Somebody at the hotel loads the rate, checks the availability, keys the booking in.
>
> [pause 0.5s]
>
> Which means two things. It is slower. And when something goes wrong, it went wrong on your side, not in a system.

### Cue map

| # | Action  | Target       | Spoken line |
|---|---------|--------------|-------------|
| 0 | narrate | .            | Not everything plugs in. Plenty of business still arrives the old way. |
| 1 | reveal  | manual-list  | A local agent who emails. A corporate account with a negotiated rate. A small tour operator. A DMC arranging a group. |
| 2 | reveal  | manual-work  | None of that is automatic. Somebody at the hotel loads the rate, checks the availability, keys the booking in. |
| 3 | reveal  | risk         | Which means two things. It is slower. And when something goes wrong, it went wrong on your side, not in a system. |

**Actor notes:** Slower, more considered. This is a small quiet slide about the discipline the connected side takes for granted. Cue 3 lands the responsibility line without any dramatic lift.

---

## Slide 11 (s-map). Map the booking to its channel · drag-and-drop

### Reading text (~20 sec)

> Your turn. Eight bookings, four routes.
>
> [pause 0.5s]
>
> Drag each one where it belongs. Two are trickier than they look, so take your time. There is no score on this one.

### Cue map

| # | Action  | Target       | Spoken line |
|---|---------|--------------|-------------|
| 0 | narrate | .            | Your turn. Eight bookings, four routes. |
| 1 | narrate | .            | Drag each one where it belongs. Two are trickier than they look, so take your time. There is no score on this one. |

**Actor notes:** Instructional, warm. This is a practice exercise — the tone should reduce any assessment anxiety.

---
