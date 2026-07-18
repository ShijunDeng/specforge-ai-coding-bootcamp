---
layout: default
class: lesson-slide
---

<div class="section-tag">11 · 全量设计</div>
# 从现有代码仓初始化 SDD
<BrandMark />
<PageNo current="33" />

<p class="sdd-init-lead">用一条命令启动逆向分析，把分散在代码、测试与配置中的事实整理成可复核的设计基线。</p>
<div class="sdd-init-layout">
  <section class="sdd-init-process" aria-label="SDD 初始化流程">
    <div class="sdd-command-card">
      <div class="sdd-terminal-bar"><span></span><span></span><span></span><b>在仓库根目录执行</b></div>
      <div class="sdd-command"><span>$</span><strong>/sdd/init</strong></div>
      <p>扫描存量实现，建立第一版全量设计上下文</p>
    </div>
    <div class="sdd-reverse-flow">
      <div class="sdd-source-card">
        <div class="sdd-source-icon">&lt;/&gt;</div>
        <div><small>证据输入</small><b>现有代码仓</b><p>代码 · 测试 · Schema · 配置</p></div>
      </div>
      <div class="sdd-flow-arrow"><span>逆向分析</span><i></i></div>
      <div class="sdd-artifact-grid">
        <div class="sdd-artifact spec"><small>WHAT</small><b>全量规格</b><p>能力、场景、规则与外部行为</p><div class="sdd-artifact-files"><span>system.md</span><span>domains/*.md</span></div><em>specs/</em></div>
        <div class="sdd-artifact design"><small>HOW</small><b>全量设计</b><p>架构、领域模型、接口与数据</p><div class="sdd-artifact-files"><span>architecture.md</span><span>interfaces.md</span></div><em>design/</em></div>
        <div class="sdd-artifact standard"><small>GUARDRAIL</small><b>工程规范</b><p>协作约束、编码与测试要求</p><div class="sdd-artifact-files"><span>coding.md</span><span>testing.md</span></div><em>standards/</em></div>
      </div>
    </div>
  </section>
  <section class="sdd-repo-panel" aria-label="初始化后的仓库目录示意">
    <div class="sdd-repo-head"><div><small>OUTPUT</small><b>初始化后的仓库</b></div><span>目录示意</span></div>
    <div class="sdd-tree" role="img" aria-label="PetClinic 仓库中规格、设计和规范文件的组织路径示意">
      <div><span class="tree-root">spring-petclinic/</span></div>
      <div><span class="tree-guide">├─</span> <span class="tree-folder">.sdd/</span></div>
      <div><span class="tree-guide">│&nbsp; ├─</span> <span class="tree-folder spec-color">specs/</span></div>
      <div><span class="tree-guide">│&nbsp; │&nbsp; ├─</span> system.md</div>
      <div><span class="tree-guide">│&nbsp; │&nbsp; └─</span> domains/owners.md</div>
      <div><span class="tree-guide">│&nbsp; ├─</span> <span class="tree-folder design-color">design/</span></div>
      <div><span class="tree-guide">│&nbsp; │&nbsp; ├─</span> architecture.md</div>
      <div><span class="tree-guide">│&nbsp; │&nbsp; ├─</span> domain-model.md</div>
      <div><span class="tree-guide">│&nbsp; │&nbsp; └─</span> interfaces.md</div>
      <div><span class="tree-guide">│&nbsp; └─</span> <span class="tree-folder standard-color">standards/</span></div>
      <div><span class="tree-guide">│&nbsp;&nbsp;&nbsp;&nbsp; ├─</span> coding.md</div>
      <div><span class="tree-guide">│&nbsp;&nbsp;&nbsp;&nbsp; └─</span> testing.md</div>
      <div><span class="tree-guide">├─</span> <span class="tree-file">AGENTS.md</span></div>
      <div><span class="tree-guide">├─</span> src/</div>
      <div><span class="tree-guide">└─</span> pom.xml</div>
    </div>
    <div class="sdd-repo-foot"><span>设计资产随代码版本化</span><b>先生成，再对照真实实现校准</b></div>
  </section>
</div>
<!--
讲师提示：右侧目录仅用于说明组织方式，不代表 Spring PetClinic 当前已经包含这些文件。
讲解顺序：先执行 /sdd/init，再说明工具从代码、测试、Schema 与配置中提取事实，最后逐一介绍全量规格、全量设计和工程规范三类产物。
-->
