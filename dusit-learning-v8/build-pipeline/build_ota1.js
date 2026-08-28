/* Dusit Revenue Training Programme - OTA 1: Distribution Basic Knowledge
   About OTA and B2B. Version 3.0.
   v3.0 corrects the distribution architecture: the CRS and the channel manager
   are two systems with two jobs, not one replacing the other.
   Built on the shared v7 helpers. */
const fs = require("fs");
const HP = require(process.env.HELPERS || "./helpers.js");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign, PageBreak, LevelFormat,
  NAVY, BLUE, GOLD, MUTE, INK, FONT, CW, noBorders, box, arcBox, slideHeader, specTable, glanceTable, P, spacer,
} = HP;
const Hh = HP.H;
const ctr = AlignmentType.CENTER;

/* ---------------- local helper: three-column change table ---------------- */
function changeTable(rows) {
  const cols = [1900, 3730, 3730];
  const bd = { style: BorderStyle.SINGLE, size: 4, color: "C9D2DD" };
  const borders = { top: bd, bottom: bd, left: bd, right: bd };
  const head = ["Item", "Version 2.0", "Version 3.0"];
  const headRow = new TableRow({ tableHeader: true, children: head.map((h, i) => new TableCell({
    width: { size: cols[i], type: WidthType.DXA },
    shading: { fill: NAVY, type: ShadingType.CLEAR, color: "auto" }, borders: noBorders(NAVY),
    margins: { top: 70, bottom: 70, left: 120, right: 120 },
    children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, size: 18, color: "FFFFFF", font: FONT })] })],
  })) });
  const body = rows.map((r, idx) => {
    const alt = idx % 2 ? "F7F9FB" : "FFFFFF";
    const mk = (txt, w, fill, bold) => new TableCell({
      width: { size: w, type: WidthType.DXA },
      shading: { fill, type: ShadingType.CLEAR, color: "auto" }, borders,
      margins: { top: 70, bottom: 70, left: 120, right: 120 },
      children: [new Paragraph({ spacing: { line: 264 }, children: [new TextRun({ text: txt, bold, size: 18, color: bold ? NAVY : INK, font: FONT })] })],
    });
    return new TableRow({ children: [mk(r[0], cols[0], "EEF2F7", true), mk(r[1], cols[1], alt, false), mk(r[2], cols[2], alt, false)] });
  });
  return new Table({ width: { size: CW, type: WidthType.DXA }, columnWidths: cols, rows: [headRow, ...body] });
}

/* ---------------- glance ---------------- */
const glance = [
  ["01","Hook","Someone is booking your hotel right now","1:30","None","1. Basic knowledge"],
  ["02","Concept","What distribution actually means","1:30","None","1. Basic knowledge"],
  ["03","Concept","B2C and B2B: who is the customer?","2:00","None","1. Basic knowledge"],
  ["04","Concept","The line blurred","1:30","None","1. Basic knowledge"],
  ["05","Transition","The Dusit distribution ecosystem","0:30","None","2. The ecosystem"],
  ["06","Concept","Connected players: who plugs in directly?","2:00","None","2. The ecosystem"],
  ["07","Concept","B2B partners: the wholesale channel","2:00","None","2. The ecosystem"],
  ["08","Concept","Non-connected players","1:00","None","2. The ecosystem"],
  ["09","Interaction","Map the booking to its channel","2:30","Drag-and-drop","2. The ecosystem"],
  ["10","Transition","The systems behind every booking","0:30","None","3. The role of distribution"],
  ["11","Concept","Which system does what","2:00","None","3. The role of distribution"],
  ["12","Concept","GDS and metasearch","1:30","None","3. The role of distribution"],
  ["13","Interaction","Trace the booking","3:00","Branching","3. The role of distribution"],
  ["14","Knowledge Check","Three checks before the quiz","1:30","3 questions","3. The role of distribution"],
  ["15","Quiz","Five questions. Real situations.","5:00","Graded quiz","3. The role of distribution"],
  ["16","Summary","Every channel has a cost","1:00","None","3. The role of distribution"],
];

const slides = [];

/* 01 */
slides.push({ no:"01", title:"Someone is booking your hotel right now", time:"1:30", type:"Hook",
  spec:[
    ["objective","Before any definition, create curiosity. The learner should finish this slide wanting to know what happens between a guest tapping Book Now and a reservation appearing in Opera."],
    ["layout","Full-bleed navy. A single animated sequence plays automatically on entry. Large white headline appears below once the sequence finishes. Continue appears after the animation completes."],
    ["animation","Roughly 8 seconds. A phone screen appears and a Book Now button taps. A dotted line travels right through three system boxes that light up in turn. Opera PMS appears last with a new reservation card. Each connection pulses briefly. Headline fades in."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Full navy background. Centred animated diagram, left to right:",
      "Mobile phone with a pulsing Book Now button, then OTA (lights gold), then CHANNEL MANAGER (lights blue), then CRS (lights blue), then OPERA PMS (lights white, reservation card slides in).",
      "Keep the system boxes as plain rectangles with the name inside. **No brand names on this slide.** No logos. No technical detail. The point is that the guest sees none of this, and that three systems sit between the tap and the front desk.",
    ]},
    { kind:"screen", lines:[
      "Headline, after the animation:",
      "**“In the time it takes to read this sentence, three systems fired to deliver that booking to your desk.”**",
      "Subtext:",
      "This module explains what those systems are, and why the channel a booking came through changes what your hotel actually keeps.",
    ]},
    { kind:"narration", lines:[
      { t:"*Right now, somewhere, a guest is looking at your hotel on their phone. They find it, they like the look of it, they tap Book Now.*", italics:true },
      { t:"*What happens next is invisible to them. It is probably invisible to most of your team as well.*", italics:true },
      { t:"*Before that reservation lands in Opera, it has passed through three systems. Availability has been checked. A rate has been pulled from a central database. And the whole thing has been routed through a connection that might be an OTA, a wholesaler, a travel agent, or your own website.*", italics:true },
      { t:"*Each of those routes costs the hotel a different amount. Same room. Same guest. Same night. Different money in the bank.*", italics:true },
      { t:"*This module is about that journey.*", italics:true },
    ]},
    { kind:"builder", lines:[
      "Autoplay on entry, no navigation until the sequence completes. Do not allow skip on this slide.",
      "System boxes stay generic here. Brand names are introduced on slide 11, once the learner knows what each system is for.",
    ]},
  ]});

