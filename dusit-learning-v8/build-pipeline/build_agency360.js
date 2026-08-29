/* Dusit Revenue Training Programme — Module 8 (Amadeus): AGENCY360
   Conceptual, screen-reading blueprint. No property data. Penetration 100 = fair share.
   Opportunity = the production you are missing. Built on the shared v7 helpers. */
const fs = require("fs");
const H = require("./helpers.js");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, ShadingType, VerticalAlign, PageBreak, LevelFormat,
  NAVY, GOLD, MUTE, INK, FONT, CW, noBorders, box, arcBox, slideHeader, specTable, glanceTable, P, spacer,
} = H;
const Hh = H.H;
const ctr = AlignmentType.CENTER;

/* ---------------- glance ---------------- */
const glance = [
  ["01","Hook","A travel agent just booked your competitor","2:00","None","Hook"],
  ["02","Concept","Inside the GDS search: availability, rate, book","2:00","Hotspot","Hook"],
  ["03","Concept","From search to data: how the booking is captured","1:30","None","Hook"],
  ["04","Concept","Agency360: penetration, and the opportunity you're missing","2:00","None","Foundation"],
  ["05","Concept","Overview: your GDS production against the market","2:00","None","Reading the Tabs"],
  ["06","Concept","Agency Targeting: the accounts you're missing","2:30","Hotspot","Reading the Tabs"],
  ["07","Concept","Inside an agency: the profile, and the corporates behind it","2:30","None","Reading the Tabs"],
  ["08","Concept","Corporate Performance: the company behind the spend","2:00","None","Reading the Tabs"],
  ["09","Concept","Consortia: AMEX, BCD, CWT, and FCM","1:30","None","Reading the Tabs"],
  ["10","Concept","Performance Trends: your GDS posture over time","1:30","None","Reading the Tabs"],
  ["11","Concept","Booking Patterns: price, stay, and lead time","1:30","None","Reading the Tabs"],
  ["12","Concept","From intel to action: market in the GDS, target the account","1:30","None","Apply"],
  ["13","Interaction","Match the account to the move","2:30","Drag-match","Apply"],
  ["14","Scenario","They're booking your competitor. Now what?","2:30","Branching","Apply"],
  ["15","Knowledge Check","A moment to check before the quiz","1:30","2 questions","Assess"],
  ["16","Quiz","Five questions, real situations","5:00","Graded quiz","Assess"],
  ["17","Summary","Every missing account is a sales call","1:00","None","Assess"],
];

const slides = [];

/* 01 */
slides.push({ no:"01", title:"A travel agent just booked your competitor", time:"2:00", type:"Hook",
  spec:[
    ["objective","Open on a consequence, not a definition. A booking just happened on a GDS screen, and it went to a competitor. Establish that GDS bookings are decided on the agent's screen, and that every one carries an account's name."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Agent-side GDS availability screen as the backdrop, placeholder capture in the Sabre or Amadeus style: a ranked list of hotels for a city and dates, each with a rate. Dim a row low in the list to read as \u201Cyour property.\u201D Ring a competitor near the top, with a small promotional banner beside it. Schematic only, no real hotel names or rates.",
    ]},
    { kind:"screen", lines:[
      "**A travel agent searched your city. A list of hotels came back. They booked one.**",
      "It wasn't yours.",
      "**Every GDS booking carries a name:** the agency that made it, and a company behind that agency.",
      "Agency360 shows you the bookings you didn't get, and exactly whose name was on them.",
    ]},
    { kind:"narration", lines:[
      { t:"*Somewhere right now, a travel agent types a city and two dates into a screen, and a short list of hotels comes back. Yours might be on it. In a few seconds they pick one and book it.*", italics:true },
      { t:"*That booking carries a name. The agency that made it, and somewhere behind that agency, a company. Most hotels never see it. They just see the month come in a little short and call it soft demand.*", italics:true },
      { t:"*The booking you lost had a name on it the whole time. Agency360 is the tool that shows you the bookings that went to your competitors instead of you, and the accounts behind them. This module is about turning each one into a sales call.*", italics:true },
    ]},
  ]});

