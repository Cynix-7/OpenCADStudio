---
layout: ../../layouts/DocsLayout.astro
title: "Printing & PDF"
description: "Plot drawings in Cadelo — print to paper or export to PDF, choose paper sizes, and control line weights with plot styles."
group: "files"
next: "/docs/3d-modeling/"
---

When a drawing is done, it needs to get out of the screen and onto paper (or
into a PDF). Cadelo's plot system handles both, with real paper sizes and
plot styles.

## Plotting

Press <kbd>Ctrl</kbd>+<kbd>P</kbd> or run `PLOT` to open the plot dialog.

1. **Choose a printer** — a real printer (if your browser can reach one) or
   **Export to PDF**.
2. **Pick the paper size** — A4, A3, Letter, Legal, and more from the
   supported paper-size list.
3. **Choose what to plot**:
   - **Display** — what's on screen right now
   - **Extents** — everything in the drawing
   - **Window** — a rectangle you pick on screen
4. **Set the scale** — fit to page, or a real scale (1:100, 1:50…).
5. **Plot** — the print job goes to the printer, or the PDF downloads.

## Paper sizes

The plot dialog lists the standard ISO (A-series) and ANSI (Letter/Ledger)
sizes. The page size also comes from the layout's plot settings when you print
from paper space — see below.

## Paper space & layouts

Model space is where you draw at 1:1. **Paper space** is where you compose the
sheet: title block, borders, and **viewports** that show model content at a
chosen scale.

- **Layout tabs** — each drawing can have unlimited layout tabs (Model,
  Layout1, Layout2…). Switch with the tabs above the canvas.
- **Viewports** — on a layout, create a viewport (`VPORTS`, or the Layout
  ribbon) that looks into model space. Double-click inside a viewport to edit
  the model in place (MSPACE); double-click outside to return to the sheet.
- **Print from a layout** to get exactly what the sheet shows, at paper scale.

## Line weights & plot styles

Real CAD drawings control line weight per layer or per color. Cadelo's
**Plot Style Editor** (Manage tab, or `PLOTSTYLE`) maps colors/objects to:

- Line weight (0.05 mm hairline up to 2 mm heavy)
- Color (monochrome or color output)
- Linetype and screening (fade percentage)

Use a **monochrome** plot style for clean black-and-white engineering prints,
or keep colors for presentations.

## PDF export

The same plot dialog with **Export to PDF** selected produces a vector PDF —
crisp at any zoom, small file size, and ready to email, submit, or archive.
For a simple raster copy, use **File → Export → PNG** instead.

## What's next?

- [3D modeling](/docs/3d-modeling/) — go beyond flat drawings
- [Saving & exporting](/docs/saving-exporting/) — every output format
