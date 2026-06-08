import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { parse } from "yaml";

const args = process.argv.slice(2);

function readArg(name) {
  const flag = `--${name}`;
  const direct = args.find((arg) => arg.startsWith(`${flag}=`));
  if (direct) return direct.slice(flag.length + 1);
  const index = args.indexOf(flag);
  if (index >= 0) return args[index + 1];
  return undefined;
}

function hasArg(name) {
  return args.includes(`--${name}`);
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function modulesOutputPath(moduleIds) {
  const slug = slugify(moduleIds.join("-")) || "custom";
  return `build/slides/custom-${slug}.slidev.md`;
}

function targetOutputPath(target, moduleIds, deck, course, modulesOverride = false) {
  const normalizedTarget = normalizeTarget(target);
  if (normalizedTarget === "slidev") {
    return modulesOutputPath(moduleIds);
  }
  const slug = slugify(modulesOverride ? moduleIds.join("-") : deck?.id ?? course?.meta?.id) || "custom";
  return `build/${normalizedTarget}/${slug}.md`;
}

function outputBaseName(output) {
  return path.basename(output, ".md").replace(/\.slidev$/, "");
}

function normalizeTarget(target = "slidev") {
  const value = String(target || "slidev").toLowerCase();
  if (["slidev", "slides", "ppt"].includes(value)) return "slidev";
  if (["llm", "notebooklm", "notebook-lm", "knowledge", "markdown", "plain"].includes(value)) {
    return "llm";
  }
  if (
    [
      "ppt-ai",
      "presentation-ai",
      "outline",
      "deck-outline",
      "gamma",
      "tome",
      "canva",
      "beautifulai",
      "beautiful-ai",
      "powerpoint-copilot",
      "copilot",
      "google-slides",
      "deckai",
      "riff"
    ].includes(value)
  ) {
    return "ppt-ai";
  }
  throw new Error(`Unknown target "${target}". Supported targets: slidev, llm/notebooklm, ppt-ai/gamma/tome/canva/beautifulai.`);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function inlineMarkdown(value = "") {
  const escaped = escapeHtml(value);
  return escaped
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function parseMarkdownTable(lines) {
  const rows = lines
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim())
    )
    .filter((row) => !row.every((cell) => /^:?-{3,}:?$/.test(cell)));

  if (rows.length < 2) return `<pre>${escapeHtml(lines.join("\n"))}</pre>`;

  const [headers, ...bodyRows] = rows;
  return `<table class="spec-table"><thead><tr>${headers
    .map((header) => `<th>${inlineMarkdown(header)}</th>`)
    .join("")}</tr></thead><tbody>${bodyRows
    .map(
      (row) =>
        `<tr>${row.map((cell) => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`
    )
    .join("")}</tbody></table>`;
}

function markdownLite(markdown = "") {
  const lines = markdown.trim().split(/\r?\n/);
  if (!markdown.trim()) return "";

  const html = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i += 1;
      continue;
    }

    if (line.trim().startsWith("```")) {
      const lang = line.trim().slice(3);
      const code = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        code.push(lines[i]);
        i += 1;
      }
      i += 1;
      html.push(`<pre class="code-block"><code data-lang="${escapeHtml(lang)}">${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    if (line.trim().startsWith("|")) {
      const table = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        table.push(lines[i]);
        i += 1;
      }
      html.push(parseMarkdownTable(table));
      continue;
    }

    if (/^\s*-\s+/.test(line)) {
      const items = [];
      while (i < lines.length && /^\s*-\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*-\s+/, ""));
        i += 1;
      }
      html.push(`<ul>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      continue;
    }

    const paragraph = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^\s*-\s+/.test(lines[i]) &&
      !lines[i].trim().startsWith("|") &&
      !lines[i].trim().startsWith("```")
    ) {
      paragraph.push(lines[i]);
      i += 1;
    }
    html.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
  }

  return html.join("\n");
}