/* 02 */
slides.push({ no:"02", title:"Inside the GDS search: availability, rate, book", time:"2:00", type:"Concept",
  spec:[
    ["objective","Demystify the GDS for a sales audience. Three steps the agent takes, availability, rate, book, so the learner sees where the booking is decided and what a hotel can influence."],
    ["interaction","Hotspot on the GDS availability screen. Three areas: the ranked hotel list, the rate, and the promotional banner beside a hotel."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "GDS availability display, placeholder capture. Three gold hotspot rings: the ranked hotel list, the rate column, and a promotional banner sitting beside one hotel. Schematic call-outs only.",
    ]},
    { kind:"screen", lines:[
      "**Three steps, every time.**",
      "**Availability:** the agent searches a city and dates, a ranked list of hotels comes back.",
      "**Rate:** they compare rates, and what each one includes.",
      "**Book:** they pick one and sell it.",
      "A hotel can influence two of these: where you sit in the list, and the message beside your name.",
    ]},
    { kind:"interaction", lines:[
      "**Type:** hotspot, three areas, all opened before Continue.",
      "**Tooltip A (the list):** \u201CThis is the shelf. If you are not on it, or buried, you are not in the decision.\u201D",
      "**Tooltip B (the rate):** \u201CRate matters, but so does what is bundled: commission, value-adds, a free night.\u201D",
      "**Tooltip C (the banner):** \u201CThis is your billboard inside the search. A message here is GDS advertising. We come back to it at the end.\u201D",
    ]},
    { kind:"narration", lines:[
      { t:"*The GDS is not as mysterious as it sounds. The agent does three things. First, availability: they search a city and dates, and a ranked list of hotels comes back. Second, rate: they look at the price and what is bundled with it. Third, book: they choose one and sell it.*", italics:true },
      { t:"*Here is what matters for sales. You can influence two of those three steps. Where you sit in that list, and the message the agent sees next to your name. The booking itself is the agent's to make. Your job is to be on the shelf, and to give them a reason to pick you. Hold that thought, we close the module on it.*", italics:true },
    ]},
  ]});

/* 03 */
slides.push({ no:"03", title:"From search to data: how the booking is captured", time:"1:30", type:"Concept",
  spec:[
    ["objective","Connect the agent's booking to the data Agency360 reads. The booking is stamped with the agency identity and consolidated into agency and corporate production."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Simple left-to-right flow graphic, DHI to design: the agent's search, then a booking stamped with an agency identity (IATA, PCC, GDS source), then a consolidated view, you against comp set against market. Clean and conceptual, no figures.",
    ]},
    { kind:"screen", lines:[
      "**Every booking is stamped.**",
      "It carries the agency's identity: an IATA number, a PCC, and the GDS it came through.",
      "Amadeus consolidates millions of these into one view: what you produced, what your comp set produced, what the whole market produced.",
      "That is the raw material Agency360 reads.",
    ]},
    { kind:"narration", lines:[
      { t:"*So how does that search become something you can use? Every booking an agency makes is stamped with its identity, an IATA number, a PCC code, and the GDS system it travelled through. Amadeus collects millions of these and consolidates them.*", italics:true },
      { t:"*What comes out is a single view that lines up three things: what you produced, what your comp set produced, and what the whole market produced. You are not guessing where the business went anymore. You can see it. That view is Agency360, and the rest of this module is learning to read it.*", italics:true },
    ]},
  ]});

/* 04 */
slides.push({ no:"04", title:"Agency360: penetration, and the opportunity you're missing", time:"2:00", type:"Concept",
  spec:[
    ["objective","Define the tool and its two headline metrics. Penetration is your capture against fair share, 100 is fair share. Opportunity, also called Surplus, is the production in the market you are not getting. The three competitor sets are an aside, not a focus."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Two-panel concept graphic, DHI to design. Left: a penetration dial with 100 marked as fair share, a needle above and below it. Right: an \u201Copportunity\u201D bucket, the production flowing past you to the comp set and market. No real figures.",
    ]},
    { kind:"screen", lines:[
      "**Agency360 is built for hotels with strong GDS and travel-agency business.**",
      "**Penetration:** your share against fair share. 100 is fair share. Above it you are winning the account, below it you are losing it.",
      "**Opportunity, also called Surplus:** the production sitting in the market that you are not getting. The money on the table.",
      "You can compare against up to three competitor sets, but the question never changes: who is winning the accounts, and what am I missing?",
    ]},
    { kind:"narration", lines:[
      { t:"*Two numbers carry this entire tool. The first is penetration. It is the same idea as the index you already know: 100 is fair share. Above 100, you are winning more than your share of an account. Below 100, the account is going to someone else.*", italics:true },
      { t:"*The second is the one that makes Agency360 different. It is called opportunity, or surplus. It is the production sitting in your market that you are not capturing. Not a percentage, an amount. The money on the table, named and ranked. You can run all of this against up to three different competitor sets, but do not get lost in that. The question stays simple: who is winning the accounts, and what am I missing?*", italics:true },
    ]},
  ]});

/* 05 */
slides.push({ no:"05", title:"Overview: your GDS production against the market", time:"2:00", type:"Concept",
  spec:[
    ["objective","Teach the Overview tab. Your GDS production against comp set and market, split by the three GDS systems, with penetration, opportunity and rank."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Overview screenshot, placeholder capture. Ring the three headline cards, Revenue, Room Nights and ADR, each carrying penetration, opportunity, rank and index. Then ring the channel breakdown beneath: GDS, opening into Amadeus, Galileo, Sabre and Travelport. Schematic, no figures highlighted.",
    ]},
    { kind:"screen", lines:[
      "**The Overview is your headline read.**",
      "Your production, your comp set's, and the whole market's, side by side.",
      "**Penetration** tells you if you are above or below fair share. **Opportunity** tells you how much is out there you are not capturing. **Rank** tells you where you sit among your comp set.",
      "And it splits by GDS: Amadeus, Galileo, Sabre, Travelport. A weak system is a place to look.",
    ]},
    { kind:"narration", lines:[
      { t:"*The Overview is where you start. It puts your production next to your comp set's and the whole market's, on revenue, room nights and rate. Each one carries the two numbers we just met: penetration, your share against fair share, and opportunity, what you are missing. It also gives you a rank, your place among the hotels in your comp set.*", italics:true },
      { t:"*One more thing the Overview does: it breaks the GDS into the four systems agents actually use, Amadeus, Galileo, Sabre and Travelport. If your penetration is fine in one and weak in another, that is a clue. It tells you which system the business is slipping through, and that is where you look next.*", italics:true },
    ]},
  ]});

