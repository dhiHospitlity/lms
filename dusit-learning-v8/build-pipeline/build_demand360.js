/* Dusit Revenue Training Programme — Module 8 (Amadeus): DEMAND360
   Conceptual, screen-reading blueprint. No property data. Index 100 = fair share.
   Built on the shared v7 helpers. */
const fs = require("fs");
const H = require("./helpers.js");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, ShadingType, VerticalAlign, PageBreak, LevelFormat,
  NAVY, GOLD, MUTE, INK, FONT, CW, noBorders, box, arcBox, slideHeader, specTable, glanceTable, P, spacer,
} = H;
const Hh = H.H;

/* ---------------- glance ---------------- */
const glance = [
  ["01","Hook","The miss hiding behind a healthy index","2:00","None","Hook"],
  ["02","Concept","Demand360: your demand against the market","2:00","None","Hook"],
  ["03","Concept","The index: reading fair share","1:30","None","Foundation"],
  ["04","Concept","Customize Metrics and Filters: the two controls","2:00","None","Foundation"],
  ["05","Transition","From miss to action: how the tabs fit together","0:30","None","Foundation"],
  ["06","Concept","Segment and Channel Summary: your first read","2:30","Hotspot","Reading the Tabs"],
  ["07","Concept","Sub-segment and sub-channel: opening the levels","2:00","None","Reading the Tabs"],
  ["08","Concept","Forward-Looking and Historical Pace: coming, or already gone","2:00","None","Reading the Tabs"],
  ["09","Concept","Performance Trends: the twelve-month shape","2:00","None","Reading the Tabs"],
  ["10","Concept","Group Outlook: the pipeline you can still fill","1:30","None","Reading the Tabs"],
  ["11","Concept","Rate Ranges: where you win and lose by price","2:00","None","Reading the Tabs"],
  ["12","Concept","Booking Patterns: length of stay and lead time","2:00","None","Reading the Tabs"],
  ["13","Interaction","Find where the share is going","2:30","Drag-match","Apply"],
  ["14","Scenario","You are losing share. Now what?","2:30","Branching","Apply"],
  ["15","Knowledge Check","A moment to check before the quiz","2:00","2 questions","Assess"],
  ["16","Quiz","Five questions, real situations","5:00","Graded quiz","Assess"],
  ["17","Summary","The total says if. Demand360 says where.","1:00","None","Assess"],
];

const slides = [];

slides.push({ no:"01", title:"The miss hiding behind a healthy index", time:"2:00", type:"Hook",
  spec:[
    ["objective","Open on a consequence. An overall index sitting right at fair share looked healthy, so nobody looked closer. The miss was one level down the whole time, and by the time it surfaced it was history, not a decision."],
    ["layout","Split. Left, the calm headline: an overall index at fair share, green and reassuring. Right, the same picture drilled one level down, where the real story is hiding."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Concept graphic, no real figures. Centre, a large reassuring dial reading roughly 100 with a green tick and the words \u201Cat fair share.\u201D Then a magnifier passes over it and the panel beneath splits into several smaller bars: one deep in the red, one far in the green, the rest mixed. Caption forming below: \u201CFair share overall is not fair share everywhere.\u201D",
    ]},
    { kind:"screen", lines:[
      "**What you see:** an overall index at fair share. Occupancy holding, rate a little ahead, revenue index green. A hotel doing fine.",
      "**What it hides:** one segment in free fall, one channel carrying the whole house, and rooms going out cheap in bands where you could hold more.",
      "**The point:** Demand360 is where \u201Cwe are fine\u201D becomes \u201Chere is exactly where we are not.\u201D",
    ]},
    { kind:"narration", lines:[
      { t:"*Picture the index on a Monday morning. Overall, your hotel is sitting right at fair share. Occupancy is holding, rate is a touch ahead, the revenue index is green. It looks like a hotel doing just fine, so everyone nods and moves on.*", italics:true },
      { t:"*But fair share overall does not mean fair share everywhere. Underneath that calm number, one segment can be quietly collapsing while another carries the house. One channel can be feeding you rooms at full cost while your own direct business runs at half its share. The headline said fine. The detail said fragile.*", italics:true },
      { t:"*This module is about the tool that shows you that difference while you can still act on it. Demand360. Because a miss you spot early is a decision. A miss you find at month-end is just history.*", italics:true },
    ]},
  ]});

slides.push({ no:"02", title:"Demand360: your demand against the market", time:"2:00", type:"Concept",
  spec:[
    ["objective","Define the tool in one plain frame: your demand set against your comp set's and the wider market, past and future, at every level of detail. Note that the comp set itself is a configurable choice."],
    ["layout","Three stacked bands: who it compares (you, comp set, market), what time it covers (past and future), and how deep it drills (segment and channel, down to sub-levels)."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Three clean bands on a white field. Band 1: three figures side by side labelled You, Comp Set, Market. Band 2: a timeline arrow running left (history) through today to the right (forward). Band 3: a small set of nested boxes suggesting Segment to Sub-Segment to Detail, and Channel to Sub-Channel. Gold accents. Placeholder, no figures.",
    ]},
    { kind:"screen", lines:[
      "**Demand360 compares your demand to your comp set's, and to the wider market.**",
      "**Across time:** what already happened, and what is on the books ahead.",
      "**At every level:** by segment and channel, and down into their sub-levels.",
      "**One setup note:** your comp set is a choice you configure. Everything you read is relative to the set you picked, so the set has to be right.",
    ]},
    { kind:"narration", lines:[
      { t:"*So what is Demand360? In one line, it is the tool that compares your demand to your competitors' demand, and to the wider market, at a level of detail nothing else gives you.*", italics:true },
      { t:"*Three things to hold onto. First, it is always a comparison. You, your comp set, the market. Second, it covers both directions in time. You can look back to diagnose what happened, and forward to see what is building. Third, and this is the real power, it drills. Not just segments and channels, but the sub-segments and sub-channels underneath them.*", italics:true },
      { t:"*One quick setup point. The comp set is something you configure. Every index you read is relative to the competitors you chose, so if the set is wrong, the story is wrong. You learned how to build a comp set in an earlier module. This is where it pays off.*", italics:true },
    ]},
  ]});

