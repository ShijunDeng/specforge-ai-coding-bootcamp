---
layout: default
class: lesson-slide
---

<div class="section-tag">05 · 能力扩展</div>
# MCP 协议架构
<BrandMark />
<PageNo current="16" />

<div class="mcp-architecture">
  <div class="mcp-host"><small>MCP HOST</small><strong>AI 应用</strong><span>模型 · 对话 · 权限 · 用户交互</span><div class="clients"><b>Client A</b><b>Client B</b><b>Client C</b></div></div>
  <div class="mcp-link"><span>能力协商</span><b>JSON-RPC 2.0</b><span>stdio / Streamable HTTP</span></div>
  <div class="servers"><div><small>SERVER A</small><b>代码仓库</b><span>Tools</span></div><div><small>SERVER B</small><b>文档系统</b><span>Resources</span></div><div><small>SERVER C</small><b>工单平台</b><span>Prompts</span></div></div>
</div>

<div class="primitive-row"><div><b>Tools</b><span>模型可调用的动作</span></div><div><b>Resources</b><span>应用管理的上下文</span></div><div><b>Prompts</b><span>用户选择的交互模板</span></div><div><b>1 : 1</b><span>每个 Client 连接一个 Server</span></div></div>

<!-- 官方架构：https://modelcontextprotocol.io/docs/learn/architecture -->
