/* Dusit Revenue Training Programme — Module 7: DDP Reports
   Instructional Design Blueprint — Word build (docx Node library)
   Matches established DHI blueprint format (Modules 1,2,3,OTA1,5,6). */

const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign,
  PageBreak, HeadingLevel, LevelFormat
} = require('docx');

/* ---------- brand + palette ---------- */
const NAVY = "003570", BLUE = "004B94", GOLD = "C9A84C";
const INK = "1F2933", MUTE = "5B6770";
const FONT = "Arial";
const CW = 9360; // content width (US Letter, 1" margins)

const HDR_NUM = "E3E9F2", HDR_TIME = "F4E8C6", HDR_TITLE = "FFFFFF";
const TYPE_COLOR = {
  "Hook": NAVY, "Transition": NAVY, "Concept": "2E5E97",
  "Interaction": "1B998B", "Knowledge Check": "157A8C",
  "Scenario": "244F7A", "Quiz": "C2185B", "Summary": GOLD, "Brand Slide": GOLD,
};
const typeText = t => (t === "Summary" || t === "Brand Slide") ? NAVY : "FFFFFF";

const KIND = {
  narration:   { border: "2E7D32", fill: "EAF4EA", label: "NARRATION SCRIPT" },
  screen:      { border: BLUE,     fill: "E7EEF6", label: "ON-SCREEN TEXT" },
  visual:      { border: "6A4C93", fill: "EFEAF4", label: "VISUAL DIRECTION" },
  interaction: { border: "1B998B", fill: "E6F4F1", label: "INTERACTION SPEC" },
  quiz:        { border: "C2185B", fill: "FBE9F0", label: "QUIZ QUESTION" },
  builder:     { border: GOLD,     fill: "FBF4E0", label: "BUILDER / HOTEL TEAM NOTE" },
  content:     { border: "B7C0CC", fill: "F4F6F8", label: null },
};

/* ---------- inline markup: **bold** and *italic* ---------- */
function parseInline(text, base = {}) {
  const runs = [];
  const re = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) runs.push(new TextRun({ text: text.slice(last, m.index), font: FONT, ...base }));
    const t = m[0];
    if (t.startsWith("**")) runs.push(new TextRun({ text: t.slice(2, -2), bold: true, font: FONT, ...base }));
    else runs.push(new TextRun({ text: t.slice(1, -1), italics: true, font: FONT, ...base }));
    last = m.index + t.length;
  }
  if (last < text.length) runs.push(new TextRun({ text: text.slice(last), font: FONT, ...base }));
  return runs;
}
const P = (text, opts = {}) => new Paragraph({
  spacing: { after: opts.after ?? 80, before: opts.before ?? 0, line: 264 },
  alignment: opts.align,
  children: parseInline(text, { size: opts.size ?? 20, color: opts.color ?? INK }),
  numbering: opts.numbering,
});
const spacer = (h = 80) => new Paragraph({ spacing: { after: h }, children: [] });

/* ---------- coloured box (single-cell table) ---------- */
function labelRun(text, color, allCaps = true) {
  return new TextRun({ text, bold: true, size: 18, color, font: FONT, allCaps, characterSpacing: 24 });
}
function box(kind, lines, opts = {}) {
  const k = KIND[kind];
  const kids = [];
  let body = lines.slice();
  let label = opts.label ?? k.label;
  let labelAllCaps = opts.labelAllCaps ?? true;

  if (kind === "quiz") {
    const m = /^\*\*Question (\d) of 5\.\*\*\s*([\s\S]*)$/.exec(body[0] || "");
    if (m) { label = `Question ${m[1]} of 5`; labelAllCaps = false; body[0] = `**${m[2]}**`; }
  }
  if (label) kids.push(new Paragraph({ spacing: { after: 80 }, children: [labelRun(label, k.border, labelAllCaps)] }));

  body.forEach((ln, i) => {
    const last = i === body.length - 1;
    if (typeof ln === "object") { kids.push(P(ln.t, { ...ln, after: last ? 0 : (ln.after ?? 70) })); return; }
    if (kind === "quiz" && ln.includes("\u2713")) {
      kids.push(new Paragraph({ spacing: { after: last ? 0 : 70, line: 264 },
        children: [new TextRun({ text: ln.replace(/\*\*/g, ""), bold: true, size: 20, color: BLUE, font: FONT })] }));
      return;
    }
    kids.push(P(ln, { after: last ? 0 : 70 }));
  });

  const edge = { style: BorderStyle.SINGLE, size: 6, color: k.border };
  const left = { style: BorderStyle.SINGLE, size: 28, color: k.border };
  return new Table({
    width: { size: CW, type: WidthType.DXA }, columnWidths: [CW],
    rows: [new TableRow({ children: [new TableCell({
      width: { size: CW, type: WidthType.DXA },
      shading: { fill: k.fill, type: ShadingType.CLEAR, color: "auto" },
      borders: { top: edge, bottom: edge, right: edge, left },
      margins: { top: 120, bottom: 120, left: 180, right: 160 },
      children: kids,
    })] })],
  });
}

/* ---------- arc box (blue panel, gold lead-ins) ---------- */
function arcBox(title, items) {
  const kids = [new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: title, bold: true, size: 21, color: NAVY, font: FONT })] })];
  items.forEach((it, i) => kids.push(new Paragraph({
    spacing: { after: i === items.length - 1 ? 0 : 90, line: 264 },
    children: [new TextRun({ text: it.lead + ":  ", bold: true, size: 20, color: GOLD, font: FONT }), ...parseInline(it.rest, { size: 20, color: INK })],
  })));
  const edge = { style: BorderStyle.SINGLE, size: 6, color: BLUE };
  const left = { style: BorderStyle.SINGLE, size: 28, color: BLUE };
  return new Table({
    width: { size: CW, type: WidthType.DXA }, columnWidths: [CW],
    rows: [new TableRow({ children: [new TableCell({
      width: { size: CW, type: WidthType.DXA },
      shading: { fill: "EAF1F8", type: ShadingType.CLEAR, color: "auto" },
      borders: { top: edge, bottom: edge, right: edge, left },
      margins: { top: 130, bottom: 130, left: 180, right: 160 },
      children: kids,
    })] })],
  });
}

/* ---------- slide header bar (multi-fill, matches M6) ---------- */
function slideHeader(no, title, time, type) {
  const cols = [760, 5500, 1400, 1700];
  const thin = { style: BorderStyle.SINGLE, size: 2, color: "C9D2DD" };
  const borders = { top: thin, bottom: thin, left: thin, right: thin };
  const cell = (runs, w, fill, align) => new TableCell({
    width: { size: w, type: WidthType.DXA },
    shading: { fill, type: ShadingType.CLEAR, color: "auto" }, borders,
    margins: { top: 90, bottom: 90, left: 150, right: 150 },
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({ alignment: align, children: runs })],
  });
  const tColor = TYPE_COLOR[type] || NAVY;
  return new Table({
    width: { size: CW, type: WidthType.DXA }, columnWidths: cols,
    rows: [new TableRow({ cantSplit: true, children: [
      cell([new TextRun({ text: no, bold: true, size: 26, color: NAVY, font: FONT })], cols[0], HDR_NUM, AlignmentType.CENTER),
      cell([new TextRun({ text: title, bold: true, size: 22, color: NAVY, font: FONT })], cols[1], HDR_TITLE, AlignmentType.LEFT),
      cell([new TextRun({ text: time, bold: true, size: 20, color: NAVY, font: FONT })], cols[2], HDR_TIME, AlignmentType.CENTER),
      cell([new TextRun({ text: type, bold: true, size: 17, color: typeText(type), font: FONT })], cols[3], tColor, AlignmentType.CENTER),
    ] })],
  });
}
function noBorders(c) {
  const b = { style: BorderStyle.SINGLE, size: 2, color: c };
  return { top: b, bottom: b, left: b, right: b };
}

/* ---------- spec table (label | content) ---------- */
function specTable(pairs) {
  const lw = 1700, cw = CW - lw;
  const bd = { style: BorderStyle.SINGLE, size: 4, color: "C9D2DD" };
  const borders = { top: bd, bottom: bd, left: bd, right: bd };
  const rows = pairs.map(([label, content]) => new TableRow({
    children: [
      new TableCell({
        width: { size: lw, type: WidthType.DXA },
        shading: { fill: "EEF2F7", type: ShadingType.CLEAR, color: "auto" }, borders,
        margins: { top: 80, bottom: 80, left: 140, right: 120 },
        children: [new Paragraph({ children: [new TextRun({ text: label.charAt(0).toUpperCase()+label.slice(1), bold: true, size: 19, color: NAVY, font: FONT })] })],
      }),
      new TableCell({
        width: { size: cw, type: WidthType.DXA }, borders,
        margins: { top: 80, bottom: 80, left: 140, right: 140 },
        children: Array.isArray(content) ? content.map(c => P(c)) : [P(content)],
      }),
    ],
  }));
  return new Table({ width: { size: CW, type: WidthType.DXA }, columnWidths: [lw, cw], rows });
}

