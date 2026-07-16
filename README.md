# 神灯训练营课件工程

这是一个 Spec Driven Development 风格的课件仓库。当前课程是一套 3.5 小时 AI 辅助开发培训，讲师维护 `specs/` 中的 Markdown 规格文件，需要授课、审阅或交付时再生成 Slidev、知识包、AI PPT 大纲、静态网页、PDF 或 PPTX。

本培训课程品牌为 **神灯局**，愿景是“点亮你的研发愿望，让AI成为团队神灯。” 品牌 logo 存放在 `assets/brand/shendengju-logo.png`，生成课件时会用于封面和页面角标。

本仓库不把 PPTX 当作源文件。课程目标、学习成果、教学路径、实操验收、讲师备注和生成规则都进入 Spec，生成物只用于预览、授课和临时交付。

## 快速开始

```bash
npm install
npm run validate
npm run generate
```

常用命令：

```bash
npm run generate                    # 默认生成 Slidev 版 3.5 小时完整版
npm run generate:llm                # 生成 LLM/NotebookLM 友好的纯 Markdown
npm run generate:ppt-ai             # 生成 AI PPT 产品可用的大纲 Markdown
npm run generate:gamma              # 生成适合粘贴到 Gamma 的大纲
npm run generate:tome               # 生成适合粘贴到 Tome 的大纲
npm run generate:canva              # 生成适合粘贴到 Canva AI 演示能力的大纲
npm run generate:all                # 同时生成 Slidev 与 LLM 版本
npm run generate:lesson1            # 生成第一课微闭环版本
npm run generate:lesson2            # 生成第二课 SDD 版本
npm run generate -- --deck sdd-only # 按内置 deck 组合生成
npm run generate -- --modules orientation,smn-design-lab # 临时组合，输出 custom-*.slidev.md
npm run generate -- --target gamma --deck lesson2-sdd # 生成指定 deck 的 AI PPT 大纲
npm run slides                      # 启动 Slidev 预览，默认端口 3030
npm run slides:public               # 启动 Slidev 并自动创建公网访问地址
npm run build                       # 生成静态站点到 dist/slides
npm run export:pptx                 # 使用 Slidev 导出 PPTX
npm run export:pdf                  # 使用 Slidev 导出 PDF
```

`--modules` 用于临时组合章节。Slidev 目标未指定 `--output` 时会写入 `build/slides/custom-<module-ids>.slidev.md`；LLM 目标会写入 `build/llm/<module-ids>.md`。

生成目标由 `--target` 控制。`slidev` 是默认目标；`llm`、`notebooklm`、`markdown`、`plain` 会生成工具无关的知识包 Markdown；`ppt-ai`、`gamma`、`tome`、`canva`、`beautifulai`、`powerpoint-copilot`、`google-slides`、`deckai` 等会生成 AI PPT 产品更容易消费的页面大纲。

公网预览使用 `localtunnel --local-host 127.0.0.1` 转发，避免 Vite/Slidev 因公网 Host 拒绝访问。命令输出 `Public slide show` 后，需要用公网地址做一次外部访问确认。

导出 PDF/PPTX 前，按 Slidev 的浏览器渲染要求安装依赖：

```bash
npm i -D playwright-chromium
npm run export:pptx
```

## 目录约定

- `specs/course.yaml`：课程 manifest，定义课程元数据、模块文件、内置 deck 组合、实操与评分规则。
- `specs/modules/*.md`：讲师维护的 Markdown 章节 Spec。每个文件包含 frontmatter、教学意图、学习产出、逐页 slide spec 和讲师备注。
- `specs/templates/`：新增章节和页面时参考的结构模板，不存放课程正文。
- `specs/constitution.md`：课件生产的长期约束。
- `specs/course-production/`：本课件工程自身的 Proposal、Spec、Design、Tasks。
- `specs/generation-spec.md`：多目标生成规格。
- `docs/authoring-guide.md`：讲师维护 Spec 的方法。
- `docs/facilitator-runbook.md`：课前、课中、课后执行手册。
- `exercises/`：课堂练习与大作业说明，不存放外部项目完整源码。
- `rubrics/`：作业评分 Rubric。
- `scripts/`：校验、生成、公网预览和导出脚本。
- `assets/brand/`：课程品牌资产，例如神灯局 logo。
- `assets/demos/`：课程中的动态演示图、代码运行画面和看板式视觉资产。
- `build/`、`dist/`：生成物目录，不作为课程源文件维护。

`specs/modules/` 文件名中的 `00`、`10`、`20` 等数字前缀只用于人工阅读和目录排序，方便在两个模块之间插入新文件，例如 `25-new-topic.md`。课件生成顺序不由文件名前缀决定，而由 `specs/course.yaml` 中 `decks[].include_modules` 的顺序决定。

## SDD 维护流程

1. 大改课程目标、实操项目或评分规则时，先更新 `specs/course-production/`。
2. 再更新 `specs/course.yaml` 与对应 `specs/modules/*.md`。
3. 如生成策略变化，同步更新 `specs/generation-spec.md` 和 `scripts/`。
4. 每次提交前运行 `npm run validate`；正式交付前运行 `npm run check`。

## 新增或修改一节课程

开发中把一节课程作为一个 module 维护。常见修改路径：

1. 在 `specs/course.yaml` 的 `modules[]` 找到或注册课程节，确认 `id`、`file`、`duration_min` 和所属 `decks[]`。
2. 修改或新增对应的 `specs/modules/*.md`，维护 frontmatter、`Module Brief` 和每个 `:::slide` block。
3. 如果课程节包含练习，同步更新 `specs/course.yaml` 的 `labs[]`，必要时补充 `exercises/` 和 `rubrics/`。
4. 修改后运行 `npm run validate`；需要预览时运行 `npm run generate` 和 `npm run slides`；正式交付前运行 `npm run check`。

只修改 Spec 源文件，不直接编辑 `build/slides/*.slidev.md`、`build/llm/*.md`、`dist/`、PDF 或 PPTX；这些生成物由脚本重新生成。

详细操作步骤、字段含义、验证命令和人工检查点见 [Spec 维护指南](docs/authoring-guide.md#开发中新增或修改一节课程)。

## 课程内容主线

当前版本包含两条教学主线：

- 第一课：AI Coding 演进、CodeAgent、Skill、CLI、MCP、MR 检视与修复闭环。
- 第二课：SDD 方法、Kiro/OpenSpec/Spec Kit、CodeSpec、全量设计与综合实战。

课程被设计为约 210 分钟的完整版，并支持通过 deck 配置裁剪为上半场、下半场或自定义章节组合。内部 CodeAgent、CodeSpec、AgentCenter、CodeHub CLI 的未知命令、界面和产品细节统一保留“待内部补充”，不得从公开工具类推。
