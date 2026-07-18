# AGENTS.md

本仓库是一套直接使用 Slidev 维护的五页培训课件。保持实现简单，不引入课程 Spec、代码生成器或多目标编译流程。

## 真实来源

- `slides.md` 是课件内容、页面顺序和讲师备注的唯一来源。
- `style.css` 保存全局品牌样式。
- `public/` 只保存课件直接引用的静态资源。
- `.agents/skills/slidev/` 保存供编码代理使用的 Slidev 指南，不参与课件运行或构建。
- `dist/` 是构建产物，不直接编辑或提交。

## 修改约定

- 优先使用 Slidev 标准 Markdown、frontmatter 和内置 layout。
- 页面需要特殊展示时，可以在 `slides.md` 中使用少量 HTML，并在 `style.css` 中维护样式。
- 不新增 Spec DSL、生成脚本、自定义解析器或平行内容源。
- 不新增 Vue 组件，除非标准 Slidev 能力确实无法满足明确需求。
- 保持当前五页顺序：封面、课程地图、培训目标、课程组织、环境准备。
- 保持神灯局的深绿、橙色、暖白背景和品牌 logo；视觉调整后检查全部五页。

## 常用命令

```bash
npm install
npm run dev
npm run build
npm run export
```

- 本地预览绑定 `0.0.0.0`，默认端口为 Slidev 默认端口 `3030`。
- 内容或样式修改后至少运行 `npm run build`。
- 视觉修改后在浏览器中检查全部五页，确认无溢出、裁切、资源失败或不可读文本。
- 需要 PDF 时再运行 `npm run export`；导出依赖缺失时按 Slidev 官方要求安装 Playwright Chromium。

## 完成标准

- `slides.md` 仍然只包含五页。
- `npm run build` 成功。
- 五页浏览器渲染均已检查。
- `git status` 中只包含当前任务相关变化。
