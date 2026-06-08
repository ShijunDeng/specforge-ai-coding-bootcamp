---
id: smn-design-lab
title: SMN 告警插件 SDD 拆解实操
duration_min: 75
intent: 在不写 Java 业务代码的前提下，用 CodeWiki 和 SDD 产出 SMN 告警插件的四阶文档和可执行任务清单。
outcomes:
  - 能把“新增 SMN 告警插件”拆成 Proposal、Spec、Design、Tasks。
  - 能识别 AK/SK、区域、主题、消息模板、错误处理和测试策略等关键约束。
  - 能把 Tasks 细化到类名、配置文件、测试和验收命令。
  - 能完成同伴 Review 并根据缺口修订文档。
---

# SMN 告警插件 SDD 拆解实操

## Module Brief

本模块要求先检索告警规范，再结合 AK/SK 约束生成 SMN 四套设计文档，并布置课后真实落地大作业。练习拆成查询、成文、审查、冻结任务四个步骤。

## Teaching Design

- **课堂角色**：学员是 SMN 告警插件的设计 Owner，需要产出能让 Agent 和 Reviewer 都照着执行的四阶文档。
- **故事冲突**：一个看似简单的“发告警”需求，实际包含插件扩展点、配置流转、AK/SK 安全、错误处理、测试桩和 MR 验收。
- **练习路径**：先查 CodeWiki，再写 Proposal/Spec，再补 Design 安全和架构，最后把 Tasks 细化到类、配置、测试和命令。
- **课堂红线**：本模块严禁提前生成 Java 业务代码；任何实现冲动都必须回到文档缺口。
- **插图节奏**：需求降维用任务卡，查询用清单，文档职责用矩阵，AK/SK 用红线检查，Tasks 用好坏任务对照。
- **验收证据**：至少两类项目事实来源、四阶文档、同伴 Review 记录、修订后的冻结 Tasks。

:::slide
id: smn-01
title: 动手实操：SMN 需求降维
mode: lab
duration_min: 8
visual: cards
:::
### Headline
练习目标是产出四阶文档，不是写出 Java 代码。

### Body
你需要为 dolphin-scheduler 新增 SMN 告警插件做前置设计，产出可过审的 Proposal、Spec、Design、Tasks。任何业务代码生成都放到课后大作业。


### Example
例如：把“新增 SMN 告警”拆成四张卡：业务上要发什么消息，项目里接哪个插件扩展点，安全上如何处理 AK/SK，交付上提交哪些文档和测试。

### Key Points
- 业务目标：为调度系统新增 SMN 告警插件。
- 外部约束：需要 AK/SK、区域、主题、消息模板等配置。
- 项目约束：遵循现有告警插件接口、配置和测试风格。
- 交付物：四阶文档和 Review 修订记录。
- 红线：本环节严禁生成 Java 业务代码。

### Visual
- 需求降维
- CodeWiki 探查
- 四阶成文
- 同伴 Review
- 任务冻结


### Media
src: ../../assets/demos/smn-requirement-board.svg
type: SMN 需求拆解看板
alt: SMN 告警插件从行为、安全、集成、验证和运维五类约束降维拆解。
caption: SMN 实操先把“新增告警”拆成业务、项目、安全、验证和运维约束，再进入四阶文档。

### Illustration Brief
- 绘制 3-6 张任务卡或概念卡，卡片内容覆盖：需求降维、CodeWiki 探查、四阶成文、同伴 Review、任务冻结。
- 每张卡只保留一个关键词和一句解释，使用图标化符号辅助识别。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 cards 视觉结构；左侧固定为任务目标、输入材料、红线和验收标准；右侧用任务卡或检查清单展示学员产出。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Activity
- 全班先把“新增 SMN 告警插件”拆成业务目标、项目约束、安全约束和交付物四张卡。
- 学员创建本地文档目录，只允许产出 Proposal、Spec、Design、Tasks，不允许生成 Java 业务代码。
- 结束前每人写下一条最担心 AI 跑偏的点，后续 Review 时必须能在文档中找到对应约束。

### Takeaway
这次练习训练“先想清楚再让 AI 写”的能力。

### Speaker Notes
- 助教发现学员开始写代码，要立即拉回文档任务。
- 明确本练习不是纸上谈兵，课后会按这份 Tasks 真正实现。

:::slide
id: smn-02
title: CodeWiki 查询任务卡
mode: lab
duration_min: 12
visual: checklist
:::
### Headline
每组先拿到项目事实，再让 AI 写文档。

### Body
以小组或个人方式查询 dolphin-scheduler 的现有告警插件机制，并把关键结论整理进 Design 的依据部分。


