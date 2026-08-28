/* Dusit Revenue Training Programme — Module 11: REVENUE BUDGET PREP (rooms)
   Real method, real template shown as reference, illustrative worked numbers only.
   Pillars taught as a portable decision. Built on the shared v7 helpers. */
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
  ["01","Hook","The number you'll answer for all year","1:30","None","Part 1: Direction"],
  ["02","Concept","A budget starts with direction, not a spreadsheet","1:30","None","Part 1: Direction"],
  ["03","Concept","Read the demand and the macro picture","2:30","None","Part 1: Direction"],
  ["04","Concept","The company's vision and goals","1:30","None","Part 1: Direction"],
  ["05","Concept","Choosing your strategic pillars","2:30","None","Part 1: Direction"],
  ["06","Concept","From direction to build-up: history as your base","1:30","None","Part 1: Direction"],
  ["07","Concept","Two numbers per segment: room nights and rate","2:30","Hotspot","Part 1: Direction"],
  ["08","Transition","Part 1 done. A good place to pause.","1:00","Pause point","Part 1: Direction"],
  ["09","Concept","The retail engine, and the brand.com push","1:30","None","Part 2: Build and Lock"],
  ["10","Concept","Negotiated and wholesale: executing your pillars","2:30","None","Part 2: Build and Lock"],
  ["11","Concept","Groups: the rooms you take, and the ones you hold","1:30","None","Part 2: Build and Lock"],
  ["12","Concept","Mix is the strategy","2:30","None","Part 2: Build and Lock"],
  ["13","Concept","The targets that fall out: MPI, ARI, RGI","2:30","Hotspot","Part 2: Build and Lock"],
  ["14","Concept","Top-down target meets bottom-up build","1:30","None","Part 2: Build and Lock"],
  ["15","Concept","Write the why: priorities and the market story","1:30","None","Part 2: Build and Lock"],
  ["16","Concept","Stress-test, then lock it","1:30","None","Part 2: Build and Lock"],
  ["17","Transition","Part 2 done. The plan is locked.","1:00","Pause point","Part 2: Build and Lock"],
  ["18","Interaction","Build the segment line","2:30","Drag-match","Part 3: Apply"],
  ["19","Scenario","Ownership sent it back. Find the points.","2:30","Branching","Part 3: Apply"],
  ["20","Knowledge Check","A moment to check before the quiz","1:30","2 questions","Part 3: Apply"],
  ["21","Quiz","Five questions, real situations","5:00","Graded quiz","Part 3: Apply"],
  ["22","Summary","Build it like you'll defend it","1:00","None","Part 3: Apply"],
];

const slides = [];

/* 01 */
slides.push({ no:"01", title:"The number you'll answer for all year", time:"1:30", type:"Hook",
  spec:[
    ["objective","Open on the consequence. The budget is the bar you are measured against every month for a year. Built carelessly, it is twelve months of explaining misses you could have prevented."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "A full year drawn as one long bar with a target line running across it, and twelve month markers beneath, each one a checkpoint against that line. Show the line set too low in one version, too high in another. Concept graphic, DHI to design.",
    ]},
    { kind:"screen", lines:[
      "**Once a year, you build a number.**",
      "Then for twelve months, every review compares you to it.",
      "**Add a few points to last year and call it done,** and you will spend the year explaining misses you could have prevented.",
      "Build it as a plan, and the number defends itself.",
    ]},
    { kind:"narration", lines:[
      { t:"*Every year, your hotel sets a budget. It is really a set of numbers, occupancy, rate, revenue. And here is the thing about them: the moment they are signed off, they become the bar you are measured against, every single month, for the next year.*", italics:true },
      { t:"*The fastest way to build a budget is to take last year and add a few points. It is also the fastest way to spend twelve months explaining variances you could have seen coming.*", italics:true },
      { t:"*A budget built as a real plan, with a direction behind every number, is one you can stand behind in any review. That is what this module is about: building the rooms revenue plan you will actually defend.*", italics:true },
    ]},
  ]});

/* 02 */
slides.push({ no:"02", title:"A budget starts with direction, not a spreadsheet", time:"1:30", type:"Concept",
  spec:[
    ["objective","Reframe the budget as strategy expressed as numbers, a commitment rather than a guess. Establish the order the whole module follows: set the direction, then build the pillars."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Two-step graphic, DHI to design. Step one, \u201CSet the Direction,\u201D a small set of strategic intents. Step two, \u201CBuild the Pillars,\u201D the segment grid those intents drive. An arrow from one to the other.",
    ]},
    { kind:"screen", lines:[
      "**A budget is not a spreadsheet exercise. It is a strategy, written as numbers.**",
      "**Direction first:** where is demand heading, what is the hotel trying to become, what will you push and what will you pull back?",
      "**Then the build:** every segment number carries out that direction.",
      "A budget is a commitment you defend, not a guess you hope lands.",
    ]},
    { kind:"narration", lines:[
      { t:"*Before we open a single cell, change how you think about this. A budget is not a spreadsheet you fill in. It is your strategy for the year, written as numbers.*", italics:true },
      { t:"*So we do it in two moves. First, set the direction: read where demand is going, hold the hotel's vision in mind, and decide what you will drive and what you will reduce. Then, build the pillars: every segment, every month, carrying out that direction.*", italics:true },
      { t:"*Direction first, build second. Get that order right and the spreadsheet almost fills itself. Get it wrong, and you are just decorating last year.*", italics:true },
    ]},
  ]});