/* ---------- module-at-a-glance table (colour-coded, matches M6) ---------- */
function glanceTable(rows) {
  const cols = [620, 1380, 3640, 820, 1560, 1340];
  const head = ["#", "Type", "Slide Title", "Time", "Interaction", "Section"];
  const bd = { style: BorderStyle.SINGLE, size: 4, color: "C9D2DD" };
  const borders = { top: bd, bottom: bd, left: bd, right: bd };
  const headRow = new TableRow({ tableHeader: true, children: head.map((h, i) => new TableCell({
    width: { size: cols[i], type: WidthType.DXA },
    shading: { fill: NAVY, type: ShadingType.CLEAR, color: "auto" }, borders: noBorders(NAVY),
    margins: { top: 70, bottom: 70, left: 110, right: 110 },
    children: [new Paragraph({ children: [new TextRun({ text: h, bold: true, size: 18, color: "FFFFFF", font: FONT })] })],
  })) });

  const bodyRows = rows.map((r, idx) => {
    const type = r[1];
    const tColor = TYPE_COLOR[type] || NAVY;
    const alt = idx % 2 ? "F7F9FB" : "FFFFFF";
    const mk = (txt, w, fill, opts = {}) => new TableCell({
      width: { size: w, type: WidthType.DXA },
      shading: { fill, type: ShadingType.CLEAR, color: "auto" }, borders,
      margins: { top: 60, bottom: 60, left: 110, right: 110 },
      verticalAlign: VerticalAlign.CENTER,
      children: [new Paragraph({ alignment: opts.align, children: [new TextRun({ text: txt, bold: opts.bold, size: opts.size ?? 18, color: opts.color ?? INK, font: FONT })] })],
    });
    return new TableRow({ children: [
      mk(r[0], cols[0], HDR_NUM, { bold: true, color: NAVY, align: AlignmentType.CENTER }),
      mk(type, cols[1], tColor, { bold: true, size: 16, color: typeText(type), align: AlignmentType.CENTER }),
      mk(r[2], cols[2], alt, {}),
      mk(r[3], cols[3], HDR_TIME, { bold: true, color: NAVY, align: AlignmentType.CENTER }),
      mk(r[4], cols[4], alt, { color: MUTE }),
      mk(r[5], cols[5], alt, { color: MUTE }),
    ] });
  });
  return new Table({ width: { size: CW, type: WidthType.DXA }, columnWidths: cols, rows: [headRow, ...bodyRows] });
}

/* ---------- section heading ---------- */
const H = (txt) => new Paragraph({
  spacing: { before: 260, after: 140 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 10, color: GOLD, space: 4 } },
  children: [new TextRun({ text: txt, bold: true, size: 30, color: NAVY, font: FONT })],
});

/* ===================================================================== */
/*  CONTENT                                                              */
/* ===================================================================== */

const glance = [
  ["01","Hook","The month that looked stronger than it was","2:00","None","Hook"],
  ["02","Concept","The daily pulse of the hotel","1:30","None","Hook"],
  ["03","Concept","The Overview, at a glance","3:00","Hotspot","Daily Snapshot"],
  ["04","Concept","Ahead of last year, or ahead of budget?","2:30","None","Daily Snapshot"],
  ["05","Concept","Reading pickup, day to day","2:30","None","Daily Snapshot"],
  ["06","Concept","Where the month truly lands","2:30","None","Daily Snapshot"],
  ["07","Concept","The fortnight ahead","2:30","Hotspot","Daily Snapshot"],
  ["08","Interaction","Finding the night that needs attention","3:00","Click-to-flag","Daily Snapshot"],
  ["09","Knowledge Check","A moment to check your reading","2:00","2 questions","Daily Snapshot"],
  ["10","Concept","Where the business truly comes from","3:00","Hotspot","Segmentation"],
  ["11","Concept","Where to lean in, where to look closer","2:30","None","Segmentation"],
  ["12","Scenario","The segment slipping beneath the surface","3:00","Branching","Segmentation"],
  ["13","Concept","The month, night by night","2:30","Hotspot","On the Books"],
  ["14","Concept","The group book: definite, tentative, inquiry","2:00","None","On the Books"],
  ["15","Transition","From how much, to who","0:30","None","Monthly Snapshot"],
  ["16","Concept","The channels in motion","3:00","Hotspot","Monthly Snapshot"],
  ["17","Concept","When to open, when to hold","2:00","None","Monthly Snapshot"],
  ["18","Concept","Promised, or merely held","2:00","None","Monthly Snapshot"],
  ["19","Concept","Beyond the room","2:00","None","Monthly Snapshot"],
  ["20","Concept","A familiar number, every morning","1:30","None","Putting It Together"],
  ["21","Concept","The morning ritual","2:30","None","Putting It Together"],
  ["22","Scenario","A morning at Dusit Thani Kyoto, June 2026","3:30","Branching","Putting It Together"],
  ["23","Interaction","Composing your morning read","2:30","Drag-match","Putting It Together"],
  ["24","Quiz","Five mornings. Five decisions.","5:00","Graded quiz","Quiz"],
  ["25","Summary","The report is written each night. The reading is yours.","1:00","None","Close"],
];

const slides = [];

slides.push({ no:"01", title:"The month that looked stronger than it was", time:"2:00", type:"Hook",
  spec:[
    ["objective","Open with a consequence, not a definition. A month that felt strong was quietly settling below budget. The warning sat in the daily report every morning, and no one opened it in time."],
    ["layout","Two panels. The left panel is the feeling in the room: the team is ahead of last year. The right panel is what the report had been showing all along: the month-end forecast had slipped under budget. The gap between the two is the hook."],
    ["animation","The left panel fades in first. A two-second hold. The right panel arrives with the forecast figure in alert red. The headline settles in beneath both."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Navy background. **Left panel (gold border):** \u201CMay closed strong.\u201D On the books for June, 3,149 rooms, up 252 on last year. The team feels ahead.",
      "**Right panel (alert border):** the same report, the same morning. Month-end forecast 2,655 rooms against a budget of 3,033, short by 378. Average rate on the books \u00A551,435 against a budget of \u00A562,549.",
      "Beneath both, in bold white: **\u201CAhead of last year. Behind budget. Which one were you watching?\u201D**",
    ]},
    { kind:"screen", lines:[
      "**What it felt like:** ahead of last year by 252 rooms. \u201CStrong month. We are tracking well.\u201D",
      "**What the report showed every morning:** forecast 2,655 against budget 3,033, with rate running roughly \u00A511,000 light.",
      "**Headline: \u201CAhead of last year. Behind budget. Which one were you watching?\u201D**",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is a real one. June at Dusit Thani Kyoto. The team feels good. The hotel is on the books with more rooms than the same point last year. Two hundred and fifty-two more. Ahead of last year feels like winning.*", italics:true },
      { t:"*But last year is not the target. Budget is. And the same report that said \u201Cahead of last year\u201D had also been showing, every single morning, that the month-end forecast had slipped to two thousand six hundred and fifty-five rooms against a budget of three thousand and thirty-three. Nearly four hundred rooms short. The rate on the books was running light as well.*", italics:true },
      { t:"*None of that was hidden. It was on the first screen of the daily report. The problem was not the data. The problem was that nobody opened it early enough to act. That is what this module is about. The DDP reports, and how to read them each morning so the month never surprises you.*", italics:true },
    ]},
  ]});

slides.push({ no:"02", title:"The daily pulse of the hotel", time:"1:30", type:"Concept",
  spec:[
    ["objective","Frame the whole module. DDP is not a report you file. It is the hotel's pulse, taken every day. Two reports, two jobs, and a simple promise: six questions you answer every morning."],
    ["layout","A single pulse line across the centre splits into two cards. One card for the Daily Snapshot, one for the Monthly Snapshot. Below them, six small tiles for the six morning questions."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "White background, navy and gold. A pulse line across the centre splits into two cards.",
      "**Card 1, Daily Snapshot (blue):** \u201CHow is the month shaping up? Pickup, the next fourteen days, on-the-books, the index.\u201D",
      "**Card 2, Monthly Snapshot (gold):** \u201CWho is producing it? Travel agents, OTAs, groups, segments.\u201D",
      "Below, six numbered tiles for the six morning questions listed in the on-screen text.",
    ]},
    { kind:"screen", lines:[
      "**DDP is your daily pulse.** Two reports, two jobs.",
      "**The Daily Snapshot** tells you how the month is shaping up.",
      "**The Monthly Snapshot** tells you who is producing the business.",
      "**The six questions you answer every morning.** 1. Ahead or behind budget? 2. Anything urgent in the next fourteen days? 3. Which segment moved? 4. Any group risk? 5. Who is growing or shrinking in our channels? 6. Where do we sit against the comp set?",
    ]},
    { kind:"narration", lines:[
      { t:"*Think of the DDP reports the way a nurse thinks of a pulse. You do not take it once a month. You take it every day, because that is how you catch a problem while it is still small.*", italics:true },
      { t:"*There are two reports. The Daily Snapshot tells you how the month is shaping up: what is picking up, what is coming in the next two weeks, where you stand against budget. The Monthly Snapshot tells you who is producing it: which travel agents, which OTAs, which groups, which segments.*", italics:true },
      { t:"*And here is the promise. By the end of this module, the whole thing comes down to six questions you ask every morning. Learn the six, and you will never be the person in the first slide. Ahead of last year, behind budget, and the last to know.*", italics:true },
    ]},
  ]});

slides.push({ no:"03", title:"The Overview, at a glance", time:"3:00", type:"Concept",
  spec:[
    ["objective","Orient the learner on the single most important screen in DDP. The Overview tab carries four things at once: the competitive benchmark, segment production, the next fourteen days, and the month's pickup against budget. Know where each one lives."],
    ["interaction","Hotspot on the Overview screenshot. Four hotspots, one per zone, each with a plain-language tooltip. Competitive benchmark at the top, segmentation in the middle, the fourteen-day pace lower down, and the monthly pickup block below that."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**The four zones of the Overview tab**",
      "**1. Competitive benchmark (top).** Your occupancy, rate and RevPAR alongside the comp set, with the familiar index. You learned to read that index in Module 6. Here it simply appears every morning.",
      "**2. Segmentation (middle).** Rooms sold, average rate and revenue by market segment: retail, corporate, wholesale, groups. Shown against yesterday, month-to-date, year-to-date, budget and last year.",
      "**3. The next fourteen days (lower).** Rooms sold and occupancy for each of the coming days. This is where today's actions live.",
      "**4. Monthly pickup against budget (lower block).** The whole month on one line: on the books, last year, forecast and budget, with the gaps already worked out for you.",
    ]},
    { kind:"interaction", lines:[
      "**Type:** hotspot, four areas. All four must be opened before Continue activates.",
      "**Tooltip 1 (top):** \u201CYour position against the comp set. You read this in Module 6. Here it is, daily.\u201D",
      "**Tooltip 2 (middle):** \u201CWho is buying. Each segment's rooms, rate and revenue, set against budget and last year.\u201D",
      "**Tooltip 3 (lower):** \u201CThe next two weeks, day by day. Soft days here are the ones you can still fix.\u201D",
      "**Tooltip 4 (lower block):** \u201CThe whole month on one line. On the books, forecast, budget, and the gaps.\u201D",
    ]},
    { kind:"builder", lines:[
      "Insert a screenshot of the **Overview tab** of the DDP Daily Snapshot (Dusit Thani Kyoto, as of 25 Jun 2026, provided as a reference file). Overlay four gold hotspot circles on the four zones described above. Tooltip text supplied. Mask any figures the property prefers not to show in training; the teaching points do not depend on exact values here.",
    ]},
    { kind:"narration", lines:[
      { t:"*Most people open the daily report, see a wall of numbers, and close it again. So let us break the main screen, the Overview tab, into four simple zones. After this, you will always know where to look.*", italics:true },
      { t:"*The top of the screen is your position against the comp set. You already know how to read that from the index module, so we will not dwell on it. The middle is who is buying: your segments. The lower part is the next fourteen days, day by day. And the block beneath that is the whole month on one line, where you stand against budget.*", italics:true },
      { t:"*Four zones. Your position, who is buying, the next two weeks, the month against budget. Click each one on the screen to see it. Once you know the map, the report takes two minutes, not twenty.*", italics:true },
    ]},
  ]});

