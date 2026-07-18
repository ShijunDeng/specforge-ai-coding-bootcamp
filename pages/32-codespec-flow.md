---
layout: default
class: lesson-slide
---

<div class="section-tag">10 · CodeSpec</div>
# CodeSpec 典型流程
<BrandMark />
<PageNo current="30" />

<div class="codespec-flow">
  <div><b>1</b><span>初始化仓库</span><small>工具接入</small></div><i>→</i><div><b>2</b><span>生成项目基线</span><small>规则 / 规格 / 设计</small></div><i>→</i><div><b>3</b><span>提出需求</span><small>目标 / 范围</small></div><i>→</i><div><b>4</b><span>生成规格</span><small>行为 / 验收</small></div><i>→</i><div><b>5</b><span>技术设计</span><small>架构 / 兼容</small></div><i>→</i><div><b>6</b><span>任务拆分</span><small>依赖 / 顺序</small></div><i>→</i><div><b>7</b><span>实现</span><small>小步执行</small></div><i>→</i><div><b>8</b><span>验证</span><small>覆盖 / 证据</small></div>
</div>

<div class="review-gates"><div><b>G1</b><span>基线校准</span><p>生成结果必须回到真实代码核对</p></div><div><b>G2</b><span>规格审核</span><p>范围、边界与验收是否完整</p></div><div><b>G3</b><span>设计审核</span><p>兼容、迁移、测试策略是否成立</p></div><div><b>G4</b><span>交付审核</span><p>Diff、测试与规格是否一致</p></div></div>

<div class="placeholder-note">所有命令、状态名和审批动作：待 CodeSpec 内部流程联调后替换。</div>
