---
layout: default
class: lesson-slide
---

<div class="section-tag">12 · 质量门禁</div>
# 人工审核节点
<BrandMark />
<PageNo current="36" />

<div class="gate-grid">
  <div><b>GATE 1</b><h3>Spec Review</h3><ul><li>范围明确且无隐含承诺</li><li>正常、边界、失败场景齐全</li><li>验收可观察、可测试</li></ul><span>打回：仍需猜业务规则</span></div>
  <div><b>GATE 2</b><h3>Design Review</h3><ul><li>复用现有模式与边界</li><li>兼容、迁移、并发已处理</li><li>测试策略对应主要风险</li></ul><span>打回：方案无法解释代价</span></div>
  <div><b>GATE 3</b><h3>Tasks Review</h3><ul><li>任务有明确结果与依赖</li><li>顺序支持逐步验证</li><li>每项可在合理时间完成</li></ul><span>打回：任务仍是大而全</span></div>
  <div><b>GATE 4</b><h3>Delivery Review</h3><ul><li>Diff 与 Spec 一一对应</li><li>测试真实运行且覆盖风险</li><li>未完成项与风险透明</li></ul><span>打回：只有“已完成”结论</span></div>
</div>

<div class="human-value">人的价值不是重写 Agent 的每一步，而是在<strong>低成本节点</strong>阻止错误方向继续放大。</div>
