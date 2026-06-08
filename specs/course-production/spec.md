# Spec: 课程材料功能规格

## 课程范围

课程面向首期核心项目 Committer，目标是把 AI 辅助编码从个人提示词经验升级为团队可复用的工程闭环。

课程必须覆盖：

- AI Coding 演进与企业工具链。
- Vibe Coding、SDD、Skill、MCP、CodeWiki 的适用边界。
- spring-petclinic 小需求开发、单测生成、本地验证。
- MCP 建单、自动检视和修复闭环。
- dolphin-scheduler 存量项目探查。
- SMN 告警插件 Proposal、Spec、Design、Tasks 四阶文档。
- 课后 MR 大作业、评分 Rubric 和团队复讲。

## 材料形态

- 课程正文使用 `specs/modules/*.md`。
- 课程 manifest 使用 `specs/course.yaml`。
- 生成物输出到 `build/` 和 `dist/`，其中 `build/slides/` 面向 Slidev，`build/llm/` 面向 NotebookLM 和通用 LLM 知识库，`build/ppt-ai/` 面向 AI PPT 产品大纲。
- 练习说明放在 `exercises/`。
- 评分规则放在 `rubrics/`。

## 可组合生成

系统必须支持：

- 默认 7 小时完整版。
- 第一课版本。
- 第二课版本。
- SDD 专题版本。
- 用户通过 YAML config 或命令行指定模块组合。
- 用户通过 `--target` 指定输出目标，至少支持 `slidev` 和 `llm`。

## 验收条件

- 每个模块有 frontmatter、教学意图、学习产出和至少一页 slide。
- 每页 slide 有 id、title、mode、Headline 或 Key Points、Speaker Notes。
- deck 引用的模块必须存在。
- full-7h deck 总时长为 420 分钟。
- 校验器能扫描常见凭证模式。
- 默认 Slidev 目标可构建为静态站点。
- LLM 目标输出纯 Markdown，不包含 Slidev HTML/CSS 布局。
