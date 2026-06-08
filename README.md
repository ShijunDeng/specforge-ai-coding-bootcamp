# 企业级 AI 辅助编码实战营课件工程

这是一个 Spec Driven Development 风格的课件仓库。讲师维护 `specs/` 中的 Markdown 规格文件，需要授课或交付时再生成 Slidev Markdown、静态网页、PDF 或 PPTX。

本仓库不把 PPTX 当作源文件。课程目标、学习成果、教学路径、实操验收、讲师备注和生成规则都进入 Spec，生成物只用于预览、授课和临时交付。

## 快速开始

```bash
npm install
npm run validate
npm run generate
```

常用命令：

```bash
npm run generate                    # 生成 7 小时完整版
npm run generate:lesson1            # 生成第一课微闭环版本
npm run generate:lesson2            # 生成第二课 SDD 版本
npm run generate -- --deck sdd-only # 按内置 deck 组合生成
npm run generate -- --modules orientation,smn-design-lab
npm run slides                      # 启动 Slidev 预览，默认端口 3030
npm run build                       # 生成静态站点到 dist/slides
```

导出 PDF/PPTX 前，按 Slidev 的浏览器渲染要求安装依赖：

```bash
npm i -D playwright-chromium
npm run export:pptx
```

## 目录约定

- `specs/course.yaml`：课程 manifest，定义课程元数据、模块文件、内置 deck 组合、实操与评分规则。
- `specs/modules/*.md`：讲师维护的 Markdown 章节 Spec。每个文件包含 frontmatter、教学意图、学习产出、逐页 slide spec 和讲师备注。
- `specs/templates/`：新增章节和页面时复制的模板。
- `specs/constitution.md`：课件生产的长期约束。
- `specs/course-production/`：本课件工程自身的 Proposal、Spec、Design、Tasks。
- `docs/authoring-guide.md`：讲师维护 Spec 的方法。
- `docs/facilitator-runbook.md`：课前、课中、课后执行手册。
- `exercises/`：课堂练习与大作业说明，不存放外部项目完整源码。
- `rubrics/`：作业评分 Rubric。
- `scripts/`：校验、生成和导出依赖检查脚本。
- `build/`、`dist/`：生成物目录，不作为课程源文件维护。

## SDD 维护流程

1. 大改课程目标、实操项目或评分规则时，先更新 `specs/course-production/`。
2. 再更新 `specs/course.yaml` 与对应 `specs/modules/*.md`。
3. 如生成策略变化，同步更新 `specs/slide-generation-spec.md` 和 `scripts/`。
4. 每次提交前运行 `npm run validate`；正式交付前运行 `npm run check`。

## 从 course.xlsx 到 7 小时课程

`course.xlsx` 是本仓库的初始课程大纲。当前版本保留大纲中的两条主线：

- 第一课：CodeAgent、Skill、MCP、单测、MR、代码检视与自动修复。
- 第二课：DolphinScheduler 存量项目、CodeWiki、SDD 四阶文档、SMN 告警大作业。

在此基础上，课程被扩展为约 420 分钟的完整版，并支持通过 deck 配置裁剪为半天课、第一课、第二课或自定义章节组合。