/* 06 */
slides.push({ no:"06", title:"Agency Targeting: the accounts you're missing", time:"2:30", type:"Concept",
  spec:[
    ["objective","Teach Agency Targeting as the engine of the tool. A ranked list of agencies sorted by Opportunity, the business they send your comp set and the market but not you. Rank by opportunity, show the top 25, and you have a target list."],
    ["interaction","Hotspot on the Agency Targeting list. Three areas: the Opportunity column, the Rank By control, and an agency row where your own production reads zero."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Agency Targeting list screenshot, placeholder capture. Ring the Opportunity, Surplus column, the Rank By Opportunity and Show Top 25 controls, and one agency row where the subscriber column reads zero while comp set and market do not. Schematic only.",
    ]},
    { kind:"screen", lines:[
      "**This is where the tool earns its name.**",
      "Every agency in your market, ranked by Opportunity: the business they give your competitors and not you.",
      "Sort by Opportunity, show the top 25, and you have a prioritised target list.",
      "**An agency with high opportunity and zero production for you is the clearest target there is.** It books your competitors heavily, and you not at all.",
    ]},
    { kind:"interaction", lines:[
      "**Type:** hotspot, three areas, all opened before Continue.",
      "**Tooltip A (Opportunity column):** \u201CThis is the money on the table, ranked. Start at the top.\u201D",
      "**Tooltip B (Rank By):** \u201CRank by Opportunity to see who to chase first. That ordering is your week's call list.\u201D",
      "**Tooltip C (a zero row):** \u201CThey book your comp set. They do not book you. That is a sales call, not a mystery.\u201D",
    ]},
    { kind:"narration", lines:[
      { t:"*Agency Targeting is the heart of Agency360. It lists every agency producing in your market and ranks them by opportunity, the business they are giving your competitors instead of you. Sort by opportunity, show the top twenty-five, and you are not staring at a spreadsheet anymore. You are looking at a target list, in priority order.*", italics:true },
      { t:"*Look for the clearest pattern of all: an agency with a high opportunity figure and zero production for you. That is an agency booking your competitors heavily and sending you nothing. You do not need to wonder what to do with that. It goes to the top of the call list.*", italics:true },
    ]},
  ]});

/* 07 */
slides.push({ no:"07", title:"Inside an agency: the profile, and the corporates behind it", time:"2:30", type:"Concept",
  spec:[
    ["objective","Teach the agency drill-down. Hover gives a profile card, identity and consortium. Click opens a detail with three sub-tabs: Performance, Booking Patterns, and Associated Corporations, the companies behind the agency, which is the real sales thread."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Two placeholders side by side. Left: the hover profile card, ring the IATA, the PCC, the GDS source, the city and country, and the Group field, the consortium. Right: the agency detail with its three sub-tabs, ring the Business Concentration donut and the Associated Corporations tab. Schematic only.",
    ]},
    { kind:"screen", lines:[
      "**Hover, and you get the agency's card:** who they are, where they are, their IATA and PCC, and their Group, the consortium they belong to.",
      "**Click, and you go deeper.**",
      "**Performance:** are you a top hotel for this agency, or invisible? And what rate types do they book, consortia, corporate, negotiated?",
      "**Associated Corporations:** the companies whose travel this agency books. That is who you are really chasing.",
    ]},
    { kind:"builder", lines:[
      "Keep this conceptual. Use a generic \u201Chigh-opportunity agency\u201D and \u201Cthe corporate behind it.\u201D Do not name a real agency, consortium member, or company in the on-screen text or narration.",
    ]},
    { kind:"narration", lines:[
      { t:"*Once an agency is on your list, you want to know two things: who they are, and who they book for. Hover over the name and a card appears, their identity, their city and country, and their Group, which is the consortium they belong to. Click in, and the detail opens.*", italics:true },
      { t:"*The Performance view tells you whether you are already a top hotel for this agency or barely on their radar, and what kinds of rates they book. But the tab to remember is Associated Corporations. It lists the companies whose travel this agency handles. The agency is the door. The corporate behind it is who you are really selling to. That is the sales thread, follow it.*", italics:true },
    ]},
  ]});

