---
layout: default
class: lesson-slide
---

<div class="lesson-heading"><div class="section-tag">AI Coding</div><h1>Skill + CLI：让工具按需进入上下文</h1></div>
<BrandMark />
<PageNo current="16" />

<p class="slide-subtitle skill-cli-lead">Skill 只在任务命中时加载操作步骤，再调用现有 CLI；工具说明和原始数据不必常驻模型上下文。</p>

<div class="skill-cli-layout">
  <section class="context-story" aria-label="Skill 加 CLI 的上下文机制">
    <div class="story-heading"><div><small>CONTEXT FLOW</small><h2>只在任务命中时加载操作说明</h2></div><span>渐进披露 + 本地执行</span></div>
    <div class="context-contrast">
      <div class="contrast-label"><small>一次性暴露大量 MCP 工具</small><b>工具定义全部进入上下文</b></div>
      <div class="schema-stack" aria-label="大量工具说明"><i></i><i></i><i></i><i></i><i></i><span>tools × N</span></div>
      <div class="flow-arrow">→</div>
      <div class="context-meter hot"><span>输入占用</span><b></b><b></b><b></b><b></b><b></b><b></b><small>工具越多，工具定义占用的输入 Token 越多</small></div>
    </div>
    <div class="progressive-flow">
      <article class="cli-step discover">
        <div class="step-top"><span>01</span><small>DISCOVER</small></div>
        <h3>只登记描述</h3>
        <code>name + description</code>
        <div class="skill-cli-sample metadata-sample"><span><b>name:</b> issue-summary</span><span><b>description:</b> List open GitHub issues</span></div>
      </article>
      <div class="step-arrow"><span>命中</span>→</div>
      <article class="cli-step load">
        <div class="step-top"><span>02</span><small>LOAD</small></div>
        <h3>读取 Skill</h3>
        <code>SKILL.md</code>
        <div class="skill-cli-sample"><span>1. Run <b>gh issue list</b></span><span>2. Keep number + title</span></div>
      </article>
      <div class="step-arrow"><span>调用</span>→</div>
      <article class="cli-step execute">
        <div class="step-top"><span>03</span><small>EXECUTE</small></div>
        <h3>复用现有 CLI</h3>
        <div class="terminal-mini"><span>$ gh issue list \</span><span>&nbsp;&nbsp;--json number,title</span></div>
        <p>查询开放 Issue</p>
      </article>
      <div class="step-arrow"><span>筛选</span>→</div>
      <article class="cli-step return">
        <div class="step-top"><span>04</span><small>RETURN</small></div>
        <h3>只回传结论</h3>
        <code>number + title</code>
        <div class="skill-cli-sample result-sample"><span>#14</span><span>Update remote URL</span></div>
      </article>
    </div>
    <div class="mechanism-outcomes">
      <div><b>少占上下文</b><span>未命中的 Skill 不加载全文</span></div>
      <div><b>少让模型搬数据</b><span>CLI 本地筛选，只返回需要的字段</span></div>
      <div><b>少造一层服务</b><span>稳定 CLI 无需再包 MCP Server</span></div>
    </div>
  </section>
  <aside class="industry-evidence" aria-label="行业实践与选择边界">
    <div class="evidence-heading"><small>INDUSTRY SIGNALS</small><h2>业界已经在这样组合</h2></div>
    <article class="evidence-card anthropic">
      <span class="evidence-mark">A</span>
      <div><small>ANTHROPIC · 2025</small><h3><b>150k → 2k</b> tokens</h3><p>官方案例按需读取工具定义并在执行环境过滤，示例节省 98.7%。</p></div>
    </article>
    <article class="evidence-card aws">
      <span class="evidence-mark">aws</span>
      <div><small>AWS · 2026</small><h3>同一 Skill，MCP / CLI 两条执行通道</h3><p>有 MCP 时调用受控工具；没有时执行同样的 AWS CLI 流程。</p></div>
    </article>
    <article class="evidence-card thoughtworks">
      <span class="evidence-mark">TW</span>
      <div><small>TECHNOLOGY RADAR · TRIAL</small><h3>日志、部署、检查：直接调用现有命令</h3><p>Thoughtworks 指出，许多用例可由本地 CLI / script 完成，不必默认新增 MCP 封装。</p></div>
    </article>
    <div class="choice-boundary"><b>按接入需求选择</b><p><strong>适合 Skill + CLI</strong>：Agent 可执行终端、已有稳定 CLI、本地鉴权可复用。<br><strong>适合 MCP</strong>：需要跨客户端标准接口、远程授权、动态资源或受控能力暴露。</p></div>
  </aside>
</div>

<!--
讲师提示：沿左侧依次讲“发现、加载、执行、返回”：四步统一使用示例 Skill `issue-summary`。客户端先登记它的名称与描述；任务命中后读取 `SKILL.md`，再执行 `gh issue list --json number,title`；最后只把 Issue 编号与标题送回上下文。Skill 负责告诉 Agent 何时以及怎样调用已有命令，CLI 负责认证、执行和筛选结果。
讲解边界：上下文压力来自客户端在会话开始时一次性加载大量工具说明，并非 MCP 协议必然低效。tool search、progressive disclosure、code mode 同样可以改善 MCP。
Anthropic 的 150k → 2k 是其 Google Drive / Salesforce 示例，不是所有场景的通用基准；用来说明“按需加载工具说明 + 在执行环境过滤结果”的机制。
资料核对：2026-07-19。
来源：Agent Skills open specification，https://agentskills.io/home
来源：Anthropic, Code execution with MCP: building more efficient agents，https://www.anthropic.com/engineering/code-execution-with-mcp
来源：AWS Agent Toolkit, Skills，https://docs.aws.amazon.com/agent-toolkit/latest/userguide/skills.html
来源：Thoughtworks Technology Radar Vol. 34, Agent Skills，https://www.thoughtworks.com/radar/techniques/agent-skills
来源：GitHub CLI Manual, gh issue list，https://cli.github.com/manual/gh_issue_list
-->