/* 02 */
slides.push({ no:"02", title:"What distribution actually means", time:"1:30", type:"Concept",
  spec:[
    ["objective","Give the learner a working definition they can repeat, and separate distribution from marketing in their head."],
    ["layout","Split. Left navy panel with the definition. Right white panel with four channel-type cards appearing in sequence."],
    ["animation","Left text first. Right cards fade in one at a time as the narrator names each type."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "Left panel:",
      "**Distribution is how your rooms are marketed, sold, and delivered to guests, through every booking channel you use.**",
      "Right panel, four cards:",
      "**Direct**  ·  website, phone, walk-in, your own app",
      "**OTA**  ·  Booking.com, Expedia, Agoda, Trip.com",
      "**B2B**  ·  wholesalers and bedbanks selling on to travel agents",
      "**GDS**  ·  the network corporate and agency bookers work in",
    ]},
    { kind:"narration", lines:[
      { t:"*Let us start with the plain version. Distribution is how your rooms get marketed, sold, and delivered to guests.*", italics:true },
      { t:"*That is broader than it sounds. It is not just where you advertise. It is every route a booking can physically take to reach you.*", italics:true },
      { t:"*There are four families of route. Direct, which is your website, your phone, your front desk. OTAs, the big online travel agencies. B2B, the wholesalers who sell your rooms on to travel agents. And GDS, the network that corporate travel bookers work inside.*", italics:true },
      { t:"*Every booking your hotel takes arrives through one of those four. The rest of this module is about telling them apart, and knowing what each one costs you.*", italics:true },
    ]},
    { kind:"visual", lines:[
      "Left panel 40% navy, definition in white with the key phrase in gold. Right panel 60% white, four stacked cards with a thin coloured left edge. Keep card text short. No icons needed.",
    ]},
  ]});

/* 03 */
slides.push({ no:"03", title:"B2C and B2B: who is the customer?", time:"2:00", type:"Concept",
  spec:[
    ["objective","Establish the fundamental split. B2C sells to the guest. B2B sells to the trade. The learner should be able to place any channel on one side or the other."],
    ["layout","Two large columns, B2C left in blue, B2B right in gold. Each with a definition, examples, and who actually pays."],
    ["animation","Left column builds first, then right. A dividing line draws down the centre."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "**B2C, business to consumer**",
      "You are selling to the guest who will sleep in the room.",
      "Your website  ·  phone  ·  walk-in  ·  OTAs",
      "*The guest sees the rate. The guest pays the rate.*",
      "**B2B, business to business**",
      "You are selling to a trade partner who will resell the room.",
      "Wholesalers  ·  bedbanks  ·  tour operators  ·  DMCs",
      "*The partner buys at a net rate and sets their own selling price.*",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is the split that everything else hangs off. Who is the customer?*", italics:true },
      { t:"*In B2C, the customer is the guest. They see a rate, they book it, they pay it, they turn up. Your website is B2C. So is the front desk. So, importantly, is an OTA, because the guest is still the one choosing and paying. The OTA just sits in the middle.*", italics:true },
      { t:"*In B2B, the customer is not the guest. It is a business. A wholesaler, a bedbank, a tour operator. They buy your rooms at a net rate, and then they resell them to their own customers, usually travel agents, at whatever price they choose.*", italics:true },
      { t:"*That difference matters more than it looks. In B2C you control the price the guest sees. In B2B you control the price your partner pays, and after that it is out of your hands.*", italics:true },
      { t:"*Which is exactly where the problems start.*", italics:true },
    ]},
    { kind:"visual", lines:[
      "Two equal columns. Left B2C in Dusit blue, right B2B in gold. A thin vertical rule between them. Below each, a small strip showing the money flow: B2C guest to hotel direct; B2B hotel to partner to agent to guest.",
    ]},
  ]});

/* 04 */
slides.push({ no:"04", title:"The line blurred", time:"1:30", type:"Concept",
  spec:[
    ["objective","Correct the tidy picture from the previous slide. B2B and B2C are no longer separate worlds, and that is the source of most rate integrity problems."],
    ["layout","Three horizontal bands: PAST, TODAY, IMPACT. Past shows two clean separate lanes. Today shows them crossing. Impact lists three consequences."],
    ["animation","Past band appears intact, then the two lanes visibly cross over into the Today band, then Impact appears last."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "**Past**",
      "B2B sold only to travel agents, wholesalers and tour operators. B2C sold only to guests. Two separate lanes.",
      "**Today**",
      "**B2B2C.** Wholesalers now sell to guests directly, through connected agents, affiliates and white-label sites.",
      "**B2C2B.** Consumer platforms run affiliate and reseller programmes, so travel agents book through them.",
      "**Impact**",
      "Rate leakage  ·  price integrity problems  ·  distribution complexity",
    ]},
    { kind:"narration", lines:[
      { t:"*Now the honest version. That clean split I just drew you is how it used to work.*", italics:true },
      { t:"*It does not work like that any more. Wholesalers sell to guests now. They do it through connected agents, affiliate deals, and white-label websites that look nothing like a wholesaler. And it runs the other way too. Consumer platforms offer reseller tools, so travel agents book through channels that were built for guests.*", italics:true },
      { t:"*There is no clean line any more between who is a guest and who is a trade partner.*", italics:true },
      { t:"*Here is why that should concern you. You sold a room to a wholesaler at a net rate, on the understanding it would reach a travel agent. Instead it appears on a public website at a price below your own. Your guest sees it. Your parity is gone, and you did not do anything wrong.*", italics:true },
      { t:"*That is rate leakage. It is the single biggest reason distribution is managed as tightly as it is.*", italics:true },
    ]},
    { kind:"builder", lines:[
      "This slide replaces the assumption that B2B and B2C are separate. Do not let it be skipped. It sets up the rate leakage rule on slide 07 and the branching scenario on slide 13.",
    ]},
  ]});

