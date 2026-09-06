---
layout: default
class: lesson-slide environment-slide
---

<div class="lesson-heading"><div class="section-tag">课程引导</div><h1>环境准备</h1></div>
<BrandMark />
<PageNo current="02" />

<div class="split-58">
  <div>
    <h2>开课前完成 5 项环境检查</h2>
    <div class="check-list">
      <div><b>✓</b><span><strong>CodeAgent CLI 3.x</strong><small>完成安装，建议使用 GLM-5 或更高版本的模型</small></span></div>
      <div><b>✓</b><span><strong>Git（如 Git Bash）</strong><small>完成安装，生成并在 CodeHub 配置 SSH 密钥</small></span></div>
      <div><b>✓</b><span><strong>内源 CodeHub</strong><small>配置访问密钥，并将 Spring PetClinic 样例工程 Fork 到个人空间</small></span></div>
      <div><b>✓</b><span><strong>JDK 17 + Maven</strong><small>在 Spring PetClinic 中完成编译并启动应用</small></span></div>
      <div><b>✓</b><span><strong>Node.js 24+</strong><small>安装 Node.js，并配置、验证 NPM 源</small></span></div>
    </div>
  </div>
  <div class="terminal-card">
    <div class="terminal-head"><i></i><i></i><i></i><span>baseline-check</span></div>
    <div class="terminal-body"><span>$ git --version</span><span>$ ssh-add -l</span><span>$ java -version</span><span>$ mvn -version</span><span>$ ./mvnw clean package</span><span>$ node --version</span><span>$ npm config get registry</span><i></i><b>SSH key: LOADED</b><b>BUILD SUCCESS</b><span>PetClinic: RUNNING</span><span>NPM registry: CONFIGURED</span></div>
    <div class="gate-pass">READY GATE <b>PASS</b></div>
  </div>
</div>

<div class="takeaway">进入实战前，以 PetClinic 能编译、能启动作为环境验收标准。</div>