slides.push({ no:"03", title:"The index: reading fair share", time:"1:30", type:"Concept",
  spec:[
    ["objective","Give the learner the single mental anchor for the whole tool. Index 100 is fair share. Above 100 you are capturing more than your size, below 100 you are leaving demand to the comp set. Everything else is reading detail through that lens."],
    ["layout","A simple horizontal scale from 0 through 100 to 200, with 100 marked as the fair-share line, a green zone above and a red zone below."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "A clean index scale, 0 on the left to 200 on the right, with 100 marked by a bold gold line labelled \u201CFair Share.\u201D Above 100 shaded soft green (\u201Cwinning more than your size\u201D), below 100 soft red (\u201Closing share to the comp set\u201D). Placeholder, no property data.",
    ]},
    { kind:"screen", lines:[
      "**100 is fair share.** Your slice of the market's demand, matched to your size.",
      "**Above 100:** you are capturing more than your fair share. Good, and worth protecting.",
      "**Below 100:** the comp set is taking demand you could have had. Worth investigating.",
      "Occupancy index, rate index, revenue index. Same scale, same rule, every time.",
    ]},
    { kind:"narration", lines:[
      { t:"*Before we open a single tab, learn one number and you can read the whole tool. One hundred. That is fair share. It means you captured exactly the slice of demand your size entitles you to.*", italics:true },
      { t:"*Above one hundred, you are winning more than your share. Below, you are handing demand to your competitors. That is it. Occupancy index, rate index, revenue index, they all read the same way. One hundred is the line. Carry that one number and every screen in Demand360 makes sense.*", italics:true },
    ]},
  ]});

slides.push({ no:"04", title:"Customize Metrics and Filters: the two controls", time:"2:00", type:"Concept",
  spec:[
    ["objective","Teach how a user shapes the view. Two controls do everything: Customize Metrics (what you measure) and Filters (what you slice by). The discipline is to show less, not more, so the answer stands out."],
    ["layout","Two panels side by side: a Customize Metrics list on the left, a Filters cascade on the right (Segment, Sub-Segment, Detail, Channel, Sub-Channel, Comp Set)."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Two side-by-side UI panels, schematic. Left, \u201CCustomize Metrics\u201D with a long list and a few ticked. Right, \u201CFilters\u201D showing the dropdown stack: Competitive Set, Segment, Sub-Segment, Sub-Segment Detail, Channel, Sub-Channel. Gold highlight on the ticked metrics and the open dropdown.",
    ]},
    { kind:"screen", lines:[
      "**Lever 1, Customize Metrics:** choose what you measure. There are many metrics. Do not show them all.",
      "Diagnosing a share miss? Index, plus the growth column, plus mix share. The noise falls away.",
      "**Lever 2, Filters:** choose what you slice by. Segment, Sub-Segment, Detail. Channel, Sub-Channel. Plus the comp set itself.",
      "**The discipline:** show less, not more. A clean view with three right metrics beats a wall of thirty.",
    ]},
    { kind:"interaction", lines:[
      "**Hotspot (builder):** overlay two hotspots on the inserted Customize Metrics and Filters screenshots. Tooltip 1: \u201CWhat you measure. Pick the few metrics that answer your question.\u201D Tooltip 2: \u201CWhat you slice by. Each dropdown takes you one level deeper into the loss.\u201D Both opened before Continue.",
    ]},
    { kind:"narration", lines:[
      { t:"*Demand360 looks busy at first, but only two controls really run it. What you measure, and what you slice by.*", italics:true },
      { t:"*The first is Customize Metrics. There are a lot of metrics available, and the instinct is to switch them all on. Resist it. If you are chasing a share miss, you want the index, the growth against last year, and your mix share. Three columns, and the answer jumps out. Thirty columns, and it hides.*", italics:true },
      { t:"*The second is Filters. This is the drill-down engine. Segment, then Sub-Segment, then the Detail beneath it. Channel, then Sub-Channel. Plus the comp set you are reading against. Every dropdown you open takes you one level closer to where the loss actually lives. The whole skill of this tool is knowing which dropdown to open next.*", italics:true },
    ]},
  ]});

slides.push({ no:"05", title:"From miss to action: how the tabs fit together", time:"0:30", type:"Transition",
  spec:[
    ["objective","Frame the method that the next five slides teach. A share miss always has an address: a period, a segment, a channel, and a shape. You walk down to it."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Dark navy. A descending set of steps, each labelled in gold as it appears: \u201CShare is down\u201D \u2192 \u201CWhich period?\u201D \u2192 \u201CWhich segment?\u201D \u2192 \u201CWhich channel?\u201D \u2192 \u201CWhat shape: stay, lead time, price?\u201D \u2192 \u201CThe action.\u201D",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is the method the rest of this module teaches. A share miss is never just \u201Cwe are down.\u201D It has an address. A period, a segment, a channel, and a shape, the length of stay, the lead time, the price band. You start at the top line and you walk down until the loss has a name. Once it has a name, the action is obvious. Let us walk it.*", italics:true },
    ]},
  ]});

