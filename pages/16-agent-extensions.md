---
layout: default
class: lesson-slide agent-extension-slide
---

<div class="section-tag">05 · 能力扩展</div>
# Agent 的能力半径如何扩展
<BrandMark />
<PageNo current="14" />

<p class="agent-extension-lead">Agent 负责判断与编排；<strong>CLI</strong> 把动作落到本机，<strong>Skill</strong> 把方法固化成流程，<strong>MCP</strong> 把执行延伸到外部系统。</p>

<div class="agent-extension-layout">
  <div class="agent-radius-map" aria-label="Agent 通过 CLI、Skill 与 MCP 逐层扩展能力边界">
    <div class="agent-radius-ring agent-radius-ring--mcp"><span>MCP · 系统边界</span></div>
    <div class="agent-radius-ring agent-radius-ring--skill"><span>SKILL · 方法边界</span></div>
    <div class="agent-radius-ring agent-radius-ring--cli"><span>CLI · 执行边界</span></div>
    <div class="agent-core-visual">
      <img src="/research/agent-capability-core-v2.png" alt="带有三个扩展接口的模块化 Agent 核心" />
      <div><b>AGENT</b><span>判断 · 规划 · 编排</span></div>
    </div>
    <div class="agent-radius-axis"><span>能力半径</span><i></i><b>向外扩展</b></div>
  </div>
  <div class="agent-extension-cards">
    <div class="agent-extension-card agent-extension-card--cli">
      <div class="agent-extension-card-head"><span class="agent-extension-icon">&gt;_</span><div><small>01 · LOCAL ACTION</small><h3>CLI：执行确定性动作</h3></div></div>
      <p>读取文件、修改代码、启动进程、运行构建与测试。</p>
      <div class="agent-extension-meta"><span><b>操作范围</b> 本机工作区与工具链</span><code>git diff</code><code>./mvnw test</code></div>
    </div>
    <div class="agent-extension-card agent-extension-card--skill">
      <div class="agent-extension-card-head"><span class="agent-extension-icon">S</span><div><small>02 · REUSABLE METHOD</small><h3>Skill：复用团队做事方法</h3></div></div>
      <p>按需加载说明、脚本、参考资料与模板，把一次成功变成稳定流程。</p>
      <div class="agent-extension-meta"><span><b>操作范围</b> 多步骤任务与验收规则</span><code>SKILL.md</code><code>scripts/</code></div>
    </div>
    <div class="agent-extension-card agent-extension-card--mcp">
      <div class="agent-extension-card-head"><span class="agent-extension-icon">M</span><div><small>03 · EXTERNAL SYSTEM</small><h3>MCP：发现并调用外部能力</h3></div></div>
      <p>用标准协议连接代码库、知识库与工单系统，动态发现可用能力。</p>
      <div class="agent-extension-meta"><span><b>操作范围</b> 已授权的外部系统</span><code>tools/list</code><code>tools/call</code></div>
    </div>
  </div>
</div>

<div class="agent-extension-guardrail"><span>扩展能力 ≠ 取消边界</span><b>每一层都要明确：可调用能力 · 授权范围 · 失败处理 · 验证证据</b></div>

<!--
讲师提示：
- 先从中间讲：Agent 本体负责决定“下一步做什么”，并不天然拥有所有动作。
- 再沿半径向外讲：CLI 扩展本机动作；Skill 固化可复用流程；MCP 连接外部系统与动态能力。
- 最后强调底部护栏：能力边界扩张时，授权、失败处理和验证证据必须同步设计。

核对日期：2026-07-19
参考资料：
- Agent Skills 开放规范：Skill 以 SKILL.md 为入口，可包含 scripts、references 与 assets，并采用按需加载。https://github.com/agentskills/agentskills
- Claude Code CLI Reference：CLI 支持非交互、结构化输出、工具允许/禁止清单与权限模式。https://docs.anthropic.com/en/docs/claude-code/cli-usage
- MCP Architecture：MCP 采用 host-client-server 架构，通过 capability negotiation 暴露 tools、resources 与 prompts。https://modelcontextprotocol.io/docs/learn/architecture
- Anthropic, Building Effective Agents：Agent 通过工具与环境交互，工具定义与反馈回路是工程设计的一部分。https://www.anthropic.com/engineering/building-effective-agents

图片：模块化 Agent 核心由 OpenAI imagegen 生成，用于解释可插拔扩展接口；页面关系图与文字由 Slidev 原生绘制。
-->
