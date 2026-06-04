# Spec 维护指南

## 修改课程内容

优先修改 `specs/course.yaml` 中的结构化字段：

- 调整课程目标：改 `audience.learning_outcomes`。
- 调整课堂节奏：改 `modules[].duration_min` 和 `segments[].duration_min`。
- 调整单页内容：改 `segments[].slides[]`。
- 调整实操验收：改 `labs[]` 和 `assessment`。

生成器会统一处理封面、模块页、内容页、讲师备注和视觉组件，不需要在 spec 里写排版 HTML。

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

## 生成与预览

```bash
npm run check
npm run slides
```

公网预览时使用机器公网 IP 和端口访问；如果端口被占用，设置 `PORT`：

```bash
PORT=3031 npm run slides
```

