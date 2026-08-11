---
layout: ../../layouts/DocsLayout.astro
title: "Interface Tour"
description: "A guided tour of the Cadelo browser CAD interface: ribbon tabs, command line, canvas, drawing tabs, and status bar."
group: "start"
next: "/docs/keyboard-shortcuts/"
---

Cadelo's interface follows the classic CAD layout — if you've used AutoCAD,
LibreCAD, or OpenCADStudio on the desktop, you'll feel at home immediately. If
not, here's the tour.

## The ribbon (top)

The ribbon is organized into tabs, each grouping related tools:

| Tab | What's there |
|---|---|
| **Draw** | Lines, polylines, circles, arcs, rectangles, polygons, splines, hatches, wipeouts |
| **Annotate** | Dimensions, text, multileaders, tables, leaders |
| **Insert** | Blocks, external references (xrefs), images, OBJ imports |
| **Model** | 3D modeling tools (solids, extrusions, revolve, boolean ops) |
| **Layout** | Layout tabs, viewports, paper space |
| **Manage** | Layers, layer states, styles (text, dimension, table, multiline) |
| **View** | Zoom, pan, view presets, viewport splits, visual styles |

Click a tab to see its tools. Each tool's icon matches the classic CAD
glyphography — a pencil for Line, a circle for Circle, etc. Hover any tool for
its name; the command line (below) shows the exact command it runs.

## The canvas (center)

The big dark area is your drawing surface — model space. The mouse wheel zooms
in and out (centered on the cursor), and you pan by holding the mouse wheel
(click-drag). The grid you see is the drawing grid; toggle it with
<kbd>F7</kbd>.

Coordinate readout in the status bar tracks your cursor position. Units come
from the drawing — if the file was made in millimeters, everything is in
millimeters.

## The command line (bottom)

Type any command here — `LINE`, `CIRCLE`, `TRIM`, `OFFSET`… — and press
<kbd>Enter</kbd>. The command line shows:

- a **prompt** for what the current command wants next (e.g. "Specify first
  point")
- **options in brackets** you can type instead of clicking — e.g. for LINE,
  pressing <kbd>L</kbd> then <kbd>Enter</kbd> changes the prompt
- **output** like measurements ("Area = 1234.56")
- **errors** in red, e.g. "Unknown command"

Start typing and a **suggestion list** pops up — pick with the arrow keys and
press <kbd>Enter</kbd>, or press <kbd>Tab</kbd> to complete.

> **Power tip:** you don't need to click the ribbon at all. The command line
> drives everything: `L` for line, `C` for circle, `REC` for rectangle, `TR`
> for trim, `O` for offset — the classic aliases all work.

## Drawing tabs (top of canvas)

Like a browser, the app uses **tabs** — one per open drawing. Switch between
drawings with a click. Each tab has its own undo history, layers, and view
position. The **Start** tab is the welcome screen (new drawing / open file /
recent files).

## The status bar (bottom edge)

Along the bottom you'll find status toggles and info:

- **Model / Layout** indicator
- **Snap / Grid / Ortho / Polar / OTrack / DynInput** toggles (same as the F-keys)
- **Cursor coordinates**
- Drafting aid settings

## The Start tab

The welcome screen doubles as a hub:

- **New Drawing** / **Open File**
- **Recent Files** — your recently opened drawings
- **Support / Sponsors / Feedback** links

## Resizing the app frame

On the web version, drag the handle under the app frame to set its height.
Your choice is remembered between visits. The frame spans the full page
width, with ads staying visible above and below.

## What's next?

- [Keyboard shortcuts](/docs/keyboard-shortcuts/) — every shortcut in one table
- [Drawing basics](/docs/drawing-basics/) — start drafting with confidence
