---
id: smn-design-lab
title: CodeSpec 与端到端 SDD
duration_min: 65
show_divider: false
intent: 在存量项目中校准全量设计，再完成一次特性 SDD 闭环。
outcomes:
  - 能识别 Greenfield 与 Brownfield 的上下文差异。
  - 能审核全量设计基线并修正与代码不一致的内容。
  - 能完成 Spec、Design、Tasks、实现和验证的综合练习。
---

## Module Brief

练习围绕真实代码事实与人工审核展开；CodeSpec 具体步骤和产物以内部联调结果为准。

:::slide
id: course-32
title: 项目起点差异
mode: talk
duration_min: 4
visual: contrast
:::
### Headline
Brownfield 不只要知道目标，还要尊重系统已经形成的约束。

### Body
Greenfield 从目标和技术选择起步；Brownfield 还要识别架构、领域模型、依赖、兼容性、测试和隐式规范。

### Example
在新项目中可以选择接口风格；在存量项目中，同一选择可能破坏既有客户端、数据库或测试约定。

### Key Points
- Greenfield：目标、用户、技术选型和初始边界。
- Brownfield：现有架构、领域模型和模块依赖。
- Brownfield：兼容要求、数据迁移和测试入口。
- Brownfield：代码中存在但文档未记录的隐式规范。

### Visual
- Greenfield：从目标和技术选型建立系统
- Brownfield：先发现现状、依赖、兼容与隐式规范

### Illustration Brief
绘制新建地基与既有建筑改造的抽象对比，使用工程图语言而非装饰插画。

### Layout Contract
左侧解释风险来源，右侧两栏对比；突出 Brownfield 的事实发现动作。

### Takeaway
Brownfield 的第一步不是设计未来，而是读懂现在。

### Speaker Notes
让学员举出所在项目的一条隐式规范，并说明它通常藏在哪里。

:::slide
id: course-33
title: 全量设计基线
mode: talk
duration_min: 5
visual: cards
:::
### Headline
规则、规格和设计共同构成 Agent 理解存量项目的基线。

### Body
AGENTS.md 记录研发规则，全量规格描述现有业务能力，全量设计记录架构、模块、模型、接口、数据和关键决策。

### Example
如果全量设计声称模块直接调用数据库，但真实代码通过领域服务访问，就必须以代码证据修正设计。

### Key Points
- 规则层：构建测试、代码约定、安全和交付要求。
- 规格层：系统已有业务能力、行为与边界。
- 设计层：架构、模块、领域模型、接口和数据关系。
- 校准原则：代码、测试和运行结果优先于模型猜测。

### Visual
- 规则：AGENTS.md 与工程约定
- 规格：现有业务能力与边界
- 设计：架构、模块、模型、接口、数据
- 证据：代码、测试、配置和运行结果

### Illustration Brief
绘制规则、规格、设计三层上下文，底部以证据基座支撑并允许校准。

### Layout Contract
左侧说明各层职责，右侧三层结构图；不要臆造 CodeSpec 文件名。

### Takeaway
全量设计是可校准的认知基线，不是自动生成的真相。

### Speaker Notes
CodeSpec 对全量规格与全量设计的正式定义、目录和更新规则待内部补充。

:::slide
id: course-34
title: "实战: SDD全仓初始化"
mode: lab
duration_min: 11
visual: checklist
:::
### Headline
生成只是起点，逐项用真实代码校准才算完成初始化。

### Body
使用 CodeSpec 生成项目规范、全量规格和全量设计，并抽查核心模块与领域对象。

### Example
选择一个核心模块，逐项对照入口、服务、模型、数据关系和测试；发现错误后修改产物并记录证据。

### Key Points
- 任务目标：形成可供后续特性开发使用的项目基线。
- 操作步骤：初始化 → 生成 → 抽查 → 修正 → 复核。
- 抽查范围：核心模块、领域对象、接口、数据关系和测试入口。
- 验收标准：至少修正一处与真实代码不一致的描述。
- 内部步骤：命令、目录、审批和更新规则待联调后补充。

### Visual
- 项目规范已生成并人工检查
- 全量规格与真实业务能力一致
- 全量设计覆盖核心模块和领域对象
- 每个关键判断有代码或测试证据
- 至少完成一次明确修正
- 内部执行步骤待补充

### Illustration Brief
绘制操作检查清单与产物清单，内部命令区使用占位，不展示伪造目录。

### Layout Contract
左侧固定任务目标、步骤和验收，右侧检查清单；内部工具细节明确标记待补充。

### Activity
- 学员按内部联调手册初始化仓库，并选择一个核心模块完成证据抽查。
- 提交一份“生成判断—代码证据—修正结果”记录。

### Takeaway
初始化完成的标志，是基线被真实代码校准过。

### Speaker Notes
CodeSpec 具体执行步骤待内部工具联调后补充；若联调未完成，用讲师准备的脱敏产物进行审核练习。

:::slide
id: course-35
title: 特性开发流程介绍
mode: talk
duration_min: 5
visual: flow
:::
### Headline
每个阶段都要有明确输入、输出、审核人和返工路径。

### Body
特性从原始需求进入澄清、Spec、Design、Tasks、Implementation 和 Verification，问题可以回到最近的错误来源。

### Example
实现阶段发现数据模型无法支持验收条件，应回到 Design 或 Spec 修订，而不是只在代码里打补丁。

