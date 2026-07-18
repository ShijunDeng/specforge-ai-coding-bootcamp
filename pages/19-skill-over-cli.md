---
layout: default
class: lesson-slide
---

<div class="section-tag">05 · 能力扩展</div>
# Skill over CLI
<BrandMark />
<PageNo current="17" />

<div class="compare-table">
  <div class="table-head"><span>判断维度</span><b>Skill over CLI</b><b>MCP</b></div>
  <div><span>已有能力</span><p>复用成熟命令与本地鉴权</p><p>封装服务端能力或远程 API</p></div>
  <div><span>发现方式</span><p>通过 Skill 描述与固定流程</p><p>协议级动态 tools / resources / prompts</p></div>
  <div><span>运行环境</span><p>开发机 / CI 中直接执行</p><p>本地 stdio 或远程 HTTP</p></div>
  <div><span>适用重点</span><p>团队本地研发流程、参数规范、失败处理</p><p>跨系统连接、多客户端复用、标准化集成</p></div>
  <div><span>主要成本</span><p>维护 CLI 兼容与文本解析</p><p>维护 Server、协议、安全与授权</p></div>
</div>

<div class="decision-banner"><b>优先 Skill over CLI</b>：已有稳定 CLI、流程发生在本地、需要复用现有鉴权。<strong>选择 MCP</strong>：需要跨系统、动态发现或多客户端共享。</div>
