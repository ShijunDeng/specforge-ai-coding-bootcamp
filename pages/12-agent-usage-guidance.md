---
layout: default
class: lesson-slide
---

<div class="section-tag">04 · 局部改造</div>
# Agent 使用要点
<BrandMark />
<PageNo current="10" />

<div class="epcv-flow">
  <div><b>E</b><h3>Explore</h3><p>读现状、找相似实现、确认命令</p><small>输出：事实清单</small></div><i>→</i>
  <div><b>P</b><h3>Plan</h3><p>列文件、步骤、风险、验证方式</p><small>输出：可审查计划</small></div><i>→</i>
  <div><b>C</b><h3>Code</h3><p>按计划小步修改，及时读 Diff</p><small>输出：最小变更</small></div><i>→</i>
  <div><b>V</b><h3>Verify</h3><p>运行测试、构建、页面与回归检查</p><small>输出：证据包</small></div>
</div>

<div class="prompt-anatomy">
  <strong>高质量任务 =</strong><span>目标</span><b>＋</b><span>现状 / 参考</span><b>＋</b><span>边界</span><b>＋</b><span>验收条件</span><b>＋</b><span>可执行验证</span>
</div>

<div class="takeaway">先让 Agent 建立正确模型，再让它产生改动；验证命令要在任务开始时就给出。</div>
