---
id: foundations-tools
title: AI 工程方法与工具体系
duration_min: 60
intent: 理解 AI Coding 的能力演进、工具分层和上下文工程基本功，为后续实操建立统一操作语言。
outcomes:
  - 能解释补全、对话、Agent、企业级工具链之间的差异。
  - 能选择 Vibe Coding 或 SDD 的适用场景。
  - 能写出包含目标、上下文、边界、输出、验收的提示契约。
  - 能说明 Skill 的适用条件和人工责任边界。
---

# AI 工程方法与工具体系

## Module Brief

本模块是第一课的理论与操作基础。重点不是讲工具菜单，而是训练上下文选择、任务契约和方法选择。

## Teaching Design

- **课堂角色**：学员是一名准备把 AI 纳入日常开发流的工程师，需要先学会给 Agent 定边界。
- **故事冲突**：工具越来越会行动，但上下文不准、边界不清、验收缺失会把速度变成返工。
- **案例承接**：本模块不写代码，只为后面的 Owner 查询、Pet 疫苗字段、MCP 建单和 SMN SDD 建立统一术语。
- **插图节奏**：用时间线讲能力演进，用矩阵讲方法选择，用对比图讲上下文投喂，用代码块展示提示契约。
- **课堂转折**：最后一页 Skill 把“个人提示词技巧”转为“团队流程资产”，自然接入 Petclinic 实操。

:::slide
id: tools-01
title: 从代码补全到 Agent 协作
mode: talk
duration_min: 8
visual: timeline
:::
### Headline
AI Coding 的能力边界从“补全片段”扩展到“理解任务并调用工具”。

### Body
能力越强，越不能只靠相信模型。企业场景要把 Agent 纳入既有研发治理，让它在明确边界和证据链里行动。


### Example
例如：代码补全只能帮你补出一行 Repository 调用；Agent 可以读取 Controller、Service、测试文件并提出完整改动计划，因此必须先给它边界。

### Key Points
- Copilot 阶段：行级补全，提升输入速度。
- Chat 阶段：对话解释、生成片段、修复报错。
- Agent 阶段：读取代码、规划任务、编辑文件、调用工具。
- Enterprise 阶段：接入组织规范、权限、审计和知识库。

### Visual
- 补全：更快输入。
- 对话：更快理解。
- Agent：更快执行。
- 企业级：更可控协作。


### Media
src: ../../assets/demos/agent-evolution-screen.svg
type: Agent 演进图
alt: 从代码补全、对话编辑、Agent 循环到 MCP 外部系统动作的能力演进。
caption: 能力越自动化，越需要更严格的边界、权限和证据要求。

### Illustration Brief
- 绘制时间线，阶段依次覆盖：补全：更快输入、对话：更快理解、Agent：更快执行、企业级：更可控协作。
- 每个阶段只放一个动作词和一个证据点，突出课堂推进节奏。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 timeline 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
Agent 自动化的价值和风险都来自“它能行动”。

### Speaker Notes
- 这里不做模型横向评测，重点讲研发流程变化。
- 强调越靠近自动执行，越需要 Git 状态、权限、测试和 Review。

:::slide
id: tools-02
title: 方法选择：Vibe Coding 与 SDD
mode: talk
duration_min: 8
visual: matrix
:::
### Headline
方法没有高低，只有任务风险和反馈周期是否匹配。

### Body
Vibe Coding 适合低风险、小步快跑、高频验证的任务；SDD 适合边界复杂、跨模块、依赖存量约束和错误成本高的任务。


### Example
例如：给 Pet 加一个字段可以 Vibe Coding 小步验证；给 dolphin-scheduler 新增 SMN 告警插件就必须先 SDD，因为它牵涉扩展点、配置、安全和测试。

### Key Points
- 单文件小改：可用 Vibe Coding，但要保持短反馈。
- 多文件功能：先让 AI 输出计划，再分步实现。
- 大型存量插件：先 CodeWiki 探查，再 SDD 四阶文档。
- 安全敏感改动：把权限、日志、凭证处理写进 Spec。

