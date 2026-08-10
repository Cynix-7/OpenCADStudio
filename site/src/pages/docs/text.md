---
layout: ../../layouts/DocsLayout.astro
title: "Text & Annotation"
description: "Add single-line text, multiline text, and text styles in Cadelo. Learn the text editor, fonts, and annotation tools."
group: "drafting"
next: "/docs/file-formats/"
---

Text turns geometry into communication — notes, labels, title blocks, and
callouts. Cadelo supports the two classic text types plus a full text-style
system.

## Single-line text

Type `TEXT` (or `DTEXT`) and click a point. Type your text and press
<kbd>Enter</kbd> — press <kbd>Enter</kbd> again on an empty line to finish.

Options in the prompt control the **height**, **rotation**, and **justification**
(alignment): `J` cycles through left/center/right/top/middle/bottom
combinations, or type the two-letter code directly (`MC` = middle-center, `BL`
= bottom-left, etc.).

## Multiline text

Type `MTEXT` (alias `T`), or use **Annotate → Text**. Instead of a single
line, you get a full **text editor window**:

- Click two corners to define the text box, or click once and type a width.
- The editor supports **bold, italic, underline, colors, and fonts** — select
  text and use the formatting bar.
- Press <kbd>Enter</kbd> for new paragraphs; the text wraps to the box width.
- Click **OK** (or click outside) to place the text in the drawing.

Multiline text is the right choice for paragraphs, notes, and anything with
formatting. Single-line text is right for short labels.

## Editing text

- **Double-click** any text to edit it in place (`DDEDIT`).
- Click text and use the **Properties** panel to change height, style,
  rotation, color, layer, and more.
- <kbd>Ctrl</kbd>+<kbd>F</kbd> / <kbd>Ctrl</kbd>+<kbd>H</kbd> opens **Find &
  Replace** to search and replace text across the drawing.

## Text styles

Text styles bundle font, height, width factor, and oblique angle under a name —
the CAD way to keep a drawing consistent.

Open the **Text Style Manager** (Manage tab, or `STYLE`). Create a style,
choose a **font**, set a **fixed height** (or leave 0 for "ask each time"),
and adjust the **width factor** (1.0 is normal, 0.8 is condensed, 1.2 is
extended).

Assign a style to text via Properties. Change the style's font and every text
using it updates — restyle a whole drawing in seconds.

## Annotation extras

- **Leaders** (`LEADER` / `MLEADER` on Annotate) attach a note to a point with
  a line and arrow. Multileader styles control their look.
- **Tables** (`TABLE`) insert structured data with rows and columns — great
  for schedules, bills of materials, and title-block info.
- **Tolerances / GD&T** — feature control frames for geometric tolerancing.
- **Text masks** — give text a solid background so lines don't run through it
  (`TEXTMASK`), or move all text to the front (`TEXTTOFRONT`).

## What's next?

- [File formats](/docs/file-formats/) — DWG, DXF, and friends
- [Saving & exporting](/docs/saving-exporting/) — get your drawing out
