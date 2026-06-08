---
id: module-id
title: 模块标题
duration_min: 30
intent: 说明本模块解决的教学问题。
outcomes:
  - 学员完成本模块后能做到的可观察行为。
---

# 模块标题

## Field Guide

复制本模板后，先删除本说明区，再填写正式课程内容。

### Module Frontmatter

| 字段 | 必填 | 填写方式 |
| --- | --- | --- |
| `id` | 是 | 模块全局唯一 id，使用小写 kebab-case，例如 `debugging-with-ai`。必须与 `specs/course.yaml` 中 `modules[].id` 完全一致。 |
| `title` | 是 | 课件中展示的模块标题，建议 8-18 个汉字，表达主题而不是文件名。 |
| `duration_min` | 是 | 本模块课堂总时长，单位分钟。必须等于本模块所有 `:::slide` 的 `duration_min` 之和，并与 `specs/course.yaml` 中同一模块一致。课前材料可填 `0`。 |
| `intent` | 是 | 一句话说明本模块解决的教学问题，写“为什么要教这一节”，不要写成页面目录。 |
| `outcomes` | 是 | 2-5 条可观察学习产出，用“能……”表述，必须能通过练习、提问、文档或代码证据验证。 |

### Slide Metadata

| 字段 | 必填 | 填写方式 |
| --- | --- | --- |
| `id` | 是 | 页面全局唯一 id，建议用模块短名前缀加序号，例如 `debug-01`。不要和其他模块页面重复。 |
| `title` | 是 | 页面标题，写本页主题；核心判断放到 `Headline`。 |
| `mode` | 是 | 授课方式。常用值：`intro`、`talk`、`demo`、`lab`、`summary`、`assessment`、`rollout`、`prep`。 |
| `duration_min` | 是 | 本页预计时长。模块内所有页面时长相加必须等于模块总时长。 |
| `visual` | 建议 | 右侧视觉结构类型。常用值：`flow`、`checklist`、`matrix`、`cards`、`timeline`、`contrast`。 |

### Slide Sections

| 章节 | 必填 | 填写方式 |
| --- | --- | --- |
| `Headline` | 建议 | 本页最重要的判断句。不要写“背景介绍”这类弱标题。 |
| `Body` | 建议 | 支撑 Headline 的短段落，控制在 1-3 句。 |
| `Key Points` | 建议 | 屏幕可见要点，通常 3-6 条。不要放完整讲稿。 |
| `Visual` | 建议 | 右侧视觉区内容，可以是流程、矩阵、检查项、卡片文案或图示描述。 |
| `Takeaway` | 建议 | 本页结束时学员应该记住的一句话。 |
| `Speaker Notes` | 建议 | 讲师讲法、追问、常见误区、时间不足时的取舍。不会作为屏幕主内容展示。 |

## Module Brief

说明本模块与目标学员、课堂上下文和课程主线的关系。

:::slide
id: module-01
title: 页面标题
mode: talk
duration_min: 5
visual: checklist
:::

### Headline
这一页的核心判断，避免写成泛泛介绍。

### Body
给讲师和生成器使用的正文说明。保持短段落，避免把完整讲稿塞进屏幕。

### Key Points
- 要点一。
- 要点二。
- 要点三。

### Visual
- 视觉元素一。
- 视觉元素二。
- 视觉元素三。

### Takeaway
本页结束时学员应该记住的一句话。

### Speaker Notes
- 讲师如何引入这一页。
- 常见误区或追问。
- 如果现场时间不足，应保留或删减什么。