/* 08 */
slides.push({ no:"08", title:"Corporate Performance: the company behind the spend", time:"2:00", type:"Concept",
  spec:[
    ["objective","Teach Corporate Performance as the mirror of Agency Targeting. Ranked companies, and a detail whose Associated Agencies tab names the agencies, often consortia, that book for them. Two doors into the same missing business."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Corporate Performance screenshot, placeholder capture. Ring the ranked list of corporations, then ring the Associated Agencies sub-tab inside a corporate detail. Schematic, no real names.",
    ]},
    { kind:"screen", lines:[
      "**Corporate Performance is Agency Targeting from the other side.**",
      "Now the rows are companies, ranked by the business they put into your market.",
      "Open one, and **Associated Agencies** shows which agencies book its travel, often a consortium like American Express.",
      "Start with an agency and find the company, or start with a company and find the agency to call. Same missing business, two doors in.",
    ]},
    { kind:"narration", lines:[
      { t:"*Corporate Performance is the mirror image of Agency Targeting. Instead of agencies, the rows are companies, ranked by the business they put into your market. When you find a company producing for your comp set and nothing for you, that is a target too.*", italics:true },
      { t:"*Open a company and you get the same kind of detail, with one tab that closes the loop: Associated Agencies. It names the agencies that book that company's travel, and very often that is a consortium. So you have two ways in to the same missing business. Start with a high-opportunity agency and find the company behind it, or start with a target company and find the agency you need to call. Either way, you land on a name and a move.*", italics:true },
    ]},
  ]});

/* 09 */
slides.push({ no:"09", title:"Consortia: AMEX, BCD, CWT, and FCM", time:"1:30", type:"Concept",
  spec:[
    ["objective","Explain consortia and why they matter to sales. They sit above agencies and negotiate rates for a network of member agencies and corporate clients. The four to know surface in the Group field and as agencies."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Simple concept graphic, DHI to design: a consortium at the top, member agencies beneath it, feeding corporate travel. Name the four, American Express, BCD, CWT, FCM. Clean and conceptual.",
    ]},
    { kind:"screen", lines:[
      "**Consortia are networks that negotiate rates for many agencies and their corporate clients.**",
      "Four you will see most: American Express, BCD, CWT, FCM.",
      "In Agency360 they show up as an agency's Group, and as agencies in their own right.",
      "**Win a consortia rate and you are not chasing one agency.** You are opening the door to a whole network of high-value bookers.",
    ]},
    { kind:"narration", lines:[
      { t:"*A word you will keep seeing is consortia. A consortium is a network that negotiates hotel rates on behalf of many travel agencies and the corporate clients they serve. Four come up again and again: American Express, BCD, CWT, and FCM. In Agency360 they appear two ways, as the Group an agency belongs to, and as agencies you can target in their own right.*", italics:true },
      { t:"*Here is why that matters to you. Winning a single agency is one relationship. Getting your hotel qualified for a consortia rate is different, because behind that one rate sits a whole network of agencies and the high-value corporate travel they book. It is the difference between one call and opening a door. When you see a consortium name on a high-opportunity account, take it seriously.*", italics:true },
    ]},
  ]});

/* 10 */
slides.push({ no:"10", title:"Performance Trends: your GDS posture over time", time:"1:30", type:"Concept",
  spec:[
    ["objective","Teach Performance Trends as the step-back view. Your penetration and production against comp set and market, month by month, plus average lead time and length of stay. Is the sales effort moving the needle?"],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Performance Trends screenshot, placeholder capture. Ring the penetration trend line across the months and the month axis. Schematic, no figures.",
    ]},
    { kind:"screen", lines:[
      "**Performance Trends is the step-back.**",
      "Your penetration and production against the market, month by month.",
      "**Rising penetration** means your targeting is working. **Slipping penetration** means accounts are drifting to the comp set.",
      "It tells you whether the sales effort is moving the needle, not just where you stand today.",
    ]},
    { kind:"narration", lines:[
      { t:"*Everything so far has been about today, who to call now. Performance Trends steps back and shows the same numbers over time, month by month against your comp set and the market. It also tracks how far out the bookings come and how long they stay.*", italics:true },
      { t:"*Read it as a scoreboard for your effort. Penetration climbing month over month means your targeting is landing, you are winning accounts. Penetration slipping means business is quietly drifting to the comp set, and whatever you are doing is not holding it. This is the view that tells you if the work is working.*", italics:true },
    ]},
  ]});

/* 11 */
slides.push({ no:"11", title:"Booking Patterns: price, stay, and lead time", time:"1:30", type:"Concept",
  spec:[
    ["objective","Teach Booking Patterns, scoped to the GDS business. Price ranges, length of stay and lead time, you against comp set and market. Where the agency business sits and where you under-index. Point back to Demand360, do not re-teach the lenses."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Booking Patterns screenshot, placeholder capture. Ring the price-range view and the lead-time view. Schematic only.",
    ]},
    { kind:"screen", lines:[
      "**Booking Patterns shows the shape of the agency business.**",
      "**Price ranges:** which rate bands the GDS business books.",
      "**Length of stay and lead time:** how long they stay, and how far out they book.",
      "Where the market books and you do not is a gap to position for. Same lenses as Demand360, scoped to GDS.",
    ]},
    { kind:"narration", lines:[
      { t:"*The last tab, Booking Patterns, shows the shape of the agency business. Which price bands it books, how long the stays are, and how far ahead the bookings come, all against your comp set and the market.*", italics:true },
      { t:"*You have met these lenses already in Demand360, so we will not re-teach them. The use here is sharper. If the market is booking a price band, a stay length, or a lead window that you barely touch, that is a gap with a name on it, and the accounts in Agency Targeting are how you go and fill it.*", italics:true },
    ]},
  ]});

