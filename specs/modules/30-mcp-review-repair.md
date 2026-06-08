---
id: mcp-review-repair
title: MCP 提单、代码检视与自动修复
duration_min: 65
intent: 让学员理解 MCP 如何连接外部研发系统，并跑通“创建 MR、触发检视、根据意见自动修复”的质量闭环。
outcomes:
  - 能说明 MCP 与本地命令、远端平台动作之间的边界。
  - 能通过 MCP 创建 MR 并触发自动检视。
  - 能根据检视意见调用修复 Skill，并再次验证。
  - 能识别 Token、日志和权限边界。
source_rows: [11, 12, 13]
---

# MCP 提单、代码检视与自动修复

## Module Brief

本模块对应 `course.xlsx` 第 11-13 行。原大纲要求讲解 CodeHub MCP、代码规范检视 Skill、修复 Skill，并演示故意埋雷、提单、查错、修复。本模块把它扩展为企业质量闭环和安全边界训练。

:::slide
id: mcp-01
title: MCP：大模型连接外部系统的手脚
mode: talk
duration_min: 8
visual: flow
:::

### Headline
MCP 让 AI 不只会回答，还能在授权边界内触发平台动作。

### Body
创建 MR、读取检视结果、触发流水线、查询任务状态等动作都不应靠模型“猜”。MCP 的价值是把外部系统能力以受控方式暴露给 Agent。

### Key Points
- MCP 不是让 AI 绕过 Git，而是让平台动作可审计、可授权、可复现。
- 每次外部动作都要知道使用哪个账号、哪个仓库、哪个分支。
- 能力越强，越需要人工确认和最小权限。
- 课堂演示只使用脱敏 Token 和演示仓库。

### Visual
- 本地代码变更
- MCP 创建 MR
- 平台触发检视
- Skill 读取意见
- Agent 修复代码
- 测试和 Review 收口

### Takeaway
MCP 是连接能力，不是放弃工程控制。

### Speaker Notes
- 用“手脚”类比可以快速建立心智模型，但要马上补上权限和审计。
- 不要现场暴露真实 Token；所有配置演示都使用占位符。

:::slide
id: mcp-02
title: Token 配置与权限边界
mode: talk
duration_min: 7
visual: checklist
:::

### Headline
能创建 MR 的能力必须被当成生产级权限管理。

### Body
MCP 配置失败会阻塞课堂，MCP 权限过大则会带来安全风险。课程要把授权边界讲清楚，而不是只讲“怎么配通”。

### Key Points
- 使用课堂仓库或演示分支，避免误操作生产项目。
- Token 权限只覆盖创建 MR、读取检视、触发必要动作。
- 不在 Prompt、日志、课件、截图中输出完整 Token。
- 课后按企业规范回收或轮换临时授权。
- 操作前检查 Git 状态和远端仓库地址。

### Visual
- 最小权限
- 脱敏展示
- 人工确认
- 操作审计
- 课后回收

### Takeaway
Token 配置是工程流程的一部分，不是工具安装的旁枝。

### Speaker Notes
- 如果企业有内部 Token 管理平台，可在讲师备注中补充入口，不写到公开课件。
- 现场有人 Token 失败时，助教处理，讲师使用预置截图继续演示流程。

:::slide
id: mcp-03
title: 自动检视：把团队规则前置
mode: talk
duration_min: 8
visual: cards
:::

### Headline
机器检视不是为了替代 Reviewer，而是把低级问题提前拦截。

### Body
自定义代码规范、日志红线、空指针风险、异常处理、测试缺口等都可以通过检视 Skill 形成早期反馈，减少人工 Review 被模板问题占满。

### Key Points
- 明确哪些规则适合机器检视，哪些仍需要人工判断。
- 检视意见必须能定位到文件、行、风险和修复建议。
- 修复 Skill 读取意见后生成候选补丁，仍需人工 Review。
- 不接受“修复后没跑测试”的闭环。

