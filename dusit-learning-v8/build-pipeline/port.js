/* Port a markdown-mirror blueprint into the new-standard .docx
   (Title Case headings, em dashes -> commas/colons, cleaned markup, elevated titles).
   Usage: node port.js <markdown> <out.docx> <moduleKey> */
const fs = require('fs');
const H = require('./helpers.js');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, ShadingType, VerticalAlign, PageBreak, LevelFormat,
  NAVY, GOLD, MUTE, FONT, CW, noBorders, box, arcBox, slideHeader, specTable, glanceTable, P, spacer,
} = H;
const Hh = H.H;

/* ---------- per-module elevated, de-dashed title maps ---------- */
const MAPS = {
  m1: {
    cover: { num: "MODULE 1", title: "Dusit Rate Architecture", dur: "45 minutes", slides: "22 slides", aud: "GM \u00B7 DOS \u00B7 DOR \u00B7 DOM" },
    titles: {
      "01": "When a guest knows the rate better than you do",
      "02": "What rate architecture actually is",
      "03": "The Five Questions",
      "04": "Right Guest: the same room, two fair rates",
      "05": "Right Time: when demand sets the price",
      "06": "Right Channel: the same room, a different cost",
      "07": "Right Conditions: how certainty earns its discount",
      "08": "Right Room: the supplement system",
      "09": "The System",
      "10": "BAR: the single source of truth",
      "11": "Watch BAR move",
      "12": "The Rate Grid",
      "13": "Four rates, four commitments",
      "14": "Which rate would you book?",
      "15": "Sorting the booking",
      "16": "Building the room ladder",
      "17": "Do this, not that",
      "18": "A moment to check before the quiz",
      "19": "Question 1",
      "20": "Questions 2 to 4",
      "21": "Question 5, and your result",
      "22": "The system is already running",
    },
  },
  m2: {
    cover: { num: "MODULE 2", title: "Revenue Tracking Segmentation", dur: "30 minutes", slides: "15 slides", aud: "GM \u00B7 DOS \u00B7 DOR \u00B7 DOM" },
    titles: {
      "01": "Something went wrong last night",
      "02": "What tracking segmentation actually is",
      "03": "The four fields: one booking, four stories",
      "04": "Market Segment",
      "05": "The segment map: six groups, forty codes",
      "06": "Sorting the booking",
      "07": "Two quick checks before you move on",
      "08": "The other three fields",
      "09": "Source: how did this booking arrive?",
      "10": "Origin and Country: who is the guest?",
      "11": "Find the fields on the real system",
      "12": "The Agoda booking: your four decisions",
      "13": "Six rules, six moments",
      "14": "Five questions, real situations",
      "15": "One thing to take back to your desk",
    },
  },
  m3: {
    cover: { num: "MODULE 3", title: "Dusit Rationale Pricing Strategy", dur: "45 minutes", slides: "22 slides", aud: "GM \u00B7 DOS \u00B7 DOR \u00B7 DOM" },
    titles: {
      "01": "A discount that cost more than it saved",
      "02": "The maths of discounting",
      "03": "Pricing Power",
      "04": "Why pricing is your most powerful lever",
      "05": "The profit model: move one lever",
      "06": "Five Ways to Price a Room",
      "07": "Cost-based and demand-based pricing",
      "08": "Value, competition, and reference pricing",
      "09": "The Ascending Strategy",
      "10": "Prices go up, not down",
      "11": "The exception: when repositioning is right",
      "12": "Key Building Principles",
      "13": "Customer-centric and optimisation-focused",
      "14": "Packages: the right way and the wrong way",
      "15": "What a package actually is",
      "16": "Leaders, Fillers, and Killers",
      "17": "Package pricing rules and golden rules",
      "18": "Sorting the package components",
      "19": "Should you drop the rate?",
      "20": "A moment to check before the quiz",
      "21": "Five questions, real situations",
      "22": "Price is what you charge. Value is what they get.",
    },
  },
  m5: {
    cover: { num: "MODULE 5   \u00B7   UNDERSTANDING YOUR MARKET", title: "Defining Your Comp Set", dur: "30 minutes", slides: "15 + 6 brand slides", aud: "GM \u00B7 DOS \u00B7 DOR \u00B7 DOM" },
    titles: {
      "01": "The comp set that looked right, but wasn't",
      "02": "What a comp set actually is, and does",
      "03": "Why getting it wrong is expensive",
      "04": "Three Lenses",
      "05": "Product: what does your hotel physically offer?",
      "06": "Service: what does the guest experience?",
      "07": "Brand: what does the name stand for?",
      "08": "Your property first: the SWOT exercise",
      "09": "Comp Set: Devarana, a Dusit Retreat",
      "10": "Comp Set: Dusit Thani Hotels & Resorts",
      "11": "Comp Set: dusitD2 Hotels & Resorts",
      "12": "Comp Set: Dusit Suites Hotels & Residences",
      "13": "Comp Set: Dusit Princess Hotels & Resorts",
      "14": "Comp Set: ASAI Hotels",
      "15": "Market limitations: when the ideal comp set doesn't exist",
      "16": "A moment to check before the quiz",
      "17": "Five questions, real situations",
      "18": "Your comp set is a decision. Make it deliberately.",
    },
  },
  ota1: {
    cover: { num: "OTA 101", title: "Distribution and the Dusit Ecosystem", dur: "30 minutes", slides: "15 slides", aud: "GM \u00B7 DOS \u00B7 DOR \u00B7 DOM" },
    titles: {
      "01": "Someone is booking your hotel right now",
      "02": "What distribution actually means",
      "03": "B2C versus B2B: who is the customer?",
      "04": "The Dusit Distribution Ecosystem",
      "05": "Connected players: who plugs in directly?",
      "06": "Non-connected players, and what that means",
      "07": "Map the booking to its channel",
      "08": "The systems behind every booking",
      "09": "SynXis: the single source of truth",
      "10": "D-Edge and the channel manager",
      "11": "GDS: the travel agent network",
      "12": "Tracing the booking: how did it get here?",
      "13": "A moment to check before the quiz",
      "14": "Five questions, real situations",
      "15": "Every channel has a cost",
    },
  },
  m6: {
    cover: { num: "MODULE 6   \u00B7   DRIVING RGI", title: "Reading Your Index", dur: "45 minutes", slides: "22 slides", aud: "GM \u00B7 DOS \u00B7 DOR \u00B7 DOM" },
    titles: {
      "01": "82% occupancy. The STAR report says something different.",
      "02": "What the index actually measures",
      "03": "Fair Share",
      "04": "Your slice of the pie: the fair share concept",
      "05": "MPI: your occupancy index",
      "06": "ARI: your rate index",
      "07": "RGI: the one number that matters most",
      "08": "Calculating the index",
      "09": "Reading the STAR report: the Glance tab",
      "10": "The Comp tab: property versus property",
      "11": "Day of week: where are you losing?",
      "12": "Percent Change: is the index moving the right way?",
      "13": "The segmentation index: transient versus group",
      "14": "The hidden loss: when the overall looks fine",
      "15": "Beyond the room: the additional revenue index",
      "16": "The four quadrants: where do you sit?",
      "17": "Case study: Dusit Thani Kyoto, May 2026",
      "18": "Read the data. What would you do?",
      "19": "The levers: how to move your index",
      "20": "Day of week strategy and channel mix",
      "21": "Five questions, real situations",
      "22": "The index does not lie. Your instincts might.",
    },
  },
};

