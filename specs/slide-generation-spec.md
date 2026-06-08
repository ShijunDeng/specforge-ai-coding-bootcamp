# Slidev 生成规格

## 目标

从 `specs/course.yaml` 和 `specs/modules/*.md` 生成可直接运行的 Slidev Markdown，支持完整 7 小时课程、第一课、第二课、专题课和自定义章节组合。

## 输入

- `specs/course.yaml`
  - `meta`：课程标题、版本、来源、摘要。
  - `audience`：学员画像、前置条件、学习产出。
  - `learning_design`：教学承诺、原则和课堂比例。
  - `decks[]`：内置章节组合。
  - `modules[]`：模块 id、文件路径、时长、来源大纲行。
  - `labs[]`：实操任务、限制、验收。
  - `assessment`：评分规则与安全红线。
- `specs/modules/*.md`
  - YAML frontmatter：模块 id、标题、时长、教学意图、学习产出。
  - `:::slide` block：页面 id、标题、模式、时长、视觉类型。
  - 页面章节：Headline、Body、Key Points、Visual、Takeaway、Speaker Notes。
- `configs/*.yaml`
  - 可选的自定义 deck 配置。

## 输出

- 默认输出：`build/slides/ai-coding-bootcamp-7h.slidev.md`。
- 内置 deck 输出：由 `specs/course.yaml` 中对应 deck 的 `output` 指定。
- `--modules` 临时组合输出：未指定 `--output` 时生成到 `build/slides/custom-<module-ids>.slidev.md`，避免覆盖内置 deck。
- `--config` 自定义 deck 输出：由 `configs/*.yaml` 中 deck 的 `output` 指定。
- 显式自定义输出：由 `--output` 覆盖上述规则。
- 同目录复制 `style.css`，供 Slidev 渲染使用。
- 公网预览由 `scripts/serve-public.mjs` 启动 Slidev 并创建 localtunnel 地址，必须使用 `--local-host 127.0.0.1` 保证公网 Host 被接受。
- PPTX 默认由 `scripts/export-pptx-with-skill.mjs` 读取 Spec 并按 `/home/dsj/skills/open-skills/pptx` skill 规则生成，Slidev PPTX 导出仅作为显式备用路径。

## 命令

```bash
npm run generate
npm run generate -- --deck lesson1-lab
npm run generate -- --deck lesson2-sdd
npm run generate -- --modules orientation,sdd-codewiki,smn-design-lab
npm run generate -- --config configs/custom-deck.example.yaml
npm run generate -- --list-decks
npm run slides:public
npm run export:pptx
```

## 验收

- `npm run validate` 能发现缺失标题、重复 slide id、缺失讲师备注、模块时长不一致、模块 manifest 追溯字段不一致、deck/config 引用错误、缺失来源文件和敏感凭证模式。
- `npm run generate` 能稳定生成 Markdown。
- `npm run build` 能通过 Slidev 构建静态站点。
- `npm run slides:public` 必须输出可访问公网地址。
- `npm run export:pptx` 必须能找到 `/home/dsj/skills/open-skills/pptx/SKILL.md` 并生成 PPTX。
- Slidev PDF/PPTX 备用导出必须先安装 `playwright-chromium`，生成文件不提交。

## 扩展约束

- 生成器只做轻量 Markdown 到 Slidev 的转换，不把排版逻辑写回 Spec。
- 新视觉类型应先补 CSS 和生成器，再在模板中开放给讲师。
- 如果未来需要多语言或多讲师版本，优先通过 deck/config 组合实现，不复制整套课程。