/* 03 */
slides.push({ no:"03", title:"Read the demand and the macro picture", time:"2:30", type:"Concept",
  spec:[
    ["objective","The budget starts from the outside. Read the demand outlook and the macro picture before setting any number: the economy, travel demand, taxes and cost shifts, market recovery or softening, events and need periods, new supply, the comp set and STR forecast."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Show the revenue plan's Business Overview and Market Conditions section as on-screen reference, placeholder capture. Ring the demand and competition notes. Beside it, a small concept strip: macro, market, events, supply, comp set. Schematic, no real figures.",
    ]},
    { kind:"screen", lines:[
      "**Build from the outside in.**",
      "**Macro:** the economy, currency, travel demand, a new tax or cost on the horizon.",
      "**Market:** is your city recovering or softening, and what events and need periods sit in the year?",
      "**Supply and comp set:** new hotels opening, where your comp set is heading. You read this in the comp-set and Demand360 work.",
      "Write it down. It is the evidence your numbers will rest on.",
    ]},
    { kind:"builder", lines:[
      "Reference Module 5 (comp set), Demand360 and the STR forecast as the sources of this read. Do not re-teach them here.",
    ]},
    { kind:"narration", lines:[
      { t:"*A budget built from last year looks inward. A budget built from the market looks outward, and that is the one that holds up. Before you set a single segment number, read the picture around you. The macro view, the economy and travel demand and any new cost or tax coming. The market, whether your city is recovering or softening, and the events and need periods in the year. And supply, the hotels opening near you and where your comp set is heading.*", italics:true },
      { t:"*You have the tools for this already. The comp-set work, the STR forecast, Demand360, they all feed this. The point here is to gather that read and write it down, because every number you set next has to trace back to something real in this picture.*", italics:true },
    ]},
  ]});

/* 04 */
slides.push({ no:"04", title:"The company's vision and goals", time:"1:30", type:"Concept",
  spec:[
    ["objective","A property budget sits inside a company direction. The plan must carry the brand's vision and the owner's goals, not just the hotel's local view, and reconcile them with what the market will give."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "A simple stack, DHI to design: Company vision and brand at the top, Owner's goals beneath, This hotel's plan at the base, with the plan carrying both above it.",
    ]},
    { kind:"screen", lines:[
      "**Your plan is not built in isolation.**",
      "**The brand** has a direction: who it is for, how it positions, where it is growing.",
      "**Ownership** has goals: a revenue target, a profit expectation, a return.",
      "Your budget has to carry both, and reconcile them with what the market will actually give you.",
    ]},
    { kind:"narration", lines:[
      { t:"*Your hotel does not budget in a vacuum. It sits inside a company with a vision, and an owner with expectations, and a good plan holds both from the start. The brand has a direction, who it serves, how it positions, the kind of business it wants more of. Ownership has goals, a number they expect the asset to deliver.*", italics:true },
      { t:"*Hold the vision and the goals in mind as you set direction. They are not constraints to resent, they are part of the brief. The skill is turning them into a plan the market can actually deliver, and that is exactly what the pillars are for.*", italics:true },
    ]},
  ]});

/* 05 */
slides.push({ no:"05", title:"Choosing your strategic pillars", time:"2:30", type:"Concept",
  spec:[
    ["objective","Teach pillar-setting as a portable method: from your demand read, vision and gaps, choose three or four strategic priorities for the year that the build will execute. Show one hotel's example, clearly flagged, never a fixed list."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "\u201CYour pillars\u201D as three or four blank tiles being filled from the inputs, demand, vision, gaps. Beside it, a faded card clearly labelled \u201COne hotel's example\u201D: drive corporate, reduce static wholesale dependency, grow brand.com. DHI to design, the example visibly marked as an example.",
    ]},
    { kind:"screen", lines:[
      "**Pick three or four pillars for the year. They are the decisions the whole build carries out.**",
      "Choose them from your own picture: where is demand, what does the brand want, where are your gaps and your over-reliances?",
      "**Every hotel's pillars are different.** A city corporate hotel and a resort will choose differently.",
      "*Example, one hotel's pillars: drive corporate, reduce static wholesale dependency, grow brand.com. Yours will be your own.*",
    ]},
    { kind:"builder", lines:[
      "Pillars are a portable decision. The drive-corporate, cut-static-wholesale, grow-brand.com set is illustrative only and must read clearly as one hotel's choice. Localise per property, the same way Module 5 comp sets are localised.",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is the heart of the direction: your strategic pillars. Three or four priorities for the year that every number in the build will carry out. You choose them from your own picture. Where is your demand strong, and where is it soft? What does the brand want more of? Where are you over-reliant, on a single channel, or on cheap volume propping up occupancy?*", italics:true },
      { t:"*Let me make it concrete with one hotel's example. Say a city hotel decides to drive corporate, because business travel is returning. To reduce its dependence on static wholesale, because that volume comes cheap and crowds out better business. And to grow brand.com, to lower its distribution cost. Three pillars.*", italics:true },
      { t:"*But those are that hotel's pillars. A resort down the coast might choose to grow leisure groups and push direct packages instead. The skill is not memorising a list, it is choosing the right three or four for your hotel, and then letting them drive every segment you build.*", italics:true },
    ]},
  ]});

/* 06 */
slides.push({ no:"06", title:"From direction to build-up: history as your base", time:"1:30", type:"Concept",
  spec:[
    ["objective","Bridge from direction to the build. The build starts from history, last year's actual and this year's actual-plus-forecast, not a blank page. The pillars then move each segment off that base."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "The monthly build sheet as on-screen reference, placeholder capture. Ring the two history columns, prior-year actual and current actual-plus-forecast, and the empty budget column waiting to be filled. Schematic.",
    ]},
    { kind:"screen", lines:[
      "**You do not start from zero. You start from history.**",
      "Two columns of truth: last year's actual, and this year's actual-plus-forecast.",
      "That is your base. The pillars decide which segments grow off it, which hold, and which you deliberately shrink.",
      "**History is the floor. Direction is the move.**",
    ]},
    { kind:"narration", lines:[
      { t:"*Now we build, and the build does not start with a blank page. It starts with history. The template gives you two columns to stand on: last year's actual, and this year's actual plus the forecast for the months not yet closed.*", italics:true },
      { t:"*Your job is not to retype that history with a few points added. It is to take the base and move it according to your pillars. The segments your pillars favour grow off the base. The ones you are reducing come down on purpose. History tells you where you are standing. Your direction tells you where you step.*", italics:true },
    ]},
  ]});

