# Proposal: 企业级 AI 辅助编码实战营课件工程

## 背景

AI 辅助编码工具已经进入日常研发，但培训材料如果仍以手工 PPT 为源文件，会出现三个问题：课程内容难以 Review、不同讲师难以复用、工具变化后难以系统更新。

本工程采用 Spec Driven Development 思路，把课程事实维护为 Markdown Spec，再临时生成 Slidev、PDF 或 PPTX。

## 目标

- 基于 `course.xlsx` 的初始大纲，扩展成约 7 小时的企业级 AI 辅助编码实战课程。
- 课程内容覆盖 CodeAgent、AgentCenter、MCP、Skill、CodeWiki、Vibe Coding、SDD 和大作业验收。
- 支持讲师通过配置选择章节组合。
- 支持讲师像维护代码一样 Review、修改和生成课件。

## 非目标

- 不在本仓库维护 spring-petclinic 或 dolphin-scheduler 的完整源码。
- 不把导出的 PPTX/PDF 作为长期源文件。
- 不硬编码企业内部真实 Token、地址、账号或生产配置。

## 成功标准

- `npm run validate` 能校验课程结构和必要文档。
- `npm run generate` 能生成 Slidev Markdown。
- Markdown Spec 具备讲师可维护的结构：教学意图、学习产出、页面内容、讲师备注、验收钩子。
- 大作业有统一 Rubric 和安全红线。
