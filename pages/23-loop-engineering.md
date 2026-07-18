---
layout: default
class: lesson-slide
---

<div class="section-tag">06 · 工程闭环</div>
# Loop Engineering：从问题发现到可合并 PR
<BrandMark />
<PageNo current="21" />

<p class="loop-practice-lead">GitHub 官方实践：Copilot 先发现并定义问题；接到 Issue 后，在独立环境中执行、验证、提交，Review 意见再触发下一轮。</p>

<div class="loop-practice-layout">
  <section class="loop-practice-workflow">
    <div class="loop-practice-case">
      <div class="loop-practice-case-title"><span>PetClinic · 示例 Issue</span><strong>#142 新增 Visit 时自动分配可用 Vet</strong></div>
      <div class="loop-practice-criteria"><span>同日不重复预约</span><span>无可用医生时显示错误</span><span>数据库约束与测试同步</span></div>
    </div>
    <div class="loop-practice-steps">
      <article><i>01</i><div><b>Discover</b><strong>发现问题</strong></div><p>扫描仓库，识别并排序技术债。</p><small>产物 · 优先级清单</small></article>
      <article><i>02</i><div><b>Define</b><strong>生成 / 接收 Issue</strong></div><p>补齐验收标准；由人或 Automation 分派。</p><small>产物 · 可验收 Issue</small></article>
      <article><i>03</i><div><b>Analyze</b><strong>建立计划</strong></div><p>读取规则，追踪 Owner、Visit、Vet 调用链。</p><small>产物 · 任务 Checklist</small></article>
      <article><i>04</i><div><b>Execute</b><strong>修改仓库</strong></div><p>同步 Service、Controller、Schema 与测试。</p><small>产物 · Diff + 新测试</small></article>
      <article><i>05</i><div><b>Verify</b><strong>运行验证</strong></div><p><code>./mvnw clean package</code>；失败则继续修正。</p><small>产物 · Build / Test 证据</small></article>
      <article><i>06</i><div><b>Deliver</b><strong>提交 PR</strong></div><p>持续推送 commits，完成后请求人工 Review。</p><small>产物 · 可审阅 Draft PR</small></article>
    </div>
    <div class="loop-practice-return"><span>人工反馈</span><code>@copilot 补充并发冲突测试，并修复失败</code><b>回到分析 → 实现 → 验证</b></div>
  </section>
  <aside class="loop-practice-evidence">
    <div class="loop-practice-evidence-head"><span>GitHub Copilot coding agent</span><strong>一次任务留下完整工程轨迹</strong></div>
    <figure><img src="/research/github-copilot-loop/agent-work-log.png" alt="GitHub Copilot coding agent 编辑文件并运行构建和测试的工作日志" /><figcaption><b>执行与验证</b><span>编辑文件，调用 build / test</span></figcaption></figure>
    <figure><img src="/research/github-copilot-loop/draft-pr.png" alt="GitHub Copilot coding agent 创建的 Draft Pull Request" /><figcaption><b>交付与审阅</b><span>分支、commits、Diff 汇入 Draft PR</span></figcaption></figure>
    <div class="loop-practice-thesis"><small>Agent 的工作单元</small><strong>问题 → 代码 → 证据 → PR → 反馈</strong><p>能力边界已经越过“生成一段代码”，进入可审查的软件交付流程。</p></div>
  </aside>
</div>

<!--
讲师提示：
- 本页采用 GitHub 官方教程“Using GitHub Copilot cloud agent to improve a project”的完整实践结构。教程先让 Copilot 扫描成熟项目、排序技术债并通过 /create-issue 起草问题，再由人确认和分派给 Copilot。
- 已有 Issue 默认由人分派；如需自动触发，要预先配置 Copilot cloud agent Automations，例如在 Issue opened 事件或定时任务上启动。不要讲成“Copilot 会随机自动领取 Issue”。
- Agent 接到任务后会创建独立开发环境、分支和 Draft PR，读取仓库规则，修改代码，运行 tests / linters，并持续推送 commits。人工在 PR 中使用 @copilot 提交修改意见，会触发下一轮执行。
- PetClinic #142 是课程映射示例，用于把官方流程落到 Visit 自动分配场景；右侧截图来自 GitHub 官方博客中的 CSV 项目示例，不是 PetClinic 的真实 PR。
- 核对日期：2026-07-19。
官方教程：https://docs.github.com/en/copilot/tutorials/cloud-agent/improve-a-project
官方工作机制：https://github.blog/ai-and-ml/github-copilot/assigning-and-completing-issues-with-coding-agent-in-github-copilot/
自动化说明：https://docs.github.com/en/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-on-github#running-copilot-cloud-agent-automatically-with-automations
截图出处：https://github.blog/news-insights/product-news/agents-panel-launch-copilot-coding-agent-tasks-anywhere-on-github/
-->
