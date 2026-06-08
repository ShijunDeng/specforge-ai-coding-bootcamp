---
id: petclinic-micro-loop
title: Petclinic 功能开发与单测微闭环
duration_min: 95
intent: 在小型项目中跑通“功能开发、单测生成、本地验证、修复复盘”的日常开发微闭环。
outcomes:
  - 能用 CodeAgent 完成小范围功能改动。
  - 能调用 UT Skill 生成单测并运行通过。
  - 能 Review AI 候选补丁，并把失败输出交给 AI 修复。
  - 能形成可复核的练习证据包。
source_rows: [5, 6, 9, 10, 14, 15]
---

# Petclinic 功能开发与单测微闭环

## Module Brief

本模块扩展原大纲第一课中的 Owner 模糊查询演示、Pet 疫苗字段练习、课堂总结和课后巩固。设计重点是“短任务、短反馈、短证据”，让学员先在低风险项目中练成与 AI 协作的基本动作。

:::slide
id: micro-01
title: 第一课主线：单兵作战微闭环
mode: talk
duration_min: 8
visual: flow
:::

### Headline
今天只解决一件事：让 AI 参与日常开发，但不降低工程质量门槛。

### Body
小需求也要经历“写、测、查、改、证据留存”的完整链路。微闭环越短，AI 偏差越容易被发现。

### Key Points
- 先用 Owner 查询演示标准动作。
- 再让学员独立完成 Pet 疫苗字段练习。
- 所有代码采纳前必须 Review。
- 所有采纳后的改动必须运行测试。
- 失败时把错误输出交给 AI 修复。

### Visual
- 对话开发
- 生成单测
- 本地跑绿
- 人工 Review
- 失败修复
- 证据归档

### Takeaway
第一课不是追求复杂需求，而是练流程肌肉记忆。

### Speaker Notes
- 用 1 分钟说明课堂节奏，避免学员边看边敲导致跟丢。
- 提醒学员先看讲师如何打回 AI，而不是只看最终代码。

:::slide
id: micro-02
title: 微闭环的质量门槛
mode: talk
duration_min: 8
visual: checklist
:::

### Headline
速度来自自动化，质量来自门禁和审查。

### Body
AI 可以更快地产出候选补丁，但工程师仍然要确认业务语义、代码边界、测试有效性和可维护性。

### Key Points
- 小步改动：一次只让 AI 处理一个明确行为。
- 可读 diff：改动必须小到人能 Review。
- 本地验证：不能只看模型解释。
- 证据留存：测试输出、失败记录、修复 diff 都要保留。
- 复盘反馈：把 Review 意见反向喂给 AI。

### Visual
- 写：给上下文和边界。
- 测：生成并运行单测。
- 查：人工检查 diff。
- 改：按失败输出修复。
- 证：保留命令结果和结论。

### Takeaway
AI 不是绕过质量流程的捷径，而是进入质量流程的新参与者。

### Speaker Notes
- 可以问学员：如果 AI 生成的测试只有 assert not null，算不算通过？引出“测试语义”。

:::slide
id: micro-03
title: UT 生成 Skill 的使用契约
mode: talk
duration_min: 10
visual: checklist
:::

### Headline
生成单测前先明确被测行为，生成单测后必须本地运行。

### Body
单测 Skill 能减少模板劳动，但不能替代人判断断言是否真的覆盖业务语义。

### Key Points
- 指定被测类和已有测试文件。
- 描述新增行为、边界条件和异常路径。
- 要求复用项目已有测试风格。
- 运行测试失败时，把失败输出交给 AI 修复。
- 人工检查断言是否覆盖业务语义。

### Visual
- 输入：被测行为、相关类、现有测试。
- 输出：新增或修改测试。
- 验证：本地命令跑绿。
- Review：断言、命名、边界路径。

### Takeaway
好单测不是 AI 写出来就算好，而是能证明业务行为。

### Speaker Notes
- 展示一个“只 assert not null”的坏例子，提醒学员 Review 测试质量。
- 如果项目测试跑得慢，提前准备一个较小的测试命令。

:::slide
id: micro-04
title: 讲师演示：Owner 模糊查询
mode: demo
duration_min: 18
visual: flow
:::

### Headline
演示目标是完整走一遍小需求，不是炫耀一次生成成功。

### Body
讲师为 Owner 增加按姓名片段模糊查询，故意停在计划、采纳、测试、修复几个 Review 点，展示人机协同的真实节奏。

### Key Points
- 需求：为 Owner 增加按姓名片段模糊查询。
- 边界：只修改 Controller、Repository、Service 与对应测试。
- 输出：先给修改计划，再生成候选补丁。
- 验收：查询接口正确返回，单测跑绿。
- 复盘：指出一次 AI 输出中的命名、边界或测试问题。

