---
layout: default
class: lesson-slide anti-pattern-slide
---

<div class="lesson-heading"><div class="section-tag">AI Coding</div><h1>Agent 反模式</h1></div>
<BrandMark />
<PageNo current="11" />

<p class="slide-subtitle anti-pattern-lede">四种看似省事的做法，会把关键问题推迟到验收阶段。</p>

<div class="anti-pattern-grid">
  <article class="anti-pattern-card">
    <header><span class="anti-pattern-index">01</span><span class="anti-pattern-domain">任务拆分</span></header>
    <h2>一句话吞下完整需求</h2>
    <div class="anti-pattern-symptom"><b>症状</b><p>直接要求一次完成 Veterinarians CRUD，Agent 只能自行假设产品规则和页面模式。</p></div>
    <div class="anti-pattern-fix"><b>纠偏</b><p>先探索现有 Owners 实现，再拆为计划、执行和验收。</p></div>
  </article>

  <article class="anti-pattern-card">
    <header><span class="anti-pattern-index">02</span><span class="anti-pattern-domain">验收定义</span></header>
    <h2>没有明确验收条件</h2>
    <div class="anti-pattern-symptom"><b>症状</b><p>只说“看起来能用”，重复校验、失败反馈和边界条件无人负责。</p></div>
    <div class="anti-pattern-fix"><b>纠偏</b><p>写清业务规则、UI 反馈、测试目标和不可改变的边界。</p></div>
  </article>

  <article class="anti-pattern-card">
    <header><span class="anti-pattern-index">03</span><span class="anti-pattern-domain">证据闭环</span></header>
    <h2>不给可执行验证</h2>
    <div class="anti-pattern-symptom"><b>症状</b><p>Agent 只总结“已经完成”，没有测试、构建或页面运行证据。</p></div>
    <div class="anti-pattern-fix"><b>纠偏</b><p>指定测试、构建和页面检查命令，并读取真实输出。</p></div>
  </article>

  <article class="anti-pattern-card">
    <header><span class="anti-pattern-index">04</span><span class="anti-pattern-domain">上下文管理</span></header>
    <h2>会话持续污染</h2>
    <div class="anti-pattern-symptom"><b>症状</b><p>无关任务、旧日志和多轮失败方案持续占用同一上下文。</p></div>
    <div class="anti-pattern-fix"><b>纠偏</b><p>按任务新开会话，只交接结论、改动范围和验证结果。</p></div>
  </article>
</div>

<div class="anti-pattern-impact"><strong>共同后果</strong><span>上下文噪声</span><i>→</i><span>错误假设</span><i>→</i><span>返工范围扩大</span><i>→</i><span>验证可信度下降</span></div>

<!--
讲师提示：四个观点及顺序保持不变。讲解时先让学员识别“症状”，再说出对应的工程纠偏动作。
-->
