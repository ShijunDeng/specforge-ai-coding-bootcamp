---
id: orientation
title: 课程引导
duration_min: 9
show_divider: false
intent: 先对齐学习目标、课堂节奏和可执行环境。
outcomes:
  - 能说明课程两条主线和最终产出。
  - 能确认本地环境与内部权限是否就绪。
---

## Module Brief

用三页完成目标、组织和环境对齐，不展开工具操作细节。

:::slide
id: course-01
title: 培训目标
mode: intro
duration_min: 3
visual: flow
:::
### Headline
把 AI 从“会回答”带进“可验证的研发交付”。

### Body
本课程覆盖小需求开发、测试验证、MR 检视修复，以及复杂需求的 SDD 全流程。

### Example
同一个 Veterinarians 需求，先用 CodeAgent 完成功能闭环，再把更复杂的变化拆成 Spec、Design 和 Tasks。

### Key Points
- 掌握 CodeAgent 的基础使用与功能开发节奏。
- 用测试、Diff 和 MR 检视结果验收 Agent 输出。
- 理解 Skill、CLI、MCP 和项目规则的职责。
- 完成一次端到端 SDD 模拟练习。

### Visual
- 工具链：理解与修改代码
- MR 闭环：测试、检视与修复
- SDD：规格、设计、任务与验证

### Illustration Brief
绘制三段式路线图，由工具链进入 MR 反馈闭环，再进入 SDD；不出现内部界面。

### Layout Contract
左侧展示学习目标，右侧使用三段流程；每段只保留动作和证据。

### Takeaway
最终产出不是一段回答，而是一条可复核的证据链。

### Speaker Notes
开场先说明内部工具细节以现场资料为准，课件只承载确认过的定位和方法。

:::slide
id: course-02
title: 课程组织
mode: intro
duration_min: 3
visual: timeline
:::
### Headline
每个知识点都要经历讲解、演示、练习和抽查。

### Body
讲师负责展示判断过程，学员负责留下计划、Diff、测试或文档等可检查产物。

### Example
讲师先演示 Veterinarians CRUD，学员随后独立完成改造，并用测试结果和 Diff 接受现场抽查。

### Key Points
- 讲解：建立概念和边界。
- 演示：暴露输入、判断和失败修正。
- 练习：独立完成任务并保留证据。
- 抽查：展示过程、风险与未完成项。

### Visual
- 讲解：给出方法与边界
- 演示：观察计划与验证
- 练习：独立交付证据
- 抽查：复盘判断与风险

### Illustration Brief
用四段时间轴表现课堂循环，强调练习和抽查，不绘制闭环架构。

### Layout Contract
左侧说明课堂契约，右侧纵向时间轴；不放完整操作手册。

### Takeaway
课堂评价看过程证据，不看谁更快生成代码。

### Speaker Notes
说明样例项目、课堂分组和抽查方式；具体仓库地址待现场通知。

:::slide
id: course-03
title: 环境准备
mode: prep
duration_min: 3
visual: checklist
:::
### Headline
先把环境跑绿，再开始任何 Agent 操作。

### Body
版本、权限和项目验证命令必须在课前确认；Token 只进入受控配置，不进入 Prompt 或截图。

### Example
若样例项目无法本地构建，先修复环境；不要让 Agent 在未知失败基线上继续修改代码。

### Key Points
- CodeAgent CLI 3.x：具体版本与安装方式待内部补充。
- JDK、Maven、Git：使用课程通知版本。
- 仓库权限与 Token：按最小权限申请并脱敏。
- CodeSpec：安装包与初始化方式待内部补充。
- 项目构建、测试命令：课前至少成功执行一次。

### Visual
- CodeAgent CLI 3.x 已就绪
- JDK / Maven / Git 版本匹配
- 仓库权限可用
- Token 已安全配置
- CodeSpec 待内部资料确认
- 构建与测试基线通过

### Illustration Brief
绘制六项环境检查清单，用绿色表示本地验证通过，内部项标记待内部补充。

### Layout Contract
左侧说明安全边界，右侧双列检查清单；不得出现真实 Token、地址或账号。

### Takeaway
没有可重复的绿色基线，就没有可信的 Agent 验证结果。

### Speaker Notes
现场补充内部安装地址、版本号、仓库地址和权限申请入口，不提前写入公开课件。