/* 12 */
slides.push({ no:"12", title:"From intel to action: market in the GDS, target the account", time:"1:30", type:"Concept",
  spec:[
    ["objective","The activation bridge. Two levers a hotel has: market into the GDS screen, a promotional message at the moment of search, and target the accounts from the opportunity lists, the call, the RFP, the negotiated or consortia rate."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Two-lever graphic, DHI plus placeholder. Left: a GDS availability screen with a promotional banner beside a hotel, captioned \u201Cyour property's promo banner\u201D as a placeholder. Right: a target list flowing into a call, an RFP, and a rate. Schematic.",
    ]},
    { kind:"screen", lines:[
      "**Intel is only worth the action it drives. Two levers.**",
      "**Market into the screen:** a promotional message beside your name in the agent's search. GDS advertising, value-adds, commission. Influence the choice at the moment it is made.",
      "**Target the account:** take the top of your opportunity list, the agency or the corporate, and make the call, the RFP, the negotiated or consortia rate.",
      "One pulls demand in. The other goes and gets it.",
    ]},
    { kind:"builder", lines:[
      "The GDS advertising visual uses a placeholder banner only. The Dusit team drops in their own approved creative during the build. The Sabre advertising examples are the reference for style, not for content.",
    ]},
    { kind:"narration", lines:[
      { t:"*All of this intel is worth exactly what you do with it, so here is the action. You have two levers. The first is to market into the screen. Remember the agent's search from the start of this module? You can put a promotional message right there beside your name, GDS advertising, a value-add, a commission offer. That influences the choice at the very moment it is made.*", italics:true },
      { t:"*The second lever is to target the account. Take the top of your opportunity list, the agency or the company, and go after it directly. The call, the RFP, the negotiated rate, the consortia qualification. One lever pulls the demand toward you. The other goes out and gets it. Strong sales teams use both.*", italics:true },
    ]},
  ]});

/* 13 */
slides.push({ no:"13", title:"Match the account to the move", time:"2:30", type:"Interaction",
  spec:[
    ["objective","Apply the module. Drag each account situation to the right sales move."],
    ["interaction","Five-pair drag and match. All matched before Continue, one retry per pair."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Two columns, DHI to design. Left, five account situations. Right, five sales moves, shuffled. A clean drag line snaps a correct pair into place.",
    ]},
    { kind:"interaction", lines:[
      "**Type:** drag and match, five pairs.",
      "**1.** High-opportunity agency, books your comp set, zero for you  \u2192  Add to the call list, request a meeting or RFP.",
      "**2.** A high account whose Group is a consortium you are not rate-loaded with  \u2192  Pursue the consortia rate to open the network.",
      "**3.** A company ranked high in the market, its booking agency named in Associated Agencies  \u2192  Approach that agency with a negotiated corporate rate.",
      "**4.** An agency where you are already the top hotel, high penetration  \u2192  Protect the relationship, do not chase it as a gap.",
      "**5.** An agent searching your market now, your name low with no message  \u2192  GDS advertising, a value-add beside your name.",
    ]},
    { kind:"narration", lines:[
      { t:"*Five accounts, five moves. Drag each situation to the action it calls for. The point is not to memorise a rule, it is to read the account and know, without hesitating, what you would do next.*", italics:true },
    ]},
  ]});

/* 14 */
slides.push({ no:"14", title:"They're booking your competitor. Now what?", time:"2:30", type:"Scenario",
  spec:[
    ["objective","A branching decision. A high-opportunity agency books your comp set heavily and you not at all, and its Group is a consortium. The learner chooses the response, and the right path is the targeted sales move."],
    ["interaction","Branching scenario, three paths. Allow viewing the other paths before Continue."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "The situation on screen, placeholder Agency Targeting row at the top of the opportunity list, subscriber column zero. Three choice buttons beneath. DHI to lay out.",
    ]},
    { kind:"interaction", lines:[
      "**Setup:** \u201CTop of your opportunity list sits an agency sending strong GDS business to your comp set and nothing to you. Its Group is a consortium. What is your first move?\u201D",
      "**Path A, drop your rate across the board to look cheaper:** \u201CRate is not why you are losing this account, you are not even in their consideration yet. A blanket cut spends margin without winning them. Try again.\u201D",
      "**Path B, open the agency profile, check the consortium and Associated Corporations, then make a targeted approach, an RFP or the consortia rate:**  \u2713  \u201CRight. You found who they are, who they book for, and how they buy. Now you go and get the account with the right offer.\u201D",
      "**Path C, watch the trend for a few months and see if it corrects:** \u201CThe business is going to your competitor now. Watching your penetration slip is not a plan. Act on it. Try again.\u201D",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is a real one. The very top of your opportunity list is an agency pouring business into your comp set and giving you nothing, and it belongs to a consortium. What do you do first? Choose, and see where it leads. There is a move that turns this into a won account, and a couple that waste the chance.*", italics:true },
    ]},
  ]});

