---
id: sdd-codewiki
title: 存量项目、CodeWiki 与 SDD 四阶文档
duration_min: 80
intent: 理解复杂存量项目中的 AI 风险，并掌握用 CodeWiki 探查项目事实、用 SDD 文档约束实现路径的方法。
outcomes:
  - 能解释 Greenfield 与 Brownfield 的差异。
  - 能判断 Vibe Coding 在复杂项目中的边界。
  - 能产出 Proposal、Spec、Design、Tasks 四类文档的最小合格版本。
  - 能把 CodeWiki 查询结果回填到设计依据中。
---

# 存量项目、CodeWiki 与 SDD 四阶文档

## Module Brief

本模块进入 dolphin-scheduler，围绕 SMN 告警插件讲解复杂存量项目痛点、Vibe Coding 局限、SDD 流程、CodeWiki 查询和飞书告警演示，是第二课的核心方法论。

## Teaching Design

- **课堂角色**：学员从小项目执行者转为复杂存量项目的设计负责人，需要先查事实、定边界，再让 AI 写。
- **故事冲突**：Petclinic 里有效的快节奏，直接搬到 dolphin-scheduler 可能造成架构不兼容、安全缺口和不可 Review 的大 diff。
- **核心案例**：以新增告警插件为切入口，先用飞书或 Webhook 作为既有样例，再引出 SMN 作为学员练习目标。
- **课堂转折**：本模块的关键转折是“今天第二课第一条纪律：先不写业务代码”。这句话要反复回扣。
- **插图节奏**：Brownfield 风险用检查清单，Vibe/SDD 边界用矩阵，四阶文档用流水线，CodeWiki 查询用任务卡。
- **验收证据**：CodeWiki 查询结论、四阶文档初版、人工打回意见、修订后的设计依据。

:::slide
id: sdd-01
title: 作业复盘与今日挑战
mode: talk
duration_min: 8
visual: contrast
:::
### Headline
小项目会走路以后，别直接闭眼冲进几十万行老系统。

### Body
先复盘 Petclinic 作业里的红灯：测试没跑、Token 截图泄露、AI 改了无关文件。然后把同样问题放大到 dolphin-scheduler，你会发现“先写代码”反而是最慢的路。


### Example
例如：Petclinic 里 AI 多改一个 Controller 只是难 Review；在 dolphin-scheduler 里绕开现有 Alert SPI，可能就是一个能编译但永远接不进系统的插件。

### Key Points
- 红榜看证据链：功能、单测、MR、检视、修复是否完整。
- 黑榜看问题类型：Token 配置、MCP 权限、测试缺口和人工 Review 缺失。
- Petclinic 规模小、路径短、错误容易定位。
- dolphin-scheduler 模块多、约束多、历史行为多。
- 大项目里读懂现状往往比写第一版代码更重要。
- 第二课第一条纪律：先不写业务代码。

### Visual
- 作业复盘：红榜实践、黑榜问题、共性卡点。
- 今日挑战：几十万行存量项目、隐式约束、长反馈链。


### Media
src: ../../assets/demos/homework-evidence-review.svg
type: 作业证据复盘看板
alt: Petclinic 和 SMN 作业的提示词、diff、测试、文档、Review 结果在证据看板中被复核。
caption: 从第一课进入第二课前，要先看证据链质量，再切换到复杂存量项目的事实探查。

### Illustration Brief
- 绘制左右对比图，对比项覆盖：作业复盘：红榜实践、黑榜问题、共性卡点、今日挑战：几十万行存量项目、隐式约束、长反馈链。
- 左侧表达常见低质量状态，右侧表达目标状态，用颜色区分风险和目标。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 contrast 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
进入老项目前，先问路，再开车。

### Speaker Notes
- 让学员说出自己维护老项目时最怕 AI 改坏什么。
- 红黑榜只展示脱敏案例和问题类型，不公开羞辱个人。
- 如果有第一课作业共性问题，用 3 分钟复盘，不要拖长。

:::slide
id: sdd-02
title: Brownfield 的真实风险
mode: talk
duration_min: 10
visual: checklist
:::
### Headline
Brownfield 像一座老城：最危险的不是不会修路，而是不知道哪条路不能挖。

### Body
接口、配置、SPI、依赖、异常处理、日志和测试桩都是这座老城里的地下管线。AI 如果只看到“新增 SMN 告警”，很容易造一条漂亮的新路，却没有接到任何入口。


### Example
例如：AI 新建 `SmnAlertService` 并能编译，但没有在现有 Alert SPI 注册，也没有复用配置校验和测试夹具；这类代码最迷惑，因为它看起来“完成了”。

