---
layout: default
class: lesson-slide
---

<div class="section-tag">11 · 全量设计</div>
# SDD 的两种项目起点
<BrandMark />
<PageNo current="32" />

<p class="origin-lead">Greenfield 要收敛选择，Brownfield 要恢复事实；两者都要先建立项目级基线。</p>

<div class="origin-lanes">
  <section class="origin-lane origin-greenfield">
    <header class="origin-head">
      <div><small>GREENFIELD · 0 → 1</small><h2>从意图建立系统</h2></div>
      <span class="origin-badge">选择空间大</span>
    </header>
    <div class="origin-visual blueprint-visual" role="img" aria-label="从业务意图逐步形成领域、架构与接口的蓝图">
      <div class="blueprint-node goal">业务意图</div><i></i><div class="blueprint-node domain">领域</div><i></i><div class="blueprint-node architecture">架构</div><i></i><div class="blueprint-node interface">接口</div>
    </div>
    <div class="origin-compare">
      <div><b>软件开发</b><p>技术栈与架构可重新选择，先明确取舍与非功能约束。</p></div>
      <div><b>AI Coding</b><p>生成骨架很快；未写明的决策也会被模型替你决定。</p></div>
      <div class="origin-sdd-row"><b>SDD</b><p>正向设计：目标 → 规格 → 设计 → 实现。</p></div>
    </div>
    <footer><span>初始化重点</span><strong>把“待定选择”变成可评审约束</strong></footer>
  </section>
  <section class="origin-lane origin-brownfield">
    <header class="origin-head">
      <div><small>BROWNFIELD · 1 → N</small><h2>在运行系统上改变</h2></div>
      <span class="origin-badge">存量约束多</span>
    </header>
    <div class="origin-visual system-visual" role="img" aria-label="代码、数据、接口与运行约束共同构成现有系统">
      <div class="system-core"><span>UI</span><span>API</span><span>DOMAIN</span><span>DATA</span></div>
      <em class="constraint c1">兼容</em><em class="constraint c2">历史数据</em><em class="constraint c3">运行规则</em>
    </div>
    <div class="origin-compare">
      <div><b>软件开发</b><p>新旧能力需要共存，接口、数据与依赖通常只能渐进调整。</p></div>
      <div><b>AI Coding</b><p>先检索代码、测试与配置，再用运行结果校准推断。</p></div>
      <div class="origin-sdd-row"><b>SDD</b><p>逆向恢复：实现事实 → 全量规格 / 设计 → 后续变更。</p></div>
    </div>
    <footer><span>初始化重点</span><strong>把“隐性事实”变成可追溯基线</strong></footer>
  </section>
</div>

<div class="origin-convergence"><span class="converge-from">目标与取舍</span><i></i><div><small>NEXT · 以当前项目为范围</small><strong>初始化全量 Spec + Design</strong></div><i></i><span class="converge-from">现状与约束</span></div>

<!--
讲师提示：
- Greenfield 的核心难题是“选择尚未发生”；Brownfield 的核心难题是“事实已经存在但没有被完整写下”。
- 在 AI Coding 中，前者要防止模型替团队偷偷做架构决策；后者要防止模型只根据局部代码推断整个系统。
- 本页不是说两类项目只能二选一。大型改造经常同时包含 Brownfield 的存量约束与局部 Greenfield 的新边界。
- 下一页展开“全量规格 / 全量设计”基线，随后进入基于 Spring PetClinic 的全仓初始化实战。

资料核对（2026-07-19）：
- AWS Prescriptive Guidance Glossary：Greenfield 表示新环境中没有既有基础设施，因此技术选择不受现有兼容性限制；扩展现有环境时可以混合两种策略。https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-intro-governance/apg-gloss.html
- Microsoft Azure Architecture Center：Brownfield / 遗留系统改造适合渐进迁移，使新旧能力共存，并显式处理跨系统依赖与数据存储。https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig
- GitHub Copilot 文档：理解陌生代码库应把仓库作为上下文，并要求回答落到实际文件、符号和证据。https://docs.github.com/en/copilot/tutorials/explore-a-codebase
- GitHub Spec Kit：SDD 以规格和实现计划组织开发，并强调原始 AI 生成需要结构化约束。https://github.com/github/spec-kit/blob/main/spec-driven.md
- Kiro：其公开的 Greenfield / Brownfield 对比将前者描述为从意图生成结构化需求和设计，将后者描述为分析现有代码并生成已有系统的规格。https://kiro.dev/topics/frontier-teams/
- 页面结论“Greenfield 正向设计 / Brownfield 逆向恢复，最终汇入项目级全量 Spec + Design”是基于上述资料与本课程流程作出的教学归纳。
-->
