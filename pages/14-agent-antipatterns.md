---
layout: default
class: lesson-slide antipattern-slide
---

<div class="lesson-heading"><div class="section-tag">04 · 局部改造</div><h1>新员工最常踩的 Agent 反模式</h1></div>
<BrandMark />
<PageNo current="12" />

<p class="lead anti-lead">Agent 可以生成 Diff，但不能替你承担需求判断、工程验收和合入责任。</p>

<div class="anti-columns">
  <section class="anti-group anti-scope">
    <header><small>TASK SCOPE</small><h2>任务边界</h2><span>先确认做什么</span></header>
    <article><b>01</b><div><h3>一句话直接开工</h3><p>“补齐 Vets CRUD”后，一次跨 Controller、页面和测试大改。</p><span>护栏｜先探索、列计划，再按可验收的小批次执行。</span></div></article>
    <article><b>02</b><div><h3>不读项目就套方案</h3><p>另造路由和交互，跳过 Owners 模式、仓库规则与领域约束。</p><span>护栏｜先读源码、测试和 ADR；把现有实现当事实来源。</span></div></article>
  </section>

  <section class="anti-group anti-judgment">
    <header><small>ENGINEERING JUDGMENT</small><h2>工程判断</h2><span>人必须能解释</span></header>
    <article><b>03</b><div><h3>看不懂也合入</h3><p>代码能编译，就不再核对业务意图、边界条件和失败路径。</p><span>护栏｜讲不清意图与风险的 Diff，不进入人工 Review。</span></div></article>
    <article><b>04</b><div><h3>为绿灯修改验收</h3><p>删除失败测试、放宽断言，或跳过多数据库差异。</p><span>护栏｜修根因；测试、静态扫描和人工审查不能互相替代。</span></div></article>
  </section>

  <section class="anti-group anti-security">
    <header><small>SECURITY &amp; SUPPLY CHAIN</small><h2>安全与供应链</h2><span>默认不可信</span></header>
    <article><b>05</b><div><h3>新依赖靠模型决定</h3><p>包名、版本和 API 未经 registry、维护状态与许可证核查。</p><span>护栏｜先复用现有依赖；新增项必须过来源、许可、漏洞三查。</span></div></article>
    <article><b>06</b><div><h3>权限与敏感信息全开</h3><p>粘贴 token 或客户数据，并允许 Agent 直推主干、执行敏感操作。</p><span>护栏｜获批工具 + 最小权限 + 隔离分支；敏感动作由人审批。</span></div></article>
  </section>
</div>

<div class="anti-takeaway"><strong>提交前 30 秒刹车</strong><span>范围是否变大？</span><span>测试是否被削弱？</span><span>是否新增依赖？</span><span>是否触及秘密或高权限？</span></div>

<!--
讲师备注｜资料核对日期：2026-07-18

核心讲法：
- 反模式不是“提示词写得不够专业”，而是把本应由工程师承担的判断、验收和授权交给 Agent。
- 用 Spring PetClinic 现场提问：如果 Agent 新增了一个与 Owners 不同的 Veterinarians 交互、删掉重复校验测试、又引入一个表单库，学员应该在哪一步叫停？
- 第 03 项的课堂验收可以很具体：请学员口述改动意图、影响路径、失败场景和回滚方式；说不清就回到源码与 Diff。

业界实践与页面取舍：
- GitHub 要求对 AI 生成代码执行功能检查、人工审查、测试、静态分析、安全与依赖检查；特别提醒幻觉 API、跳过或删除失败测试、可疑依赖和许可证问题。
- Claude Code 官方实践强调探索、计划、实现、提交的分阶段工作流，提供可执行验证条件，并在无关任务之间清理上下文。
- OWASP 2025 将敏感信息泄露、供应链风险和过度授权列为生成式 AI 应用的重要风险；对 Coding Agent 可落实为最小权限、数据边界与敏感动作审批。
- GitHub 对 Coding Agent 的风险缓解包括限制可写分支、保留分支保护与必需检查、人工合并、工具白名单、secret scanning 和审计日志。
- DORA 2025 把 AI 定义为组织能力的放大器；小批次、版本控制、用户导向、快速反馈和清晰的 AI 使用政策决定它放大好流程还是坏流程。

可在讨论中补充、但未塞进可见区的反模式：
- 影子 AI：使用个人账号或未批准工具处理公司代码与数据。
- 无痕交付：不记录关键假设、Agent 配置、验证结果与人工决策。
- 会话污染：在同一上下文叠加无关任务、旧日志和多次失败方案。
- 只与 AI 闭环：把 Agent 的自检当作独立审查，不向导师暴露自己无法判断的部分。
- 以代码量或任务完成数衡量产出：忽略用户结果、维护成本与变更稳定性。

来源：
- GitHub Docs, Review AI-generated code: https://docs.github.com/en/copilot/tutorials/review-ai-generated-code
- GitHub Docs, Responsible use of GitHub Copilot Chat: https://docs.github.com/copilot/responsible-use/chat-in-github
- GitHub Docs, Risks and mitigations for GitHub Copilot cloud agent: https://docs.github.com/en/enterprise-cloud@latest/copilot/concepts/agents/cloud-agent/risks-and-mitigations
- GitHub Docs, About GitHub Agentic Workflows: https://docs.github.com/en/copilot/concepts/agents/about-github-agentic-workflows
- Claude Code Docs, Best practices: https://code.claude.com/docs/en/best-practices
- OWASP GenAI Security Project, LLM02:2025 Sensitive Information Disclosure: https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/
- OWASP GenAI Security Project, LLM06:2025 Excessive Agency: https://genai.owasp.org/llmrisk/llm062025-excessive-agency/
- DORA, State of AI-assisted Software Development 2025: https://dora.dev/research/2025/dora-report/
- DORA, Working in small batches: https://dora.dev/capabilities/working-in-small-batches/
- DORA, User-centric focus: https://dora.dev/capabilities/user-centric-focus/
- NIST, AI RMF Generative AI Profile (NIST AI 600-1): https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
-->
