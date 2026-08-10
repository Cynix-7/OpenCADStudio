# Cadelo Site — Full User Documentation

Status: DESIGN (idea-workflow stage) → IMPLEMENTED → VERIFIED

## One-line summary

Add a complete user documentation section (`/docs/`) to the Cadelo Astro site so
any user — from first-time visitor to working drafter — can learn the app,
look up commands and shortcuts, and solve problems without leaving the site.

## Problem / purpose

Cadelo ships a full CAD engine (fork of OpenCADStudio) but the site only has a
landing page, 3 blog posts, and legal pages. Users who land on the app have no
in-app manual, no shortcut reference, no command reference, and no guidance
beyond the ribbon. That hurts retention, SEO, and ad impressions (longer
sessions = more page views). AutoCAD users expect a manual; browser users
expect docs before they commit to a workflow.

## Product philosophy

- **Docs are user documentation, not developer docs.** Written for drafters and
  hobbyists, not for people reading Rust source.
- **Every page is actionable.** Short, task-oriented sections ("How to draw a
  line with an exact length") rather than walls of prose.
- **Dark theme, consistent with the site** (bg #16161c, chrome #1f1f27, accent
  cyan #00b8d4) — no visual break from the rest of Cadelo.
- **Accurate.** Every shortcut, command name, and format claim verified against
  the actual app source (`shortcuts.rs`, command dispatch, `io/mod.rs`).
- **Ad-supported, not ad-poisoned.** One in-article ad slot on long pages only;
  docs never feel like an ad farm.

## Target user

- Beginner: "I got sent a DWG file, what do I do?"
- Hobbyist/student drafter: learning CAD basics without AutoCAD's price tag
- Existing OpenCADStudio desktop users: switching to the web version
- Returning users: shortcut lookups, format questions, troubleshooting

## Core concept

A `/docs/` section with a sidebar of ~15 pages organized into four groups:

1. **Start here** — Getting started, Interface tour, Keyboard shortcuts
2. **Drafting** — Drawing basics, Layers, Dimensions, Blocks, Text & annotation
3. **Files & output** — File formats, Saving & exporting, Printing & PDF, 3D modeling
4. **Help** — Troubleshooting, FAQ

## Page inventory (verified against source)

| Page | Key content | Source of truth |
|---|---|---|
| getting-started | open app, new drawing, first line, save, export | app.astro, io/mod.rs |
| interface | ribbon tabs (Draw/Annotate/Insert/Model/Layout/Manage/View), command line, canvas, tabs, status bar | locale_catalog (ribbon-tab-*), ui/ |
| keyboard-shortcuts | full F-key + Ctrl/Cmd table | src/app/shortcuts.rs (exact bindings) |
| drawing-basics | LINE, PLINE, CIRCLE, ARC, RECTANG, POLYGON, ELLIPSE, SPLINE; snap/ortho/polar/grid | command dispatch, FTL prompts |
| layers | Layer Manager, colors, linetypes, freeze/lock, layer states | modal-layer-manager FTL |
| dimensions | linear/aligned/angular/radius/diameter, dimension styles | dim.rs, dimstyle-* FTL |
| blocks | BLOCK, INSERT, attributes, ATTDEF, ATTEDIT, WBLOCK | blocks.rs |
| text | TEXT, MTEXT, text styles, mtext editor | text_inline.rs, mtext_editor.rs |
| file-formats | DWG/DXF R13–R2018, DXF ASCII/binary, versions | io/mod.rs, blog posts |
| saving-exporting | SAVE/QSAVE/SAVEAS/SAVEALL, export DWG/DXF/STL/STEP/OBJ/PDF/PNG | io/ (stl.rs, step.rs, obj.rs, pdf_export.rs) |
| printing | PLOT, page setup, paper sizes, PDF export, print to printer | io/print_to_printer.rs, paper_sizes.rs |
| 3d-modeling | 3D via truck kernel, solids, EXTRUDE/REVOLVE, viewport 3D | Cargo.toml solid3d feature, model_ops.rs |
| troubleshooting | recovery (recovery-opened-with-repairs), open failures, slow first load, GPU fallback | io/recovery.rs, web worker |
| faq | privacy, offline, formats, cost, ads, GPL | site content + app facts |

## Layout / information architecture

```
/docs/                     → docs hub (card grid of all pages + search hint)
/docs/getting-started/     → 5-minute quickstart
/docs/interface/           → tour of the app UI
/docs/keyboard-shortcuts/  → full shortcut reference table
/docs/drawing-basics/      → draw + modify commands, drafting aids
/docs/layers/              → layers, colors, linetypes
/docs/dimensions/          → dimension tools + styles
/docs/blocks/              → blocks & attributes
/docs/text/                → text, mtext, styles
/docs/file-formats/        → DWG/DXF/STL/STEP/OBJ explained
/docs/saving-exporting/    → save/export workflows
/docs/printing/            → plot + PDF + print
/docs/3d-modeling/         → 3D modeling in the browser
/docs/troubleshooting/     → problems + fixes
/docs/faq/                 → questions + answers
```

Implementation: markdown pages (`docs/*.md`) + one `DocsLayout.astro` with a
sidebar (desktop) / top accordion (mobile). Navigation links in the site header
get a "Docs" entry. Sitemap updated.

## UX / product notes

- Sidebar groups match the four groups above; active page highlighted.
- Every page ends with "Next: …" links + "Open the app" CTA.
- Shortcut table uses `<kbd>`-style badges.
- Tables used heavily (commands, shortcuts, formats) — keep them scannable.
- In-article ad slot on pages longer than ~800 words only.

## Technical shape

- Astro (existing site), markdown content, one new layout component.
- No new dependencies. Existing `AdSlot` component reused.
- Pages render statically; no JS needed beyond existing scripts.

## Data / hosting

- Content lives in the repo: `site/src/pages/docs/*.md`, layout at
  `site/src/layouts/DocsLayout.astro`.
- Deployed with the existing Cloudflare Pages workflow; no backend.

## Non-goals

- NOT developer/API docs (that's the repo's `docs/` folder).
- NOT a rewrite of the in-app HELP dialog.
- No video hosting on the docs pages yet (videos are a separate YouTube phase).
- No interactive playground/embedded app on docs pages.

## Open questions

- None blocking. Assumed: English only for now (i18n of the site itself is out
  of scope); docs live at `/docs/` (not `/help/` or `/learn/`).

## Next steps

1. DocsLayout.astro + nav + sitemap update
2. Write all 15 pages (verified content)
3. `npm run build` + verify every /docs/ route renders
4. Then: YouTube tutorial research + scripts (separate phase)