function visualItems(markdown = "") {
  const lines = markdown.trim().split(/\r?\n/);
  return lines
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !line.startsWith("|") && !line.startsWith("```"))
    .map((line) => line.replace(/^[-*]\s+/, "").replace(/^\d+[.)]\s+/, "").trim())
    .filter(Boolean)
    .slice(0, 8);
}

function visualLabel(item = "") {
  const match = item.match(/^(.+?)[：:]\s*(.+)$/);
  if (!match) return { title: item, body: "" };
  return { title: match[1], body: match[2] };
}

function renderVisualWidget(visual = "", type = "") {
  if (!visual.trim()) return "";
  const normalizedType = String(type || "").toLowerCase();

  if (normalizedType === "matrix" || visual.trim().startsWith("|")) {
    return `<div class="visual-widget matrix-widget">${markdownLite(visual)}</div>`;
  }

  const items = visualItems(visual);
  if (!items.length) {
    return `<div class="visual-widget cards-widget">${markdownLite(visual)}</div>`;
  }

  if (normalizedType === "flow") {
    return `<div class="visual-widget flow-widget">${items
      .map(
        (item, index) =>
          `<div class="flow-step"><span class="node-index">${String(index + 1).padStart(2, "0")}</span><p>${inlineMarkdown(item)}</p></div>`
      )
      .join("")}</div>`;
  }

  if (normalizedType === "checklist") {
    const isCompact = items.length >= 4 && items.every((item) => item.length <= 18);
    return `<div class="visual-widget checklist-widget ${isCompact ? "checklist-grid" : ""}">${items
      .map(
        (item) =>
          `<div class="check-row"><span class="check-mark"></span><p>${inlineMarkdown(item)}</p></div>`
      )
      .join("")}</div>`;
  }

  if (normalizedType === "timeline") {
    return `<div class="visual-widget timeline-widget">${items
      .map((item) => {
        const { title, body } = visualLabel(item);
        return `<div class="timeline-item"><span class="timeline-dot"></span><div><strong>${inlineMarkdown(title)}</strong>${body ? `<p>${inlineMarkdown(body)}</p>` : ""}</div></div>`;
      })
      .join("")}</div>`;
  }

  if (normalizedType === "contrast") {
    const panels = items.slice(0, 2).map(visualLabel);
    return `<div class="visual-widget contrast-widget">${panels
      .map(
        (panel, index) =>
          `<div class="contrast-panel ${index === 1 ? "contrast-panel-strong" : ""}"><span class="contrast-kicker">${index === 1 ? "目标状态" : "常见状态"}</span><strong>${inlineMarkdown(panel.title)}</strong>${panel.body ? `<p>${inlineMarkdown(panel.body)}</p>` : ""}</div>`
      )
      .join("")}</div>`;
  }

  return `<div class="visual-widget cards-widget">${items
    .map(
      (item, index) =>
        `<div class="visual-card-item"><span class="card-index">${String(index + 1).padStart(2, "0")}</span><p>${inlineMarkdown(item)}</p></div>`
    )
    .join("")}</div>`;
}

function parseFrontmatter(raw, file) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) {
    throw new Error(`${file} must start with YAML frontmatter`);
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
    const meta = parse(match[1]);
    const sections = parseSections(match[2]);
    if (!meta?.id || !meta?.title) {
      throw new Error(`${file} has a slide without id or title`);
    }
    slides.push({ meta, sections });
  }
  return slides;
}

async function readModule(moduleRef) {
  const raw = await readFile(moduleRef.file, "utf8");
  const parsed = parseFrontmatter(raw, moduleRef.file);
  const slides = parseSlides(parsed.body, moduleRef.file);
  return {
    ...moduleRef,
    spec: parsed.meta,
    slides
  };
}

function slideSeparator(frontmatter = {}) {
  const entries = Object.entries(frontmatter).filter(([, value]) => value !== undefined && value !== "");
  if (!entries.length) return "\n---\n";
  return `\n---\n${entries.map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join("\n")}\n---\n`;
}

function chips(items = []) {
  return `<div class="chips">${items
    .filter(Boolean)
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("")}</div>`;
}

