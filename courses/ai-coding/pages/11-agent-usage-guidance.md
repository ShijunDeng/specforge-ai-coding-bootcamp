---
layout: default
class: lesson-slide cli-brief-slide
---

<div class="lesson-heading"><div class="section-tag">AI Coding</div><h1>把一句话升级为可执行任务</h1></div>
<BrandMark />
<PageNo current="09" />

<p class="lead slide-subtitle cli-brief-lede">刚才的结果各不相同，是因为 Agent 在替你猜细节。先用 Plan 模式检查任务理解，再决定是否执行。</p>

<div class="cli-brief-layout">
  <section class="cli-prompt-card">
    <header><div><i></i><i></i><i></i></div><span>CodeAgent · Plan</span></header>
    <div class="cli-prompt-body">
      <div class="cli-prompt-line"><b>目标</b><p>规划 Veterinarians 的新增、详情、编辑和删除。</p></div>
      <div class="cli-prompt-line"><b>上下文</b><p>参考 Owners 的现有实现和前端样式，保持列表、详情、表单与操作反馈一致。</p></div>
      <div class="cli-prompt-line"><b>边界</b><p>不修改数据库结构，不新增依赖；必须处理表单校验和 Specialty。</p></div>
      <div class="cli-prompt-line"><b>验收</b><p>所有相关测试用例均通过。</p></div>
      <div class="cli-prompt-line"><b>输出</b><p>只输出涉及文件、步骤、测试和风险；此轮不要修改代码。</p></div>
    </div>
    <footer><span>一句话需求</span><i>→</i><strong>任务契约</strong><i>→</i><span>可审查 Plan</span></footer>
  </section>

  <aside class="prompt-methods">
    <div class="method-heading"><small>PROMPT FRAMEWORKS</small><h2>框架是检查清单，不是咒语</h2></div>
    <article class="method-card method-primary"><div><b>GCSE</b><em>Microsoft · Advania</em></div><p>Goal · Context · Source · Expectations</p><span>适合：需要依据项目材料完成的任务</span></article>
    <article class="method-card"><div><b>RISEN</b><em>Kyle Balmer</em></div><p>Role · Instructions · Steps · End Goal · Narrowing</p><span>适合：步骤顺序和限制很多的复杂任务</span></article>
    <article class="method-card"><div><b>RACE</b><em>SourceCodeStudio</em></div><p>Role · Action · Context · Expectation</p><span>适合：快速组织一般任务；没有显式来源</span></article>
    <article class="method-card"><div><b>CO-STAR</b><em>GovTech SG</em></div><p>Context · Objective · Style · Tone · Audience · Response</p><span>适合：文案、沟通和面向特定受众的内容</span></article>
    <div class="prompt-common-ground"><strong>任务定义三要素</strong><div><span><b>目标</b><small>要达成什么</small></span><i>＋</i><span><b>边界</b><small>不能越过什么</small></span><i>＋</i><span><b>验收标准</b><small>怎样算完成</small></span></div></div>
  </aside>
</div>

<!--
讲师备注｜资料核对日期：2026-07-19

核心讲法：
- 第 11 页故意只给一句话需求，让学生先观察结果分叉；本页不是否定一句话生成，而是把体验转成工程判断：哪些细节不该交给 Agent 猜。
- 现场先进入 Plan 模式，再粘贴左侧任务。让学生检查 Plan 是否覆盖 Owners 风格、Specialty、重复校验、三种数据库和测试；纠偏完成后再进入执行模式。
- 标签不是固定语法，写成自然语言也可以。重点是任务信息是否齐全、能否让执行者验证完成状态。

方法论与关联性：
- Microsoft 官方列出的四类提示要素是 Goal、Context、Source、Expectations，但官方页面没有使用 GCSE 这一名称。Advania 将这四项简称为 GCSE。
- 左侧案例不强制逐项复刻 GCSE：Owners 参考被并入上下文，Expectations 则展开为边界、验收和输出。新加坡政府设计系统的 Agent 提示建议也采用相近的 Goal、Context、Inputs、Rules、Output 五部分。
- Claude Code 官方实践强调：给出具体上下文、指向文件与现有模式、说明约束，并提供测试或其他验证方式。CodeAgent CLI 3.x 基于 Claude Code CLI，因此本页只迁移这些已纳入课程范围的终端任务输入原则。
- RISEN 由多份资料归功于 Kyle Balmer；不同资料仍存在 Input / Instructions 等展开差异。本页采用 Role / Instructions / Steps / End Goal / Narrowing。
- RISEN 显式强调 Steps 与 Narrowing，适合流程顺序和限制较多的任务；但在编码任务中写死实现步骤可能限制 Agent 探索，应优先写目标和边界。
- RACE 没有查到可信的统一首创来源，E 也存在 Expectation / Execute 两种常见解释。本页标签标注的是采用 Role / Action / Context / Expectation 这一展开的 SourceCodeStudio 2023 资料，不代表首创权归属。
- CO-STAR 来自 GovTech Prompt Engineering Playbook，Style、Tone、Audience、Response 对内容生成很有用；编码任务通常只需要其中的 Context、Objective 与 Response。
- 各框架拆分方式不同，但都需要回答三个工程问题：目标是什么、边界在哪里、用什么验收标准判断完成。

来源：
- Microsoft Support, Write a great prompt in Microsoft 365 Copilot: https://support.microsoft.com/en-us/microsoft-365-copilot/write-a-great-prompt-in-microsoft-365-copilot
- Advania, Writing effective prompts for Copilot for Microsoft 365: https://www.advania.co.uk/blog/data/writing-copilot-prompts/
- ClickUp, RISEN: 5 Steps to Build Context-Rich AI Prompts: https://clickup.com/general-resources/playbooks/ai-prompts
- SourceCodeStudio, AI Made Easy: https://sourcecodestudio.co.uk/wp-content/uploads/2023/11/5PromptFrameworks-eBook-1.pdf
- Claude Code Docs, Best practices: https://code.claude.com/docs/en/best-practices
- Claude Code Docs, Prompt library: https://code.claude.com/docs/en/prompt-library
- Singapore Government Design System, Prompt tips: https://v3.designsystem.tech.gov.sg/ai/prompt-tips
- GovTech Singapore, Prompt Engineering Playbook: https://www.developer.tech.gov.sg/products/collections/data-science-and-artificial-intelligence/playbooks/prompt-engineering-playbook-beta-v3.pdf
- AWS Builder Center, Considerations for effective prompt engineering and prompt frameworks: https://builder.aws.com/content/2mzFQJXPQaF5iATLz1KKAQd9JeT/considerations-for-effective-prompts-engineering-and-prompt-frameworks
-->
