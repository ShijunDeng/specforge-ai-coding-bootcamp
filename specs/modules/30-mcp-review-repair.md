---
id: mcp-review-repair
title: Agent 扩展与 MR 反馈闭环
duration_min: 55
show_divider: false
intent: 用 Skill、CLI、MCP 和项目规则把局部编码接入团队交付流程。
outcomes:
  - 能区分 Skill、CLI、MCP 和能力中心的职责。
  - 能用测试与检视反馈驱动修复直至满足停止条件。
---

## Module Brief

先讲公开机制和工程选择，再进入内部 AgentCenter 与 CodeHub CLI，占位内容不可被视觉素材伪装成真实能力。

:::slide
id: course-14
title: 给Agent插上翅膀
mode: talk
duration_min: 3
visual: cards
:::
### Headline
扩展 Agent，不只是增加知识，还要增加确定性动作和外部反馈。

### Body
Skill 固化方法，CLI 提供原子操作，MCP 连接外部系统，AgentCenter 作为内部能力入口。

### Example
创建 MR 时，Skill 可以规定步骤和验收，CLI 执行稳定命令，MCP 可向外部服务发现并调用能力。

### Key Points
- Skill：复用工作方法和失败处理。
- CLI：执行稳定、可脚本化的原子操作。
- MCP：以标准协议连接外部工具与数据。
- AgentCenter：内部定位与能力待资料补充。

### Visual
- Skill：工作方法
- CLI：确定性操作
- MCP：外部系统连接
- AgentCenter：内部能力入口

### Illustration Brief
以 Agent 为中心向四个能力方向辐射；AgentCenter 使用占位样式，不画真实平台。

### Layout Contract
左侧解释四者边界，右侧四张能力卡；避免把它们画成互相替代。

### Takeaway
知识、流程、动作和连接，是四种不同的扩展维度。

### Speaker Notes
强调这是工程职责划分，不代表内部产品的正式架构。

:::slide
id: course-15
title: Skill 运行机制
mode: talk
duration_min: 4
visual: flow
:::
### Headline
Skill 用渐进加载把一套可复用做法带进具体任务。

### Body
公开 Skill 通常以 `SKILL.md` 为入口，并可附带脚本、参考资料、模板和示例。

### Example
一个 MR 检视 Skill 可以先读取工作流，再按需要调用脚本、模板和检查清单，而不是一次加载全部材料。

### Key Points
- `SKILL.md`：说明适用场景和执行流程。
- `scripts/`：承载可重复的确定性动作。
- `references/`：保存按需查阅的领域资料。
- `templates/`：稳定输出结构和格式。
- 发现、激活、执行：按需加载以控制上下文。

### Visual
- 发现：根据名称与描述匹配
- 激活：读取 SKILL.md
- 执行：按需使用脚本、参考与模板
- 验收：按工作流检查结果

### Illustration Brief
绘制 Skill 文件夹树与渐进加载箭头，不标注内部三层名称或优先级。

### Layout Contract
左侧展示目录结构，右侧四步加载流程；内部加载规则写待内部补充。

### Takeaway
Skill 固化的是方法，不是绕过验证的魔法命令。

### Speaker Notes
内部 CodeAgent 的 Skill 目录、层级、优先级和覆盖规则待内部补充。公开参考：https://learn.chatgpt.com/docs/build-skills ，https://code.claude.com/docs/en/skills 。

:::slide
id: course-16
title: MCP 协议架构
mode: talk
duration_min: 4
visual: flow
:::
### Headline
MCP 用 Host、Client、Server 分离 AI 应用与外部能力。

### Body
Host 管理多个 Client；通常每个 Client 与一个特定 Server 维持独立连接，并在初始化时协商协议与能力。

### Example
一个 Agent Host 可以分别连接代码托管和知识库 Server，各连接独立发现自己支持的 Tools、Resources 或 Prompts。

### Key Points
- Host：协调模型、权限、上下文和多个连接。
- Client：与特定 Server 维持有状态连接。
- Server：暴露工具、资源或提示模板。
- 连接：本地可用 stdio，远程可用 Streamable HTTP。
- 能力：初始化阶段进行版本和能力协商。

### Visual
- Host：AI 应用与会话协调
- Client A：连接 Server A
- Client B：连接 Server B
- Server：Tools / Resources / Prompts

### Illustration Brief
绘制 Host 内含两个 Client、分别连接两个 Server 的分层图，避免画成 Agent 内部推理架构。

### Layout Contract
左侧解释角色与边界，右侧使用四层连接图；术语严格按 MCP 官方架构。

### Takeaway
MCP 标准化的是能力交换，不规定 Agent 如何思考。

### Speaker Notes
官方来源：https://modelcontextprotocol.io/docs/learn/architecture ，https://modelcontextprotocol.io/specification/2025-06-18/architecture 。