### Example
例如：查询到 Webhook 插件有配置校验和失败日志后，SMN Design 应引用这类事实，而不是凭空发明 `SmnAlertService` 的行为。

### Key Points
- 查询现有 Alert 插件入口、Factory、Channel 或 SPI 注册方式。
- 查询配置模型、配置校验和 UI/后端字段流转。
- 查询飞书、邮件、Webhook 等已有插件的错误处理和测试样例。
- 查询凭证类配置的脱敏、日志和异常规范。
- 记录至少两类可追溯事实来源。

### Visual
- 插件入口
- 配置模型
- 发送逻辑
- 错误处理
- 测试样例
- 安全规范


### Media
src: ../../assets/demos/codewiki-query-session.svg
type: CodeWiki 查询会话
alt: 围绕 SMN 插件入口、配置模型、发送逻辑、错误处理、测试样例和安全规范的查询结果。
caption: CodeWiki 查询任务卡必须把查询结果转成 Design 依据，而不是复制大段代码。

### Illustration Brief
- 绘制可勾选的检查清单，检查项覆盖：插件入口、配置模型、发送逻辑、错误处理、测试样例、安全规范。
- 红线项使用警示色，普通项使用中性色；每项配一个简洁图标，避免密集小字。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 checklist 视觉结构；左侧固定为任务目标、输入材料、红线和验收标准；右侧用任务卡或检查清单展示学员产出。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Activity
- 学员至少完成五类查询：插件入口、配置模型、发送逻辑、错误处理、测试样例。
- 每条查询结论必须转写成一句设计依据，标注来自哪个模块、类、配置或已有插件。
- 结尾抽样检查两份 Design 依据，重点看是否只是复制代码，还是提炼成约束。

### Takeaway
没有事实依据的 Design 不进入 Review。

### Speaker Notes
- 如果 CodeWiki 无法使用，发放提前准备的查询摘要，但仍要求学员把摘要转成设计依据。
- 要求学员不要复制大段代码到文档，只保留约束和引用位置。

:::slide
id: smn-03
title: Proposal 与 Spec：先定义边界和行为
mode: lab
duration_min: 10
visual: matrix
:::
### Headline
Proposal 决定做不做和做多大，Spec 决定系统应该表现成什么样。

### Body
这两份文档必须把业务目标、范围、非范围、用户可见行为和验收条件写清楚，避免后续实现阶段不断补需求。


### Example
例如：Spec 可以写“topic 为空时保存配置失败并提示原因”；Design 才写“在配置校验类中检查 topic”；Tasks 再落到具体类和测试。

### Key Points
- Proposal 写业务动机、目标用户、范围、非范围、风险和里程碑。
- Spec 写配置项、发送行为、失败行为、兼容性和可测试验收条件。
- 每条 Spec 都要能被测试、日志、配置或 Review 证明。
- 不要把实现类名塞进 Spec；类名属于 Design 和 Tasks。

### Visual
| 文档 | 回答的问题 | 最低合格标准 |
| --- | --- | --- |
| Proposal | 为什么做、做多大 | 范围和非范围明确 |
| Spec | 系统满足什么行为 | 每条都有验收条件 |
| Design | 如何接入现有系统 | 有架构、数据、安全、测试设计 |
| Tasks | 谁先做、改哪里 | 颗粒度到类名和配置文件 |


### Media
src: ../../assets/demos/proposal-spec-workspace.svg
type: Proposal/Spec 工作区
alt: SMN Proposal 定义问题、范围和非范围，Spec 定义可验收行为和安全边界。
caption: Proposal 和 Spec 先回答“为什么做、做多大、系统应表现成什么样”，避免实现阶段不断补需求。

### Illustration Brief
- 绘制二维矩阵或对照表，表格内容围绕：文档 / 回答的问题、Proposal / 为什么做、做多大、Spec / 系统满足什么行为、Design / 如何接入现有系统、Tasks / 谁先做、改哪里。
- 重点列使用浅色底纹，表头清晰，单元格只保留关键词和短语。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 matrix 视觉结构；左侧固定为任务目标、输入材料、红线和验收标准；右侧用任务卡或检查清单展示学员产出。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Activity
- 学员先用 3 分钟写 Proposal 的范围和非范围，明确本次不做哪些能力。
- 再用 5 分钟把 SMN 配置、发送成功、发送失败、兼容性写成可验收 Spec。
- 最后同桌互查一条 Spec：如果不能用测试、日志、配置或 Review 证明，就打回重写。

### Takeaway
四类文档各管一层，不要混成一篇万能说明。