### Visual
- 规范类：命名、日志、格式、依赖。
- 风险类：NPE、资源释放、异常吞掉。
- 安全类：敏感日志、密钥硬编码、权限绕过。
- 测试类：缺少边界测试、断言无意义。

### Takeaway
自动检视把 Reviewer 从重复劳动中解放出来，但不免除人的责任。

### Speaker Notes
- 可以展示一条组织内常见规则，但不要暴露内部敏感代码。
- 讲清楚机器检视和人工 Review 的分工。

:::slide
id: mcp-04
title: 讲师演示：建单、查错、自动修复
mode: demo
duration_min: 17
visual: flow
:::

### Headline
故意埋雷是为了让学员看到质量闭环如何工作。

### Body
讲师在 Petclinic 改动中故意写入违规打印和不判空代码，通过 MCP 创建 MR，触发检视 Skill，再调用修复 Skill 自动改回合规代码。

### Key Points
- 埋雷：System.out、潜在 NPE 或敏感日志示例。
- 建单：通过 MCP 指令创建 MR，不手敲远端平台流程。
- 查错：触发检视，拿到清晰、可定位的意见。
- 修复：调用修复 Skill，要求最小 diff。
- 验证：重新运行测试并 Review 修复结果。

### Visual
- 故意埋雷
- MCP 建 MR
- 机器检视亮红
- Skill 读取意见
- 自动修复
- 测试跑绿

### Takeaway
质量闭环的关键不是一次通过，而是能把失败转成可执行修复。

### Speaker Notes
- 重点演示 Token 配置位置和脱敏方式，但不要显示真实值。
- 如果平台不稳定，使用预置录屏或截图演示结果，现场仍讲判断逻辑。

:::slide
id: mcp-05
title: 随堂练习：打通自动化查错改错防线
mode: lab
duration_min: 20
visual: checklist
:::

### Headline
每位学员必须拿到一次检视意见，并用修复 Skill 处理完成。

### Body
学员在自己的 Petclinic 分支中保留一个明确缺陷，用 MCP 指令建单，主动触发查错，再用修复 Skill 完成闭环。

### Key Points
- 配置个人 MCP，确认远端仓库和分支。
- 制造一个可被规则识别的缺陷。
- 使用 MCP 创建 MR，记录 MR 链接。
- 获取机器检视意见，不手动绕过。
- 使用修复 Skill 修改，并重新运行测试。

### Visual
- 配置 MCP
- 坏代码推 MR
- 拿检视意见
- 修复 Skill 改代码
- 测试与 Review
- 提交证据

### Takeaway
练习底线是必须有检视拦截意见，且必须由修复 Skill 改对代码。

### Speaker Notes
- 助教检查每位学员是否真的拿到 MR 链接和检视意见。
- 如果学员手动改掉缺陷，要求重新制造一个缺陷并走完整链路。

:::slide
id: mcp-06
title: 第一课复盘：把重复脏活交给机器
mode: summary
duration_min: 5
visual: flow
:::

### Headline
工程师价值不是亲手完成每个机械动作，而是负责目标、判断和验收。

### Body
第一课打通的 5 个节点是后续复杂项目 SDD 的最小执行单元：写功能、生成单测、MCP 建单、代码检视、自动修复。

### Key Points
- 人做决策：定义需求、边界、验收和风险。
- 机器做模板劳动：生成候选代码、生成测试、执行平台动作。
- 人做 Review：判断业务语义、架构一致性和安全边界。
- 机器做反馈循环：根据测试和检视意见修复。
- 证据做沉淀：把流程复制到团队。

### Visual
- 功能代码
- 单测生成
- MCP 提单
- 自动检视
- 自动修复
- 证据归档

### Takeaway
第一课解决“能跑通”，第二课解决“复杂项目如何不跑偏”。

### Speaker Notes
- 结尾布置下次课准备：提前 Clone dolphin-scheduler，准备 PKIToken 或等价授权。
- 回扣课程地图，让学员知道接下来会从小项目进入存量大项目。
