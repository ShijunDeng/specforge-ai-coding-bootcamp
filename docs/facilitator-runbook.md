# 讲师授课 Runbook

## 课前 3-5 天

- 确认学员名单、样例仓库、分组方式和现场抽查规则。
- 发送环境准备清单，要求学员完成 JDK、Maven、Git、项目构建与测试基线。
- 按内部通知确认 CodeAgent CLI 3.x、CodeSpec、AgentCenter、CodeHub CLI 的版本、权限和资料入口。
- 准备 Veterinarians CRUD 演示基线与进阶 SDD 需求包。
- 确保演示材料不含真实 Token、密钥、生产地址、内部敏感截图或未脱敏日志。

## 课前 1 天

- 运行 `npm run check`，逐页检查 45 张幻灯片。
- 用 `npm run slides` 复核封面、课程安排、两张章节页、内部占位、两段实战、休息页和课后作业。
- 需要 PDF/PPTX 时运行 `npm run export:pdf`、`npm run export:pptx` 并确认页数与网页一致。
- 为所有“待内部补充”页面准备当前版本的正式资料或脱敏截图；无法确认时保留占位。
- 准备 CodeAgent、CodeSpec 或 CodeHub 环境不可用时的脱敏计划、Diff、测试、MR 和文档样例。
- 安排助教负责环境阻塞、实操答疑、证据收集与时间提醒。

## 3.5 小时现场节奏

- 9 分钟：培训目标、课程组织、环境准备。
- 18 分钟：工程范式、AI Coding 能力演进、厂商实践和 CodeAgent 定位。
- 23 分钟：Veterinarians CRUD 初体验与 Plan / Code 演示。
- 22 分钟：Skill、MCP、Skill over CLI、AgentCenter 与 CodeHub CLI。
- 23 分钟：CodeHub MR 提交、检视、修复闭环和 AGENTS.md。
- 10 分钟：课间休息。
- 30 分钟：从 Vibe Coding 到 SDD、工具生态与 CodeSpec 定位。
- 65 分钟：全仓初始化、特性流程、人工 Gate 与进阶需求实战。
- 10 分钟：成果回顾、成长路径和课后作业。

## 上半场必须显式展示

- Agent 在动手前如何探索现状并形成计划。
- 人如何审核计划、控制 Diff 范围和验证方式。
- 测试与 Review 意见如何成为下一轮输入。
- MR、检视、修复和回归如何形成可停止闭环。
- AGENTS.md 提供规则上下文，测试、CI 和人工 Review 才提供强制证据。

## 下半场必须显式展示

- Vibe Coding 与 SDD 的选择取决于复杂度和协作风险，而不是绝对优劣。
- Kiro、OpenSpec、Spec Kit 的公开产物与流程不能映射成 CodeSpec 事实。
- 全量设计必须用真实代码、测试和配置校准。
- Spec、Design、Tasks、Implementation 四个 Gate 分别审核不同问题。
- 进阶练习至少包含一次人工打回和修订记录。

## 现场异常处理

- 环境失败：助教处理，不拖慢主线；学员可使用脱敏材料继续审核练习。
- 内部工具不可用：使用计划、Diff、测试、MR 或文档快照替代现场调用，仍保留判断过程。
- 内部资料未确认：保留“待内部补充”，不得用公开产品命令或界面填空。
- Agent 输出偏航：展示如何缩小范围、补上下文、修订计划和增加验收条件。
- 时间不足：优先保留实战、人工审核和验证，压缩产品背景介绍。

## 课后验收

- 收集 Spec、Design、Tasks、核心实现、测试结果、MR、检视意见和修复记录。
- 检查文档之间、文档与代码之间是否一致。
- 真实密钥、敏感日志、生产地址、绕过 Review 等红线问题必须返工。
- 选取优秀与典型失败案例，脱敏后再进入下一版课程材料。
