---
layout: default
class: lesson-slide agents-md-slide
---

<div class="lesson-heading"><div class="section-tag">AI Coding</div><h1>AGENTS.md：写给 Agent 的项目说明</h1></div>
<BrandMark />
<PageNo current="21" />

<p class="slide-subtitle agents-md-lead">把构建命令、测试要求和工程约定放在固定位置，并按目录作用域提供给 Agent。</p>

<div class="agents-md-layout">
  <section class="agents-md-file" aria-label="AGENTS.md 通常包含的项目规则">
    <div class="agents-md-filebar"><span></span><span></span><span></span><code>AGENTS.md</code><small>REPOSITORY INSTRUCTIONS</small></div>
    <div class="agents-md-intro"><small>README FOR AGENTS</small><h2>让 Agent 进入仓库就知道如何工作</h2><p>普通 Markdown，没有固定字段；只写完成项目任务所需的稳定信息。</p></div>
    <div class="agents-md-content-grid">
      <article><span>01</span><div><h3>项目上下文</h3><p>目录职责、技术栈、不可修改的边界</p></div></article>
      <article><span>02</span><div><h3>工作命令</h3><p>安装、构建、测试、启动与验收</p></div></article>
      <article><span>03</span><div><h3>工程约定</h3><p>代码风格、安全限制、依赖与数据规则</p></div></article>
      <article><span>04</span><div><h3>交付要求</h3><p>完成定义、提交格式与正反例、MR / PR 约定</p></div></article>
    </div>
  </section>

  <aside class="agents-md-side" aria-label="AGENTS.md 的生效方式和提交信息示例">
    <section class="agents-md-behavior">
      <h2>规则如何生效</h2>
      <article><span>01</span><div><h3>固定入口</h3><p>Agent 从仓库中的 AGENTS.md 获取项目指令。</p></div></article>
      <article><span>02</span><div><h3>按目录分层</h3><p>根文件覆盖全仓库；更近的子目录规则优先。</p></div></article>
      <article><span>03</span><div><h3>随代码维护</h3><p>规则进入版本控制，修改记录可追踪。</p></div></article>
    </section>
    <section class="agents-md-example">
      <small>一个完整的规则示例</small><h2>Commit message</h2>
      <div class="agents-md-syntax"><span>格式</span><code>&lt;需求编号&gt; &lt;message&gt;</code></div>
      <div class="agents-md-commit-cases"><div class="is-valid"><b>✓ 合规</b><code>US202605211234 修复 Visit 查询</code></div><div class="is-invalid"><b>× 不合规</b><code>fix bug</code><em>缺少需求编号，描述含糊</em></div></div>
      <ul><li>需求编号必须对应本次交付，编号后保留一个空格。</li><li>message 写清行为变化，不写“修改代码”等无信息描述。</li></ul>
    </section>
  </aside>
</div>

<div class="agents-md-boundary"><span><b>AGENTS.md</b> 提供工作指导</span><i>→</i><span><b>构建 · 测试 · hooks · CI</b> 验证执行结果</span></div>

<!--
讲师串场：先用 commit message 作为例子——与其每次创建 MR 都重复说明格式、需求编号要求和正反例，不如把稳定要求写入 AGENTS.md。现场逐项解释：提交信息以需求编号开头，空格后写本次行为变化；“US202605211234 修复 Visit 查询”合规，“fix bug”既缺少编号又无法说明改了什么。随后扩大范围，说明提交约定只是 AGENTS.md 中“交付要求”的一个例子。

核对日期：2026-07-19。
来源：AGENTS.md 官方说明，https://agents.md/
- AGENTS.md 是写给编码 Agent 的项目说明入口，可包含项目背景、构建与测试命令、代码规范、安全事项以及 PR / commit 要求。
- 文件使用普通 Markdown，没有强制字段；大型仓库可在子目录放置更具体的 AGENTS.md，离目标文件更近者优先。
- AGENTS.md 应随仓库持续维护，并由版本控制记录规则变化。
-->
