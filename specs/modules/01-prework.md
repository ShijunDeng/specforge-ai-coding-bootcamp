---
id: prework
title: 课前准备
duration_min: 0
intent: 把环境问题前置处理，保证课堂时间用于 AI 协作能力训练。
outcomes:
  - 本地能运行 spring-petclinic。
  - 已克隆 dolphin-scheduler，依赖预热完成。
  - 已完成内部工具登录和 Token 准备。
---

# 课前准备

## Module Brief

本模块作为课前群发、开课前轮播和助教自检材料。它不计入 7 小时正课时间，但必须在开课前完成。

## Teaching Design

- **课堂角色**：把课前准备设计成“入场门禁”，让学员带着已验证环境进入正课。
- **故事冲突**：AI 输出失败时，不能让大家分不清是模型问题、环境问题还是权限问题。
- **贯穿道具**：本地跑绿截图、依赖下载结果、Token 脱敏配置、课前 FAQ。
- **插图节奏**：使用检查清单和流程图，不展示真实凭证或不可脱敏截图。
- **验收口径**：课前只认命令输出或截图证据，不接受“应该可以”的口头确认。

:::slide
id: prework-01
title: 环境与物料自检 Checklist
mode: prep
duration_min: 0
visual: checklist
:::
### Headline
课前必须把“能不能跑”变成确定事实。

### Body
课堂时间应该用于 AI 协作训练，而不是处理 JDK、依赖、代理和 Token 权限问题。


### Example
例如：课前自检不是截图 IDE 已打开，而是能在本地完成一次 `spring-petclinic` 启动或测试，并确认 CodeAgent 已登录。

### Key Points
- IDE、JDK、Maven 或 Gradle 版本与项目要求一致。
- spring-petclinic 已 Fork、Clone、依赖下载完成。
- dolphin-scheduler 已 Clone，本地依赖索引完成。
- CodeAgent、AgentCenter、MCP Token、PKIToken 完成登录验证。
- 本地能执行至少一次测试或启动命令。

### Visual
- 工具安装完成。
- 项目代码拉取完成。
- 依赖下载完成。
- Token 授权完成。
- 启动或测试命令跑绿。


### Illustration Brief
- 绘制可勾选的检查清单，检查项覆盖：工具安装完成、项目代码拉取完成、依赖下载完成、Token 授权完成、启动或测试命令跑绿。
- 红线项使用警示色，普通项使用中性色；每项配一个简洁图标，避免密集小字。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 checklist 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
任何“课上再说”的环境风险都会吞掉练习时间。

### Speaker Notes
- 课前一天发送，要求学员回传本地运行截图。
- 如果企业环境有统一镜像或代理，补充到本页或 Runbook。

:::slide
id: prework-02
title: 环境验收：先跑绿再上课
mode: prep
duration_min: 0
visual: flow
:::
### Headline
验收标准只认命令输出，不认口头确认。

### Body
如果本地项目不能启动或测试不能运行，学员很难在课堂上判断 AI 输出是业务问题、环境问题还是权限问题。


### Example
例如：如果 `mvn test` 卡在依赖下载，课堂上 AI 生成的任何修复都无法判断对错；这个问题必须在课前 FAQ 中解决。

### Key Points
- spring-petclinic 至少完成一次启动或测试。
- dolphin-scheduler 至少完成依赖解析和 IDE 索引。
- 课前 FAQ 覆盖 JDK、代理、依赖源、Token 权限等常见错误。
- 环境阻塞在课前处理，正课不占用练习主线。

### Visual
- 拉取代码
- 下载依赖
- 启动应用
- 运行测试
- 截图回传


### Illustration Brief
- 绘制从左上到右下的流程链路，节点依次覆盖：拉取代码、下载依赖、启动应用、运行测试、截图回传。
- 用箭头表现先后顺序，用橙色或高亮描边标出人工 Review、打回或验收节点。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 flow 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
课前跑绿，是课堂能做复杂练习的前提。

### Speaker Notes
- 如果现场仍有人环境失败，安排旁听和课后补跑，避免拖慢全班。
- 不要让环境失败学员在全班面前长时间排错，助教单独处理。

:::slide
id: prework-03
title: 敏感信息准备边界
mode: prep
duration_min: 0
visual: checklist
:::
### Headline
准备 Token 不等于把 Token 暴露给课件、Prompt、截图和日志。

### Body
课程会演示 MCP 和外部系统连接，但所有凭证处理都必须遵守最小权限、脱敏展示和课后回收原则。


### Example
例如：演示 MCP 配置时只展示 `token=****abcd` 和配置位置，不把完整 Token 放进 Prompt、截图、录屏或 MR 描述。

### Key Points
- 只使用课堂所需的最小权限 Token。
- 真实 Token 不进入 Prompt、截图、录屏、课件和 MR。
- 演示时使用脱敏占位符或一次性演示账号。
- 课后按企业规范回收或轮换临时授权。

### Visual
- 可展示：权限入口、脱敏后的配置位置、占位符。
- 不展示：完整 Token、生产地址、真实 AK/SK、内部敏感数据。


### Illustration Brief
- 绘制可勾选的检查清单，检查项覆盖：可展示：权限入口、脱敏后的配置位置、占位符、不展示：完整 Token、生产地址、真实 AK/SK、内部敏感数据。
- 红线项使用警示色，普通项使用中性色；每项配一个简洁图标，避免密集小字。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 checklist 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
安全边界是课程设计的一部分，不是现场提醒一句就够。

### Speaker Notes
- 这页可以作为企业内审或安全同事审查材料。
- 如果需要截图，提前准备脱敏版本，不要现场临时打码。