/* 05 */
slides.push({ no:"05", title:"The Dusit distribution ecosystem", time:"0:30", type:"Transition",
  spec:[
    ["objective","Signal the section change. Move from concepts to Dusit's actual setup."],
    ["layout","Full-bleed navy. Section number and title, centred. No body copy."],
    ["animation","Number fades in, then title, then a thin gold rule draws beneath."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "**02**",
      "**The Dusit distribution ecosystem**",
      "Who plugs in, who does not, and what sits underneath.",
    ]},
    { kind:"narration", lines:[
      { t:"*So that is what distribution is, and how the lines have blurred. Now let us look at what Dusit actually runs.*", italics:true },
      { t:"*Who is connected, who is not, and what the systems underneath are doing.*", italics:true },
    ]},
  ]});

/* 06 */
slides.push({ no:"06", title:"Connected players: who plugs in directly?", time:"2:00", type:"Concept",
  spec:[
    ["objective","The learner can name Dusit's connected channels and understands that connected means rate and availability move automatically, with no one typing anything."],
    ["layout","Central hub diagram. Dusit at the centre, connected partners radiating outward in gold."],
    ["animation","Hub appears first, then each partner connects in turn as the narrator names it, with a line drawing outward."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "**Connected means the channel receives rates and availability automatically, and sends bookings back the same way. No manual loading. No email.**",
      "**OTAs**  ·  Booking.com  ·  Expedia  ·  Agoda  ·  Trip.com",
      "**B2B**  ·  HBX Group (Hotelbeds)  ·  WebBeds  ·  TBO Holidays",
      "**GDS**  ·  Amadeus  ·  Sabre  ·  Travelport",
      "**Direct**  ·  dusit.com and the booking engine  ·  central reservations by phone",
    ]},
    { kind:"narration", lines:[
      { t:"*Connected is the word to hold on to. A connected channel talks to our systems automatically. Rates go out, availability goes out, bookings come back, and nobody types anything.*", italics:true },
      { t:"*On the OTA side we have four. Booking.com, Expedia, Agoda and Trip.com.*", italics:true },
      { t:"*On the B2B side, three connected partners. HBX Group, which most people still call Hotelbeds. WebBeds. And TBO Holidays.*", italics:true },
      { t:"*Then GDS, which is Amadeus, Sabre and Travelport. And our own direct channels, dusit.com with its booking engine, and central reservations when a guest picks up the phone.*", italics:true },
      { t:"*Everything on this diagram moves automatically. That is what makes it powerful, and it is also why an error moves just as fast as a correction does.*", italics:true },
    ]},
    { kind:"visual", lines:[
      "Dusit in a navy circle at centre. Four groups radiate outward, each group a different arm: OTAs, B2B, GDS, Direct. Connected partners in gold boxes. Two-way arrows on every line, labelled once: rates and availability out, reservations in.",
      "Build this base diagram so it can be reused on slide 08 with the non-connected players added in blue.",
    ]},
    { kind:"builder", lines:[
      "The partner list is current as at May 2026. Confirm with Corporate Distribution before publishing, as contracted partners change.",
      "Note that **Sabre appears here as a GDS.** That is the booking network. It is a different thing from Sabre's hotel reservation system, which is covered on slide 11. Keep the two apart in any artwork.",
    ]},
  ]});

/* 07 */
slides.push({ no:"07", title:"B2B partners: the wholesale channel", time:"2:00", type:"Concept",
  spec:[
    ["objective","The learner understands how the wholesale model actually works, who Dusit's partners are, and the one rule that protects the hotel from rate leakage."],
    ["layout","Left: how the model works, as a four-step flow. Right: the three connected partners with what each is known for."],
    ["animation","Flow steps appear one at a time, then the partner cards, then the rule bar at the bottom in gold."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "**How it works:**",
      "Hotel sets a net rate  →  partner buys at that rate  →  partner adds their margin  →  travel agent sells to the guest",
      "**Dusit's connected B2B partners:**",
      "**HBX Group (Hotelbeds)**  ·  the largest, with campaign and loyalty programmes for agents",
      "**WebBeds**  ·  strong preferred-partner and market-specific tactical promotions",
      "**TBO Holidays**  ·  strong in South Asia and the Middle East, agent rewards programme",
      "**The rule:**",
      "**B2B rates are room-only products. They belong in B2B channels. They must never reach a public consumer site, directly or indirectly.**",
    ]},
    { kind:"narration", lines:[
      { t:"*Wholesale works differently from everything else, so it is worth slowing down.*", italics:true },
      { t:"*You give the partner a net rate. That is your number, the one you are content to receive. They add their own margin on top and sell it on to travel agents, who sell it to the guest. You do not see the final price, and you do not control it.*", italics:true },
      { t:"*Dusit has three connected wholesale partners. HBX Group, which you will hear called Hotelbeds, is the largest. WebBeds runs strong market-specific promotions. TBO Holidays is particularly strong across South Asia and the Middle East.*", italics:true },
      { t:"*Now the rule that matters, and it is the one worth taking away from this whole module.*", italics:true },
      { t:"*B2B rates are room-only products, and they belong in B2B channels. They must not be sold directly or indirectly to consumers. The moment a net rate appears on a public website, it undercuts your own price, your parity breaks, and the guest who was about to book on dusit.com books somewhere cheaper instead.*", italics:true },
      { t:"*That is the leak. Protecting against it is most of what distribution management actually is.*", italics:true },
    ]},
    { kind:"builder", lines:[
      "Do not put margin percentages on screen. Commercial terms are confidential and change by partner and year. The teaching point is the model, not the number.",
    ]},
  ]});

/* 08 */
slides.push({ no:"08", title:"Non-connected players", time:"1:00", type:"Concept",
  spec:[
    ["objective","The learner understands that not every channel is automated, and that manual channels carry a different kind of risk."],
    ["layout","Reuse the slide 06 diagram. Non-connected players fade in around the outside in blue, visibly outside the connected ring."],
    ["animation","Existing gold diagram appears at low opacity, then blue outer players fade in."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "**Not everything is automated.**",
      "Local travel agents  ·  corporate accounts booking by email  ·  smaller tour operators  ·  DMCs  ·  event and group organisers",
      "These channels need someone at the hotel to load the rate, check availability, and enter the booking by hand.",
      "*Manual means slower, and it means the error risk sits with your team.*",
    ]},
    { kind:"narration", lines:[
      { t:"*Not everything plugs in. Plenty of business still arrives the old way.*", italics:true },
      { t:"*A local agent who emails. A corporate account with a negotiated rate. A small tour operator. A DMC arranging a group.*", italics:true },
      { t:"*None of that is automatic. Somebody at the hotel loads the rate, checks the availability, and keys the booking in.*", italics:true },
      { t:"*Which means two things. It is slower. And when something goes wrong, it went wrong on your side, not in a system. Manual channels need the same discipline as connected ones, they just do not enforce it for you.*", italics:true },
    ]},
    { kind:"builder", lines:[
      "Reuse the base diagram from slide 06 using iSpring layers. Do not rebuild it.",
    ]},
  ]});

