---
id: orientation
title: 全局概览
duration_min: 30
intent: 建立课程目标、学习路径和工具全景，理解为什么要把 AI Coding 工程化，也理解本仓库为什么用 Markdown Spec 维护课件。
outcomes:
  - 说清楚本课程的交付物、课堂纪律和作业验收方式。
  - 区分 Vibe Coding、SDD、Skill、MCP、CodeWiki 的定位。
  - 理解用可版本化 Spec 管理和生成课件的课程生产方式。
---

# 全局概览

## Module Brief

本模块是课程总入口：先统一目标，再统一证据标准，最后统一课堂协作方式。它强调首期 Committer 的知识传递责任、正课与大作业节奏，以及 AI 工程方法和支撑工具矩阵。

## Teaching Design

- **课堂角色**：把学员放在“即将把 AI 研发方法带回团队的 Committer”位置，而不是普通工具体验者。
- **故事冲突**：个人会问 AI，但团队不敢让 AI 的输出进入主干；本模块把冲突转成“可控交付闭环”的课程目标。
- **贯穿道具**：课程地图、工具矩阵、证据链五件套（规格、上下文、补丁、测试/MR、Review）。
- **插图节奏**：先用对比图制造问题，再用流程图建立方法，最后用时间线说明 7 小时学习路径。
- **讲授口径**：所有页面都面向学员直接宣讲；讲师提醒只留在 Speaker Notes，不进入可见区。

:::slide
id: orient-01
title: 为什么要把 AI Coding 工程化
mode: intro
duration_min: 6
visual: contrast
:::
### Headline
同样是让 AI 写 Owner 查询，为什么一个人能合并，另一个人被 Review 打回？

### Body
今天我们从一个很小的 Owner 查询开始：AI 第一版看似能跑，却改了太多文件、漏了空查询边界、测试也没有证明业务语义。课程要训练的是把这种不确定输出收进工程闭环。


### Example
例如：第一名工程师只贴一句“帮我加模糊查询”，得到 9 个文件的大 diff；第二名工程师先限定 `OwnerController`、`OwnerRepository` 和测试命令，最后留下提示契约、候选 diff、测试结果和 Review 结论。

### Key Points
- 个人效率来自更快生成，团队效率来自更少返工。
- AI 输出必须进入现有工程质量体系，而不是绕开它。
- 规格文件让课程和研发流程一样可版本化、可审查、可追溯。
- 首期 Committer 的责任不是学会一个工具入口，而是把方法迁移到团队。

### Visual
- 零散提示词：依赖个人经验、难复盘、难复制。
- 工程化闭环：有规格源文件、有验证证据、有团队约束。


### Media
src: ../../assets/demos/orientation-engineering-loop.svg
type: 工程闭环演示图
alt: AI Coding 从提示契约、候选补丁、Review 到测试证据和复用材料的工程闭环。
caption: 本课程从第一分钟就把 AI 写代码放进可审查、可验证、可复用的工程闭环。

### Illustration Brief
- 绘制左右对比图，对比项覆盖：零散提示词：依赖个人经验、难复盘、难复制、工程化闭环：有规格源文件、有验证证据、有团队约束。
- 左侧表达常见低质量状态，右侧表达目标状态，用颜色区分风险和目标。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 contrast 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
能合并的不是“AI 写了代码”，而是“人把 AI 输出收进了证据链”。

### Speaker Notes
- 让学员回忆最近一次 AI 生成代码翻车的原因，通常会落在上下文不准、验收不清、缺少 Review。
- 顺势引出本课程用 Spec 管课件，和用 Spec 管代码任务是同一套思路。
- 不要把 AI Coding 讲成个人炫技，要强调组织协作与质量治理。

:::slide
id: orient-02
title: 从提示到证据的学习闭环
mode: intro
duration_min: 6
visual: flow
:::
### Headline
每一次对话都像开一张小工单：输入、边界、输出、验收缺一不可。

### Body
如果你只说“报错了”，AI 只能猜；如果你贴出命令、堆栈、当前 diff 和不能改的业务规则，AI 才能进入可控修复。


### Example
例如：测试失败时不要说“接口挂了”，而是贴出 `mvn -Dtest=OwnerControllerTests test`、失败堆栈、当前 diff，并要求 AI 先解释原因，再给最小修复。

