---
layout: default
class: lesson-slide sdd-overview-slide
---

<div class="lesson-heading"><div class="section-tag">规格驱动开发</div><h1>SDD：把意图变成可验证交付</h1></div>
<p class="slide-subtitle sdd-lead">先把需求写成可审查的行为约束，再逐层转成设计、任务、代码与证据；实现中发现的新约束必须回写规格。</p>

<BrandMark />

<PageNo current="24" />

<div class="sdd-overview-layout">
  <section class="sdd-process-panel">
    <div class="sdd-panel-heading"><span>流程 · ARTIFACT CHAIN</span><strong>每一步都有输入、产物和进入下一阶段的门槛</strong></div>
    <div class="sdd-stage-row">
      <article class="sdd-stage"><div class="sdd-stage-head"><b>01</b><h2>澄清上下文</h2></div><p>检查现状、边界、非目标与未知项，不用假设填空。</p><div class="sdd-stage-artifacts"><span>需求输入</span><span>项目基线</span><span>工程规范</span></div><small>门：关键歧义已关闭</small></article>
      <article class="sdd-stage"><div class="sdd-stage-head"><b>02</b><h2>定义规格</h2></div><p>写清场景、业务规则、异常路径、非功能约束与验收条件。</p><div class="sdd-stage-artifacts"><span>规格</span><span>验收标准</span><span>澄清 / 检查清单</span></div><small>门：每条行为可验证</small></article>
      <article class="sdd-stage"><div class="sdd-stage-head"><b>03</b><h2>形成设计</h2></div><p>确定组件、接口、数据、兼容、迁移、回滚和测试策略。</p><div class="sdd-stage-artifacts"><span>技术方案</span><span>研究结论</span><span>数据模型 / 接口契约</span><span>测试设计</span></div><small>门：方案可实现、可回退</small></article>
      <article class="sdd-stage"><div class="sdd-stage-head"><b>04</b><h2>拆解任务</h2></div><p>按依赖排序最小任务，标出可并行项，并追踪到验收场景。</p><div class="sdd-stage-artifacts"><span>任务清单</span><span>依赖 / 并行标记</span><span>任务验收条件</span></div><small>门：每项有完成证据</small></article>
      <article class="sdd-stage"><div class="sdd-stage-head"><b>05</b><h2>实现与自检</h2></div><p>一次只完成一个任务；按任务运行局部检查，持续保存结果。</p><div class="sdd-stage-artifacts"><span>代码</span><span>自动化测试</span><span>构建 / 运行记录</span></div><small>门：任务检查全部通过</small></article>
      <article class="sdd-stage"><div class="sdd-stage-head"><b>06</b><h2>验收与演进</h2></div><p>执行检视、验收与回归；行为改变时同步更新规格与设计。</p><div class="sdd-stage-artifacts"><span>检视结论</span><span>验收证据</span><span>全量文档回写</span><span>归档 / 复盘记录</span></div><small>门：规格、代码、测试一致</small></article>
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

<!--
讲师提示：沿产物链讲清每一步交付什么，再用右侧四条方法说明如何推进与回写。强调 SDD 不是一次性写完文档，而是用门禁和回写维持规格、实现、测试的一致性。
资料核对日期：2026-07-19。
官方资料：
- GitHub Spec Kit SDD：https://github.com/github/spec-kit/blob/main/spec-driven.md
- GitHub Spec Kit 流程：https://github.github.com/spec-kit/
- Kiro Specs CLI：https://kiro.dev/docs/cli/v3/specs/
-->
