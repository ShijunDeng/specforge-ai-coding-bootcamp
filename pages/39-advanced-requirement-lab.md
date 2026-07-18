---
layout: default
class: lesson-slide assignment-release-slide
---

<div class="section-tag">13 · 综合实战</div>
# 实战任务发布
<BrandMark />
<PageNo current="37" />

<p class="assignment-lead">当 Owner 为 Pet 新增 Visit，系统自动分配一名预约当日尚未接诊的 Veterinarian。</p>

<section class="assignment-board" aria-label="兽医自动分配实战任务">
  <article class="assignment-brief">
    <header class="assignment-meta">
      <span>SPRING PETCLINIC</span>
      <b>90 MIN · TEAM</b>
    </header>
    <div class="assignment-flow" aria-label="预约触发自动分配流程">
      <div class="assignment-step">
        <small>01 · 预约</small>
        <strong>Owner 选择 Pet 与日期</strong>
      </div>
      <i>→</i>
      <div class="assignment-step">
        <small>02 · 创建</small>
        <strong>提交 Visit</strong>
      </div>
      <i>→</i>
      <div class="assignment-step assignment-step-result">
        <small>03 · 系统处理</small>
        <strong>自动分配空闲 Vet</strong>
      </div>
    </div>
    <div class="assignment-invariant">
      <div>
        <small>必须始终成立</small>
        <strong>同一兽医 + 同一日期</strong>
      </div>
      <span>≤ 1 个 Visit</span>
    </div>
    <div class="assignment-ruleline" aria-label="自动分配规则">
      <span><b>1</b>按 Visit 日期查找</span>
      <span><b>2</b>排除当日已有预约者</span>
      <span><b>3</b>保存 1 名兽医到 Visit</span>
    </div>
    <p class="assignment-scope"><b>本轮边界</b>：只实现自动分配与每日容量；不做专长匹配、手动选医或可配置容量。</p>
  </article>
  <article class="assignment-acceptance">
    <header>
      <small>ACCEPTANCE TEST</small>
      <h2>验收场景</h2>
    </header>
    <ol>
      <li>
        <span>01</span>
        <div><strong>当日仍有空闲兽医</strong><p>预约成功，Visit 保存已分配兽医，页面能看到分配结果。</p></div>
      </li>
      <li>
        <span>02</span>
        <div><strong>某兽医当日已有预约</strong><p>该兽医不再参与分配；系统选择另一名当日空闲兽医。</p></div>
      </li>
      <li>
        <span>03</span>
        <div><strong>所有兽医当日均已接诊</strong><p>预约失败并提示原因，不留下未分配兽医的 Visit。</p></div>
      </li>
    </ol>
  </article>
</section>

<footer class="assignment-evidence">
  <div><small>提交证据</small><strong>让规则、实现与结果可以互相核对</strong></div>
  <span>Spec / Design / Tasks</span>
  <span>3 个场景的自动化测试</span>
  <span>预约结果页面</span>
</footer>

<!--
讲师提示：先读任务主句，再强调唯一容量规则：同一名兽医在同一天最多关联一个 Visit。学员可以自行设计“多名空闲兽医时选谁”的稳定策略，但不得绕过容量限制。
验收时逐项核对三个场景。重点看失败场景是否没有留下半成品 Visit，以及成功后页面是否能看到系统分配的兽医。
-->
