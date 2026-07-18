---
layout: default
class: lesson-slide
---

<div class="lesson-heading"><div class="section-tag">05 · 能力扩展</div><h1>Skill 是一个可加载的能力包</h1></div>
<BrandMark />
<PageNo current="15" />

<p class="skill-lead">用 <code>SKILL.md</code> 规定何时触发、如何执行；脚本、参考资料与模板只在任务需要时进入上下文。</p>

<div class="skill-anatomy">
  <section class="skill-package" aria-label="Skill 目录结构">
    <div class="skill-folder-tab"><span class="folder-glyph"></span><b>review-mr/</b><small>一个可版本化目录</small></div>
    <div class="skill-file skill-file-main">
      <span class="file-glyph md">MD</span>
      <div><h3>SKILL.md <em>必需</em></h3><p><code>name + description</code> 负责发现；正文写流程、边界、异常与验收。</p></div>
      <strong>路由 + 方法</strong>
    </div>
    <div class="skill-file">
      <span class="file-glyph code">&lt;/&gt;</span>
      <div><h3>scripts/</h3><p>封装可重复执行的确定性动作</p></div>
      <strong>执行</strong>
    </div>
    <div class="skill-file">
      <span class="file-glyph ref">REF</span>
      <div><h3>references/</h3><p>保存领域规则、接口与边界知识</p></div>
      <strong>知识</strong>
    </div>
    <div class="skill-file">
      <span class="file-glyph asset">TPL</span>
      <div><h3>assets/</h3><p>提供模板、样例与静态资源</p></div>
      <strong>产物</strong>
    </div>
  </section>

  <section class="skill-runtime" aria-label="Skill 渐进披露运行机制">
    <div class="runtime-heading"><div><small>RUNTIME</small><b>渐进披露</b></div><span>上下文随任务逐级展开</span></div>
    <div class="runtime-flow">
      <article class="runtime-step discovery">
        <div class="step-index">01</div>
        <div><small>会话启动</small><h3>发现</h3><p>只登记所有 Skill 的 <code>name + description</code></p></div>
        <span class="load-chip">轻量目录</span>
      </article>
      <div class="runtime-connector"><i></i><span>任务匹配</span></div>
      <article class="runtime-step activation">
        <div class="step-index">02</div>
        <div><small>命中描述</small><h3>激活</h3><p>读取完整 <code>SKILL.md</code>，获得操作流程与约束</p></div>
        <span class="load-chip">完整指令</span>
      </article>
      <div class="runtime-connector"><i></i><span>流程引用</span></div>
      <article class="runtime-step execution">
        <div class="step-index">03</div>
        <div><small>执行现场</small><h3>执行</h3><p>按需读取资料、运行脚本，并依据验收条件检查结果</p></div>
        <span class="load-chip">必要资源</span>
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
讲师提示：先沿左侧解释“Skill 不是一段长 Prompt，而是一个可版本化目录”；再沿右侧讲清渐进披露为何能同时容纳很多 Skill；最后用底部四项说明能力如何落到工程价值。
资料核对：2026-07-19。
来源：Agent Skills Overview，https://agentskills.io/home
来源：Agent Skills Specification，https://agentskills.io/specification
来源：Best practices for skill creators，https://agentskills.io/skill-creation/best-practices
-->
