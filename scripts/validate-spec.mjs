import { access, readFile } from "node:fs/promises";
import { parse } from "yaml";

const coursePath = process.argv[2] ?? "specs/course.yaml";
const requiredFiles = [
  "specs/constitution.md",
  "specs/slide-generation-spec.md",
  "specs/course-production/proposal.md",
  "specs/course-production/spec.md",
  "specs/course-production/design.md",
  "specs/course-production/tasks.md",
  "docs/authoring-guide.md",
  "docs/facilitator-runbook.md",
  "docs/examples/prompt-patterns.md",
  "rubrics/homework-rubric.md"
];

const sensitivePatterns = [
  /gh[pousr]_[A-Za-z0-9_]{20,}/g,
  /github_pat_[A-Za-z0-9_]{20,}/g,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/g,
  /AKIA[0-9A-Z]{16}/g,
  /(ak|sk|token|secret)\s*[:=]\s*["']?[A-Za-z0-9_\-]{24,}/gi
];

const errors = [];
const warnings = [];
const slideIds = new Set();

function requireValue(value, path) {
  if (value === undefined || value === null || value === "") {
    errors.push(`${path} is required`);
  }
}

function parseFrontmatter(raw, file) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) {
    errors.push(`${file} must start with YAML frontmatter`);
    return { meta: {}, body: raw };
  }
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
    let meta = {};
    try {
      meta = parse(match[1]);
    } catch (error) {
      errors.push(`${file} has invalid slide YAML: ${error.message}`);
    }
    slides.push({ meta, sections: parseSections(match[2]) });
  }
  return slides;
}

function scanSensitive(raw, file) {
  for (const pattern of sensitivePatterns) {
    if (pattern.test(raw)) {
      errors.push(`${file} appears to contain sensitive credential material`);
    }
    pattern.lastIndex = 0;
  }
}

async function validateRequiredFile(file) {
  try {
    const raw = await readFile(file, "utf8");
    if (!raw.trim()) errors.push(`${file} is empty`);
    scanSensitive(raw, file);
  } catch {
    errors.push(`${file} is required`);
  }
}

function validateSlide(slide, file, index) {
  const path = `${file} slide[${index}]`;
  requireValue(slide.meta?.id, `${path}.id`);
  requireValue(slide.meta?.title, `${path}.title`);
  requireValue(slide.meta?.mode, `${path}.mode`);

  if (slide.meta?.id) {
    if (slideIds.has(slide.meta.id)) errors.push(`${path}.id duplicates ${slide.meta.id}`);
    slideIds.add(slide.meta.id);
  }

  if (!slide.sections.headline && !slide.sections.body && !slide.sections["key points"]) {
    errors.push(`${path} needs Headline, Body, or Key Points`);
  }

  if (!slide.sections["speaker notes"]) {
    warnings.push(`${path} has no Speaker Notes`);
  }
}

async function validateModule(moduleRef) {
  try {
    await access(moduleRef.file);
  } catch {
    errors.push(`${moduleRef.file} is missing`);
    return { duration: 0, slides: 0 };
  }

  const raw = await readFile(moduleRef.file, "utf8");
  scanSensitive(raw, moduleRef.file);
  const { meta, body } = parseFrontmatter(raw, moduleRef.file);
  requireValue(meta.id, `${moduleRef.file}.frontmatter.id`);
  requireValue(meta.title, `${moduleRef.file}.frontmatter.title`);
  requireValue(meta.intent, `${moduleRef.file}.frontmatter.intent`);

  if (meta.id && meta.id !== moduleRef.id) {
    errors.push(`${moduleRef.file}.frontmatter.id must match course module id ${moduleRef.id}`);
  }

  if (Number(meta.duration_min || 0) !== Number(moduleRef.duration_min || 0)) {
    errors.push(`${moduleRef.file}.duration_min must match specs/course.yaml`);
  }

  const slides = parseSlides(body, moduleRef.file);
  if (!slides.length) errors.push(`${moduleRef.file} needs at least one :::slide block`);
  slides.forEach((slide, index) => validateSlide(slide, moduleRef.file, index));
  const slideDuration = slides.reduce(
    (sum, slide) => sum + Number(slide.meta?.duration_min || 0),
    0
  );
  const moduleDuration = Number(moduleRef.duration_min || 0);
  if (slideDuration !== moduleDuration) {
    errors.push(
      `${moduleRef.file} slide duration total ${slideDuration} must match module duration ${moduleDuration}`
    );
  }
  return { duration: Number(moduleRef.duration_min || 0), slides: slides.length };
}

const raw = await readFile(coursePath, "utf8");
scanSensitive(raw, coursePath);
const course = parse(raw);

requireValue(course.meta?.id, "meta.id");
requireValue(course.meta?.title, "meta.title");
requireValue(course.meta?.version, "meta.version");
requireValue(course.deck_defaults?.output, "deck_defaults.output");

if (!Array.isArray(course.audience?.learning_outcomes) || !course.audience.learning_outcomes.length) {
  errors.push("audience.learning_outcomes needs at least one outcome");
}

const modules = course.modules ?? [];
if (!modules.length) errors.push("modules needs at least one module");

const moduleIds = new Set(modules.map((module) => module.id));
for (const deck of course.decks ?? []) {
  requireValue(deck.id, `decks.${deck.id}.id`);
  requireValue(deck.output, `decks.${deck.id}.output`);
  if (!Array.isArray(deck.include_modules) || !deck.include_modules.length) {
    errors.push(`deck ${deck.id} must include at least one module`);
  }
  for (const moduleId of deck.include_modules ?? []) {
    if (!moduleIds.has(moduleId)) errors.push(`deck ${deck.id} references unknown module ${moduleId}`);
  }
}

let totalDuration = 0;
let slideCount = 0;
for (const moduleRef of modules) {
  const stats = await validateModule(moduleRef);
  totalDuration += stats.duration;
  slideCount += stats.slides;
}

for (const lab of course.labs ?? []) {
  requireValue(lab.id, `labs.${lab?.id}.id`);
  requireValue(lab.title, `labs.${lab?.id}.title`);
  if (lab.module && !moduleIds.has(lab.module)) errors.push(`lab ${lab.id} references unknown module ${lab.module}`);
  if (!Array.isArray(lab.acceptance) || !lab.acceptance.length) {
    errors.push(`lab ${lab.id} needs acceptance rules`);
  }
}

if (Number(course.learning_design?.duration_min || 0) !== 420) {
  warnings.push("learning_design.duration_min is not 420 minutes");
}

const fullDeck = (course.decks ?? []).find((deck) => deck.id === "full-7h");
if (fullDeck) {
  const durationById = new Map(modules.map((module) => [module.id, Number(module.duration_min || 0)]));
  const fullDuration = fullDeck.include_modules.reduce((sum, id) => sum + (durationById.get(id) ?? 0), 0);
  if (fullDuration !== 420) warnings.push(`full-7h deck duration is ${fullDuration} minutes, expected 420`);
}

for (const file of requiredFiles) {
  await validateRequiredFile(file);
}

if (slideCount < 36) warnings.push(`course has ${slideCount} authored slides; expected at least 36 for a 7-hour course`);

if (warnings.length) {
  console.warn("Warnings:");
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length) {
  console.error("Spec validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Spec OK: ${slideCount} authored slides, ${totalDuration} scheduled minutes`);
