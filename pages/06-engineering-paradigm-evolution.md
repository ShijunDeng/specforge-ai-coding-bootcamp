---
layout: default
class: lesson-slide paradigm-slide
---

<div class="lesson-heading"><div class="section-tag">02 · 技术演进</div><h1>软件工程范式演进</h1></div>
<BrandMark />
<PageNo current="04" />

<p class="lead paradigm-lede">机器承担的交付边界不断外扩，开发者的价值重心也从“如何实现”转向“定义什么、约束什么、如何验收”。</p>

<div class="era-story">
  <article class="era-stage human-led">
    <div class="era-visual"><img src="/research/vscode-editor-ui.png" alt="VS Code 标准编辑器界面" /><b>1.0</b><em>工具时代</em></div>
    <div class="era-copy"><small>HUMAN WRITES</small><h3>人逐行实现，工具确定性执行</h3><p><strong>输入：</strong>精确代码　<strong>机器：</strong>编译、检查、运行</p><div class="era-loop"><b>人</b><span>需求 → 设计 → 编码 → 调试</span></div><div class="era-products"><b>代表产品</b><span>IntelliJ IDEA</span><span>Eclipse</span><span>Visual Studio</span></div><footer><span>自动化单元</span><b>一个命令 / 一次构建</b></footer></div>
  </article>
  <i class="era-jump">→</i>
  <article class="era-stage copilot-led">
    <div class="era-visual"><img src="/research/github-copilot-next-edit.png" alt="GitHub Copilot 下一编辑建议" /><b>2.0</b><em>Copilot 时代</em></div>
    <div class="era-copy"><small>HUMAN DRIVES</small><h3>模型给建议，人串起执行链</h3><p><strong>输入：</strong>提示 + 局部上下文　<strong>机器：</strong>补全、解释、建议</p><div class="era-loop"><b>人机</b><span>提示 → 建议 → 选择 → 集成</span></div><div class="era-products"><b>代表产品</b><span>GitHub Copilot</span><span>Cursor</span><span>Codeium</span></div><footer><span>自动化单元</span><b>一个片段 / 一次编辑</b></footer></div>
  </article>
  <i class="era-jump">→</i>
  <article class="era-stage agent-led">
    <div class="era-visual"><img src="/research/claude-code-agent.jpg" alt="Claude Code 读取文件并编写测试的官方界面" /><b>3.0</b><em>Agent 时代</em></div>
    <div class="era-copy"><small>HUMAN SUPERVISES</small><h3>人定义目标与约束，Agent 执行并验证</h3><p><strong>输入：</strong>目标 + 仓库 + 约束　<strong>机器：</strong>分析、修改、测试</p><div class="era-loop"><b>Agent</b><span>计划 → 修改 → 测试 → 证据</span></div><div class="era-products"><b>代表产品</b><span>Claude Code</span><span>OpenAI Codex</span><span>Gemini CLI</span></div><footer><span>自动化单元</span><b>一个任务 / 一次交付</b></footer></div>
  </article>
</div>

<div class="responsibility-axis"><strong>开发者的价值重心</strong><div><span>实现正确</span><i></i><span>上下文正确</span><i></i><b>目标、边界与验收正确</b></div></div>

<!--
讲师备注｜界面材料来源：
- https://code.visualstudio.com/docs/editing/userinterface
- https://github.blog/ai-and-ml/github-copilot/evolving-github-copilots-next-edit-suggestions-through-custom-model-training/
- https://www.anthropic.com/claude-code
-->