slides.push({ no:"04", title:"Ahead of last year, or ahead of budget?", time:"2:30", type:"Concept",
  spec:[
    ["objective","Teach the single most important read in the daily report. Are we ahead or behind, and of what? Separate \u201Cahead of last year\u201D from \u201Cahead of budget.\u201D They are not the same, and confusing them is the first-slide mistake."],
    ["layout","One clean line of the month, with each column named in plain language: On the Books, then against Last Year, then against Budget, then the Forecast. The real June numbers run throughout."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**The month on one line. Dusit Thani Kyoto, June 2026 (real figures)**",
      "**On the books:** 3,149 rooms, 71.4% occupancy, ADR \u00A551,435.",
      "**On the books last year:** 2,897 rooms. So we are ahead of last year by 252 rooms.",
      "**Budget:** 3,033 rooms, 68.8% occupancy, ADR \u00A562,549.",
      "**Month-end forecast:** 2,655 rooms. So we are behind budget by 378 rooms, with rate running roughly \u00A511,000 light.",
      "**The read:** ahead of last year, behind budget. Both are true. Budget is the target.",
    ]},
    { kind:"screen", lines:[
      "**Two comparisons, never one.**",
      "**Against last year** tells you the direction of travel.",
      "**Against budget** tells you whether you will hit the target.",
      "In June: 252 rooms ahead of last year, 378 behind budget. The forecast is the honest number. It is where the month lands if nothing changes.",
    ]},
    { kind:"narration", lines:[
      { t:"*This is the most important habit in the whole report, so slow down here. When you check the month, you always make two comparisons, never one. Against last year, and against budget.*", italics:true },
      { t:"*June at Kyoto. On the books at three thousand one hundred and forty-nine rooms. Last year at the same point, two thousand eight hundred and ninety-seven. So we are ahead of last year by two hundred and fifty-two rooms. Good news, if last year were the target. It is not. Budget is three thousand and thirty-three, and the month-end forecast is sitting at two thousand six hundred and fifty-five. That is three hundred and seventy-eight rooms short, with the rate also running under budget.*", italics:true },
      { t:"*Ahead of last year, behind budget. Both numbers are real. Only one is the target. The forecast is the honest number. It is where the month lands if you do nothing. When the forecast is under budget, that is not bad luck. That is your to-do list.*", italics:true },
    ]},
  ]});

slides.push({ no:"05", title:"Reading pickup, day to day", time:"2:30", type:"Concept",
  spec:[
    ["objective","Define pickup in plain terms, the change since yesterday, and teach what positive and negative pickup are telling you. Pickup is the live pulse. A run of negative pickup is the early warning light."],
    ["layout","A simple before and after: yesterday's on-the-books, last night's movement, today's on-the-books. Then two arrows, one for positive pickup that is building, one for negative pickup that is eroding, with what each one means."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**Pickup is what changed since yesterday.** New bookings, less cancellations and reductions.",
      "**Positive pickup:** more came in than fell out. The month is building. Hold rates firm where demand is strong.",
      "**Negative pickup:** cancellations and drops outran new bookings. The month is eroding, even if the total still looks healthy.",
      "**June example:** last night's pickup was about one room down. Essentially flat. One flat night is nothing. Three or four negative nights in a row, on a month already under budget, is the warning light.",
    ]},
    { kind:"screen", lines:[
      "**The total tells you where you are. Pickup tells you which way you are moving.**",
      "A big on-the-books number can still be sliding backwards day to day.",
      "**Watch the run, not the night.** One negative day is noise. A pattern is a signal.",
    ]},
    { kind:"narration", lines:[
      { t:"*The total on the books tells you where you are. Pickup tells you which way you are moving, and that is the part people miss.*", italics:true },
      { t:"*Pickup is simple. It is what changed since yesterday. New bookings, less whatever cancelled or got shortened. If pickup is positive, more came in than fell out and the month is building. If it is negative, the month is quietly eroding, even when the headline still looks fine.*", italics:true },
      { t:"*Last night at Kyoto, pickup was about one room down. Flat. On its own, that means nothing. But pickup is a pulse, so you read the run, not the single beat. Three or four negative nights in a row, on a month that is already under budget, and you do not wait for month-end to find out. You act that morning.*", italics:true },
    ]},
  ]});

slides.push({ no:"06", title:"Where the month truly lands", time:"2:30", type:"Concept",
  spec:[
    ["objective","Show that the forecast, not on-the-books, is where the month actually lands, and teach the gap-to-budget read. When the forecast is under budget, the report is handing you the size of the problem and the time you have to fix it."],
    ["layout","Three bars side by side for June: On the Books, Forecast, Budget. The forecast bar sits between the other two. The gap from forecast to budget is shaded and labelled \u201Cthe gap you still have time to close.\u201D"],
  ],
  boxes:[
    { kind:"content", lines:[
      "**June 2026, three numbers that matter (real figures)**",
      "**On the books now:** 3,149 rooms confirmed.",
      "**Forecast, where the month lands:** 2,655 rooms.",
      "**Budget, the target:** 3,033 rooms.",
      "**Forecast against budget is 378 rooms short.** The report has already done the subtraction for you.",
      "**Rate gap:** ADR on the books \u00A551,435 against a budget of \u00A562,549. The month is light on rate as well as rooms.",
      "**What to do with a gap:** it sizes the problem and the runway. Three hundred and seventy-eight rooms across the rest of June is the real question. Which days, which segments, which channels can absorb them without giving away rate?",
    ]},
    { kind:"screen", lines:[
      "**On the books is what is confirmed today. The forecast is where the month lands. Budget is the target.**",
      "**The gap that matters runs from forecast to budget.** In June that is 378 rooms, with rate light too.",
      "A gap to budget is not a verdict. It is a runway. The earlier you see it, the more days you have to close it.",
    ]},
    { kind:"narration", lines:[
      { t:"*On the books tells you what is confirmed today. But the month does not end today. The number that tells you where the month actually lands is the forecast. It takes what is on the books and adds what the report expects still to come.*", italics:true },
      { t:"*For June, the forecast is two thousand six hundred and fifty-five rooms. Budget is three thousand and thirty-three. The report has already done the maths. You are three hundred and seventy-eight rooms short, and the rate on the books is running under budget too. Light on both rooms and rate.*", italics:true },
      { t:"*Here is the mindset shift. A gap to budget is not a verdict. It is a runway. It tells you the size of the problem and how many days you have to fix it. Three hundred and seventy-eight rooms across the rest of June. Which days can take them, which segments, which channels, without throwing away rate? That is a strategy meeting, and the report just called it for you.*", italics:true },
    ]},
  ]});

slides.push({ no:"07", title:"The fortnight ahead", time:"2:30", type:"Concept",
  spec:[
    ["objective","Move from the month to the fortnight. The fourteen-day pace is the part of the report that turns into action today. Find the soft days inside the booking window and do something about them now, while you still can."],
    ["interaction","Hotspot on the fourteen-day pace strip. Three hotspots: a soft day inside the window, a strong day to protect, and the occupancy row read against the rooms-sold row."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**The next fourteen days, Dusit Thani Kyoto (as of 25 Jun, real occupancy)**",
      "**Holding up:** Thu 25 Jun 74%, Sat 27 Jun 65%. The late-June weekends stay firm.",
      "**Soft, and inside the window:** Wed 1 Jul 45%, Thu 2 Jul 47%, Fri 3 Jul 47%, Sun 5 Jul 46%.",
      "**The read:** the first week of July is the soft patch, and it is close enough to act on now. A 45% day eight days out is a day you can still move with rate, a restriction change, or a quick promotion.",
      "**Rule of thumb:** a soft day inside fourteen days is today's job. A soft day sixty days out is a watch item.",
    ]},
    { kind:"interaction", lines:[
      "**Type:** hotspot, three areas. All opened before Continue.",
      "**Tooltip A (soft day):** \u201C1 July, 45%. Inside the window, well below the days around it. This is where today's action goes.\u201D",
      "**Tooltip B (strong day):** \u201CA late-June weekend, holding firm. Protect rate here. Do not discount a day that is already selling.\u201D",
      "**Tooltip C (two rows):** \u201CRooms sold is the count. Occupancy is the share of the house. Read both. A low count on a small available night is not the same as a low percentage.\u201D",
    ]},
    { kind:"builder", lines:[
      "Insert the **fourteen-day pace strip** from the Overview tab (rooms sold and occupancy, D-0 to D-14). Overlay three hotspots as above. The soft-day example (1 Jul, about 45%) is illustrative from the reference file. Confirm against the live report at build time as dates roll forward.",
    ]},
    { kind:"narration", lines:[
      { t:"*The month view is strategy. The next fourteen days is action. This is the part of the report you can actually do something about before you go home today.*", italics:true },
      { t:"*Run your eye along the strip. Late June is holding up, seventy-odd percent, weekends firm. Then the first week of July dips. The first is forty-five percent, the second and third in the high forties, the fifth back down to forty-six. That is your soft patch, and it is close. Eight days out, not eighty.*", italics:true },
      { t:"*A soft day inside the window is today's job. You still have time to move it. Adjust the rate, drop a minimum-stay restriction, push a quick promotion through the channels that fill late. A soft day sixty days out, you simply watch. The skill is telling the two apart, and acting on the ones you can still change.*", italics:true },
    ]},
  ]});

