---
layout: default
class: lesson-slide
---

<div class="section-tag">09 · SDD 生态</div>
# OpenSpec 变更流程
<BrandMark />
<PageNo current="28" />

<div class="ops-flow">
  <div><b>Explore</b><span>调查现状与可选路径</span></div><i>→</i><div><b>Propose</b><span>对齐 why / what / impact</span></div><i>→</i><div><b>Apply</b><span>按 tasks 实现与验证</span></div><i>→</i><div><b>Archive</b><span>合并规格真相并归档</span></div>
</div>

<div class="ops-layout"><div class="file-tree dark"><div>📁 openspec/</div><div class="indent">📁 specs/ <span>当前真相</span></div><div class="indent">📁 changes/add-search/</div><div class="indent2">📄 proposal.md</div><div class="indent2">📁 specs/ <span>规格增量</span></div><div class="indent2">📄 design.md</div><div class="indent2">📄 tasks.md</div></div><div class="truth-model"><div><b>变更前</b><p>现有 specs 保持稳定</p></div><i>＋</i><div><b>提案中</b><p>变化集中在 change folder</p></div><i>→</i><div><b>归档后</b><p>批准增量进入 specs</p></div></div></div>

<div class="takeaway">关键设计：把“系统当前是什么”与“这次想改什么”分开版本管理。</div>

<!-- 官方资料：https://github.com/Fission-AI/OpenSpec -->