/* 15 */
slides.push({ no:"15", title:"A moment to check before the quiz", time:"1:30", type:"Knowledge Check",
  spec:[
    ["settings","Two ungraded questions with feedback. Nothing rides on them. They confirm the two habits before the graded quiz."],
  ],
  boxes:[
    { kind:"quiz", lines:[
      "**Question 1 (ungraded).** On Agency Targeting, an agency shows high Opportunity and zero production for you. What does that tell you?",
      "A. The agency is too small to matter.",
      "B. It books your competitors heavily and not you, it is a priority target.  \u2713",
      "C. Nothing useful without a rate change.",
      "*Feedback: high opportunity with zero production for you is the clearest target in the tool. It goes to the top of the call list.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 2 (ungraded).** Where do you find the companies behind an agency's bookings?",
      "A. The Overview tab.",
      "B. The Associated Corporations tab inside the agency detail.  \u2713",
      "C. The Performance Trends tab.",
      "*Feedback: open the agency, then Associated Corporations. The agency is the door, the corporate is who you are really selling to.*",
    ]},
    { kind:"narration", lines:[
      { t:"*Two quick checks before the graded questions. Nothing rides on these. Read each one and see if the two core habits have landed: opportunity points to the target, and the agency detail points to the company behind it.*", italics:true },
    ]},
  ]});

/* 16 */
slides.push({ no:"16", title:"Five questions, real situations", time:"5:00", type:"Quiz",
  spec:[
    ["settings","5 questions. Pass mark 80% (4/5). One per screen. No going back. Immediate feedback. Score reported to Moodle. One retry on fail. Every answer points to a sales action, no property data required."],
  ],
  boxes:[
    { kind:"quiz", lines:[
      "**Question 1 of 5.** Your overall penetration looks healthy, but the Opportunity figure is large. What does that call for?",
      "A. Nothing, penetration is fine so the market is covered.",
      "B. There is business in the market you are not getting, build a target list from Agency Targeting.  \u2713",
      "C. Lower your rates across the board.",
      "D. Wait for the trend to confirm it.",
      "*Feedback: penetration and opportunity answer different questions. You can hold a fair share overall and still be leaving real production on the table. Opportunity is the money you are missing, go and rank it.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 2 of 5.** A high-opportunity agency sits at the top of your list, and its Group is a consortium you are not rate-loaded with. What is the strongest move?",
      "A. Send a single rate to that one agency and stop there.",
      "B. Pursue the consortia rate, so you open the whole network behind it, not just one agency.  \u2713",
      "C. Ignore it, consortia are too hard to win.",
      "D. Drop your public rate to undercut them.",
      "*Feedback: behind a consortium sits a network of agencies and high-value corporate travel. Qualifying for the consortia rate opens the door once, for many bookers, instead of chasing them one at a time.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 3 of 5.** A company ranks high in your market with zero production for you, and Associated Agencies names the agency that books its travel. What do you do?",
      "A. Nothing, you cannot sell to a company directly.",
      "B. Approach the named agency with a negotiated corporate rate for that account.  \u2713",
      "C. Lower your rate for everyone and hope they notice.",
      "D. Wait until they search for you.",
      "*Feedback: the corporate is the demand, the agency is the door. Agency360 just handed you both. The move is a targeted negotiated rate through the agency that books them.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 4 of 5.** On an agency where you are already the top hotel and penetration is well above fair share, where should your effort go?",
      "A. Pour more time into winning even more from them.",
      "B. Protect the relationship, and put your selling time on the accounts you are missing.  \u2713",
      "C. Raise the rate because they are loyal.",
      "D. Treat it as an opportunity gap and chase it hard.",
      "*Feedback: an account you already win is one to protect, not to over-invest in. The opportunity, by definition, is in the accounts where your production is low. Spend the hours there.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 5 of 5.** An agent is searching your market right now, and your hotel sits low in the list with no message beside it. What is the lever?",
      "A. Nothing, placement is out of your hands.",
      "B. Use GDS advertising or a value-add so you appear in the consideration at the moment of search.  \u2713",
      "C. Cut your rate below the whole comp set.",
      "D. Call the agent after they have booked.",
      "*Feedback: the booking is decided on that screen. A promotional message or a value-add beside your name puts you into the choice while it is being made. That is the marketing lever that sits alongside targeting.*",
    ]},
  ]});

