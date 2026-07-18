---
layout: default
class: lesson-slide
---

<div class="section-tag">04 · 局部改造</div>
# Plan / Code 模式演示
<BrandMark />
<PageNo current="11" />

<div class="plan-code-grid">
  <div class="plan-panel"><small>PLAN MODE</small><h2>从 Owners 提取产品模式</h2><ol><li>定位 list → detail 的导航结构</li><li>确认 detail 页承载 Edit / Delete</li><li>复用表单校验与错误展示</li><li>补齐重复检查与测试矩阵</li><li>列出 H2 / MySQL / PostgreSQL 影响</li></ol><div class="human-edit">人工调整：删除全新交互方案，要求复用现有页面模式</div></div>
  <div class="diff-panel"><small>CODE MODE</small><h2>按计划实现并审查 Diff</h2><div class="diff-lines"><span>＋ Controller：详情 / 新增 / 编辑 / 删除</span><span>＋ Service：重复校验</span><span>＋ Templates：列表 → 详情</span><span>＋ Tests：正常 / 重复 / 不存在</span><span>± Schema：多数据库保持一致</span></div><div class="diff-summary"><b>6</b> files changed <b>+214</b> <em>-17</em></div></div>
</div>

<div class="takeaway">计划不是仪式：它是人工纠偏成本最低的时刻。</div>
