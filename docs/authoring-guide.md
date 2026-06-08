# Spec 维护指南

本仓库把课程材料当作工程资产维护：课程正文写在 Spec 中，Slidev、NotebookLM 友好的纯 Markdown、AI PPT 产品大纲、静态站点、PDF、PPTX 都由脚本生成。讲师和课程维护者只维护源文件，不直接修改生成物。

## 基本原则

- **Spec 是唯一正文来源**：课件原始内容写在 `specs/modules/*.md` 和 `specs/course.yaml`。
- **生成目标可替换**：Slidev、NotebookLM、AI PPT 产品、普通 Markdown 都是输出目标，不是课程源模型。
- **生成物不手改**：`build/`、`dist/`、PDF、PPTX 都会被脚本覆盖。
- **可见内容面向学员**：`title`、`Headline`、`Body`、`Key Points`、`Visual`、`Takeaway` 都应像课堂上直接讲给学员听，避免“让学员……”“讲师要……”这类后台语言。
- **讲师提示放备注**：讲法、追问、现场取舍、助教动作写在 `Speaker Notes`。
- **先验证再交付**：每次修改后至少运行 `npm run validate`；正式交付前运行 `npm run check`。

`course.xlsx` 只作为首版课程设计的初始输入来源。后续课程演进以本仓库的 Spec 为准，正文、流程和说明都不应依赖 `course.xlsx`。

## 文件分工

| 路径 | 作用 | 何时修改 |
| --- | --- | --- |
| `specs/course.yaml` | 课程 manifest：课程元信息、deck 组合、模块注册、练习、评分规则。 | 调整课程级信息、章节顺序、组合、练习或评分。 |
| `specs/modules/*.md` | 章节 Spec：每节课的正文、页面、图示、讲师备注。 | 新增或修改课程正文。 |
| `specs/templates/module-spec.template.md` | 模块/页面模板和字段说明。 | 模板规则变化时修改；不要写课程正文。 |
| `configs/*.yaml` | 临时或定制 deck 组合。 | 需要非内置组合交付时修改。 |
| `exercises/*/README.md` | 学员练习说明。 | 练习步骤、提交物或验收方式变化时修改。 |
| `rubrics/*.md` | 作业评分细则。 | 大作业或认证规则变化时修改。 |
| `scripts/` | 校验、生成、预览、导出脚本。 | 生成规则或工程能力变化时修改。 |
| `style.css` | Slidev 视觉样式。 | 页面版式、字体、图示样式变化时修改。 |
| `build/`、`dist/` | 生成物。 | 不手工修改。 |
| `specs/generation-spec.md` | 多目标生成规格。 | 新增或调整输出目标时修改。 |

## 课程结构

课程由三层组成：

1. **Course**：`specs/course.yaml` 定义课程元数据、总时长、deck、模块列表、labs 和 assessment。
2. **Module**：`specs/modules/*.md` 中一个文件对应一节课程。
3. **Slide**：模块文件中的一个 `:::slide` block 对应一页课件。

`specs/modules/` 文件名中的数字前缀只是人工排序约定，不决定生成顺序。真正的生成顺序由 `specs/course.yaml` 中 `decks[].include_modules` 的模块 id 顺序决定。

编号建议：

- `00`、`01`：全局概览、课前准备。
- `10`、`20`、`30`：正式章节，预留中间编号。
- 中间插入章节时使用 `25-debugging-with-ai.md` 这类编号。
- 只调整授课顺序时，优先改 `decks[].include_modules`，不要为了排序重命名文件。

## 模块字段

每个模块文件必须以 YAML frontmatter 开头：

```yaml
---
id: petclinic-micro-loop
title: Petclinic 功能开发与单测微闭环
duration_min: 95
intent: 在小型项目中跑通日常开发微闭环。
outcomes:
  - 能用 CodeAgent 完成小范围功能改动。
  - 能调用 UT Skill 生成单测并运行通过。
---
```

字段填写规则：

| 字段 | 规则 |
| --- | --- |
| `id` | 全局唯一，使用小写 kebab-case；必须与 `specs/course.yaml` 的 `modules[].id` 一致。 |
| `title` | 章节展示标题，表达主题，不写文件名。 |
| `duration_min` | 本模块课堂总时长；必须等于模块内所有 slide 的 `duration_min` 之和，并与 `specs/course.yaml` 一致。课前材料可为 `0`。 |
| `intent` | 一句话说明本节课解决什么教学问题；会出现在模块分隔页，因此必须面向学员。 |
| `outcomes` | 2-5 条可观察学习产出，建议用“能……”表述，可通过练习、提问、文档或代码证据验证。 |

`Module Brief` 用于说明本模块在课程中的位置和设计意图。它不直接生成成普通正文页，但仍应保持清晰、可维护。

## 页面字段

