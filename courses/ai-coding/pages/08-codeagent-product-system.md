---
layout: default
class: lesson-slide codeagent-entry-slide
---

<div class="lesson-heading"><div class="section-tag">AI Coding</div><h1>CodeAgent 产品体系</h1></div>
<BrandMark />
<PageNo current="06" />

<p class="lead slide-subtitle codeagent-entry-lede">CodeAgent 提供 IDE 插件与 CLI 两种主要使用形态。</p>

<div class="codeagent-entry-grid">
  <article class="codeagent-entry-card ide-entry-card">
    <header><div><small>GUI · JETBRAINS IDEA / VS CODE</small><h3>IDE 插件</h3></div></header>
    <figure class="ide-agent-visual"><img src="/research/idea-ai-chat.gif" alt="IntelliJ IDEA 中打开 Java 代码的编辑器界面" /><img class="ide-agent-pane" src="/research/idea-agent-context.png" alt="IDE 内的 AI Chat 侧栏正在读取 Java 文件上下文" /></figure>
    <div class="codeagent-entry-copy"><p>在代码编辑区完成补全、解释、局部改写与 Diff 审阅；跨文件任务从侧边栏进入 Agent 对话。</p><div><span>代码补全</span><span>上下文问答</span><span>Agent 任务</span><span>Diff 审阅</span></div></div>
  </article>
  <article class="codeagent-entry-card cli2-entry-card">
    <header><div><small>TERMINAL · OPENCODE BASE</small><h3>CodeAgent CLI 2.x</h3></div></header>
    <figure><img src="/research/opencode-cli.png" alt="OpenCode 在终端中检索仓库并读取文件的界面" /></figure>
    <div class="codeagent-entry-copy"><p>在终端读取仓库、检索文件、编辑代码并执行命令；支持会话与模型切换。</p><div><span>仓库检索</span><span>文件修改</span><span>命令执行</span><span>会话切换</span></div></div>
  </article>
  <article class="codeagent-entry-card cli3-entry-card">
    <header><div><small>TERMINAL · CLAUDE CODE CLI BASE</small><h3>CodeAgent CLI 3.x</h3></div></header>
    <figure><img src="/research/claude-code-fable5-202607.jpg" alt="Claude Code CLI 在 PowerShell 中运行的终端界面，画面已裁去启动 Logo" /></figure>
    <div class="codeagent-entry-copy"><p>在终端按计划读取与修改文件、运行构建和测试，并用 Diff 与结果汇总完成验证。</p><div><span>Plan / 执行</span><span>文件修改</span><span>构建测试</span><span>Diff 验证</span></div></div>
  </article>
</div>

<div class="codeagent-entry-band"><strong>使用方式</strong><span>GUI 版本集成在 IDE 内，直接结合代码编辑、对话与 Diff 审阅</span><i></i><span>CLI 版本在终端运行，侧重仓库操作、命令执行与结果验证</span></div>

<!--
讲师备注｜界面材料来源：
- JetBrains AI Assistant in JetBrains IDEs: https://blog.jetbrains.com/idea/2023/06/ai-assistant-in-jetbrains-ides/
- OpenCode 官方仓库界面截图: https://github.com/anomalyco/opencode
- Claude Code CLI 界面截图来源: https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-rolls-out-claude-fable-5-but-its-available-for-a-limited-time/
-->
