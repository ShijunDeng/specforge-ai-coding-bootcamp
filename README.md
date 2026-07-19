# 神灯局 AI 辅助开发课件

一套直接使用 Slidev 维护的 40 页 AI 辅助开发培训课件。仓库不使用课程 Spec、生成器或多目标编译机制；`slides.md` 负责全局配置与页面顺序，每页内容独立保存在 `pages/` 中。

## 本地使用

```bash
npm install
npm run dev
npm run build
npm run mcp
```

- `slides.md`：全局 headmatter 与 40 页导入顺序。
- `pages/`：一页一个 Markdown，保存页面内容、frontmatter 和讲师备注。
- `components/`：跨页复用的品牌标识与课程页码组件。
- `styles/`：公共品牌样式、共享模式和与页面编号对应的专属样式。
- `public/`：课件直接引用的品牌、公开资料与生成式视觉资源。
- `.agents/skills/slidev/`：供编码代理使用的 Slidev 工作指南，不参与运行时构建。

`npm run mcp` 会通过 stdio 启动 Slidev MCP，供支持 MCP 的客户端检查和编辑课件；最终结果仍以 Slidev 构建与渲染为准。需要导出 PDF 时运行 `npm run export`。Slidev 导出需要 Playwright Chromium，未安装时按照 Slidev 提示补充即可。

页面文件使用 Slidev 物理页码作为前缀，例如 `/8` 对应 `pages/08-*.md` 和 `styles/pages/08-*.css`。并行改单页时只修改这一对文件；`slides.md`、`styles/index.ts` 和公共组件保持只读。
