---
layout: default
class: lesson-slide
---

<div class="section-tag">06 · MR 闭环</div>
# 如何让 Agent 守规矩？
<BrandMark />
<PageNo current="22" />

<div class="rules-transform">
  <div class="scattered"><span>README</span><span>Wiki</span><span>口头约定</span><span>CI 脚本</span><span>MR 模板</span><strong>规范散落</strong></div>
  <div class="transform-arrow">→<small>提取稳定规则</small></div>
  <div class="agents-file"><code>AGENTS.md</code><p>构建命令<br/>测试要求<br/>代码边界<br/>提交 / MR 规范<br/>完成定义</p></div>
</div>

<div class="rule-quality"><div><h3>适合写入</h3><p>稳定、可执行、可验证、与目录范围相关的规则。</p></div><div><h3>不要写入</h3><p>临时需求、密钥、过长背景、无法执行的口号。</p></div><div><h3>仍需人工确认</h3><p>破坏性操作、权限扩张、架构分叉、发布决策。</p></div></div>

<div class="scope-line"><span>全局规则</span><i>＋</i><span>仓库根规则</span><i>＋</i><span>子目录覆盖</span><b>越靠近当前目录，约束越具体</b></div>

<!-- 官方资料：https://learn.chatgpt.com/docs/agent-configuration/agents-md -->