/* ---------- text cleaning ---------- */
function deDash(s) {
  s = s.replace(/\s*\u2014\s*/g, ", ");      // em dash -> comma
  s = s.replace(/,\s*,/g, ", ");
  s = s.replace(/\s+,/g, ",");
  s = s.replace(/,(?=\S)/g, ", ");
  s = s.replace(/\bdo\/dont\b/gi, "do and don't");
  return s;
}
function clean(s) {
  s = s.replace(/\\([*_'"\-])/g, "$1");      // unescape
  s = s.replace(/\*+/g, "");                  // strip bold/italic markers
  s = s.replace(/\u00A0/g, " ");
  s = s.replace(/[ \t]+/g, " ").trim();
  return deDash(s);
}
function titleCase(s) {
  const small = new Set(["a","an","the","and","or","but","of","to","in","on","for","with","at","by","vs"]);
  const acro = { bar:"BAR", ota:"OTA", otas:"OTAs", rgi:"RGI", mpi:"MPI", ari:"ARI", ddp:"DDP", gds:"GDS", crs:"CRS", scorm:"SCORM", ispring:"iSpring", qa:"QA", dos:"DOS", dor:"DOR", dom:"DOM", gm:"GM", rm:"RM", str:"STR", otb:"OTB", pms:"PMS", swot:"SWOT", b2c:"B2C", b2b:"B2B" };
  return s.split(/\s+/).map((w, i) => {
    const mm = /^([A-Za-z0-9&\/]+)([^A-Za-z0-9]*)$/.exec(w);
    const core = mm ? mm[1] : w, tail = mm ? mm[2] : "";
    const lw = core.toLowerCase();
    if (acro[lw]) return acro[lw] + tail;
    if (i !== 0 && small.has(lw)) return lw + tail;
    return core.charAt(0).toUpperCase() + core.slice(1).toLowerCase() + tail;
  }).join(" ");
}

/* ---------- split a cleaned box body into labelled paragraphs ---------- */
function labelSplit(s) {
  // break before a SHORT Title-case label (1-4 words) ending in ':' at a boundary
  s = s.replace(/(^|[.!?)]\s|\s)((?:[A-Z][A-Za-z0-9'’()\/-]*)(?: [A-Za-z0-9'’()\/-]+){0,3}:)\s/g,
    (mm, pre, lab) => `${pre.replace(/\s+$/, "")}\n${lab} `);
  // break before option letters / scenario / feedback markers
  s = s.replace(/\s(?=(?:Scenario \d|Q\d:|Feedback:|[A-D]\.\s))/g, "\n");
  return s.split("\n").map(x => x.trim()).filter(Boolean);
}
function boldLabelLines(lines) {
  return lines.map(l => {
    const m = /^([A-Z][^:]{0,30}:)\s*(.*)$/.exec(l);
    if (m) return `**${m[1]}** ${m[2]}`.trim();
    return l;
  });
}

/* ---------- box-kind detection ---------- */
function kindOf(raw, slideType) {
  const t = raw.replace(/\*+/g, "").trim();
  if (/^VISUAL DIRECTION\b/i.test(t)) return ["visual", t.replace(/^VISUAL DIRECTION\s*/i, "")];
  if (/^ON-?SCREEN TEXT\b/i.test(t)) return ["screen", t.replace(/^ON-?SCREEN TEXT\s*/i, "")];
  if (/^NARRATION SCRIPT\b/i.test(t)) return ["narration", t.replace(/^NARRATION SCRIPT\s*/i, "")];
  if (/^INTERACTION SPEC\b/i.test(t)) return ["interaction", t.replace(/^INTERACTION SPEC\s*/i, "")];
  if (/^BUILDER\b/i.test(t)) return ["builder", t.replace(/^BUILDER[^A-Za-z]*(HOTEL TEAM NOTE)?\s*/i, "")];
  if (/^Question \d+ of \d+/i.test(t)) return ["quiz", t];
  if (slideType === "Interaction" || slideType === "Knowledge Check" || slideType === "Scenario") return ["interaction", t];
  return ["content", t];
}

/* ---------- build body lines for a box ---------- */
function buildBox(kind, body, slideType) {
  if (kind === "narration") {
    return box("narration", [{ t: clean(body), italics: true }]);
  }
  if (kind === "builder") {
    return box("builder", [clean(body)]);
  }
  if (kind === "visual") {
    return box("visual", [clean(body)]);
  }
  if (kind === "quiz") {
    // body: "Question N of M qtext A. .. B. .. ✓ C. .. D. .. Feedback: .."
    const cl = clean(body);
    const qm = /^Question (\d+) of \d+\s*(.*?)\s*(?=A\.\s)/s.exec(cl);
    const qno = qm ? qm[1] : "1";
    const qtext = qm ? qm[2] : cl;
    const rest = qm ? cl.slice(qm[0].length) : "";
    const fbm = /Feedback:\s*(.*)$/s.exec(rest);
    const fb = fbm ? fbm[1].trim() : "";
    const optBlock = fbm ? rest.slice(0, fbm.index) : rest;
    const opts = optBlock.split(/(?=[A-D]\.\s)/).map(o => o.trim()).filter(Boolean);
    const lines = [`**Question ${qno} of 5.** ${qtext.trim()}`];
    opts.forEach(o => {
      if (/\u2713/.test(o)) lines.push(o.replace(/\s*\u2713\s*$/, "").trim() + "  \u2713");
      else lines.push(o);
    });
    if (fb) lines.push(`*Feedback: ${fb}*`);
    return box("quiz", lines);
  }
  // screen / interaction / content -> label-split into readable paragraphs
  const cleaned = clean(body);
  let lines = boldLabelLines(labelSplit(cleaned));
  if (lines.length === 0) lines = [cleaned];
  return box(kind, lines);
}

/* ---------- main parse ---------- */
function run(mdPath, outPath, key) {
  const M = MAPS[key];
  const md = fs.readFileSync(mdPath, "utf8");
  const lines = md.split(/\r?\n/);
  const children = [];

  /* cover */
  const ctr = AlignmentType.CENTER;
  children.push(
    new Paragraph({ alignment: ctr, spacing: { before: 1500, after: 80 }, children: [new TextRun({ text: "DUSIT HOTELS & RESORTS   \u00B7   REVENUE TRAINING PROGRAMME", bold: true, size: 20, color: NAVY, font: FONT, characterSpacing: 30 })] }),
    new Paragraph({ alignment: ctr, spacing: { before: 220, after: 80 }, children: [new TextRun({ text: M.cover.num, bold: true, size: 26, color: GOLD, font: FONT, characterSpacing: 40 })] }),
    new Paragraph({ alignment: ctr, spacing: { after: 100 }, children: [new TextRun({ text: M.cover.title, bold: true, size: 44, color: NAVY, font: FONT })] }),
    new Paragraph({ alignment: ctr, spacing: { after: 320 }, children: [new TextRun({ text: "Instructional Design Blueprint   \u00B7   Version 2.0", size: 22, color: MUTE, font: FONT })] }),
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
    rows: [new TableRow({ children: [ci("DURATION", M.cover.dur), ci("SLIDES", M.cover.slides), ci("DELIVERY", "iSpring / SCORM 1.2"), ci("AUDIENCE", M.cover.aud)] })] }));
  children.push(new Paragraph({ alignment: ctr, spacing: { before: 340 }, children: [new TextRun({ text: "Prepared by DHI Hospitality   \u00B7   June 2026   \u00B7   Confidential", size: 20, color: MUTE, font: FONT })] }));
  children.push(new Paragraph({ children: [new PageBreak()] }));

  /* locate sections */
  const idxNarr = lines.findIndex(l => /^#\s+the narrative/i.test(l));
  const idxGlance = lines.findIndex(l => /^#\s+module at a glance/i.test(l));
  const idxSpec = lines.findIndex(l => /^#\s+slide specifications/i.test(l));

  /* narrative prose + arc */
  children.push(Hh("The Narrative"));
  for (let i = idxNarr + 1; i < idxGlance; i++) {
    const l = lines[i];
    if (!l.trim()) continue;
    if (l.startsWith("|")) {
      // arc table line
      const inner = l.replace(/^\|\s?/, "").replace(/\s?\|$/, "");
      if (/The arc/i.test(inner)) {
        const titleM = /\*\*(The arc[^*]+)\*\*/.exec(inner);
        const arcTitle = titleM ? deDash(titleM[1]) : "The arc";
        const after = inner.slice(inner.indexOf("**", inner.indexOf(titleM[0]) + titleM[0].length - 2));
        // items: **LABEL (slides x)  —  ** text
        const items = [];
        const re = /\*\*([^*]+?\(slides?[^*]*?\))\s*\u2014\s*\*\*([\s\S]*?)(?=\*\*[^*]+?\(slides?|\|$|$)/g;
        let m;
        const src = inner;
        while ((m = re.exec(src)) !== null) {
          const lead = titleCase(m[1].replace(/\s+/g, " ").trim());
          const rest = clean(m[2]);
          if (rest) items.push({ lead, rest });
        }
        if (items.length) children.push(arcBox(arcTitle, items));
      }
      continue;
    }
    children.push(P(clean(l), { after: 140 }));
  }
  children.push(new Paragraph({ children: [new PageBreak()] }));

  /* glance */
  children.push(Hh("Module at a Glance"));
  const glance = [];
  let total = null;
  for (let i = idxGlance + 1; i < idxSpec; i++) {
    const l = lines[i].trim();
    if (!l.startsWith("|")) continue;
    if (/^\|\s*-+/.test(l) || /^\|\s*\*\*#\*\*/.test(l)) continue;
    const cells = l.replace(/^\|/, "").replace(/\|$/, "").split("|").map(c => c.replace(/\*+/g, "").trim());
    if (cells.length === 6 && /^\d+$/.test(cells[0])) {
      const no = cells[0];
      glance.push([no, cells[1], deDash((M.titles[no] || cells[2])), cells[3], cells[4], titleCase(cells[5])]);
    } else if (/^Total:/i.test(cells[0])) {
      total = clean(cells[0]);
    }
  }
  children.push(glanceTable(glance));
  if (total) { children.push(spacer(100)); children.push(box("content", [total])); }
  children.push(new Paragraph({ children: [new PageBreak()] }));

  /* slide specifications */
  children.push(Hh("Slide Specifications"));
  children.push(P("Each slide is fully specified below. The voice-over reads the narration script exactly. The builder follows the visual direction, interaction specs and builder notes. On-screen text and narration complement each other; they do not simply repeat.", { after: 160 }));

  // parse slides
  const quizRows = glance.filter(r => r[1] === "Quiz");
  const hasQuiz = quizRows.length > 0;
  const quiz = { settings: null, objective: null, questions: [] };
  const isQ = txt => /^\s*\*{0,2}Question \d+ of \d+/.test(txt) || /^Question \d+ of \d+/.test(txt.replace(/\*+/g, ""));
  const specStart = idxSpec + 1;
  // find appendix if any
  let idxAppendix = lines.findIndex((l, i) => i > idxSpec && /^#\s+appendix/i.test(l));
  const specEnd = idxAppendix === -1 ? lines.length : idxAppendix;

  const slideHdr = /^\|\s*\*\*(\d{2})\*\*\s*\|\s*\*\*(.+?)\*\*\s*\|\s*\*\*(.+?)\*\*\s*\|\s*\*\*(.+?)\*\*\s*\|$/;
  // is the quiz specified under its own header (M2/3/5/OTA1) or loose (M1)?
  const quizHeadless = !lines.slice(specStart, specEnd).some(l => { const m = slideHdr.exec(l.trim()); return m && /quiz/i.test(m[4]); });
  let cur = null;
  const slides = [];
  for (let i = specStart; i < specEnd; i++) {
    const l = lines[i];
    const t = l.trim();
    const hm = slideHdr.exec(t);
    if (hm) {
      if (cur) slides.push(cur);
      cur = { no: hm[1], title: (MAPS[key].titles[hm[1]] || hm[2]), time: hm[3], type: hm[4], spec: [], boxes: [] };
      continue;
    }
    if (!cur || !t.startsWith("|")) continue;
    if (/^\|\s*-+/.test(t)) continue;
    const inner = t.replace(/^\|\s?/, "").replace(/\s?\|$/, "");
    // 2-col spec row?  "**label** | text"
    const sm = /^\*\*([a-zA-Z][a-zA-Z \/]*?)\*\*\s*\|\s*([\s\S]+)$/.exec(inner);
    if (sm && !/\|/.test(sm[1])) {
      const label = sm[1].trim().toLowerCase();
      // a spec row appearing AFTER this slide already has boxes belongs to the headerless quiz section
      if (cur.boxes.length > 0 && quizHeadless) {
        if (label === "objective" && !quiz.objective) quiz.objective = clean(sm[2]);
        else if (label === "settings") quiz.settings = clean(sm[2]);
        continue;
      }
      if (label === "settings" && quizHeadless) { quiz.settings = clean(sm[2]); continue; }
      cur.spec.push([label, clean(sm[2])]);
      continue;
    }
    // else single-cell box
    if (inner.includes(" | ")) continue; // safety: skip stray multi-col
    if (quizHeadless && isQ(inner)) { quiz.questions.push(inner); continue; }
    cur.boxes.push(inner);
  }
  if (cur) slides.push(cur);

  /* synthesize quiz slides (19-21 etc.) from glance Quiz rows + diverted quiz buffer */
  if (hasQuiz && quiz.questions.length) {
    const qNums = title => {
      const m = (title.match(/\d+/g) || []).map(Number);
      if (/\bto\b|\u2013|\u2014|-/.test(title) && m.length >= 2) { const a = []; for (let n = m[0]; n <= m[1]; n++) a.push(n); return a; }
      return m.length ? [m[0]] : [];
    };
    quizRows.forEach((r, ri) => {
      const slide = { no: r[0], title: r[2], time: r[3], type: "Quiz", spec: [], boxes: [] };
      if (ri === 0 && quiz.objective) slide.spec.push(["objective", quiz.objective]);
      if (ri === 0 && quiz.settings) slide.spec.push(["settings", quiz.settings]);
      qNums(r[2]).forEach(n => { if (quiz.questions[n - 1]) slide.boxes.push(quiz.questions[n - 1]); });
      if (/result/i.test(r[2])) slide.boxes.push("Results. The learner sees their score against the 80% pass mark, with a pass or a retry. On a retry the questions reshuffle. On a pass the score posts to Moodle and the module is marked complete.");
      slides.push(slide);
    });
    slides.sort((a, b) => a.no.localeCompare(b.no));
  }

  slides.forEach((s, idx) => {
    children.push(slideHeader(s.no, deDash(s.title), s.time, s.type));
    children.push(spacer(60));
    if (s.spec.length) { children.push(specTable(s.spec)); children.push(spacer(80)); }
    s.boxes.forEach(raw => {
      const [kind, bodyText] = kindOf(raw, s.type);
      children.push(buildBox(kind, bodyText, s.type));
      children.push(spacer(80));
    });
    if (idx !== slides.length - 1) children.push(spacer(120));
  });

  /* appendix (if present) */
  if (idxAppendix !== -1) {
    children.push(new Paragraph({ children: [new PageBreak()] }));
    children.push(Hh("Appendix: Production Notes"));
    for (let i = idxAppendix + 1; i < lines.length; i++) {
      const l = lines[i];
      const t = l.trim();
      if (!t) continue;
      const sub = /^##\s+(.*)$/.exec(t) || /^\*\*(.+?)\*\*$/.exec(t);
      if (/^#\s+/.test(t)) { children.push(new Paragraph({ spacing: { before: 160, after: 80 }, children: [new TextRun({ text: titleCase(clean(t.replace(/^#\s+/, ""))), bold: true, size: 24, color: NAVY, font: FONT })] })); continue; }
      if (sub && /^##/.test(t)) { children.push(new Paragraph({ spacing: { before: 160, after: 80 }, children: [new TextRun({ text: titleCase(clean(sub[1])), bold: true, size: 24, color: NAVY, font: FONT })] })); continue; }
      const li = /^[-*]\s+(.*)$/.exec(t);
      if (li) { children.push(P(clean(li[1]), { numbering: { reference: "bul", level: 0 } })); continue; }
      if (t.startsWith("|")) continue;
      children.push(P(clean(t), { after: 100 }));
    }
  }

  const doc = new Document({
    numbering: { config: [{ reference: "bul", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 460, hanging: 260 } } } }] }] },
    styles: { default: { document: { run: { font: FONT, size: 20, color: H.INK } } } },
    sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } } }, children }],
  });
  return Packer.toBuffer(doc).then(buf => { fs.writeFileSync(outPath, buf); console.log("WROTE", outPath, buf.length, "bytes |", slides.length, "slides |", glance.length, "glance rows"); });
}

run(process.argv[2], process.argv[3], process.argv[4]);