/* 09 */
slides.push({ no:"09", title:"Map the booking to its channel", time:"2:30", type:"Interaction",
  spec:[
    ["objective","Apply the direct, connected third party, B2B and non-connected distinctions to real booking situations."],
    ["layout","Eight booking cards along the top. Four labelled drop zones below: Direct, Connected third party, B2B, Non-connected."],
    ["animation","Cards snap into zones. Correct placement turns the card gold. Incorrect returns it to the top with a short explanation."],
  ],
  boxes:[
    { kind:"interaction", lines:[
      "**Mechanic:** drag-and-drop. 8 cards, 4 drop zones. Practice only, ungraded. Unlimited attempts. Feedback appears per card on drop.",
      "**Drop zones:** Direct  ·  Connected third party (OTA and GDS)  ·  B2B  ·  Non-connected",
      "**Cards and correct zones:**",
      "1. Guest books on dusit.com  →  **Direct**",
      "2. Guest books on Agoda  →  **Connected third party**",
      "3. A travel agent in Delhi books through TBO Holidays  →  **B2B**",
      "4. Corporate secretary emails the hotel for a negotiated rate  →  **Non-connected**",
      "5. Guest walks in without a reservation  →  **Direct**",
      "6. A tour operator sends a group by email  →  **Non-connected**",
      "7. Booking arrives via HBX Group  →  **B2B**",
      "8. Corporate traveller books through Amadeus  →  **Connected third party**",
      "**Feedback on the two tricky ones.** Card 8: a GDS booking is connected, exactly like an OTA booking. It arrives automatically. Card 3: TBO is a wholesale partner, so this is B2B even though a travel agent made the booking.",
    ]},
    { kind:"narration", lines:[
      { t:"*Your turn. Eight bookings, four routes. Drag each one where it belongs.*", italics:true },
      { t:"*Two of these are trickier than they look, so take your time. There is no score on this one.*", italics:true },
    ]},
    { kind:"builder", lines:[
      "Ungraded. Do not gate progress on completion, but do require every card to be placed before Continue activates.",
      "The second zone is labelled **Connected third party**, not OTA, so that GDS bookings have a correct home. Keep that label exactly as written.",
    ]},
  ]});

/* 10 */
slides.push({ no:"10", title:"The systems behind every booking", time:"0:30", type:"Transition",
  spec:[
    ["objective","Signal the final section. Move from who to what."],
    ["layout","Full-bleed navy. Section number and title, centred."],
    ["animation","Number, then title, then gold rule."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "**03**",
      "**The systems behind every booking**",
      "What actually moves a rate from a decision to a screen.",
    ]},
    { kind:"narration", lines:[
      { t:"*You know who the players are. Last section: the machinery that connects them.*", italics:true },
    ]},
  ]});

/* 11 */
slides.push({ no:"11", title:"Which system does what", time:"2:00", type:"Concept",
  spec:[
    ["objective","The learner can name the three systems a booking touches and say what each one is for. The point is the division of labour, not the brand names: one place holds the rate, one layer carries it out to partners, one system runs the hotel."],
    ["layout","Split. Left: three systems, three jobs, as a stacked list. Right: a flow diagram running left to right, from the rate decision to the partner and back to Opera."],
    ["animation","Left list builds one system at a time. Then the right diagram draws. Then a rate change animates the whole way through, out to every connected partner at once."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "**Three systems. Three jobs.**",
      "**The CRS.** Where the rate and the availability live. One place, one version of the truth. It also serves dusit.com's booking engine, central reservations on the phone, and the GDS. *Dusit runs SynXis, from Sabre.*",
      "**The channel manager.** The connectivity layer out to connected partners. It carries rates and availability to the OTAs and the B2B partners, translates the data into the shape each one needs, and brings their bookings back. *Dusit runs D-Edge.*",
      "**Opera PMS.** The property system. Reservations land here. This is the screen your team actually works in.",
      "Gold pull-quote:",
      "**“Change the rate once. Every connected channel follows. That is the whole point.”**",
      "Careful:",
      "*Sabre appears twice on the map and means two different things. Sabre the GDS is a booking network for travel agents. SynXis is Sabre's hotel reservation system. Same company, different jobs.*",
    ]},
    { kind:"narration", lines:[
      { t:"*This is the engine room, and there are only three things in it. Learn what each one is for and the rest of distribution stops feeling like magic.*", italics:true },
      { t:"*First, the CRS, the central reservation system. That is where the rate and the availability live. When your revenue manager changes a rate, this is where the change is made. One place, one version of the truth. The CRS also feeds your own channels directly, so dusit.com, the booking engine, the phone, and the GDS all read from it. Dusit runs SynXis, which comes from Sabre.*", italics:true },
      { t:"*Second, the channel manager. That is the layer that carries your rates and your availability out to connected partners, the OTAs and the wholesalers. Every one of them wants that data in a slightly different shape, and the channel manager does the translating. When a booking comes back from Booking.com or from HBX, it comes back through here. Dusit runs D-Edge, which came in for that job in January 2022.*", italics:true },
      { t:"*Third, Opera, your property management system. The reservation lands there. That is the screen your front office and your reservations team live in.*", italics:true },
      { t:"*Here is what actually matters to you. You do not need to know which box a booking crossed. You need to know that one rate decision reaches every connected channel on its own, without anyone logging into six extranets.*", italics:true },
      { t:"*And you need to know the other half of that. A mistake travels just as fast as a correction does. The system does not check whether you meant it.*", italics:true },
      { t:"*One thing to keep straight before we move on. You will see the name Sabre twice. Sabre the GDS is a booking network that travel agents work in. SynXis is Sabre's hotel reservation system. Same company, two completely different jobs.*", italics:true },
    ]},
    { kind:"visual", lines:[
      "Left column: three stacked cards, each with the job in bold and the Dusit system name in smaller gold text beneath. **The job is the headline. The brand name is the footnote.** Do not reverse that.",
      "Right diagram, left to right. Start with a small box, “Revenue sets a rate.” An arrow into a navy box, **CRS**. From the CRS, two paths fan out:",
      "Path one, straight to gold boxes labelled dusit.com booking engine, central reservations, GDS.",
      "Path two, through a blue box, **CHANNEL MANAGER**, then out to gold boxes grouped as OTAs and B2B partners.",
      "Return arrows from every gold box run back the way they came and converge on a white box, **OPERA PMS**.",
      "After the diagram builds, animate a rate change: one value updates at the CRS and lights up every gold box at once, along both paths.",
    ]},
    { kind:"builder", lines:[
      "**Architecture note, read before building this slide.** The CRS and the channel manager are two systems doing two jobs. Dusit runs both. Any earlier material that presents one as having replaced the other is wrong and should not be reused.",
      "For the record: Sabre SynXis is the CRS, covering central reservations, the booking engine, voice and GDS distribution. D-Edge came in as channel manager in January 2022, taking over the channel-management function that had previously sat inside SynXis. That was a change to one function, not a platform replacement.",
      "**Open item for Dusit.** Which connected partners route through SynXis Channel Connect and which route through D-Edge is a per-partner mapping we do not yet have. Corporate Distribution to confirm the current list before publishing. If the answer changes, only the partner list changes. The teaching on this slide holds either way.",
      "Do not put a per-partner routing table on screen until that list is confirmed.",
    ]},
  ]});