页面写在模块文件的 `:::slide` block 中：

```markdown
:::slide
id: micro-04
title: 课堂演示：Owner 模糊查询
mode: demo
duration_min: 18
visual: flow
:::

### Headline
演示目标是完整走一遍小需求，不是炫耀一次生成成功。

### Body
你将看到 Owner 按姓名片段模糊查询从计划、采纳、测试到修复的完整过程。

### Key Points
- 需求：为 Owner 增加按姓名片段模糊查询。
- 输出：先给修改计划，再生成候选补丁。
- 验收：查询接口正确返回，单测跑绿。

### Visual
- 选中 Owner 相关文件
- 说明查询规则
- 要求先给改动计划
- 采纳代码
- 调用 UT Skill
- 本地测试

### Takeaway
不要只看最终代码，要看每个 Review 点如何收敛 AI 输出。

### Speaker Notes
- 如果 AI 生成过大 diff，立即要求它缩小范围并解释每个文件为什么要改。
```

页面 metadata：

| 字段 | 规则 |
| --- | --- |
| `id` | 页面全局唯一，建议使用模块短名前缀加序号，例如 `micro-04`。 |
| `title` | 屏幕可见标题，写本页主题；核心判断放在 `Headline`。 |
| `mode` | 授课方式。常用值：`intro`、`talk`、`demo`、`lab`、`summary`、`assessment`、`rollout`、`prep`。 |
| `duration_min` | 本页预计时长；模块内所有页面时长之和必须等于模块总时长。 |
| `visual` | 右侧视觉结构类型。常用值：`flow`、`checklist`、`matrix`、`cards`、`timeline`、`contrast`。 |

页面 sections：

| Section | 规则 |
| --- | --- |
| `Headline` | 本页最重要的判断句，避免“背景介绍”“工具说明”这类弱标题。 |
| `Body` | 1-3 句解释，支撑 `Headline`。 |
| `Key Points` | 屏幕要点，通常 3-6 条；不要放完整讲稿。 |
| `Visual` | 右侧图示内容。生成器会按 `visual` 类型渲染为流程图、清单、卡片、矩阵等。 |
| `Takeaway` | 本页结束时要带走的一句话。 |
| `Speaker Notes` | 讲师备注，不作为主屏幕内容展示。 |

## 视觉类型

`visual` 决定右侧区域如何渲染：

| 类型 | 适用内容 | `Visual` 写法 |
| --- | --- | --- |
| `flow` | 步骤、链路、闭环。 | 使用短句 bullet，建议 4-8 步。 |
| `checklist` | 检查项、红线、验收点。 | 使用 bullet；短词条会自动渲染成双列图卡。 |
| `cards` | 多个并列概念或任务卡。 | 每条 bullet 一张卡。 |
| `matrix` | 分类对比、评分维度、职责表。 | 使用 Markdown 表格。 |
| `timeline` | 时间线、阶段安排。 | 使用 `时间：说明` 或短句 bullet。 |
| `contrast` | 反例/目标状态对比。 | 通常写两条 bullet，格式为 `状态：说明`。 |

视觉区应写结构，不写长段讲稿。文字过长会降低图示效果，也更容易造成版式拥挤。

## 修改已有内容

1. 在 `specs/course.yaml` 的 `modules[]` 找到模块 id 和 `file`。
2. 修改对应 `specs/modules/*.md`。
3. 如果调整模块总时长，同时修改模块 frontmatter 和 `specs/course.yaml` 中同一模块的 `duration_min`。
4. 如果调整章节组合，修改 `decks[].include_modules`，或在 `configs/*.yaml` 新增自定义组合。
5. 如果修改练习目标、约束或验收证据，同步更新 `labs[]`，必要时更新 `exercises/` 和 `rubrics/`。
6. 运行校验和生成命令。

不要通过复制 `build/slides/*.slidev.md` 来改页面。生成物只用于预览、授课和交付。

## 新增一页

1. 找到要插入页面的模块文件。
2. 在合适位置新增一个 `:::slide` block。
3. 填写唯一 `id`、可见 `title`、`mode`、`duration_min`、`visual` 和 sections。
4. 如果新增页面改变模块总时长，同步修改模块 frontmatter 和 `specs/course.yaml`。
5. 运行：

```bash
npm run validate
npm run generate
```

新增页面必须满足：

- 可见内容直接面向学员。
- `Key Points` 控制在 3-6 条。
- `Visual` 有结构，不能只写一段普通说明。
- `Speaker Notes` 放讲师讲法、追问、现场取舍。
- 不包含真实 Token、账号、内部生产地址、AK/SK 或敏感截图信息。

## 新增一节课程

