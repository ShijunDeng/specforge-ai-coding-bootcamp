---
layout: default
class: lesson-slide
---

<div class="section-tag">13 · 综合实战</div>
# 进阶需求实战
<BrandMark />
<PageNo current="37" />

<div class="advanced-brief">
  <div class="brief-main"><small>90 MIN · TEAM</small><h2>就诊预约自动分配兽医</h2><p>当 Owner 创建 Visit 时，系统依据专长与当日容量自动分配可用兽医，并允许查询分配结果。</p><div class="rule-chips"><span>专长匹配</span><span>每日容量</span><span>并发安全</span><span>失败可见</span><span>可查询</span><span>兼容旧数据</span></div></div>
  <div class="acceptance-card"><h3>硬性验收</h3><ol><li>只选择具备所需专长且未满载的兽医</li><li>容量相同时使用稳定、可解释的选择规则</li><li>无可用兽医时不创建半成品记录，并展示原因</li><li>并发预约不会突破容量上限</li><li>页面可见已分配兽医，查询可按日期 / 兽医筛选</li></ol></div>
</div>

<div class="sdd-taskline"><span>澄清</span><i>→</i><span>Spec</span><i>→</i><span>Design</span><i>→</i><span>Tasks</span><i>→</i><strong>至少打回并修订 1 次</strong><i>→</i><span>实现核心任务</span><i>→</i><span>测试</span></div>