function renderSpeakerNotes(notes = "") {
  if (!notes.trim()) return "";
  return `\n<!--\n${notes.trim()}\n-->\n`;
}

function renderContentSlide(slide, module) {
  const { meta, sections } = slide;
  const headline = sections.headline ?? "";
  const body = sections.body ?? "";
  const keyPoints = sections["key points"] ?? "";
  const visual = sections.visual ?? "";
  const activity = sections.activity ?? "";
  const takeaway = sections.takeaway ?? "";
  const notes = sections["speaker notes"] ?? "";

  return `${slideSeparator({
    layout: meta.layout ?? "default",
    class: ["content-slide", meta.mode, meta.visual].filter(Boolean).join(" ")
  })}
# ${meta.title}

${chips([module.title, meta.mode, meta.duration_min ? `${meta.duration_min} 分钟` : "课前"])}

<div class="slide-shell">
<section class="primary-pane">
${headline ? `<h2>${inlineMarkdown(headline)}</h2>` : ""}
${body ? `<div class="body-copy">${markdownLite(body)}</div>` : ""}
${keyPoints ? `<div class="key-points">${markdownLite(keyPoints)}</div>` : ""}
${activity ? `<div class="activity-box">${markdownLite(activity)}</div>` : ""}
</section>
<aside class="visual-pane">
${renderVisualWidget(visual, meta.visual)}
${takeaway ? `<div class="takeaway">${inlineMarkdown(takeaway)}</div>` : ""}
</aside>
</div>
${renderSpeakerNotes(notes)}`;
}

function renderModuleDivider(module, index) {
  const outcomes = module.spec.outcomes ?? [];
  return `${slideSeparator({ layout: "default", class: "module-divider" })}
# ${String(index + 1).padStart(2, "0")} · ${module.title}

<div class="module-grid">
<div>
<p class="eyebrow">${module.duration_min ? `${module.duration_min} 分钟` : "课前材料"}</p>
<h2>${inlineMarkdown(module.spec.intent ?? module.intent ?? "")}</h2>
</div>
<div class="primary-pane">
${markdownLite(outcomes.map((outcome) => `- ${outcome}`).join("\n"))}
</div>
</div>`;
}

function renderAgenda(modules, deck) {
  const rows = modules.map((module) => [
    module.title,
    module.duration_min ? `${module.duration_min} 分钟` : "课前",
    (module.spec.outcomes ?? []).join("；")
  ]);
  const total = modules.reduce((sum, module) => sum + Number(module.duration_min || 0), 0);
  return `${slideSeparator({ layout: "default", class: "agenda-slide" })}
# 课程地图：${deck.title}

${parseMarkdownTable([
  "| 模块 | 时长 | 学员产出 |",
  "| --- | --- | --- |",
  ...rows.map((row) => `| ${row.join(" | ")} |`)
])}

<div class="takeaway">当前组合约 ${total} 分钟。可通过 <code>--deck</code>、<code>--modules</code> 或 <code>--config</code> 自定义章节组合。</div>`;
}

function renderLabs(course, includeModules) {
  const labs = (course.labs ?? []).filter((lab) => includeModules.has(lab.module));
  if (!labs.length) return "";
  const rows = labs.map((lab) => [
    lab.title,
    lab.duration_min ? `${lab.duration_min} 分钟` : "课外",
    (lab.acceptance ?? []).join("；")
  ]);
  return `${slideSeparator({ layout: "default", class: "content-slide lab-overview" })}
# 实操与作业验收总览

${parseMarkdownTable([
  "| 任务 | 时长 | 验收标准 |",
  "| --- | --- | --- |",
  ...rows.map((row) => `| ${row.join(" | ")} |`)
])}

<div class="takeaway">实操成功标准是证据链完整，而不是口头确认已经完成。</div>`;
}

