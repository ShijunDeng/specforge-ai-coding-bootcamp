---
layout: default
class: lesson-slide codespec-install-slide
---

<div class="lesson-heading"><div class="section-tag">规格驱动开发</div><h1>两步完成 CodeSpec 安装</h1></div>
<BrandMark />
<PageNo current="27" />

<p class="slide-subtitle codespec-install-lead">先让 npm 找到安装包，再进入目标仓库初始化 CodeSpec 能力。</p>

<div class="codespec-install-flow">
  <section class="codespec-install-step codespec-install-step--npm">
    <header><span>01</span><div><small>准备 CLI</small><h2>设置 npm 源并安装</h2></div><em>全局执行一次</em></header>
    <div class="codespec-terminal" aria-label="npm 设置源与安装 CodeSpec 的命令">
      <div class="codespec-terminal-bar"><i></i><i></i><i></i><span>Terminal</span></div>
      <div class="codespec-command"><b>$</b><code>npm config set strict-ssl false</code></div>
      <div class="codespec-command"><b>$</b><code>npm config set @cloud:registry https://maven.cloudartifact.lfg.dragon.tools.huawei.com/artifactory/api/npm/npm-cbu-common</code></div>
      <div class="codespec-command"><b>$</b><code>npm config set registry https://cmc.centralrepo.rnd.huawei.com/artifactory/api/npm/npm-central-repo/</code></div>
      <div class="codespec-command"><b>$</b><code>npm install @cloud/sdd-codespec -g</code></div>
    </div>
    <div class="codespec-step-notes"><span>切换 npm 镜像源</span><span>安装 <code>codespec</code> CLI</span></div>
    <div class="codespec-install-check"><div><small>安装完成后检查</small><code>$ codespec --version</code></div><span>终端能识别命令即可继续</span></div>
  </section>

  <div class="codespec-install-arrow" aria-hidden="true"><span>然后</span><b>→</b></div>

  <section class="codespec-install-step codespec-install-step--init">
    <header><span>02</span><div><small>接入项目</small><h2>在仓库根目录初始化</h2></div><em>每个项目执行</em></header>
    <div class="codespec-terminal codespec-terminal--focus" aria-label="CodeSpec 初始化命令">
      <div class="codespec-terminal-bar"><i></i><i></i><i></i><span>spring-petclinic</span></div>
      <div class="codespec-command"><b>$</b><code>codespec init</code></div>
    </div>
    <div class="codespec-init-result">
      <small>按初始化向导选择要接入的能力</small>
      <div><span><b>&gt;_</b>Command</span><span><b>S</b>Skill</span><span><b>CLI</b>命令行</span><span><b>⚙</b>项目配置</span></div>
    </div>
  </section>
</div>

<div class="codespec-install-takeaway"><b>执行顺序</b><span>安装 CLI</span><i>→</i><span>进入目标仓库</span><i>→</i><span>运行 <code>codespec init</code></span></div>

<!--
讲师提示：先带学员执行左侧四条 npm 命令，用 codespec --version 确认 CLI 可用，再进入 Spring PetClinic 仓库运行 codespec init。初始化阶段重点演示如何按向导接入 Command、Skill、CLI 与项目配置。

核对记录（2026-07-19）：课程使用内部 npm 源安装 @cloud/sdd-codespec；现场地址与初始化选项以内部操作手册为准。
-->