/* 07 */
slides.push({ no:"07", title:"Two numbers per segment: room nights and rate", time:"2:30", type:"Concept",
  spec:[
    ["objective","The mechanics of the build. For each segment, each month, you set two numbers: room nights and ADR. Volume times rate is revenue. That is the whole engine, repeated across the segment map taught in Module 2."],
    ["interaction","Hotspot on the monthly segment grid. Three areas: a room-nights input cell, an ADR input cell, and the resulting revenue."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "The monthly segment grid, placeholder capture. Ring a room-nights input cell, an ADR input cell, and the revenue that results from them. Schematic, no real figures highlighted.",
    ]},
    { kind:"screen", lines:[
      "**Every segment, every month, comes down to two numbers.**",
      "**Room nights:** how much volume you plan to take.",
      "**Rate:** the ADR you plan to take it at.",
      "Volume times rate is revenue. Do that for every segment, and the plan builds itself.",
      "*The segments are the map from Module 2. We are not re-drawing it, we are filling it in.*",
    ]},
    { kind:"interaction", lines:[
      "**Type:** hotspot, three areas, all opened before Continue.",
      "**Tooltip A (room nights):** \u201CVolume. How many nights you commit to this segment this month.\u201D",
      "**Tooltip B (ADR):** \u201CRate. What you plan to sell that segment at.\u201D",
      "**Tooltip C (revenue):** \u201CThe two multiplied. This is what rolls up to the topline.\u201D",
    ]},
    { kind:"builder", lines:[
      "Reference Module 2 for the segment taxonomy. Do not re-teach the segments or their codes here.",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is the whole engine of a rooms budget, and it is simpler than it looks. For each segment, in each month, you set two numbers. Room nights, the volume you plan to take. And rate, the ADR you plan to take it at. Multiply them, and you have the revenue for that segment.*", italics:true },
      { t:"*You already know the segment map, that is Module 2, the market segments and their codes. We are not redrawing it. We are filling it in, two numbers at a time, with your pillars guiding which way each one moves. Do that across the map, month by month, and the plan assembles itself.*", italics:true },
    ]},
  ]});

/* 08 */
slides.push({ no:"09", title:"The retail engine, and the brand.com push", time:"1:30", type:"Concept",
  spec:[
    ["objective","The retail segments hold most transient volume: Flexible, Advance Purchase, E-commerce or OTA, Loyalty. A common pillar is to shift the channel mix here, growing direct and trimming OTA dependency. Show the move as the worked example."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "The retail block of the segment grid, placeholder capture. A small arrow diagram beside it: OTA share down, brand.com and loyalty up, total retail roughly held. Example clearly flagged.",
    ]},
    { kind:"screen", lines:[
      "**Retail is your transient engine:** Flexible, Advance Purchase, OTA, Loyalty.",
      "It is where channel mix lives, so it is where a brand.com pillar shows up.",
      "**Example:** hold total retail volume, but shift points from OTA to direct. Lower distribution cost without losing the rooms.",
      "Set each retail segment's room nights and rate to carry that intent.",
    ]},
    { kind:"narration", lines:[
      { t:"*Most of your transient business sits in the retail block: your flexible rate, your advance-purchase promotions, your e-commerce or OTA business, and loyalty. This is where channel mix lives, so if one of your pillars is growing direct, this is where it shows up in the numbers.*", italics:true },
      { t:"*Take that brand.com example. The move is not to slash OTA and hope. It is to hold your total retail volume roughly steady, and shift points of it from the OTA segment into direct, into brand.com and loyalty. The same rooms, at a lower cost to win them. You express that by planning the OTA segment's room nights down a little and the direct segments up, month by month. The pillar becomes the number.*", italics:true },
    ]},
  ]});

/* 09 */
slides.push({ no:"10", title:"Negotiated and wholesale: executing your pillars", time:"2:30", type:"Concept",
  spec:[
    ["objective","The negotiated (consortia/TMC, corporate) and wholesale (dynamic, static) segments are the contracted base. Common pillars: drive corporate, and reduce static wholesale dependency. Teach as method, show the corporate-up and static-down move as the example."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "The negotiated and wholesale blocks, placeholder capture. An arrow diagram: corporate and consortia up, static wholesale down, dynamic wholesale roughly steady. Example clearly flagged.",
    ]},
    { kind:"screen", lines:[
      "**Negotiated and wholesale are your contracted base.**",
      "**Negotiated:** consortia and TMC, and corporate accounts. This is the Agency360 business, where your account targeting pays off.",
      "**Wholesale:** dynamic, which flexes with demand, and static, fixed allotments at a fixed rate.",
      "**Example pillars in play:** grow corporate by building room nights into consortia and corporate. Cut static wholesale dependency by planning that volume down, so cheap fixed rooms stop crowding out better business.",
    ]},
    { kind:"builder", lines:[
      "Reference Agency360 for the consortia and corporate targeting that feeds this. Do not re-teach it.",
    ]},
    { kind:"narration", lines:[
      { t:"*The contracted base sits in two blocks. Negotiated, which is your consortia and TMC business and your corporate accounts, the very business Agency360 helps you go and win. And wholesale, split into dynamic, which moves with demand, and static, which is fixed allotments at a fixed rate.*", italics:true },
      { t:"*Watch how two pillars land here. If you are driving corporate, you build room nights into the consortia and corporate segments, on purpose, month by month, backed by the account targeting you have been doing. And if you are cutting static wholesale dependency, you plan that segment down, deliberately, so cheap fixed-rate volume stops occupying rooms you could sell better.*", italics:true },
      { t:"*That is a pillar becoming a decision becoming a number. Your pillars may be different, but the mechanic is the same: decide the direction, then move the segment.*", italics:true },
    ]},
  ]});

