# 企业级 AI 辅助编码实战营课件工程

这是一个 Spec Driven Development 风格的课件仓库：讲师维护 `specs/` 中的课程规格文件，需要交付时再临时生成 Slidev Markdown、网页课件、PDF 或 PPTX。

## 快速开始

```bash
npm install
npm run check
```

常用命令：

```bash
npm run validate      # 校验课程规格
npm run generate      # 从 specs/course.yaml 生成 build/slides/*.slidev.md
npm run slides        # 启动 Slidev 预览，默认端口 3030，绑定 0.0.0.0
npm run build         # 生成可托管静态站点到 dist/slides
npm run export:pptx   # 临时导出 PPTX，需先安装 playwright-chromium
npm run export:pdf    # 临时导出 PDF，需先安装 playwright-chromium
```

导出 PDF/PPTX 前，按 Slidev 官方要求安装浏览器渲染依赖：

```bash
npm i -D playwright-chromium
```

## 目录约定

- `specs/course.yaml`：课程源规格，包含学习目标、模块、讲师提示、实操任务、验收标准。
- `specs/constitution.md`：课件生产的长期约束，避免把生成物当源文件维护。
- `specs/slide-generation-spec.md`：生成脚本的技术规格。
- `docs/authoring-guide.md`：讲师维护 spec 的方法。
- `scripts/validate-spec.mjs`：轻量校验器。
- `scripts/generate-slidev.mjs`：Slidev Markdown 生成器。
- `build/`、`dist/`：生成物目录，不提交。

## 维护原则

1. 课程事实只改 `specs/`，不要直接改 `build/slides/*.md`。
2. 每次修改 spec 后运行 `npm run check`。
3. 上课前用 `npm run slides` 预览；交付归档时再用 `npm run export:pptx` 或 `npm run export:pdf`。
4. 如果内部工具名称、Token 流程、仓库地址有变化，只更新对应 spec 字段。