### Visual
- 选中 Owner 相关文件
- 说明查询规则
- 要求先给改动计划
- 采纳代码
- 调用 UT Skill
- 本地测试

### Takeaway
演示时故意停在 Review 点，让学员看到人类判断。

### Speaker Notes
- 讲师不要直接接受第一版代码，至少指出一个命名或边界条件问题。
- 如果 AI 生成过大 diff，立即要求它缩小范围并解释每个文件为什么要改。

:::slide
id: micro-05
title: 采纳前 Review：人类仍是责任主体
mode: talk
duration_min: 10
visual: checklist
:::

### Headline
AI 给的是候选补丁，工程师要判断它是否符合项目风格和业务语义。

### Body
采纳前 Review 的目标不是挑错证明自己比 AI 强，而是保证进入代码库的每一行都有明确理由。

### Key Points
- 是否改了不该改的文件。
- 查询语义是否和需求一致。
- 空值、大小写、分页等边界是否明确。
- 测试是否覆盖正常、边界和失败路径。
- 是否引入日志、异常或性能隐患。

### Visual
- 文件边界
- 业务语义
- 异常路径
- 测试质量
- 可维护性

### Takeaway
Review 不是形式，Review 结果要反馈给 AI 继续收敛。

### Speaker Notes
- 这页后马上进入练习，要求学员照着清单检查自己的 diff。
- 可以要求每位学员在练习结束时说出一条自己拒绝或修改 AI 输出的理由。

:::slide
id: micro-06
title: 随堂练习：Pet 疫苗接种字段
mode: lab
duration_min: 30
visual: cards
:::

### Headline
练习目标是让学员独立跑出第一个极速微闭环。

### Body
学员在 spring-petclinic 中为 Pet 增加疫苗接种记录字段及查询接口，并调用单测 Skill 补充测试。

### Key Points
- 任务：为 Pet 增加疫苗接种记录字段及查询能力。
- 要求：全程靠对话，禁止手敲业务代码。
- 输入：提供 Pet 实体、相关 Controller、Repository 和现有测试。
- 验收：接口正常，自动生成的单测本地运行红变绿。
- 证据：保留提示词、diff、测试命令和最终结果。

### Visual
- 目标：Pet 实体加疫苗字段。
- 边界：只改相关实体、接口、测试和必要配置。
- 红线：禁止手敲业务代码。
- 验收：测试由红变绿，解释 Review 风险。

### Takeaway
练习成功不是代码看起来像，而是测试和 Review 都能站住。

### Speaker Notes
- 助教只处理环境阻塞，不给学员直接提示代码写法。
- 如果学员提前手动改代码，要求回滚后用 AI 重新跑一遍。

:::slide
id: micro-07
title: 测试失败时如何让 AI 修
mode: lab
duration_min: 8
visual: flow
:::

### Headline
失败输出是最有价值的上下文，不要把它简化成“报错了”。

### Body
AI 修复测试失败时，需要看到完整命令、失败堆栈、相关 diff 和你希望保持不变的业务规则。

### Key Points
- 复制完整测试命令和关键失败输出。
- 告诉 AI 不要扩大修改范围。
- 让 AI 先解释失败原因，再给最小修复。
- 修复后重新运行同一个测试命令。
- 如果连续失败，要求它比较当前 diff 与项目既有写法。

### Visual
- 运行测试
- 复制失败输出
- 要求定位原因
- 生成最小修复
- 重跑测试
- 记录结果

### Takeaway
让 AI 修失败，核心是给证据，不是给情绪。

### Speaker Notes
- 现场挑一个真实失败案例演示，不需要追求完美。
- 如果没有失败，可以准备一个故意错误分支。

:::slide
id: micro-08
title: 第一段复盘：证据包怎么交
mode: summary
duration_min: 3
visual: checklist
:::

### Headline
一次微闭环的最终产物不是代码片段，而是可复核证据包。

### Body
学员课后复现时，要提交可以被讲师和同伴复核的过程材料，而不是只说“我跑通了”。

### Key Points
- 需求提示词和 AI 修改计划。
- 关键 diff 和人工 Review 结论。
- 单测生成记录和本地测试输出。
- 测试失败时的修复对话。
- 最终可复现命令或截图。

### Visual
- Prompt
- Plan
- Diff
- Test
- Repair
- Evidence

### Takeaway
证据包让 AI 协作从个人经验变成团队可复制流程。

### Speaker Notes
- 这一页要很快过，作为后面 MCP 和大作业的证据标准。
- 可以把提交格式指向 `exercises/petclinic-micro-loop/README.md`。
