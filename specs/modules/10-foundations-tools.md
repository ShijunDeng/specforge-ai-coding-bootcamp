---
id: foundations-tools
title: 课程一：AI Coding 工具链基础
duration_min: 18
show_divider: true
intent: 从研发范式变化进入 CodeAgent 的课程定位。
outcomes:
  - 能区分补全、问答与 Agent 执行三种协作深度。
  - 能说明本课程对 CodeAgent 能力边界的处理原则。
---

## Module Brief

先用公开实践建立共同语言，再进入内部工具；公开产品能力不得作为内部能力证明。

:::slide
id: course-04
title: 工程范式演进
mode: talk
duration_min: 4
visual: timeline
:::
### Headline
开发者正在从“亲自完成每一步”转向“定义目标、约束和验收”。

### Body
Software Engineering 1.0～3.0 不是替代关系，而是工具逐步承担更多分析、执行和验证动作。

### Example
同一个 CRUD 需求，可以人工逐文件编码，也可以让模型辅助问答，或让 Agent 检索、修改并运行测试后交付 Diff。

### Key Points
- 1.0：人工编码，IDE、构建和测试工具辅助。
- 2.0：模型参与补全、解释和问答。
- 3.0：Agent 参与分析、执行、验证与修订。
- 人仍负责业务目标、约束、授权和结果验收。

### Visual
- 1.0：人工编码，工具执行
- 2.0：模型补全与问答
- 3.0：Agent 分析、执行、验证

### Illustration Brief
绘制三阶段横向演进图，人的责任始终位于上方，不把 3.0 表现为无人研发。

### Layout Contract
左侧说明责任变化，右侧三阶段时间轴；不堆叠厂商产品名。

### Takeaway
Agent 接手更多动作，人就必须给出更清楚的完成条件。

### Speaker Notes
这是课程用于解释协作深度的分期，不是统一行业标准。

:::slide
id: course-05
title: AI Coding 能力演进
mode: talk
duration_min: 4
visual: flow
:::
### Headline
任务质量取决于表达、上下文、运行支撑和反馈迭代共同作用。

### Body
能力关注点由 Prompt 扩展到 Context、Harness 和 Loop；这是时间轴式扩张，不是单一闭环框架。

### Example
一句“增加查询”只有 Prompt；补上现有结构是 Context；提供测试命令是 Harness；依据失败输出继续修复才形成 Loop。

### Key Points
- Prompt Engineering：把目标、边界和验收说清楚。
- Context Engineering：提供与任务有关的项目事实。
- Harness Engineering：准备工具、环境和验证能力。
- Loop Engineering：让真实反馈推动下一轮动作。

### Visual
- Prompt：任务表达
- Context：项目事实
- Harness：工具与验证环境
- Loop：反馈驱动的持续推进

### Illustration Brief
绘制从左到右不断扩大的能力带，不连接首尾，不包装成闭环架构。

### Layout Contract
左侧用一个需求贯穿示例，右侧四阶段能力扩张图。

### Takeaway
好 Prompt 很重要，但它替代不了真实上下文和可执行验证。

### Speaker Notes
“Prompt → Context → Harness → Loop”是课程归纳，不标注为厂商共同发布的成熟度模型。

:::slide
id: course-06
title: 头部厂商实践
mode: talk
duration_min: 4
visual: matrix
:::
### Headline
头部产品都在把 Agent 放进真实工程环境，并强调可验证结果。

### Body
这里只比较 OpenAI Codex 与 Anthropic Claude Code 的官方公开能力，不推断内部 CodeAgent。

### Example
两者都能在获准环境中读取代码、修改文件、运行命令；测试输出和 Diff 仍需人审查。

### Key Points
- Codex：覆盖 CLI、IDE、桌面与云端任务；云端任务可并行执行。
- Claude Code：覆盖终端、IDE、桌面与 Web 等入口。
- 共同实践：明确上下文、先探索规划、提供验证方式。
- 共同边界：Agent 输出需要测试证据与人工 Review。

### Visual
| 观察维度 | OpenAI Codex | Anthropic Claude Code |
| --- | --- | --- |
| 入口 | CLI / IDE / App / Cloud | Terminal / IDE / Desktop / Web |
| 工程动作 | 文件、命令、测试、Diff | 代码库、编辑、命令、验证 |
| 质量信号 | 日志、测试输出、PR | 测试、构建、lint、Diff |

### Illustration Brief
用左右对比表展示公开能力与共同质量信号；不画内部产品界面。

### Layout Contract
左侧给出比较边界，右侧三行表格；来源保留在讲师备注。

### Takeaway
产品入口不同，工程原则相同：给事实、跑验证、审结果。

### Speaker Notes
官方来源：https://openai.com/index/introducing-codex/ ，https://learn.chatgpt.com/guides/best-practices ，https://code.claude.com/docs/en/overview ，https://code.claude.com/docs/en/best-practices 。

:::slide
id: course-07
title: CodeAgent 产品体系
mode: talk
duration_min: 3
visual: placeholder
:::
### Headline
先识别产品入口，再确认各版本适合承担什么任务。

### Body
当前已知入口包括 IDEA 插件、VS Code 插件、CLI 2.x 与 CLI 3.x；版本定位和差异必须以内部资料为准。

### Example
本课程选用 CLI 3.x，但不会把公开 Codex 或 Claude Code 的能力直接写成 CodeAgent 能力。

### Key Points
- IDEA 插件：定位待内部补充。
- VS Code 插件：定位待内部补充。
- CLI 2.x：基于 OpenCode，版本差异待内部补充。
- CLI 3.x：新一代架构，课程定位待内部补充。

### Visual
- 产品形态与入口图待内部补充
- 版本定位与适用场景待内部补充
- 内部正式截图待补充

### Illustration Brief
使用明确的内部资料占位框，不生成仿真插件、终端或平台界面。

### Layout Contract
左侧只展示已确认的产品形态，右侧固定使用“待内部补充”占位框。

### Takeaway
没有内部资料确认，就只保留问题，不补写答案。

### Speaker Notes
现场用内部正式材料替换占位；替换前核对版本、产品形态和能力边界。

:::slide
id: course-08
title: CLI 3.x 核心能力
mode: talk
duration_min: 3
visual: placeholder
:::
### Headline
本课只使用已经确认的通用研发动作，产品特性留待内部说明。

### Body
课程将围绕代码理解、仓库检索、文件修改、计划与编码、命令执行和变更审查组织演示。

### Example
演示会要求 Agent 先分析 Owners 的现有实现，再计划 Veterinarians 改造；具体模式名称和操作入口由内部资料补充。

### Key Points
- 代码解释与仓库检索：具体范围待内部补充。
- 文件修改与命令执行：权限模型待内部补充。
- Plan / Code 模式：交互细节待内部补充。
- 变更审查：展示方式待内部补充。
- 模型、配置与命令：不得臆造。

### Visual
- CLI 3.x 终端截图待内部补充
- 模式切换方式待内部补充
- 权限与模型说明待内部补充

### Illustration Brief
右侧只放终端截图占位与能力标签，不绘制伪造命令或真实 UI。

### Layout Contract
左侧展示课程会观察的动作，右侧使用“待内部补充”占位框。

### Takeaway
先确认工具事实，再设计演示脚本。

### Speaker Notes
补充内部操作前，逐项核对命令、权限、模型、模式名称和版本差异。
