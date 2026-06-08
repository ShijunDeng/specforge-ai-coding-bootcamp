# Spec 维护指南

## 修改课程内容

课件的原始教学内容写在 `specs/modules/*.md`。每个 Markdown 文件对应一节课程，文件里的 frontmatter、`Module Brief`、`:::slide` block、Headline、Key Points、Visual、Speaker Notes 都是课件内容源。

课程目录、模块顺序、模块文件路径、deck 组合、实操和评分规则写在 `specs/course.yaml`。`build/`、`dist/`、PDF、PPTX 都是由脚本生成的交付物，不存放原始内容。

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

- `specs/course.yaml`：课程 manifest。这里注册模块 id、模块文件路径、展示标题、课堂时长、标签，并决定这个模块进入哪些 `decks[]`。如果新增或调整课堂练习，还要同步 `labs[]` 的目标、约束和验收规则。
- `specs/modules/*.md`：单节课程内容源文件。文件名建议使用两位排序号加语义名，例如 `70-team-rollout.md`。文件包含 YAML frontmatter、`Module Brief` 和多个 `:::slide` block。
- `specs/templates/module-spec.template.md`：新增模块或页面时参考的结构模板，不直接参与生成，也不存放课程正文。
- `configs/*.yaml`：自定义 deck 组合。只有当新课程节不适合放入内置 `decks[]`，或需要临时交付一个定制版本时才修改或新增。
- `exercises/<exercise-id>/README.md`：课堂练习说明。只有当课程节要求学员完成独立实操、需要额外步骤或验收证据时新增。
- `rubrics/*.md`：评分标准。只有当新增课程节影响作业或验收评分时修改。
- `build/`、`dist/`：生成物目录。不要手工维护这些文件，运行生成或构建命令后由脚本覆盖。

### 模块文件编号

`specs/modules/` 文件名中的数字前缀是人工排序约定，不是生成器的排序依据。

- `00`、`01` 通常用于全局概览和课前准备。
- `10`、`20`、`30` 这样的间隔用于保留插入空间。
- 在两个模块之间新增课程节时，可以使用中间编号，例如在 `20-petclinic-micro-loop.md` 和 `30-mcp-review-repair.md` 之间新增 `25-debugging-with-ai.md`。
- 真正决定生成顺序的是 `specs/course.yaml` 中各个 `decks[].include_modules` 的模块 id 顺序。
- 如果只调整授课顺序，优先修改 `decks[].include_modules`，不必重命名模块文件。

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

1. 参考 `specs/templates/module-spec.template.md` 的结构，在 `specs/modules/` 新建一个模块 Spec 文件，文件名使用人工排序前缀加语义名，例如 `25-debugging-with-ai.md`。模板只提供字段结构，课程正文写在新建的模块 Spec 文件中。
2. 设置模块 frontmatter：
   - `id`：全局唯一，并与 `specs/course.yaml` 中的 module id 完全一致。
   - `title`：模块展示标题。
   - `duration_min`：本节课总时长，课前材料可为 `0`。
   - `intent`：本节课的教学意图。
   - `outcomes`：学员完成后能做到的可观察行为。
   - 具体填写标准见 `specs/templates/module-spec.template.md` 的 `Field Guide`，复制模板后删除说明区，只保留正式内容。
3. 编写 `Module Brief` 和至少一个 `:::slide` block。每页 slide 必须有唯一 `id`、`title`、`mode`，并至少包含 `Headline`、`Body` 或 `Key Points` 中的一项；建议始终补齐 `Speaker Notes`。
4. 在 `specs/course.yaml` 的 `modules[]` 注册新模块：
   - `id`：模块 id。
   - `file`：模块 spec 路径。
   - `title`：模块标题。
   - `duration_min`：必须与模块 frontmatter 一致。
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

`--modules` 适合临时抽取章节验证，默认输出到 `build/slides/custom-<module-ids>.slidev.md`。如果要固定输出路径，显式增加 `--output build/slides/my-deck.slidev.md`。

本地预览：

```bash
npm run slides
```

公网预览：

```bash
npm run slides:public
```

`slides:public` 会生成课件、启动 Slidev、通过 localtunnel 创建公网地址，并用 `--local-host 127.0.0.1` 保证公网 Host 能被 Vite/Slidev 接受。命令输出 `Public slide show` 后再把地址发给学员或评审。

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

新增页面只修改模块 Spec，不修改生成物。操作步骤：

1. 在 `specs/course.yaml` 的 `modules[]` 中确认要修改的模块 id 和 `file`。
2. 打开对应的 `specs/modules/*.md`，在合适位置新增一个 `:::slide` block。
3. 新 slide 的字段结构参考 `specs/templates/module-spec.template.md`，课程正文直接写入这个新 block。不要通过复制生成后的页面来新增内容。
4. 如果新增页面改变了本模块总时长，同步修改模块 frontmatter 的 `duration_min` 和 `specs/course.yaml` 中对应模块的 `duration_min`。
5. 运行 `npm run validate` 检查 Spec，再运行 `npm run generate` 从 Spec 重新生成 Slidev Markdown。

新 slide 必须满足：

- `id` 全局唯一，不能复用旧页面 id。
- `title` 是屏幕上可见标题。
- `mode` 表示授课方式，例如 `talk`、`demo`、`lab`、`summary`。
- `duration_min` 表示本页预计时长。
- `title`、`Headline`、`Body`、`Key Points`、`Visual`、`Takeaway` 都是学员能直接看到的课堂内容，避免写成“讲师要做什么”的备课指令。
- 可见内容优先使用“你/我们/本环节”这类课堂宣讲视角，避免“让学员……”这类后台设计语言。
- `Headline` 是本页核心判断，不写成泛泛介绍。
- `Key Points` 不超过 5-6 条。
- `Visual` 描述页面右侧该展示的结构，可以是流程、表格、清单、对比或任务卡。
- `Speaker Notes` 写给讲师，说明怎样讲、怎样追问、怎样处理常见偏差。

不要在 `build/slides/*.slidev.md` 中新增页面；那是生成结果，会在下次 `npm run generate` 时被覆盖。

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

公网预览：

```bash
npm run slides:public
```

如果端口被占用：

```bash
PORT=3031 npm run slides
```

正式交付前：

```bash
npm run check
```

## PPTX 制作

PPTX 默认使用 Slidev 导出，以保持网页预览和交付文件的视觉一致：

```bash
npm run export:pptx
```

如本机缺少浏览器渲染依赖，先安装：

```bash
npm i -D playwright-chromium
```