/* 10 */
slides.push({ no:"11", title:"Groups: the rooms you take, and the ones you hold", time:"1:30", type:"Concept",
  spec:[
    ["objective","Groups, both MICE and leisure, are a timing and yield decision: which group business to take, and when to hold rooms back for higher-rated transient. The group-versus-FIT call, by demand period."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "The group block, placeholder capture, beside a simple two-period strip: take groups in the soft months, hold rooms in the peaks. DHI to design.",
    ]},
    { kind:"screen", lines:[
      "**Groups are a timing and yield decision, not just volume.**",
      "MICE and leisure groups fill need periods and build a base you can count on.",
      "But in high demand, every group room is a transient room you cannot sell at a higher rate.",
      "**Plan groups into the soft months, and hold back in the peaks.** That trade-off is the budget decision.",
    ]},
    { kind:"narration", lines:[
      { t:"*Groups are where the budget stops being arithmetic and becomes judgement. Group business, both MICE and leisure, is excellent for filling your soft periods and building a base you can count on. But in your high-demand dates, every group room you commit is a room you cannot later sell to higher-rated transient business.*", italics:true },
      { t:"*So the group line in your budget is a yield call. You plan group room nights into the months that need them, and you hold back in the months that do not, protecting those dates for better-rated business. When you set the group segments, you are really deciding when you want certainty, and when you want upside.*", italics:true },
    ]},
  ]});

/* 11 */
slides.push({ no:"12", title:"Mix is the strategy", time:"2:30", type:"Concept",
  spec:[
    ["objective","The room-nights mix is where the strategy becomes visible. The shape of your segments, not just the total, determines your ADR and the quality of your revenue. A worked illustrative example of a mix shift lifting ADR at the same occupancy."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Two mixes side by side, \u201Clast year\u201D versus \u201Cbudget,\u201D same total height: the low-rate slice smaller, the corporate and direct slices larger. An ADR figure ticking up beside the budget mix. Illustrative numbers only.",
    ]},
    { kind:"screen", lines:[
      "**The total is not the strategy. The mix is.**",
      "Two hotels can run the same occupancy and earn very different revenue, because of which segments fill the rooms.",
      "**Worked example:** shift ten points of mix from a low-rate segment to a higher-rate one at the same occupancy, and your ADR and RevPAR rise without selling a single extra room.",
      "When you check your build, read the mix, not just the total.",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is the idea that separates a plan from a guess. The total occupancy is not your strategy. The mix is.*", italics:true },
      { t:"*Let me show you with clean illustrative numbers. Say two versions of your plan both land at seventy percent occupancy. In the first, a big slice of those rooms come from a low-rate channel. In the second, you have shifted ten points of the mix into corporate and direct, higher-rated business, and trimmed the low-rate slice to match. Same occupancy, the same number of rooms sold. But the second plan earns a higher ADR and a higher RevPAR, because the rooms are filled with better business.*", italics:true },
      { t:"*That shift is your pillars made visible. So when you stand back and check your build, do not just read the total. Read the mix. The mix is the strategy.*", italics:true },
    ]},
  ]});

/* 12 */
slides.push({ no:"13", title:"The targets that fall out: MPI, ARI, RGI", time:"2:30", type:"Concept",
  spec:[
    ["objective","When the build is done, the topline outputs occupancy, ADR, RevPAR and the index targets MPI, ARI, RGI. The budget is where the team sets the indices Module 6 taught them to read. Sense-check them against the market."],
    ["interaction","Hotspot on the Revenue Plan topline summary. Three areas: the occupancy, ADR and RevPAR block, the MPI, ARI and RGI targets, the variance-to-prior columns."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "The Revenue Plan topline summary, placeholder capture. Ring the occupancy, ADR and RevPAR block, the MPI, ARI and RGI block, and the variance columns. Schematic, no real figures.",
    ]},
    { kind:"screen", lines:[
      "**Finish the build and the topline writes itself.**",
      "Occupancy, ADR, RevPAR, the headline numbers.",
      "And your index targets: **MPI, ARI, RGI.** Module 6 taught you to read these. The budget is where you set them.",
      "**Sense-check:** does your RGI target say you plan to gain share, hold it, or lose it? That had better match your pillars.",
    ]},
    { kind:"interaction", lines:[
      "**Type:** hotspot, three areas, all opened before Continue.",
      "**Tooltip A (occ, ADR, RevPAR):** \u201CThe headline result of every segment number you set.\u201D",
      "**Tooltip B (MPI, ARI, RGI):** \u201CYour index targets for the year. You are committing to a share position.\u201D",
      "**Tooltip C (variance):** \u201CVersus last year. Every gap here is something you will be asked to explain.\u201D",
    ]},
    { kind:"builder", lines:[
      "Reference Module 6 for what MPI, ARI and RGI mean and how to read them. Do not re-teach them.",
    ]},
    { kind:"narration", lines:[
      { t:"*Once the segments are built, the topline falls out on its own. Occupancy, average rate, RevPAR, all of it is just your segment numbers rolled up. And so are the indices you know from Module 6: MPI for occupancy, ARI for rate, RGI for revenue, each against your comp set.*", italics:true },
      { t:"*Here is the powerful part. In Module 6 you learned to read those indices after the fact. In the budget, you set them, in advance. Your plan is a statement about share: an RGI target above a hundred says you intend to take more than your fair share next year.*", italics:true },
      { t:"*So sense-check it. If your RGI target says gain share, but your pillars are cautious, something does not line up. The indices are where your plan and your ambition have to agree.*", italics:true },
    ]},
  ]});

