---
layout: default
class: lesson-slide
---

<div class="section-tag">04 · 局部改造</div>
# Agent 反模式
<BrandMark />
<PageNo current="12" />

<div class="anti-grid">
  <div><b>01</b><h3>一句话吞下完整需求</h3><p>症状：直接改大量文件，假设产品规则。</p><span>改法：拆为探索、计划、执行、验收。</span></div>
  <div><b>02</b><h3>没有明确验收条件</h3><p>症状：“看起来能用”，边界和失败路径缺失。</p><span>改法：业务规则 + UI 反馈 + 测试目标。</span></div>
  <div><b>03</b><h3>不给可执行验证</h3><p>症状：只输出代码总结，没有真实运行证据。</p><span>改法：指定测试、构建、页面检查命令。</span></div>
  <div><b>04</b><h3>会话持续污染</h3><p>症状：无关任务、旧日志与错误假设叠加。</p><span>改法：按任务新开上下文，保留必要交接。</span></div>
</div>

<div class="warning-band">反模式的共同结果：上下文噪声 ↑　错误假设 ↑　Diff 半径 ↑　验证可信度 ↓</div>