:::slide
id: course-17
title: Skill over CLI
mode: talk
duration_min: 4
visual: matrix
:::
### Headline
成熟 CLI 优先复用，跨系统标准连接再考虑 MCP。

### Body
Skill 可以给 CLI 补上调用步骤、参数规则、失败处理和验收；MCP 更适合动态发现和多客户端复用。

### Example
已有稳定 CodeHub CLI 时，可先用 Skill 固化提交和查询流程；若多个 Agent 需要标准化连接同一服务，再评估 MCP。

### Key Points
- CLI 负责稳定原子命令和现有鉴权环境。
- Skill 负责编排、约束、错误恢复和结果验收。
- MCP 负责标准化连接、能力协商与动态发现。
- 最终选择取决于现有资产、客户端数量和治理要求。

### Visual
| 维度 | Skill over CLI | MCP |
| --- | --- | --- |
| 优势 | 复用成熟命令和本地环境 | 标准连接与动态发现 |
| 适合 | 单机研发流程、已有 CLI | 跨系统、多客户端复用 |
| 注意 | 命令兼容与错误处理 | Server、权限与协议治理 |

### Illustration Brief
绘制三行对比表，底部强调“按场景选择”，不宣布绝对优先级。

### Layout Contract
左侧给出判断原则，右侧对比表；内部 CodeHub CLI 只作为待确认案例。

### Takeaway
先复用已经稳定的能力，再为真实连接需求增加协议层。

### Speaker Notes
这是课程工程选型归纳，不是厂商发布的普适优先级。

:::slide
id: course-18
title: AgentCenter 能力中心
mode: talk
duration_min: 3
visual: placeholder
:::
### Headline
内部能力中心的价值，要由真实查找、安装和治理流程说明。

### Body
AgentCenter 的产品定位、能力查找、安装、升级、权限申请和发布流程均待内部资料确认。

### Example
课件不伪造能力市场页面；现场应使用脱敏后的官方内部截图演示一个真实能力的查找路径。

### Key Points
- 产品定位：待内部补充。
- Skill / CLI / MCP 的呈现方式：待内部补充。
- 安装与升级流程：待内部补充。
- 权限申请与发布治理：待内部补充。

### Visual
- 内部平台正式截图待补充
- 能力查找与安装流程待补充
- 权限与发布流程待补充

### Illustration Brief
使用内部平台截图占位框，并明确标注“待截图”；不生成仿真市场界面。

### Layout Contract
左侧列出需要内部确认的问题，右侧占位框；不展示虚构入口和按钮。

### Takeaway
能力中心讲治理事实，不讲想象中的产品故事。

### Speaker Notes
现场补图前完成脱敏审查，并确认截图对应当前版本。

:::slide
id: course-19
title: CodeHub CLI 接入
mode: prep
duration_min: 4
visual: placeholder
:::
### Headline
先完成安装、鉴权和仓库权限检查，再进入 MR 综合练习。

### Body
CodeHub CLI 的安装、Token 配置、MR 创建和意见查询命令必须来自内部操作手册。

### Example
课件只保留操作清单；真实命令由讲师在确认版本后现场补入，避免过期命令误导学员。

### Key Points
- 安装包与版本：待内部补充。
- 鉴权与 Token 配置：待内部补充，禁止明文展示。
- Fork 与仓库权限：待内部补充。
- MR 创建和意见查询：待内部补充。
- 连接检查与失败排查：待内部补充。

### Visual
- 终端安装命令待内部补充
- Token 配置方式待内部补充
- MR 操作命令待内部补充

### Illustration Brief
绘制终端命令占位与五项操作清单，不使用看似可执行的伪命令。

### Layout Contract
左侧展示准备清单，右侧固定“待内部补充”终端占位。

### Takeaway
内部命令宁可空着，也不能靠公开工具语法猜测。

### Speaker Notes
现场确认 Token 不进入历史记录、截图、Prompt 或 MR；具体安全方式以内部制度为准。

:::slide
id: course-20
title: "实战: CodeHub CLI提交, 检视, 修复自动化"
mode: lab
duration_min: 13
visual: flow
:::
### Headline
把功能开发推进到 MR，并用真实检视意见完成一次修复回归。

### Body
本练习关注交付闭环，不考察谁记住更多命令；所有内部操作以现场手册为准。

### Example
学员为 Veterinarians CRUD 补测试，提交个人 Fork，创建指向原仓库的 MR，再根据检视意见修复并重新验证。

### Key Points
- 任务目标：形成可检视、可修复、可复核的 MR。
- 操作步骤：补测试 → 提交 Fork → 创建 MR → 发起检视 → 获取意见 → 修复。
- 验收标准：MR 可访问、意见可追踪、修复 Diff 清晰、测试重新通过。
- 停止条件：关键意见关闭，测试和构建满足项目要求。