slides.push({ no:"06", title:"Segment and Channel Summary: your first read", time:"2:30", type:"Concept",
  spec:[
    ["objective","Teach the Segment/Channel Summary tab as the opening read. Your occupancy, rate and revenue, each with its index against comp set and market, laid out by segment and by channel. Where the eye should go first."],
    ["interaction","Hotspot on the Segment/Channel Summary screenshot. Three hotspots: the index column, the growth-versus-last-year column, and the segment-versus-channel toggle."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Insert the Segment/Channel Summary screenshot as the backdrop. Overlay three gold hotspot rings: one on an Index column, one on a Growth Vs LY column, one on the Segment / Channel view toggle. Schematic call-outs only, no real figures highlighted.",
    ]},
    { kind:"screen", lines:[
      "**The summary tab is your opening read.** Every segment and every channel, with occupancy, rate and revenue, each shown as an index against the comp set and the market.",
      "**Look at the index column first.** It tells you, in one glance, where you are above fair share and where you are below.",
      "**Then the growth column.** A low index that is climbing is a different story from a low index that is falling.",
      "**Toggle Segment and Channel.** Same demand, two questions: who is buying, and how are they reaching you.",
    ]},
    { kind:"interaction", lines:[
      "**Type:** hotspot, three areas, all opened before Continue.",
      "**Tooltip A (index column):** \u201CRead this first. Above 100 you are winning, below 100 you are losing. The reds are your shortlist.\u201D",
      "**Tooltip B (growth column):** \u201CDirection matters. Falling below fair share is urgent. Rising toward it is recovering.\u201D",
      "**Tooltip C (toggle):** \u201CSegment answers who. Channel answers how they booked. Read both before you conclude anything.\u201D",
    ]},
    { kind:"narration", lines:[
      { t:"*The opening read is the Segment and Channel Summary. It lays out every segment and every channel, with your occupancy, rate and revenue, each one turned into an index against your comp set and the market.*", italics:true },
      { t:"*Train your eye to go to the index column first. In one pass you can see where you sit above fair share and where you sit below. The reds are your shortlist. Then check the growth column, because direction matters. A segment that is below fair share but climbing is recovering. One that is below and falling is a fire.*", italics:true },
      { t:"*And use the toggle. Segment tells you who is buying. Channel tells you how they reached you. The same lost room shows up in both views, and you need both before you decide anything.*", italics:true },
    ]},
  ]});

slides.push({ no:"07", title:"Sub-segment and sub-channel: opening the levels", time:"2:00", type:"Concept",
  spec:[
    ["objective","Teach the drill itself. Segment opens to Sub-Segment opens to Detail. Channel opens to Sub-Channel. You keep going until the loss has a specific name. Use a qualitative worked pattern."],
    ["layout","A cascade: a top-level row expanding into sub-rows, expanding again, the loss highlighted at the deepest level. Beside it, a channel row doing the same."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "A filter cascade, schematic. Left, a Segment row expands into Sub-Segments, one of which expands into Detail, with the deepest red row ringed in gold. Right, a Channel row expands into Sub-Channels, one ringed. Caption: \u201CKeep opening until the loss has a name.\u201D No real labels needed beyond generic ones.",
    ]},
    { kind:"screen", lines:[
      "**The drill is the tool.** Segment opens to Sub-Segment opens to Detail. Channel opens to Sub-Channel.",
      "**A worked example of the logic:** the channel view shows OTA well above fair share and your own direct channel well below it. Read together, that is not a win. It means you are buying volume at full cost while leaving cheaper, loyal demand on the table.",
      "**Keep opening dropdowns** until \u201Cwe are losing share\u201D becomes \u201Cwe are losing this sub-segment, on this channel.\u201D That sentence is something you can act on.",
    ]},
    { kind:"narration", lines:[
      { t:"*Now the drill, which really is the whole tool. A segment opens into its sub-segments. A sub-segment opens into its detail. A channel opens into its sub-channels. You keep opening until the loss stops being vague.*", italics:true },
      { t:"*Here is the kind of pattern you are hunting. Say the channel view shows your OTA business well above fair share, and your own direct channel well below it. On the surface, lots of OTA volume looks like a win. It is not. It means you are paying full distribution cost for rooms while your cheaper, more loyal direct demand sits under fair share. That is a leak wearing the costume of success.*", italics:true },
      { t:"*So you keep opening dropdowns until \u201Cwe are down\u201D turns into \u201Cwe are losing this sub-segment, through this sub-channel.\u201D The moment the loss has a name that specific, the fix names itself.*", italics:true },
    ]},
  ]});

