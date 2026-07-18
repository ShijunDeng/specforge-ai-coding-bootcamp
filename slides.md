---
theme: default
title: AI 辅助开发课程
info: |
  五页课程预览：课程地图、培训目标、课程组织与环境准备。
transition: slide-left
drawings:
  persist: false
---

<div class="cover-copy">

# AI 辅助开发课程

## 从 CodeAgent 工具链到规格驱动研发

<div class="cover-meta">
  <span>v2.0.0</span>
  <span>企业研发工程师</span>
  <span>五页精简版</span>
</div>

</div>

<div class="brand-card">
  <img src="/shendengju-logo.png" alt="神灯局 logo" />
  <strong>神灯局</strong>
  <span>点亮你的研发愿望，让AI成为团队神灯。</span>
</div>

<!--
开场说明：内部工具细节以现场资料为准，课件只承载确认过的定位和方法。
-->

---
layout: default
---

# 课程地图：五页精简版

<div class="brand-mark"><img src="/shendengju-logo.png" alt="" />神灯局</div>

<div class="agenda-card">

| 模块 | 时长 |
| --- | ---: |
| 课程引导 | 9 分钟 |

</div>

<div class="takeaway wide">
全程约 9 分钟：用五页完成课程目标、课堂组织和环境准备对齐。
</div>

---
layout: two-cols-header
class: content-slide
---

# 培训目标

<div class="brand-mark"><img src="/shendengju-logo.png" alt="" />神灯局</div>

::left::

## 把 AI 从“会回答”带进“可验证的研发交付”

本课程覆盖小需求开发、测试验证、MR 检视修复，以及复杂需求的 SDD 全流程。

- 掌握 CodeAgent 的基础使用与功能开发节奏
- 用测试、Diff 和 MR 检视结果验收 Agent 输出
- 理解 Skill、CLI、MCP 和项目规则的职责
- 完成一次端到端 SDD 模拟练习

::right::

<div class="flow-list">
  <div><b>01</b><span><strong>工具链</strong>理解与修改代码</span></div>
  <div><b>02</b><span><strong>MR 闭环</strong>测试、检视与修复</span></div>
  <div><b>03</b><span><strong>SDD</strong>规格、设计、任务与验证</span></div>
</div>

<div class="takeaway">最终产出不是一段回答，而是一条可复核的证据链。</div>

<!--
开场先说明内部工具细节以现场资料为准，课件只承载确认过的定位和方法。
-->

---
layout: two-cols-header
class: content-slide
---

# 课程组织

<div class="brand-mark"><img src="/shendengju-logo.png" alt="" />神灯局</div>

::left::

## 每个知识点都要经历讲解、演示、练习和抽查

讲师负责展示判断过程，学员负责留下计划、Diff、测试或文档等可检查产物。

- 讲解：建立概念和边界
- 演示：暴露输入、判断和失败修正
- 练习：独立完成任务并保留证据
- 抽查：展示过程、风险与未完成项

::right::

<div class="timeline-list">
  <div><i></i><span><strong>讲解</strong>给出方法与边界</span></div>
  <div><i></i><span><strong>演示</strong>观察计划与验证</span></div>
  <div><i></i><span><strong>练习</strong>独立交付证据</span></div>
  <div><i></i><span><strong>抽查</strong>复盘判断与风险</span></div>
</div>

<div class="takeaway">课堂评价看过程证据，不看谁更快生成代码。</div>

<!--
说明样例项目、课堂分组和抽查方式；具体仓库地址待现场通知。
-->

---
layout: two-cols-header
class: content-slide
---

# 环境准备

<div class="brand-mark"><img src="/shendengju-logo.png" alt="" />神灯局</div>

::left::

## 先把环境跑绿，再开始任何 Agent 操作

版本、权限和项目验证命令必须在课前确认；Token 只进入受控配置，不进入 Prompt 或截图。

若样例项目无法本地构建，先修复环境；不要让 Agent 在未知失败基线上继续修改代码。

::right::

<div class="check-grid">
  <div><b>✓</b>CodeAgent CLI 3.x 已就绪</div>
  <div><b>✓</b>JDK / Maven / Git 版本匹配</div>
  <div><b>✓</b>仓库权限可用</div>
  <div><b>✓</b>Token 已安全配置</div>
  <div><b>✓</b>CodeSpec 待内部资料确认</div>
  <div><b>✓</b>构建与测试基线通过</div>
</div>

<div class="takeaway">没有可重复的绿色基线，就没有可信的 Agent 验证结果。</div>

<!--
现场补充内部安装地址、版本号、仓库地址和权限申请入口，不提前写入公开课件。
-->
