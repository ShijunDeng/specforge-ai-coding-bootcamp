# Spec 维护指南

## 修改课程内容

优先修改 `specs/modules/*.md`：

- 调整章节目标：改模块 frontmatter 的 `intent` 和 `outcomes`。
- 调整单页内容：改对应 `:::slide` block 下的 Headline、Body、Key Points、Visual、Takeaway、Speaker Notes。
- 调整课堂时长：同时改模块 frontmatter 和 `specs/course.yaml` 中对应模块的 `duration_min`。
- 调整章节组合：改 `specs/course.yaml` 的 `decks[]`，或新增 `configs/*.yaml`。

课程级内容改 `specs/course.yaml`：

- 目标学员和学习产出：`audience`。
- 教学原则和总时长：`learning_design`。
- 实操任务：`labs[]`。
- 大作业评分：`assessment`。

## 新增一页

复制相邻 slide 或 `specs/templates/module-spec.template.md` 中的示例，确保：

- `id` 全局唯一。
- `title` 是屏幕上可见标题。
- `Headline` 是本页核心判断，不写成泛泛介绍。
- `Key Points` 不超过 5-6 条。
- `Visual` 描述页面右侧该展示的结构，可以是流程、表格、清单、对比或任务卡。
- `Speaker Notes` 写给讲师，说明怎样讲、怎样追问、怎样处理常见偏差。

## 新增章节

1. 在 `specs/modules/` 新增 Markdown 文件。
2. 在 `specs/course.yaml` 的 `modules[]` 注册 id、路径、时长和来源。
3. 把模块 id 加入一个或多个 `decks[]`。
4. 运行 `npm run validate`。

## 讲师 Review 清单

- 这页是否回答“学员课后会做什么”？
- 是否有可观察的课堂行为或验收点？
- 是否避免把 AI 当成一次性代码生成器？
- 是否明确了人类的审查、决策和责任边界？
- 是否泄露了真实 Token、账号、内部生产地址或凭证？

## 用 AI 辅助改 Spec

可以让 AI 帮忙扩写页面，但提示词必须包含：

- 要修改的模块、slide id 或章节组合。
- 目标学员、课堂时长和授课方式。
- 必须保留的工具名、组织术语和安全边界。
- 输出字段要求，例如 Headline、Key Points、Visual、Speaker Notes。
- 验收规则，例如 bullets 不超过 6 条、必须包含讲师备注、禁止出现真实密钥。

AI 输出后只作为候选补丁。讲师需要 Review 内容，再运行：

```bash
npm run validate
npm run generate
```

## 预览与构建

```bash
npm run slides
```

如果端口被占用：

```bash
PORT=3031 npm run slides
```

正式交付前：

```bash
npm run check
```
