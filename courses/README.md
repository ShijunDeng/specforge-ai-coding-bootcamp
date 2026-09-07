# 课程目录

每个一级子目录对应一套课程，目录名同时作为访问路径，例如 `ai-coding` 对应 `/ai-coding/`。

```text
courses/<slug>/
  slides.md
  pages/
  styles/
  components/
  public/
  vite.config.ts
```

## 更新现有课程

1. 在课程目录内修改页面、样式、组件或素材。
2. 运行对应课程的构建命令。
3. 涉及视觉变化时导出受影响页面并检查实际渲染。

## 新增课程

1. 新建 `courses/<slug>/`，保持上面的 Slidev 目录结构。
2. 在 `portal/index.html` 增加课程卡片。
3. 在 `vite.portal.config.ts` 增加开发代理。
4. 在 `package.json` 增加该课程的开发、构建、导出和 MCP 命令，并纳入总 `dev` 与 `build`。
5. 在 `portal/public/_redirects` 增加静态托管路由。
