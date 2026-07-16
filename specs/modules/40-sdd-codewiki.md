---
id: sdd-codewiki
title: 课程二：规格驱动研发实战
duration_min: 30
show_divider: true
intent: 从快速探索过渡到可评审、可追踪的规格驱动研发。
outcomes:
  - 能判断何时需要从 Vibe Coding 升级到 SDD。
  - 能比较 Kiro、OpenSpec 与 Spec Kit 的公开流程。
  - 能区分公开工具与内部 CodeSpec 的事实边界。
---

## Module Brief

用公开工具建立 SDD 共同语言，再以占位方式介绍内部 CodeSpec。

:::slide
id: course-24
title: 从 Vibe Coding 到 SDD
mode: talk
duration_min: 4
visual: contrast
:::
### Headline
需求越复杂，越需要在编码前把行为、约束和验收写下来。

### Body
Vibe Coding 适合快速探索和范围明确的小改；多模块、复杂规则和多人协作会放大隐含假设。

### Example
局部文案调整可以快速试错；涉及数据变化、兼容性和多模块联动时，应先形成可评审规格。

### Key Points
- 快速探索：目标清楚、影响有限、可快速回滚。
- 复杂变化：规则多、依赖多、兼容要求高。
- 协作变化：多人参与，需要共享同一事实基线。
- 升级信号：反复返工、边界争议、测试无法覆盖需求。

### Visual
- Vibe Coding：快速探索，小范围，反馈周期短
- SDD：先对齐规格，控制复杂度和协作风险

### Illustration Brief
左侧 Vibe Coding、右侧 SDD，中间用复杂度上升箭头连接；不做绝对好坏判断。

### Layout Contract
左侧解释选择条件，右侧两栏对比；中间突出复杂度而不是工具名称。

### Takeaway
SDD 不是为了多写文档，而是为了更早发现分歧。

### Speaker Notes
“小改用 Vibe、复杂需求用 SDD”是课程经验法则，不是硬性行业边界。

:::slide
id: course-25
title: SDD 方法概览
mode: talk
duration_min: 4
visual: flow
:::
### Headline
SDD 把“要做什么、怎么做、按什么顺序做”放到编码前接受审核。

### Body
阶段产物持续修订，不是一次生成后沿着不可逆流水线向前推进。

### Example
一个查询能力先澄清业务行为和验收，再设计数据与接口，拆成任务，实施后对照规格验证。

### Key Points
- Clarify：澄清目标、范围、边界与未知项。
- Spec：定义业务行为和验收条件。
- Design：说明技术方案、兼容性和测试策略。
- Tasks：拆成有顺序、可验收的执行单元。
- Implementation / Verification：实现并用证据回查规格。

### Visual
- 需求澄清
- Spec
- Design
- Tasks
- Implementation
- Verification

### Illustration Brief
绘制六阶段流程，每阶段标一个输入/输出，使用返工虚线表示可修订。

### Layout Contract
左侧解释为什么前置审核，右侧六步流程；不把流程画成不可逆状态机。

### Takeaway
规格的价值，是让错误在代码出现前就能被打回。

### Speaker Notes
不同 SDD 工具的文件名与动作不同，本页只讲共同方法。

:::slide
id: course-26
title: SDD 工具生态
mode: talk
duration_min: 4
visual: matrix
:::
### Headline
代表性工具共享“先规格后实现”，但组织产物和使用入口不同。

### Body
比较 Kiro、OpenSpec 与 GitHub Spec Kit 时，只使用各自官方公开流程。

### Example
Kiro 以 Requirements、Design、Tasks 组织 Feature Spec；OpenSpec 围绕 change 管理变更；Spec Kit 使用 Spec、Plan、Tasks、Implement。

### Key Points
- Kiro：结构化 Feature Specs，可从需求或设计起步。
- OpenSpec：以 change 和 delta specs 管理既有行为变化。
- Spec Kit：以 constitution 和 Spec → Plan → Tasks → Implement 组织流程。
- 比较维度：产物、入口、变更模型和 Brownfield 支持。

### Visual
| 工具 | 核心产物 | 公开主线 |
| --- | --- | --- |
| Kiro | requirements / design / tasks | Feature Spec |
| OpenSpec | proposal / specs / design / tasks | Change lifecycle |
| Spec Kit | spec / plan / tasks | Specify to implement |

### Illustration Brief
三列对比，只写官方术语；不把三个工具的文件名强行一一对应。

### Layout Contract
左侧说明比较边界，右侧三行表格；具体来源写入讲师备注。

### Takeaway
先比较变更模型，再比较命令和界面。

### Speaker Notes
官方来源：https://kiro.dev/docs/specs/ ，https://github.com/Fission-AI/OpenSpec ，https://github.github.com/spec-kit/ 。

:::slide
id: course-27
title: Kiro 规格流程
mode: talk
duration_min: 4
visual: cards
:::
### Headline
Kiro 用 Requirements、Design、Tasks 把高层想法转成可跟踪计划。

### Body
三个文件分别关注业务行为、技术方案和执行任务，并允许人在阶段间审阅与修改。

### Example
需求页写用户故事和验收条件；设计页记录架构、数据流和测试策略；任务页拆分离散工作项。

### Key Points
- `requirements.md`：用户故事与验收条件。
- `design.md`：架构、数据流、实现考虑和测试策略。
- `tasks.md`：离散、可跟踪的实现任务。
- Feature Spec 也支持 Design-First；并非所有场景唯一顺序。

### Visual
- Requirements：What / Why / Acceptance
- Design：Architecture / Data flow / Test strategy
- Tasks：Executable / Trackable work

### Illustration Brief
绘制三个文件卡片从业务到技术再到任务，添加可回退审核箭头。

