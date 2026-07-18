---
layout: default
class: lesson-slide cli3-capability-slide
---

<div class="lesson-heading"><div class="section-tag">03 · CodeAgent</div><h1>CodeAgent CLI 3.x 能力速览</h1></div>
<BrandMark />
<PageNo current="08" />

<p class="lead cli3-lede">在终端里读取仓库、修改文件并运行工具；权限模式决定每一步是直接执行，还是先由你确认。</p>

<div class="cli3-overview">
  <section class="cli3-panel ability-panel">
    <header><small>CORE</small><h2>核心能力</h2></header>
    <div class="ability-list">
      <article><b>读</b><div><strong>理解仓库</strong><span>搜索文件、符号、调用链与项目规则</span></div></article>
      <article><b>改</b><div><strong>编辑代码</strong><span>新增或修改多个文件，按反馈继续修正</span></div></article>
      <article><b>跑</b><div><strong>调用工具</strong><span>执行 Shell、Git、构建、测试与脚本</span></div></article>
      <article><b>验</b><div><strong>检查结果</strong><span>读取报错、查看 Diff、重跑验证并汇总</span></div></article>
    </div>
    <div class="scene-box"><strong>常用场景</strong><div><span>解释代码</span><span>定位缺陷</span><span>开发功能</span><span>补充测试</span><span>批量改造</span><span>审查变更</span></div></div>
  </section>

  <section class="cli3-panel mode-panel">
    <header><small>PERMISSION MODES</small><h2>选择执行边界</h2><em>Shift + Tab 切换</em></header>
    <div class="mode-grid">
      <article class="mode-manual"><div><code>default</code><span>推荐起步</span></div><h3>Manual</h3><p>读操作可直接进行；编辑与命令按权限规则请求确认。</p></article>
      <article class="mode-plan"><div><code>plan</code><span>只分析</span></div><h3>Plan</h3><p>检索仓库并形成方案，不修改源码；适合先看影响面。</p></article>
      <article class="mode-edit"><div><code>acceptEdits</code><span>自动编辑</span></div><h3>Accept Edits</h3><p>工作区内的文件编辑自动批准，其他工具仍受权限规则约束。</p></article>
      <article class="mode-bypass"><div><code>bypassPermissions</code><span>高风险</span></div><h3>Bypass Permissions</h3><p>跳过权限提示与大多数检查；只在隔离容器或虚拟机中使用。</p></article>
    </div>
    <div class="mode-launch"><span>启动时指定</span><code>codeagent --permission-mode plan</code></div>
  </section>

  <section class="cli3-panel command-panel">
    <header><small>BUILT-IN</small><h2>常用内置命令</h2></header>
    <div class="command-grid">
      <span><code>/help</code><small>查看命令</small></span>
      <span><code>/model</code><small>切换模型</small></span>
      <span><code>/permissions</code><small>管理权限</small></span>
      <span><code>/plan</code><small>进入 Plan</small></span>
      <span><code>/diff</code><small>查看变更</small></span>
      <span><code>/compact</code><small>压缩上下文</small></span>
    </div>
    <div class="session-box">
      <strong>会话管理</strong>
      <div><code>/rename &lt;name&gt;</code><span>命名当前会话</span></div>
      <div><code>/resume</code><span>选择并切换会话</span></div>
      <div><code>/clear</code><span>开启干净的新会话</span></div>
    </div>
    <div class="resume-box">
      <strong>从命令行恢复</strong>
      <code>codeagent --continue</code><span>恢复当前目录最近会话</span>
      <code>codeagent --resume &lt;name|id&gt;</code><span>恢复指定会话</span>
    </div>
  </section>
</div>

<!--
讲师备注｜核对日期：2026-07-18
- CodeAgent CLI 3.x 基于 Claude Code CLI 构建；本页所列能力、权限模式与会话命令已纳入 CodeAgent CLI 3.x 的课程范围。命令前缀采用 CodeAgent CLI 的 `codeagent`。
- 权限模式语义参考：https://code.claude.com/docs/en/permission-modes
- 内置命令参考：https://code.claude.com/docs/en/commands
- CLI 启动与会话恢复参数参考：https://code.claude.com/docs/en/cli-reference
- 会话恢复工作流参考：https://code.claude.com/docs/en/common-workflows#resume-previous-conversations

讲解提示：初学者优先使用 default 或 plan。acceptEdits 只减少工作区内编辑确认，不等于放开全部命令。bypassPermissions 会显著扩大工具执行范围，只应在没有宿主机凭据、重要数据和外网副作用的隔离环境中使用。
-->