slides.push({ no:"08", title:"Forward-Looking and Historical Pace: coming, or already gone", time:"2:00", type:"Concept",
  spec:[
    ["objective","Teach Forward-Looking and Historical Pace. The same screen answers two questions depending on the date range: diagnose what already happened, or catch what is building. And teach the month to week to day grain."],
    ["layout","One pace screen shown twice: once with a past date range labelled \u201Cdiagnose,\u201D once forward labelled \u201Ccatch it coming.\u201D A small month / week / day stepper beside it."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Insert the Forward and Historical Pace screenshot. Annotate two states: a backward date range tagged \u201Cwhat happened\u201D and a forward range tagged \u201Cwhat is building.\u201D Add a small toggle graphic: Month \u2192 Week \u2192 Day. Placeholder data.",
    ]},
    { kind:"screen", lines:[
      "**Same screen, two questions, set by the date range.**",
      "**Look back** to diagnose a miss that already happened.",
      "**Look forward** to catch a gap while it is still movable. A soft month on the forward books is a decision you still get to make.",
      "**Then change the grain.** Month to spot the soft period, week to narrow it, day to land on the exact dates that need attention.",
    ]},
    { kind:"narration", lines:[
      { t:"*The time lens is one screen that does two jobs, depending only on the date range you set. Point it backward and it diagnoses, it shows you the period where your share slipped and lets you drill into why. Point it forward and it warns, it shows you a gap that is still building, while there is time to do something about it.*", italics:true },
      { t:"*That forward half is where the money is. A soft month sitting on your forward books is not bad news yet, it is a decision you still get to make. The same gap discovered after the month closes is just a number in a report.*", italics:true },
      { t:"*And work the grain. Start at month to find the soft period. Drop to week to narrow it. Drop to day to land on the exact dates. That is how a vague \u201Cthe shoulder season feels weak\u201D becomes \u201Cthese eleven dates need a push, starting today.\u201D*", italics:true },
    ]},
  ]});

slides.push({ no:"11", title:"Rate Ranges: where you win and lose by price", time:"2:00", type:"Concept",
  spec:[
    ["objective","Teach Rate Ranges. Your room-night mix spread across price bands, set against the comp set, with the index tracing over the top. The read is where in the rate ladder you capture share and where you give it away."],
    ["layout","A band chart: price ranges along the bottom, your share of room nights and the comp set's as bars, the index as a line on top peaking in the bands you are strong in."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Insert the Rate Ranges screenshot. Annotate: bars are your room-night share versus the comp set across price bands, the line over the top is the index. Ring one lower band where your bar is tall but the index line is low, and one higher band where the comp set captures more. Placeholder.",
    ]},
    { kind:"screen", lines:[
      "**Rate Ranges spreads your business across price bands.** Your share of room nights in each band, next to the comp set, with the index over the top.",
      "**The read:** which price points do you win, and which do you give away?",
      "**The tell to watch:** your volume piled into the lower bands while the comp set captures the higher ones, and the index peaking up where you are thin. That is rate left on the table.",
      "**The action it drives:** pricing and positioning, not a blanket move. Hold or push where demand supports a higher band.",
    ]},
    { kind:"narration", lines:[
      { t:"*The price lens is Rate Ranges, and it answers a question the headline rate never can. Not \u201Cwhat is our average rate,\u201D but \u201Cwhere on the price ladder do we actually win business, and where do we give it away.\u201D*", italics:true },
      { t:"*It lays your room nights out across price bands, next to your comp set, with the index over the top. The pattern to watch for is your volume bunched into the lower bands while the comp set quietly captures the higher ones, and the index line peaking up in bands where you barely sell. When you see that, you are leaving rate on the table. The market will pay more than you are asking, and your competitors are collecting it.*", italics:true },
      { t:"*The fix here is never a blanket rate move. It is targeted. Hold firmer, or price up, in the bands where demand clearly supports it, and stop crowding the bottom of the ladder.*", italics:true },
    ]},
  ]});

slides.push({ no:"12", title:"Booking Patterns: length of stay and lead time", time:"2:00", type:"Concept",
  spec:[
    ["objective","Teach the two Booking Patterns views together: Length of Stay and Lead Time. Each compares your mix to the comp set with a revenue index, and each drives a specific restriction or timing decision."],
    ["layout","Two small charts stacked: Rooms by Length of Stay (one night, two, three, longer) and Room Nights by Lead Time (same day through far out), each you versus comp set."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Insert the Booking Patterns screenshots: Length of Stay and Lead Time. Annotate each: bars are you versus comp set, the line is the revenue index. Ring the one-night bar (over-reliance) on the LOS chart and the short-lead bars on the Lead Time chart. Placeholder.",
    ]},
    { kind:"screen", lines:[
      "**Length of Stay:** your mix of one-night, two-night and longer stays, against the comp set.",
      "Leaning hard on one-night stays while the comp set holds the longer, steadier ones? That points to minimum-stay rules and length-of-stay offers.",
      "**Lead Time:** your room nights by how far ahead they book, same day through far out.",
      "Booking much shorter than the comp set, who is locking in the long-lead base? That points to opening and promoting earlier.",
    ]},
    { kind:"narration", lines:[
      { t:"*Booking Patterns gives you two more lenses, and they pair naturally. The stay, and the window.*", italics:true },
      { t:"*Length of Stay shows your mix of one-night, two-night and longer stays against the comp set. If you are leaning hard on one-night business while your competitors hold the longer, steadier stays, that is a pattern worth fixing, and it points straight at minimum-stay rules and length-of-stay offers.*", italics:true },
      { t:"*Lead Time shows how far ahead your business books. If you are booking much closer in than the comp set, while they lock in a long-lead base months out, you are living hand to mouth on demand. The answer is to open and promote earlier, so you build that base too instead of scrambling for it late. Two lenses, two clear levers.*", italics:true },
    ]},
  ]});

