---
layout: default
class: lesson-slide
---

<div class="lesson-heading"><div class="section-tag">05 · 能力扩展</div><h1>Skill + CLI：让工具按需进入上下文</h1></div>
<BrandMark />
<PageNo current="17" />

<p class="skill-cli-lead"><b>术语校准</b>：“Skill over CLI”不是通行术语；这里采用更常见的 <strong>Skill + CLI</strong>——Skill 说明怎么做，CLI 负责真正执行。</p>

<div class="skill-cli-layout">
  <section class="context-story" aria-label="Skill 加 CLI 的上下文机制">
    <div class="story-heading"><div><small>CONTEXT FLOW</small><h2>把“全部预加载”改成“任务触发后再读取”</h2></div><span>渐进披露 + 本地执行</span></div>
    <div class="context-contrast">
      <div class="contrast-label"><small>常见直接调用模式</small><b>MCP tools 全量暴露</b></div>
      <div class="schema-stack" aria-label="大量工具定义"><i></i><i></i><i></i><i></i><i></i><span>tool schemas × N</span></div>
      <div class="flow-arrow">→</div>
      <div class="context-meter hot"><span>上下文</span><b></b><b></b><b></b><b></b><b></b><b></b><small>定义 + 中间结果反复进入</small></div>
    </div>
    <div class="progressive-flow">
      <article class="cli-step discover">
        <div class="step-top"><span>01</span><small>DISCOVER</small></div>
        <h3>只登记描述</h3>
        <code>name + description</code>
        <p>先判断任务是否匹配</p>
      </article>
      <div class="step-arrow"><span>命中</span>→</div>
      <article class="cli-step load">
        <div class="step-top"><span>02</span><small>LOAD</small></div>
        <h3>读取 Skill</h3>
        <code>SKILL.md</code>
        <p>加载流程、边界与验收</p>
      </article>
      <div class="step-arrow"><span>调用</span>→</div>
      <article class="cli-step execute">
        <div class="step-top"><span>03</span><small>EXECUTE</small></div>
        <h3>复用现有 CLI</h3>
        <div class="terminal-mini"><span>$ gh pr checks 42</span><span>$ aws logs tail …</span></div>
        <p>沿用本地鉴权与脚本生态</p>
      </article>
      <div class="step-arrow"><span>筛选</span>→</div>
      <article class="cli-step return">
        <div class="step-top"><span>04</span><small>RETURN</small></div>
        <h3>只回传结论</h3>
        <code>--json | jq</code>
        <p>原始数据留在执行环境</p>
      </article>
    </div>
    <div class="mechanism-outcomes">
      <div><b>少占上下文</b><span>未命中的 Skill 不加载全文</span></div>
      <div><b>少走模型回合</b><span>循环、分支、过滤交给程序</span></div>
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
      <div><small>TECHNOLOGY RADAR · TRIAL</small><h3>本地 CLI / script 可覆盖许多用例</h3><p>同时提醒：第三方 Skill 需要代码审查与供应链治理。</p></div>
    </article>
    <div class="choice-boundary"><b>不是全面替代 MCP</b><p><strong>优先 Skill + CLI</strong>：Agent 可执行终端、已有稳定 CLI、本地鉴权可复用。<br><strong>保留 MCP</strong>：需要跨客户端标准接口、远程授权、动态资源或受控能力暴露。</p></div>
  </aside>
</div>

<!--
讲师提示：先说明“Skill over CLI”不是标准术语，避免与 MCP 社区的“Skills over MCP”工作组混淆。本页讨论的是“Agent Skills + 现有 CLI”这一工程组合。
讲解边界：上下文压力来自客户端一次性暴露大量工具定义、以及中间结果多轮经过模型，并非 MCP 协议必然低效。tool search、progressive disclosure、code mode 同样可以改善 MCP。
Anthropic 的 150k → 2k 是其 Google Drive / Salesforce 示例，不是所有场景的通用基准；用来说明“按需加载工具定义 + 在执行环境过滤结果”的机制。
资料核对：2026-07-19。
来源：Agent Skills open specification，https://agentskills.io/home
来源：Anthropic, Code execution with MCP: building more efficient agents，https://www.anthropic.com/engineering/code-execution-with-mcp
来源：AWS Agent Toolkit, Skills，https://docs.aws.amazon.com/agent-toolkit/latest/userguide/skills.html
来源：Thoughtworks Technology Radar Vol. 34, Agent Skills，https://www.thoughtworks.com/radar/techniques/agent-skills
术语辨析：MCP Skills Over MCP Working Group，https://meet.modelcontextprotocol.io/2026/05/skills-over-mcp-working-group-office-hours-d6YJUHG3BW8i
-->
