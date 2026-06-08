# Spec 维护指南

## 修改课程内容

优先修改 `specs/modules/*.md`：

- 调整章节目标：改模块 frontmatter 的 `intent` 和 `outcomes`。
- 调整单页内容：改对应 `:::slide` block 下的 Headline、Body、Key Points、Visual、Takeaway、Speaker Notes。
- 调整课堂时长：同时改模块 frontmatter 和 `specs/course.yaml` 中对应模块的 `duration_min`。
- 调整章节组合：改 `specs/course.yaml` 的 `decks[]`，或新增 `configs/*.yaml`。

课程级内容改 `specs/course.yaml`：

- 目标学员和学习产出：`audience`。
- 教学原则和总时长：`learning_design`。
- 实操任务：`labs[]`。
- 大作业评分：`assessment`。

## 开发中新增或修改一节课程

本仓库把“课程节”作为 module 维护。新增或调整一节课时，源文件通常只改 `specs/course.yaml`、一个 `specs/modules/*.md` 文件；如果这节课包含独立练习，再同步改 `exercises/` 或 `rubrics/`。

标准流程是：先修改 Spec 源文件，再手动运行生成命令刷新 Slidev 课件，最后用校验和预览确认结果。不要直接编辑 `build/slides/*.slidev.md`、`dist/`、PDF 或 PPTX；这些都是生成物，下次运行脚本会被覆盖。

### 文件分工

- `specs/course.yaml`：课程 manifest。这里注册模块 id、模块文件路径、展示标题、课堂时长、来源行、标签，并决定这个模块进入哪些 `decks[]`。如果新增或调整课堂练习，还要同步 `labs[]` 的目标、约束和验收规则。
- `specs/modules/*.md`：单节课程内容源文件。文件名建议使用两位排序号加语义名，例如 `70-team-rollout.md`。文件包含 YAML frontmatter、`Module Brief` 和多个 `:::slide` block。
- `specs/templates/module-spec.template.md`：新增模块或页面时复制的结构模板，不直接参与生成。
- `configs/*.yaml`：自定义 deck 组合。只有当新课程节不适合放入内置 `decks[]`，或需要临时交付一个定制版本时才修改或新增。
- `exercises/<exercise-id>/README.md`：课堂练习说明。只有当课程节要求学员完成独立实操、需要额外步骤或验收证据时新增。
- `rubrics/*.md`：评分标准。只有当新增课程节影响作业或验收评分时修改。
- `build/`、`dist/`：生成物目录。不要手工维护这些文件，运行生成或构建命令后由脚本覆盖。

### 修改已有课程节

1. 在 `specs/course.yaml` 的 `modules[]` 找到课程节 id，确认它对应的 `file`。
2. 修改对应 `specs/modules/*.md`：
   - frontmatter 的 `title`、`duration_min`、`intent`、`outcomes` 描述本节课解决的问题和学员可观察产出。
   - `Module Brief` 说明这节课在课程中的上下文和讲师处理重点。
   - 每个 `:::slide` block 的 `title`、`mode`、`duration_min`、`visual` 控制生成页面的标题、授课方式、预计时长和视觉类型。
   - `Headline` 写本页核心判断；`Body` 写必要解释；`Key Points` 写屏幕要点；`Visual` 写右侧结构；`Takeaway` 写本页结论；`Speaker Notes` 写讲师讲法、追问和取舍。
3. 如果调整本节总时长，同时修改模块 frontmatter 的 `duration_min` 和 `specs/course.yaml` 中同一模块的 `duration_min`，两处必须一致。
4. 如果这节课所属组合变化，修改 `specs/course.yaml` 的 `decks[].include_modules`。自定义组合优先放在 `configs/*.yaml`。
5. 如果改了实操目标、约束或验收证据，同步更新 `specs/course.yaml` 的 `labs[]`，必要时更新 `exercises/` 和 `rubrics/`。
6. 修改完成后运行 `npm run generate` 重新生成 `build/slides/*.slidev.md`，再用 `npm run slides` 或 `npm run check` 验证。

### 新增一节课程

1. 基于 `specs/templates/module-spec.template.md` 新建一个模块 Spec 文件到 `specs/modules/`，按课程顺序和主题命名。这里复制的是 Spec 模板，不是复制生成后的 Slidev 页面。
2. 设置模块 frontmatter：
   - `id`：全局唯一，并与 `specs/course.yaml` 中的 module id 完全一致。
   - `title`：模块展示标题。
   - `duration_min`：本节课总时长，课前材料可为 `0`。
   - `intent`：本节课的教学意图。
   - `outcomes`：学员完成后能做到的可观察行为。
   - `source_rows`：对应原始大纲行号；没有来源时用空数组。
