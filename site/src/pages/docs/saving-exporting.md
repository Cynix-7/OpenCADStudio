---
layout: ../../layouts/DocsLayout.astro
title: "Saving & Exporting"
description: "Save, Save As, and export drawings in Cadelo — DWG, DXF, SVG, PDF, STL, STEP, OBJ, and PNG, all from your browser with nothing uploaded."
group: "files"
next: "/docs/printing/"
---

Cadelo is local-first: everything you save or export is written directly by
your browser. No file is ever uploaded, no account is required, and your
drawings stay on your device.

## Saving

| Action | How |
|---|---|
| **Save** | <kbd>Ctrl</kbd>+<kbd>S</kbd>, or File → Save. New drawings prompt for a name and format. |
| **Save As** | <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd>, or File → Save As. Pick a new name, location, and format. |
| **Save All** | The `SAVEALL` command saves every open drawing tab. |

Formats for saving: **DWG** (default) and **DXF**, both R13–R2018. The save
dialog remembers your format choice; change the default in **Options → Open
and Save**.

### Autosave & recovery

If the browser tab is closed unexpectedly, Cadelo's recovery system kicks in
on the next launch — you'll see a recovery report and can save a repaired copy
of the drawing. See [Troubleshooting](/docs/troubleshooting/) for details.

## Exporting

**File → Export**, or <kbd>Ctrl</kbd>+<kbd>E</kbd>. Choose the format, pick
the filename, and the file downloads to your device.

| Format | Extension | Notes |
|---|---|---|
| DWG | `.dwg` | Re-save as an older version if a recipient needs it |
| DXF | `.dxf` | The open exchange format — best for cross-software sharing |
| SVG | `.svg` | Vector, scalable, editable in Illustrator/Inkscape |
| PDF | `.pdf` | Universal — print, submit, share |
| STL | `.stl` | 3D printing mesh |
| STEP | `.step` | Full solid geometry for CAD interchange |
| OBJ | `.obj` | 3D mesh for game engines / Blender |
| PNG | `.png` | Raster image |

## Importing

You can bring files in several ways:

- **Open** (<kbd>Ctrl</kbd>+<kbd>O</kbd>) — DWG and DXF
- **Drag and drop** a `.dwg` or `.dxf` file directly onto the app window
- **Insert** — blocks from other files, xrefs, raster images, and OBJ models
  via the Insert tab
- **Recent Files** — your previously opened drawings are listed on the Start tab

## Privacy note

Because the app runs entirely in your browser via WebAssembly, opening, saving,
and exporting never touch a server. Engineering drawings, floor plans, and
patent-pending brackets stay on your machine — that's the whole point of
browser CAD done right.

## What's next?

- [Printing & PDF](/docs/printing/) — plot to paper or PDF
- [File formats](/docs/file-formats/) — which format for which job
