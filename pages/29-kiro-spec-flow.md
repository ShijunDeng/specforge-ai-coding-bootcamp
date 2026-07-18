---
layout: default
class: lesson-slide
---

<div class="section-tag">09 · SDD 生态</div>
# Kiro 规格流程
<BrandMark />
<PageNo current="27" />

<div class="file-stack">
  <div class="file-card req"><small>01 · WHAT</small><code>requirements.md</code><p>用户故事 · 验收条件 · 边界与异常</p><span>Gate：业务行为是否完整？</span></div>
  <div class="file-card design"><small>02 · HOW</small><code>design.md</code><p>架构 · 数据流 · 错误处理 · 测试策略</p><span>Gate：方案是否兼容且可验证？</span></div>
  <div class="file-card tasks"><small>03 · DO</small><code>tasks.md</code><p>离散任务 · 依赖关系 · 可追踪进度</p><span>Gate：任务是否可独立完成？</span></div>
</div>

<div class="kiro-execution"><b>执行</b><span>依赖图分波次</span><i>→</i><span>无依赖任务并行</span><i>→</i><span>每步更新状态</span><i>→</i><strong>验证后推进</strong></div>

<!-- 官方资料：https://kiro.dev/docs/specs/ -->
