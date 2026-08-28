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


module.exports = {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign, PageBreak, LevelFormat,
  NAVY, BLUE, GOLD, INK, MUTE, FONT, CW, HDR_NUM, TYPE_COLOR, typeText, KIND,
  parseInline, P, spacer, box, arcBox, slideHeader, noBorders, specTable, glanceTable, H,
};