### Key Points
- 原始需求：说明业务目标与背景。
- 澄清与 Spec：确认范围、行为、边界和验收。
- Design：确定方案、兼容性、数据和测试策略。
- Tasks：按依赖拆分可验证工作项。
- Implementation / Verification：实现并对照规格验收。

### Visual
- 原始需求
- 澄清
- Spec
- Design
- Tasks
- Implementation
- Verification

### Illustration Brief
绘制七阶段流程，并从验证、实现、任务分别画回最近上游的返工虚线。

### Layout Contract
左侧解释输入输出，右侧流程与返工路径；每个阶段只放一个关键词。

### Takeaway
返工不是失败，返错层级才会制造技术债。

### Speaker Notes
CodeSpec 实际状态与审批动作待内部确认，本页只讲端到端方法。

:::slide
id: course-36
title: 人工审核节点
mode: talk
duration_min: 5
visual: checklist
:::
### Headline
人在四个 Gate 上审核不同问题，不能只在最后看代码。

### Body
Spec、Design、Tasks 和实现阶段分别检查业务、技术、执行与证据完整性。

### Example
一个范围错误应在 Spec Gate 打回；如果等到 Diff Review 才发现，后续设计、任务和代码都会一起返工。

### Key Points
- Spec Gate：范围、业务行为、边界和验收是否清楚。
- Design Gate：方案、兼容性、数据、安全与测试是否合理。
- Tasks Gate：颗粒度、依赖、顺序和完成标准是否可执行。
- Implementation Gate：Diff、测试、需求覆盖和未完成风险是否可复核。
- 每次打回都记录原因和修订结果。

### Visual
- Spec：业务正确
- Design：技术可行
- Tasks：执行可落地
- Implementation：证据可复核

### Illustration Brief
绘制四道 Review Gate，每道标出审核对象和打回方向。

### Layout Contract
左侧说明审核职责，右侧四道门禁；颜色由业务到代码逐步变化。

### Takeaway
审核越早发生，修正越便宜、影响越小。

### Speaker Notes
让学员判断几个典型问题应在哪个 Gate 被发现。

:::slide
id: course-37
title: 进阶需求实战
mode: lab
duration_min: 25
visual: cards
:::
### Headline
完成一次包含业务规则、数据变化和查询能力的 SDD 综合练习。

### Body
任务必须经历澄清、Spec、Design、Tasks、至少一次人工打回、核心实现和测试验证。

### Example
讲师发布一项综合需求，明确业务目标、范围、兼容要求和测试目标；学员不能跳过文档直接编码。

### Key Points
- 任务目标：从原始需求形成可验证实现路径。
- 输入：业务目标、范围、边界、兼容要求和测试目标。
- 步骤：澄清 → Spec → Design → Tasks → 审核修订 → 实现 → 验证。
- 强制动作：至少打回并修订一处规格、设计或任务问题。
- 验收标准：核心任务完成，测试证据与文档一致，风险明确。

### Visual
- Spec：业务行为与验收
- Design：方案、数据、兼容与测试
- Tasks：依赖、顺序与完成条件
- Review：至少一次打回修订
- Code：实现核心任务
- Evidence：测试、Diff 与未完成风险

### Illustration Brief
绘制六张任务卡和一条人工 Review 反馈箭头，突出打回修订是必做动作。

### Layout Contract
左侧固定任务目标、输入、步骤和验收，右侧任务卡；不得把操作细节仅放讲师备注。

### Activity
- 学员按内部 CodeSpec 联调流程完成文档与核心实现；命令和产物名称以现场手册为准。
- 结对审核至少打回一个问题，并保存修改前后证据。

### Takeaway
综合练习的核心不是一次通过，而是证明你能发现并修正问题。

### Speaker Notes
具体模拟需求和 CodeSpec 操作步骤待内部工具联调后补充；提前准备脱敏需求包作为兜底。

:::slide
id: course-38
title: 成果展示
mode: assessment
duration_min: 10
visual: checklist
:::
### Headline
展示判断链和证据链，不做只看最终页面的成果秀。

### Body
每组按需求澄清、文档、审核、代码、测试和风险六类证据进行演示。

### Example
展示 Spec 哪一条被打回、为什么修改、对应 Design 和 Tasks 如何同步，再展示最终 Diff 与测试结果。

### Key Points
- 需求澄清：关键问题和最终边界。
- Spec / Design / Tasks：核心决策与一致性。
- 人工审核：打回原因和修订记录。
- 代码 Diff：只展示与任务有关的核心变化。
- 测试结果：成功、失败、跳过和环境限制。
- 未完成风险：清楚说明剩余问题和下一步。

### Visual
- 澄清记录
- Spec / Design / Tasks
- 审核与修订
- 核心 Diff
- 测试结果
- 未完成风险

### Illustration Brief
绘制六格成果展示模板，每格对应一种证据，不使用大面积装饰截图。

### Layout Contract
左侧说明展示顺序，右侧双列证据清单；每组展示控制在规定时间内。

### Activity
- 每组按六类证据完成演示，讲师抽取一个文档问题和一个验证问题点评。
- 无法完成的部分必须明确标记，不用口头“应该可以”替代证据。

### Takeaway
高质量交付能解释做了什么、为什么这样做，以及如何证明它成立。

### Speaker Notes
讲师优先点评判断与证据，不纠缠展示页面是否精美。