/* 13 */
slides.push({ no:"14", title:"Top-down target meets bottom-up build", time:"1:30", type:"Concept",
  spec:[
    ["objective","The reconciliation. Ownership sets a top-down target, your build is bottom-up, and they rarely match first time. Close the gap honestly, with real segment moves rather than a blanket stretch, through the submission cycle."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Two arrows meeting, DHI to design: a top-down target coming down, a bottom-up build coming up, a gap between them, and a loop arrow labelled \u201Csubmission.\u201D",
    ]},
    { kind:"screen", lines:[
      "**Two numbers arrive from opposite directions.**",
      "**Top-down:** the target ownership expects.",
      "**Bottom-up:** the number your segment build actually produces.",
      "They rarely meet on the first pass. That is why budgets go through submissions.",
      "**Close the gap with real segment moves you can defend, not a percentage smeared across every line.**",
    ]},
    { kind:"narration", lines:[
      { t:"*Two numbers are going to meet, and they come from opposite directions. From the top, ownership hands down a target, the number they expect this asset to deliver. From the bottom, your segment build produces a number of its own. On the first pass, they almost never match.*", italics:true },
      { t:"*That gap is not a failure, it is the conversation. It is why a budget goes through submissions, a first, a second, a third. The wrong way to close it is to smear a few percent across every segment so the total hits the target. The right way is to find real moves, a pillar you can push harder, a segment with genuine upside, and show your work. A budget you stretched without believing is one you will miss all year. Close the gap with decisions, not decoration.*", italics:true },
    ]},
  ]});

/* 14 */
slides.push({ no:"15", title:"Write the why: priorities and the market story", time:"1:30", type:"Concept",
  spec:[
    ["objective","The numbers need a narrative. The plan's priorities and market write-up are what you present and defend. The story explains the numbers and ties them to the pillars."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "The plan's Top-5 priorities and Business Overview section as on-screen reference, placeholder capture. Ring the priorities list and the market narrative. Schematic.",
    ]},
    { kind:"screen", lines:[
      "**A budget is not just a grid. It comes with a story.**",
      "Your top priorities for the year, in words: the pillars, stated.",
      "Your market read: the demand, the risks, the events behind the numbers.",
      "This is what you present in the review. **The grid is the what. The story is the why.**",
    ]},
    { kind:"narration", lines:[
      { t:"*A budget is not just a grid of numbers, and you will not defend it with numbers alone. The plan comes with a written story: your top priorities for the year, and your read of the market behind them.*", italics:true },
      { t:"*This is the part people skip and then regret. When you sit in front of ownership, or in the monthly review, the grid tells them what you committed to. The story tells them why, and why it is achievable. Your pillars, written as priorities. Your market read, written as the reasoning. Numbers with a story behind them are a plan. Numbers without one are a hope on a spreadsheet.*", italics:true },
    ]},
  ]});

/* 15 */
slides.push({ no:"16", title:"Stress-test, then lock it", time:"1:30", type:"Concept",
  spec:[
    ["objective","Before sign-off, sense-check the plan: is the mix realistic, does rate move with the market, is occupancy achievable month by month, what is the downside? Then lock it. The budget becomes fixed for the year, while the forecast moves, which is the next module."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "A checklist concept, DHI to design: mix realistic? rate versus market? occupancy achievable? downside covered? Then a lock icon at the end.",
    ]},
    { kind:"screen", lines:[
      "**Before you sign, sense-check it.**",
      "Is the mix realistic, or did one segment grow on hope?",
      "Does your rate move with the market you described?",
      "Is the occupancy achievable in the soft months, not just on average?",
      "**Then lock it.** From here the budget is fixed. The forecast will move month to month, that is the next module.",
    ]},
    { kind:"narration", lines:[
      { t:"*One last pass before it is signed. Stress-test your own plan the way a sceptic would. Is the mix realistic, or did you grow one segment on optimism to make the total work? Does the rate you planned move with the market you described, or did you hold rate flat in a year you called strong? Is the occupancy achievable in February, not just as an annual average?*", italics:true },
      { t:"*When it survives that, you lock it. And locking matters: from this point the budget is fixed, it does not move again all year. What moves is the forecast, your monthly updated view, and holding the two apart is the heart of the next module, the Monthly Performance Review. But the budget itself, once locked, is the promise. Build it like you mean it.*", italics:true },
    ]},
  ]});

/* 16 */
slides.push({ no:"18", title:"Build the segment line", time:"2:30", type:"Interaction",
  spec:[
    ["objective","Apply the module. Match each strategic intent to the segment move that executes it."],
    ["interaction","Five-pair drag and match. All matched before Continue, one retry per pair."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Two columns, DHI to design. Left, five strategic intents. Right, five segment moves, shuffled. A clean drag line snaps a correct pair into place.",
    ]},
    { kind:"interaction", lines:[
      "**Type:** drag and match, five pairs.",
      "**1.** Grow direct, lower distribution cost  \u2192  Hold total retail, shift room nights from OTA to brand.com.",
      "**2.** Drive corporate  \u2192  Build room nights into the consortia, TMC and corporate segments.",
      "**3.** Cut static wholesale dependency  \u2192  Plan the static wholesale segment down on purpose.",
      "**4.** Protect peak-date yield  \u2192  Hold group room nights out of the high-demand months.",
      "**5.** Lift ADR at the same occupancy  \u2192  Shift mix from a low-rate segment to a higher-rate one.",
    ]},
    { kind:"narration", lines:[
      { t:"*Five intents, five moves. Drag each strategic intent to the segment action that carries it out. The point is not to memorise a rule, it is to take a direction and know, without hesitating, exactly which line in the build it changes, and which way.*", italics:true },
    ]},
  ]});

