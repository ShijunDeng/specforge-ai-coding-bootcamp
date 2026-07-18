---
name: verify-slidev-deck
description: Author, build, render, and visually verify this repository's Slidev presentation. Use after every slide content, layout, style, image, or shared CSS change so the result is proven by Slidev output rather than inferred from Markdown or imagined as a flat design.
---

# Verify Slidev Deck

Treat Slidev's rendered output as the product. Source code inspection alone is never visual verification.

## Source Contract

- Read `AGENTS.md` and `.agents/skills/slidev/SKILL.md` before editing.
- Keep `slides.md` as the deck headmatter and ordered import manifest; keep each slide's content, frontmatter, and presenter notes in its matching `pages/NN-*.md` file.
- Keep shared presentation styling in `styles/base.css` and `styles/shared.css`, page-specific styling in `styles/pages/NN-*.css`, and the fixed import order in `styles/index.ts`.
- Keep stable cross-slide chrome in `components/` and referenced assets in `public/`.
- Build layouts with Slidev Markdown, supported HTML/CSS, components, Mermaid, or code blocks.
- Do not replace a content slide with one generated flat image. Generated or sourced images may illustrate a Slidev-authored layout; full-bleed raster treatment is reserved for covers, section dividers, or breaks when justified.

## Mandatory Render Loop

1. Locate the exact slide number and inspect its source plus current render.
2. Edit only the requested slide and necessary shared styles/assets.
3. Run `npm run build`; fix all parsing, asset, and compilation errors.
4. Render every affected slide through Slidev:

   ```bash
   npm run export -- --format png --range <pages> \
     --executable-path /usr/bin/google-chrome --timeout 120000 --wait 1200
   ```

5. Open the generated PNG at original or high detail and inspect the actual pixels.
6. Iterate until the visual gate passes. If shared CSS changed, also render adjacent or other slides using the same classes.
7. Confirm the live preview returns HTTP 200 when the user is reviewing over LAN.

## Visual Gate

- Use the full canvas intentionally; no large accidental blank region.
- No overlaps, clipping, broken images, tiny unreadable copy, or content outside the safe area.
- Keep spacing consistent and group related content visibly.
- Balance text, diagrams, screenshots, and whitespace; whitespace must support hierarchy rather than expose unfinished composition.
- Preserve the warm-white, deep-green, orange brand system and top-right logo.
- Make every sourced screenshot legible and crop it to the concept being taught.
- Check the 16:9 result at presentation scale, not only at editor zoom.

## Slidev MCP

Run `npm run mcp` when an agent or client benefits from structured Slidev inspection or editing. The MCP endpoint is an optional authoring surface; it does not replace CLI build, PNG rendering, or visual inspection.
