---
layout: default
class: lesson-slide vibe-sdd-slide
---

<div class="lesson-heading"><div class="section-tag">08 · 从 Vibe 到 SDD</div><h1>从 Vibe Coding 到 SDD</h1></div>
<p class="vibe-sdd-lead">控制面逐步前移：从看结果再改，到让 Agent 在工具链中验证，再到用规格统一意图、约束和验收。</p>
<BrandMark />
<PageNo current="24" />

<div class="vibe-sdd-risk"><span>个人探索 · 低风险</span><div><i></i><b>变更规模 · 协作人数 · 返工成本</b></div><strong>生产交付 · 高风险</strong></div>

<div class="vibe-sdd-stages">
  <article class="vibe-sdd-stage vibe-sdd-stage--vibe">
    <header><span>01</span><div><small>CONVERSATION-DRIVEN</small><h2>Vibe Coding</h2></div></header>
    <div class="vibe-sdd-visual vibe-sdd-visual--vibe"><span class="vibe-sdd-bubble">“先做出来看看”</span><i>→</i><span class="vibe-sdd-window"><b></b><b></b><b></b><em>RUN</em></span></div>
    <dl><div><dt>控制对象</dt><dd>可见运行结果</dd></div><div><dt>反馈回路</dt><dd>提示 → 生成 → 再提示</dd></div><div><dt>检查依据</dt><dd>个人试用与直觉</dd></div></dl>
    <footer>适合：低风险原型、一次性工具</footer>
  </article>
  <div class="vibe-sdd-connector"><span>→</span><small>加入工具与验证</small></div>
  <article class="vibe-sdd-stage vibe-sdd-stage--agent">
    <header><span>02</span><div><small>AGENTIC ENGINEERING</small><h2>工程化 Agent</h2></div></header>
    <div class="vibe-sdd-visual vibe-sdd-visual--agent"><span>TASK</span><i>→</i><span>TOOLS</span><i>→</i><span>TEST ✓</span></div>
    <dl><div><dt>控制对象</dt><dd>任务 + 仓库上下文</dd></div><div><dt>反馈回路</dt><dd>读写 → 执行 → 测试</dd></div><div><dt>检查依据</dt><dd>diff、测试与 Review</dd></div></dl>
    <footer>适合：边界清晰的工程任务</footer>
  </article>
  <div class="vibe-sdd-connector"><span>→</span><small>前置意图与验收</small></div>
  <article class="vibe-sdd-stage vibe-sdd-stage--sdd">
    <header><span>03</span><div><small>SPEC-DRIVEN</small><h2>SDD</h2></div></header>
    <div class="vibe-sdd-visual vibe-sdd-visual--sdd"><span>SPEC</span><i>⇄</i><span>CODE</span><i>+</i><span>TEST</span></div>
    <dl><div><dt>控制对象</dt><dd>规格 + 验收标准</dd></div><div><dt>反馈回路</dt><dd>修订规格 ↔ 实现验证</dd></div><div><dt>检查依据</dt><dd>需求 ↔ 变更 ↔ 证据</dd></div></dl>
    <footer>适合：跨模块、多人、长期维护</footer>
  </article>
</div>

<div class="vibe-sdd-values"><b>SDD 增加的控制能力</b><div><strong>少重写</strong><span>编码前暴露歧义与冲突</span></div><div><strong>能并行</strong><span>人和 Agent 共享同一边界</span></div><div><strong>可追踪</strong><span>需求、变更、验收互相对应</span></div><em>下一页：这套控制面如何运转 →</em></div>

<!--
讲师提示：三种模式会并存，不是严格的年代替换。先用 Vibe Coding 快速验证未知，再按变更风险选择工程化 Agent 或 SDD；不要把所有 AI 辅助编程都称为 Vibe Coding。本页只讲演进逻辑、差异和价值，下一页再展开 SDD 流程。

核对日期：2026-07-19。
资料 1：Simon Willison，《Not all AI-assisted programming is vibe coding》，https://simonwillison.net/2025/Mar/19/vibe-coding/
- 引述并解释 Andrej Karpathy 对 Vibe Coding 的原始定义：不再阅读 diff，主要适合可丢弃、低风险的周末项目；生产级 AI 辅助开发需要审查、测试并能解释代码。
资料 2：Simon Willison，《What is agentic engineering?》，https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/
- Coding Agent 通过工具循环读写和执行代码；工程师仍需提供合适的问题描述、工具与验证，并迭代结果。
资料 3：GitHub Spec Kit 官方文档，https://github.github.com/spec-kit/index.html
- SDD 将意图通过 Spec → Plan → Tasks → Implement 的结构化阶段传递；各阶段产生 Markdown 资产，为 Agent 提供稳定上下文。
资料 4：Kiro Specs 官方文档，https://kiro.dev/docs/specs/
- Specs 把需求、验收标准、技术设计和任务拆分保存为可审查文件，支持团队协作、任务追踪与交付验证。
资料 5：DORA 2025 State of AI-assisted Software Development，https://dora.dev/research/2025/dora-report/
- AI 更像组织现有工程系统的放大器；收益取决于底层工作系统，而不只取决于工具采用。
资料 6：Thoughtworks Technology Radar，Feedback flywheel，https://www.thoughtworks.com/en-us/radar/techniques/feedback-flywheel
- 2026 年观察到使用 Coding Agent 的团队越来越多采用 SDD，并把规格、实现与反馈组织成可持续循环。
-->
