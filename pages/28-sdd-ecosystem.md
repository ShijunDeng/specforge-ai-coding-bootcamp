---
layout: default
class: lesson-slide
---

<div class="section-tag">09 · SDD 生态</div>
# 业界 SDD 的三条落地路线
<p class="sdd-ecosystem-lead">都把意图固化为规格，区别在于流程由谁承载：<b>开发产品</b>、<b>变更目录</b>，还是<b>跨 Agent 工具箱</b>。</p>
<BrandMark />
<PageNo current="28" total="42" />

<div class="sdd-ecosystem-grid">
  <article class="sdd-tool-card sdd-kiro-card">
    <div class="sdd-tool-visual"><img src="/research/sdd-ecosystem/kiro-specs.png" alt="Kiro 官方 Specs 页面视觉" /><span>产品内置 · IDE / CLI / Web</span></div>
    <div class="sdd-tool-body">
      <div class="sdd-tool-heading"><h3>Kiro</h3><em>一体化体验</em></div>
      <p class="sdd-tool-position">规格审阅、任务执行和进度跟踪都在 Kiro 内完成。</p>
      <div class="sdd-mini-flow sdd-flow-4"><span>需求 / 缺陷</span><i>→</i><span>设计</span><i>→</i><span>任务</span><i>→</i><span>执行</span></div>
      <div class="sdd-artifacts"><b>核心产物</b><code>requirements.md · design.md · tasks.md</code></div>
      <ul><li><b>多种入口：</b>Requirements-first、Design-first、Bugfix、Quick Plan</li><li><b>可追踪执行：</b>EARS 验收条件；按任务依赖分波次推进</li></ul>
    </div>
    <div class="sdd-tool-fit"><b>适合</b><span>复杂特性、回归敏感缺陷</span></div>
  </article>
  <article class="sdd-tool-card sdd-openspec-card">
    <div class="sdd-tool-visual"><img src="/research/sdd-ecosystem/openspec-dashboard.png" alt="OpenSpec 官方命令行 Dashboard" /><span>变更协议 · 开源 / Agent 无关</span></div>
    <div class="sdd-tool-body">
      <div class="sdd-tool-heading"><h3>OpenSpec</h3><em>Brownfield 优先</em></div>
      <p class="sdd-tool-position">每次改动独立成 change folder，先审规格增量再改代码。</p>
      <div class="sdd-mini-flow sdd-flow-4"><span>Explore*</span><i>→</i><span>Propose</span><i>→</i><span>Apply</span><i>→</i><span>Archive</span></div>
      <div class="sdd-artifacts"><b>核心产物</b><code>proposal · delta specs · design · tasks</code></div>
      <ul><li><b>两类事实：</b><code>specs/</code> 保存现状，<code>changes/</code> 保存拟议变化</li><li><b>闭环归档：</b>批准的 delta 合并回当前规格；探索步骤可选</li></ul>
    </div>
    <div class="sdd-tool-fit"><b>适合</b><span>存量系统的持续演进</span></div>
  </article>
  <article class="sdd-tool-card sdd-speckit-card">
    <div class="sdd-tool-visual"><img src="/research/spec-kit-logo.webp" alt="GitHub Spec Kit 官方标识" /><span>流程脚手架 · GitHub / 开源</span></div>
    <div class="sdd-tool-body">
      <div class="sdd-tool-heading"><h3>GitHub Spec Kit</h3><em>可扩展方法栈</em></div>
      <p class="sdd-tool-position">把 SDD 做成可移植流程，交给不同 Coding Agent 执行。</p>
      <div class="sdd-mini-flow sdd-flow-4"><span>Specify</span><i>→</i><span>Plan</span><i>→</i><span>Tasks</span><i>→</i><span>Implement</span></div>
      <div class="sdd-artifacts"><b>核心产物</b><code>spec.md · plan.md · tasks.md</code></div>
      <ul><li><b>组织基线：</b>Constitution 约束后续规格、方案与实现</li><li><b>质量门可插拔：</b>Clarify、Checklist、Analyze、Converge</li></ul>
    </div>
    <div class="sdd-tool-fit"><b>适合</b><span>跨 Agent、跨团队流程标准化</span></div>
  </article>
</div>

<div class="sdd-ecosystem-takeaway"><b>选择依据</b><span>Kiro 绑定产品体验；OpenSpec 管理变更增量；Spec Kit 固化并扩展团队流程。</span></div>

<!--
讲师提示：三者不是成熟度阶梯。可先问学员“流程由产品、仓库还是团队方法承载”，再按答案选择工具。
官方资料（2026-07-19 核对）：
- Kiro Specs：https://kiro.dev/docs/specs/；CLI Specs：https://kiro.dev/docs/cli/v3/specs/
- OpenSpec 当前 OPSX 流程：https://github.com/Fission-AI/OpenSpec；Core Concepts：https://github.com/Fission-AI/OpenSpec/blob/main/docs/overview.md
- GitHub Spec Kit：https://github.github.com/spec-kit/；Quick Start：https://github.github.com/spec-kit/quickstart.html
视觉素材：
- Kiro Specs 官方页面图：https://kiro.dev/images/docs/specs.png
- OpenSpec 官方 Dashboard：https://github.com/Fission-AI/OpenSpec/raw/main/assets/openspec_dashboard.png
- GitHub Spec Kit 官方 Logo：https://raw.githubusercontent.com/github/spec-kit/main/media/logo_large.webp
-->