/* 17 */
slides.push({ no:"19", title:"Ownership sent it back. Find the points.", time:"2:30", type:"Scenario",
  spec:[
    ["objective","A branching decision. The bottom-up build lands below ownership's target by a few points of revenue. The learner chooses how to close the gap. The right path finds real, defensible segment moves rather than a blanket stretch."],
    ["interaction","Branching scenario, three paths. Allow viewing the other paths before Continue."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "The gap on screen, placeholder: your build versus ownership's target, a shortfall between them. Three choice buttons beneath. DHI to lay out.",
    ]},
    { kind:"interaction", lines:[
      "**Setup:** \u201CYour build comes in below ownership's target by a few points of revenue. They have asked you to close the gap and resubmit. What do you do?\u201D",
      "**Path A, add a flat few percent to every segment's room nights:** \u201CThat is decoration, not a plan. You will miss it evenly all year and you cannot defend any single line. Try again.\u201D",
      "**Path B, revisit the pillars and find segments with genuine upside, corporate you can win, a soft month you can grow, a rate you under-set, and move those with a reason:**  \u2713  \u201CRight. Real moves, tied to your direction, that you can stand behind in any review.\u201D",
      "**Path C, tell ownership the number simply cannot move:** \u201CSometimes true, but not before you have tested your own plan for real upside. Come back with options, not a flat no. Try again.\u201D",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is a real one. Your bottom-up build lands a few points of revenue below ownership's target, and they have asked you to close the gap and resubmit. How do you do it? Choose, and see where it leads. There is a way that produces a plan you can defend, and a couple that just move the number and leave you exposed.*", italics:true },
    ]},
  ]});

/* 18 */
slides.push({ no:"20", title:"A moment to check before the quiz", time:"1:30", type:"Knowledge Check",
  spec:[
    ["settings","Two ungraded questions with feedback. Nothing rides on them. They confirm the two core habits before the graded quiz."],
  ],
  boxes:[
    { kind:"quiz", lines:[
      "**Question 1 (ungraded).** What is the right way to build a budget?",
      "A. Take last year and add a few points across the board.",
      "B. Set direction first, then build each segment to carry it out.  \u2713",
      "C. Match ownership's target, then back into the segments.",
      "*Feedback: direction first, then the build. A budget is a strategy written as numbers, not last year with a margin added.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 2 (ungraded).** Two plans both budget 70% occupancy. What makes one stronger than the other?",
      "A. Nothing, the occupancy is identical.",
      "B. A mix weighted to higher-rate segments, so the same occupancy earns more.  \u2713",
      "C. A lower average rate to be safe.",
      "*Feedback: the total is not the strategy, the mix is. The same occupancy can earn very different revenue depending on which segments fill the rooms.*",
    ]},
    { kind:"narration", lines:[
      { t:"*Two quick checks before the graded questions. Nothing rides on these. Read each one and see if the two core habits have landed: direction drives the build, and the mix, not the total, is the strategy.*", italics:true },
    ]},
  ]});

/* 19 */
slides.push({ no:"21", title:"Five questions, real situations", time:"5:00", type:"Quiz",
  spec:[
    ["settings","5 questions. Pass mark 80% (4/5). One per screen. No going back. Immediate feedback. Score reported to Moodle. One retry on fail. Every answer points to a budgeting decision, the worked figures are illustrative."],
  ],
  boxes:[
    { kind:"quiz", lines:[
      "**Question 1 of 5.** One of your pillars is to grow direct and lower distribution cost. How should that land in the build?",
      "A. Cut the OTA segment hard and hope the rooms come back direct.",
      "B. Hold total retail volume, and shift room nights from OTA into brand.com and loyalty.  \u2713",
      "C. Raise the direct rate so direct revenue grows on its own.",
      "D. Leave retail as last year, the pillar is a marketing job.",
      "*Feedback: the pillar is a mix shift, not a volume cut. Hold the rooms, move them to a cheaper channel to acquire. That is the brand.com pillar expressed as numbers.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 2 of 5.** A low-rate static wholesale segment fills rooms but crowds out better business, and your pillar is to reduce that dependency. What do you plan?",
      "A. Hold it flat, the volume is safe.",
      "B. Grow it, since it fills rooms.",
      "C. Plan its room nights down on purpose, and replace them with higher-rated demand.  \u2713",
      "D. Raise its contracted rate mid-year.",
      "*Feedback: cutting dependency means planning the segment down deliberately and building better business in its place. That is a pillar becoming a budget decision.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 3 of 5.** Your finished plan sets an RGI target above 100, but every pillar you chose is defensive and cautious. What does that tell you?",
      "A. Nothing, the RGI target is just an output.",
      "B. The plan and the ambition disagree, revisit so the share target matches the strategy.  \u2713",
      "C. Raise rate everywhere to justify the RGI.",
      "D. Lower the RGI target and move on.",
      "*Feedback: an RGI above 100 says you intend to gain share. If your pillars do not support that, the numbers and the strategy are out of step. Make them agree.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 4 of 5.** Your bottom-up build lands below ownership's target. How do you close the gap?",
      "A. Add a flat few percent to every segment so the total hits the number.",
      "B. Find specific segments with real, defensible upside and move those with a reason.  \u2713",
      "C. Lower the ADR assumptions so occupancy can rise to fill the gap.",
      "D. Submit the build unchanged and let ownership decide.",
      "*Feedback: close the gap with real moves you can defend line by line, not a percentage smeared across every segment. A stretch you do not believe is a year of misses.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 5 of 5.** A high-demand month, and a large group inquiry comes in at a modest rate. What does the budget logic say?",
      "A. Take it, group volume is always good.",
      "B. Hold the rooms for higher-rated transient, or take only what protects your yield.  \u2713",
      "C. Take it and raise transient rates to compensate.",
      "D. Take it, occupancy is what gets measured.",
      "*Feedback: in peak demand, every group room at a modest rate is a transient room you could have sold higher. Protect the date. Groups are for the months that need them.*",
    ]},
  ]});