### Visual
| 任务类型 | 推荐方式 | 主要风险 |
| --- | --- | --- |
| 单文件小改 | Vibe Coding | 边界遗漏 |
| 多文件功能 | 计划后小步实现 | 顺序错、测试漏 |
| 大型存量插件 | SDD 先行 | 架构不兼容 |
| 安全敏感改动 | SDD 加强约束 | 凭证和权限泄露 |


### Media
src: ../../assets/demos/method-choice-switchboard.svg
type: 方法选择看板
alt: 根据上下文范围、反馈速度、错误成本和事实未知程度选择 Vibe Coding 或 SDD。
caption: 方法没有绝对优劣，关键是判断任务的不确定性和错误成本。

### Illustration Brief
- 绘制二维矩阵或对照表，表格内容围绕：任务类型 / 推荐方式、单文件小改 / Vibe Coding、多文件功能 / 计划后小步实现、大型存量插件 / SDD 先行、安全敏感改动 / SDD 加强约束。
- 重点列使用浅色底纹，表头清晰，单元格只保留关键词和短语。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 matrix 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
不确定性越高，越要先把规格写清楚。

### Speaker Notes
- 避免把 Vibe Coding 讲成反面教材，它是第一课微闭环的基础。
- 第二课再把这个判断迁移到 dolphin-scheduler 的 SMN 需求。

:::slide
id: tools-03
title: 主战入口：插件、CLI 与 Relay
mode: talk
duration_min: 8
visual: matrix
:::
### Headline
不同客户端适合不同工作深度，选型依据是上下文范围和自动化程度。

### Body
同一个需求可以从 IDE 插件、CLI 或 Relay 工具进入。入口不同，但安装、授权、上下文选择和验证四件事都要先跑通。


### Example
例如：在 IDE 插件里选中 `OwnerController` 适合小改；用 CLI 批量检查全仓测试更合适；需要远端建 MR 时再进入 MCP 能力。

### Key Points
- IDE 插件适合文件级开发、Review、单测生成。
- CLI 适合多文件任务、批量检查、脚本化流程。
- Relay 工具适合连接内部能力和统一入口。
- 开始实操前要确认插件/CLI 已安装，授权登录已完成。
- 能力越靠近外部系统，越要关注权限与日志。

### Visual
| 形态 | 适用场景 | 注意事项 |
| --- | --- | --- |
| IDE 插件 | 文件级开发、Review、单测生成 | 安装后验证登录和上下文选择 |
| CLI | 多文件任务、批量检查、脚本化流程 | 先确认授权、Git 状态和工作目录 |
| Relay 工具 | 连接内部能力和统一入口 | 关注权限、日志与审计 |


### Media
src: ../../assets/demos/tool-entry-runtime.svg
type: 工具入口运行图
alt: IDE 插件、CLI Agent 和 Relay/MCP 三类入口如何承接不同研发动作。
caption: 不同入口不是工具名差异，而是上下文范围、自动化程度和外部权限的差异。

### Illustration Brief
- 绘制二维矩阵或对照表，表格内容围绕：形态 / 适用场景、IDE 插件 / 文件级开发、Review、单测生成、CLI / 多文件任务、批量检查、脚本化流程、Relay 工具 / 连接内部能力和统一入口。
- 重点列使用浅色底纹，表头清晰，单元格只保留关键词和短语。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 matrix 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
工具入口不同，但先安装授权、再限定上下文、最后验证结果的纪律不能变。

### Speaker Notes
- 如果现场需要展示下载入口或授权登录，控制在 3 分钟内，不要把工具安装变成主线。
- 对已有工具经验的学员，要求他们把注意力放在上下文和验收。

:::slide
id: tools-04
title: 工具链流转：知识、执行、质量
mode: talk
duration_min: 8
visual: flow
:::
### Headline
先查知识，再生成计划，最后执行动作。

### Body
AgentCenter、CodeAgent、MCP、Skill、CodeWiki 不是五个孤立工具。它们共同构成一条从知识获取到任务执行，再到质量验证的流水线。


### Example
例如：先问 CodeWiki“已有告警插件如何注册”，再让 CodeAgent 生成 Design，最后用 Skill 检查 Tasks 是否细到类名和测试。

