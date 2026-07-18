---
layout: default
class: lesson-slide
---

<div class="section-tag">06 · MR 闭环</div>
# 把提交要求写进 AGENTS.md
<BrandMark />
<PageNo current="22" />

<p class="agents-rule-lead">如果每次提交 MR 都要重贴同一套 commit message 规则，规则还没有进入工程系统。</p>

<div class="agents-rule-story">
  <section class="agents-rule-repeat" aria-label="每次任务重复粘贴相同提交要求">
    <div class="agents-rule-caption"><span>每次新任务</span><b>复制 × 3</b></div>
    <div class="agents-rule-prompt agents-rule-prompt--back"><small>修复 Visit 查询</small><code>提交时请遵守以下 8 条……</code></div>
    <div class="agents-rule-prompt agents-rule-prompt--middle"><small>新增 Veterinarian 页面</small><code>提交时请遵守以下 8 条……</code></div>
    <div class="agents-rule-prompt agents-rule-prompt--front"><small>创建 MR</small><code>提交时请遵守以下 8 条……</code><strong>又要粘贴一遍</strong></div>
  </section>
  <div class="agents-rule-transfer"><span>→</span><small>沉淀一次</small></div>
  <section class="agents-rule-file" aria-label="AGENTS.md 中的提交规则示例">
    <div class="agents-rule-filebar"><i></i><i></i><i></i><code>AGENTS.md</code><em>OPEN FORMAT · MARKDOWN</em></div>
    <div class="agents-rule-code"><span class="agents-rule-comment">## Commit Protocol</span><p><b>-</b> 首行解释 <mark>why</mark>，不复述 diff</p><p><b>-</b> 记录 <mark>Constraint / Rejected</mark></p><p><b>-</b> 记录 <mark>Tested / Not-tested</mark></p><p><b>-</b> 提交前运行 <mark>./mvnw test</mark></p></div>
    <div class="agents-rule-filefoot"><span>随仓库版本化</span><span>支持该格式的 Agent 按作用域读取</span></div>
  </section>
</div>

<div class="agents-rule-practices">
  <article><span class="agents-rule-icon">01</span><div><h3>写稳定规则</h3><p>构建与测试命令、代码边界、提交 / MR 要求、完成定义。</p></div></article>
  <article><span class="agents-rule-icon">02</span><div><h3>按目录分层</h3><p><code>/AGENTS.md</code> 管全仓库；子目录文件补充局部规则，离目标文件更近者优先。</p></div></article>
  <article><span class="agents-rule-icon">03</span><div><h3>让规则可验证</h3><p>写清命令、条件与证据；临时需求、密钥和无法执行的口号不要放入。</p></div></article>
</div>

<div class="agents-rule-guardrail"><span><b>AGENTS.md</b> 告诉 Agent 怎么写</span><i>＋</i><span><b>commit-msg / CI</b> 阻断不合规提交</span><strong>关键规则采用“指导 + 门禁”两层</strong></div>

<!--
讲师串场：先演示让 Agent 创建一次提交，并现场粘贴完整 commit message 要求。随后问学员：“下一个 MR 还要再贴一次吗？”再切到本页，用 AGENTS.md 把重复提示改造成仓库规则。

核对日期：2026-07-19。
资料 1：AGENTS.md 官方规范，https://agents.md/
- Commit message / PR guidelines 属于适合写入的项目规则。
- AGENTS.md 是普通 Markdown，没有强制字段；大型仓库可按子目录放置，离目标文件最近的规则优先，显式对话指令覆盖文件规则。
- 应把它作为持续更新的 living documentation，而不是一次性提示词。
资料 2：GitHub Copilot 官方文档，https://docs.github.com/en/copilot/concepts/agents/code-review#choosing-between-custom-instructions-agentsmd-and-skills
- GitHub 将 AGENTS.md 定位为跨 Agent 共享、自动生效的常驻仓库约定；skills 更适合按任务触发的流程。
资料 3：GitHub Copilot 官方文档，https://docs.github.com/en/copilot/how-tos/configure-custom-instructions-in-your-ide/add-repository-instructions-in-your-ide
- 可在仓库多处放置 AGENTS.md；Copilot 工作时，目录树中最近的文件优先。
资料 4：Git 官方 githooks 文档，https://git-scm.com/docs/githooks
- commit-msg hook 可检查提交信息，并通过非零退出码拒绝提交。
资料 5：commitlint 官方 CI 指南，https://commitlint.js.org/guides/ci-setup
- commitlint 可在 CI 中检查 MR / PR 的提交信息，作为指令之外的强制门禁。
-->
