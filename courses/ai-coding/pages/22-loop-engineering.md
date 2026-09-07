---
layout: default
class: lesson-slide
---

<div class="lesson-heading"><div class="section-tag">AI Coding</div><h1>Loop Engineering 实践：Issue 驱动的修复闭环</h1></div>
<BrandMark />
<PageNo current="20" />

<p class="slide-subtitle loop-insight-lead">GitHub 工程师 Scott Lusk 外出途中发现演示网站报错。他用 GitHub Mobile 提交 Issue 并分派给 Copilot，随后通过预览分支验收修复。</p>

<div class="loop-insight-case">
  <article class="loop-insight-trigger">
    <header><span>案例 · 紧急修复</span><b>01 · 提交 Issue</b></header>
    <h2>演示开始前，网站出现报错</h2>
    <p>Scott Lusk 当时不在电脑旁。他用 GitHub Mobile 写下报错现象，关联可能引入问题的 PR，并把 Issue 分派给 Copilot。</p>
    <figure class="loop-insight-shot loop-insight-shot-assign">
      <img src="/research/github-copilot-loop/urgent-fix-assign.png" alt="GitHub Issue 页面中的 Assign to Copilot 按钮" />
      <figcaption><strong>Issue 写清修复范围</strong><span>报错现象 · 关联 PR · 验收结果</span></figcaption>
    </figure>
  </article>

  <section class="loop-insight-evidence">
    <div class="loop-insight-result-head">
      <div><span>02 · 执行记录</span><strong>修改代码、运行检查、提交 PR</strong></div>
      <aside><b>6m 21s</b><span>Ready for review</span></aside>
    </div>
    <figure class="loop-insight-shot loop-insight-shot-session">
      <img src="/research/github-copilot-loop/urgent-fix-six-minute-pr.png" alt="Copilot Coding Agent 会话显示 6 分 21 秒后进入 Ready for review" />
      <figcaption><strong>会话记录可查看</strong><span>读取仓库 · 定位问题 · 修改代码 · 运行检查</span></figcaption>
    </figure>
    <figure class="loop-insight-shot loop-insight-shot-review">
      <img src="/research/github-copilot-loop/urgent-fix-review-loop.png" alt="GitHub PR 提示可通过 @copilot 评论要求继续修改" />
      <figcaption><strong>预览失败后继续修改</strong><span>在评论中使用 <code>@copilot</code> 启动下一轮</span></figcaption>
    </figure>
  </section>
</div>

<div class="loop-insight-model">
  <div class="loop-insight-model-label"><span>修复流程</span><strong>每一步都有记录</strong></div>
  <div class="loop-insight-nodes" aria-label="Issue 到 PR 的修复循环">
    <span><b>Issue</b><small>范围与验收条件</small></span><i>→</i>
    <span><b>Agent Session</b><small>实现与测试日志</small></span><i>→</i>
    <span><b>Pull Request</b><small>Diff、Commit、CI</small></span><i>→</i>
    <span><b>Human Review</b><small>批准或要求修改</small></span><em>↺</em>
  </div>
  <div class="loop-insight-proof"><span>GitHub Billing 团队自述</span><b>数周零散推进</b><i>→</i><b>几分钟写 Issue + 几小时审阅迭代</b></div>
</div>

<div class="loop-insight-takeaway"><strong>何时适用</strong><span>优先处理范围小、验收条件明确、能用测试或预览确认结果的修复；工程师负责复核结果并决定是否合并。</span></div>

<!--
讲师提示：
- 本页使用 GitHub 的公开故障案例，不替换为 PetClinic 或课程中的其他工具链案例。
- 案例来自 GitHub 工程师 Scott Lusk：演示开始前网站报错，他在外出途中用 GitHub Mobile 新建 Issue，关联可能引入问题的 PR，并将 Issue 分派给 Copilot coding agent。官方文章记录，Copilot 在 6 分钟多一点后请求 PR Review；截图中的会话状态为 “Ready for review · 6m 21s”。工程师从手机审阅，通过 preview branch 验证，批准后由既有 GitHub Actions 部署。此数字只描述该次经历，不代表通用处理速度。
- GitHub Billing 团队公开的任务包括提升测试覆盖、替换依赖、统一错误处理、减少不必要的前端 API 调用和删除死代码。团队自述，处理节奏从数周的零散推进变为几分钟写 Issue、几小时 Review 与迭代；这不是独立基准测试。
- 页面展示的流程是：Issue 明确范围，Agent Session 执行并留下日志，PR 汇集 Diff、Commit、测试和 CI，工程师通过 Review 批准或用 @copilot 要求继续修改。不要讲成“自动合并”。
- GitHub Billing 团队建议把任务拆成可消化的小块；过大的 Issue 可能产生涉及 100 多个文件的 PR，增加 Review 成本。复杂业务逻辑和架构权衡仍由工程师负责。
- 术语核对：GitHub 在 2026-04-01 将 Copilot coding agent 更名为 Copilot cloud agent；本页沿用案例发生时及用户熟悉的 “Coding Agent”，讲解时可补充现名。
- 核对日期：2026-07-19。

官方案例与素材：
- 手机委派、6 分钟 PR、预览验证与批准部署：https://github.blog/developer-skills/github/completing-urgent-fixes-anywhere-with-github-copilot-coding-agent-and-mobile/
- GitHub Billing 团队持续消化技术债：https://github.blog/ai-and-ml/github-copilot/how-the-github-billing-team-uses-the-coding-agent-in-github-copilot-to-continuously-burn-down-technical-debt/
- Issue 分派、Session、PR、Review 的完整机制：https://github.blog/ai-and-ml/github-copilot/assigning-and-completing-issues-with-coding-agent-in-github-copilot/
- PR 中使用 @copilot 继续修改：https://github.blog/changelog/2026-03-24-ask-copilot-to-make-changes-to-any-pull-request/
- Copilot cloud agent 更名与当前工作形态：https://github.blog/changelog/2026-04-01-research-plan-and-code-with-copilot-cloud-agent/
-->
