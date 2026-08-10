---
layout: ../../layouts/DocsLayout.astro
title: "Getting Started with Cadelo"
description: "Open Cadelo, draw your first line, and export your first DWG or DXF — a five-minute quickstart for the free browser CAD app."
group: "start"
next: "/docs/interface/"
---

Cadelo is a full CAD application that runs entirely in your browser — no
install, no account, no upload. Your drawings never leave your device. Here's
how to go from an empty tab to a saved drawing in about five minutes.

## 1. Open the app

Go to **[Cadelo](/app/)** in Chrome, Edge, or any modern browser. The app loads
like a desktop program — the first load takes a few seconds while the CAD
engine (compiled to WebAssembly) starts up. Subsequent loads hit the browser
cache and are much faster.

> **Tip:** If your browser shows a "Cross-Origin-Opener-Policy" or similar
> banner, ignore it — it's what lets the app use your device's full power.
> Chrome, Edge, and Firefox are recommended. If rendering looks off, the app
> automatically falls back to WebGL2.

## 2. Start a new drawing

When the app opens you'll see the **Start** tab with a **New Drawing** button.
Click it (or press <kbd>Ctrl</kbd>+<kbd>N</kbd>). A fresh drawing tab appears
with a blank canvas, ready to draft.

## 3. Draw your first line

1. Click the **Draw** ribbon tab, then the **Line** tool — or just type
   `LINE` (or `L`) in the command line at the bottom and press
   <kbd>Enter</kbd>.
2. Click anywhere on the canvas to set the first point.
3. Move the mouse — you'll see a rubber-band line following the cursor.
   Click to set the second point.
4. Keep clicking to add more segments, or press <kbd>Enter</kbd> /
   <kbd>Escape</kbd> to finish.

**Want an exact length?** Type a number after the first click, e.g. `100`, then
press <kbd>Enter</kbd> — the next point lands exactly 100 units away.

## 4. Explore the drafting aids

The function keys toggle the classic CAD drafting aids:

| Key | Toggle |
|---|---|
| <kbd>F7</kbd> | Grid |
| <kbd>F8</kbd> | Ortho (forces lines to 0°/90°) |
| <kbd>F9</kbd> | Snap (jumps to grid increments) |
| <kbd>F10</kbd> | Polar tracking |
| <kbd>F3</kbd> | Object snap (endpoints, midpoints, centers…) |
| <kbd>F12</kbd> | Dynamic input (type coordinates at the cursor) |

## 5. Save your drawing

Press <kbd>Ctrl</kbd>+<kbd>S</kbd> to save. You can save as:

- **DWG** — the AutoCAD format (default; R13–R2018 supported)
- **DXF** — the open exchange format, best for sharing with other software

Your file is written locally by the browser — nothing is uploaded anywhere.
You can also **drag and drop** a `.dwg` or `.dxf` file onto the window to open
it directly.

## 6. Export when you're done

Use **File → Export** (or <kbd>Ctrl</kbd>+<kbd>E</kbd>) to export your drawing
as **SVG**, **PDF**, **STL** (3D printing), **STEP** (CAD interchange), or
**PNG** (image). Full details in the
[saving & exporting guide](/docs/saving-exporting/).

## What's next?

- [Interface tour](/docs/interface/) — learn what every part of the screen does
- [Keyboard shortcuts](/docs/keyboard-shortcuts/) — the full shortcut reference
- [Drawing basics](/docs/drawing-basics/) — circles, arcs, rectangles, polylines