slides.push({ no:"08", title:"Finding the night that needs attention", time:"3:00", type:"Interaction",
  spec:[
    ["objective","The learner practises the most useful daily skill: scanning a pace strip and flagging the day that needs action today. Doing it makes the habit stick."],
    ["interaction","Click-to-flag. The learner sees a fourteen-day strip with rooms sold and occupancy, and clicks the day that most needs action today. The correct answer is the soft day inside the window. Feedback explains why that day, and why not the others."],
  ],
  boxes:[
    { kind:"interaction", lines:[
      "**Exercise: click the day that needs action today.**",
      "A strip of fourteen days with occupancy shown. Sample pattern (the builder may reuse real Kyoto figures): Wed 47%, Thu 64%, Fri 53%, Sat 92% (strong, leave it), Sun 71%, Mon 44% (eight days out), Tue 47%, then a run in the fifties and sixties, ending Sat 90%.",
      "**Correct flag:** the Monday at 44%, eight days out.",
      "**If they click the strong Saturday (92%):** \u201CThat day is nearly full. Discounting it would give away rate you do not need to. Protect strong days, act on weak ones.\u201D",
      "**If they click a day in the fifties:** \u201CSofter than ideal, but not the priority. Find the lowest day that is still close enough to move.\u201D",
      "**If they click a far-out low day:** \u201CLow, but too far out to act today. That is a watch item, not today's job.\u201D",
      "**Correct feedback:** \u201CThe 44% Monday is well below the days around it and close enough to fix. Today: review its rate against the comp set, check restrictions, and push it through your fastest-filling channels.\u201D",
    ]},
    { kind:"builder", lines:[
      "Build as a single click-to-flag interaction. Highlight the correct day on success. Continue activates on a correct flag, or after two attempts with the answer revealed. The builder may swap in the current live fourteen-day strip so the exercise always reflects real data.",
    ]},
    { kind:"narration", lines:[
      { t:"*Your turn. Here are the next fourteen days. One of them needs you today. Find the day that is clearly soft and still close enough to do something about, and click it. Protect the strong days. Act on the weak one. This is the thirty-second scan you will do every single morning.*", italics:true },
    ]},
  ]});

slides.push({ no:"09", title:"A moment to check your reading", time:"2:00", type:"Knowledge Check",
  spec:[
    ["objective","A low-stakes checkpoint after the daily-snapshot section. Two scenario questions, ungraded, with immediate feedback. Confirm the two core habits, two comparisons and act inside the window, before moving on."],
    ["interaction","Two single-answer questions, ungraded, with feedback. Continue after both are answered."],
  ],
  boxes:[
    { kind:"interaction", lines:[
      "**Question 1 (ungraded).** Your month is on the books 200 rooms ahead of last year, but the forecast is 300 rooms below budget. What is the honest read?",
      "A. Strong month. We are ahead of last year, nothing to do.",
      "**B. We are behind target. Last year is not the goal, budget is. The forecast gap is the to-do list.  \u2713**",
      "C. Wait for month-end to see how it settles.",
      "*Feedback: ahead of last year is direction, behind budget is the target. The forecast is where the month lands if nothing changes, so that 300-room gap is work to do now, not news to receive later.*",
      "**Question 2 (ungraded).** The fourteen-day pace shows one day at 44% sitting between days in the seventies. What do you do?",
      "A. Nothing. The month total still looks fine.",
      "B. Drop rate across all fourteen days to be safe.",
      "**C. Act on that one soft day. Review its rate and restrictions and push the channels that fill late.  \u2713**",
      "*Feedback: you do not discount a whole fortnight for one soft day, and you do not ignore it either. Target the day that is soft and still inside the window.*",
    ]},
    { kind:"narration", lines:[
      { t:"*A quick gut check before we move on. Two questions, nothing riding on it. Read each one, pick your answer, and see if the two habits have landed. Always make two comparisons, and act on the soft day while you still can.*", italics:true },
    ]},
  ]});

slides.push({ no:"10", title:"Where the business truly comes from", time:"3:00", type:"Concept",
  spec:[
    ["objective","Introduce the segmentation view: rooms, rate and revenue by market segment. The point is not the list of segments. It is that mix is a decision, and the report shows you which parts of the business are carrying the month."],
    ["interaction","Hotspot on the segmentation block. Three hotspots: the biggest-volume segment, a high-rate and lower-volume segment, and the Budget and Last Year columns, read as a comparison rather than a number to admire."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**Segmentation, Dusit Thani Kyoto, year-to-date (real figures, rounded)**",
      "**Retail External (OTAs, public web):** about 5,780 rooms, ADR about \u00A568,400. The volume engine.",
      "**Retail Internal (direct, brand.com):** about 1,825 rooms, ADR about \u00A577,500. Fewer rooms, the highest rate.",
      "**Wholesale (dynamic, static, negotiated):** about 7,900 rooms combined. Large, lower rate.",
      "**Groups (business and leisure):** about 820 rooms, ADR about \u00A564,000.",
      "**Total year-to-date:** about 17,025 rooms, ADR about \u00A570,400, revenue about \u00A51.20bn. Budget was about 17,960 rooms at about \u00A573,900, so behind on both rooms and rate.",
    ]},
    { kind:"interaction", lines:[
      "**Type:** hotspot, three areas. All opened before Continue.",
      "**Tooltip A (volume engine):** \u201CRetail External moves the most rooms. Healthy, but watch the rate and the channel cost behind it.\u201D",
      "**Tooltip B (high-rate segment):** \u201CDirect business is smaller but earns the most per room. Growing it protects rate and cuts commission.\u201D",
      "**Tooltip C (budget and last-year columns):** \u201CDo not just read this year. Compare to budget and last year. That is how you see which segment is over- or under-delivering.\u201D",
    ]},
    { kind:"builder", lines:[
      "Insert the **segmentation block** from the Overview tab (market group columns: rooms sold, ADR, revenue across Yesterday, MTD, YTD, Budget, Last Year). Overlay three hotspots as above. Figures are illustrative from the reference file. The property may localise to its own segment labels.",
    ]},
    { kind:"narration", lines:[
      { t:"*A hotel does not fill from one place. It fills from segments. Direct guests, OTA guests, wholesale, groups, and each one comes at a different rate. The segmentation view is where you see who is actually carrying the month.*", italics:true },
      { t:"*At Kyoto, the volume engine is Retail External, the OTA and public-web business, nearly six thousand rooms year-to-date. Direct business is smaller, under two thousand rooms, but it earns the highest rate of all and costs almost nothing in commission. Wholesale is big and cheaper. Groups are a smaller slice at a solid rate.*", italics:true },
      { t:"*Here is the discipline. Do not just admire this year's numbers. Read them against budget and last year. Year-to-date, the hotel is behind budget on both rooms and rate. So the question the segmentation view forces is this. Which segment is meant to make that up, and is it actually doing it?*", italics:true },
    ]},
  ]});

slides.push({ no:"11", title:"Where to lean in, where to look closer", time:"2:30", type:"Concept",
  spec:[
    ["objective","Turn the segment view into a decision. Each segment carries a variance to budget and last year. A green variance is where to lean in, a red one is where to look closer. The report points; the team decides."],
    ["layout","A simple two-column split, \u201Clean in\u201D and \u201Clook closer,\u201D with example segment behaviours. A surging segment to support, and a sliding segment to investigate."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**Read every segment two ways: against budget, and against last year.**",
      "**Lean in (a segment running ahead):** for example, direct or loyalty business up strongly on last year. Support it. Protect the rate, feed it inventory and visibility. It is your highest-value growth.",
      "**Look closer (a segment running behind):** for example, a corporate or wholesale line well under budget. Investigate. A lost account? A channel that dropped off? A rate no longer competitive? Find out before it drags the month.",
      "**The trap:** a strong total can hide a sliding segment. One business type quietly collapsing stays invisible in the headline until it is too late to replace.",
    ]},
    { kind:"screen", lines:[
      "**A green variance is where to lean in. A red one is where to look closer.**",
      "A segment ahead of budget is where to invest attention and inventory.",
      "A segment behind budget is a question to answer this week, not at month-end.",
      "**Mix is a decision. The report simply shows you which way each piece is moving.**",
    ]},
    { kind:"narration", lines:[
      { t:"*Every segment in that view comes with two comparisons attached. Against budget, and against last year. And those two numbers turn the report into a decision. Lean in, or look closer.*", italics:true },
      { t:"*A segment running ahead, say direct bookings up strongly on last year, is one to lean into. Protect the rate, give it inventory and visibility, because it is your best-value growth. A segment running behind budget is one to look at closely this week. Did you lose an account? Did a channel drop off? Is your rate no longer competitive there?*", italics:true },
      { t:"*And watch the trap. A healthy total can hide one segment quietly collapsing. By the time it shows up in the headline number, the business you needed to replace it is already gone. Read the pieces, not just the sum.*", italics:true },
    ]},
  ]});

