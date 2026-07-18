---
name: humanize-slide-copy
description: Rewrite and audit Chinese presentation copy to remove generic AI voice, Codex/GPT self-reference, empty hype, canned transitions, and unsupported claims. Use whenever creating or updating titles, subtitles, cards, diagrams, captions, takeaways, or presenter notes in this Slidev deck.
---

# Humanize Slide Copy

Make every sentence sound like a knowledgeable instructor speaking to developers, not a model describing its own output.

## Workflow

1. State the one concrete claim the audience should remember.
2. Write with an explicit subject, action, object, constraint, and result where relevant.
3. Replace abstractions with a real workflow, example, interface, command, artifact, or sourced fact.
4. Delete duplicate explanation, ceremonial introductions, and summary sentences that add no information.
5. Read the copy aloud; shorten anything that sounds like a report, advertisement, or chatbot answer.

## Remove Model Voice

- Never write “作为 AI / Codex / GPT”“我将为你”“让我们一起”“本页将介绍” or similar self-referential narration.
- Avoid canned contrasts such as “不仅……更……”“从……到……的华丽转身”“这不仅是一场技术变革”. Use a direct causal statement instead.
- Avoid empty hype: “全面赋能”“颠覆式创新”“智能化升级”“强大能力”“极大提升”“无限可能”“最佳实践” unless the slide supplies measurable evidence.
- Avoid stacked nouns and slogans. Prefer a verb-led sentence that names who does what.
- 删除万能式收束句，例如“真正拉开差距的是……”“关键不在于……而在于……”“竞争焦点正在……”“未来属于……”。如果一句话可以原样贴到另一页或另一个行业，它没有承担本页的信息任务。
- 不用一串抽象名词制造“洞察感”，例如把“上下文、工具、权限、记忆、环境”等并列后声称它们决定成败。改为指出页面已经展示的具体差异，或者直接删除这句。
- Do not anthropomorphize a model as “理解一切”“自主思考”“像人一样”. Describe observable operations: read files, call tools, edit code, run tests, report evidence.
- Do not use “Codex” or “GPT” as the narrator or default synonym for all AI tools. Mention a product/model name only when it is the factual subject of that slide.

## Slide Copy Shape

- Title: one idea, normally 6–16 Chinese characters.
- Subtitle or lead: one claim, not a second title.
- Card: one short heading plus one or two evidence-bearing lines.
- Diagram labels: parallel grammar and comparable granularity.
- Takeaway: consequence or decision rule, not a recap of every card.
- Product/model comparison: “最新已发布”不能代替信息。写“典型模型”或“模型选择”，并说明每个模型对应的任务类型、成本档位或产品角色。
- Agent 工作时长统一使用行业术语“长程任务”，不用“长时任务”“长期任务”“长任务”。
- Sources: attach the official source when a claim, quote, number, or product behavior depends on external material.

## Quality Gate

Reject the copy if any answer is “no”:

- Can a developer tell what actually happens?
- Is every claim specific enough to challenge or verify?
- Does each block add new information?
- Could the takeaway be pasted into an unrelated slide? If yes, delete or rewrite it.
- Would an instructor naturally say this aloud?
- Are product names used for facts rather than decoration?
