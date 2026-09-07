---
layout: default
class: lesson-slide agent-interaction-slide
---

<div class="lesson-heading"><div class="section-tag">AI Coding</div><h1>Agent 如何与外部世界交互</h1></div>
<BrandMark />
<PageNo current="13" />

<p class="slide-subtitle agent-interaction-lead"><strong>Skill</strong> 将专业知识与工作流封装为可复用能力；Agent 在循环中选择 <strong>CLI 或 MCP</strong>；环境结果返回后，再决定下一步。</p>

<div class="agent-interaction-map" aria-label="Skill 指导 Agent，Agent 通过 CLI 或 MCP 与外部环境交互，并接收环境反馈">
  <section class="interaction-panel interaction-skill">
    <div class="interaction-step"><span>01</span><small>METHOD</small></div>
    <div class="skill-package-icon"><i></i><b>SKILL.md</b><small>按任务加载</small></div>
    <h2>可复用的 Agent 能力</h2>
    <div class="skill-method-list"><span><i>1</i>任务步骤与决策规则</span><span><i>2</i>可用工具与操作边界</span><span><i>3</i>脚本、资料与验收条件</span></div>
    <div class="panel-boundary"><b>作用</b><span>指导如何组合工具，不是连接协议</span></div>
  </section>
  <div class="interaction-link interaction-link--guide"><span>加载方法</span><i></i></div>
  <section class="interaction-panel interaction-agent">
    <div class="interaction-step"><span>02</span><small>DECIDE</small></div>
    <div class="agent-loop-title"><small>AGENT LOOP</small><b>根据反馈选择下一步</b></div>
    <div class="agent-loop-wheel">
      <div class="loop-node loop-node--goal">理解目标</div>
      <div class="loop-node loop-node--select">选择工具</div>
      <div class="loop-node loop-node--act">执行动作</div>
      <div class="loop-node loop-node--observe">观察结果</div>
      <div class="loop-center"><span>↻</span><b>NEXT<br/>ACTION</b></div>
    </div>
    <p>模型使用工具，并根据环境反馈持续调整行动。</p>
  </section>
  <div class="interaction-link interaction-link--invoke"><span>调用接口</span><i></i></div>
  <section class="interaction-panel interaction-interfaces">
    <div class="interaction-step"><span>03</span><small>INTERFACE</small></div>
    <article class="interface-card interface-card--cli">
      <div class="interface-heading"><span>&gt;_</span><div><small>LOCAL + REMOTE COMMAND</small><h2>CLI</h2></div></div>
      <p>执行已有命令；命令既能操作本机，也能通过 API / 控制面操作远程系统。</p>
      <div class="command-row"><code>gh</code><code>aws</code><code>kubectl</code><code>terraform</code></div>
      <div class="interface-boundary"><b>边界来自</b> 可执行命令 · 运行环境 · 凭据 · 网络</div>
    </article>
    <article class="interface-card interface-card--mcp">
      <div class="interface-heading"><span>M</span><div><small>STANDARD PROTOCOL</small><h2>MCP</h2></div></div>
      <p>经本地或远程 Server 发现并调用标准化能力，获取结构化上下文与结果。</p>
      <div class="command-row"><code>tools/list</code><code>tools/call</code></div>
      <div class="interface-boundary"><b>边界来自</b> Server 能力 · Scope · Host 授权</div>
    </article>
  </section>
  <div class="interaction-link interaction-link--reach"><span>作用于</span><i></i></div>
  <section class="interaction-panel interaction-environment">
    <div class="interaction-step"><span>04</span><small>ENVIRONMENT</small></div>
    <div class="environment-heading"><small>EXTERNAL WORLD</small><h2>Agent 可感知、可操作的环境</h2></div>
    <div class="environment-grid">
      <div><span class="env-icon">&lt;/&gt;</span><b>代码与 CI</b><small>Repo · PR · Pipeline</small></div>
      <div><span class="env-icon">☁</span><b>云与集群</b><small>Cloud · Kubernetes</small></div>
      <div><span class="env-icon">▤</span><b>知识与数据</b><small>Docs · Database</small></div>
      <div><span class="env-icon">◆</span><b>业务系统</b><small>Issue · SaaS · API</small></div>
    </div>
    <div class="environment-result"><span>RESULT</span><b>stdout · JSON · error · state</b></div>
  </section>
  <div class="environment-feedback"><span>环境反馈</span><i>←</i><b>真实输出、错误和状态回到 Agent，驱动下一轮判断</b></div>
</div>

<div class="agent-boundary-strip"><span>操作边界</span><b>命令 / 工具白名单</b><b>凭据与 Scope</b><b>网络与沙箱</b><b>审批与审计</b><strong>扩展的是可达系统，不是无限权限</strong></div>

<!--
讲师提示：
- 先沿 01→04 讲正向链路，再沿底部“环境反馈”从右往左回到 Agent。
- Skill 放在第一位，是因为它提供任务方法与工具使用边界；它本身不是远程连接协议。
- CLI 与 MCP 是两条并列接口路径：CLI 复用既有命令、运行环境与鉴权；MCP 通过 Host / Client / Server 标准化发现和调用。
- CLI 不等于本机操作。AWS CLI、kubectl、GitHub CLI、Terraform CLI 都能通过 API、控制面或远程服务改变外部环境。

资料核对日期：2026-07-19
- Anthropic, Building Effective Agents：Agent 是模型使用工具、依据环境反馈循环行动；执行中需要持续获得 ground truth。https://www.anthropic.com/engineering/building-effective-agents
- Agent Skills 官方概览与规范：Skill 以 SKILL.md 为入口，将专业知识、工作流、脚本与资料封装为可复用、可移植的能力，并按需加载。https://agentskills.io/home
- AWS CLI：命令行工具通过凭据访问和管理 AWS 服务。https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html
- Kubernetes kubectl：命令行工具通过 Kubernetes API 与集群控制面通信。https://kubernetes.io/docs/reference/kubectl/
- GitHub CLI：终端或脚本中的 GitHub 命令行接口。https://cli.github.com/manual/
- Terraform CLI：使用 CLI 供应和管理基础设施生命周期。https://developer.hashicorp.com/terraform/cli
- MCP Architecture：MCP Host 连接本地或远程 Server，通过能力协商、发现与调用获得 tools、resources 和 prompts。https://modelcontextprotocol.io/docs/learn/architecture
- Remote MCP Servers：远程 Server 可连接项目管理、文档、代码仓库与其他 API 系统。https://modelcontextprotocol.io/docs/develop/connect-remote-servers

图示依据 Anthropic Agent loop、Agent Skills 规范、CLI 官方实现和 MCP 官方架构重绘；未直接使用外部原图。
-->
