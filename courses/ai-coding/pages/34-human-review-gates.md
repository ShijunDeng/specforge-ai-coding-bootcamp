---
layout: default
class: lesson-slide human-review-slide
---

<div class="lesson-heading"><div class="section-tag">规格驱动开发</div><h1>SDD 流程中，人重点关注三件事</h1></div>
<BrandMark />
<PageNo current="32" />

<p class="slide-subtitle human-review-lead">AI 可以生成候选产物，但需求理解、方案可信度与验收证据必须由人判断。</p>

<section class="human-review-path" aria-label="SDD 流程中的三个人工审核关卡">
  <article class="human-review-gate human-review-requirement">
    <header>
      <span class="human-review-index">01</span>
      <div><small>开始设计前</small><b>CLARIFY</b></div>
    </header>
    <h2>需求澄清</h2>
    <p class="human-review-question">我们解决的是正确问题吗？</p>
    <div class="human-review-focus">
      <span>人重点关注</span>
      <ul>
        <li><b>目标</b>：用户价值与成功结果是否明确</li>
        <li><b>边界</b>：范围、非目标与业务规则是否清楚</li>
        <li><b>口径</b>：歧义、例外和验收标准是否收敛</li>
      </ul>
    </div>
    <footer><small>放行标准</small><strong>需求边界可被准确复述与验证</strong></footer>
  </article>

  <div class="human-review-connector" aria-hidden="true"><span>需求共识</span><i>→</i></div>

  <article class="human-review-gate human-review-design">
    <header>
      <span class="human-review-index">02</span>
      <div><small>进入实现前</small><b>REVIEW</b></div>
    </header>
    <h2>规格／设计审核</h2>
    <p class="human-review-question">方案正确、完整且可落地吗？</p>
    <div class="human-review-focus">
      <span>人重点关注</span>
      <ul>
        <li><b>一致</b>：规格与设计是否忠实映射需求</li>
        <li><b>完整</b>：流程、接口、数据与异常是否覆盖</li>
        <li><b>风险</b>：安全、兼容与关键取舍是否合理</li>
      </ul>
    </div>
    <footer><small>放行标准</small><strong>设计决策有依据，风险有应对</strong></footer>
  </article>

  <div class="human-review-connector" aria-hidden="true"><span>设计批准</span><i>→</i></div>

  <article class="human-review-gate human-review-test">
    <header>
      <span class="human-review-index">03</span>
      <div><small>编码实施前</small><b>PROVE</b></div>
    </header>
    <h2>测试用例审核</h2>
    <p class="human-review-question">这些测试足以证明需求成立吗？</p>
    <div class="human-review-focus">
      <span>人重点关注</span>
      <ul>
        <li><b>覆盖</b>：主路径、边界与失败场景是否齐全</li>
        <li><b>断言</b>：是否验证业务结果而非只看不报错</li>
        <li><b>可信</b>：前置数据与预期结果是否可复核</li>
      </ul>
    </div>
    <footer><small>放行标准</small><strong>每条验收标准都有测试证据</strong></footer>
  </article>
</section>

<div class="human-review-decision" aria-label="SDD 中人的最终责任">
  <div><small>AI 提供候选产物</small><b>需求理解 → 规格设计 → 测试用例</b></div>
  <div class="human-review-owner"><span>人负责</span><strong>澄清</strong><i>·</i><strong>审核</strong><i>·</i><strong>放行</strong></div>
  <p>任何一关答不清楚，都回到当前阶段修订。</p>
</div>

<!--
讲师提示：本页不讨论人逐行替 AI 重做，而是强调人在 SDD 中的三类判断责任。需求澄清确保方向正确；规格／设计审核确保方案正确且可落地；测试用例审核确保交付证据足以支撑验收。
讲解重点：AI 可以高效生成和修订产物，但三道关卡都需要人给出明确的放行判断。任何一关答不清楚，都应在错误成本较低的当前阶段打回，而不是继续向编码推进。
-->