slides.push({ no:"09", title:"Performance Trends: the twelve-month shape", time:"2:00", type:"Concept",
  spec:[
    ["objective","Teach Performance Trends as the step-back view. The trailing trend of the headline indices reveals the hotel's posture (for example, rate-led, trading occupancy for rate) and, crucially, the season where that posture stops working."],
    ["layout","Three trend lines across the trailing year: occupancy index, rate index, revenue index, with the soft-season dip in the revenue index circled."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Insert the Performance Trends screenshot, or a clean three-line trend graphic: occupancy index, rate index, revenue index across the trailing year. Ring the stretch where the revenue index dips toward or below fair share. Placeholder, illustrative shape only.",
    ]},
    { kind:"screen", lines:[
      "**Performance Trends is the zoom-out.** The trailing trend of your headline indices, all in one view.",
      "**It shows your posture.** A rate index sitting consistently above fair share while occupancy sits below it is a hotel trading rooms for rate, on purpose.",
      "**And it shows where the posture breaks.** Watch for the season where the revenue index dips toward fair share. That is where the trade stops paying off.",
      "**The decision it drives** is strategy, not a daily tweak. Defend the posture where it works, fix the season where it does not.",
    ]},
    { kind:"narration", lines:[
      { t:"*Everything so far has been about finding a specific leak. Performance Trends does the opposite. It zooms out. It shows the trailing trend of your headline indices together, and it answers a bigger question, is our overall strategy actually working?*", italics:true },
      { t:"*This is where you see posture. A hotel whose rate index sits high all year while its occupancy index sits low is trading rooms for rate by design, and often that is the right call. But trends also show you the moment that trade stops working. Usually it is the soft season, when the occupancy gap gets so wide that even a strong rate cannot carry the revenue index, and you slip toward, or below, fair share.*", italics:true },
      { t:"*That is a strategy conversation, not a Tuesday-morning rate change. Defend the posture in the months it clearly wins, and put real attention on the stretch where it breaks. The trend is what tells the two apart.*", italics:true },
    ]},
  ]});

slides.push({ no:"10", title:"Group Outlook: the pipeline you can still fill", time:"1:30", type:"Concept",
  spec:[
    ["objective","Teach Group Outlook as a dedicated lens, because group is lumpy and books far out. Reading your group and block pace against the comp set, current and forward, points to a sales action, not a transient rate move."],
    ["layout","A forward group-pace view: your group and block occupancy by month against the comp set, with thin forward bars beside fuller comp-set blocks."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Insert the Group Outlook screenshot, or a clean forward bar chart: your group and block occupancy by month next to the comp set's, with several forward months where your bars are near zero and the comp set holds visible blocks. Placeholder.",
    ]},
    { kind:"screen", lines:[
      "**Group gets its own lens** because it is lumpy and books far ahead.",
      "**The read:** your group and block pace against the comp set, this period and forward.",
      "**The tell:** a thin forward group pipeline while the comp set is already holding blocks for the months ahead. The business is being booked, just not with you.",
      "**The action is sales,** not a transient rate move. Chase the pipeline and the accounts, do not discount your transient base to fill a group-shaped hole.",
    ]},
    { kind:"builder", lines:[
      "Keep this slide brief. Reference the definite and tentative idea from the DDP module as a one-line callback, do not re-teach it here.",
    ]},
    { kind:"narration", lines:[
      { t:"*One segment deserves its own lens, and that is group. Group business is lumpy and it books far ahead, so it hides badly inside a transient view. Group Outlook pulls it out on its own.*", italics:true },
      { t:"*You read your group and block pace against the comp set, both for the current period and out across the forward months. The pattern that should worry you is a thin forward pipeline on your side while the comp set is already holding blocks for the season ahead. That is group demand that exists in the market and is choosing your competitors.*", italics:true },
      { t:"*And the response is different from everything else in this tool. When the miss is group, the answer is a sales answer. Work the pipeline, chase the accounts, get the tentatives to definite. You do not fix a group-shaped hole by cutting your transient rate.*", italics:true },
    ]},
  ]});

slides.push({ no:"13", title:"Find where the share is going", time:"2:30", type:"Interaction",
  spec:[
    ["objective","Learners practise the core skill: given a symptom, choose the lens that diagnoses it. Recognition that each kind of miss has a home tab is the muscle this module is building."],
    ["interaction","Drag and match. Five symptom cards to five lenses. All matched before Continue, one retry per pair with feedback."],
  ],
  boxes:[
    { kind:"interaction", lines:[
      "**Match each symptom to the lens that diagnoses it.**",
      "\u201COverall index looks fine, but I suspect one segment is sliding.\u201D  matches  **Segment/Channel Summary, then drill the segment**",
      "\u201CWe are full, but our rate feels soft for the demand.\u201D  matches  **Rate Ranges**",
      "\u201CThe shoulder weeks ahead feel weak against the comp set.\u201D  matches  **Forward Pace, month to week to day**",
      "\u201CWe always seem to be booking last minute.\u201D  matches  **Lead Time (Booking Patterns)**",
      "\u201COur group months ahead look empty.\u201D  matches  **Group Outlook**",
      "**On a wrong match:** \u201CClose, but that lens answers a different question. Think about what this symptom is really about: who, when, how they book, or what they pay.\u201D",
    ]},
    { kind:"builder", lines:[
      "Build as a five-pair drag and match. Shuffle order each attempt. Correct pairs lock, wrong pairs bounce back with the feedback line. Continue activates when all five are matched.",
    ]},
    { kind:"narration", lines:[
      { t:"*Your turn. The whole skill of Demand360 is knowing which lens answers which question. Here are five symptoms, the kind you actually hear in a revenue meeting. Match each one to the lens that diagnoses it. Once this mapping is second nature, you stop staring at the tool and start driving it.*", italics:true },
    ]},
  ]});