### Key Points
- 输入：当前文件、需求、约束、已有规范。
- 边界：哪些文件可改，哪些动作必须人工确认。
- 输出：代码、测试、文档、任务清单或 MR。
- 验收：本地测试、静态检视、人工 Review、功能演示。
- 复用：把稳定流程沉淀为 Skill 或团队模板。

### Visual
- 定义规格
- 投喂上下文
- 生成增量
- 人工 Review
- 自动验证
- 固化复用


### Media
src: ../../assets/demos/learning-evidence-loop-animated.svg
type: 动态证据闭环
alt: 输入、边界、Review 和证据在每个课堂练习中循环推进。
caption: 每次调用 AI 都要留下输入、边界、Review 和验证证据，不能只听模型解释。

### Illustration Brief
- 绘制从左上到右下的流程链路，节点依次覆盖：定义规格、投喂上下文、生成增量、人工 Review、自动验证、固化复用。
- 用箭头表现先后顺序，用橙色或高亮描边标出人工 Review、打回或验收节点。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 flow 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
模型的自信不算完成，能复跑的证据才算完成。

### Speaker Notes
- 这页是后面所有演示的判分标准，演示时反复回扣。
- 可以提前说明：今天每个练习都要留下证据，截图不是重点，命令输出、MR 链接、文档清单才是重点。

:::slide
id: orient-03
title: AI 研发支撑工具矩阵
mode: intro
duration_min: 7
visual: matrix
:::
### Headline
不要背工具名，先看它在一次交付里接住哪一棒。

### Body
Owner 查询要靠 CodeAgent 写小 diff，Pet 疫苗字段要靠 UT Skill 补语义测试，MR 检视要靠 MCP 接平台，SMN 插件要先用 CodeWiki 找事实，再用 SDD 把任务压实。


### Example
例如：同一个“新增查询能力”，在 IDE 里是选文件和生成 diff，在终端里是跑测试，在 MR 里是触发检视，在复盘里是把这套动作沉淀成 Skill。

### Key Points
- AgentCenter：工具与能力市场，帮助团队发现和授权可复用能力。
- CodeAgent：编码客户端，承载对话开发、上下文选择、代码采纳。
- MCP：外部系统连通协议，用于创建 MR、读取检视结果、触发平台动作。
- Skill：标准化技能插件，把单测生成、代码检视、自动修复等高频动作封装为流程。
- CodeWiki：项目知识库，用于探查存量项目 API、规范和隐式约束。

### Visual
| 工具 | 定位 | 本课使用方式 |
| --- | --- | --- |
| AgentCenter | 能力市场 | 查找和授权可复用能力 |
| CodeAgent | 编码客户端 | 对话开发、上下文选择、代码采纳 |
| MCP | 连通协议 | 创建 MR、读取检视结果、触发平台动作 |
| Skill | 技能插件 | 生成单测、代码检视、自动修复 |
| CodeWiki | 项目知识库 | 探查存量项目规范与样例 |


### Media
src: ../../assets/demos/tool-matrix-dashboard.svg
type: 工具能力看板
alt: CodeWiki、CodeAgent、Skill、MCP 和 AgentCenter 在知识、执行、质量和治理中的位置。
caption: 工具矩阵要被讲成“事实到证据”的协作链路，而不是一串产品名。

### Illustration Brief
- 绘制二维矩阵或对照表，表格内容围绕：工具 / 定位、AgentCenter / 能力市场、CodeAgent / 编码客户端、MCP / 连通协议、Skill / 技能插件。
- 重点列使用浅色底纹，表头清晰，单元格只保留关键词和短语。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 matrix 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
每个工具只接一段交付棒，交接物是上下文、diff、测试或 Review 结果。

### Speaker Notes
- 不展开讲每个工具安装细节，只让学员建立流转关系。
- 如果公司内部客户端名称变化，只替换术语，不改变“知识、执行、质量”的分层讲法。

:::slide
id: orient-04
title: 7 小时课程地图
mode: intro
duration_min: 6
visual: timeline
:::
### Headline
这 7 小时是一条升级路线：先救一个小 diff，再拆一个大需求。

### Body
上午我们用 Petclinic 练会“AI 写、我审、测试证”的肌肉记忆；下午把同一套纪律搬进 dolphin-scheduler，用 CodeWiki 和 SDD 先读懂老项目，再决定怎么写。


