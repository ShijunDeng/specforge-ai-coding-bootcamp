import { mkdir, readFile, access } from "node:fs/promises";
import path from "node:path";
import pptxgen from "pptxgenjs";
import { parse } from "yaml";

const PPTX_SKILL_PATH = "/home/dsj/skills/open-skills/pptx";
const args = process.argv.slice(2);

function readArg(name) {
  const flag = `--${name}`;
  const direct = args.find((arg) => arg.startsWith(`${flag}=`));
  if (direct) return direct.slice(flag.length + 1);
  const index = args.indexOf(flag);
  if (index >= 0) return args[index + 1];
  return undefined;
}

function parseFrontmatter(raw, file) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) throw new Error(`${file} must start with YAML frontmatter`);
  return {
    meta: parse(match[1]),
    body: raw.slice(match[0].length)
  };
}

function parseSections(body) {
  const matches = [...body.matchAll(/^###\s+(.+?)\s*$/gm)];
  const sections = {};
  matches.forEach((match, index) => {
    const key = match[1].trim().toLowerCase();
    const start = match.index + match[0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index : body.length;
    sections[key] = body.slice(start, end).trim();
  });
  return sections;
}

function parseSlides(body, file) {
  const slideRegex = /^:::slide\s*\n([\s\S]*?)^:::\s*$\n?([\s\S]*?)(?=^:::slide\s*$|(?![\s\S]))/gm;
  const slides = [];
  for (const match of body.matchAll(slideRegex)) {
    slides.push({ meta: parse(match[1]), sections: parseSections(match[2]), file });
  }
  return slides;
}

async function readModule(moduleRef) {
  const raw = await readFile(moduleRef.file, "utf8");
  const parsed = parseFrontmatter(raw, moduleRef.file);
  return {
    ...moduleRef,
    spec: parsed.meta,
    slides: parseSlides(parsed.body, moduleRef.file)
  };
}

function cleanMarkdown(markdown = "") {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/^\s*[-*]\s+/gm, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\|/g, " | ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function bulletLines(markdown = "", limit = 6) {
  const lines = markdown
    .split(/\r?\n/)
    .map((line) => line.replace(/^\s*[-*]\s+/, "").trim())
    .filter(Boolean)
    .filter((line) => !/^[:|\-\s]+$/.test(line));
  return lines.slice(0, limit);
}

function outputBaseName(output) {
  return path.basename(output, ".md").replace(/\.slidev$/, "");
}

function resolveDeck(course, customConfig) {
  if (customConfig?.deck) return customConfig.deck;
  const deckId = readArg("deck") ?? "full-7h";
  const deck = (course.decks ?? []).find((item) => item.id === deckId);
  if (!deck) throw new Error(`Unknown deck "${deckId}"`);
  return deck;
}

function addHeader(slide, title, subtitle = "") {
  slide.background = { color: "FFFFFF" };
  slide.addShape("rect", { x: 0, y: 0, w: 13.333, h: 0.16, fill: { color: "C0392B" }, line: { color: "C0392B" } });
  slide.addShape("rect", { x: 0.45, y: 0.42, w: 0.06, h: 0.42, fill: { color: "C0392B" }, line: { color: "C0392B" } });
  slide.addText(title, { x: 0.62, y: 0.34, w: 11.6, h: 0.38, fontFace: "Microsoft YaHei", fontSize: 22, bold: true, color: "1A1A1A", margin: 0 });
  if (subtitle) {
    slide.addText(subtitle, { x: 0.62, y: 0.76, w: 11.6, h: 0.22, fontFace: "Microsoft YaHei", fontSize: 9, color: "666666", margin: 0 });
  }
}

function addFooter(slide, pageNumber) {
  slide.addShape("line", { x: 0.45, y: 7.06, w: 12.45, h: 0, line: { color: "CCCCCC", width: 0.5 } });
  slide.addText(`Generated with pptx skill: ${PPTX_SKILL_PATH}`, {
    x: 0.45,
    y: 7.14,
    w: 9.5,
    h: 0.18,
    fontFace: "Microsoft YaHei",
    fontSize: 7,
    color: "666666",
    margin: 0
  });
  slide.addText(String(pageNumber).padStart(2, "0"), {
    x: 12.35,
    y: 7.12,
    w: 0.5,
    h: 0.18,
    fontFace: "Microsoft YaHei",
    fontSize: 8,
    color: "666666",
    align: "right",
    margin: 0
  });
}

function addBulletList(slide, lines, x, y, w, h, fontSize = 11) {
  const rich = lines.map((line, index) => ({
    text: line,
    options: { bullet: true, breakLine: index < lines.length - 1, fontSize, color: "333333" }
  }));
  slide.addText(rich.length ? rich : " ", {
    x,
    y,
    w,
    h,
    fontFace: "Microsoft YaHei",
    fontSize,
    color: "333333",
    breakLine: false,
    fit: "shrink",
    margin: 0.06,
    paraSpaceAfter: 2
  });
}

function addTitleSlide(pres, course, deck) {
  const slide = pres.addSlide();
  slide.background = { color: "FFFFFF" };
  slide.addShape("rect", { x: 0, y: 0, w: 3.35, h: 7.5, fill: { color: "C0392B" }, line: { color: "C0392B" } });
  slide.addText("SPEC\nDRIVEN\nCOURSEWARE", {
    x: 0.52,
    y: 0.7,
    w: 2.2,
    h: 1.8,
    fontFace: "Arial",
    fontSize: 20,
    bold: true,
    color: "FFFFFF",
    breakLine: false,
    margin: 0
  });
  slide.addText(course.meta.title, { x: 4.0, y: 1.25, w: 8.2, h: 0.6, fontFace: "Microsoft YaHei", fontSize: 30, bold: true, color: "1A1A1A", margin: 0 });
  slide.addText(course.meta.subtitle, { x: 4.0, y: 2.05, w: 8.2, h: 0.4, fontFace: "Microsoft YaHei", fontSize: 15, color: "666666", margin: 0 });
  slide.addText([course.meta.version, course.meta.audience_label, deck.title].filter(Boolean).join("  |  "), {
    x: 4.0,
    y: 5.95,
    w: 8.2,
    h: 0.3,
    fontFace: "Microsoft YaHei",
    fontSize: 10,
    color: "666666",
    margin: 0
  });
}

function addAgendaSlide(pres, modules, deck, pageNumber) {
  const slide = pres.addSlide();
  addHeader(slide, `课程地图：${deck.title}`, "模块、时长与可观察产出");
  const rows = modules.map((module, index) => [
    `${index + 1}. ${module.title}`,
    module.duration_min ? `${module.duration_min} 分钟` : "课前",
    (module.spec.outcomes ?? []).slice(0, 2).join("；")
  ]);
  slide.addTable([["模块", "时长", "学员产出"], ...rows], {
    x: 0.55,
    y: 1.25,
    w: 12.25,
    h: 5.5,
    border: { type: "solid", color: "CCCCCC", pt: 0.5 },
    fontFace: "Microsoft YaHei",
    fontSize: 8,
    color: "333333",
    margin: 0.05,
    fill: "FFFFFF",
    autoFit: false,
    valign: "mid",
    fit: "shrink",
    colW: [3.6, 1.2, 7.45],
    bold: false
  });
  addFooter(slide, pageNumber);
}

function addModuleDivider(pres, module, index, pageNumber) {
  const slide = pres.addSlide();
  slide.background = { color: "FFFFFF" };
  slide.addShape("rect", { x: 0, y: 0, w: 13.333, h: 0.16, fill: { color: "C0392B" }, line: { color: "C0392B" } });
  slide.addText(String(index + 1).padStart(2, "0"), { x: 0.8, y: 1.15, w: 1.6, h: 0.8, fontFace: "Arial", fontSize: 44, bold: true, color: "C0392B", margin: 0 });
  slide.addText(module.title, { x: 2.45, y: 1.28, w: 9.6, h: 0.55, fontFace: "Microsoft YaHei", fontSize: 27, bold: true, color: "1A1A1A", margin: 0 });
  slide.addText(module.spec.intent ?? "", { x: 2.45, y: 2.15, w: 9.6, h: 0.8, fontFace: "Microsoft YaHei", fontSize: 14, color: "333333", fit: "shrink", margin: 0 });
  addBulletList(slide, module.spec.outcomes ?? [], 2.45, 3.35, 9.7, 2.5, 12);
  addFooter(slide, pageNumber);
}

function addContentSlide(pres, slideSpec, module, pageNumber) {
  const slide = pres.addSlide();
  addHeader(slide, slideSpec.meta.title, `${module.title}  |  ${slideSpec.meta.mode ?? ""}  |  ${slideSpec.meta.duration_min ?? 0} 分钟`);

  const headline = cleanMarkdown(slideSpec.sections.headline ?? "");
  const body = cleanMarkdown(slideSpec.sections.body ?? "");
  const keyPoints = bulletLines(slideSpec.sections["key points"] ?? "", 7);
  const visual = bulletLines(slideSpec.sections.visual ?? "", 6);
  const takeaway = cleanMarkdown(slideSpec.sections.takeaway ?? "");

  slide.addText(headline, { x: 0.62, y: 1.1, w: 7.55, h: 0.55, fontFace: "Microsoft YaHei", fontSize: 17, bold: true, color: "1A1A1A", fit: "shrink", margin: 0 });
  slide.addText(body, { x: 0.62, y: 1.78, w: 7.55, h: 1.15, fontFace: "Microsoft YaHei", fontSize: 10.5, color: "333333", fit: "shrink", valign: "top", margin: 0.03, breakLine: false });
  addBulletList(slide, keyPoints, 0.8, 3.15, 7.25, 2.55, 10.2);

  slide.addShape("rect", { x: 8.65, y: 1.18, w: 4.05, h: 4.95, fill: { color: "F5F5F5" }, line: { color: "CCCCCC", width: 0.5 } });
  slide.addText("Visual / Board", { x: 8.9, y: 1.42, w: 3.5, h: 0.25, fontFace: "Arial", fontSize: 9, bold: true, color: "C0392B", margin: 0 });
  addBulletList(slide, visual, 8.9, 1.86, 3.45, 2.85, 9.2);
  slide.addShape("rect", { x: 8.9, y: 5.05, w: 3.45, h: 0.56, fill: { color: "FFFFFF" }, line: { color: "C0392B", width: 0.8 } });
  slide.addText(takeaway, { x: 9.05, y: 5.16, w: 3.15, h: 0.33, fontFace: "Microsoft YaHei", fontSize: 8.6, color: "333333", bold: true, fit: "shrink", margin: 0 });
  addFooter(slide, pageNumber);
}

await access(path.join(PPTX_SKILL_PATH, "SKILL.md"));
const coursePath = readArg("course") ?? "specs/course.yaml";
const configPath = readArg("config");
const course = parse(await readFile(coursePath, "utf8"));
const customConfig = configPath ? parse(await readFile(configPath, "utf8")) : undefined;
const deck = resolveDeck(course, customConfig);
const includeModuleIds = (readArg("modules")?.split(",").map((item) => item.trim()).filter(Boolean)) ?? deck.include_modules ?? [];
const moduleRefs = new Map((course.modules ?? []).map((module) => [module.id, module]));
const modules = [];
for (const id of includeModuleIds) {
  const moduleRef = moduleRefs.get(id);
  if (!moduleRef) throw new Error(`Unknown module "${id}"`);
  modules.push(await readModule(moduleRef));
}

const output = readArg("output") ?? path.join("dist", `${deck.export_filename ?? outputBaseName(deck.output ?? course.deck_defaults?.output ?? course.meta.id)}.pptx`);
await mkdir(path.dirname(output), { recursive: true });

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.author = "SpecForge Courseware Pipeline";
pres.company = "SpecForge";
pres.subject = `Generated with ${PPTX_SKILL_PATH}`;
pres.title = `${course.meta.title} - ${deck.title}`;
pres.lang = "zh-CN";
pres.theme = {
  headFontFace: "Microsoft YaHei",
  bodyFontFace: "Microsoft YaHei",
  lang: "zh-CN"
};

let page = 1;
addTitleSlide(pres, course, deck);
page += 1;
addAgendaSlide(pres, modules, deck, page);
page += 1;
modules.forEach((module, moduleIndex) => {
  addModuleDivider(pres, module, moduleIndex, page);
  page += 1;
  module.slides.forEach((slideSpec) => {
    addContentSlide(pres, slideSpec, module, page);
    page += 1;
  });
});

await pres.writeFile({ fileName: output });
console.log(`Generated ${output}`);
console.log(`PPTX skill: ${PPTX_SKILL_PATH}`);