slides.push({ no:"14", title:"You are losing share. Now what?", time:"2:30", type:"Scenario",
  spec:[
    ["objective","Apply the drill-to-action habit under a realistic read. The total looks healthy, the drill reveals a specific, fixable pattern. The learner chooses the response and sees the commercial logic of each."],
    ["interaction","Branching scenario, three choices. One blanket and wrong, one do-nothing and wrong, one targeted and correct. Each returns a realistic outcome."],
  ],
  boxes:[
    { kind:"interaction", lines:[
      "**Scenario.** Your overall revenue index is sitting right around fair share, so the month looks fine. You drill in anyway. The channel view shows OTA well above fair share and your direct channel well below it. Rate Ranges shows your volume crowded into the lower bands while the comp set captures the higher ones. What do you do?",
      "**A. Cut rates across the board to defend occupancy.**",
      "*Outcome: the wrong direction. You are already winning volume through OTA at full cost, and you are already under-priced in the bands that matter. A blanket cut deepens both problems and trains the market to expect less. The drill told you the opposite.*",
      "**B. Nothing. The overall index is at fair share, so the month is fine.**",
      "*Outcome: this is the trap the whole tool exists to break. \u201CFine\u201D overall is hiding an expensive mix: too much full-cost OTA, too little direct, and rate left on the table. Left alone, it compounds.*",
      "**C. Act on the pattern: grow direct to cut OTA over-reliance, and hold or push rate in the higher bands where demand supports it.  \u2713**",
      "*Outcome: correct. You read the drill and acted on it. Shift mix toward direct to recover margin, and stop under-pricing where the market clearly pays more. Same total on the surface, a healthier and more defensible business underneath.*",
      "**Note:** the lesson is not the specific answer, it is the habit. The total tells you to look. The drill tells you what to do.",
    ]},
    { kind:"builder", lines:[
      "Branching scenario, three paths. Build in iSpring as branching layers. Let the learner view the other paths after seeing their outcome. Reinforce that C, read then act, is the only path that uses the drill.",
    ]},
    { kind:"narration", lines:[
      { t:"*One real-feeling decision. Your overall revenue index is right at fair share, so on paper the month is fine. But you drilled in, the way we just practised, and the detail is talking. OTA well above fair share, your direct channel well below it, and your room nights crowded into the cheap end of the rate ladder. Three choices. Read the pattern, and make the call.*", italics:true },
    ]},
  ]});

slides.push({ no:"15", title:"A moment to check before the quiz", time:"2:00", type:"Knowledge Check",
  spec:[
    ["objective","A low-stakes checkpoint before the quiz. Two ungraded reads that confirm the two core habits: read every index in fair-share terms, and act on a forward gap while it is still movable."],
    ["interaction","Two single-answer questions, ungraded, with feedback. Continue after both are answered."],
  ],
  boxes:[
    { kind:"interaction", lines:[
      "**Question 1 (ungraded).** A segment shows an index of 92. What does that tell you?",
      "A. We are above fair share in that segment, nothing to do.",
      "**B. We are below fair share. The comp set is taking demand we could have had, so look closer.  \u2713**",
      "C. The number is meaningless without the revenue figure.",
      "*Feedback: 100 is fair share. 92 is below it, which means lost share. It is a flag to drill, not a verdict on its own, but it is exactly the kind of red you investigate.*",
      "**Question 2 (ungraded).** Forward pace shows a shoulder month running soft against the comp set. When do you act?",
      "A. At month-end, once you can see the final result.",
      "**B. Now, while the month is still on the forward books and the gap is movable.  \u2713**",
      "C. Only if the overall index for the month is also below fair share.",
      "*Feedback: the value of the forward view is time. A soft forward month is a decision you can still make. Wait for month-end and all you have is an explanation.*",
    ]},
    { kind:"narration", lines:[
      { t:"*Two quick gut checks before the graded questions. Nothing riding on these. Read each one and see if the two core habits have landed: read every index against fair share, and act on a forward gap while you still can.*", italics:true },
    ]},
  ]});