/* 17 */
slides.push({ no:"17", title:"Every missing account is a sales call", time:"1:00", type:"Summary",
  spec:[
    ["objective","Close on one memorable line that captures the tool's purpose: the bookings you lose carry names, Agency360 gives you the names, you make the calls."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Dark navy. Large white centred headline. Three gold lines beneath, left aligned. Bottom-right, a gold \u201CModule Complete\u201D badge. Bottom-left, a white button, \u201CDownload the Agency360 Action Map.\u201D Amadeus and Dusit marks small, top corners.",
    ]},
    { kind:"screen", lines:[
      "**Headline: \u201CEvery missing account has a name. Agency360 gives you the name. You make the call.\u201D**",
      "Penetration tells you if you are winning the account. Opportunity tells you what you are missing.",
      "Agency, or corporate: two doors into the same business. Both end in a sales move.",
      "*Download: \u201CThe Agency360 Action Map.\u201D Each situation, the account behind it, the move it drives.*",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is the whole module. Your competitors are winning bookings that carry a name, an agency, and a company behind it. Agency360 hands you that name and ranks it by what you are missing.*", italics:true },
      { t:"*Penetration tells you where you stand. Opportunity tells you what is on the table. And whether you come at it through the agency or the corporate, it ends the same way: a call, an RFP, a rate, a message in the agent's search. Every missing account is a sales call. Now go and make them. Well done for completing this module.*", italics:true },
    ]},
  ]});

/* ---------------- assemble ---------------- */
const children = [];

children.push(
  new Paragraph({ alignment: ctr, spacing: { before: 1500, after: 80 }, children: [new TextRun({ text: "DUSIT HOTELS & RESORTS   \u00B7   REVENUE TRAINING PROGRAMME", bold: true, size: 20, color: NAVY, font: FONT, characterSpacing: 30 })] }),
  new Paragraph({ alignment: ctr, spacing: { before: 220, after: 80 }, children: [new TextRun({ text: "MODULE 8   \u00B7   AMADEUS AGENCY360", bold: true, size: 26, color: GOLD, font: FONT, characterSpacing: 40 })] }),
  new Paragraph({ alignment: ctr, spacing: { after: 100 }, children: [new TextRun({ text: "The Account Behind the Booking", bold: true, size: 44, color: NAVY, font: FONT })] }),
  new Paragraph({ alignment: ctr, spacing: { after: 320 }, children: [new TextRun({ text: "Instructional Design Blueprint   \u00B7   Version 1.0", size: 22, color: MUTE, font: FONT })] }),
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
  rows: [new TableRow({ children: [ci("DURATION","35 minutes"), ci("SLIDES","17 slides"), ci("DELIVERY","iSpring / SCORM 1.2"), ci("AUDIENCE","Sales: DOSM \u00B7 Sales Mgr")] })] }));
children.push(new Paragraph({ alignment: ctr, spacing: { before: 340 }, children: [new TextRun({ text: "Prepared by DHI Hospitality   \u00B7   June 2026   \u00B7   Confidential", size: 20, color: MUTE, font: FONT })] }));
children.push(new Paragraph({ children: [new PageBreak()] }));

children.push(Hh("The Narrative"));
children.push(P("A travel agent opens a screen, types a city and two dates, and a short list of hotels comes back. In a few seconds one is booked. That booking carries a name, the agency that made it, and somewhere behind that agency, a company. Most hotels never see it. They see the month come in a little short and call it soft demand. The booking they lost had a name on it the whole time.", { after: 140 }));
children.push(P("This module teaches the sales team to read Amadeus Agency360, the tool that shows your travel-agency and corporate production against your comp set and the wider market, for hotels with strong GDS business. The skill is not admiring a headline number. It is reading two: penetration, your share against fair share, and opportunity, the production sitting in the market that you are not getting. From there the tool names the agencies and the companies behind the bookings you are missing, and ranks them by what they are worth. By the end, a learner can open any tab, find the accounts going to the competition, and turn each one into a call, an RFP, a rate, or a message in the agent's search. The module uses no real property figures: it teaches how to read the screens and act, and the Dusit team drops live captures into the build.", { after: 160 }));
children.push(arcBox("The arc, 17 slides, 35 minutes", [
  { lead:"Hook (slides 1\u20133)", rest:"A booking that went to your competitor, the GDS search where it happened, and how that booking becomes data you can use." },
  { lead:"The Foundation (slide 4)", rest:"What Agency360 is, and its two numbers: penetration, your share against fair share, and opportunity, what you are missing." },
  { lead:"Reading the Tabs (slides 5\u201311)", rest:"Overview, Agency Targeting and the agency drill, Corporate Performance, consortia, then trends and booking patterns." },
  { lead:"From Intel to Action (slide 12)", rest:"The two levers a hotel has: market into the GDS search, and target the accounts on the opportunity list." },
  { lead:"Apply and Assess (slides 13\u201317)", rest:"A match, a branching scenario, a quick check, five graded reads, and the close." },
]));
children.push(box("builder", [
  "Data policy for this module: use no real property figures anywhere. Every screen reference is visual direction, a placeholder for the Dusit team to drop the live Agency360 or GDS capture into during the iSpring build. Teaching is conceptual: penetration 100 is fair share, opportunity is the production you are missing, and the skill is reading the screens and acting on them. Do not name a property, comp set, agency or corporate.",
]));
children.push(new Paragraph({ children: [new PageBreak()] }));

