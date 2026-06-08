# 练习：Petclinic 功能开发与单测微闭环

## 目标

在 spring-petclinic 中使用 CodeAgent 完成 Pet 疫苗接种字段和查询接口，并调用 UT Skill 生成测试。

## 输入

- 本地可运行的 spring-petclinic 仓库。
- Pet 相关实体、Controller、Repository 和已有测试文件。
- CodeAgent 与 UT Skill 可用。

## 约束

- 禁止手敲业务代码。
- 先让 AI 输出修改计划，再采纳代码。
- 采纳前必须 Review diff。
- 报错必须把测试输出交给 AI 定位和修复。

## 建议步骤

1. 选择 Pet 相关文件作为上下文。
2. 使用 `docs/examples/prompt-patterns.md` 中的功能微改提示词。
3. Review AI 的修改计划。
4. 采纳候选补丁。
5. 调用 UT Skill 生成或补充测试。
6. 运行本地测试。
7. 如果失败，复制失败输出，让 AI 给最小修复。
8. 记录最终命令、diff 和 Review 结论。

## 验收

- 接口或查询能力能体现新增字段。
- 新增或更新单测本地运行通过。
- 学员能解释采纳前 Review 了哪些风险。
- 证据包包含提示词、计划、diff、测试输出和修复记录。