/* 12 */
slides.push({ no:"12", title:"GDS and metasearch", time:"1:30", type:"Concept",
  spec:[
    ["objective","Complete the map. The learner can tell GDS from metasearch and knows metasearch does not sell anything itself."],
    ["layout","Two stacked panels. GDS on top, metasearch below, each with a one-line definition and examples."],
    ["animation","GDS panel first, then metasearch."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "**GDS**",
      "The booking network corporate travel bookers and traditional agents work inside. Amadeus, Sabre, Travelport.",
      "*Connected. Bookings arrive automatically.*",
      "**Metasearch**",
      "Comparison sites. Google Hotels, Tripadvisor, Trivago.",
      "*They do not sell the room. They show prices side by side and send the guest somewhere else to book.*",
    ]},
    { kind:"narration", lines:[
      { t:"*Two more to place on the map.*", italics:true },
      { t:"*GDS is the network that corporate travel bookers and traditional agents work inside. Amadeus, Sabre, Travelport. If a company has a travel policy and a booking tool, this is usually what sits behind it. It is connected, and it reads straight from the CRS, so those bookings arrive automatically.*", italics:true },
      { t:"*Metasearch is different, and people get it wrong. Google Hotels, Tripadvisor, Trivago. They do not sell your room. They show your price next to everyone else's and then hand the guest off to whoever is selling it.*", italics:true },
      { t:"*Which means metasearch is where your parity is on public display. If your rate on an OTA is lower than your own website, that is the screen where the guest finds out.*", italics:true },
    ]},
  ]});

/* 13 */
slides.push({ no:"13", title:"Trace the booking", time:"3:00", type:"Interaction",
  spec:[
    ["objective","Put the whole journey together. The learner follows one booking from guest to Opera and identifies what it cost the hotel and why."],
    ["layout","Booking details card fixed on the left throughout. Decision stages appear on the right, one at a time."],
    ["animation","Each answer reveals the next stage. The route builds visually on the left as a growing chain."],
  ],
  boxes:[
    { kind:"interaction", lines:[
      "**Mechanic:** four sequential decision stages. Unlimited retries per stage. No penalty. Booking card stays visible on the left throughout.",
      "**Booking card:**",
      "Guest: Ms Anjali Rao  ·  1 Deluxe King, 3 nights  ·  Rate arrived as a net rate, room only  ·  No loyalty number  ·  Booking reference format is not one of ours",
      "**Stage 1. Where did this booking come from?**",
      "Options: dusit.com / an OTA / a B2B partner / walk-in.  **Correct: a B2B partner.** Feedback: a net rate, room only, and an unfamiliar reference format are the giveaways.",
      "**Stage 2. Nobody at the hotel loaded this rate into the partner's system. So how did the partner have it?**",
      "Options: the partner set the rate themselves / it was emailed to them last month / the rate lives in the CRS and the channel manager carried it out to them / Opera sent it.  **Correct: the CRS holds it, the channel manager carried it out.** Feedback: that is what connected means. One rate decision, carried out to every connected partner automatically, and their bookings routed back the same way.",
      "**Stage 3. The guest asks to add breakfast at check-in. What is the issue?**",
      "Options: no issue, add it / the rate is room-only so breakfast is charged separately / refuse the request / change the rate code.  **Correct: room-only, charge separately.** Feedback: B2B rates are room-only products. Changing the rate code breaks the partner agreement and corrupts the reporting.",
      "**Stage 4. A colleague finds the same room on a public discount site, cheaper than dusit.com. What is happening?**",
      "Options: normal OTA pricing / rate leakage from a B2B rate reaching a consumer site / the hotel made an error / a guest promotion.  **Correct: rate leakage.** Feedback: this is exactly what the B2B channel rule exists to prevent. Report it to Corporate Distribution the same day.",
    ]},
    { kind:"narration", lines:[
      { t:"*One booking. Four questions. Follow it all the way through.*", italics:true },
      { t:"*Everything you need is on the card to your left. Take your time, and if you get one wrong just try again.*", italics:true },
    ]},
    { kind:"builder", lines:[
      "Stage 4 is the one that matters. It connects the blurred-lines slide, the B2B rule, and what to do about it. Make sure the feedback names the escalation path.",
      "Stage 2 tests the function, not the brand name. Do not rewrite the options to name a single system as the answer.",
    ]},
  ]});

