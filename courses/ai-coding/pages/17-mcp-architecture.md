---
layout: default
class: lesson-slide mcp-slide
---

<div class="lesson-heading"><div class="section-tag">AI Coding</div><h1>MCP：能力连接的标准协议</h1></div>
<BrandMark />
<PageNo current="15" />

<p class="slide-subtitle mcp-lead"><strong>Host 负责编排与安全</strong>，Client 维护协议连接，Server 用统一原语暴露上下文与动作；MCP 不规定模型如何推理。</p>

<div class="mcp-main-grid">
  <section class="mcp-architecture-card">
    <header class="mcp-card-heading"><span>01 · ARCHITECTURE</span><b>一个 Client 对应一个 Server</b></header>
    <div class="mcp-architecture-map">
      <div class="mcp-host-box">
        <div class="mcp-node-title"><span>HOST</span><div><b>AI 应用</b><small>Chat · IDE · Agent Runtime</small></div></div>
        <div class="mcp-host-runtime"><div><i>UI</i><small>用户交互</small></div><b>→</b><div class="is-core"><i>LLM</i><small>模型与上下文</small></div><b>→</b><div><i>POLICY</i><small>权限与审批</small></div></div>
        <div class="mcp-client-manager"><label>CLIENT MANAGER <small>隔离连接与上下文</small></label><div><span>Client A</span><span>Client B</span><span>Client C</span></div></div>
      </div>
      <div class="mcp-protocol-rail">
        <div class="mcp-protocol-core"><span class="mcp-logo-glyph">M</span><b>MCP</b><small>JSON-RPC 2.0</small></div>
        <div class="mcp-transport-row is-local"><span>stdio</span><i></i><b>⇄</b></div>
        <div class="mcp-transport-row"><span>Streamable HTTP</span><i></i><b>⇄</b></div>
        <div class="mcp-transport-row"><span>Streamable HTTP</span><i></i><b>⇄</b></div>
        <div class="mcp-message-types">请求 · 响应 · 通知</div>
      </div>
      <div class="mcp-server-stack">
        <div class="mcp-node-title"><span>SERVER</span><div><b>能力适配器</b><small>本地进程或远程服务</small></div></div>
        <div class="mcp-server-node"><i>⌘</i><div><b>Filesystem Server</b><small>本地进程</small></div><span class="mcp-system-target"><b>→</b><em>Files</em></span></div>
        <div class="mcp-server-node"><i>▤</i><div><b>Database Server</b><small>远程服务</small></div><span class="mcp-system-target"><b>→</b><em>Database</em></span></div>
        <div class="mcp-server-node"><i>◫</i><div><b>Business API Server</b><small>远程服务</small></div><span class="mcp-system-target"><b>→</b><em>SaaS / API</em></span></div>
      </div>
    </div>
  </section>

  <section class="mcp-capability-card">
    <header class="mcp-card-heading"><span>02 · CAPABILITIES</span><b>协议能力是双向的</b></header>
    <div class="mcp-direction-label"><span>SERVER PRIMITIVES</span><small>Client 发现并使用</small></div>
    <div class="mcp-server-primitives">
      <div class="is-tool"><i>⚡</i><p><b>Tools</b><span>执行动作 · 模型控制</span><code>tools/list · tools/call</code></p></div>
      <div class="is-resource"><i>◎</i><p><b>Resources</b><span>读取上下文 · 应用控制</span><code>resources/list · read</code></p></div>
      <div class="is-prompt"><i>◆</i><p><b>Prompts</b><span>复用模板 · 用户控制</span><code>prompts/list · get</code></p></div>
    </div>
    <div class="mcp-direction-label is-reverse"><span>CLIENT FEATURES</span><small>Server 可按需请求</small></div>
    <div class="mcp-client-primitives"><span><b>Roots</b> 文件边界</span><span><b>Sampling</b> 请求模型生成</span><span><b>Elicitation</b> 请求用户输入</span></div>
  </section>
</div>

<section class="mcp-runtime-card">
  <header class="mcp-card-heading"><span>03 · RUNTIME</span><b>先协商，再发现，然后调用</b></header>
  <div class="mcp-runtime-content">
    <div class="mcp-lifecycle-flow">
      <div><i>1</i><p><code>initialize</code><span>协商版本与 capabilities</span></p></div><b>→</b>
      <div><i>2</i><p><code>*/list</code><span>发现 tools / resources / prompts</span></p></div><b>→</b>
      <div><i>3</i><p><code>read · get · call</code><span>按 schema 读取或调用</span></p></div><b>→</b>
      <div><i>4</i><p><code>notifications/*</code><span>同步能力与资源变化</span></p></div>
    </div>
    <aside class="mcp-practice-box"><div><b>本地</b><span>stdio · 子进程通信</span></div><div><b>远程</b><span>Streamable HTTP · OAuth</span></div><div><b>安全</b><span>最小权限 · 调用审批 · 审计</span></div><div><b>契约</b><span>输入 / 输出 schema 校验</span></div></aside>
  </div>
</section>

<!--
讲师提示：先从左到右解释 Host / Client / Server，再讲右侧双向能力，最后沿底部生命周期完成一次协议运行。强调 MCP 标准化的是连接、发现与消息交换，不是模型推理框架。

资料核对日期：2026-07-19
- MCP Architecture Overview（Host 内为每个 Server 创建独立 Client；数据层、传输层、原语与通知）：https://modelcontextprotocol.io/docs/learn/architecture
- MCP Specification 2025-11-25（协议能力、安全原则与版本边界）：https://modelcontextprotocol.io/specification/2025-11-25
- MCP Lifecycle（initialize、能力协商、operation、shutdown）：https://modelcontextprotocol.io/specification/2025-11-25/basic/lifecycle
- MCP Transports（stdio、Streamable HTTP）：https://modelcontextprotocol.io/specification/2025-11-25/basic/transports
- MCP Server Concepts（Tools / Resources / Prompts 的控制方与交互模型）：https://modelcontextprotocol.io/docs/learn/server-concepts
- Microsoft Learn MCP Architecture（Host、Server 与外部数据源的架构呈现参考）：https://learn.microsoft.com/en-us/azure/api-management/mcp-server-overview
- AWS MCP Hosting Strategy（本地、远程与网关部署的实践边界）：https://docs.aws.amazon.com/prescriptive-guidance/latest/mcp-strategies/mcp-hosting-strategy.html
主架构依据 MCP 官方 1:1 Client–Server 关系重绘；微软与 AWS 图仅用于校准外部系统和部署边界的视觉表达。
-->
