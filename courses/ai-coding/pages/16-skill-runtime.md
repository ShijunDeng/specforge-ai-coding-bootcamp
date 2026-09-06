---
layout: default
class: lesson-slide
---

<div class="lesson-heading"><div class="section-tag">AI Coding</div><h1>Skill：按需加载的能力封装</h1></div>
<BrandMark />
<PageNo current="14" />

<p class="slide-subtitle skill-lead">Skill 通过文件系统封装元数据、指令与资源；渐进式披露让它们在正确时机进入上下文。</p>

<div class="skill-anatomy">
  <section class="skill-package" aria-label="Skill 目录结构">
    <div class="skill-folder-tab"><span class="folder-glyph"></span><b>review-mr/</b><small>一个可版本化目录</small></div>
    <div class="skill-source">
      <div class="skill-source-head"><span><i>MD</i><b>SKILL.md</b><em>必需</em></span><small>YAML frontmatter + Markdown 指令</small></div>
      <div class="skill-code-sample" role="img" aria-label="SKILL.md 内容示例">
        <div class="code-line code-rule">---</div>
        <div class="code-line"><span class="code-key">name:</span> <span class="code-value">review-mr</span></div>
        <div class="code-line code-description"><span class="code-key">description:</span> 审查合并请求，定位缺陷并给出可执行意见；用户要求 review MR / PR 时使用。</div>
        <div class="code-line code-rule">---</div>
        <div class="code-line code-heading">Review MR</div>
        <div class="code-line">1. 读取项目规则与变更差异。</div>
        <div class="code-line">2. 按严重程度报告文件与行号。</div>
      </div>
    </div>
    <div class="skill-resource-row" aria-label="Skill 可选资源目录">
      <div><span>&lt;/&gt;</span><b>scripts/</b><small>确定性动作</small></div>
      <div><span>REF</span><b>references/</b><small>按需知识</small></div>
      <div><span>TPL</span><b>assets/</b><small>模板与样例</small></div>
    </div>
  </section>

  <section class="skill-runtime" aria-label="Skill 渐进披露运行机制">
    <div class="runtime-heading"><div><small>PROGRESSIVE DISCLOSURE</small><b>渐进式披露</b></div><span>三类内容 · 三个加载层级</span></div>
    <div class="runtime-flow">
      <article class="runtime-step metadata">
        <div class="step-index">01</div>
        <div><small>LEVEL 1 · ALWAYS LOADED</small><h3>Metadata</h3><p>始终加载 frontmatter 中的 <code>name + description</code></p></div>
        <span class="load-chip">元数据</span>
      </article>
      <div class="runtime-connector"><i></i><span>任务与 description 匹配</span></div>
      <article class="runtime-step instructions">
        <div class="step-index">02</div>
        <div><small>LEVEL 2 · LOADED WHEN TRIGGERED</small><h3>Instructions</h3><p>触发 Skill 后读取 <code>SKILL.md</code> 正文</p></div>
        <span class="load-chip">指令</span>
      </article>
      <div class="runtime-connector"><i></i><span>指令引用具体文件</span></div>
      <article class="runtime-step resources">
        <div class="step-index">03</div>
        <div><small>LEVEL 3+ · LOADED AS NEEDED</small><h3>Resources &amp; code</h3><p>按需读取参考资料；运行脚本时只让输出进入上下文</p></div>
        <span class="load-chip">资源与代码</span>
      </article>
    </div>
  </section>
</div>

<div class="skill-value-strip" aria-label="Skill 能力与价值">
  <div class="value-intro"><small>能力进入工作流</small><b>从“会回答”到“按团队做法完成”</b></div>
  <div class="value-item"><span>01</span><div><b>方法</b><p>步骤与边界固定下来</p></div><strong>可重复</strong></div>
  <div class="value-item"><span>02</span><div><b>知识</b><p>领域资料按需读取</p></div><strong>少占上下文</strong></div>
  <div class="value-item"><span>03</span><div><b>动作</b><p>脚本与 CLI 直接复用</p></div><strong>少重复实现</strong></div>
  <div class="value-item"><span>04</span><div><b>产物</b><p>模板与验收标准随包交付</p></div><strong>可审查</strong></div>
</div>

<!--
讲师提示：先用左侧真实片段区分 YAML frontmatter 与 Markdown 指令；再沿右侧按官方 Level 1、Level 2、Level 3+ 解释渐进式披露；最后用底部四项说明能力如何落到工程价值。
资料核对：2026-07-19。
来源：Anthropic Agent Skills Overview，https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
来源：Agent Skills Overview，https://agentskills.io/home
来源：Agent Skills Specification，https://agentskills.io/specification
来源：Best practices for skill creators，https://agentskills.io/skill-creation/best-practices
-->
