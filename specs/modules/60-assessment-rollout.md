---
id: assessment-rollout
title: 大作业验收与团队复讲
duration_min: 15
intent: 明确课后 SMN 大作业的提交标准、评分 Rubric、团队复讲责任和课程 Spec 迭代机制。
outcomes:
  - 能说明大作业提交物和评分规则。
  - 能识别必须返工的安全红线。
  - 能把课程方法迁移到团队复讲和后续课程迭代。
---

# 大作业验收与团队复讲

## Module Brief

本模块承接 SMN 大作业布置，把课后真实落地、MR 提交、统一验收、问卷反馈和团队复讲放在同一套闭环中。

:::slide
id: assess-01
title: 大作业：SMN 告警真实落地与提单
mode: assessment
duration_min: 5
visual: timeline
:::

### Headline
拿着课上过审的 Tasks，课后逐项实现并提交 MR。

### Body
大作业不是让 AI 从零发挥，而是把 SDD 文档转成小步实现、测试、检视和修复证据。

### Key Points
- MR 描述必须链接 Proposal、Spec、Design、Tasks。
- 每个任务完成后都要有测试或检查证据。
- 关键实现按 Tasks 顺序分步提交，避免大 diff。
- 不得提交真实凭证、生产配置或敏感日志。
- 机器检视和人工 Review 的关键意见必须处理。

### Visual
- 文档定版
- 分步实现
- 本地验证
- 创建 MR
- 代码检视
- 统一验收

### Takeaway
最终验收不是“AI 写完了”，而是“工程证据完整”。

### Speaker Notes
- 明确作业截止时间和提交渠道，如果暂未确定，课后群公告补充。
- 强调安全红线一票返工。

:::slide
id: assess-02
title: 大作业评分与自动化验收
mode: assessment
duration_min: 4
visual: matrix
:::

### Headline
验收要同时看文档质量、代码质量和 AI 协作过程证据。

### Body
统一评分规则和自动化检查能避免只凭主观印象评价，也能把优秀实践和典型失败沉淀回下一期课程。

### Key Points
- SDD 文档质量：30 分。
- 实现正确性：25 分。
- 测试与验证：20 分。
- AI 协作过程：15 分。
- 安全与合规：10 分。
- 自动化打分先检查提交物、测试证据和安全红线，再进入人工复核。
- 安全红线未修复时，总分达标也需返工。

### Visual
| 维度 | 权重 | 证据 |
| --- | --- | --- |
| SDD 文档质量 | 30 | 四阶文档完整，安全和测试策略明确 |
| 实现正确性 | 25 | 插件按现有架构接入，核心路径可运行 |
| 测试与验证 | 20 | 本地测试和异常路径结果可复核 |
| AI 协作过程 | 15 | 有提示词、打回、检视、修复记录 |
| 安全与合规 | 10 | 无真实密钥和敏感日志 |

### Takeaway
Rubric 让作业验收本身也成为课程迭代的数据来源。

### Speaker Notes
- 指向 `rubrics/homework-rubric.md`，讲师可按企业实际认证规则调整权重。
- 不建议公开个人低分榜，红黑榜聚焦案例和问题类型。

:::slide
id: assess-03
title: 团队复讲：替换案例，不替换方法
mode: rollout
duration_min: 3
visual: cards
:::

### Headline
首期 Committer 的任务是把方法带回团队，而不是原样转述课件。

### Body
团队复讲时，保留 Spec first、Human in the loop、Evidence over confidence 的方法主线，替换成本团队仓库、规范和真实痛点。

### Key Points
- 用团队自己的小需求替换 Pet 练习。
- 用团队自己的 MR 流程替换 MCP 演示细节。
- 用团队真实存量模块替换 SMN 练习。
- 把团队约束写进本课程 Spec 或派生 Spec。

### Visual
- 保留：方法论、证据标准、Review 边界。
- 替换：仓库、工具入口、业务案例、验收命令。
- 沉淀：团队 Prompt、Skill、Rubric、FAQ。

### Takeaway
课程材料应像代码一样被 fork、Review、合并和迭代。

### Speaker Notes
- 强调复讲不是照本宣科，真正价值在于让团队自己的流程变得可复制。
- 可鼓励每个团队提交一份派生模块 Spec。

:::slide
id: assess-04
title: 跑分红黑榜与问卷反馈
mode: rollout
duration_min: 3
visual: flow
:::

### Headline
用公开时间线收口作业验收，用问卷把真实痛点带回下一期课程。

### Body
课程结束后收集 MR、自动化打分结果、问卷、失败案例和复讲反馈。课程组按约定时间发布脱敏红黑榜，并将高频问题转成 Spec 任务，而不是散落在聊天记录里。

### Key Points
- T+1：完成自动化跑分，公布需补交或需返工名单。
- T+3：完成人工复核，发布脱敏红黑榜和典型案例。
- 本页必须在发布前替换为真实问卷二维码或短链。
- 高频需求：哪些研发动作最适合做 Skill。
- 卡点场景：哪些仓库、模块、流程最难让 AI 读懂。
- 安全顾虑：Token、数据、权限、审计有哪些边界。

### Visual
- T+1 自动跑分
- T+3 红黑榜
- 问卷二维码/短链
- 痛点归类
- 更新 Spec
- 生成新版课件

### Takeaway
AI 赋能培训必须像产品一样持续迭代。

### Speaker Notes
- 问卷最好包含开放题和证据上传入口；发布前把占位二维码替换成真实入口。
- 红黑榜只展示脱敏案例、优秀做法和典型问题，不公开羞辱个人。
- 课程维护者把反馈转成 `specs/course-production/tasks.md` 中的待办。