/* 14 */
slides.push({ no:"14", title:"Three checks before the quiz", time:"1:30", type:"Knowledge Check",
  spec:[
    ["objective","Confirm the three concepts the quiz depends on, before the quiz is graded."],
    ["layout","One question at a time, centred. Immediate feedback. All three must be correct to continue."],
    ["animation","Question fades in. Feedback appears below the selected option."],
  ],
  boxes:[
    { kind:"quiz", lines:[
      "**Q1. A wholesaler buys your rooms at a net rate. Who decides what the guest finally pays?**",
      "a) The hotel     b) The wholesaler or their agent     c) The guest     d) The channel manager",
      "✓ Correct: b. Once you sell at a net rate, the selling price is the partner's decision.",
    ]},
    { kind:"quiz", lines:[
      "**Q2. Which of these does NOT sell a room?**",
      "a) Booking.com     b) TBO Holidays     c) Trivago     d) dusit.com",
      "✓ Correct: c. Metasearch compares prices and passes the guest on. It does not take the booking.",
    ]},
    { kind:"quiz", lines:[
      "**Q3. A rate change is made once and appears on every connected channel. What made that happen?**",
      "a) Opera pushed it out to the partners",
      "b) The rate lives in the CRS, and the channel manager carried it out to every connected partner",
      "c) Someone updated each OTA extranet",
      "d) The GDS distributed it to everyone",
      "✓ Correct: b. The CRS holds the rate. The channel manager carries it out. That is the division of labour.",
    ]},
    { kind:"builder", lines:[
      "Ungraded. All three must be answered correctly before the quiz unlocks. Allow unlimited attempts.",
    ]},
  ]});

/* 15 */
slides.push({ no:"15", title:"Five questions. Real situations.", time:"5:00", type:"Quiz",
  spec:[
    ["objective","Assess decision-making, not recall. Every question puts the learner in a situation and asks what they would do or conclude."],
    ["layout","One question per screen. Feedback after each. Score screen at the end."],
    ["animation","Standard iSpring quiz. Progress indicator visible."],
  ],
  boxes:[
    { kind:"quiz", lines:[
      "**Question 1 of 5.** Your DOSM wants to add a new wholesale partner because they promise volume. What should you check first?",
      "a) Whether they can deliver the volume",
      "b) What the net rate is and where those rooms will end up being sold",
      "c) Whether competitors use them",
      "d) How quickly they can connect",
      "✓ Correct: b. Volume is worthless if the rate leaks onto a public site and undercuts your own.",
    ]},
    { kind:"quiz", lines:[
      "**Question 2 of 5.** A guest at check-in has a booking with a net rate, room only, from a partner reference you do not recognise. They ask why breakfast is not included. What do you do?",
      "a) Include breakfast to keep them happy",
      "b) Explain the rate is room-only, and offer breakfast as a paid add-on",
      "c) Change the rate code to one with breakfast",
      "d) Tell them to take it up with their agent",
      "✓ Correct: b. B2B rates are room-only products. Changing the code breaks the agreement and corrupts the reporting.",
    ]},
    { kind:"quiz", lines:[
      "**Question 3 of 5.** Your hotel's rate on Trivago shows a third-party site cheaper than dusit.com. What is the most likely cause?",
      "a) Trivago has an error",
      "b) A B2B net rate has reached a consumer channel",
      "c) Your website is priced too high",
      "d) The OTA is discounting its own commission",
      "✓ Correct: b. That is rate leakage, and it is the reason B2B rates are restricted to B2B channels.",
    ]},
    { kind:"quiz", lines:[
      "**Question 4 of 5.** Revenue changes the rate for next weekend on Friday afternoon. Which channels are selling the new rate on Saturday morning?",
      "a) Only dusit.com",
      "b) Every connected channel: the OTAs, the B2B partners, the GDS and direct",
      "c) Only the OTAs",
      "d) None of them, each one has to be updated separately",
      "✓ Correct: b. Connected channels update on their own. The non-connected ones, the local agent and the corporate account on email, are still sitting on the old rate until somebody tells them.",
    ]},
    { kind:"quiz", lines:[
      "**Question 5 of 5.** Two bookings, same room, same night, same rate on screen. One came through dusit.com, one through an OTA. What is different?",
      "a) Nothing, the rate is the same",
      "b) What the hotel keeps after commission",
      "c) The guest gets a better room on one",
      "d) The OTA booking is worth more",
      "✓ Correct: b. The guest pays the same. The hotel does not receive the same.",
    ]},
    { kind:"builder", lines:[
      "Graded. Pass mark 80%, so 4 of 5. One retry. Score reports to the Moodle gradebook. Completion requires the quiz passed and all slides visited.",
    ]},
  ]});

/* 16 */
slides.push({ no:"16", title:"Every channel has a cost", time:"1:00", type:"Summary",
  spec:[
    ["objective","Land one line the learner remembers, and give them three consequences they own."],
    ["layout","Full-bleed navy. Headline centred. Three supporting lines below with a gold left rule. Download button at the base."],
    ["animation","Headline first, then the three lines in sequence, then the download."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "**Every channel has a cost. The more direct the booking, the more the hotel keeps.**",
      "Every booking that arrives through the right channel protects the rate you set.",
      "Every net rate that stays inside a B2B channel protects your direct business.",
      "Every leak spotted early is revenue your hotel keeps.",
      "*Download: one-page distribution reference*",
    ]},
    { kind:"narration", lines:[
      { t:"*One thing to take with you.*", italics:true },
      { t:"*Every channel has a cost. The more direct the booking, the more the hotel keeps.*", italics:true },
      { t:"*That does not mean direct is the only channel worth having. OTAs bring you guests who would never have found you. Wholesalers reach markets you could not reach alone. Every channel earns its place.*", italics:true },
      { t:"*But you should always know which channel a booking came through, and what it cost you to get it. Because the moment a rate ends up somewhere it was never meant to be, the hotel pays for a booking it would have had anyway.*", italics:true },
    ]},
    { kind:"builder", lines:[
      "The one-page reference PDF is a separate asset. Link it once supplied.",
    ]},
  ]});

/* ---------------- assemble ---------------- */
const children = [];

