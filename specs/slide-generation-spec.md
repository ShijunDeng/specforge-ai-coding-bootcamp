# Slidev 生成规格

## 目标

从 `specs/course.yaml` 生成一份可直接运行的 Slidev Markdown，作为课堂预览、静态站点构建、PPTX/PDF 导出的统一入口。

## 输入

- `meta`：课程标题、版本、讲师、来源、生成文件名。
- `audience`：学员画像、前置条件、学习产出。
- `learning_design`：课程设计原则、课堂节奏、风险控制。
- `modules[].segments[].slides[]`：具体页内容。
- `labs`：实操任务、输入、限制、验收标准。
- `assessment`：作业验收与评分规则。
- `specs/course-production/*`：课程材料自身的 SDD 依据，供讲师 Review 和版本治理使用，不直接渲染到课堂 PPT。

## 输出

- `build/slides/ai-coding-bootcamp.slidev.md`。
- 文件包含 Slidev frontmatter、课程封面、课程地图、模块分隔页、内容页、作业验收页。
- 讲师备注写入 Slidev speaker notes，便于 presenter mode 使用。

## 验收

- `npm run validate` 能发现缺失标题、空模块、重复 slide id、缺失讲师备注等问题。
- `npm run validate` 能确认课程生产的四阶 SDD 文档存在，并扫描常见密钥模式。
- `npm run generate` 能稳定生成 Markdown。
- `npm run build` 能通过 Slidev 构建静态站点。
- `export:pptx` 和 `export:pdf` 不提交生成文件，只作为临时交付命令。