slides.push({ no:"16", title:"Five questions, real situations", time:"5:00", type:"Quiz",
  spec:[
    ["settings","5 questions. Pass mark 80% (4/5). One per screen. No going back. Immediate feedback. Score reported to Moodle. One retry on fail. All questions are screen-reading decisions, no property data required."],
  ],
  boxes:[
    { kind:"quiz", lines:[
      "**Question 1 of 5.** Your overall index sits right at fair share, but on the summary screen one segment's index is well below 100 and falling, while another sits well above it. What is the right first move?",
      "A. Nothing. The overall index is at fair share, so the month is fine.",
      "B. Celebrate the strong segment and move on.",
      "C. Diagnose the falling segment now, before the strong one keeps masking it in the total.  \u2713",
      "D. Cut rate across all segments to lift the weak one.",
      "*Feedback: a healthy total can hide a collapsing segment. The strong one is carrying it. Drill the falling segment to find the cause while you still can, that is the whole point of the tool.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 2 of 5.** The channel view shows your OTA business well above fair share and your direct channel well below it. What does this pattern call for?",
      "A. Push even harder on OTA, since it is clearly working.",
      "B. Grow direct to reduce full-cost OTA over-reliance, and protect the demand you should own.  \u2713",
      "C. Nothing, high OTA volume is always good news.",
      "D. Raise rates on direct to match the OTA spend.",
      "*Feedback: OTA above fair share while direct sits below it means you are paying full distribution cost for volume and leaving cheaper, loyal demand on the table. The move is to grow direct, not feed the dependence.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 3 of 5.** On Rate Ranges, your room nights are crowded into the lower price bands while the comp set captures the higher ones, and the index line peaks in bands where you barely sell. What do you do?",
      "A. Drop rate further to win even more of the low bands.",
      "B. Hold or push rate in the higher bands where demand clearly supports it, and stop crowding the bottom.  \u2713",
      "C. Nothing, you are winning the most rooms in the low bands.",
      "D. Raise rate across every band equally.",
      "*Feedback: this pattern is rate left on the table. The market pays more than you are asking in those upper bands, and the comp set is collecting it. The fix is targeted, lift where demand supports it, not a blanket move.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 4 of 5.** Lead Time shows you booking much closer to arrival than the comp set, who is locking in a long-lead base months out. What is the right response?",
      "A. Keep waiting for the late demand, it always comes.",
      "B. Open and promote earlier to build your own long-lead base.  \u2713",
      "C. Close out early bookings to protect rate.",
      "D. Nothing, lead time is outside your control.",
      "*Feedback: booking short while the comp set books long means you are living on late, uncertain demand. Open and promote earlier so you build a committed base too, rather than scrambling for it every month.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 5 of 5.** Performance Trends shows a posture that wins most of the year, a high rate index, a lower occupancy index, but the revenue index dips toward fair share every soft season. Where should attention go?",
      "A. Abandon the rate-led posture across the whole year.",
      "B. Do nothing, the yearly average is fine.",
      "C. Defend the posture in the months it wins, and focus on the soft-season occupancy gap where it breaks.  \u2713",
      "D. Cut rate every month to lift occupancy.",
      "*Feedback: the trend shows the strategy works most of the year and fails in a specific stretch. Do not throw out a winning posture, and do not ignore the season where it stops paying. Target the breakpoint.*",
    ]},
  ]});

slides.push({ no:"17", title:"The total says if. Demand360 says where.", time:"1:00", type:"Summary",
  spec:[
    ["objective","Close on one memorable line that captures the tool's purpose: the top line tells you whether you are losing, Demand360 tells you where and what to do."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Dark navy. Large white centred headline. Three gold lines beneath, left aligned. Bottom-right, a gold \u201CModule Complete\u201D badge. Bottom-left, a white button, \u201CDownload the Demand360 Lens Map.\u201D Amadeus and Dusit marks small, top corners.",
    ]},
    { kind:"screen", lines:[
      "**Headline: \u201CThe total tells you if you are losing. Demand360 tells you where, and what to do.\u201D**",
      "100 is fair share. Above wins, below loses. That is the only number to carry.",
      "Every miss has an address: a period, a segment, a channel, a shape. Walk down to it.",
      "*Download: \u201CThe Demand360 Lens Map.\u201D Each symptom, the lens that diagnoses it, the action it drives.*",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is the whole module in two sentences. Your top-line index tells you whether you are winning or losing. Demand360 tells you where, and what to do about it.*", italics:true },
      { t:"*Carry one number, one hundred, fair share. Remember that every miss has an address, a period, a segment, a channel, and a shape. And remember the habit that ties it together: the total tells you to look, the drill tells you to act. Read it that way and you will catch the leaks while they are still decisions. Well done for completing this module.*", italics:true },
    ]},
  ]});

/* ---------------- assemble ---------------- */
const children = [];
const ctr = AlignmentType.CENTER;
children.push(
  new Paragraph({ alignment: ctr, spacing: { before: 1500, after: 80 }, children: [new TextRun({ text: "DUSIT HOTELS & RESORTS   \u00B7   REVENUE TRAINING PROGRAMME", bold: true, size: 20, color: NAVY, font: FONT, characterSpacing: 30 })] }),
  new Paragraph({ alignment: ctr, spacing: { before: 220, after: 80 }, children: [new TextRun({ text: "MODULE 8   \u00B7   AMADEUS DEMAND360", bold: true, size: 26, color: GOLD, font: FONT, characterSpacing: 40 })] }),
  new Paragraph({ alignment: ctr, spacing: { after: 100 }, children: [new TextRun({ text: "Where Your Share Goes", bold: true, size: 44, color: NAVY, font: FONT })] }),
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
  rows: [new TableRow({ children: [ci("DURATION","35 minutes"), ci("SLIDES","17 slides"), ci("DELIVERY","iSpring / SCORM 1.2"), ci("AUDIENCE","Revenue: DOR \u00B7 RM \u00B7 Analyst")] })] }));
children.push(new Paragraph({ alignment: ctr, spacing: { before: 340 }, children: [new TextRun({ text: "Prepared by DHI Hospitality   \u00B7   June 2026   \u00B7   Confidential", size: 20, color: MUTE, font: FONT })] }));
children.push(new Paragraph({ children: [new PageBreak()] }));

