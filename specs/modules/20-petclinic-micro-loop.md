---
id: petclinic-micro-loop
title: CodeAgent 功能开发实战
duration_min: 23
show_divider: false
intent: 用 Veterinarians CRUD 跑通探索、计划、编码和验证。
outcomes:
  - 能先研究现状再形成可审查计划。
  - 能用 Diff 和测试结果验收局部改造。
---

## Module Brief

所有工具操作以内部 CodeAgent 实际环境为准；课件只定义任务、观察点和验收标准。

:::slide
id: course-09
title: CodeAgent 初体验
mode: lab
duration_min: 5
visual: cards
:::
### Headline
先让 Agent 独立完成一版，再用结果暴露需求中的空白。

### Body
发布 Veterinarians CRUD 小需求，观察 Agent 对现状、范围、交互和测试的默认判断。

### Example
如果第一版只生成后端接口，却没有延续现有页面交互或补测试，这些缺口就是下一轮约束输入。

### Key Points
- 任务：为样例项目补齐 Veterinarians CRUD。
- 观察：Agent 读取了哪些文件，做了哪些假设。
- 检查：功能、交互、校验和测试是否完整。
- 记录：需求理解偏差、缺失项和可见证据。

### Visual
- 任务目标：Veterinarians CRUD
- 输入：现有仓库与需求描述
- 观察：计划、Diff、测试动作
- 输出：缺口清单与首轮证据

### Illustration Brief
绘制任务卡和结果观察卡，右侧可使用抽象代码与页面占位，不显示内部工具界面。

### Layout Contract
左侧显示任务目标与边界，右侧四张结果卡；验收项必须在可见区。

### Activity
- 学员提交首轮需求，不在过程中追加零散提示。
- 保存 Agent 计划、Diff 和测试结果，用于下一页复盘。

### Takeaway
第一次生成的价值，是暴露你没有说清楚的部分。

### Speaker Notes
内部 CodeAgent 的启动方式、模式入口和命令待现场操作手册补充。

:::slide
id: course-10
title: Agent 使用要点
mode: talk
duration_min: 4
visual: flow
:::
### Headline
先探索、再计划、后编码，最后用可执行验证收口。

### Body
把具体上下文、边界和验收条件放进任务，让 Agent 能判断何时完成、何时停止。

### Example
先让 Agent分析 Owners 的结构和测试方式，再限定 Veterinarians 的范围，最后要求运行项目已有验证命令。

### Key Points
- Explore：确认现有模块、约定和测试入口。
- Plan：列出文件、行为、风险和验证步骤。
- Code：按审过的计划实施小范围修改。
- Verify：运行测试、构建并检查 Diff。

### Visual
- Explore：查现状与约束
- Plan：列改动与验证
- Code：小步实施
- Verify：测试、构建、Diff

### Illustration Brief
绘制 Explore → Plan → Code 的三步流程，Verify 作为贯穿底座而不是装饰标签。

### Layout Contract
左侧给出提示中应补充的内容，右侧流程图突出人工审核 Plan。

### Takeaway
验证方式越具体，Agent 越能自己发现并修正问题。

### Speaker Notes
该节奏与公开 Agent 最佳实践一致，但在 CodeAgent 内的具体模式和按钮待内部确认。

:::slide
id: course-11
title: Plan / Code 模式演示
mode: demo
duration_min: 7
visual: contrast
:::
### Headline
计划先接受人工审核，代码才有进入仓库的资格。

### Body
重新执行 Veterinarians CRUD：研究 Owners 现状、形成计划、人工收窄，再进入实现和测试。

### Example
计划若漏掉页面校验或测试，就在编码前打回；不要等大 Diff 生成后再补救。

### Key Points
- 分析 Owners 的页面结构、交互和验证方式。
- 形成 Veterinarians 的文件级改造计划。
- 人工补齐边界、校验和测试要求。
- 实施后检查最终 Diff 与测试证据。

### Visual
- Plan：文件、行为、边界、验证仍可低成本修订
- Code：按过审计划实施，并以 Diff 与测试交付

### Illustration Brief
左侧 Plan 卡展示待审清单，右侧 Diff 卡展示实施结果，中间标出人工 Gate。

### Layout Contract
使用左右对比，Plan 和 Code 各占一栏；不得出现臆造的内部按钮或命令。

### Activity
- 讲师在 Plan 阶段至少暂停一次，说明采纳或打回理由。
- 演示结束保留计划修订记录、最终 Diff 和测试结果。

### Takeaway
在计划阶段纠偏，比在代码阶段返工便宜得多。

### Speaker Notes
Plan / Code 的真实入口、切换方式和权限提示待内部资料补充。

:::slide
id: course-12
title: Agent反模式
mode: talk
duration_min: 3
visual: cards
:::
### Headline
模糊目标、无验收和会话污染，会让 Agent 的自主性变成随机性。

### Body
反模式不是“提示词不够长”，而是任务边界和反馈机制缺失。

### Example
在同一会话中先改 CRUD、再排查环境、又写 MR 文案，旧上下文会挤占并干扰当前任务。

### Key Points
- 一句话提交完整需求，默认假设过多。
- 没有明确验收条件，无法判断完成。
- 缺少测试或构建要求，无法自我修正。
- 持续累积无关任务和输出，污染上下文。

### Visual
- 一句话需求
- 无验收条件
- 无可执行验证
- 会话持续污染

### Illustration Brief
绘制四张反例卡，使用橙色风险边，不使用夸张警告图标。

### Layout Contract
左侧解释共同根因，右侧四张反模式卡；每张只放一个短语。

### Takeaway
缩小任务和清理上下文，往往比继续追加提示更有效。

### Speaker Notes
让学员从刚才首轮结果中指出至少一个反模式，而不是只读清单。

:::slide
id: course-13
title: 编码完成, 下一步?
mode: talk
duration_min: 4
visual: flow
:::
### Headline
代码写完只是开发完成，提交、验证和说明才构成交付。

### Body
这一页建立人工交付基线，后续再讨论哪些动作适合交给 Agent 扩展能力。

### Example
Veterinarians CRUD 完成后，开发者仍要检查 Git 状态、Diff、测试结果、提交信息和 MR 描述。

### Key Points
- 查看 Git 状态和完整 Diff。
- 运行测试并检查失败与跳过项。
- 编写准确提交信息并推送个人分支。
- 创建 MR，写明范围、风险和验证结果。
- 等待检视并处理意见。

### Visual
- Git 状态与 Diff
- 测试与构建
- Commit 与 Push
- 创建 MR
- 检视与反馈

### Illustration Brief
绘制从本地工作区到 MR 的横向 Git 交付流程，突出测试结果和变更说明。

### Layout Contract
左侧说明交付基线，右侧五步流程；本页不突出 AI 操作。

### Takeaway
先理解标准交付流程，才能安全地决定自动化边界。

### Speaker Notes
下一模块从这条人工基线引出 Skill、CLI、MCP 和 MR 自动化。