slides.push({ no:"12", title:"The segment slipping beneath the surface", time:"3:00", type:"Scenario",
  spec:[
    ["objective","Apply the lean-in or look-closer read under realistic pressure. The headline looks fine, one segment is sliding. The learner chooses a response and sees the commercial logic of each."],
    ["interaction","Branching scenario, three choices. One reactive and wrong, one do-nothing and wrong, one diagnose-then-act and correct. Each path returns a realistic outcome."],
  ],
  boxes:[
    { kind:"interaction", lines:[
      "**Scenario.** It is Monday. The month is on the books slightly ahead of last year and the total looks healthy. But the segmentation view shows your corporate rooms running well under budget and below last year, while OTA volume is up and covering the gap. What do you do?",
      "**A. Nothing. The total is fine and OTAs are filling the rooms.**",
      "*Outcome: the rooms get filled, but at OTA rates and OTA commission instead of corporate rate. Your ADR and your net revenue slip even though occupancy holds. And if OTA demand softens next month, there is no corporate base underneath to catch you. The headline hid the erosion.*",
      "**B. Cut the corporate rate to win the business back fast.**",
      "*Outcome: you might recover some rooms, but you have discounted the segment that was already your problem, and you still do not know why it slipped. If the cause was a lost account or a channel issue, a lower rate does not fix it. It just costs you more on the business you do keep.*",
      "**C. Diagnose first. Is it a lost account, a booking-window shift, or a rate gap? Then act on the cause.  \u2713**",
      "*Outcome: correct. You pull the corporate detail and the travel-agent view, find whether a specific account or channel dropped, and check your weekday rate against the comp set. The fix follows the cause: win back the account, repair the channel, or adjust weekday positioning, instead of guessing.*",
      "**Note:** the OTA cover-up is the real risk here. A segment can be replaced in the total and lost in the business at the same time.",
    ]},
    { kind:"builder", lines:[
      "Branching scenario, three paths. Build in iSpring as branching layers or TalkMaster. After the learner sees their outcome, allow them to view the other paths before Continue. Reinforce that C, diagnose then act, is the only path that addresses the cause.",
    ]},
    { kind:"narration", lines:[
      { t:"*Monday morning. The month is on the books a touch ahead of last year, the total looks fine, and your corporate business is quietly sliding under budget while the OTAs fill the gap. Three choices. Read each one carefully, because this is exactly the situation where the headline number lies to you. What do you do?*", italics:true },
    ]},
  ]});

slides.push({ no:"13", title:"The month, night by night", time:"2:30", type:"Concept",
  spec:[
    ["objective","Introduce the On-The-Books tab: the day-by-day detail behind the month. The same numbers at a finer grain, by date, by segment, and by room type, so you can see exactly which nights and which room categories are soft."],
    ["interaction","Hotspot on the OTB tab. Three hotspots: the per-day occupancy and ADR columns, the room-type split (Deluxe, Premier, Suite), and the group-status columns as a preview of the next slide."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**The On-The-Books tab is the month, one night at a time.**",
      "**By date:** every day's rooms sold, occupancy and ADR, so a soft night cannot hide inside a healthy monthly average.",
      "**By segment:** the same day broken into who booked it. Retail, corporate, wholesale, groups.",
      "**By room type:** Deluxe, Premier and Suite. Rooms sold, ADR and rooms still available in each. A full house overall can still have empty suites, or sold-out entry rooms with premium rooms going spare.",
      "**Why it matters:** the month view says \u201Cwe are at 71%.\u201D This tab says which nights, which room types, and at what rate. That is where the action gets specific.",
    ]},
    { kind:"interaction", lines:[
      "**Type:** hotspot, three areas. All opened before Continue.",
      "**Tooltip A (per-day columns):** \u201CEach night's occupancy and rate. The monthly average hides soft nights. This does not.\u201D",
      "**Tooltip B (room types):** \u201CDeluxe, Premier, Suite. Sold, rate and what is left. Sold out on entry rooms but suites empty? That is a rate or an upsell move.\u201D",
      "**Tooltip C (group status):** \u201CDefinite, tentative, inquiry. How much of this day is firm, and how much is still being negotiated. More on the next slide.\u201D",
    ]},
    { kind:"builder", lines:[
      "Insert the **OTB tab** screenshot (per-date rows: sold, occ, ADR; segment columns; room types Deluxe, Premier, Suite; group status DEF, TEN, INQ). Overlay three hotspots. Mask any commercially sensitive per-day rates if required; the teaching points are about structure, not specific values.",
    ]},
    { kind:"narration", lines:[
      { t:"*The month view gives you the average. The On-The-Books tab gives you the detail behind it. Night by night, segment by segment, room type by room type.*", italics:true },
      { t:"*Why does that matter? Because a hotel at seventy-one percent for the month can still have a Tuesday at forty. The average hides it. This tab shows it. And it goes further, down to room type. You can be sold out on your entry-level rooms while your suites sit empty, which is a rate or an upsell conversation, not a \u201Cwe are full\u201D conversation.*", italics:true },
      { t:"*This is the tab you open when the month view tells you there is a problem and you need to know exactly where it is. Which nights. Which room types. At what rate. That is how a vague \u201Cwe are a bit soft\u201D becomes a specific job you can hand to the team.*", italics:true },
    ]},
  ]});

slides.push({ no:"14", title:"The group book: definite, tentative, inquiry", time:"2:00", type:"Concept",
  spec:[
    ["objective","Decode the three group statuses and the action each one demands. Tentative business is both the biggest opportunity and the biggest risk on the books. It holds inventory you cannot yet sell and revenue you cannot yet count."],
    ["layout","Three stacked bands, Definite, Tentative, Inquiry, each with what it means and the action it triggers. A line on how tentative blocks distort the picture if you do not read them."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**Definite (DEF):** signed and committed. Count it as real revenue and real rooms gone.",
      "**Tentative (TEN):** held but not signed. The rooms are blocked, so you cannot sell them, but the revenue is not yours yet. This is the status to chase.",
      "**Inquiry (INQ):** asked about, nothing held. Pure pipeline. Useful for spotting demand, not something to plan around.",
      "**The risk:** a big tentative block on a date makes the day look busy and protected, until it cancels, and now you have turned away other business for rooms that walked.",
      "**The action:** chase tentatives to a decision before they hold inventory you could have sold. Definite by a deadline, or release the rooms.",
    ]},
    { kind:"screen", lines:[
      "**Definite is real. Tentative is chase it. Inquiry is pipeline.**",
      "Tentative blocks hold rooms you cannot sell and revenue you cannot count.",
      "**Get tentatives to a yes or a no. Do not let them sit on your inventory.**",
    ]},
    { kind:"narration", lines:[
      { t:"*Groups show up in three states, and the difference between them decides what you do. Definite is signed. Count it, the rooms are gone, the revenue is real. Inquiry is just someone asking. Nice to know demand exists, but nothing is held. The tricky one in the middle is tentative.*", italics:true },
      { t:"*A tentative group has rooms blocked but has not signed. So those rooms are doing the worst of both worlds. You cannot sell them, but you cannot count the money either. And a big tentative block makes a date look busy and protected, right up until it cancels. Then you have turned away other business for rooms that walked out the door.*", italics:true },
      { t:"*So the action is simple. Chase your tentatives to a decision. Get them definite by a deadline, or release the rooms back so you can sell them. Tentative is not a status you let sit. It is a status you push.*", italics:true },
    ]},
  ]});

slides.push({ no:"15", title:"From how much, to who", time:"0:30", type:"Transition",
  spec:[
    ["objective","Hand off from the Daily Snapshot to the Monthly Snapshot. The daily report told you how much business and which nights. The monthly report tells you who is producing it."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Dark navy. A large centred line: **\u201CThe daily report tells you how much. The monthly report tells you who.\u201D** Below, smaller gold text: \u201CTravel agents. OTAs. Groups. The people and channels behind the numbers.\u201D",
    ]},
    { kind:"narration", lines:[
      { t:"*So far we have been reading how much business is on the books and which nights need work. Now we change lens. The Monthly Snapshot answers a different question. Not how much, but who. Which travel agents, which OTAs, which groups are actually producing the business. Let us look.*", italics:true },
    ]},
  ]});

slides.push({ no:"16", title:"The channels in motion", time:"3:00", type:"Concept",
  spec:[
    ["objective","Read the Travel Agent and OTA production view: each channel's room nights, mix share, and, above all, its movement against last year. The story is never just the size. It is the direction. And concentration is a risk."],
    ["interaction","Hotspot on the TA Analysis tab. Three hotspots: the mix-share column, the movement against last year, and a growing channel set beside a shrinking one."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**Travel Agent and OTA production, Dusit Thani Kyoto, current month (real figures)**",
      "**Booking.com:** 583 room nights, 46% of agent mix, up 129 on last year. Growing, and already the biggest single channel.",
      "**Expedia:** 276 room nights, 22% of mix, down 335 on last year. Collapsing.",
      "**Agoda:** 142 room nights, 11% of mix, up 85 on last year. Growing fast off a small base.",
      "**Then:** ikyu.com 91, Rakuten 83, Jalan 42. The domestic Japanese channels.",
      "**Two readings:** first, Booking.com is growing and dominant. Great for volume, but that is a lot of eggs in one commission basket. Second, Expedia falling 335 room nights is a real hole. Find out why before it becomes permanent.",
    ]},
    { kind:"interaction", lines:[
      "**Type:** hotspot, three areas. All opened before Continue.",
      "**Tooltip A (mix share):** \u201CEach channel's share of agent business. One channel above roughly 40% is a concentration risk. If it changes its terms, you feel it.\u201D",
      "**Tooltip B (movement against last year):** \u201CThe direction column. A channel up 100-plus room nights is momentum to support. One down 300 is a leak to investigate.\u201D",
      "**Tooltip C (grower beside shrinker):** \u201CBooking up, Expedia down. Same market, opposite directions. Ask what changed: visibility, content, rate, promotion participation.\u201D",
    ]},
    { kind:"builder", lines:[
      "Insert the **TA Analysis tab** (agent rows with room nights, mix%, Y-1, VAR for month and YTD, plus ADR). Overlay three hotspots. Use the Monthly Snapshot (DTKJ, as of 31 May 2026) reference file. Real channel names appear in the data; confirm the property is comfortable showing live channel names in training, or anonymise to \u201COTA A, B, C.\u201D",
    ]},
    { kind:"narration", lines:[
      { t:"*Now the who. The travel-agent view ranks every channel by how much business it is producing. And the most important column is not the size. It is the direction.*", italics:true },
      { t:"*At Kyoto, Booking.com is the biggest, nearly half of all agent business, and it is up a hundred and twenty-nine room nights on last year. Growing and dominant. Agoda is small but climbing fast. And Expedia is down three hundred and thirty-five room nights. That is not a wobble. That is a channel falling away.*", italics:true },
      { t:"*Two things to take from this. First, when one channel is approaching half your agent business, that is a concentration risk. If it changes its commission or its rules, you feel it hard. Second, a channel dropping three hundred room nights is a hole you go and investigate now. Is it visibility, content, rate, a promotion you dropped out of? The report tells you which channel. Your job is to find out why, while it is still recoverable.*", italics:true },
    ]},
  ]});