/* 20 */
slides.push({ no:"22", title:"Build it like you'll defend it", time:"1:00", type:"Summary",
  spec:[
    ["objective","Close on one memorable line: a budget is your strategy written as numbers you will defend, built direction-first and segment by segment."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Dark navy. Large white centred headline. Three gold lines beneath, left aligned. Bottom-right, a gold \u201CModule Complete\u201D badge. Bottom-left, a white button, \u201CDownload the Budget Build Checklist.\u201D Dusit mark small, top corner.",
    ]},
    { kind:"screen", lines:[
      "**Headline: \u201CA budget is your strategy, written as numbers you will defend.\u201D**",
      "Direction first: demand, vision, pillars. Then the build carries them out.",
      "The mix is the strategy. The indices are your promise on share.",
      "*Download: \u201CThe Budget Build Checklist.\u201D*",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is the whole module. A budget is not last year plus a few points. It is your strategy for the year, written as numbers. You set the direction first, the demand, the vision, and three or four pillars of your own choosing. Then you build the pillars into the plan, segment by segment, two numbers at a time, until the topline and the indices fall out.*", italics:true },
      { t:"*The mix is where the strategy shows. The indices are where you commit to a share position. And the story is how you defend it. Build it that way, and when the year tests you month by month, you will be standing behind a plan, not explaining a guess. Build it like you'll defend it. Well done for completing this module.*", italics:true },
    ]},
  ]});


/* 08 checkpoint */
slides.push({ no:"08", title:"Part 1 done. A good place to pause.", time:"1:00", type:"Transition",
  spec:[
    ["objective","Close Part 1, mark a natural pause and resume point, and preview Part 2. A designed stopping place for a learner with only fifteen minutes."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Navy screen. A three-segment progress bar with Part 1 filled in gold, Parts 2 and 3 outlined. A small pause glyph and the line “Progress saved.” DHI to design.",
    ]},
    { kind:"screen", lines:[
      "**That's Part 1: the direction.**",
      "You have set the demand read, the vision, and your pillars, and learned the two-number build.",
      "**Good place to stop.** Your progress saves. Pick up at Part 2 whenever you are ready.",
      "Next, Part 2: building the pillars into the plan, and locking it.",
    ]},
    { kind:"narration", lines:[
      { t:"*That is the first part done, and it is the most important one, because everything from here executes the direction you just set. If you have fifteen minutes and no more, this is a clean place to stop. The course remembers where you are, so you can come back to Part 2 when you have the time.*", italics:true },
      { t:"*When you do, we start building the pillars into the plan, segment by segment, and take it all the way to a locked budget.*", italics:true },
    ]},
  ]});

/* 17 checkpoint */
slides.push({ no:"17", title:"Part 2 done. The plan is locked.", time:"1:00", type:"Transition",
  spec:[
    ["objective","Close Part 2, mark a pause and resume point, and preview Part 3, the application and assessment."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Navy screen. The three-segment progress bar with Parts 1 and 2 filled in gold, Part 3 outlined. The pause glyph and “Progress saved.” DHI to design.",
    ]},
    { kind:"screen", lines:[
      "**That's Part 2: the plan is built and locked.**",
      "You have carried your pillars through every segment, set the index targets, reconciled and signed off.",
      "**Another good place to pause.** Resume at Part 3 when you are ready.",
      "Next, Part 3: putting it to work, an exercise, a real resubmission call, and the quiz.",
    ]},
    { kind:"narration", lines:[
      { t:"*That is Part 2 done, and you now have a complete, locked plan. If you are stopping here, the course holds your place.*", italics:true },
      { t:"*When you come back for the last part, it is all application: a quick build exercise, a real scenario where ownership sends your budget back, a short check, and the five-question quiz that completes the module. Short stretch, and you are done.*", italics:true },
    ]},
  ]});

/* ---------------- assemble ---------------- */
const children = [];

children.push(
  new Paragraph({ alignment: ctr, spacing: { before: 1500, after: 80 }, children: [new TextRun({ text: "DUSIT HOTELS & RESORTS   \u00B7   REVENUE TRAINING PROGRAMME", bold: true, size: 20, color: NAVY, font: FONT, characterSpacing: 30 })] }),
  new Paragraph({ alignment: ctr, spacing: { before: 220, after: 80 }, children: [new TextRun({ text: "MODULE 11   \u00B7   REVENUE BUDGET PREP", bold: true, size: 26, color: GOLD, font: FONT, characterSpacing: 40 })] }),
  new Paragraph({ alignment: ctr, spacing: { after: 100 }, children: [new TextRun({ text: "The Plan You'll Defend", bold: true, size: 44, color: NAVY, font: FONT })] }),
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
  rows: [new TableRow({ children: [ci("DURATION","43 min \u00B7 3 parts"), ci("SLIDES","22 slides"), ci("DELIVERY","iSpring / SCORM 1.2"), ci("AUDIENCE","Revenue \u00B7 Commercial Leaders")] })] }));
children.push(new Paragraph({ alignment: ctr, spacing: { before: 340 }, children: [new TextRun({ text: "Prepared by DHI Hospitality   \u00B7   June 2026   \u00B7   Confidential", size: 20, color: MUTE, font: FONT })] }));
children.push(new Paragraph({ children: [new PageBreak()] }));

children.push(Hh("The Narrative"));
children.push(P("Once a year, a hotel builds a budget, and the moment it is signed, that number becomes the bar every monthly review measures against, for a year. Build it in an afternoon by adding a few points to last year, and you spend twelve months explaining variances you could have prevented. Build it as a plan, with a direction behind every number, and it is something you can stand behind in any room.", { after: 140 }));
children.push(P("This module teaches the commercial team to build the rooms revenue plan the way it is really done, in the Dusit revenue-plan template, but as a strategy rather than a spreadsheet. It runs in two moves. First, set the direction: read the demand and the macro picture, hold the brand's vision and ownership's goals in mind, and choose three or four strategic pillars for the year. Then, build the pillars: take history as your base and set two numbers, room nights and rate, for every segment, every month, until occupancy, ADR, RevPAR and the MPI, ARI and RGI targets fall out. By the end, a learner can take a direction and turn it into a segment-by-segment plan they can defend through every submission and every review. The module teaches the real method and shows the real workbook, but every worked figure is illustrative, and the strategic pillars are taught as each hotel's own choice, not a fixed list.", { after: 160 }));
children.push(arcBox("The arc, 22 slides, 43 minutes, 3 parts", [
  { lead:"Part 1, Set the Direction (slides 1\u20138)", rest:"The number you answer for all year, the demand and vision read, choosing your own pillars, and the two-number build mechanic. Pause point at slide 8." },
  { lead:"Part 2, Build and Lock the Plan (slides 9\u201317)", rest:"The retail, negotiated, wholesale, group and mix decisions that carry your pillars, the MPI, ARI and RGI targets, reconciling top-down with bottom-up, and locking it. Pause point at slide 17." },
  { lead:"Part 3, Apply and Assess (slides 18\u201322)", rest:"A build match, a resubmission scenario, a quick check, five graded reads, and the close." },
]));
children.push(box("builder", [
  "Data policy for this module: teach the real Dusit revenue-plan method and show the actual workbook as on-screen reference, a placeholder for the Dusit team to drop live captures into during the iSpring build. Every worked number is illustrative and invented. No real DTKJ budget figures appear in the content. Strategic pillars are taught as a portable decision: the drive-corporate, cut-static-wholesale, grow-brand.com set is one hotel's example only, clearly flagged, never a fixed list. Reference Modules 2 (segments), 3 (pricing), 5 (comp set), 6 (indices), Demand360 and Agency360 rather than re-teaching them.",
]));
children.push(new Paragraph({ children: [new PageBreak()] }));

