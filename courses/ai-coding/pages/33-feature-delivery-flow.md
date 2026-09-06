---
layout: default
class: lesson-slide
---

<div class="lesson-heading"><div class="section-tag">规格驱动开发</div><h1>SDD simple-feature：规范驱动开发流程</h1></div>
<BrandMark />
<PageNo current="31" />

<p class="slide-subtitle feature-delivery-lead">先让增量规格、设计和 Alpha 测试设计通过评审，再按任务依赖编码；检视通过后，才把变更同步回全量文档。</p>

<section class="feature-delivery-board" aria-label="SDD simple-feature 规范驱动开发流程">
  <div class="feature-lane feature-lane-design">
    <div class="feature-lane-title"><small>DESIGN</small><b>设计与评审</b><span>01–05</span></div>
    <div class="feature-step-row feature-step-row-design">
      <article class="feature-step feature-step-discover">
        <header><b>01</b><span class="feature-command">Collect · DesignPrep</span></header>
        <h3>需求与设计准备</h3>
        <p>获取 FE / US / DTS 详情，校验输入；同步模板、DFX 标签与工程规范。</p>
        <footer><small>产物</small><strong>requirement-digest.md<br>design-artifacts · engineering-contract</strong><span>需求索引、设计模板与按活动整理的规范摘要</span></footer>
      </article>
      <article class="feature-step feature-step-discover">
        <header><b>02</b><span class="feature-command">Story</span></header>
        <h3>完整设计</h3>
        <p>覆盖可靠性、安全、可观测、性能与 OpenAPI；决策闭环 ≥ 80%。</p>
        <footer><small>产物</small><strong>proposal.md · delta-spec.md<br>delta-design.md · design-review-report.md</strong><span>需求澄清、增量规格、影响面清单与设计自检</span></footer>
      </article>
      <article class="feature-step feature-step-review">
        <header><b>03</b><span class="feature-command">DesignReviewAuto</span></header>
        <h3>自动评审</h3>
        <p>校验覆盖、一致性、可行性和完整性；安全标签触发 OWASP 评审。</p>
        <footer><small>产物</small><strong>design-review-auto-<br>conclusion.md</strong><span>pass / conditional_pass / fail 与返工指引</span></footer>
      </article>
      <article class="feature-step feature-step-review">
        <header><b>04</b><span class="feature-command">DesignReviewManual</span></header>
        <h3>人工评审</h3>
        <p>本地 Markdown 检视加云捷平台评审；意见按未修复项增量维护。</p>
        <footer><small>产物</small><strong>design-review-manual-<br>conclusion.md</strong><span>人工结论与任务清单式检视意见</span></footer>
      </article>
      <article class="feature-step feature-step-alpha">
        <header><b>05</b><span class="feature-command">AlphaTest</span></header>
        <h3>Alpha 测试设计</h3>
        <p>覆盖正常、边界和异常场景；五项指标最多自动修复 3 轮。</p>
        <footer><small>产物</small><strong>delta-testcases.md · validation-alpha-design.md<br>cloud-test-upload-report.json</strong><span>Alpha 用例、校验结论与 CloudTest 上传结果</span></footer>
      </article>
    </div>
  </div>

  <div class="feature-lane feature-lane-delivery">
    <div class="feature-lane-title"><small>DELIVERY</small><b>实现与归档</b><span>06–09</span></div>
    <div class="feature-step-row feature-step-row-delivery">
      <article class="feature-step feature-step-plan">
        <header><b>06</b><span class="feature-command">Task</span></header>
        <h3>任务分解</h3>
        <p>按模块和功能拆分任务，写清验收标准与依赖关系。</p>
        <footer><small>产物</small><strong>tasks.md</strong><span>可执行任务、验收标准和依赖顺序</span></footer>
      </article>
      <article class="feature-step feature-step-deliver">
        <header><b>07</b><span class="feature-command">Code</span></header>
        <h3>编码</h3>
        <p>先核实现有字段与方法；每个 Task 编译通过，每条业务规则至少有一个测试。</p>
        <footer><small>产物</small><strong>code/</strong><span>按任务依赖顺序完成的代码与测试</span></footer>
      </article>
      <article class="feature-step feature-step-inspect">
        <header><b>08</b><span class="feature-command">Inspect</span></header>
        <h3>代码检视</h3>
        <p>只做静态阅读，检查规范、设计一致性和覆盖充分性；不运行代码或测试。</p>
        <footer><small>产物</small><strong>code-review.md · code-review-conclusion.md</strong><span>增量问题清单与检视结论</span></footer>
      </article>
      <article class="feature-step feature-step-archive">
        <header><b>09</b><span class="feature-command">Reflect · Archive</span></header>
        <h3>回顾与归档</h3>
        <p>回顾执行质量，核验产物；将 delta 文档同步到全量文档并归档变更。</p>
        <footer><small>产物</small><strong>reflection.md · archive-report.md</strong><span>流程改进建议、完成状态与归档记录</span></footer>
      </article>
    </div>
  </div>

  <div class="feature-feedback">
    <div class="feature-feedback-retry"><b>设计评审未通过</b><span>返回 Story，只改指定章节</span><i>↶</i></div>
    <div class="feature-feedback-code"><b>代码检视未通过</b><span>返回 Code，增量修复问题</span><i>↶</i></div>
    <div class="feature-feedback-success"><b>检视通过</b><span>同步全量文档并归档 change</span><i>→</i></div>
  </div>
</section>

<!--
讲师提示：页面只突出交付主链。DesignPrep 合入 Collect，Reflect 合入 Archive；Alpha 与测试设计统一为 AlphaTest，不再拆成两个阶段。
讲解重点：DesignReviewAuto 和 DesignReviewManual 失败时只返工 Story 的指定章节；Inspect 只做静态检视，失败时返回 Code。完成不等于代码写完，Archive 还要核验产物并把 delta 文档同步到全量文档。
-->