slides.push({ no:"17", title:"When to open, when to hold", time:"2:00", type:"Concept",
  spec:[
    ["objective","Use the lead-time and day-of-week columns to answer one question: when does this business book, and for which nights? That is the basis for when to open promotions, when to hold rate, and which days each channel actually fills."],
    ["layout","Two small panels: a lead-time curve, how far ahead this channel books, and a day-of-week bar, which nights it favours, each with the practical move it implies."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**Lead time: how far ahead does this business book?**",
      "Short lead time, books close-in: keep some availability and a late-demand plan. Do not sell out too cheaply too early.",
      "Long lead time, books far out: the early base. Protect rate on it. It is not a discount trigger.",
      "**Day of week: which nights does this channel fill?**",
      "A channel strong on weekends but absent mid-week tells you where your weekday gap is really coming from.",
      "**Put together:** lead time tells you when to act on a channel. Day of week tells you which nights it can actually help you fill.",
    ]},
    { kind:"screen", lines:[
      "**Lead time is the booking window. Day of week is the nights that channel fills.**",
      "Read them together: open the right promotion, in the right channel, for the right nights, at the right moment.",
      "**Do not discount a night a channel was never going to fill anyway.**",
    ]},
    { kind:"narration", lines:[
      { t:"*Two more columns on the monthly view earn their keep. Lead time, and day of week. Lead time is how far ahead a channel books. Day of week is which nights it tends to fill.*", italics:true },
      { t:"*Why do you care? Because together they tell you when to act and where it will help. If a channel books close-in, you keep a little availability back for it rather than selling out early and cheap. If it books far out, that is your base. Protect the rate, do not treat it as a discount trigger. And if a channel only ever fills weekends, it is not the answer to your mid-week gap, no matter how big it is.*", italics:true },
      { t:"*This is how you stop guessing. The right promotion, in the right channel, for the right nights, at the right moment. The report hands you all four if you read these columns.*", italics:true },
    ]},
  ]});

slides.push({ no:"18", title:"Promised, or merely held", time:"2:00", type:"Concept",
  spec:[
    ["objective","Read the forward group view: the pipeline of groups by status, with current rooms, pickup and contribution. Connect it back to definite, tentative and inquiry, now looking forward across the months rather than at one date."],
    ["layout","A forward timeline of group blocks by arrival month, each tagged definite or tentative, with rooms and revenue contribution. Highlight the tentative weight that needs chasing."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**The forward group view is the pipeline ahead.**",
      "**Per group:** the account owner, the group name, the dates (enquiry, definite, arrival), the status, current rooms, and pickup since the last look.",
      "**Contribution:** each group's share of the month it lands in, so you can see which future months lean heavily on group business.",
      "**The forward read:** a future month carried by a stack of tentative groups is a soft month wearing a confident face. If those tentatives do not convert, the month empties out late.",
      "**The action:** work the tentative pipeline to definite. Deadlines, deposits, decisions. Especially for the months where your transient base is thin.",
    ]},
    { kind:"screen", lines:[
      "**The pipeline shows future months before they arrive.**",
      "A month leaning on tentative groups is a forecast built on maybes.",
      "**Convert tentatives early, or know which months you will need transient to backfill.**",
    ]},
    { kind:"narration", lines:[
      { t:"*Groups do not just affect today. They shape the months ahead, and the forward group view is where you see that pipeline coming.*", italics:true },
      { t:"*Each group is listed with its owner, its dates, its status and its rooms, plus how much of its month it represents. And that contribution number is the one to watch. If a future month is leaning heavily on a stack of tentative groups, that month is a confident-looking forecast built on maybes. If those groups do not sign, the month hollows out, and by then it is too late to backfill with transient.*", italics:true },
      { t:"*So you work the pipeline forward. Push the tentatives toward definite. Deadlines, deposits, decisions. Especially for the months where your individual-guest base is thin. The pipeline gives you the warning early. Use the time.*", italics:true },
    ]},
  ]});

slides.push({ no:"19", title:"Beyond the room", time:"2:00", type:"Concept",
  spec:[
    ["objective","Round out the monthly view: the report also carries food and beverage and other revenue per guest. The room is the start of the guest's spend, not the end, and total revenue per guest is the fuller scoreboard."],
    ["layout","A single guest receipt building up: room, then food and beverage average spend, then other revenue, to a total per guest. Note that a lower-rate segment can still be a high-total-spend segment."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**The report goes past the room rate.** Alongside each channel and segment it carries:",
      "**Food and beverage average spend per guest:** what the guest adds in the restaurants and bars.",
      "**Other revenue per guest:** spa, services, everything else on the folio.",
      "**Why it changes decisions:** a segment that books at a lower room rate can still be a high-total-spend segment once food, beverage and extras are counted. Judging a segment on room rate alone can lead you to cut your best total-revenue guest.",
      "**The habit:** when you weigh a segment or channel, glance at the room and the total. The fuller scoreboard sometimes tells a different story.",
    ]},
    { kind:"narration", lines:[
      { t:"*One last piece of the monthly view, and it is easy to miss because we are all trained to look at room rate. The report also carries food and beverage spend per guest, and other revenue per guest. Spa, services, everything else on the folio.*", italics:true },
      { t:"*Why does that matter? Because the room is where a guest's spend starts, not where it ends. A segment that books at a slightly lower room rate might actually spend the most once you count the restaurant, the bar and the extras. If you judge that segment on room rate alone, you could end up cutting your most valuable guest.*", italics:true },
      { t:"*So build the habit. When you weigh up a channel or a segment, look at the room and the total. Sometimes the fuller picture changes the decision.*", italics:true },
    ]},
  ]});

slides.push({ no:"20", title:"A familiar number, every morning", time:"1:30", type:"Concept",
  spec:[
    ["objective","A brief callback, not a re-teach. The competitive benchmark at the top of the Overview is the same index covered in Module 6. The only new point here is cadence: in DDP you see it every morning, not once a month."],
    ["layout","The benchmark strip shown small and simple, with a single pointer back to Module 6. No formulas, no re-explanation."],
  ],
  boxes:[
    { kind:"screen", lines:[
      "**You already know this number.** The competitive index lives at the top of the Overview tab.",
      "Module 6 taught you how to read it. The Daily Snapshot simply puts it in front of you every morning.",
      "**The value here is cadence.** A monthly index tells you what happened. A daily one lets you catch your share moving while you can still act.",
    ]},
    { kind:"builder", lines:[
      "Keep this slide short. Do not reproduce the index formulas or re-teach the calculation; that is Module 6. A single clean benchmark strip from the top of the Overview tab is enough, with a \u201Csee Module 6\u201D pointer.",
    ]},
    { kind:"narration", lines:[
      { t:"*One quick note before we pull it all together. The top of the Overview tab is the competitive benchmark, your position against the comp set. That is the index you already learned to read in the previous module, so we will not go over it again.*", italics:true },
      { t:"*The only thing worth adding here is timing. In that module, you saw the index once a month. In the daily report, it is in front of you every morning. That is the advantage. You catch your share moving early, while there is still time to do something about it.*", italics:true },
    ]},
  ]});

slides.push({ no:"21", title:"The morning ritual", time:"2:30", type:"Concept",
  spec:[
    ["objective","Assemble everything into a repeatable two-minute routine. Six questions, each mapped to the report that answers it. This is the takeaway the learner carries to their desk tomorrow."],
    ["layout","Six numbered rows: the question, the report or tab that answers it, and the action it triggers. Designed to become the downloadable one-pager."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**The six-question morning read (about two minutes)**",
      "**1. Ahead or behind budget?** Overview pickup block, or the Dashboard. Read the forecast against budget, not just against last year.",
      "**2. Anything urgent in the next fourteen days?** The pace strip. Flag and act on the soft day inside the window.",
      "**3. Which segment moved?** The segmentation view. Lean into the risers, look closer at the fallers.",
      "**4. Any group risk?** OTB group status and the forward pipeline. Chase tentatives to a decision.",
      "**5. Who is growing or shrinking in our channels?** The travel-agent view. Support the climbers, investigate the drops, watch concentration.",
      "**6. Where do we sit against the comp set?** The competitive benchmark. A quick glance at the index you already know.",
    ]},
    { kind:"builder", lines:[
      "Make this slide the basis of the downloadable one-pager, \u201CThe Six-Question Morning Read.\u201D Six questions, the tab that answers each, and the trigger action. DHI to produce the PDF; offer it as a download on this slide and on the summary slide.",
    ]},
    { kind:"narration", lines:[
      { t:"*Here is everything from this module on one page. The routine you actually take to your desk tomorrow. Six questions, and each one points to exactly one part of the report.*", italics:true },
      { t:"*One. Are we ahead or behind budget? Two. Is there anything urgent in the next fourteen days? Three. Which segment moved? Four. Any group risk? Five. Who is growing or shrinking in our channels? Six. Where do we sit against the comp set?*", italics:true },
      { t:"*That is it. Six questions, about two minutes, every morning. Do it before the day starts and you will never be the person from the first slide. Ahead of last year, behind budget, and the last to find out. You will have seen it already, and you will already be acting.*", italics:true },
    ]},
  ]});

