---
layout: default
class: lesson-slide
---

<div class="section-tag">12 · 质量门禁</div>
# SDD 特性开发：从增量设计回到全量设计
<BrandMark />
<PageNo current="35" />

<p class="feature-delivery-lead">每个特性先在独立变更上下文中完成设计、实现与验证；验证通过后，再把增量设计合并回项目基线。</p>

<section class="feature-delivery-board" aria-label="SDD 特性开发的八步闭环流程">
  <div class="feature-phase-row" aria-hidden="true">
    <div class="feature-phase feature-phase-discover"><small>DISCOVER &amp; DESIGN</small><b>定义变更</b><span>01–03</span></div>
    <div class="feature-phase feature-phase-plan"><small>PLAN</small><b>准备交付</b><span>04–05</span></div>
    <div class="feature-phase feature-phase-deliver"><small>BUILD &amp; PROVE</small><b>实现闭环</b><span>06–08</span></div>
  </div>

  <div class="feature-step-row">
    <article class="feature-step feature-step-discover">
      <header><b>01</b><span class="feature-command">CONTEXT</span></header>
      <h3>信息收集</h3>
      <p>收集需求背景、代码现状与工程约束。</p>
      <footer><small>输入</small><span>需求 + 仓库事实</span></footer>
    </article>
    <article class="feature-step feature-step-discover">
      <header><b>02</b><span class="feature-command">design-story</span></header>
      <h3>故事设计</h3>
      <p>补齐用户场景、业务规则与验收口径。</p>
      <footer><small>产物</small><span>Story Design</span></footer>
    </article>
    <article class="feature-step feature-step-discover">
      <header><b>03</b><span class="feature-command">design alpha</span></header>
      <h3>Alpha 设计</h3>
      <p>形成接口、数据与兼容方案初稿。</p>
      <footer><small>产物</small><span>Alpha Design</span></footer>
    </article>
    <article class="feature-step feature-step-plan">
      <header><b>04</b><span class="feature-command">TEST DESIGN</span></header>
      <h3>测试设计</h3>
      <p>把主路径、边界与失败场景变成测试。</p>
      <footer><small>产物</small><span>测试设计</span></footer>
    </article>
    <article class="feature-step feature-step-plan">
      <header><b>05</b><span class="feature-command">TASKS</span></header>
      <h3>任务分解</h3>
      <p>按依赖拆成可实现、可验证的小任务。</p>
      <footer><small>产物</small><span>任务清单</span></footer>
    </article>
    <article class="feature-step feature-step-deliver">
      <header><b>06</b><span class="feature-command">IMPLEMENT</span></header>
      <h3>编码实施</h3>
      <p>逐项修改代码、Schema 与自动化测试。</p>
      <footer><small>产物</small><span>代码 Diff</span></footer>
    </article>
    <article class="feature-step feature-step-deliver">
      <header><b>07</b><span class="feature-command">VERIFY</span></header>
      <h3>交付校验</h3>
      <p>运行构建和测试，对照设计收集证据。</p>
      <footer><small>产物</small><span>校验结果</span></footer>
    </article>
    <article class="feature-step feature-step-deliver feature-step-archive">
      <header><b>08</b><span class="feature-command">ARCHIVE</span></header>
      <h3>归档全量设计</h3>
      <p>将已验证增量回写全量规格与设计。</p>
      <footer><small>结果</small><span>项目基线更新</span></footer>
    </article>
  </div>

  <div class="feature-feedback">
    <div class="feature-feedback-retry"><b>校验未通过</b><span>回到对应的设计或实现节点修正</span><i>↶</i></div>
    <div class="feature-feedback-success"><b>校验通过</b><span>最新全量设计成为下一项特性的信息输入</span><i>→</i></div>
  </div>
</section>

<!--
讲师提示：本页先按八步闭环讲解。design-story 与 design alpha 是已知步骤名称，其余英文标签用于说明阶段语义；收到正式流程图后，应以内部真实步骤名、顺序和回流关系为准。
讲解重点：特性开发不是在“代码完成”处结束。只有校验通过，并把增量设计回写到全量规格与全量设计后，项目基线才与实现重新一致。
-->