### Key Points
- 可能重复造轮子，绕开已有扩展点。
- 可能破坏配置兼容性或默认行为。
- 可能忽略权限、鉴权、日志脱敏。
- 可能引入跨模块依赖或循环依赖。
- 可能生成能编译但不符合项目风格的代码。

### Visual
- 架构风险
- 兼容风险
- 安全风险
- 测试风险
- 运维风险


### Media
src: ../../assets/demos/brownfield-risk-map.svg
type: Brownfield 风险地图
alt: SMN 插件需求周围的 SPI、敏感日志、配置兼容和测试夹具风险。
caption: Brownfield 需求不能只看新增功能，还要先定位存量扩展点、兼容边界和安全红线。

### Illustration Brief
- 绘制可勾选的检查清单，检查项覆盖：架构风险、兼容风险、安全风险、测试风险、运维风险。
- 红线项使用警示色，普通项使用中性色；每项配一个简洁图标，避免密集小字。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 checklist 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
老项目开发的第一步不是写代码，是画出地下管线。

### Speaker Notes
- 这页可以接 SMN 告警需求：不是“调个云接口”这么简单。
- 避免使用贬低性的项目描述，聚焦工程约束。

:::slide
id: sdd-03
title: Vibe Coding 的边界
mode: talk
duration_min: 8
visual: matrix
:::
### Headline
小步快跑适合反馈快的任务，不适合一开始就跨越未知架构。

### Body
Vibe Coding 的问题不是“快”，而是在未知太多时，快会放大错误路径。大型项目要先用文档压住方向。


### Example
例如：改一处文案可以小步试；新增 SMN 告警插件不能直接 Vibe，因为 AK/SK、区域、主题、失败重试和配置兼容都还没定义。

### Key Points
- 低风险短反馈任务可以直接小步尝试。
- 跨模块任务要先让 AI 输出计划并人工 Review。
- 安全敏感任务要先写清权限、凭证、日志和审计。
- 无法解释现有架构时，不允许进入实现阶段。

### Visual
| 条件 | 可以 Vibe | 必须 SDD |
| --- | --- | --- |
| 上下文 | 单文件或少量文件 | 跨模块、跨配置 |
| 反馈 | 单测快速跑 | 反馈链长 |
| 风险 | 易回滚 | 影响安全、兼容、生产 |
| 事实 | 已知 | 需要探查 |


### Media
src: ../../assets/demos/method-choice-switchboard.svg
type: Vibe/SDD 选择看板
alt: 低风险短反馈任务适合 Vibe Coding，跨模块和安全敏感任务必须进入 SDD。
caption: Vibe Coding 和 SDD 的边界由不确定性、反馈链长度和错误成本共同决定。

### Illustration Brief
- 绘制二维矩阵或对照表，表格内容围绕：条件 / 可以 Vibe、上下文 / 单文件或少量文件、反馈 / 单测快速跑、风险 / 易回滚、事实 / 已知。
- 重点列使用浅色底纹，表头清晰，单元格只保留关键词和短语。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 matrix 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
方法选择取决于不确定性和错误成本。

### Speaker Notes
- 强调第一课没有错，只是适用条件不同。
- 可以让学员判断自己的日常需求属于哪一列。

:::slide
id: sdd-04
title: SDD 四阶流水线
mode: talk
duration_min: 12
visual: flow
:::
### Headline
Proposal、Spec、Design、Tasks 是四道闸，不是四份装饰文档。

### Body
每一道闸都拦一种错误：Proposal 拦范围膨胀，Spec 拦行为含糊，Design 拦架构错接，Tasks 拦“请实现一下”这种大颗粒任务。


### Example
例如：Proposal 先声明“不改调度核心”；Spec 写“topic 为空保存失败”；Design 写“复用现有 Alert SPI”；Tasks 才写“新增配置校验测试和发送失败测试”。

### Key Points
- Proposal：为什么做，范围是什么，非范围是什么。
- Spec：系统应满足哪些可验收行为。
- Design：如何接入现有架构、依赖、配置和安全要求。
- Tasks：按类、配置、测试拆成可执行步骤。
- Implementation：过审后再让 Agent 按任务小步实现。
- Validation：每步都有测试、检视或人工 Review 证据。

### Visual
- Proposal
- Spec
- Design
- Tasks
- Implementation
- Validation


### Media
src: ../../assets/demos/sdd-pipeline-workspace.svg
type: SDD 文档工作区
alt: Proposal、Spec、Design 和 Tasks 四类文档在进入实现前分别承载范围、行为、设计和任务。
caption: SDD 四阶流水线让 AI 在动代码前先对齐目标、边界、设计和任务颗粒度。