children.push(
  new Paragraph({ alignment: ctr, spacing: { before: 1400, after: 80 }, children: [new TextRun({ text: "DUSIT HOTELS & RESORTS   ·   REVENUE & COMMERCIAL TRAINING PROGRAMME", bold: true, size: 20, color: NAVY, font: FONT, characterSpacing: 30 })] }),
  new Paragraph({ alignment: ctr, spacing: { before: 220, after: 80 }, children: [new TextRun({ text: "OTA 1   ·   DISTRIBUTION BASIC KNOWLEDGE", bold: true, size: 26, color: GOLD, font: FONT, characterSpacing: 40 })] }),
  new Paragraph({ alignment: ctr, spacing: { after: 100 }, children: [new TextRun({ text: "About OTA and B2B", bold: true, size: 44, color: NAVY, font: FONT })] }),
  new Paragraph({ alignment: ctr, spacing: { after: 320 }, children: [new TextRun({ text: "Every channel has a cost. The more direct the booking, the more the hotel keeps.", italics: true, size: 22, color: MUTE, font: FONT })] }),
);
const ci = (label, val) => new TableCell({
  width: { size: CW / 4, type: WidthType.DXA }, shading: { fill: "EAEFF6", type: ShadingType.CLEAR, color: "auto" }, borders: noBorders("EAEFF6"),
  margins: { top: 140, bottom: 140, left: 80, right: 80 }, verticalAlign: VerticalAlign.CENTER,
  children: [
    new Paragraph({ alignment: ctr, spacing: { after: 40 }, children: [new TextRun({ text: label, bold: true, size: 16, color: GOLD, font: FONT, characterSpacing: 28 })] }),
    new Paragraph({ alignment: ctr, children: [new TextRun({ text: val, bold: true, size: 21, color: NAVY, font: FONT })] }),
  ],
});
children.push(new Table({ width: { size: CW, type: WidthType.DXA }, columnWidths: [CW/4,CW/4,CW/4,CW/4],
  rows: [new TableRow({ children: [ci("DURATION","30 minutes"), ci("SLIDES","16 slides"), ci("DELIVERY","iSpring / SCORM 1.2"), ci("AUDIENCE","GM · DOS · DOR · DOM")] })] }));
children.push(new Paragraph({ alignment: ctr, spacing: { before: 340, after: 40 }, children: [new TextRun({ text: "Instructional Design Blueprint   ·   Version 3.0   ·   August 2026   ·   Supersedes v2.0", size: 20, color: MUTE, font: FONT })] }));
children.push(new Paragraph({ alignment: ctr, children: [new TextRun({ text: "Prepared by DHI Hospitality for Dusit Hotels & Resorts   ·   Confidential", size: 20, color: MUTE, font: FONT })] }));
children.push(new Paragraph({ children: [new PageBreak()] }));

/* ---- what changed ---- */
children.push(Hh("What Changed in Version 3.0"));
children.push(P("Version 2.0 taught the distribution architecture as a replacement: D-Edge in, SynXis out. That was wrong. Dusit runs both, doing two different jobs. Version 3.0 teaches the division of labour instead, which is what a commercial leader actually needs to know and which stays correct however the per-partner routing is confirmed. Everything else agreed at version 2.0 stands.", { after: 160 }));
children.push(changeTable([
  ["Architecture","D-Edge presented as the hub that replaced SynXis in January 2022","Two systems, two jobs. The CRS holds the rate and serves the direct and GDS channels. The channel manager carries rates out to connected partners and routes their bookings back. Dusit runs SynXis as the CRS and D-Edge as the channel manager."],
  ["Slide 11","“D-Edge: the connectivity layer”","“Which system does what.” The job is the headline, the brand name is the footnote."],
  ["Slide 01","Animation named D-EDGE as one of the boxes","Boxes stay generic: OTA, channel manager, CRS, Opera. Brand names arrive on slide 11, after the learner knows what each system is for."],
  ["Slide 09","Drop zone labelled OTA, with a note that GDS had nowhere to go","Drop zone labelled Connected third party. GDS and OTA both belong there, and the feedback says why."],
  ["Slides 13, 14, 15","Answers named D-Edge","Answers name the function. A learner who knows what a CRS and a channel manager are for gets these right whatever the systems are called."],
  ["New teaching point","Not covered","Sabre appears twice on the map. Sabre the GDS is a booking network. SynXis is Sabre's hotel reservation system. Slide 11 separates them."],
  ["Open item","Recorded as a correction to make","Recorded as a question for Corporate Distribution: which partners route through SynXis Channel Connect and which through D-Edge. Slide 11 holds either way."],
]));
children.push(spacer(140));
children.push(box("builder", [
  "**Sources for this revision.** Accreditation Module, Distribution, B2B Connected Account, Edwardo Iswandi, 13 May 2026: the timeline records the channel manager change from SynXis to D-Edge in January 2022, in the context of the B2B connected accounts. Retail and Leisure Distribution Strategy 2024: the platform roadmap lists “1 OXI (CRS and D-Edge)”, which only makes sense if the CRS and D-Edge are two separate systems both feeding Opera. Sabre Hospitality product page for Dusit: CRS, booking engine, voice agent, GDS distribution and Channel Connect.",
  "Read together, January 2022 changed one function on the wholesale side. It was not a platform replacement.",
  "**Before publishing,** Corporate Distribution to confirm the current per-partner routing and that the setup is chain-wide. No slide in this module depends on that answer.",
]));
children.push(new Paragraph({ children: [new PageBreak()] }));

/* ---- legend ---- */
children.push(Hh("How to Read This Document"));
children.push(P("Every slide is fully specified. The builder builds exactly what is described. The voice artist reads exactly what is scripted. Colour tells you what kind of instruction you are looking at.", { after: 160 }));
[
  ["narration","Word for word. Read exactly as written. Do not paraphrase."],
  ["screen","Text that appears on the slide. Headings, body, labels."],
  ["visual","Layout, colour, imagery, diagram construction."],
  ["interaction","Drag-and-drop, hotspots, branching. Mechanics and feedback."],
  ["quiz","Graded and ungraded questions, options, correct answer, feedback."],
  ["builder","Instructions for the iSpring builder or the hotel team."],
  ["content","Reference material and background. Not shown to the learner."],
].forEach(([k, t]) => { children.push(box(k, [t])); children.push(spacer(70)); });
children.push(new Paragraph({ children: [new PageBreak()] }));