### Key Points
- CodeWiki 解决“项目事实是什么”。
- CodeAgent 解决“如何在上下文中生成候选补丁”。
- Skill 解决“高频流程如何标准化”。
- MCP 解决“如何连接 MR、检视、平台动作”。
- AgentCenter 解决“能力如何发现、授权和治理”。

### Visual
- CodeWiki 查现状
- CodeAgent 拆计划
- Skill 生成和检查
- MCP 建单和触发检视
- Review 和测试收口


### Media
src: ../../assets/demos/codewiki-sdd-animated.svg
type: 动态工具链演示
alt: CodeWiki、CodeAgent、Skill、MCP 和 Review 如何形成从事实到证据的流水线。
caption: 先查事实、再生成计划、最后进入执行和质量闭环，工具之间要有明确交接物。

### Illustration Brief
- 绘制从左上到右下的流程链路，节点依次覆盖：CodeWiki 查现状、CodeAgent 拆计划、Skill 生成和检查、MCP 建单和触发检视、Review 和测试收口。
- 用箭头表现先后顺序，用橙色或高亮描边标出人工 Review、打回或验收节点。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 flow 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
工具链的目标是缩短从事实到证据的距离。

### Speaker Notes
- 讲的时候要把每个工具落到后续练习：Petclinic 用 CodeAgent 和 UT Skill，建单用 MCP，SMN 用 CodeWiki 和 SDD。
- 不要让学员停留在工具名记忆。

:::slide
id: tools-05
title: 防坑指南：精准投喂上下文
mode: talk
duration_min: 10
visual: contrast
:::
### Headline
大多数低质量输出不是模型不行，而是上下文边界太虚。

### Body
AI 看不见你脑子里的项目背景。工程师需要主动告诉它：看哪些文件、遵守哪些规则、不要碰哪些区域、如何证明结果正确。


### Example
例如：坏输入是“帮我加查询”；好输入是“只看 `OwnerController`、`OwnerRepository` 和现有测试，按 lastName 片段查询，先给计划，不要改无关模块”。

### Key Points
- 使用文件引用或选区让模型看见正确代码。
- 明确只能改哪些文件，以及先不要改哪些文件。
- 复杂任务先要计划，简单任务再让它直接改。
- 让模型复用项目现有测试风格和命名风格。
- 把失败输出原样交给模型，而不是口头描述“报错了”。

### Visual
- 模糊输入：“帮我加个查询”。
- 精准输入：指定 Controller、Service、Repository、测试文件、业务规则、验收命令。
- 模糊输出：全仓乱找、改动难 Review。
- 精准输出：小 diff、可测试、可回滚。


### Media
src: ../../assets/demos/context-packing-before-after.svg
type: 上下文对比演示
alt: 模糊提示和精准上下文投喂导致的 diff 大小、测试质量和 Review 成本差异。
caption: 上下文投喂越精确，AI 输出越容易收敛成小 diff、可测试、可回滚的候选补丁。

### Illustration Brief
- 绘制左右对比图，对比项覆盖：模糊输入：“帮我加个查询”、精准输入：指定 Controller、Service、Repository、测试文件、业务规则、验收命令、模糊输出：全仓乱找、改动难 Review、精准输出：小 diff、可测试、可回滚。
- 左侧表达常见低质量状态，右侧表达目标状态，用颜色区分风险和目标。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 contrast 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
上下文选择是 AI 编程的第一项工程能力。

### Speaker Notes
- 演示一个反例提示词，再立刻改成好提示词。
- 提醒学员：上下文不是越多越好，错误上下文会把模型带偏。

:::slide
id: tools-06
title: 提示契约：把需求变成可执行任务
mode: talk
duration_min: 10
visual: checklist
:::
### Headline
好提示词不是更长，而是把目标、约束和验收说完整。

### Body
课堂练习统一使用“目标、上下文、边界、输出、验收、失败处理”的提示契约。它能让 AI 先理解任务，再按工程规则行动。


### Example
例如：Pet 疫苗字段的提示契约要写明目标字段、相关实体、接口行为、允许修改文件、测试命令和失败时先定位再最小修复。

