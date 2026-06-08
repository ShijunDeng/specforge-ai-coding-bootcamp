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

:::slide
id: sdd-01
title: 作业复盘与今日挑战
mode: talk
duration_min: 8
visual: contrast
:::

### Headline
小项目跑通闭环后，下一步不是直接把同样方式搬到巨型仓库。

### Body
先用第一课作业的脱敏红黑榜复盘微闭环质量，再切换到第二课挑战：在大型存量项目里，先摸清事实、写清规格、拆清任务，再让 AI 动代码。

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

### Takeaway
从小项目微闭环升级到复杂项目 SDD，关键是先把事实和边界讲清楚。

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
AI 改老项目最大的风险不是不会写代码，而是不知道已有系统为什么这样写。

### Body
存量项目中，接口、配置、SPI、依赖、异常处理、日志、测试桩都可能有历史约束。模型如果只看到需求，很容易创造一套看似合理但无法融入系统的实现。

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

### Takeaway
Brownfield 需求需要先把未知变成文档。

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
在动代码前，用四类文档把目标、边界、设计和任务压实。

### Body
SDD 的核心不是写很多文档，而是把模糊需求逐步压缩成可执行任务，让 AI 知道该做什么、不该做什么、做到什么程度算通过。

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

### Takeaway
文档不是交付负担，而是约束 AI 不跑偏的控制面。

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
存量项目开发先问“已有系统怎么做”，再问“我要怎么做”。

### Body
CodeWiki 用于缩短模型和老员工之间的信息差。它的输出不是直接代码，而是 SDD 文档的事实依据。

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

### Takeaway
CodeWiki 的第一产物是可追溯事实，不是代码。

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

### Takeaway
Skill 负责串联标准流程，人负责输入事实、审查缺口和打回修订。

### Speaker Notes
- 演示中要让学员看见 Skill 入口和四阶段连续产出过程，不要只展示最终文档。
- 不追求四份文档一次完美，要刻意展示打回。
- 打回话术示例：Design 缺少 AK/SK 安全设计，请基于现有插件配置规范重写相关章节。