1. 复制 `specs/templates/module-spec.template.md` 的结构，在 `specs/modules/` 新建模块文件。
2. 删除模板中的说明区，只保留正式课程内容。
3. 设置模块 frontmatter：`id`、`title`、`duration_min`、`intent`、`outcomes`。
4. 编写 `Module Brief` 和页面。
5. 在 `specs/course.yaml` 的 `modules[]` 注册模块。
6. 把模块 id 加入一个或多个 `decks[].include_modules`。
7. 如有练习，补充 `labs[]` 和 `exercises/`。
8. 运行：

```bash
npm run validate
npm run generate
```

## Deck 组合

内置 deck 定义在 `specs/course.yaml`：

- `full-7h`：7 小时完整版。
- `lesson1-lab`：第一课组合。
- `lesson2-sdd`：第二课组合。
- `sdd-only`：SDD 与 CodeWiki 专题。

常用生成命令：

```bash
npm run generate
npm run generate:slidev
npm run generate:llm
npm run generate:notebooklm
npm run generate:ppt-ai
npm run generate:gamma
npm run generate:tome
npm run generate:canva
npm run generate:all
npm run generate:lesson1
npm run generate:lesson2
npm run generate:custom
```

临时抽取模块：

```bash
npm run generate -- --modules orientation,smn-design-lab
```

指定输出文件：

```bash
npm run generate -- --modules orientation,smn-design-lab --output build/slides/my-deck.slidev.md
```

生成目标：

```bash
npm run generate -- --target slidev --deck full-7h
npm run generate -- --target llm --deck lesson2-sdd
npm run generate -- --target notebooklm --modules orientation,smn-design-lab
npm run generate -- --target gamma --deck lesson2-sdd
npm run generate -- --target powerpoint-copilot --modules orientation,smn-design-lab
```

`slidev` 是默认目标，输出到 `build/slides/`。`llm`、`notebooklm`、`markdown`、`plain` 会输出工具无关的纯 Markdown 到 `build/llm/`，适合导入 NotebookLM 或其他 LLM 知识库。`ppt-ai`、`gamma`、`tome`、`canva`、`beautifulai`、`powerpoint-copilot`、`google-slides`、`deckai` 等会输出到 `build/ppt-ai/`，格式更像 AI PPT 生成器需要的 deck brief 和逐页大纲。LLM/PPT-AI 目标默认不包含 `Speaker Notes`；如需讲师完整资料可加 `--include-notes`。

## 验证与预览

最低验证：

```bash
npm run validate
```

`validate` 会检查必需文档、敏感凭证、manifest 引用、模块时长、slide id 唯一性、页面必填字段、练习验收规则等。

生成默认 Slidev Markdown：

```bash
npm run generate
```

生成 LLM/NotebookLM 友好的纯 Markdown：

```bash
npm run generate:llm
```

生成 AI PPT 产品大纲：

```bash
npm run generate:ppt-ai
```

本地预览：

```bash
npm run slides
```

如果端口被占用：

```bash
PORT=3031 npm run slides
```

公网预览：

```bash
npm run slides:public
```

`slides:public` 会生成课件、启动 Slidev，并通过 localtunnel 输出 `Public slide show` 地址，供外部评审或学员访问。

正式交付前：

```bash
npm run check
```

`check` 会依次执行校验、默认 Slidev 生成和静态站点构建。Slidev 构建时可能输出依赖侧的 Rolldown annotation 警告；只要命令退出码为 0 且产物生成成功，一般不影响交付。

## 导出交付物

PPTX 默认使用 Slidev 导出，保持网页预览和交付文件一致：

```bash
npm run export:pptx
```

PDF 导出：

```bash
npm run export:pdf
```

导出脚本会先运行 `npm run generate`，再检查浏览器渲染依赖。导出产物写入 `dist/`。

## 内容 Review 清单

提交前人工看一遍：

- 这页是否能直接面向学员宣讲？
- 是否还有“让学员……”“讲师要……”等后台话术出现在可见区？
- `Headline` 是否是判断句，而不是目录项？
- `Key Points` 是否足够短，屏幕是否能显示完整？
- `Visual` 是否形成图示结构，而不是普通段落？
- 练习页是否明确任务、约束、验收证据？
- 是否保留了人的 Review、授权和责任边界？
- 是否泄露真实 Token、账号、生产地址、AK/SK 或内部敏感信息？

## 用 AI 辅助改 Spec

可以让 AI 生成候选补丁，但必须给清楚上下文：

- 要修改的模块 id、slide id 或 deck。
- 目标学员、课堂时长和授课方式。
- 必须保留的工具名、组织术语和安全边界。
- 输出字段要求：`Headline`、`Body`、`Key Points`、`Visual`、`Takeaway`、`Speaker Notes`。
- 验收规则：可见内容面向学员、要点不超过 6 条、必须有视觉结构、禁止真实密钥。

AI 输出只作为候选内容。合入前仍要人工 Review，并运行：

```bash
npm run validate
npm run generate
```
