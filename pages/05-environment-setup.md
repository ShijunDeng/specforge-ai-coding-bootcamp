---
layout: default
class: lesson-slide
---

<div class="section-tag">01 · 课程引导</div>
# 环境准备
<BrandMark />
<PageNo current="03" />

<div class="split-58">
  <div>
    <h2>开课前完成“一次绿色基线”</h2>
    <div class="check-list">
      <div><b>✓</b><span><strong>CodeAgent CLI 3.x</strong> 可启动、可读取仓库</span></div>
      <div><b>✓</b><span><strong>JDK / Maven / Git</strong> 版本与项目要求一致</span></div>
      <div><b>✓</b><span><strong>仓库权限</strong> 可拉取、可推送个人 Fork</span></div>
      <div><b>✓</b><span><strong>Token</strong> 进入受控配置，不进入 Prompt / 截图</span></div>
      <div><b>✓</b><span><strong>CodeSpec</strong> 安装与版本待内部手册确认</span></div>
      <div><b>✓</b><span><strong>构建 / 测试</strong> 在未修改代码时已通过</span></div>
    </div>
  </div>
  <div class="terminal-card">
    <div class="terminal-head"><i></i><i></i><i></i><span>baseline-check</span></div>
    <div class="terminal-body"><span>$ java -version</span><span>$ mvn -version</span><span>$ git status</span><span>$ ./mvnw test</span><i></i><b>BUILD SUCCESS</b><span>Tests: green</span><span>Workspace: clean</span></div>
    <div class="gate-pass">READY GATE <b>PASS</b></div>
  </div>
</div>

<div class="takeaway">先修复环境，再让 Agent 改代码；未知失败基线会污染后续所有判断。</div>