### Key Points
- 目标：要完成的业务行为，不只说“改代码”。
- 上下文：相关文件、接口、已有实现和测试。
- 边界：允许修改和禁止修改的范围。
- 输出：先计划还是直接补丁，是否需要测试和文档。
- 验收：运行什么命令、检查什么接口、保留什么证据。
- 失败处理：报错后先定位原因，再给最小修复。

### Visual
```text
目标：为 Pet 增加疫苗接种记录字段和查询能力。
上下文：Pet 实体、Owner/Pet Controller、Repository、现有测试。
边界：不要修改数据库迁移以外的无关模块；先给修改计划。
输出：生成代码和单测，保持项目现有风格。
验收：指定测试命令跑绿，解释关键 diff。
```



### Media
src: ../../assets/demos/pet-vaccination-test.svg
type: 代码运行截图
alt: Pet 疫苗字段的代码修改和测试运行结果。
caption: 提示契约最终要落到代码 diff、测试命令和红变绿的运行证据。

### Illustration Brief
- 绘制可勾选的检查清单，检查项覆盖：提示契约：把需求变成可执行任务。
- 红线项使用警示色，普通项使用中性色；每项配一个简洁图标，避免密集小字。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 checklist 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
提示契约是给 Agent 的任务说明书，也是给人类 Review 的检查表。

### Speaker Notes
- 这页可以让学员保存为个人模板。
- 强调模板不是固定咒语，关键是字段齐全。

:::slide
id: tools-07
title: Skill：把高频动作封装成流水线
mode: talk
duration_min: 8
visual: cards
:::
### Headline
Skill 的价值不是省一段提示词，而是固化团队认可的做法。

### Body
高频、稳定、可验证的流程最适合做 Skill。比如单测生成、代码检视、修复建议、MR 描述、文档补全等。


### Example
例如：UT Skill 不只是“生成测试”，它会读取被测类、现有测试风格和业务规则，然后生成断言；你仍要拒绝只有 `assertNotNull` 的弱测试。

### Key Points
- 输入规范：需要哪些文件、需求和约束。
- 执行步骤：生成、修改、检查、修复。
- 质量门禁：单测、规范、覆盖率、风格。
- 可复用经验：团队最佳实践沉淀为工具。
- 人工责任：Skill 仍然需要人确认输入和输出。

### Visual
- 输入：被测类、现有测试、业务规则。
- 执行：生成候选测试、运行、修复。
- 验收：断言覆盖语义，不只追求覆盖率。
- 复用：把团队测试风格变成默认路径。


### Media
src: ../../assets/demos/skill-ut-pipeline-animated.svg
type: 动态 Skill 演示
alt: UT Skill 从输入被测行为到生成测试、运行命令和人工 Review 的动态流水线。
caption: Skill 的价值是把团队认可的测试生成、运行和 Review 步骤固化成可复用流程。

### Illustration Brief
- 绘制 3-6 张任务卡或概念卡，卡片内容覆盖：输入：被测类、现有测试、业务规则、执行：生成候选测试、运行、修复、验收：断言覆盖语义，不只追求覆盖率、复用：把团队测试风格变成默认路径。
- 每张卡只保留一个关键词和一句解释，使用图标化符号辅助识别。
- 画面应像技术白板而不是装饰海报，保留充足留白；不得出现真实 Token、AK/SK、生产地址、内部敏感截图或未脱敏日志。

### Layout Contract
- 16:9 双栏页，采用 cards 视觉结构；左侧放核心判断、短正文和 3-6 个要点；右侧放结构化图示和 Takeaway。
- 可见区只放学员直接需要看到的结论、步骤和验收标准；讲师提醒、追问和现场取舍放入 Speaker Notes。
- 单页不超过一个主图示，不叠加装饰图；如果内容溢出，优先删减正文而不是缩小字号。

### Takeaway
Skill 是组织经验的自动化载体。

### Speaker Notes
- 以 UT 生成 Skill 为例，说明它不是魔法，而是把模板流程标准化。
- 提醒学员不要把 Skill 输出当成免 Review 的代码。
