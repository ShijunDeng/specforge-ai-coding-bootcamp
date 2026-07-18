---
layout: default
class: lesson-slide mcp-slide
---

<div class="section-tag">05 · 能力扩展</div>
# MCP：把外部能力接进 AI 应用
<BrandMark />
<PageNo current="16" />

<p class="mcp-lead"><strong>一个开放协议</strong>，让 AI 应用用统一方式发现上下文、调用动作；模型如何使用能力、用户是否授权，仍由 Host 决定。</p>

<div class="mcp-system-map">
  <section class="mcp-host-panel">
    <div class="mcp-panel-label"><span>HOST</span> AI 应用</div>
    <div class="mcp-user-query"><small>用户任务</small><b>“查出 PetClinic 最近失败的构建”</b></div>
    <div class="mcp-host-core"><span class="mcp-core-orbit">CONTEXT</span><div class="mcp-core-dot">LLM</div><strong>选择能力<br/>生成调用参数</strong></div>
    <div class="mcp-host-responsibility"><span>上下文编排</span><span>用户授权</span><span>多 Client 管理</span></div>
  </section>

  <section class="mcp-session-panel">
    <div class="mcp-session-heading"><span class="mcp-mark">M</span><div><small>1 : 1 CLIENT ↔ SERVER</small><strong>MCP 会话</strong></div></div>
    <div class="mcp-wire-flow">
      <div><i>1</i><code>initialize</code><span>版本与能力协商</span><b>⇄</b></div>
      <div><i>2</i><code>tools/list</code><span>运行时发现能力</span><b>←</b></div>
      <div class="is-call"><i>3</i><code>tools/call</code><span>Host 审批后发送参数</span><b>→</b></div>
      <div><i>4</i><code>result</code><span>结果回到模型上下文</span><b>←</b></div>
    </div>
    <div class="mcp-protocol-stack"><span><b>数据层</b> JSON-RPC 2.0</span><span><b>传输层</b> stdio · Streamable HTTP</span></div>
  </section>

  <section class="mcp-server-panel">
    <div class="mcp-panel-label"><span>SERVER</span> 外部系统适配器</div>
    <div class="mcp-server-card tool-server"><i>&lt;/&gt;</i><div><small>工程仓库</small><b>read_file · run_tests</b></div><em>动作</em></div>
    <div class="mcp-server-card resource-server"><i>▤</i><div><small>知识库</small><b>docs://petclinic/ci</b></div><em>上下文</em></div>
    <div class="mcp-server-card prompt-server"><i>◆</i><div><small>研发流程</small><b>release-review</b></div><em>模板</em></div>
    <div class="mcp-server-boundary"><b>边界</b><span>Server 只收到本次调用所需信息，不直接看到完整对话。</span></div>
  </section>
</div>

<div class="mcp-bottom-row">
  <div class="mcp-primitives">
    <div><span class="primitive-icon">⚡</span><p><b>Tools · 动作</b><small>模型请求调用；Host 可逐次审批</small></p></div>
    <div><span class="primitive-icon">◎</span><p><b>Resources · 上下文</b><small>应用选择读取并送入模型</small></p></div>
    <div><span class="primitive-icon">▣</span><p><b>Prompts · 模板</b><small>用户主动选择可复用流程</small></p></div>
  </div>
  <aside class="mcp-value-panel">
    <small>协议价值</small>
    <div><b>可发现</b><span><code>*/list</code> 暴露当前能力</span></div>
    <div><b>可复用</b><span>同一 Server 可接入不同 Host</span></div>
    <div><b>有边界</b><span>权限、同意与上下文留在 Host</span></div>
  </aside>
</div>

<!--
讲师提示：先沿中间 1→4 讲一遍调用链，再解释底部三类原语由谁触发。MCP 标准化连接与消息，不规定模型如何推理，也不能替代 Host 的授权与安全控制。

资料核对日期：2026-07-19
- MCP Architecture Overview（参与者、两层协议、原语、发现与调用流程）：https://modelcontextprotocol.io/docs/learn/architecture
- MCP Specification 2025-11-25（Host / Client / Server、JSON-RPC、能力与安全边界）：https://modelcontextprotocol.io/specification/2025-11-25
- MCP Lifecycle（initialize、能力协商、operation、shutdown）：https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle
- MCP Transports（stdio、Streamable HTTP）：https://modelcontextprotocol.io/specification/2025-11-25/basic/transports
- MCP Server Concepts（Tools / Resources / Prompts 的交互控制方式）：https://modelcontextprotocol.io/docs/learn/server-concepts
图示依据上述官方架构与消息流重绘，适配 1280 × 720 中文投影阅读。
-->
