---
layout: default
class: lesson-slide plan-demo-slide
---

<div class="lesson-heading"><div class="section-tag">04 · 局部改造</div><h1>Plan 模式现场演示</h1></div>
<BrandMark />
<PageNo current="11" />

<p class="plan-demo-lead">目标：为 Spring PetClinic 补齐 Veterinarians CRUD；本轮只产出计划，不修改代码。</p>

<div class="plan-demo-layout">
  <section class="demo-brief">
    <div class="plan-card-label">DEMO PROMPT</div>
    <h2>把约束一次讲清楚</h2>
    <div class="demo-prompt">
      <p>请先阅读现有实现并进入 <b>Plan 模式</b>：</p>
      <ul>
        <li>实现 Veterinarians 的列表、详情、新增、编辑和删除。</li>
        <li>参考 Owners：列表点击姓名进入详情，Edit / Delete 放在详情页。</li>
        <li>新增或改名后出现同名兽医时拒绝保存，并在原表单显示错误。</li>
        <li>计划需列出现状依据、改动文件、实施步骤、测试与运行验证。</li>
      </ul>
    </div>
    <div class="demo-sequence"><b>现场节奏</b><span>进入 Plan</span><i>→</i><span>审查计划</span><i>→</i><span>纠偏后再实现</span></div>
  </section>
  <section class="plan-expectation">
    <div class="plan-card-label">PLAN CHECKLIST</div>
    <h2>计划必须回答 4 个问题</h2>
    <div class="plan-checklist">
      <div><span>01</span><p><b>现状怎么复用？</b><small>定位 Owners 的路由、页面结构、表单校验与错误展示。</small></p></div>
      <div><span>02</span><p><b>准备改哪些位置？</b><small>说明 Controller、Repository、Templates 与 Tests 的职责。</small></p></div>
      <div><span>03</span><p><b>失败路径怎么处理？</b><small>覆盖新增重名、编辑重名、ID 不存在与删除反馈。</small></p></div>
      <div><span>04</span><p><b>如何证明功能可用？</b><small>列出 CRUD、异常测试、完整构建和浏览器走查。</small></p></div>
    </div>
  </section>
</div>

<div class="plan-review-gate"><span>人工审查点</span><b>计划若新造一套交互，退回并要求复用 Owners；若只覆盖正常路径，补齐异常测试。</b></div>

<!--
讲师演示：先让工具停留在 Plan 模式，现场检查计划是否准确复用了 Owners 模块，并追问新增与编辑两个入口的重名处理。计划通过后，再进入实现阶段。
-->
