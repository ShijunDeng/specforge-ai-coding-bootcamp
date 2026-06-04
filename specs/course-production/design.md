# Design: Spec 驱动课件生成设计

## 总体架构

```text
Excel 提纲 / 讲师反馈 / 作业复盘
          |
          v
 specs/course.yaml --------------+
          |                       |
          v                       v
 scripts/validate-spec.mjs   specs/course-production/*
          |
          v
 scripts/generate-slidev.mjs
          |
          v
 build/slides/*.slidev.md
          |
          +--> Slidev 预览
          +--> dist/slides 静态站点
          +--> 临时 PDF / PPTX 导出
```

## 数据模型

`specs/course.yaml` 分为七类信息：

- `meta`：课程标题、版本、受众标签、来源和讲师提示。
- `deck`：生成输出路径和导出文件名。
- `audience`：学员画像、前置条件和学习成果。
- `learning_design`：课程承诺、教学原则和课堂节奏。
- `modules`：模块、环节、页面、视觉组件和讲师备注。
- `labs`：随堂练习、约束和验收标准。
- `assessment`：大作业评分 Rubric 和安全红线。

## 生成策略

- 讲师维护结构化内容，生成器统一处理封面、课程地图、模块页、内容页、实操总览和评分 Rubric。
- 视觉组件只允许使用受控类型：`flow`、`matrix`、`checklist`、`contrast`、`cards`、`timeline`、`rubric`。
- 每个内容页由 `title`、`headline`、`body`、`bullets`、`visual`、`takeaway`、`notes` 组成。
- 讲师备注写入 Slidev speaker notes，便于演讲者视图使用。

## Review 流程

课程变更按以下顺序 Review：

1. **学习目标 Review**：变更是否服务于目标受众和课程产出。
2. **教学路径 Review**：讲解、演示、练习、复盘的比例是否合理。
3. **实操验收 Review**：练习是否有可观察证据，是否避免只看截图。
4. **安全合规 Review**：是否存在真实密钥、生产地址、敏感日志或越权操作。
5. **生成验证 Review**：`npm run check` 是否通过，预览课件是否可读。

## AI 协作方式

让 AI 参与课件维护时，必须提供以下上下文：

- 当前需要修改的模块或 slide id。
- 目标学员和课堂时长。
- 必须保留的术语、工具名和安全边界。
- 期望输出字段，例如 `headline`、`bullets`、`visual`、`notes`。
- 验收要求，例如 bullets 数量、是否需要实操证据、是否禁止出现真实 Token。

AI 输出后必须由讲师 Review，再运行校验命令。AI 不应直接修改生成物作为最终交付。

## 扩展点

- 新增视觉组件时，先更新 `scripts/validate-spec.mjs` 白名单，再更新 `scripts/generate-slidev.mjs` 渲染函数。
- 新增课程时，复制 `specs/course.yaml` 的结构，而不是复制生成出的 Slidev Markdown。
- 需要连接 LMS、问卷或作业系统时，优先新增结构化字段，再由脚本生成对应链接或页面。
