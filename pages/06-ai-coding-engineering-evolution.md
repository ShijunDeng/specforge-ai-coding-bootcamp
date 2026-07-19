---
layout: default
class: lesson-slide evolution-system-slide
---

<div class="lesson-heading"><div class="section-tag">AI Coding</div><h1>AI Coding 工程化演进</h1></div>
<BrandMark />
<PageNo current="04" />

<p class="lead slide-subtitle evolution-lede">工程重点正从“写好一次请求”，外移到“设计一个能获得事实、受控执行、凭证据收敛的系统”。</p>

<div class="evolution-system">
  <div class="control-stack">
    <article class="control-layer prompt-control">
      <div class="layer-index"><b>01</b><span>PROMPT<br/>ENGINEERING</span></div>
      <div class="layer-visual prompt-visual"><i></i><i></i><i></i><code>实现登录限流</code><p><span>范围</span><span>约束</span><span>验收</span></p></div>
      <div class="layer-copy"><small>控制一次请求</small><h3>把任务说清楚</h3><p>目标、边界、输出与完成标准，减少“答非所问”。</p></div>
    </article>
    <article class="control-layer context-control">
      <div class="layer-index"><b>02</b><span>CONTEXT<br/>ENGINEERING</span></div>
      <div class="layer-visual context-visual"><div class="context-core">本轮<br/>上下文</div><span class="ctx-code">代码</span><span class="ctx-rules">规则</span><span class="ctx-memory">记忆</span><span class="ctx-data">数据</span></div>
      <div class="layer-copy"><small>控制模型此刻看见什么</small><h3>把仓库事实送到眼前</h3><p>按任务检索代码、规范、依赖与历史；上下文是有限预算，不是资料堆积。</p></div>
    </article>
    <article class="control-layer harness-control">
      <div class="layer-index"><b>03</b><span>HARNESS<br/>ENGINEERING</span></div>
      <div class="layer-visual harness-visual"><div class="repo-box">AGENT</div><span>Repo</span><span>Tools</span><span>Tests</span><span>Logs</span><em>Sandbox · Permission · Review</em></div>
      <div class="layer-copy"><small>控制一轮运行如何发生</small><h3>把能力装进工程护栏</h3><p>隔离环境、工具权限、测试、日志与审查，让 Agent 能行动，也能被观察和约束。</p></div>
    </article>
  </div>
  <article class="loop-control">
    <div class="layer-index loop-index"><b>04</b><span>LOOP<br/>ENGINEERING</span></div>
    <div class="loop-panel">
      <header><small>控制多轮推进</small><h3>失败后，带着证据再跑一轮</h3></header>
      <div class="loop-canvas">
        <svg class="loop-orbit" viewBox="0 0 360 270" aria-hidden="true">
          <defs><marker id="evo-loop-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" /></marker></defs>
          <path d="M 215 43 C 274 46 311 69 316 105" />
          <path d="M 316 158 C 308 207 264 232 221 236" />
          <path d="M 138 235 C 73 220 45 171 55 116 C 62 75 92 49 139 43" />
        </svg>
        <div class="loop-step loop-trigger"><small>01</small><b>触发</b><span>任务 / 事件 / 定时</span></div>
        <div class="loop-step loop-act"><small>02</small><b>执行</b><span>读文件 · 改代码 · 调工具</span></div>
        <div class="loop-step loop-check"><small>03</small><b>验证</b><span>测试 · Review · 指标</span></div>
        <div class="evo-loop-center"><small>STATE</small><b>保存进度</b><span>下一轮从这里继续</span></div>
      </div>
      <div class="stop-gate"><span>不通过 → 带证据回到触发</span><b>通过 / 超预算 / 人工介入 → 停止</b></div>
    </div>
  </article>
</div>

<div class="evolution-insight"><strong>遇到问题先分层</strong><p>Agent 输出不稳定时，先判断：任务是否说清、材料是否给够、执行环境是否受控、失败后能否带着证据进入下一轮。</p><span>按层定位 →</span></div>

<!--
讲师备注｜资料依据：
- Anthropic, Effective context engineering for AI agents
  https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- OpenAI, Harness engineering: leveraging Codex in an agent-first world
  https://openai.com/index/harness-engineering/
- Anthropic, How the agent loop works
  https://code.claude.com/docs/en/agent-sdk/agent-loop
- Claude, Loop engineering: Getting started with loops
  https://claude.com/blog/getting-started-with-loops

讲解提示：这不是严格的年代替换关系，而是工程控制面的逐层扩张。Prompt 关注一次输入；Context 关注每轮进入模型的有限信息；Harness 关注工具、环境、权限与反馈设施；Loop 关注触发、状态、验证、重试与停止条件。
-->
