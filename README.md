# 神灯训练营

基于 Slidev 维护的课程门户。首页展示课程卡片，每套课程拥有独立源码目录和访问路径。

## 本地运行

```bash
npm install
npm run dev
```

- 课程首页：`http://localhost:3030/`
- AI 辅助研发训战：`http://localhost:3030/ai-coding/`

## 文件结构

```text
portal/                 # 课程首页
courses/
  ai-coding/            # 一套完整、独立的 Slidev 课件
    slides.md           # 课件入口与页面顺序
    pages/              # 页面内容
    styles/             # 公共及页面样式
    components/         # 课件组件
    public/             # 课件素材
    vite.config.ts      # 课程构建配置
package.json            # 统一启动、构建、导出命令
vite.portal.config.ts   # 首页服务与课程开发代理
```

## 常用命令

```bash
npm run dev              # 启动首页和全部课程
npm run build            # 构建首页和全部课程
npm run export:ai-coding # 导出 AI Coding 课件
npm run mcp:ai-coding    # 启动 AI Coding Slidev MCP
```

新增课程时，在 `courses/<slug>/` 中建立独立 Slidev 工程，并同步增加首页卡片、开发代理、构建命令和静态路由。详细约定见 `courses/README.md`。