children.push(Hh("The Narrative"));
children.push(P("A revenue manager opens the index on a Monday. Overall, the hotel sits right at fair share. Occupancy is holding, rate is a little ahead, the revenue index is green. It looks like a hotel doing fine, so nobody looks closer. Three months on, the soft season lands, and the number that read \u201Cfine\u201D turns into a real revenue miss, the kind you can only explain now, not fix. The signal was there the whole time, one level down.", { after: 140 }));
children.push(P("This module teaches the commercial team to read Amadeus Demand360, the tool that compares your demand to your comp set's and the wider market, past and future, at every level of detail. The skill is not admiring the headline index. It is drilling. A share miss has a period, a segment, a channel and a shape, the length of stay, the lead time, the price band. Demand360 lets you walk a vague \u201Cwe are a bit behind\u201D down to \u201Cwe are losing short-lead business in the lower rate bands during the shoulder weeks,\u201D which is something you can actually act on. By the end, a learner can open any tab, read it in fair-share terms, and turn it into the right move. The module uses no real property figures: it teaches how to read and drive the screens, and the Dusit team drops live captures into the build.", { after: 160 }));
children.push(arcBox("The arc, 17 slides, 35 minutes", [
  { lead:"Hook (slides 1\u20132)", rest:"A healthy-looking index hiding a real miss, and what Demand360 is: your demand against the comp set's, past and future, at every level." },
  { lead:"The Foundation (slides 3\u20135)", rest:"Fair share as the one number to carry. The two levers that run the tool. The drill-down method itself." },
  { lead:"The Drill-Down (slides 6\u201310)", rest:"The summary screen, the segment and channel drills, then the time, price, stay and lead-time lenses." },
  { lead:"The Wider Read (slides 11\u201312)", rest:"Performance Trends for the strategic shape, and Group Outlook for when the miss is group." },
  { lead:"Apply and Assess (slides 13\u201317)", rest:"A find-the-loss match, a read-and-act scenario, a quick check, five graded reads, and the close." },
]));
children.push(box("builder", [
  "Data policy for this module: use no real property figures anywhere. Every screen reference is visual direction, a placeholder for the Dusit team to drop the live Demand360 capture into during the iSpring build. Teaching is conceptual: index 100 is fair share, and the skill is reading and driving the screens. Do not name a property or comp set.",
]));
children.push(new Paragraph({ children: [new PageBreak()] }));

children.push(Hh("Module at a Glance"));
children.push(glanceTable(glance));
children.push(spacer(100));
children.push(box("content", ["Total: 35 minutes. 17 slides. Pass mark 80% (4 of 5). One retry allowed. Completion: quiz passed and all slides visited. Audience: Revenue (DOR, Revenue Managers, Analysts), written to stay accessible to GM, DOS and DOM. No real property data: conceptual, screen-reading throughout."]));
children.push(new Paragraph({ children: [new PageBreak()] }));

children.push(Hh("Slide Specifications"));
children.push(P("Each slide is fully specified below. The voice-over reads the narration script exactly. The builder follows the visual direction, interaction specs and builder notes. On-screen text and narration complement each other; they do not simply repeat. Every screen named in visual direction is a placeholder for the Dusit team's live Demand360 capture.", { after: 160 }));

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
  "Demand360 screen captures (live, from the Dusit team) for: Segment/Channel Summary (slide 06), the Filters cascade and Customize Metrics panel (slide 04), Forward and Historical Pace (slide 08), Rate Ranges (slide 09), Booking Patterns, Length of Stay and Lead Time (slide 10), Performance Trends (slide 11), Group Outlook (slide 12). Each replaces a placeholder in visual direction. No figures need to match the narration, the teaching is conceptual.",
  "Concept graphics (DHI to design): the fair-share dial and the hidden-leak reveal (slide 01), the fair-share scale (slide 03), the drill-down staircase (slide 05), the filter cascade (slide 07).",
  "\u201CThe Demand360 Lens Map\u201D one-page PDF (slides 13 and 17): each symptom, the lens that diagnoses it, the action it drives. DHI to produce.",
  "Amadeus Demand360 and Dusit logos, white versions, transparent background.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "iSpring Builder Checklist", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "Slide 04: hotspot on the Customize Metrics and Filters captures, two areas, both opened before Continue.",
  "Slide 06: hotspot on the Segment/Channel Summary capture, three areas.",
  "Slide 13: five-pair drag and match, all matched before Continue, one retry per pair.",
  "Slide 14: branching scenario, three paths, allow viewing other paths before Continue.",
  "Slide 15: two ungraded knowledge-check questions with feedback.",
  "Slide 16: graded quiz, 5 questions, pass mark 80%, one retry, score to Moodle.",
  "SCORM 1.2: completion is quiz passed and all slides visited.",
  "Insert all live captures in place of the visual-direction placeholders. Mask any figures the property prefers not to show, the teaching does not depend on them.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "QA Checklist", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "No real property figures anywhere in the finished module. Index 100 is the only number that must appear, as the fair-share anchor.",
  "Every index reference reads in fair-share terms: above 100 wins, below 100 loses.",
  "Hotspots (slides 04, 06): all areas clickable, correct tooltips.",
  "Drag and match (slide 13): all five pairs lock, wrong matches return feedback.",
  "Branching scenario (slide 14): all three paths reachable, the targeted path acknowledged as correct.",
  "Quiz: 5 questions, every answer points to an action, pass and fail screens, score to Moodle, one retry.",
  "No property or comp set named anywhere.",
  "SCORM tested in the Moodle sandbox.",
  "Content reviewed by the Dusit Revenue team before launch.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(spacer(200));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Dusit Revenue Training Programme  \u00B7  Module 8, Amadeus Demand360  \u00B7  DHI Hospitality  \u00B7  June 2026", size: 18, color: MUTE, font: FONT })] }));

const doc = new Document({
  numbering: { config: [{ reference: "bul", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 460, hanging: 260 } } } }] }] },
  styles: { default: { document: { run: { font: FONT, size: 20, color: INK } } } },
  sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } }, children }],
});
Packer.toBuffer(doc).then(buf => { fs.writeFileSync("/mnt/user-data/outputs/module8a-demand360-blueprint.docx", buf); console.log("WROTE module8a-demand360-blueprint.docx", buf.length, "bytes |", slides.length, "slides"); });