3. 编写 `Module Brief` 和至少一个 `:::slide` block。每页 slide 必须有唯一 `id`、`title`、`mode`，并至少包含 `Headline`、`Body` 或 `Key Points` 中的一项；建议始终补齐 `Speaker Notes`。
4. 在 `specs/course.yaml` 的 `modules[]` 注册新模块：
   - `id`：模块 id。
   - `file`：模块 spec 路径。
   - `title`：模块标题。
   - `duration_min`：必须与模块 frontmatter 一致。
   - `source_rows`：来源行号。
   - `tags`：用于标识课程阶段、主题或是否必修。
5. 把模块 id 加入需要交付的 `decks[].include_modules`。内置组合包括 `full-7h`、`lesson1-lab`、`lesson2-sdd` 和 `sdd-only`。
6. 如该模块包含新练习，在 `specs/course.yaml` 的 `labs[]` 新增练习，并在 `exercises/` 下补充学员说明。
7. 运行 `npm run validate` 检查 Spec 结构，再运行 `npm run generate` 重新生成课件。

### 测试与验证

每次修改后至少运行：

```bash
npm run validate
```

`validate` 会检查必需文档、敏感凭证、课程 manifest、deck 引用、模块 frontmatter、模块时长一致性、slide id 全局唯一、slide 必填字段和练习验收规则。

确认可以从 Spec 重新生成课件：

```bash
npm run generate
```

只验证某个组合时：

```bash
npm run generate -- --deck lesson1-lab
npm run generate -- --modules orientation,new-module-id
npm run generate:custom
```

本地预览：

```bash
npm run slides
```

如果端口被占用：

```bash
PORT=3031 npm run slides
```

正式交付前运行完整检查：

```bash
npm run check
```

人工验证时重点看四件事：新模块是否出现在目标 deck 的议程中；每页标题、要点、视觉区和讲师备注是否符合预期；总时长是否符合交付版本；练习的目标、约束、验收证据是否能在课堂上执行。

## 新增一页

在对应 `specs/modules/*.md` 中新增一个 `:::slide` block。优先参考 `specs/templates/module-spec.template.md` 的页面结构；如果相邻页面结构高度一致，也可以复用相邻的 Spec block 作为骨架，但必须改掉 id、标题和内容。这里仍然只是在改 Spec，不是在复制或编辑生成后的 Slidev 页面。

确保：

- `id` 全局唯一。
- `title` 是屏幕上可见标题。
- `Headline` 是本页核心判断，不写成泛泛介绍。
- `Key Points` 不超过 5-6 条。
- `Visual` 描述页面右侧该展示的结构，可以是流程、表格、清单、对比或任务卡。
- `Speaker Notes` 写给讲师，说明怎样讲、怎样追问、怎样处理常见偏差。

## 新增章节

1. 在 `specs/modules/` 新增 Markdown 文件。
2. 在 `specs/course.yaml` 的 `modules[]` 注册 id、路径、时长和来源。
3. 把模块 id 加入一个或多个 `decks[]`。
4. 运行 `npm run validate`。
5. 运行 `npm run generate`，从 Spec 重新生成 Slidev Markdown。

## 讲师 Review 清单

- 这页是否回答“学员课后会做什么”？
- 是否有可观察的课堂行为或验收点？
- 是否避免把 AI 当成一次性代码生成器？
- 是否明确了人类的审查、决策和责任边界？
- 是否泄露了真实 Token、账号、内部生产地址或凭证？

## 用 AI 辅助改 Spec

可以让 AI 帮忙扩写页面，但提示词必须包含：

- 要修改的模块、slide id 或章节组合。
- 目标学员、课堂时长和授课方式。
- 必须保留的工具名、组织术语和安全边界。
- 输出字段要求，例如 Headline、Key Points、Visual、Speaker Notes。
- 验收规则，例如 bullets 不超过 6 条、必须包含讲师备注、禁止出现真实密钥。

AI 输出后只作为候选补丁。讲师需要 Review 内容，再运行：

```bash
npm run validate
npm run generate
```

## 预览与构建

```bash
npm run slides
```

如果端口被占用：

```bash
PORT=3031 npm run slides
```

正式交付前：

```bash
npm run check
```
