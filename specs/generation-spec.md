# 多目标生成规格

## 目标

从 `specs/course.yaml` 和 `specs/modules/*.md` 生成不同工具可消费的课程材料。Spec 是唯一课程源；Slidev、NotebookLM、NotepadLLM、普通 Markdown 等都只是输出目标，不反向约束课程正文写法。

当前支持两类目标：

- `slidev`：生成可直接运行的 Slidev Markdown，用于课堂投屏、网页预览、PDF/PPTX 导出。
- `llm`：生成纯 Markdown 课程包，用于 NotebookLM、NotepadLLM、通用 LLM 知识库、复习资料或文本审阅。

`notebooklm`、`notepadllm`、`markdown`、`plain` 都作为 `llm` 目标的别名处理。

## 输入

- `specs/course.yaml`
  - `meta`：课程标题、版本、摘要。
  - `audience`：学员画像、前置条件、学习产出。
  - `learning_design`：教学承诺、原则和课堂比例。
  - `decks[]`：内置章节组合。
  - `modules[]`：模块 id、文件路径、时长、标签。
  - `labs[]`：实操任务、限制、验收。
  - `assessment`：评分规则与安全红线。
- `specs/modules/*.md`
  - YAML frontmatter：模块 id、标题、时长、教学意图、学习产出。
  - `:::slide` block：页面 id、标题、模式、时长、视觉类型。
  - 页面章节：Headline、Body、Key Points、Visual、Takeaway、Speaker Notes。
- `configs/*.yaml`
  - 可选的自定义 deck 配置。

## 输出目标

### Slidev

默认目标为 `slidev`。

输出规则：

- 默认输出：`build/slides/ai-coding-bootcamp-7h.slidev.md`。
- 内置 deck 输出：由 `specs/course.yaml` 中对应 deck 的 `output` 指定。
- `--modules` 临时组合输出：未指定 `--output` 时生成到 `build/slides/custom-<module-ids>.slidev.md`。
- `--config` 自定义 deck 输出：由 `configs/*.yaml` 中 deck 的 `output` 指定。
- 显式自定义输出：由 `--output` 覆盖上述规则。
- 同目录复制 `style.css`，供 Slidev 渲染使用。

Slidev 输出可以继续用于：

- `npm run slides`
- `npm run slides:public`
- `npm run build`
- `npm run export:pptx`
- `npm run export:pdf`

### LLM / NotebookLM / NotepadLLM

LLM 目标输出工具无关的纯 Markdown，不包含 Slidev frontmatter、HTML 布局、CSS 或页面分隔符。

输出规则：

- 默认 deck：`build/llm/full-7h.md`。
- 指定 deck：`build/llm/<deck-id>.md`。
- 临时模块组合：`build/llm/<module-ids>.md`。
- 显式自定义输出：由 `--output` 覆盖上述规则。
- 默认不输出 `Speaker Notes`，避免把讲师后台备注混入学员资料。
- 如需要给讲师或课程研发使用完整材料，可增加 `--include-notes`。

LLM 输出保留：

- 课程摘要、学习原则和学习产出。
- deck agenda。
- 模块 intent、outcomes。
- 每页 title、mode、duration、visual type。
- Headline、Body、Key Points、Visual Brief、Activity、Takeaway。
- labs 与 assessment。

## 命令

```bash
npm run generate
npm run generate:slidev
npm run generate:llm
npm run generate:notebooklm
npm run generate:notepadllm
npm run generate:all
```

指定 deck：

```bash
npm run generate -- --deck lesson1-lab
npm run generate -- --target llm --deck lesson2-sdd
```

临时模块组合：

```bash
npm run generate -- --modules orientation,sdd-codewiki,smn-design-lab
npm run generate -- --target notebooklm --modules orientation,smn-design-lab
```

自定义输出：

```bash
npm run generate -- --target llm --deck full-7h --output build/llm/course-for-review.md
```

包含讲师备注：

```bash
npm run generate -- --target llm --deck full-7h --include-notes
```

列出 deck：

```bash
npm run generate -- --list-decks
```

## 验收

- `npm run validate` 能发现缺失标题、重复 slide id、缺失讲师备注、模块时长不一致、模块 manifest 与 frontmatter 不一致、deck/config 引用错误和敏感凭证模式。
- `npm run generate` 能稳定生成默认 Slidev deck。
- `npm run generate:llm` 能稳定生成 `build/llm/full-7h.md`。
- `npm run build` 能通过 Slidev 构建静态站点。
- `npm run slides:public` 必须输出可访问公网地址。
- Slidev PDF/PPTX 导出必须先安装 `playwright-chromium`，生成文件不提交。

## 扩展约束

- 新输出目标应复用同一套解析结果，不复制课程内容。
- 工具专属语法只能出现在目标渲染器中，不能写回 `specs/modules/*.md`。
- 新视觉类型应先补生成器与样式，再在模板和维护指南中开放给讲师。
- 如果未来需要多语言、多讲师版本或新的授课工具，优先通过 target、deck/config 组合实现，不复制整套课程。
