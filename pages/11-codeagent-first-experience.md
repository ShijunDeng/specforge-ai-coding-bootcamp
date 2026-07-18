---
layout: default
class: lesson-slide veterinarian-task-slide
---

<div class="section-tag">04 · 发布任务</div>
# Veterinarians CRUD
<BrandMark />
<PageNo current="09" />

<p class="lead veterinarian-task-lede">为 Spring PetClinic 补齐兽医信息维护能力，交付一组可直接演示的页面。</p>

<div class="veterinarian-task-layout">
  <section class="veterinarian-brief">
    <div class="veterinarian-brief-label"><small>RELEASE TASK</small><span>发布任务</span></div>
    <h2>支持 Veterinarians 的完整 CRUD</h2>
    <p>用户可以查看兽医信息，并在界面中完成新增、编辑和删除。页面风格参考现有 Owners 模块。</p>
    <div class="veterinarian-scope">
      <article><b>01</b><div><strong>查看</strong><span>列表与详情</span></div></article>
      <article><b>02</b><div><strong>新增</strong><span>创建兽医信息</span></div></article>
      <article><b>03</b><div><strong>编辑</strong><span>更新已有信息</span></div></article>
      <article><b>04</b><div><strong>删除</strong><span>移除兽医记录</span></div></article>
    </div>
  </section>

  <section class="veterinarian-preview">
    <div class="veterinarian-browser-bar"><i></i><i></i><i></i><span>localhost / veterinarians</span></div>
    <div class="veterinarian-ui">
      <header><div><small>SPRING PETCLINIC</small><h3>Veterinarians</h3></div><button>＋ Add</button></header>
      <div class="veterinarian-ui-body">
        <div class="veterinarian-list">
          <div class="is-active"><b>James Carter</b><span>Surgery</span><em>›</em></div>
          <div><b>Helen Leary</b><span>Radiology</span><em>›</em></div>
          <div><b>Linda Douglas</b><span>Dentistry</span><em>›</em></div>
        </div>
        <div class="veterinarian-detail">
          <small>VETERINARIAN</small><h4>James Carter</h4>
          <dl><div><dt>Specialty</dt><dd>Surgery</dd></div><div><dt>Status</dt><dd><span>Active</span></dd></div></dl>
          <div class="veterinarian-actions"><button>Edit</button><button>Delete</button></div>
        </div>
      </div>
    </div>
  </section>
</div>

<div class="veterinarian-deliverable"><strong>交付结果</strong><span>列表</span><i>→</i><span>详情</span><i>→</i><span>新增 / 编辑 / 删除</span></div>
