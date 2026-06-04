import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { parse } from "yaml";

const specPath = process.argv[2] ?? "specs/course.yaml";
const course = parse(await readFile(specPath, "utf8"));
const output = course.deck?.output ?? "build/slides/course.slidev.md";
const customStyles = await readFile("style.css", "utf8").catch(() => "");

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function list(items = []) {
  if (!items.length) return "";
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function chips(items = []) {
  if (!items.length) return "";
  return `<div class="chips">${items
    .map((item) => `<span>${escapeHtml(item)}</span>`)
    .join("")}</div>`;
}

function renderVisual(visual) {
  if (!visual?.type) return "";

  if (visual.type === "flow") {
    const items = visual.items ?? [];
    return `<div class="flowline">${items
      .map((item) => `<div class="flow-step">${escapeHtml(item)}</div>`)
      .join('<div class="flow-arrow">-></div>')}</div>`;
  }

  if (visual.type === "checklist") {
    return `<div class="checklist">${(visual.items ?? [])
      .map((item) => `<div class="check-item">✓ ${escapeHtml(item)}</div>`)
      .join("")}</div>`;
  }

  if (visual.type === "cards") {
    return `<div class="card-grid">${(visual.items ?? [])
      .map(
        (item) => `<div class="mini-card"><strong>${escapeHtml(
          item.title ?? item
        )}</strong><p>${escapeHtml(item.text ?? "")}</p></div>`
      )
      .join("")}</div>`;
  }

  if (visual.type === "contrast") {
    return `<div class="contrast">${(visual.items ?? [])
      .map(
        (item) => `<div><h3>${escapeHtml(item.title)}</h3>${list(item.points ?? [])}</div>`
      )
      .join("")}</div>`;
  }

  if (visual.type === "timeline") {
    return `<div class="timeline">${(visual.items ?? [])
      .map(
        (item, index) =>
          `<div class="timeline-item"><span>${index + 1}</span><div><strong>${escapeHtml(
            item.title ?? item
          )}</strong><p>${escapeHtml(item.text ?? "")}</p></div></div>`
      )
      .join("")}</div>`;
  }

  if (visual.type === "matrix" || visual.type === "rubric") {
    const headers = visual.headers ?? [];
    const rows = visual.rows ?? [];
    return `<table class="spec-table"><thead><tr>${headers
      .map((header) => `<th>${escapeHtml(header)}</th>`)
      .join("")}</tr></thead><tbody>${rows
      .map(
        (row) =>
          `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`
      )
      .join("")}</tbody></table>`;
  }

  return "";
}

function notesBlock(notes = []) {
  if (!notes.length) return "";
  return `\n<!--\n${notes.map((note) => `- ${note}`).join("\n")}\n-->\n`;
}

function slideSeparator(frontmatter = {}) {
  const entries = Object.entries(frontmatter);
  if (!entries.length) return "\n---\n";
  return `\n---\n${entries.map(([key, value]) => `${key}: ${value}`).join("\n")}\n---\n`;
}

function renderContentSlide(slide, module, segment) {
  const visual = renderVisual(slide.visual);
  const tags = [module.title, segment.mode, ...(slide.tags ?? [])].filter(Boolean);
  return `${slideSeparator({ layout: slide.layout ?? "default", class: "content-slide" })}
# ${slide.title}

${chips(tags)}

<div class="slide-shell">
<section class="primary-pane">
${slide.eyebrow ? `<p class="eyebrow">${escapeHtml(slide.eyebrow)}</p>` : ""}
${slide.headline ? `<h2>${escapeHtml(slide.headline)}</h2>` : ""}
${slide.body ? `<p class="body-copy">${escapeHtml(slide.body)}</p>` : ""}
${list(slide.bullets ?? [])}
</section>
<aside class="visual-pane">
${visual}
${slide.takeaway ? `<div class="takeaway">${escapeHtml(slide.takeaway)}</div>` : ""}
</aside>
</div>
${notesBlock(slide.notes ?? [])}`;
}

function renderModuleDivider(module, index) {
  return `${slideSeparator({ layout: "default", class: "module-divider" })}
# ${String(index + 1).padStart(2, "0")} · ${module.title}

<div class="module-grid">
<div>
<p class="eyebrow">${escapeHtml(module.duration_min)} 分钟</p>
<h2>${escapeHtml(module.intent)}</h2>
</div>
<div>
${list(module.outcomes ?? [])}
</div>
</div>
${notesBlock(module.notes ?? [])}`;
}

function renderAgenda() {
  const rows = (course.modules ?? []).map((module) => [
    module.title,
    `${module.duration_min} 分钟`,
    (module.outcomes ?? []).join("；")
  ]);
  return `${slideSeparator({ layout: "default", class: "agenda-slide" })}
# 课程地图

${renderVisual({
  type: "matrix",
  headers: ["模块", "时长", "学员产出"],
  rows
})}

<div class="takeaway">课程从单兵微闭环进入复杂存量项目，最后以真实 MR 和设计文档验收。</div>`;
}

function renderLabs() {
  if (!course.labs?.length) return "";
  const rows = course.labs.map((lab) => [
    lab.title,
    lab.duration_min ? `${lab.duration_min} 分钟` : "课外",
    (lab.acceptance ?? []).join("；")
  ]);
  return `${slideSeparator({ layout: "default", class: "content-slide" })}
# 实操与作业验收总览

${renderVisual({
  type: "rubric",
  headers: ["任务", "时长", "验收标准"],
  rows
})}
${notesBlock([
  "这页用于课前同步助教和课后验收，不建议在正式授课时逐字念。",
  "如果组织内 MR 流程或平台名称变化，只更新 labs 与 assessment 字段。"
])}`;
}

function renderAssessment() {
  const assessment = course.assessment ?? {};
  if (!assessment.criteria?.length) return "";
  const rows = assessment.criteria.map((item) => [
    item.name,
    `${item.weight}%`,
    item.evidence
  ]);
  return `${slideSeparator({ layout: "default", class: "content-slide" })}
# 大作业评分 Rubric

${renderVisual({
  type: "rubric",
  headers: ["维度", "权重", "证据"],
  rows
})}

<div class="takeaway">${escapeHtml(assessment.pass_rule ?? "")}</div>
${notesBlock(assessment.notes ?? [])}`;
}

const title = course.meta.title;
const subtitle = course.meta.subtitle;
const generatedAt = new Date().toISOString().slice(0, 10);

const chunks = [
  `---
theme: default
title: ${JSON.stringify(title)}
info: |
  ${course.meta.summary}
transition: slide-left
mdc: true
drawings:
  persist: false
exportFilename: ${course.deck.export_filename}
---

# ${title}

## ${subtitle}

<div class="cover-meta">
<span>${escapeHtml(course.meta.version)}</span>
<span>${escapeHtml(course.meta.audience_label)}</span>
<span>Generated ${generatedAt}</span>
</div>

${notesBlock(course.meta.notes ?? [])}`,
  renderAgenda()
];

(course.modules ?? []).forEach((module, moduleIndex) => {
  chunks.push(renderModuleDivider(module, moduleIndex));
  (module.segments ?? []).forEach((segment) => {
    (segment.slides ?? []).forEach((slide) => {
      chunks.push(renderContentSlide(slide, module, segment));
    });
  });
});

chunks.push(renderLabs());
chunks.push(renderAssessment());

const markdown = chunks.filter(Boolean).join("\n");
await mkdir(path.dirname(output), { recursive: true });
await writeFile(output, markdown, "utf8");
if (customStyles) {
  await writeFile(path.join(path.dirname(output), "style.css"), customStyles, "utf8");
}

console.log(`Generated ${output}`);
