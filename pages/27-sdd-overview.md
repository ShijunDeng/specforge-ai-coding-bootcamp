---
layout: default
class: lesson-slide sdd-overview-slide
---

<div class="lesson-heading"><div class="section-tag">08 · 从 Vibe 到 SDD</div><h1>SDD：把意图变成可验证交付</h1></div>
<p class="sdd-lead">先把需求写成可审查的行为约束，再逐层转成设计、任务、代码与证据；实现中发现的新约束必须回写规格。</p>

<BrandMark />

<PageNo current="25" />

<div class="sdd-overview-layout">
  <section class="sdd-process-panel">
    <div class="sdd-panel-heading"><span>流程 · ARTIFACT CHAIN</span><strong>每一步都有输入、产物和进入下一阶段的门槛</strong></div>
    <div class="sdd-stage-row">
      <article class="sdd-stage"><div class="sdd-stage-head"><b>01</b><h2>澄清上下文</h2></div><p>检查现状、边界、非目标与未知项，不用假设填空。</p><code>context.md</code><small>门：关键歧义已关闭</small></article>
      <article class="sdd-stage"><div class="sdd-stage-head"><b>02</b><h2>定义规格</h2></div><p>写清场景、业务规则、异常路径、非功能约束与验收条件。</p><code>spec.md</code><small>门：每条行为可验证</small></article>
      <article class="sdd-stage"><div class="sdd-stage-head"><b>03</b><h2>形成设计</h2></div><p>确定组件、接口、数据、兼容、迁移、回滚和测试策略。</p><code>design.md</code><small>门：方案可实现、可回退</small></article>
      <article class="sdd-stage"><div class="sdd-stage-head"><b>04</b><h2>拆解任务</h2></div><p>按依赖排序最小任务，标出可并行项，并追踪到验收场景。</p><code>tasks.md</code><small>门：每项有完成证据</small></article>
      <article class="sdd-stage"><div class="sdd-stage-head"><b>05</b><h2>实现与自检</h2></div><p>一次只完成一个任务；控制差异范围，随改随跑局部检查。</p><code>code · tests</code><small>门：任务检查全部通过</small></article>
      <article class="sdd-stage"><div class="sdd-stage-head"><b>06</b><h2>验收与演进</h2></div><p>执行验收与回归，保存证据；行为改变时同步更新规格。</p><code>evidence log</code><small>门：规格、代码、测试一致</small></article>
    </div>
    <div class="sdd-feedback"><span>实现暴露遗漏</span><i>↺</i><strong>先修订对应的 Spec / Design / Tasks，再继续编码</strong><i>↺</i><span>验收发现偏差</span></div>
  </section>

  <aside class="sdd-method-panel">
    <div class="sdd-panel-heading"><span>方法论 · FOUR RULES</span></div>
    <div class="sdd-method"><b>01</b><div><strong>规格先于实现</strong><p>代码服务于已约定的可观察行为。</p></div></div>
    <div class="sdd-method"><b>02</b><div><strong>逐层收敛</strong><p>What → How → Do → Proof，不跨层跳步。</p></div></div>
    <div class="sdd-method"><b>03</b><div><strong>门禁推进</strong><p>上游未评审通过，不扩大下游实现成本。</p></div></div>
    <div class="sdd-method"><b>04</b><div><strong>双向回写</strong><p>新事实回到规格链，避免文档与代码分叉。</p></div></div>
  </aside>
</div>

<section class="sdd-practice-panel">
  <div class="sdd-practice-title"><span>实践 · PETCLINIC</span><strong>新增 Visit 时自动分配当日有容量的 Veterinarian；无可用人员必须明确失败</strong></div>
  <div class="sdd-practice-chain">
    <div><b>SPEC</b><p>容量规则 · 失败状态 · 页面显示分配结果</p></div>
    <i>→</i>
    <div><b>DESIGN</b><p><code>VisitBookingService</code> · 事务边界 · 唯一约束</p></div>
    <i>→</i>
    <div><b>TASKS</b><p>Schema → Repository → Service → Controller / UI</p></div>
    <i>→</i>
    <div><b>EVIDENCE</b><p>重复与容量测试 · 全量构建 · H2 运行验收</p></div>
  </div>
</section>

<!--
讲师提示：先沿上方产物链讲清“每一步交付什么”，再用 PetClinic 案例逐项映射。强调 SDD 不是一次性写完文档，而是用门禁和回写维持规格、实现、测试的一致性。
资料核对日期：2026-07-19。
官方资料：
- GitHub Spec Kit SDD：https://github.com/github/spec-kit/blob/main/spec-driven.md
- GitHub Spec Kit 流程：https://github.github.com/spec-kit/
- Kiro Specs CLI：https://kiro.dev/docs/cli/v3/specs/
-->