### Speaker Notes
- 让学员把“我要加 SMN”翻译成四类不同问题。
- 现场抽查一条 Spec，看它是否可测试。

:::slide
id: smn-04
title: AK/SK 安全设计红线
mode: lab
duration_min: 12
visual: checklist
:::
### Headline
告警插件不是只会发消息，还要正确处理凭证和日志。

### Body
SMN 接入涉及 AK/SK、区域、主题、消息模板等配置。凭证处理属于架构设计，不是实现细节，必须写入 Design 和验收标准。


### Example
例如：错误日志可以写“SMN send failed, requestId=xxx, ak=****1234”，不能写完整 AK/SK、原始请求体或生产 endpoint。

### Key Points
- AK/SK 通过配置注入，不硬编码。
- 日志和异常信息不得输出完整密钥。
- 配置校验要覆盖空值、格式和区域错误。
- 发送失败要有可诊断错误，不吞异常。
- 测试数据使用假凭证和本地桩。

### Visual
- 配置注入
- 脱敏日志
- 参数校验
- 失败诊断
- 假凭证测试



### Media
src: ../../assets/demos/smn-security-review.svg
type: 代码配置截图
alt: SMN 配置、脱敏日志和安全 Review 清单。
caption: 安全设计要能在配置、日志和测试画面中被看见，而不是只写一句“注意安全”。

### Illustration Brief
- 绘制可勾选的检查清单，检查项覆盖：配置注入、脱敏日志、参数校验、失败诊断、假凭证测试。
- 红线项使用警示色，普通项使用中性色；每项配一个简洁图标，避免密集小字。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 checklist 视觉结构；左侧固定为任务目标、输入材料、红线和验收标准；右侧用任务卡或检查清单展示学员产出。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Activity
- 学员在 Design 中单独开设“凭证与日志安全”小节，写明 AK/SK 来源、脱敏、校验和测试方式。
- 对照本页清单逐项检查，缺少任意一项都不能进入 Tasks 编写。
- 抽样展示一条错误写法，例如“日志打印完整异常上下文”，现场改写成脱敏策略。

### Takeaway
缺少安全设计的 Design 直接判定不合格。

### Speaker Notes
- 这页要单独停留，确保每位学员在 Design 中能找到对应内容。
- 不要求讲师现场讲具体云产品 SDK 细节，重点是安全边界和可测试性。

:::slide
id: smn-05
title: Tasks 颗粒度：细到类名和配置文件
mode: lab
duration_min: 15
visual: matrix
:::
### Headline
合格的任务清单要让 Agent 能逐项执行，也让人能逐项验收。

### Body
Tasks 是给 Agent 的施工图，也是给 Reviewer 的检查表。颗粒度太粗会让模型重新发散，颗粒度太细但无验收会让实现难以收口。


### Example
例如：坏任务是“实现 SMN”；好任务是“参考现有邮件插件新增 SMN 配置校验测试，覆盖 region 缺失、topic 缺失和 AK/SK 脱敏”。

### Key Points
- 任务必须能排序，能标记完成，能回滚。
- 每个任务都应有目标文件、改动意图和验收方式。
- 类名和配置文件来自 CodeWiki 或现有代码事实，不凭空发明。
- 测试任务要覆盖配置校验、发送成功、发送失败和脱敏。

### Visual
| 层级 | 好任务 | 坏任务 |
| --- | --- | --- |
| 接口接入 | 新增 SmnAlertChannelFactory 并注册到现有 SPI | 实现 SMN |
| 配置 | 在告警配置模型中加入 region、topic、ak、sk | 补充配置 |
| 发送逻辑 | 封装 SmnClientAdapter 并处理超时与错误码 | 调接口 |
| 测试 | 参考现有插件新增配置校验和发送失败测试 | 写测试 |



### Media
src: ../../assets/demos/smn-security-review.svg
type: 代码配置截图
alt: SMN Tasks 如何落到配置、日志和测试检查项。
caption: 好任务要能指向具体配置、类、测试和安全证据，而不是一句“实现 SMN”。

### Illustration Brief
- 绘制二维矩阵或对照表，表格内容围绕：层级 / 好任务、接口接入 / 新增 SmnAlertChannelFactory 并注册到现有 SPI、配置 / 在告警配置模型中加入 region、topic、ak、sk、发送逻辑 / 封装 SmnClientAdapter 并处理超时与错误码、测试 / 参考现有插件新增配置校验和发送失败测试。
- 重点列使用浅色底纹，表头清晰，单元格只保留关键词和短语。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 matrix 视觉结构；左侧固定为任务目标、输入材料、红线和验收标准；右侧用任务卡或检查清单展示学员产出。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Activity
- 学员把 Tasks 分成接口接入、配置、发送逻辑、测试、文档五组，每组至少一条验收命令或检查方式。
- 同桌互换 Tasks，按“我能不能直接交给 Agent 执行”来判断粒度是否合格。
- 现场挑一条过粗任务，把它拆成文件、类、改动意图和验收证据四列。