### Layout Contract
左侧说明各文件职责，右侧三张堆叠文件卡；不展示 Kiro 内部按钮。

### Takeaway
任务可追踪的前提，是需求与设计先可评审。

### Speaker Notes
官方来源：https://kiro.dev/docs/specs/ 。Bugfix Spec 等场景可能采用不同产物，不宣称所有 Spec 都固定三文件。

:::slide
id: course-28
title: OpenSpec 变更流程
mode: talk
duration_min: 4
visual: flow
:::
### Headline
OpenSpec 围绕一次 change 保存意图、需求差异、设计与任务。

### Body
Explore 可选，Propose 建立变更产物，Apply 执行任务，Archive 保存上下文并同步规格。

### Example
修改既有查询行为时，用 delta specs 描述新增、修改或删除的行为，而不是重写整个系统规格。

### Key Points
- Explore：调查代码、权衡方案和澄清需求，可选。
- Propose：形成 proposal、specs、design、tasks。
- Apply：按已就绪产物实施并更新任务。
- Archive：保留 change，并把差异同步进主规格。
- 动作允许迭代，不是严格线性状态机。

### Visual
- Explore：调查与澄清
- Propose：建立变更产物
- Apply：实现与验证
- Archive：保存上下文、同步规格

### Illustration Brief
绘制四段生命周期并增加迭代箭头；标注 Explore 可选，不展示内部 CodeSpec 命令。

### Layout Contract
左侧解释 change 和 delta specs，右侧四步流程；每步不超过两行。

### Takeaway
变更规格既记录要做什么，也保留为什么这样改。

### Speaker Notes
官方来源：https://github.com/Fission-AI/OpenSpec/blob/main/docs/concepts.md ，https://github.com/Fission-AI/OpenSpec/blob/main/docs/opsx.md 。四步图是教学简化。

:::slide
id: course-29
title: CodeSpec 产品定位
mode: talk
duration_min: 3
visual: placeholder
:::
### Headline
CodeSpec 的内部定位必须由正式产品资料定义。

### Body
当前课程只保留仓库初始化、项目规则、全量规格、全量设计和特性开发等待确认主题。

### Example
不能因为 OpenSpec 或 Spec Kit 有某个目录，就推断 CodeSpec 使用相同产物名称和状态流转。

### Key Points
- 仓库初始化与项目规则：待内部补充。
- 全量规格与全量设计：产物定义待内部补充。
- 特性规格、技术设计与任务拆分：待内部补充。
- 能力边界、适用项目和版本差异：待内部补充。

### Visual
- CodeSpec 正式产品截图待补充
- 产物名称与职责待补充
- 能力边界与版本定位待补充

### Illustration Brief
使用内部工具占位图，不套用 Kiro、OpenSpec 或 Spec Kit 的界面。

### Layout Contract
左侧展示待确认主题，右侧“待内部补充”占位框。

### Takeaway
公开 SDD 方法可以参考，内部产品事实不能类推。

### Speaker Notes
现场替换前核对产品定位、版本和真实产物，不使用本页占位内容作为操作依据。

:::slide
id: course-30
title: CodeSpec 典型流程
mode: talk
duration_min: 4
visual: placeholder
:::
### Headline
流程骨架可以先说明，命令、状态和审批节点必须等待内部确认。

### Body
课程按初始化、项目基线、需求、规格、设计、任务、实现和验证组织学习路径。

### Example
从 Brownfield 仓库开始，先生成并校准项目基线，再进入单特性规格；实际工具如何推进待联调。

### Key Points
- 初始化仓库：实际命令待内部补充。
- 生成项目基线：产物与范围待内部补充。
- 需求、规格、设计、任务：工作流待内部补充。
- 实现与验证：状态和回写规则待内部补充。
- 审批与返工节点：待内部流程确认。

### Visual
- 初始化与基线流程待内部补充
- 特性规格与设计流程待内部补充
- 审批、返工和验证节点待内部补充

### Illustration Brief
右侧使用流程占位框，不绘制带命令、状态或审批节点的伪流程。

### Layout Contract
左侧只给学习路径骨架，右侧使用“待内部补充”占位。

### Takeaway
方法路径可以先讲，产品工作流必须后补真资料。

### Speaker Notes
不得用 OpenSpec 的 Propose、Apply、Archive 作为 CodeSpec 的真实状态名称。

:::slide
id: course-31
title: CodeSpec 安装使用
mode: prep
duration_min: 3
visual: contrast
:::
### Headline
公开流程可用于理解概念，内部安装与命令必须分开展示。

### Body
OpenSpec 的公开示例可讲 `init` 与变更动作；CodeSpec 安装包、版本、初始化命令和增强能力待内部手册补充。

### Example
左侧演示公开 OpenSpec 的概念流程，右侧 CodeSpec 只保留安装和命令占位，避免学员混用。

### Key Points
- 公开 OpenSpec：可展示 init 与 Explore / Propose / Apply / Archive 概念。
- 内部 CodeSpec：安装包与版本待内部补充。
- 初始化命令、配置和目录待内部补充。
- 增强能力、权限和升级方式待内部补充。

### Visual
- OpenSpec 公开示例：用于说明 change-based SDD 概念
- CodeSpec 内部操作：安装、命令、配置全部待内部补充

### Illustration Brief
严格左右分区，公开流程有来源标记，内部区域使用命令占位，不生成伪终端。

### Layout Contract
左侧公开工具，右侧内部工具占位；颜色和标签明确区分两类事实。

### Takeaway
相似的方法不代表相同的产品命令。

### Speaker Notes
OpenSpec 当前流程演进较快，演示时锁定版本和资料日期。CodeSpec 所有操作以内部手册为准。
