---
layout: default
class: lesson-slide
---

<div class="section-tag">05 · 能力扩展</div>
# CodeHub CLI 接入
<BrandMark />
<PageNo current="19" />

<div class="split-48">
  <div class="terminal-card large placeholder-terminal"><div class="terminal-head"><i></i><i></i><i></i><span>codehub-cli · setup</span></div><div class="terminal-body"><b># 以下命令等待内部手册确认</b><span>$ &lt;install-command&gt;</span><span>$ &lt;auth-command&gt;</span><span>$ &lt;repo-check-command&gt;</span><span>$ &lt;mr-create-command&gt;</span><span>$ &lt;review-list-command&gt;</span></div></div>
  <div class="readiness-stack"><div><b>01</b><h3>安装</h3><p>来源、版本、升级方式、校验哈希</p></div><div><b>02</b><h3>鉴权</h3><p>Token Scope、存储位置、过期与撤销</p></div><div><b>03</b><h3>仓库权限</h3><p>Fork、推送、创建 MR、读取评论</p></div><div><b>04</b><h3>冒烟验证</h3><p>查询个人信息 → 查询仓库 → dry-run</p></div></div>
</div>

<div class="security-note"><b>安全红线</b><span>Token 不进 Prompt</span><span>不贴完整终端凭据</span><span>最小 Scope</span><span>失败日志先脱敏</span></div>