children.push(Hh("Module at a Glance"));
children.push(glanceTable(glance));
children.push(spacer(100));
children.push(box("content", ["Total: 43 minutes across 22 slides, built as 3 parts of about 15 minutes. Learners can stop at the end of any part, slides 08 and 17 are designed pause points, and resume where they left off. Pass mark 80% (4 of 5). One retry allowed. Completion: quiz passed and all slides visited. Audience: Revenue (DOR, Revenue Managers, Analysts) and Commercial leadership (GM, DOSM). Real method, real template shown as reference, illustrative worked numbers only."]));
children.push(new Paragraph({ children: [new PageBreak()] }));

children.push(Hh("Slide Specifications"));
children.push(P("Each slide is fully specified below. The voice-over reads the narration script exactly. The builder follows the visual direction, interaction specs and builder notes. On-screen text and narration complement each other; they do not simply repeat. Every screen named in visual direction is a placeholder for the Dusit team's live capture of the revenue-plan workbook. Every worked figure in the content is illustrative.", { after: 160 }));

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
  "Revenue-plan workbook captures (live, from the Dusit team) used as on-screen reference for: the Business Overview and Market Conditions section (slide 03), a monthly segment build grid (slides 06 and 07), the retail block (slide 09), the negotiated and wholesale blocks (slide 10), the group block (slide 11), the Revenue Plan topline summary (slide 13) and the Top-5 priorities and market story (slide 15). Each replaces a placeholder in visual direction. No real budget figures need appear, the worked numbers in the content are illustrative.",
  "Concept graphics (DHI to design): the year-as-a-bar target (slide 01), the direction-then-build two-step (slide 02), the company vision stack (slide 04), the pillars-being-chosen tiles with the flagged example (slide 05), the channel-mix shift (slides 09 and 12), the top-down-meets-bottom-up reconciliation (slide 14), the stress-test checklist and lock (slide 16).",
  "\u201CThe Budget Build Checklist\u201D one-page PDF (slides 18 and 22): set the direction, choose the pillars, build the segments, sense-check and lock. DHI to produce.",
  "Dusit logo, white version, transparent background.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "iSpring Builder Checklist", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "Slide 07: hotspot on the monthly segment grid capture, three areas, all opened before Continue.",
  "Slide 13: hotspot on the Revenue Plan topline capture, three areas.",
  "Slide 18: five-pair drag and match, all matched before Continue, one retry per pair.",
  "Slide 19: branching scenario, three paths, allow viewing other paths before Continue.",
  "Slide 20: two ungraded knowledge-check questions with feedback.",
  "Slide 21: graded quiz, 5 questions, pass mark 80%, one retry, score to Moodle.",
  "Slides 08 and 17 are part-break checkpoint screens. Present them as the natural pause points between the three parts.",
  "Enable SCORM resume (bookmarking): on re-entry, return the learner to the slide they left, so the three parts can be completed across separate sittings.",
  "SCORM 1.2: completion is quiz passed and all slides visited.",
  "Insert all live captures in place of the visual-direction placeholders. Mask any real figures the property prefers not to show, the teaching does not depend on them.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "QA Checklist", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "No real DTKJ budget figures anywhere in the finished module. Every worked number is illustrative only.",
  "Strategic pillars read as a portable choice. The drive-corporate, cut-static-wholesale, grow-brand.com set is clearly flagged as one hotel's example, never a fixed framework.",
  "Every index reference (MPI, ARI, RGI) is framed as a target being set, with Module 6 referenced for how to read them.",
  "The segment taxonomy references Module 2, it is not re-taught.",
  "Hotspots (slides 07, 13): all areas clickable, correct tooltips.",
  "Drag and match (slide 18): all five pairs lock, wrong matches return feedback.",
  "Branching scenario (slide 19): all three paths reachable, the defensible-moves path acknowledged as correct.",
  "Quiz: 5 questions, every answer points to a budgeting decision, pass and fail screens, score to Moodle, one retry.",
  "SCORM tested in the Moodle sandbox.",
  "Content reviewed by the Dusit Revenue and Commercial teams before launch.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(spacer(200));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Dusit Revenue Training Programme  \u00B7  Module 11, Revenue Budget Prep  \u00B7  DHI Hospitality  \u00B7  June 2026", size: 18, color: MUTE, font: FONT })] }));

const doc = new Document({
  numbering: { config: [{ reference: "bul", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 460, hanging: 260 } } } }] }] },
  styles: { default: { document: { run: { font: FONT, size: 20, color: INK } } } },
  sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } }, children }],
});
Packer.toBuffer(doc).then(buf => { fs.writeFileSync("/mnt/user-data/outputs/module11-budget-blueprint.docx", buf); console.log("WROTE module11-budget-blueprint.docx", buf.length, "bytes |", slides.length, "slides"); });