### Example
例如：Owner 查询是热身，Pet 疫苗字段是独立练习，MCP Review 是团队流程，SMN 告警插件则是把小闭环放进复杂项目的期末考。

### Key Points
- 第 1 段：统一 AI 工程心智模型和工具矩阵。
- 第 2 段：在 spring-petclinic 中跑通功能开发、单测和 Review。
- 第 3 段：用 MCP 完成建单、机器检视和自动修复。
- 第 4 段：进入 dolphin-scheduler，学习 CodeWiki 和 SDD。
- 第 5 段：拆解 SMN 告警插件，形成课后大作业任务清单。

### Visual
- 30 分钟：课程定位与协作契约。
- 60 分钟：AI 工程方法与工具体系。
- 95 分钟：Petclinic 微闭环。
- 65 分钟：MCP 质量闭环。
- 80 分钟：CodeWiki 与 SDD。
- 75 分钟：SMN 文档实操。
- 15 分钟：验收与团队复讲。


### Media
src: ../../assets/demos/course-map-control-room.svg
type: 课程控制台
alt: 7 小时课程从工具方法、Petclinic、MCP、CodeWiki、SMN 到验收复讲的推进地图。
caption: 课程地图用证据检查点串起每个模块，避免学员只记住孤立工具。

### Illustration Brief
- 绘制时间线，阶段依次覆盖：30 分钟：课程定位与协作契约、60 分钟：AI 工程方法与工具体系、95 分钟：Petclinic 微闭环、65 分钟：MCP 质量闭环、80 分钟：CodeWiki 与 SDD、75 分钟：SMN 文档实操、15 分钟：验收与团队复讲。
- 每个阶段只放一个动作词和一个证据点，突出课堂推进节奏。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 timeline 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
你不是学一串工具，而是在练一条能带回团队的交付路线。

### Speaker Notes
- 讲清楚课程可裁剪：讲师可以用 deck 配置只生成第一课、第二课或专题课。
- 如果现场仍按两次 90-100 分钟授课，可把完整版作为讲师备课库，现场只讲核心页面。

:::slide
id: orient-05
title: 课堂协作契约
mode: intro
duration_min: 5
visual: checklist
:::
### Headline
课堂不是看完演示就结束，你必须跑出自己的闭环证据。

### Body
课堂先用演示建立标准动作，再用个人练习完成独立复现；环境阻塞可以求助，但提示词、Review 判断和验收证据必须由你自己完成。


### Example
例如：演示时你记录“第一版输出为什么被打回”；练习时你必须拿出自己的测试命令结果，而不是只说“我这里能跑”。

### Key Points
- 演示时先观察输入、上下文边界和 AI 输出被打回的原因。
- 练习时禁止手敲业务代码，报错交给 AI 修，再由人验收。
- 每个练习保留终端测试结果、MR 链接或文档清单。
- 课后团队复讲时，必须结合本团队仓库补充约束。

### Visual
- 看演示：记录输入、边界、Review 点。
- 做练习：独立跑出证据，不跳过验证。
- 做复盘：展示证据链和打回过程，不只展示最终截图。
- 做复讲：替换为团队真实项目与规范。


### Media
src: ../../assets/demos/classroom-contract-evidence.svg
type: 课堂证据契约
alt: 演示和练习阶段分别需要记录的输入边界、Review 暂停点、diff、测试输出和证据材料。
caption: 课堂协作契约把“听懂了”改成“交得出证据”，每个练习都按同一标准验收。

### Illustration Brief
- 绘制可勾选的检查清单，检查项覆盖：看演示：记录输入、边界、Review 点、做练习：独立跑出证据，不跳过验证、做复盘：展示证据链和打回过程，不只展示最终截图、做复讲：替换为团队真实项目与规范。
- 红线项使用警示色，普通项使用中性色；每项配一个简洁图标，避免密集小字。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 checklist 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
课程成功标准是你能独立复制流程，而不是看懂一次顺滑演示。

### Speaker Notes
- 这页需要明确课堂纪律，特别是“禁止手敲业务代码”的边界。
- 强调禁止不是为了限制工程师，而是为了训练与 AI 协作的完整闭环。
