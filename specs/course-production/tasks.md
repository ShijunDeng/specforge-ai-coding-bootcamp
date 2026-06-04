# Tasks: 课程材料维护任务清单

## 首版建设

- [x] 从 Excel 提纲提取课程模块、时长、环节和 PPT 页设计意图。
- [x] 将课程扩展为结构化 `specs/course.yaml`。
- [x] 为每页补充核心判断、要点、视觉组件、takeaway 和讲师备注。
- [x] 补充随堂练习、大作业和评分 Rubric。
- [x] 提供 Slidev 生成脚本和规格校验脚本。
- [x] 补充本目录下的 Proposal、Spec、Design、Tasks。

## 讲师课前维护

- [ ] 确认内部工具名称、入口、授权流程是否有变化。
- [ ] 确认 spring-petclinic 与 dolphin-scheduler 的演示分支可运行。
- [ ] 确认 CodeAgent、AgentCenter、MCP、Skill、CodeWiki 的账号权限。
- [ ] 用假 Token 和假 AK/SK 准备演示材料。
- [ ] 运行 `npm run check` 并预览生成课件。
- [ ] 根据最新平台界面更新讲师备注，而不是手工改生成物。

## 第一课授课任务

- [ ] 开场说明课程目标和课堂纪律。
- [ ] 演示精准上下文投喂和采纳前 Review。
- [ ] 完成 Owner 模糊查询演示和 UT Skill 演示。
- [ ] 组织 Pet 疫苗字段练习，收集测试通过证据。
- [ ] 演示 MCP 建 MR、机器检视和修复 Skill。
- [ ] 组织查改闭环练习，收集 MR 链接和检视意见。

## 第二课授课任务

- [ ] 复盘第一课作业共性问题。
- [ ] 讲清 Vibe Coding 和 SDD 的适用边界。
- [ ] 演示用 CodeWiki 查询存量项目规范。
- [ ] 演示生成 Proposal、Spec、Design、Tasks 并打回修订。
- [ ] 组织 SMN 四阶文档练习，重点检查 AK/SK 安全设计。
- [ ] 要求学员互评 Tasks 是否细到类名、配置文件和验收命令。

## 课后验收任务

- [ ] 收集学员 MR、四阶文档和测试证据。
- [ ] 使用 `assessment.criteria` 统一评分。
- [ ] 汇总常见失败类型，更新 FAQ 或讲师备注。
- [ ] 将优秀提示词、优秀 Tasks 和典型反例脱敏沉淀到 `docs/examples/`。
- [ ] 把问卷反馈转成下一版 Spec 任务。

## 变更验收

每次改课件材料必须完成：

- [ ] `npm run validate`
- [ ] `npm run generate`
- [ ] `npm run build`
- [ ] 人工预览关键页面：封面、课程地图、第一课演示、第二课 SDD、作业 Rubric
- [ ] 确认 Git diff 中没有生成物、真实密钥或无关文件