### Illustration Brief
- 绘制从左上到右下的流程链路，节点依次覆盖：Proposal、Spec、Design、Tasks、Implementation、Validation。
- 用箭头表现先后顺序，用橙色或高亮描边标出人工 Review、打回或验收节点。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 flow 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
文档不是慢，是为了不让错误实现跑得太快。

### Speaker Notes
- 对照本课件工程本身：Markdown modules 和 course.yaml 就是 PPT 的源规格。
- 讲清楚四类文档各管一层，不要混成一篇万能说明。

:::slide
id: sdd-05
title: SDD 质量门禁
mode: talk
duration_min: 10
visual: checklist
:::
### Headline
好的 SDD 文档必须能阻止错误代码进入实现阶段。

### Body
如果文档只是复述需求，无法指导实现和验收，它就没有完成 SDD 的职责。


### Example
例如：如果 Design 没写 AK/SK 脱敏，Tasks 里就可能出现“打印完整异常上下文”的实现任务；好文档要在编码前挡住这种风险。

### Key Points
- 每条需求都有验收条件。
- 每个设计决策都能追溯到项目现状或约束。
- 每个任务都能定位到具体文件、类或配置。
- 安全、权限、兼容性、测试策略显式写出。
- 人工 Review 通过后才进入编码。

### Visual
- 可验收
- 可追溯
- 可执行
- 可测试
- 可审查


### Media
src: ../../assets/demos/sdd-quality-gate.svg
type: SDD 门禁截图
alt: SDD 文档在缺少安全、重试、兼容和测试依据时阻止进入实现阶段。
caption: 好的 SDD 文档不是装饰，它应该能在编码前挡住错误实现路径。

### Illustration Brief
- 绘制可勾选的检查清单，检查项覆盖：可验收、可追溯、可执行、可测试、可审查。
- 红线项使用警示色，普通项使用中性色；每项配一个简洁图标，避免密集小字。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 checklist 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
SDD 的价值在于提前暴露歧义。

### Speaker Notes
- 缺少 AK/SK 设计的告警插件文档不能进入实现。
- 只写“新增 SMN 插件”的任务粒度太粗。

:::slide
id: sdd-06
title: CodeWiki：先问现状，再问实现
mode: talk
duration_min: 10
visual: cards
:::
### Headline
CodeWiki 是问老员工的替身：先问项目事实，再谈实现方案。

### Body
不要一上来问“帮我写 SMN 插件”。先问邮件、Webhook、飞书插件如何注册、如何读取配置、失败怎么处理、测试夹具怎么写。


### Example
例如：CodeWiki 查到 Webhook 插件的失败日志会脱敏，你就把这条事实写进 SMN Design；后面 AI 如果生成完整 AK/SK 日志，就能被文档直接打回。

### Key Points
- 现状：现有告警插件有哪些，入口在哪里。
- 约束：配置、SPI、依赖、异常处理有什么规范。
- 样例：邮件、飞书、Webhook 插件如何组织代码。
- 风险：鉴权、重试、日志脱敏和测试有什么注意事项。
- 回填：把关键查询结论写进 Design 的依据部分。

### Visual
- 现状问题
- 约束问题
- 样例问题
- 风险问题


### Media
src: ../../assets/demos/codewiki-query-session.svg
type: CodeWiki 查询截图
alt: 围绕告警插件现状、SPI 注册、配置默认值、失败处理和测试夹具的 CodeWiki 查询会话。
caption: CodeWiki 的价值是把老项目事实转成 Design 依据，而不是直接跳到代码生成。

### Illustration Brief
- 绘制 3-6 张任务卡或概念卡，卡片内容覆盖：现状问题、约束问题、样例问题、风险问题。
- 每张卡只保留一个关键词和一句解释，使用图标化符号辅助识别。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 cards 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
CodeWiki 给的是路标，不是方向盘。

### Speaker Notes
- 不要问“帮我写 SMN 插件”，先问“项目已有插件机制是什么”。
- 演示时把查询结果复制到文档中，标明来源，训练可追溯习惯。

:::slide
id: sdd-07
title: 查询问题设计：围绕四类事实
mode: demo
duration_min: 10
visual: checklist
:::
### Headline
问得越像项目研究员，得到的上下文越能约束后续实现。

### Body
CodeWiki 查询应该围绕现状、扩展点、配置和测试设计，而不是直接要求它生成最终业务代码。


### Example
例如：好问题是“现有告警插件测试如何模拟发送失败”；弱问题是“帮我实现 SMN 告警”，前者能产出设计依据，后者容易直接生成不可靠代码。

