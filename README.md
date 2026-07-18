# 神灯局 AI 辅助开发课件

一套直接使用 Slidev 维护的五页培训课件。仓库不使用课程 Spec、生成器或多目标编译机制，页面内容直接写在 `slides.md` 中。

## 本地使用

```bash
npm install
npm run dev
npm run build
```

- `slides.md`：五页课件内容、顺序和讲师备注。
- `style.css`：全局品牌与页面样式。
- `public/`：课件直接引用的静态资源。
- `.agents/skills/slidev/`：供编码代理使用的 Slidev 工作指南，不参与运行时构建。

需要导出 PDF 时运行 `npm run export`。Slidev 导出需要 Playwright Chromium，未安装时按照 Slidev 提示补充即可。