slides.push({ no:"22", title:"A morning at Dusit Thani Kyoto, June 2026", time:"3:30", type:"Scenario",
  spec:[
    ["objective","Bring the whole module together on one real morning of real data. The learner reads the actual June picture and chooses a commercial priority, with two valid paths and two weaker ones, just as a real revenue meeting would."],
    ["interaction","Branching scenario, four choices, two valid (B and D), two weaker (A and C). After completing, a note confirms B and D both work and address different parts of the same picture."],
  ],
  boxes:[
    { kind:"content", lines:[
      "**Dusit Thani Kyoto, the morning read, June 2026 (real figures)**",
      "On the books 3,149 rooms, ahead of last year by 252. But the forecast is 2,655 against a budget of 3,033, a shortfall of 378. ADR on the books \u00A551,435 against a budget of \u00A562,549.",
      "Next fourteen days: late June firm, the first week of July soft (1 Jul about 45%).",
      "Channels: Booking.com up 129 and dominant, Expedia down 335, Agoda up 85.",
    ]},
    { kind:"interaction", lines:[
      "**You are chairing the revenue meeting. What is the priority this week?**",
      "**A. Drop rate across June to close the 378-room gap to budget.**",
      "*Outcome: you are already running ADR about \u00A511,000 under budget. Cutting rate further chases rooms while giving away the rate that is holding your revenue position up. You might fill some rooms and still miss revenue budget by more. Volume is not the hole; rate already is.*",
      "**B. Attack the soft first week of July with targeted, channel-specific action, not an across-the-board cut.  \u2713**",
      "*Outcome: strong. The gap is concentrated in specific soft days. Move 1 to 5 July with restriction changes and promotions in the channels that fill late, protect the firm late-June days, and you close real rooms without giving away rate everywhere.*",
      "**C. Nothing urgent. We are ahead of last year.**",
      "*Outcome: ahead of last year is not the target. The forecast is 378 rooms under budget, and a soft first week of July is sitting right there, unaddressed. This is the first-slide trap.*",
      "**D. Investigate the Expedia drop and the channel mix before it becomes structural.  \u2713**",
      "*Outcome: strong. Expedia down 335 room nights is a real leak, and Booking.com is now near half your agent business, a concentration risk. Recovering Expedia visibility and rebalancing the mix protects future months, not just this one.*",
      "**Note:** B and D are both right. B fixes this month's soft days. D protects the channel base behind future months. A good team runs both. A and C are the traps: A gives away rate you cannot afford to lose; C mistakes \u201Cahead of last year\u201D for \u201Con budget.\u201D",
    ]},
    { kind:"builder", lines:[
      "Branching scenario, four paths, two correct (B and D). Build in iSpring as branching layers. After all paths are seen, surface the note confirming B and D are both valid. All figures are real, from the DTKJ Daily Snapshot (as of 25 Jun 2026) and Monthly Snapshot (as of 31 May 2026); the Dusit Revenue team should verify before launch.",
    ]},
    { kind:"narration", lines:[
      { t:"*Last stop. One real morning, real numbers, and you are chairing the meeting. Kyoto, June. On the books ahead of last year by two hundred and fifty-two rooms, but the forecast is three hundred and seventy-eight under budget, and the rate is light too. The first week of July is soft. Booking.com is surging, Expedia is falling.*", italics:true },
      { t:"*Four choices for where you put this week's energy. Two of them are genuinely right, and they tackle different parts of the same picture. Two are traps. Read all four, decide your priority, and know why. That is the job.*", italics:true },
    ]},
  ]});

slides.push({ no:"23", title:"Composing your morning read", time:"2:30", type:"Interaction",
  spec:[
    ["objective","Cement the routine by having the learner connect each morning question to the report that answers it. Recall plus application, so the routine becomes muscle memory."],
    ["interaction","Drag and match. Six question cards on the left, six report or tab cards on the right. The learner matches each. All correct before Continue, one retry per pair with feedback."],
  ],
  boxes:[
    { kind:"interaction", lines:[
      "**Match each morning question to the report that answers it.**",
      "Ahead or behind budget?  matches  **Overview pickup block, or the Dashboard**",
      "Anything urgent in fourteen days?  matches  **the pace strip**",
      "Which segment moved?  matches  **the segmentation view**",
      "Any group risk?  matches  **OTB group status and the forward pipeline**",
      "Who is growing or shrinking in channels?  matches  **the travel-agent view**",
      "Where do we sit against the comp set?  matches  **the competitive benchmark**",
      "**On a wrong match:** \u201CClose, but that report answers a different question. Think about what this tab actually shows, then try again.\u201D",
    ]},
    { kind:"builder", lines:[
      "Build as a six-pair drag and match. Shuffle the card order each attempt. Correct matches lock in place; incorrect ones bounce back with the feedback line. Continue activates when all six are matched. One retry per pair.",
    ]},
    { kind:"narration", lines:[
      { t:"*Let us lock it in. Six questions on one side, six parts of the report on the other. Match each question to the report that answers it. Get all six, and you have rebuilt your morning routine from memory, which is exactly where it needs to live.*", italics:true },
    ]},
  ]});

slides.push({ no:"24", title:"Five mornings. Five decisions.", time:"5:00", type:"Quiz",
  spec:[
    ["settings","5 questions. Pass mark 80% (4/5). One per screen. No going back. Immediate feedback. Score to Moodle. One retry on fail. All questions use the real Dusit Thani Kyoto data from this module."],
  ],
  boxes:[
    { kind:"quiz", lines:[
      "**Question 1 of 5.** Your June is on the books at 3,149 rooms, 252 ahead of last year, but the month-end forecast is 2,655 against a budget of 3,033. What is the correct read?",
      "A. Strong month. We are ahead of last year, no action needed.",
      "**B. We are 378 rooms behind budget. Last year is not the target; the forecast gap is this week's work.  \u2713**",
      "C. On the books is above forecast, so the forecast must be wrong.",
      "D. Wait for pickup to close the gap on its own.",
      "*Feedback: ahead of last year is direction, budget is the target. The forecast is where the month lands if nothing changes, and 378 rooms short is a gap to work now, not news to receive at month-end.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 2 of 5.** The fourteen-day pace shows 1 to 5 July around 45 to 47% while the days on either side sit in the sixties and seventies. What is the priority action today?",
      "A. Cut rate across all fourteen days to be safe.",
      "B. Nothing. The monthly total still looks healthy.",
      "**C. Target the soft early-July days. Review their rate and restrictions and push the channels that fill late.  \u2713**",
      "D. Raise rate on the strong days to make up the difference.",
      "*Feedback: you do not discount a whole fortnight for a few soft days, and you do not ignore them. Act on the soft days that are still inside the window. That is where today's effort pays off.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 3 of 5.** The travel-agent view shows Booking.com up 129 room nights and now about 46% of agent mix, while Expedia is down 335. What is the right pair of actions?",
      "A. Shift everything to Booking.com. It is clearly winning.",
      "**B. Support Booking.com's momentum but watch the concentration risk, and investigate why Expedia dropped 335 before it is permanent.  \u2713**",
      "C. Ignore Expedia. One channel falling does not matter if another is rising.",
      "D. Cut rates on Expedia to win the volume back immediately.",
      "*Feedback: a 335-room-night drop is a real leak worth diagnosing, whether visibility, content, rate or promotion participation. And one channel near half your agent business is a concentration risk. Momentum is good; over-dependence is fragile.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 4 of 5.** A future month's forecast looks healthy, but most of it is made up of tentative group blocks that have not signed. What is the correct assessment?",
      "A. It is a strong month. The rooms are on the books.",
      "**B. It is a forecast built on maybes. If the tentatives do not convert, the month empties out late, so chase them to definite now.  \u2713**",
      "C. Tentative and definite are the same once they are in the system.",
      "D. Release all the tentative blocks immediately to free up inventory.",
      "*Feedback: tentative blocks hold rooms you cannot sell and revenue you cannot count. A month leaning on them is fragile. Work them to a yes or a no, especially where transient demand is thin.*",
    ]},
    { kind:"quiz", lines:[
      "**Question 5 of 5.** Your month is on the books ahead of last year and the total looks healthy, but the segmentation view shows corporate running well under budget while OTA volume covers the gap. What is the right first move?",
      "A. Nothing. The rooms are filled.",
      "**B. Diagnose why corporate slipped, whether a lost account, a channel issue or a rate gap, before acting.  \u2713**",
      "C. Cut the corporate rate to win it back quickly.",
      "D. Lower the budget expectation to match the new run rate.",
      "*Feedback: the total hides the erosion. OTAs filling at OTA rates and commission is not the same business as corporate, and if OTA demand softens there is no base underneath. Find the cause before you act on it.*",
    ]},
  ]});

slides.push({ no:"25", title:"The report is written each night. The reading is yours.", time:"1:00", type:"Summary",
  spec:[
    ["objective","Close on a single memorable line that reframes the whole module: the data is already there every morning, and the only variable is whether anyone reads it and acts."],
  ],
  boxes:[
    { kind:"visual", lines:[
      "Dark navy. A large white centred headline. Three gold lines beneath, left-aligned. Bottom-right, a gold \u201CModule Complete\u201D badge. Bottom-left, a white button, \u201CDownload the Six-Question Morning Read.\u201D Dusit logo top-left, small, white.",
    ]},
    { kind:"screen", lines:[
      "**Headline: \u201CThe report is written each night. The reading is yours.\u201D**",
      "Two comparisons, never one. Last year tells direction, budget tells the target.",
      "Act on the soft day while it is still inside the window.",
      "Read the pieces, not just the total. A strong headline can hide a sliding segment.",
      "*Download: \u201CThe Six-Question Morning Read.\u201D The routine, the tab for each question, the trigger action.*",
    ]},
    { kind:"narration", lines:[
      { t:"*The report is written every night, automatically, whether anyone reads it or not. That is the whole point. The data is not the variable. Your attention is.*", italics:true },
      { t:"*Remember the hotel from the first slide. Ahead of last year, behind budget, and the last to know. Not because the information was missing, but because nobody opened the report early enough to act. Everything in this module exists to make sure that is never you. Two comparisons, never one. Act on the soft day while you still can. Read the pieces, not just the total. And ask your six questions every morning.*", italics:true },
      { t:"*The report is written each night. The reading is yours. Well done for completing this module.*", italics:true },
    ]},
  ]});

/* ===================================================================== */
/*  ASSEMBLE                                                             */
/* ===================================================================== */
const children = [];