children.push(Hh("Module at a Glance"));
children.push(glanceTable(glance));
children.push(spacer(100));
children.push(box("content", ["Total: 35 minutes. 17 slides. Pass mark 80% (4 of 5). One retry allowed. Completion: quiz passed and all slides visited. Audience: Sales (DOSM and Sales Managers), written to stay accessible to revenue and general managers. No real property data: conceptual, screen-reading throughout."]));
children.push(new Paragraph({ children: [new PageBreak()] }));

children.push(Hh("Slide Specifications"));
children.push(P("Each slide is fully specified below. The voice-over reads the narration script exactly. The builder follows the visual direction, interaction specs and builder notes. On-screen text and narration complement each other; they do not simply repeat. Every screen named in visual direction is a placeholder for the Dusit team's live Agency360 or GDS capture.", { after: 160 }));

slides.sort((a,b)=>a.no.localeCompare(b.no));
slides.forEach((s, idx) => {
  children.push(slideHeader(s.no, s.title, s.time, s.type));
  children.push(spacer(60));
  if (s.spec && s.spec.length) { children.push(specTable(s.spec)); children.push(spacer(80)); }
  s.boxes.forEach((b) => { children.push(box(b.kind, b.lines)); children.push(spacer(80)); });
  if (idx !== slides.length - 1) children.push(spacer(120));
});
children.push(new Paragraph({ children: [new PageBreak()] }));

children.push(Hh("Appendix: Production Notes"));
children.push(new Paragraph({ spacing: { before: 120, after: 80 }, children: [new TextRun({ text: "Assets Required", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "Agency360 screen captures (live, from the Dusit team) for: Overview (slide 05), the Agency Targeting list, the hover profile card and the agency detail with its three sub-tabs (slides 06 and 07), Corporate Performance and the Associated Agencies sub-tab (slide 08), Performance Trends (slide 10) and Booking Patterns (slide 11). Each replaces a placeholder in visual direction. No figures need to match the narration, the teaching is conceptual.",
  "GDS captures (live, from the Dusit team): an agent-side availability display (slides 01 and 02) and a promotional banner in the search (slide 12). The Sabre advertising examples supplied are the reference for style only. The Dusit team drops its own approved creative in.",
  "Concept graphics (DHI to design): the lost-booking reveal (slide 01), the search-to-data flow (slide 03), the penetration dial and opportunity bucket (slide 04), the consortia network (slide 09), the two-lever activation (slide 12).",
  "\u201CThe Agency360 Action Map\u201D one-page PDF (slides 13 and 17): each situation, the account behind it, the sales move it drives. DHI to produce.",
  "Amadeus Agency360 and Dusit logos, white versions, transparent background.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "iSpring Builder Checklist", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "Slide 02: hotspot on the GDS availability capture, three areas, all opened before Continue.",
  "Slide 06: hotspot on the Agency Targeting capture, three areas.",
  "Slide 13: five-pair drag and match, all matched before Continue, one retry per pair.",
  "Slide 14: branching scenario, three paths, allow viewing other paths before Continue.",
  "Slide 15: two ungraded knowledge-check questions with feedback.",
  "Slide 16: graded quiz, 5 questions, pass mark 80%, one retry, score to Moodle.",
  "SCORM 1.2: completion is quiz passed and all slides visited.",
  "Insert all live captures in place of the visual-direction placeholders. Mask any figures the property prefers not to show, the teaching does not depend on them.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "QA Checklist", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "No real property, agency or corporate figures or names anywhere in the finished module. Penetration 100 is the only number that must appear, as the fair-share anchor.",
  "Every penetration reference reads in fair-share terms: above 100 wins the account, below 100 loses it.",
  "Opportunity is consistently framed as the production you are missing, the money on the table.",
  "Hotspots (slides 02, 06): all areas clickable, correct tooltips.",
  "Drag and match (slide 13): all five pairs lock, wrong matches return feedback.",
  "Branching scenario (slide 14): all three paths reachable, the targeted path acknowledged as correct.",
  "Quiz: 5 questions, every answer points to a sales action, pass and fail screens, score to Moodle, one retry.",
  "No property, comp set, agency, corporate or consortium member named in a way tied to a real property.",
  "SCORM tested in the Moodle sandbox.",
  "Content reviewed by the Dusit Sales and Revenue teams before launch.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(spacer(200));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Dusit Revenue Training Programme  \u00B7  Module 8, Amadeus Agency360  \u00B7  DHI Hospitality  \u00B7  June 2026", size: 18, color: MUTE, font: FONT })] }));

const doc = new Document({
  numbering: { config: [{ reference: "bul", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 460, hanging: 260 } } } }] }] },
  styles: { default: { document: { run: { font: FONT, size: 20, color: INK } } } },
  sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } }, children }],
});
Packer.toBuffer(doc).then(buf => { fs.writeFileSync("/mnt/user-data/outputs/module8b-agency360-blueprint.docx", buf); console.log("WROTE module8b-agency360-blueprint.docx", buf.length, "bytes |", slides.length, "slides"); });
