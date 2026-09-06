---
layout: default
class: lesson-slide
---

<div class="lesson-heading"><div class="section-tag">规格驱动开发</div><h1>从现有代码仓初始化 SDD</h1></div>
<BrandMark />
<PageNo current="29" />

<p class="slide-subtitle sdd-init-lead">用一条命令启动逆向分析，把分散在代码、测试与配置中的事实整理成可复核的设计基线。</p>
<div class="sdd-init-layout">
  <section class="sdd-init-process" aria-label="SDD 初始化流程">
    <div class="sdd-command-card">
      <div class="sdd-terminal-bar"><span></span><span></span><span></span><b>在仓库根目录执行</b></div>
      <div class="sdd-command"><span>$</span><strong>/sdd:init</strong></div>
      <p>扫描存量实现，建立第一版全量设计上下文</p>
    </div>
    <div class="sdd-reverse-flow">
      <div class="sdd-source-card">
        <div class="sdd-source-icon">&lt;/&gt;</div>
        <div><small>证据输入</small><b>现有代码仓</b><p>代码 · 测试 · Schema · 配置</p></div>
      </div>
      <div class="sdd-flow-arrow"><span>逆向分析</span><i></i></div>
      <div class="sdd-artifact-grid">
        <div class="sdd-artifact spec"><small>WHAT</small><b>全量规格</b><p>业务能力、场景、规则与外部行为</p><div class="sdd-artifact-files"><span>spec.md</span></div><em>codespec/specs/</em></div>
        <div class="sdd-artifact design"><small>HOW</small><b>全量设计</b><p>架构、领域模型、接口与数据</p><div class="sdd-artifact-files"><span>design.md</span></div><em>codespec/specs/</em></div>
        <div class="sdd-artifact standard"><small>GUARDRAIL</small><b>开发规范</b><p>设计、编码、测试与 DFX 要求</p><div class="sdd-artifact-files"><span>guidelines/</span></div><em>codespec/</em></div>
      </div>
    </div>
  </section>
  <section class="sdd-repo-panel" aria-label="初始化后的仓库目录示意">
    <div class="sdd-repo-head"><div><small>OUTPUT</small><b>CodeSpec 目录结构</b></div><span>Spring PetClinic</span></div>
    <div class="sdd-tree" role="img" aria-label="Spring PetClinic 仓库中的 CodeSpec 规范文档目录结构">
      <div><span class="tree-root">spring-petclinic/</span></div>
      <div><span class="tree-guide">├──</span> <span class="tree-folder">codespec/</span> <span class="tree-comment"># SDD 规范文档体系</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp; ├──</span> terms.md <span class="tree-comment"># 术语表</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp; ├──</span> service-context.md <span class="tree-comment"># 服务基础信息和依赖关系</span></div>
      <div class="tree-spacer" aria-hidden="true">&nbsp;</div>
      <div><span class="tree-guide">│&nbsp;&nbsp; ├──</span> <span class="tree-folder standard-color">guidelines/</span> <span class="tree-comment"># 开发规范</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp; │&nbsp;&nbsp; ├──</span> coding.md <span class="tree-comment"># 编码风格和约束</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp; │&nbsp;&nbsp; ├──</span> design-checklist.md <span class="tree-comment"># 设计评审检查项</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp; │&nbsp;&nbsp; ├──</span> unit-test.md <span class="tree-comment"># 单元测试标准</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp; │&nbsp;&nbsp; ├──</span> integration-test.md <span class="tree-comment"># 集成测试标准</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp; │&nbsp;&nbsp; └──</span> <span class="tree-folder standard-color">dfx/</span> <span class="tree-comment"># DFX 非功能性要求</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp; │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──</span> security.md <span class="tree-comment"># 安全编码和设计要求</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp; │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └──</span> reliability.md <span class="tree-comment"># 容错和灾备</span></div>
      <div class="tree-spacer" aria-hidden="true">&nbsp;</div>
      <div><span class="tree-guide">│&nbsp;&nbsp; ├──</span> <span class="tree-folder spec-color">specs/</span> <span class="tree-comment"># 全量规格与设计</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp; │&nbsp;&nbsp; ├──</span> spec.md <span class="tree-comment"># 业务规格说明</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp; │&nbsp;&nbsp; └──</span> design.md <span class="tree-comment"># 技术设计说明</span></div>
      <div class="tree-spacer" aria-hidden="true">&nbsp;</div>
      <div><span class="tree-guide">│&nbsp;&nbsp; └──</span> <span class="tree-folder design-color">changes/</span> <span class="tree-comment"># 每个 feature 一个子目录</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └──</span> <span class="tree-folder design-color">feature-vet-crud/</span> <span class="tree-comment"># 示例：兽医 CRUD 功能</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──</span> proposal.md <span class="tree-comment"># 提案</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──</span> delta-spec.md <span class="tree-comment"># 增量规格</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──</span> delta-design.md <span class="tree-comment"># 增量设计</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ├──</span> tasks.md <span class="tree-comment"># 任务分解</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └──</span> <span class="tree-folder design-color">test/</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; └──</span> delta-testcases.md <span class="tree-comment"># 增量测试用例</span></div>
      <div class="tree-spacer" aria-hidden="true">&nbsp;</div>
      <div><span class="tree-guide">├──</span> <span class="tree-file">AGENTS.md</span> <span class="tree-comment"># 项目指令：技术栈、结构、工作流、编码原则</span></div>
      <div><span class="tree-guide">├──</span> pom.xml <span class="tree-comment"># Maven 构建配置</span></div>
      <div><span class="tree-guide">└──</span> src/ <span class="tree-comment"># 源代码</span></div>
    </div>
    <div class="sdd-repo-foot"><span>全量基线放在 specs/</span><b>单个需求的增量产物放在 changes/</b></div>
  </section>
</div>
<!--
讲师提示：右侧是课程采用的目标目录结构；如果演示仓库尚未初始化，请先说明这是 /sdd:init 将要建立并由团队继续校准的文档骨架。
讲解顺序：先执行 /sdd:init，再指出 terms.md 与 service-context.md 提供公共上下文；接着区分 guidelines/ 的团队约束、specs/ 的全量基线，以及 changes/ 中按 feature 留存的提案、增量规格、设计、任务和测试用例。
PetClinic 示例：feature-vet-crud/ 对应兽医 CRUD 变更，便于把一次需求的决策和实现任务集中审查，同时不改写全量基线的历史。
-->
