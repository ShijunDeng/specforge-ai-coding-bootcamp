# AGENTS.md

本文件定义自动化编码代理在本仓库中的长期工作约定。保持修改聚焦、可验证，并以课程 Spec 为唯一真实来源。

## 真实来源

- `specs/course.yaml` 定义课程元数据、版本、模块顺序、课时、deck、练习与评分规则。
- `specs/modules/*.md` 定义逐页内容、讲师备注、活动和视觉约束。
- `specs/course-production/`、`specs/generation-spec.md` 和 `specs/constitution.md` 定义课程生产与生成规则。
- `build/`、`dist/`、PDF 和 PPTX 都是生成物。不要直接编辑；应修改 Spec 或生成器后重新生成。
- 课程版本只在 `specs/course.yaml` 中维护，不要只修改生成后的封面文字。

## 修改原则

- 优先复用现有模块结构、生成函数、样式类和校验逻辑，避免引入平行实现。
- 修改课程结构或内容时，同步检查模块课时、deck 顺序、练习、Rubric 和讲师备注是否一致。
- 修改生成规则时，同步更新相关规范、脚本和文档。
- 不新增依赖，除非任务明确需要；确需新增时说明用途并更新锁文件。
- 保留用户已有且与当前任务无关的修改，不重写或清理无关文件。

## 常用命令

```bash
npm install
npm run validate
npm run generate
npm run slides
npm run check
npm run export:pdf
npm run export:pptx
```

- 内容或 Spec 小改后至少运行 `npm run validate`。
- 生成器、样式、依赖或正式交付相关修改后运行 `npm run check`。
- 需要交付文件时，再运行 PDF/PPTX 导出并确认产物存在且非空。

## 视觉验证

- 样式修改必须在浏览器中检查生成后的完整 deck，不能只检查改动页。
- 至少确认：无页面溢出、无内容裁切、无失败图片、无控制台错误、无不可读文字或代码块。
- 特别检查代码块、标签、卡片和图示的前景色/背景色对比，以及不同内容长度下的容器尺寸。
- 视觉问题应修复在共享样式、生成器或 Spec 中，避免只对生成文件做一次性补丁。
- 本地预览需要提供给用户时，服务绑定 `0.0.0.0`，并返回可访问的局域网地址，而不是仅返回 `localhost`。

## 完成标准

- 真实来源已更新，相关生成物可由命令重新产生。
- 与修改范围相称的校验、构建和人工检查已经执行并读取结果。
- 不报告未经验证的成功；若存在未验证项或剩余风险，应明确列出。
- 提交前检查 `git diff` 和 `git status`，只纳入当前任务相关文件。

## Git 提交

- 提交标题说明修改意图，而不是简单复述文件变化。
- 提交正文按需要记录约束、取舍、风险和验证证据。
- 使用 Git trailer，例如：

```text
Confidence: high
Scope-risk: narrow
Tested: npm run validate
Not-tested: visual regression
```
