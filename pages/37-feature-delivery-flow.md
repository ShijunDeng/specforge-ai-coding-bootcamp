---
layout: default
class: lesson-slide
---

<div class="section-tag">12 · 质量门禁</div>
# 特性开发流程介绍
<BrandMark />
<PageNo current="35" />

<div class="feature-flow">
  <div><small>INPUT</small><b>原始需求</b><span>目标与背景</span></div><i>→</i><div><small>DISCOVER</small><b>澄清</b><span>边界与未知</span></div><i>→</i><div><small>WHAT</small><b>Spec</b><span>场景与验收</span></div><i>→</i><div><small>HOW</small><b>Design</b><span>方案与兼容</span></div><i>→</i><div><small>ORDER</small><b>Tasks</b><span>依赖与顺序</span></div><i>→</i><div><small>BUILD</small><b>Implementation</b><span>小步 Diff</span></div><i>→</i><div><small>PROVE</small><b>Verification</b><span>测试与证据</span></div>
</div>

<div class="io-table"><div><b>阶段</b><span>关键输入</span><span>最小输出</span><span>返工触发</span></div><div><b>Spec</b><span>需求 + 现状</span><span>行为与验收</span><span>规则矛盾 / 范围不清</span></div><div><b>Design</b><span>已批准 Spec</span><span>方案与测试策略</span><span>兼容不可接受</span></div><div><b>Tasks</b><span>已批准 Design</span><span>可执行任务</span><span>依赖遗漏 / 粒度过大</span></div><div><b>Verify</b><span>实现 + 验收</span><span>覆盖证据</span><span>失败回到对应阶段</span></div></div>
