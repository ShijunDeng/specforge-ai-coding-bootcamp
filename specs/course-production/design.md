# Design: 课件工程设计

## 架构

```text
course.xlsx
  -> specs/course.yaml
  -> specs/modules/*.md
  -> scripts/generate-slidev.mjs
  -> build/slides/*.slidev.md
  -> Slidev preview/build/export
```

## 文件职责

- `course.yaml` 只维护课程级结构、deck 组合、实操和评分规则。
- `modules/*.md` 维护讲师实际要讲的内容。
- `generate-slidev.mjs` 负责把模块内容渲染为统一 Slidev 页面。
- `validate-spec.mjs` 负责结构校验和敏感信息扫描。
- `style.css` 负责视觉样式，不污染 Spec。

## Markdown Slide Block

每页使用如下结构：

```markdown
:::slide
id: example-01
title: 页面标题
mode: talk
duration_min: 5
visual: checklist
:::

### Headline
核心判断。

### Key Points
- 要点。

### Speaker Notes
- 讲师备注。
```

这样做的原因：

- 讲师仍然编辑 Markdown。
- 生成器可以稳定提取页面元数据。
- Speaker Notes 与屏幕可见内容分离。
- 后续可以扩展视觉类型或多语言输出。

## 组合生成

内置 deck 写在 `course.yaml` 的 `decks[]` 中。自定义 deck 写在 `configs/*.yaml`，或使用命令行 `--modules` 临时选择模块。

## 风险与控制

- 风险：讲师把生成物当源文件修改。
  - 控制：`.gitignore` 忽略 `build/`、`dist/`、PPTX、PDF，并在 README 和宪法中声明。
- 风险：课程包含真实凭证。
  - 控制：校验器扫描常见 Token、AK/SK、私钥模式，讲师 Runbook 要求脱敏。
- 风险：Spec 变成大段讲稿，PPT 不可读。
  - 控制：模板区分 Body、Key Points、Speaker Notes。
- 风险：不同讲师需要不同课时。
  - 控制：deck 组合和模块化时长。