function renderAssessment(course, includeModules) {
  if (!includeModules.has("assessment-rollout")) return "";
  const rows = (course.assessment?.criteria ?? []).map((item) => [
    item.name,
    `${item.weight}%`,
    item.evidence
  ]);
  if (!rows.length) return "";
  return `${slideSeparator({ layout: "default", class: "content-slide assessment-slide" })}
# 大作业评分 Rubric

${parseMarkdownTable([
  "| 维度 | 权重 | 证据 |",
  "| --- | --- | --- |",
  ...rows.map((row) => `| ${row.join(" | ")} |`)
])}

<div class="takeaway">${escapeHtml(course.assessment.pass_rule ?? "")}</div>`;
}

function section(title, content = "") {
  if (!content.trim()) return "";
  return `### ${title}\n${content.trim()}`;
}

function renderPlainSlide(slide, module, index, includeNotes = false) {
  const { meta, sections } = slide;
  const chunks = [
    `## ${index}. ${meta.title}`,
    `- Module: ${module.title}`,
    `- Mode: ${meta.mode}`,
    `- Duration: ${meta.duration_min ? `${meta.duration_min} minutes` : "prework"}`,
    meta.visual ? `- Visual type: ${meta.visual}` : "",
    section("Headline", sections.headline ?? ""),
    section("Body", sections.body ?? ""),
    section("Key Points", sections["key points"] ?? ""),
    section("Visual Brief", sections.visual ?? ""),
    section("Activity", sections.activity ?? ""),
    section("Takeaway", sections.takeaway ?? ""),
    includeNotes ? section("Speaker Notes", sections["speaker notes"] ?? "") : ""
  ];
  return chunks.filter(Boolean).join("\n\n");
}

function renderPlainAgenda(modules, deck) {
  const total = modules.reduce((sum, module) => sum + Number(module.duration_min || 0), 0);
  const rows = modules
    .map((module, index) => {
      const outcomes = (module.spec.outcomes ?? []).map((item) => `     - ${item}`).join("\n");
      return `${index + 1}. ${module.title}\n   - Duration: ${module.duration_min ? `${module.duration_min} minutes` : "prework"}\n   - Outcomes:\n${outcomes}`;
    })
    .join("\n\n");
  return `## Deck Agenda: ${deck.title}\n\nTotal: about ${total} minutes.\n\n${rows}`;
}

function renderPlainLabs(course, includeModules) {
  const labs = (course.labs ?? []).filter((lab) => includeModules.has(lab.module));
  if (!labs.length) return "";
  return `# Labs and Homework\n\n${labs
    .map((lab) => {
      const constraints = (lab.constraints ?? []).map((item) => `- ${item}`).join("\n");
      const acceptance = (lab.acceptance ?? []).map((item) => `- ${item}`).join("\n");
      return `## ${lab.title}\n\nModule: ${lab.module}\nDuration: ${lab.duration_min ? `${lab.duration_min} minutes` : "after class"}\n\n### Objective\n${lab.objective}\n\n### Constraints\n${constraints}\n\n### Acceptance\n${acceptance}`;
    })
    .join("\n\n")}`;
}

function renderPlainAssessment(course, includeModules) {
  if (!includeModules.has("assessment-rollout") || !course.assessment) return "";
  const criteria = (course.assessment.criteria ?? [])
    .map((item) => `- ${item.name}: ${item.weight}% - ${item.evidence}`)
    .join("\n");
  const redLines = (course.assessment.red_lines ?? []).map((item) => `- ${item}`).join("\n");
  return `# Assessment Rubric\n\nPass rule: ${course.assessment.pass_rule ?? ""}\n\n## Criteria\n${criteria}\n\n## Red Lines\n${redLines}`;
}

