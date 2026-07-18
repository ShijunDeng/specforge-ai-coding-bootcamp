---
layout: default
class: lesson-slide
---

<div class="section-tag">06 · MR 闭环</div>
# Loop Engineering
<BrandMark />
<PageNo current="21" />

<div class="feedback-loop">
  <div class="loop-center"><strong>真实反馈</strong><span>不是“再试一次”</span></div>
  <div class="node n1">需求<small>验收条件</small></div><div class="node n2">实现<small>Diff</small></div><div class="node n3">测试<small>失败日志</small></div><div class="node n4">MR<small>变更说明</small></div><div class="node n5">检视<small>具体意见</small></div><div class="node n6">修复<small>最小修正</small></div><div class="node n7">回归<small>新证据</small></div>
</div>

<div class="stop-grid"><div><b>每轮输入</b><p>最新测试失败、Review 意见、实际页面结果</p></div><div><b>每轮判断</b><p>事实是否推翻假设？变更是否仍在边界内？</p></div><div><b>停止条件</b><p>验收满足、证据充分、无阻断、风险透明</p></div></div>
