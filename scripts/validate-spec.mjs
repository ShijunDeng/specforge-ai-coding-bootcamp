import { readFile } from "node:fs/promises";
import { parse } from "yaml";

const specPath = process.argv[2] ?? "specs/course.yaml";
const requiredSpecFiles = [
  "specs/constitution.md",
  "specs/slide-generation-spec.md",
  "specs/course-production/proposal.md",
  "specs/course-production/spec.md",
  "specs/course-production/design.md",
  "specs/course-production/tasks.md",
  "docs/authoring-guide.md",
  "docs/facilitator-runbook.md",
  "docs/examples/prompt-patterns.md"
];
const allowedVisuals = new Set([
  "flow",
  "matrix",
  "checklist",
  "contrast",
  "cards",
  "timeline",
  "rubric"
]);

const errors = [];
const warnings = [];
const slideIds = new Set();
const sensitivePatterns = [
  /gh[pousr]_[A-Za-z0-9_]{20,}/g,
  /github_pat_[A-Za-z0-9_]{20,}/g,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/g,
  /AKIA[0-9A-Z]{16}/g
];

function requireValue(value, path) {
  if (value === undefined || value === null || value === "") {
    errors.push(`${path} is required`);
  }
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function validateSlide(slide, path) {
  requireValue(slide.id, `${path}.id`);
  requireValue(slide.title, `${path}.title`);

  if (slide.id) {
    if (slideIds.has(slide.id)) {
      errors.push(`${path}.id duplicates ${slide.id}`);
    }
    slideIds.add(slide.id);
  }

  if (!slide.headline && !slide.body && !asArray(slide.bullets).length) {
    errors.push(`${path} needs headline, body, or bullets`);
  }

  if (!asArray(slide.notes).length) {
    warnings.push(`${path} has no speaker notes`);
  }

  if (slide.visual?.type && !allowedVisuals.has(slide.visual.type)) {
    errors.push(`${path}.visual.type "${slide.visual.type}" is not supported`);
  }
}

function validateCourse(course) {
  requireValue(course.meta?.id, "meta.id");
  requireValue(course.meta?.title, "meta.title");
  requireValue(course.meta?.version, "meta.version");
  requireValue(course.deck?.output, "deck.output");

  if (!asArray(course.audience?.learning_outcomes).length) {
    errors.push("audience.learning_outcomes needs at least one outcome");
  }

  const modules = asArray(course.modules);
  if (!modules.length) {
    errors.push("modules needs at least one module");
  }

  let totalDuration = 0;
  let slideCount = 0;

  modules.forEach((module, moduleIndex) => {
    const modulePath = `modules[${moduleIndex}]`;
    requireValue(module.id, `${modulePath}.id`);
    requireValue(module.title, `${modulePath}.title`);
    totalDuration += Number(module.duration_min || 0);

    const segments = asArray(module.segments);
    if (!segments.length) {
      errors.push(`${modulePath}.segments needs at least one segment`);
    }

    segments.forEach((segment, segmentIndex) => {
      const segmentPath = `${modulePath}.segments[${segmentIndex}]`;
      requireValue(segment.id, `${segmentPath}.id`);
      requireValue(segment.title, `${segmentPath}.title`);

      const slides = asArray(segment.slides);
      if (!slides.length) {
        errors.push(`${segmentPath}.slides needs at least one slide`);
      }
      slides.forEach((slide, slideIndex) => {
        slideCount += 1;
        validateSlide(slide, `${segmentPath}.slides[${slideIndex}]`);
      });
    });
  });

  asArray(course.labs).forEach((lab, index) => {
    const labPath = `labs[${index}]`;
    requireValue(lab.id, `${labPath}.id`);
    requireValue(lab.title, `${labPath}.title`);
    if (!asArray(lab.acceptance).length) {
      errors.push(`${labPath}.acceptance needs at least one acceptance rule`);
    }
  });

  if (slideCount < 28) {
    warnings.push(`course has ${slideCount} authored slides; expected at least 28`);
  }

  return { totalDuration, slideCount };
}

function validateNoSensitiveMaterial(raw, path) {
  sensitivePatterns.forEach((pattern) => {
    const matches = raw.match(pattern);
    if (matches?.length) {
      errors.push(`${path} appears to contain sensitive credential material`);
    }
  });
}

async function validateRequiredSpecFiles() {
  for (const file of requiredSpecFiles) {
    try {
      const raw = await readFile(file, "utf8");
      if (!raw.trim()) {
        errors.push(`${file} is empty`);
      }
      validateNoSensitiveMaterial(raw, file);
    } catch {
      errors.push(`${file} is required`);
    }
  }
}

const raw = await readFile(specPath, "utf8");
validateNoSensitiveMaterial(raw, specPath);
const course = parse(raw);
const stats = validateCourse(course);
await validateRequiredSpecFiles();

if (warnings.length) {
  console.warn("Warnings:");
  warnings.forEach((warning) => console.warn(`- ${warning}`));
}

if (errors.length) {
  console.error("Spec validation failed:");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(
  `Spec OK: ${stats.slideCount} authored slides, ${stats.totalDuration} scheduled minutes`
);