function renderPlainDeck(course, deck, modules, includeModules, includeNotes = false) {
  const chunks = [
    `# ${course.meta.title}`,
    course.meta.subtitle ? `> ${course.meta.subtitle}` : "",
    `Audience: ${course.meta.audience_label ?? course.audience?.primary ?? ""}`,
    `Version: ${course.meta.version ?? ""}`,
    "",
    "## Course Summary",
    course.meta.summary ?? "",
    "",
    "## Learning Design",
    course.learning_design?.promise ?? "",
    "",
    "### Principles",
    (course.learning_design?.principles ?? []).map((item) => `- ${item}`).join("\n"),
    "",
    "### Learning Outcomes",
    (course.audience?.learning_outcomes ?? []).map((item) => `- ${item}`).join("\n"),
    renderPlainAgenda(modules, deck)
  ];

  let slideIndex = 1;
  for (const [moduleIndex, module] of modules.entries()) {
    chunks.push(`# Module ${moduleIndex + 1}: ${module.title}`);
    chunks.push(`Duration: ${module.duration_min ? `${module.duration_min} minutes` : "prework"}`);
    chunks.push(`Intent: ${module.spec.intent ?? ""}`);
    chunks.push("## Outcomes");
    chunks.push((module.spec.outcomes ?? []).map((outcome) => `- ${outcome}`).join("\n"));
    module.slides.forEach((slide) => {
      chunks.push(renderPlainSlide(slide, module, slideIndex, includeNotes));
      slideIndex += 1;
    });
  }

  chunks.push(renderPlainLabs(course, includeModules));
  chunks.push(renderPlainAssessment(course, includeModules));
  return chunks.filter((chunk) => chunk !== undefined && chunk !== "").join("\n\n");
}