/* ---- narrative ---- */
children.push(Hh("The Narrative"));
children.push(P("This module has one job: make an invisible system visible. Most people in a hotel know bookings arrive. Very few know how, through what, or at what cost. That gap is where money leaks.", { after: 140 }));
children.push(P("The arc runs in three moves, matching the agreed agenda for Distribution Basic Knowledge.", { after: 160 }));
children.push(arcBox("The arc, 16 slides, 30 minutes", [
  { lead:"01. Basic knowledge, OTAs and B2B (slides 1 to 4)", rest:"Start with what distribution is, then the fundamental split: who is the customer. B2C sells to the guest, B2B sells to the trade. Then the honest complication: that line has blurred, and rate leakage is what comes out of it." },
  { lead:"02. Dusit's distribution ecosystem (slides 5 to 9)", rest:"Who plugs in and who does not. The four connected OTAs, the three connected B2B partners, GDS, and the manual channels that still need a person. Then an exercise that makes the learner sort real bookings." },
  { lead:"03. The role of distribution (slides 10 to 16)", rest:"The three systems and what each one is for, GDS and metasearch, a full booking traced end to end, and the commercial point: every channel carries a cost, and the channel decides what the hotel keeps." },
]));
children.push(spacer(140));
children.push(box("content", [
  "**Tone.** Conversational. Shift briefing, not corporate training. Short sentences. The audience is commercial leadership, so operational actions belong to their teams and commercial decisions belong to them. No jargon that a new DOSM would have to look up. Open on a consequence. Close on one line.",
  "**System names.** Every system is introduced by what it does before it is named. A learner who leaves this module knowing what a CRS is for, and what a channel manager is for, can walk into any hotel in any group and be useful. A learner who only memorised two brand names cannot.",
]));
children.push(new Paragraph({ children: [new PageBreak()] }));

/* ---- glance ---- */
children.push(Hh("Module at a Glance"));
children.push(glanceTable(glance));
children.push(spacer(100));
children.push(box("content", ["Total: 30 minutes across 16 slides. Pass mark 80% (4 of 5). One retry allowed. Completion: quiz passed and all slides visited. SCORM bookmarking on, so the learner resumes where they left off. Audience: GM, DOS, DOR, DOM."]));
children.push(new Paragraph({ children: [new PageBreak()] }));

/* ---- slides ---- */
children.push(Hh("Slide Specifications"));
children.push(P("Each slide is fully specified below. The voice-over reads the narration script exactly. The builder follows the visual direction, interaction specs and builder notes. On-screen text and narration complement each other; they do not simply repeat.", { after: 160 }));

slides.forEach((s, idx) => {
  children.push(slideHeader(s.no, s.title, s.time, s.type));
  children.push(spacer(60));
  if (s.spec && s.spec.length) { children.push(specTable(s.spec)); children.push(spacer(80)); }
  s.boxes.forEach((b) => { children.push(box(b.kind, b.lines)); children.push(spacer(80)); });
  if (idx !== slides.length - 1) children.push(spacer(120));
});
children.push(new Paragraph({ children: [new PageBreak()] }));

/* ---- appendix ---- */
children.push(Hh("Appendix: Production Notes"));
children.push(new Paragraph({ spacing: { before: 120, after: 80 }, children: [new TextRun({ text: "Assets Required", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "Booking journey animation, slide 01. Roughly 8 seconds, autoplay, no skip. Generic system boxes only, no brand names.",
  "Ecosystem base diagram, built once for slide 06 and reused with iSpring layers on slide 08 with the non-connected players added in blue.",
  "Which system does what diagram, slide 11. Two paths out of the CRS, return arrows converging on Opera, and a rate-change animation that lights every connected partner at once.",
  "One-page distribution reference, PDF download on slide 16. To be supplied.",
  "Partner names. No logos required. Text only, to avoid brand usage issues.",
  "Dusit logo, white version, transparent background.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "iSpring Builder Checklist", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "Slide 01 autoplays on entry. No skip. Continue appears after the sequence completes.",
  "Slide 06 diagram built with layers so slide 08 reuses it rather than rebuilding it.",
  "Slide 09 drag-and-drop is ungraded but requires all eight cards placed before Continue activates. Second drop zone labelled Connected third party.",
  "Slide 11 diagram animates a single rate change along both paths simultaneously.",
  "Slide 13 branching allows unlimited retries with no scoring.",
  "Slide 14 knowledge check gates the quiz. All three correct to proceed. Unlimited attempts.",
  "Slide 15 graded, 80% pass, one retry, score reported to Moodle.",
  "SCORM bookmarking on. The learner resumes where they left off.",
  "Completion is quiz passed AND all slides visited.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "QA Checklist", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "The CRS and the channel manager are presented as two systems with two jobs. Nothing in the module says one replaced the other.",
  "Every system is introduced by its function before any brand name appears. Slide 01 carries no brand names at all.",
  "Sabre the GDS and Sabre's SynXis reservation system are visibly separated on slide 11.",
  "No per-partner routing table appears anywhere until Corporate Distribution confirms the list.",
  "Slides 13, 14 and 15 can all be answered by a learner who understands the functions, without memorising a system name.",
  "No commission or margin percentages on screen.",
  "No real property data and no live rate figures.",
  "Partner names spelled as: HBX Group (Hotelbeds), WebBeds, TBO Holidays.",
  "Zero em-dashes in on-screen text and narration.",
  "Every quiz question tests a decision, not a definition.",
  "Narration does not repeat on-screen text word for word.",
  "Content reviewed by Corporate Distribution before launch.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "Cross-References", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "Slide 06. Rate architecture and how BAR drives derived rates: Module 1.",
  "Slide 09. Segment codes and the four tracking fields: Module 2.",
  "Slide 07. Contracted partners, commission models and endorsed promotions: OTA 2.",
  "Slide 11. Rate loading and channel management in detail, including who loads what and where: Module 4.",
  "Slide 12. Rate parity monitoring through Fornova: OTA Rate Parity module.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(spacer(200));
children.push(new Paragraph({ alignment: ctr, children: [new TextRun({ text: "Dusit Revenue & Commercial Training Programme  ·  OTA 1, Distribution Basic Knowledge  ·  Version 3.0  ·  DHI Hospitality  ·  August 2026", size: 18, color: MUTE, font: FONT })] }));

const doc = new Document({
  numbering: { config: [{ reference: "bul", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 460, hanging: 260 } } } }] }] },
  styles: { default: { document: { run: { font: FONT, size: 20, color: INK } } } },
  sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } }, children }],
});
Packer.toBuffer(doc).then(buf => { const out = process.env.OUT || "../blueprints/OTA1-Distribution-Basic-Knowledge-Blueprint-v3.docx"; fs.writeFileSync(out, buf); console.log("WROTE", out, buf.length, "bytes |", slides.length, "slides"); });
