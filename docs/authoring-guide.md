# Spec 维护指南

## 修改课程内容

优先修改 `specs/course.yaml` 中的结构化字段：

- 调整课程目标：改 `audience.learning_outcomes`。
- 调整课堂节奏：改 `modules[].duration_min` 和 `segments[].duration_min`。
- 调整单页内容：改 `segments[].slides[]`。
- 调整实操验收：改 `labs[]` 和 `assessment`。

生成器会统一处理封面、模块页、内容页、讲师备注和视觉组件，不需要在 spec 里写排版 HTML。

## SDD 四阶维护方式

当课程发生较大变化时，先更新 `specs/course-production/`，再更新课件正文：

- `proposal.md`：说明为什么要改，解决什么教学或运营问题。
- `spec.md`：说明学员产出、材料形态和质量要求。
- `design.md`：说明内容结构、生成策略、Review 流程和扩展点。
- `tasks.md`：说明讲师、助教和课程维护者需要完成的任务。

小改动可以直接改 `specs/course.yaml`，但如果涉及课程目标、实操项目、评分规则或生成管线，必须同步更新四阶文档。

## 新增一页

复制相邻 slide，确保：

- `id` 全局唯一。
- `title` 是屏幕上可见标题。
- `headline` 是本页核心判断，不写成泛泛介绍。
- `bullets` 不超过 5 条。
- `notes` 写给讲师，说明怎样讲、怎样追问、怎样处理常见偏差。
- `visual.type` 只使用生成器支持的类型：`flow`、`matrix`、`checklist`、`contrast`、`cards`、`timeline`、`rubric`。

## 讲师 Review 清单

- 这页是否回答“学员课后会做什么”？
- 是否有可观察的课堂行为或验收点？
- 是否避免把 AI 当成一次性代码生成器？
- 是否明确了人类的审查、决策和责任边界？
- 是否泄露了真实 Token、账号、内部生产地址？

## 用 AI 辅助改 Spec

可以让 AI 帮忙扩写页面，但提示词必须包含：

- 要修改的模块、segment 或 slide id。
- 目标学员、课堂时长和授课方式。
- 必须保留的工具名、组织术语和安全边界。
- 输出字段要求，例如 `headline`、`bullets`、`visual`、`notes`。
- 验收规则，例如 bullets 不超过 5 条、必须包含讲师备注、禁止出现真实密钥。

AI 输出后只作为候选补丁。讲师需要 Review 内容，再运行 `npm run check`。

## 生成与预览

```bash
npm run check
npm run slides
```

公网预览时使用机器公网 IP 和端口访问；如果端口被占用，设置 `PORT`：

```bash
PORT=3031 npm run slides
```