### Visual
- 开发与测试
- 提交个人 Fork
- 创建目标 MR
- Agent 或交叉检视
- 获取检视意见
- 修复并回归验证

### Illustration Brief
绘制六步交付闭环，Test 与 Review 使用橙色反馈箭头回到修复节点。

### Layout Contract
左侧固定任务目标、步骤和验收，右侧闭环图；内部命令不进入可见内容。

### Activity
- 学员按内部手册完成操作并保存 MR、检视意见、修复 Diff 和测试输出。
- 若内部环境阻塞，使用讲师准备的脱敏意见样例继续完成修复推演。

### Takeaway
完整闭环至少要留下 MR、反馈、修复和回归四类证据。

### Speaker Notes
CodeHub CLI 的命令、鉴权和 MR 参数待内部操作手册补充。

:::slide
id: course-21
title: Loop Engineering
mode: talk
duration_min: 5
visual: flow
:::
### Headline
每一轮都用真实反馈更新任务，直到满足明确停止条件。

### Body
Loop Engineering 关注的是如何读取测试和检视结果、缩小问题并继续推进，而不是无限重试。

### Example
测试失败先修正确性，MR 意见指出规范问题再修可维护性；每轮只处理当前证据能证明的问题。

### Key Points
- 输入：需求、现状约束和上一轮证据。
- 反馈源：测试结果与 Review 意见。
- 下一步：定位根因、形成最小修复、重新验证。
- 完成条件：需求、测试和检视标准同时满足。
- 停止条件：成功、明确阻塞或需要人工决策。

### Visual
- 需求与实现
- Test 反馈
- MR 与 Review 反馈
- 修复
- 回归验证
- 完成或升级人工决策

### Illustration Brief
绘制代码、测试、MR、检视、修复和验证闭环，突出 Test 与 Review 两个反馈源。

### Layout Contract
左侧说明循环输入和停止条件，右侧闭环图；避免画成无终点的自动重试。

### Takeaway
可靠循环必须同时定义反馈信号和停止条件。

### Speaker Notes
“Loop Engineering”是本课对反馈驱动推进方式的归纳，不包装成单一行业框架。

:::slide
id: course-22
title: 如何让Agent守规矩?
mode: talk
duration_min: 5
visual: contrast
:::
### Headline
把稳定的仓库规则放进 AGENTS.md，再用测试和 CI 真正执行。

### Body
AGENTS.md 是给 Coding Agent 的项目说明文件，适合记录构建、测试、代码、Commit 和 MR 约定。

### Example
在仓库中明确“修改后运行哪些测试、禁止编辑哪些生成物、MR 必须附什么证据”，能减少每次任务重复说明。

### Key Points
- 适合写：仓库布局、构建测试命令、工程约定、PR 预期。
- 适合写：禁止项、完成标准和安全注意事项。
- 不适合写：临时需求、密钥、无法自动验证的口号。
- 规则生效范围和加载方式需由具体 Agent 实现确认。
- AGENTS.md 不是权限系统，也不能替代 CI 和人工 Review。

### Visual
- 规范散落：每次重复说明，容易遗漏且难以复用
- 规则固化：AGENTS.md 给上下文，测试与 CI 给强制证据

### Illustration Brief
绘制“散落规范 → AGENTS.md → 测试/CI/Review”的收敛图，不暗示文件本身强制执行。

### Layout Contract
左侧列适合与不适合内容，右侧前后对比；底部强调人工确认。

### Takeaway
说明文件让 Agent 知道规矩，自动化门禁才让规矩真正落地。

### Speaker Notes
官方来源：https://agents.md/ ，https://learn.chatgpt.com/docs/agent-configuration/agents-md 。不要推断内部 CodeAgent 的具体加载优先级。

:::slide
id: course-23
title: 课间休息
mode: break
duration_min: 10
visual: cards
:::
### Headline
短休后进入规格驱动研发实战。

### Example
休息页只承担上下半场过渡，不承载课程内容。

### Key Points
- 休息 10 分钟。

### Visual
- Pause

### Media
src: ../../assets/demos/training-break-16x9.png
type: 课间休息插图
alt: 安静的研发培训教室、笔记本电脑和暖色灯光。
caption: 课间休息

### Illustration Brief
使用全屏 16:9 研发培训休息插图，无 Logo、无可读文字、无课程流程。

### Layout Contract
全屏图片，仅叠加“课间休息”标题，不显示 chips、正文或品牌角标。

### Takeaway
休息后进入课程二。

### Speaker Notes
提醒学员按时返回；不在主屏幕增加环境检查或操作说明。
