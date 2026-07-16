---
id: course-wrap-up
title: 课程总结与课后实践
duration_min: 10
show_divider: false
intent: 用一条研发主线回顾全课，并明确课后练习和成长路径。
outcomes:
  - 能复述从小需求到复杂 SDD 的完整方法链。
  - 能按要求提交课后 SDD 交付证据。
---

## Module Brief

总结不引入新概念，只收束方法、下一步和作业提交物。

:::slide
id: course-39
title: 课程回顾
mode: summary
duration_min: 3
visual: flow
:::
### Headline
从小需求到复杂项目，始终用事实、审核和验证控制 Agent。

### Body
工具入口不断变化，但探索现状、定义边界、检查计划、验证结果和保留证据的责任不变。

### Example
Veterinarians CRUD 使用 Explore、Plan、Code、Verify；复杂需求则把同样纪律扩展到 Spec、Design、Tasks 和多个 Review Gate。

### Key Points
- 小需求：CodeAgent 探索、计划、实现和验证。
- 能力扩展：Skill、CLI、MCP 与 AgentCenter。
- 工程交付：Commit、MR、检视、修复和回归。
- 项目规则：AGENTS.md 固化稳定约定。
- 复杂需求：CodeSpec、全量设计与端到端 SDD。

### Visual
- Explore / Plan / Code / Verify
- Skill / CLI / MCP
- Commit / MR / Review / Fix
- AGENTS.md / Tests / CI
- Spec / Design / Tasks / Verification

### Illustration Brief
绘制一条贯穿全课的研发流程，把小闭环逐步扩展为团队与 SDD 闭环。

### Layout Contract
左侧回顾五类能力，右侧总流程图；不增加新术语。

### Takeaway
Agent 能走多远，取决于你给了多少真实约束和验证能力。

### Speaker Notes
请学员用自己的话复述一条“输入—动作—证据—停止条件”链路。

:::slide
id: course-40
title: Path forward
mode: rollout
duration_min: 3
visual: timeline
:::
### Headline
下一阶段从个人使用，走向团队可复用、可治理的研发能力。

### Body
选择一个真实项目和一条高频流程持续练习，不要一次引入所有工具和自动化。

### Example
先为团队固化一个测试 Skill 和 AGENTS.md，再扩展 CodeHub 检视流程，最后进入多人 SDD 协作。

### Key Points
- 复杂 Brownfield 项目的上下文发现。
- 高质量任务设计与可执行验收。
- 自定义 Skill 与 CLI 工具化。
- MCP 接入与 Agent 自动检视。
- 团队 AGENTS.md 与 CodeSpec 深入实践。
- 多人 SDD 文档评审和协作治理。

### Visual
- Level 1：高质量个人任务
- Level 2：Skill 与 CLI 复用
- Level 3：MCP 与自动检视
- Level 4：团队规则与 SDD 协作

### Illustration Brief
绘制四级成长阶梯，每级只标一组可观察能力，不画职位晋升。

### Layout Contract
左侧说明渐进原则，右侧四级阶梯；控制文字密度。

### Takeaway
先把一条流程做稳，再扩大 Agent 的权限和作用范围。

### Speaker Notes
让学员选择一个未来两周可落地的最小改进，并写出验收证据。

:::slide
id: course-41
title: 课后作业
mode: assessment
duration_min: 4
visual: checklist
:::
### Headline
完成剩余 SDD 流程，并用 MR 提交完整工程证据。

### Body
作业以文档、实现、测试和检视修复记录为一个整体，内部提交位置与截止时间待通知。

### Example
MR 描述附上 Spec、Design、Tasks，列出完成任务、测试结果、检视意见和修复记录，并明确剩余风险。

### Key Points
- 完成剩余 Spec、Design、Tasks 修订。
- 根据过审 Tasks 完成功能实现。
- 运行项目要求的测试与构建。
- 提交指定 MR 并填写变更与验证说明。
- 附检视意见、修复记录和未完成风险。
- 仓库、分支、截止时间和提交入口待内部补充。

### Visual
- Spec
- Design
- Tasks
- 核心实现
- 测试结果
- MR 与检视修复记录

### Illustration Brief
绘制作业提交清单，六类产物使用统一卡片；内部提交信息使用占位标签。

### Layout Contract
左侧展示作业要求，右侧双列提交物清单；验收标准必须可见。

### Activity
- 学员在课后完成并提交指定 MR。
- 讲师按文档一致性、实现、测试、检视修复和风险说明进行验收。

### Takeaway
作业完成的标准，是别人能沿着证据复核你的整个过程。

### Speaker Notes
内部仓库、命名规则、截止时间、评分方式和提交入口待内部补充。