### Key Points
- 这个项目现有告警插件的入口类和注册机制是什么？
- 飞书或 Webhook 告警插件如何读取配置、处理失败和写测试？
- 新增一种告警通道需要修改哪些模块、配置文件和文档？
- 凭证类配置在现有项目中如何脱敏和校验？
- 哪些测试可以作为 SMN 插件的参考样例？

### Visual
- 查询一：插件入口和 SPI。
- 查询二：配置模型和默认值。
- 查询三：发送失败和重试。
- 查询四：测试样例和桩。
- 查询五：安全与脱敏。


### Media
src: ../../assets/demos/codewiki-question-builder.svg
type: CodeWiki 提问模板
alt: 围绕插件注册、配置默认值、失败重试、测试夹具和安全要求构造 CodeWiki 查询。
caption: 好的 CodeWiki 问题要产出可写进 Design 的事实依据，而不是诱导它直接生成业务代码。

### Illustration Brief
- 绘制可勾选的检查清单，检查项覆盖：查询一：插件入口和 SPI、查询二：配置模型和默认值、查询三：发送失败和重试、查询四：测试样例和桩、查询五：安全与脱敏。
- 红线项使用警示色，普通项使用中性色；每项配一个简洁图标，避免密集小字。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 checklist 视觉结构；左侧固定为演示目标、关键暂停点和验收口径；右侧用步骤图展示现场操作顺序。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Activity
- 讲师先问 CodeWiki 三类问题：现有插件入口、配置流转、测试样例；把查询结论整理成文档输入。
- 调用 SDD Skill 时按 Proposal、Spec、Design、Tasks 顺序逐步生成，不跳过上一阶段 Review。
- 刻意打回一次 Design，例如缺少 AK/SK 脱敏或错误处理，再展示修订后如何回填到 Tasks。

### Takeaway
查询问题本身就是设计活动。

### Speaker Notes
- 可以现场让学员补充一个查询问题，再判断它是否能产生设计依据。
- 如果 CodeWiki 不稳定，用准备好的查询结果样例继续讲“如何问”。

:::slide
id: sdd-08
title: 课堂演示：Skill 串起四阶文档
mode: demo
duration_min: 12
visual: flow
:::
### Headline
先用 CodeWiki 探路，再用 SDD Skill 连贯生成四阶文档。

### Body
你将看到如何以飞书告警或已有 Webhook 插件为样例，查询项目规范、整理约束，再调用 SDD Skill 按 Proposal、Spec、Design、Tasks 的顺序连续产出文档初版，并完成一次人工打回。


### Example
例如：SDD Skill 生成 Design 后，你发现没有凭证脱敏策略，就打回“请基于现有插件配置规范补充 AK/SK 安全设计”，再让它更新 Tasks。

### Key Points
- 查现有插件入口、配置模型、发送逻辑和测试样例。
- 整理可复用约束，不直接复制实现。
- 调用 SDD Skill，把 CodeWiki 事实作为输入上下文。
- 按 Proposal -> Spec -> Design -> Tasks 连贯生成，上一阶段结论进入下一阶段。
- 检查四阶文档职责是否混淆。
- 人工打回缺口，例如安全设计、任务粒度或测试策略不足。
- 修订后把 Review 结论写回文档。

### Visual
- 查现有插件
- 汇总 CodeWiki 事实
- 调用 SDD Skill
- Proposal
- Spec
- Design
- Tasks
- 打回修订



### Media
src: ../../assets/demos/codewiki-sdd-animated.svg
type: 动态演示图
alt: CodeWiki 查询结果进入 Proposal、Spec、Design、Tasks 的动态流转。
caption: 事实不能停在查询窗口里，必须回填到 Design 依据和 Tasks 约束中。

### Illustration Brief
- 绘制从左上到右下的流程链路，节点依次覆盖：查现有插件、汇总 CodeWiki 事实、调用 SDD Skill、Proposal、Spec、Design、Tasks。
- 用箭头表现先后顺序，用橙色或高亮描边标出人工 Review、打回或验收节点。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 flow 视觉结构；左侧固定为演示目标、关键暂停点和验收口径；右侧用步骤图展示现场操作顺序。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Activity
- 讲师先展示输入材料和上下文边界，再执行生成或工具调用。
- 每到一个 Review 点暂停 20-40 秒，说出采纳、打回或缩小范围的理由。
- 演示结束时保留一条可复核证据：测试结果、MR 链接、文档 diff 或检视意见。

### Takeaway
Skill 负责串联标准流程，人负责输入事实、审查缺口和打回修订。

### Speaker Notes
- 演示中要让学员看见 Skill 入口和四阶段连续产出过程，不要只展示最终文档。
- 不追求四份文档一次完美，要刻意展示打回。
- 打回话术示例：Design 缺少 AK/SK 安全设计，请基于现有插件配置规范重写相关章节。