/* ---- cover ---- */
const ctr = AlignmentType.CENTER;
children.push(
  new Paragraph({ alignment: ctr, spacing: { before: 1500, after: 80 }, children: [new TextRun({ text: "DUSIT HOTELS & RESORTS   \u00B7   REVENUE TRAINING PROGRAMME", bold: true, size: 20, color: NAVY, font: FONT, characterSpacing: 30 })] }),
  new Paragraph({ alignment: ctr, spacing: { before: 220, after: 80 }, children: [new TextRun({ text: "MODULE 7   \u00B7   DDP REPORTS", bold: true, size: 26, color: GOLD, font: FONT, characterSpacing: 40 })] }),
  new Paragraph({ alignment: ctr, spacing: { after: 100 }, children: [new TextRun({ text: "Reading the Daily Pulse", bold: true, size: 44, color: NAVY, font: FONT })] }),
  new Paragraph({ alignment: ctr, spacing: { after: 320 }, children: [new TextRun({ text: "Instructional Design Blueprint   \u00B7   Version 2.0", size: 22, color: MUTE, font: FONT })] }),
);
const coverInfo = (label, val) => new TableCell({
  width: { size: CW / 4, type: WidthType.DXA },
  shading: { fill: "EAEFF6", type: ShadingType.CLEAR, color: "auto" }, borders: noBorders("EAEFF6"),
  margins: { top: 140, bottom: 140, left: 80, right: 80 }, verticalAlign: VerticalAlign.CENTER,
  children: [
    new Paragraph({ alignment: ctr, spacing: { after: 40 }, children: [new TextRun({ text: label, bold: true, size: 16, color: GOLD, font: FONT, characterSpacing: 28 })] }),
    new Paragraph({ alignment: ctr, children: [new TextRun({ text: val, bold: true, size: 21, color: NAVY, font: FONT })] }),
  ],
});
children.push(new Table({
  width: { size: CW, type: WidthType.DXA }, columnWidths: [CW / 4, CW / 4, CW / 4, CW / 4],
  rows: [new TableRow({ children: [
    coverInfo("DURATION", "60 minutes"),
    coverInfo("SLIDES", "25 slides"),
    coverInfo("DELIVERY", "iSpring / SCORM 1.2"),
    coverInfo("AUDIENCE", "GM \u00B7 DOS \u00B7 DOR \u00B7 DOM"),
  ] })],
}));
children.push(new Paragraph({ alignment: ctr, spacing: { before: 340 }, children: [new TextRun({ text: "Prepared by DHI Hospitality   \u00B7   June 2026   \u00B7   Confidential", size: 20, color: MUTE, font: FONT })] }));
children.push(new Paragraph({ children: [new PageBreak()] }));

/* ---- narrative ---- */
children.push(H("The Narrative"));
children.push(P("It is a confident Monday. The team reports the month is on the books ahead of last year, more rooms than the same point twelve months ago. Everyone relaxes. But last year was never the target. Budget is. And the same report that said \u201Cahead of last year\u201D had been quietly showing, every single morning, that the month-end forecast had slipped below budget. Nearly four hundred rooms short, with the rate running light too. Nobody opened it early enough to act.", { after: 140 }));
children.push(P("This module teaches the commercial team to read the DDP reports the way you would take a patient's pulse. Every day, to catch a problem while it is still small. The Daily Snapshot shows how the month is shaping up: pickup, the next fourteen days, on-the-books, and the competitive position. The Monthly Snapshot shows who is producing it: travel agents, OTAs, groups, segments. By the end, a learner can open the report, run a two-minute six-question read, and turn it into the right action that morning, rather than at month-end.", { after: 160 }));
children.push(arcBox("The arc, 25 slides, 60 minutes", [
  { lead:"Hook (slides 1\u20132)", rest:"A month that looked stronger than it was, sliding below budget the whole time. DDP is the hotel's daily pulse: two reports, six morning questions." },
  { lead:"The Daily Snapshot (slides 3\u20139)", rest:"The Overview tab and its four zones. Ahead or behind budget. Reading pickup day to day. Where the month lands. The fortnight ahead. A find-the-night exercise, and a quick check." },
  { lead:"Segmentation (slides 10\u201312)", rest:"Where the business comes from. Lean in or look closer on budget variance. A branching scenario where the headline hides a sliding segment." },
  { lead:"On the Books and Groups (slides 13\u201314)", rest:"Night by night and room by room. Definite, tentative, inquiry, and why tentative is the status you chase." },
  { lead:"The Monthly Snapshot (slides 15\u201319)", rest:"From how much, to who. Channels read by movement. Lead time and day of week. The forward group pipeline. Total revenue per guest." },
  { lead:"Putting It Together (slides 20\u201323)", rest:"A brief callback to the index from Module 6. The morning ritual. A real Kyoto case study. A build-the-routine match." },
  { lead:"Quiz and Close (slides 24\u201325)", rest:"Five graded scenario questions on the real Kyoto data. One closing line." },
]));
children.push(box("builder", [
  "Data note: every figure in this module comes from the real Dusit Thani Kyoto DDP exports, the Daily Snapshot (as of 25 Jun 2026) and the Monthly Snapshot (as of 31 May 2026), provided as reference files. Key anchors: June on the books 3,149 rooms (252 ahead of last year) but forecast 2,655 against budget 3,033 (378 short); fourteen-day pace soft across 1 to 5 July (about 45%); Booking.com up 129, Expedia down 335, Agoda up 85. The Dusit Revenue team should verify all figures against the live reports before launch, as dates roll forward.",
]));
children.push(new Paragraph({ children: [new PageBreak()] }));

/* ---- module at a glance ---- */
children.push(H("Module at a Glance"));
children.push(glanceTable(glance));
children.push(spacer(100));
children.push(box("content", ["Total: 60 minutes. 25 slides. Pass mark 80% (4 of 5). One retry allowed. Completion: quiz passed and all slides visited. Audience: GM, DOS, DOR, DOM. Real data: Dusit Thani Kyoto DDP, June 2026."]));
children.push(new Paragraph({ children: [new PageBreak()] }));

/* ---- slide specifications ---- */
children.push(H("Slide Specifications"));
children.push(P("Each slide is fully specified below. The voice-over reads the narration script exactly. The builder follows the visual direction, interaction specs and builder notes. On-screen text and narration complement each other; they do not simply repeat.", { after: 160 }));

slides.forEach((s, idx) => {
  children.push(slideHeader(s.no, s.title, s.time, s.type));
  children.push(spacer(60));
  children.push(specTable(s.spec));
  children.push(spacer(80));
  s.boxes.forEach((b) => { children.push(box(b.kind, b.lines)); children.push(spacer(80)); });
  if (idx !== slides.length - 1) children.push(spacer(120));
});
children.push(new Paragraph({ children: [new PageBreak()] }));

/* ---- appendix ---- */
children.push(H("Appendix: Production Notes"));

children.push(new Paragraph({ spacing: { before: 120, after: 80 }, children: [new TextRun({ text: "Assets Required", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "DDP Daily Snapshot screenshots: Overview tab (slide 03), fourteen-day pace strip (slide 07), segmentation block (slide 10), On-The-Books tab including room types and group status (slide 13). Source: Dusit Thani Kyoto Daily Snapshot, as of 25 Jun 2026 (provided).",
  "DDP Monthly Snapshot screenshots: Travel Agent and OTA analysis tab (slide 16). Source: Dusit Thani Kyoto Monthly Snapshot, as of 31 May 2026 (provided).",
  "Competitive benchmark strip (slide 20): a small, clean graphic from the top of the Overview tab. Keep it brief; this slide is a callback to Module 6, not a re-teach.",
  "\u201CThe Six-Question Morning Read\u201D one-page PDF (slides 21 and 25): the routine, the tab that answers each question, and the trigger action. DHI to produce.",
  "Dusit logo PNG, white version, transparent background.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "iSpring Builder Checklist", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "Slide 03: hotspot on the Overview tab, four zones, all clicked before Continue.",
  "Slide 07: hotspot on the fourteen-day pace strip, three areas; the builder may swap in the current live strip.",
  "Slide 08: click-to-flag soft-day exercise; Continue on a correct flag or after the answer is revealed.",
  "Slide 09: two ungraded knowledge-check questions with feedback.",
  "Slide 10: hotspot on the segmentation block, three areas.",
  "Slide 12: branching scenario, three paths; allow viewing other paths before Continue.",
  "Slide 13: hotspot on the OTB tab, three areas (per-day, room types, group status).",
  "Slide 16: hotspot on the travel-agent view, three areas; confirm whether to show live channel names or anonymise.",
  "Slide 20: keep short, a callback to Module 6; do not re-teach the index calculation.",
  "Slide 22: branching scenario, four paths, two correct (B and D); confirmation note after all paths seen.",
  "Slide 23: six-pair drag and match, all matched before Continue, one retry per pair.",
  "Slide 24: graded quiz, 5 questions, pass mark 80%, one retry, score to Moodle.",
  "SCORM 1.2: completion is quiz passed and all slides visited.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(new Paragraph({ spacing: { before: 200, after: 80 }, children: [new TextRun({ text: "QA Checklist", bold: true, size: 24, color: NAVY, font: FONT })] }));
[
  "All DDP figures verified against the live reference reports: June on-the-books, forecast, budget, pickup, segment and channel numbers.",
  "Overview hotspot: all four zones open the correct tooltips.",
  "Fourteen-day pace hotspot and find-the-night exercise: correct day flagged; current dates reflect the live strip if swapped in.",
  "Segmentation and OTB hotspots: all areas clickable, correct tooltips.",
  "Both branching scenarios (slides 12 and 22): all paths reachable; correct paths acknowledged.",
  "Drag and match (slide 23): all six pairs lock correctly; wrong matches return feedback.",
  "Quiz: 5 questions, all Kyoto data accurate, pass and fail screens, score to Moodle, one retry.",
  "Channel names confirmed shown or anonymised per property preference.",
  "Slide 20 kept brief, with no index calculation re-taught.",
  "SCORM tested in the Moodle sandbox.",
  "Content reviewed by the Dusit Revenue team; verify all figures before launch.",
].forEach(t => children.push(P(t, { numbering: { reference: "bul", level: 0 } })));

children.push(spacer(200));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Dusit Revenue Training Programme  \u00B7  Module 7, DDP Reports  \u00B7  DHI Hospitality  \u00B7  June 2026", size: 18, color: MUTE, font: FONT })] }));

/* ---- document ---- */
const doc = new Document({
  numbering: { config: [
    { reference: "bul", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 460, hanging: 260 } } } }] },
  ] },
  styles: { default: { document: { run: { font: FONT, size: 20, color: INK } } } },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } },
    children,
  }],
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("/mnt/user-data/outputs/module7-ddp-blueprint.docx", buf);
  console.log("WROTE module7-ddp-blueprint.docx", buf.length, "bytes");
});