### Takeaway
Tasks 越可执行，Agent 越不容易自己编路线。

### Speaker Notes
- 类名示例需要根据真实 CodeWiki 查询结果调整；如果项目实际命名不同，以现有代码为准。
- 让学员互换 Tasks 互评，看对方能否直接照着实现。

:::slide
id: smn-06
title: 文档审查：禁止提前生成业务代码
mode: lab
duration_min: 13
visual: checklist
:::
### Headline
如果文档没有过审，提前生成代码只会放大错误。

### Body
同伴 Review 的目标是找出文档中会导致实现跑偏的缺口，尤其是安全、兼容、错误处理和测试策略。


### Example
例如：同伴 Review 发现 Tasks 没有失败路径测试，就写入打回意见“补充发送超时、鉴权失败、配置缺失三类测试任务”。

### Key Points
- Proposal 是否定义范围和非范围。
- Spec 是否有可测试验收条件。
- Design 是否引用 CodeWiki 或现有代码事实。
- Tasks 是否具体到文件、类、配置和测试。
- 安全、兼容性、错误处理是否显式覆盖。

### Visual
- 范围清楚
- 验收可测
- 设计有据
- 任务可执行
- 安全完整


### Media
src: ../../assets/demos/doc-review-no-code.svg
type: 文档 Review 截图
alt: SDD 文档 Review 在缺少凭证脱敏示例和任务粒度过粗时阻止进入实现。
caption: 文档没有过审就生成代码，只会把文档缺口放大成错误实现。

### Illustration Brief
- 绘制可勾选的检查清单，检查项覆盖：范围清楚、验收可测、设计有据、任务可执行、安全完整。
- 红线项使用警示色，普通项使用中性色；每项配一个简洁图标，避免密集小字。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 checklist 视觉结构；左侧固定为任务目标、输入材料、红线和验收标准；右侧用任务卡或检查清单展示学员产出。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Activity
- 两人互评四阶文档，Reviewer 只找会导致实现跑偏的缺口，不纠结措辞。
- 每份文档至少记录一条打回意见和一次修订，例如安全设计缺失、任务粒度过粗或测试策略不可执行。
- 结束前冻结 Tasks，标记哪些条目可进入课后实现，哪些仍需补查 CodeWiki。

### Takeaway
文档 Review 结论要写回 Spec 或任务清单。

### Speaker Notes
- 结尾安排 2 组展示一条被打回的文档缺口。
- 打回不是失败，是 SDD 正常动作。

:::slide
id: smn-07
title: 第二课复盘与任务冻结
mode: summary
duration_min: 5
visual: flow
:::
### Headline
面对复杂工程，AI 的第一价值是帮助你读懂、拆解和验证。

### Body
第二课结束时，你应该拿到一份过审或待修订的 SMN Tasks。课后实现只允许按这份任务清单逐项推进。


### Example
例如：冻结后的 Tasks 应像施工清单：先加配置模型，再接插件注册，再封装客户端，再补测试；课后实现不能重新让 AI 自由发挥。

### Key Points
- 查规范防造轮子。
- 拆任务防偏航。
- 写安全要求防泄露。
- 做 Review 防错误进入实现。
- 照单施工防大范围失控。

### Visual
- 查规范
- 写规格
- 做设计
- 拆任务
- 文档 Review
- 任务冻结


### Media
src: ../../assets/demos/frozen-task-board.svg
type: 冻结任务看板
alt: SMN 课后实现前的任务看板标记 Ready、Needs review 和 Frozen 三类任务状态。
caption: 第二课的最终产物是可执行、可 Review、可冻结的任务清单，而不是随手生成的业务代码。

### Illustration Brief
- 绘制从左上到右下的流程链路，节点依次覆盖：查规范、写规格、做设计、拆任务、文档 Review、任务冻结。
- 用箭头表现先后顺序，用橙色或高亮描边标出人工 Review、打回或验收节点。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 flow 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
文档想清楚，代码才可能水到渠成。

### Speaker Notes
- 回扣第一课：微闭环是执行能力，第二课 SDD 是方向控制。
- 明确课后大作业从冻结后的 Tasks 开始，而不是重新发散。