function compactMarkdown(value = "") {
  return value
    .trim()
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

function renderPptAiSlide(slide, module, index, includeNotes = false) {
  const { meta, sections } = slide;
  const chunks = [
    `## Slide ${index}: ${meta.title}`,
    `Type: ${meta.mode}`,
    `Module: ${module.title}`,
    `Estimated time: ${meta.duration_min ? `${meta.duration_min} minutes` : "prework"}`,
    "",
    "### Main Message",
    compactMarkdown(sections.headline ?? meta.title),
    "",
    "### On-Slide Text",
    compactMarkdown([sections.body, sections["key points"]].filter(Boolean).join("\n")),
    "",
    "### Visual Direction",
    `Layout: ${meta.visual ?? "cards"}`,
    compactMarkdown(sections.visual ?? ""),
    "",
    "### Speaker Takeaway",
    compactMarkdown(sections.takeaway ?? "")
  ];
  if (includeNotes && sections["speaker notes"]) {
    chunks.push("", "### Speaker Notes", compactMarkdown(sections["speaker notes"]));
  }
  return chunks.filter((chunk) => chunk !== undefined).join("\n");
}

function renderPptAiDeck(course, deck, modules, includeModules, includeNotes = false) {
  const total = modules.reduce((sum, module) => sum + Number(module.duration_min || 0), 0);
  const chunks = [
    `# ${course.meta.title}`,
    "",
    "## Deck Generation Brief",
    `Audience: ${course.meta.audience_label ?? course.audience?.primary ?? ""}`,
    `Deck: ${deck.title}`,
    `Duration: about ${total} minutes`,
    `Tone: professional classroom training, student-facing, practical, engineering-oriented`,
    `Visual style: clean technical training deck, diagrams over decorative stock imagery, readable 16:9 slides`,
    "",
    "## Course Promise",
    course.learning_design?.promise ?? "",
    "",
    "## Required Narrative",
    (course.learning_design?.principles ?? []).map((item) => `- ${item}`).join("\n"),
    "",
    "## Slide Outline"
  ];

  let slideIndex = 1;
  for (const module of modules) {
    chunks.push(`# Module: ${module.title}`);
    chunks.push(`Module intent: ${module.spec.intent ?? ""}`);
    module.slides.forEach((slide) => {
      chunks.push(renderPptAiSlide(slide, module, slideIndex, includeNotes));
      slideIndex += 1;
    });
  }

  const labs = renderPlainLabs(course, includeModules);
  if (labs) {
    chunks.push("# Labs and Homework Reference");
    chunks.push(labs);
  }
  return chunks.filter(Boolean).join("\n\n");
}

function renderSlidevDeck(course, deck, modules, includeModules, generatedAt, exportFilename) {
  const chunks = [
    `---
theme: ${course.deck_defaults?.theme ?? "default"}
title: ${JSON.stringify(course.meta.title)}
info: |
  ${course.meta.summary}
transition: ${course.deck_defaults?.transition ?? "slide-left"}
mdc: true
drawings:
  persist: false
exportFilename: ${exportFilename}
---

<style>
@import "./style.css";
</style>

# ${course.meta.title}

## ${course.meta.subtitle}

<div class="cover-meta">
<span>${escapeHtml(course.meta.version)}</span>
<span>${escapeHtml(course.meta.audience_label)}</span>
<span>${escapeHtml(deck.title)}</span>
<span>Generated ${generatedAt}</span>
</div>

<!--
${(course.learning_design?.principles ?? []).map((item) => `- ${item}`).join("\n")}
-->`,
    renderAgenda(modules, deck)
  ];

  modules.forEach((module, moduleIndex) => {
    chunks.push(renderModuleDivider(module, moduleIndex));
    module.slides.forEach((slide) => chunks.push(renderContentSlide(slide, module)));
  });

  chunks.push(renderLabs(course, includeModules));
  chunks.push(renderAssessment(course, includeModules));
  return chunks.filter(Boolean).join("\n");
}

function resolveDeck(course, customConfig) {
  if (customConfig?.deck) return customConfig.deck;
  const deckId = readArg("deck") ?? "full-7h";
  const deck = (course.decks ?? []).find((item) => item.id === deckId);
  if (!deck) {
    throw new Error(`Unknown deck "${deckId}". Use --list-decks to inspect available decks.`);
  }
  return deck;
}

const coursePath = readArg("course") ?? "specs/course.yaml";
const course = parse(await readFile(coursePath, "utf8"));
const includeNotes = hasArg("include-notes");

if (hasArg("list-decks")) {
  (course.decks ?? []).forEach((deck) => {
    console.log(`${deck.id}: ${deck.title}`);
  });
  process.exit(0);
}

const configPath = readArg("config");
const customConfig = configPath ? parse(await readFile(configPath, "utf8")) : undefined;
const deck = resolveDeck(course, customConfig);
const target = normalizeTarget(readArg("target") ?? customConfig?.target ?? "slidev");
const modulesOverride = readArg("modules");
const includeModuleIds = modulesOverride
  ? modulesOverride.split(",").map((item) => item.trim()).filter(Boolean)
  : deck.include_modules ?? [];

const explicitOutput = readArg("output");
const output =
  explicitOutput ??
  (target === "slidev"
    ? modulesOverride
      ? modulesOutputPath(includeModuleIds)
      : deck.output ?? course.deck_defaults?.output
    : targetOutputPath(target, includeModuleIds, deck, course, Boolean(modulesOverride)));
const moduleRefs = new Map((course.modules ?? []).map((module) => [module.id, module]));
const selectedModules = [];
for (const id of includeModuleIds) {
  const moduleRef = moduleRefs.get(id);
  if (!moduleRef) throw new Error(`Deck references unknown module "${id}"`);
  selectedModules.push(await readModule(moduleRef));
}

const includeModules = new Set(includeModuleIds);
const generatedAt = new Date().toISOString().slice(0, 10);
const exportFilename = deck.export_filename ?? outputBaseName(output) ?? course.deck_defaults?.export_filename ?? course.meta.id;

const markdown =
  target === "slidev"
    ? renderSlidevDeck(course, deck, selectedModules, includeModules, generatedAt, exportFilename)
    : target === "ppt-ai"
      ? renderPptAiDeck(course, deck, selectedModules, includeModules, includeNotes)
      : renderPlainDeck(course, deck, selectedModules, includeModules, includeNotes);
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, markdown, "utf8");

const customStyles = target === "slidev" ? await readFile("style.css", "utf8").catch(() => "") : "";
if (customStyles) {
  await writeFile(path.join(path.dirname(output), "style.css"), customStyles, "utf8");
}

console.log(`Generated ${output} (${target})`);
