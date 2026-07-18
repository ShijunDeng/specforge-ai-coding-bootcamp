---
layout: default
class: lesson-slide human-review-slide
---

<div class="section-tag">12 · 质量门禁</div>
# AI 执行，人工放行
<BrandMark />
<PageNo current="36" />

<p class="human-review-lead">前一页的 8 个步骤不是无人流水线。进入实现、合并基线、宣布通过之前，都要有人确认；不满足条件就打回。</p>

<section class="human-review-grid" aria-label="人工重点审核的三个方面">
  <article class="human-review-card human-review-spec">
    <header>
      <span class="human-review-index">01</span>
      <div><small>进入实现前</small><b>SPEC REVIEW</b></div>
    </header>
    <h2>规格审查</h2>
    <p class="human-review-question">我们是否写清了要做什么？</p>
    <ul>
      <li>业务目标、范围与非目标是否明确</li>
      <li>正常、边界、失败、权限规则是否齐全</li>
      <li>验收标准是否可观察、可判定</li>
    </ul>
    <footer><small>审查价值</small><strong>阻止错误需求变成“正确实现”</strong></footer>
  </article>
  <article class="human-review-card human-review-audit">
    <header>
      <span class="human-review-index">02</span>
      <div><small>合并基线前</small><b>CHANGE AUDIT</b></div>
    </header>
    <h2>变更审计</h2>
    <p class="human-review-question">Diff 是否仍在批准边界内？</p>
    <ul>
      <li>规格、设计、任务与 Diff 是否可追踪</li>
      <li>数据、安全、兼容与依赖风险是否有证据</li>
      <li>范围漂移、例外与未完成项是否透明</li>
    </ul>
    <footer><small>审查价值</small><strong>避免隐性风险进入项目基线</strong></footer>
  </article>
  <article class="human-review-card human-review-test">
    <header>
      <span class="human-review-index">03</span>
      <div><small>宣布通过前</small><b>TEST REVIEW</b></div>
    </header>
    <h2>测试用例审查</h2>
    <p class="human-review-question">绿灯是否真的证明需求成立？</p>
    <ul>
      <li>主路径、边界、失败与回滚是否覆盖</li>
      <li>断言是否验证业务结果，而非只看“不报错”</li>
      <li>测试是否真实运行，结果与环境是否可复核</li>
    </ul>
    <footer><small>审查价值</small><strong>防止漏测或错误断言制造假通过</strong></footer>
  </article>
</section>

<div class="human-control-band" aria-label="AI 与人的责任边界">
  <div class="human-control-ai"><small>AI 在批准边界内</small><b>生成 · 修改 · 运行 · 修正</b></div>
  <div class="human-control-decision"><span>人工决定</span><strong>继续</strong><i>／</i><strong>打回</strong><i>／</i><strong>缩小范围</strong></div>
  <div class="human-control-owner"><small>人对结果负责</small><b>定边界 · 查风险 · 看证据</b></div>
</div>

<!--
讲师提示：承接上一页的八步流程，先指出流程中的等待不是空档，而是人工审核点。AI 可以连续读取上下文、生成规格、修改代码和运行测试，但是否进入下一阶段，要由人基于规格、审计结果和测试证据决定。
讲解重点：人工审核不是逐行重做 AI 的工作，而是在错误成本还低时检查方向、风险和证据。任何一栏答不清楚，都应打回当前阶段修订，而不是让流程继续向后跑。
-->
