---
layout: ../../layouts/DocsLayout.astro
title: "Drawing Basics"
description: "How to draw lines, polylines, circles, arcs, rectangles, and polygons in Cadelo, plus the modify commands and drafting aids that make drawing precise."
group: "drafting"
next: "/docs/layers/"
---

This guide covers the core drawing and modifying commands in Cadelo. Every
command can be started from the **Draw** ribbon tab or typed at the command
line — the command names below are exactly what you type.

## Basic geometry

| Command | Alias | What it does |
|---|---|---|
| `LINE` | `L` | Draw straight line segments |
| `PLINE` | `PL` | Draw connected polyline segments (lines + arcs) |
| `RECTANG` | `REC` | Draw a rectangle from two corners |
| `POLYGON` | `POL` | Draw a regular polygon (3–1024 sides) |
| `CIRCLE` | `C` | Draw a circle |
| `ARC` | `A` | Draw an arc |
| `ELLIPSE` | `EL` | Draw an ellipse |
| `SPLINE` | `SPL` | Draw a smooth spline through points |

### Drawing a line

1. Type `LINE` (or press `L` + <kbd>Enter</kbd>), or click the Line tool.
2. Click the start point — or type coordinates (`100,50`) and press
   <kbd>Enter</kbd>.
3. Click the end point — or type a distance (`50` and <kbd>Enter</kbd> for a
   50-unit line, optionally with an angle like `50<45`).
4. Continue for more segments, then <kbd>Enter</kbd> or <kbd>Escape</kbd> to
   finish. Type `C` (close) to close back to the start point.

### Drawing a circle

1. Type `CIRCLE`.
2. Click the center point.
3. Type a radius and press <kbd>Enter</kbd> — or click to size it by eye.

Options in the prompt let you specify by **Diameter**, by **2 points** (2P), by
**3 points** (3P), or **Tan Tan Radius** (TTR) — type the bracketed letter
shown in the prompt to switch.

### Drawing a rectangle

1. Type `RECTANG`.
2. Click the first corner.
3. Click the opposite corner — or type dimensions (`100,60`) for an exact
   100×60 rectangle.

## Modify commands

| Command | Alias | What it does |
|---|---|---|
| `MOVE` | `M` | Move selected objects |
| `COPY` | `CO` | Copy selected objects (with array option) |
| `ROTATE` | `RO` | Rotate selected objects around a base point |
| `SCALE` | `SC` | Scale selected objects from a base point |
| `MIRROR` | `MI` | Mirror selected objects across a line |
| `OFFSET` | `O` | Create parallel copies at a distance |
| `TRIM` | `TR` | Trim objects to a cutting edge |
| `EXTEND` | `EX` | Extend objects to a boundary edge |
| `FILLET` | `F` | Round a corner between two objects |
| `CHAMFER` | `CHA` | Bevel a corner between two objects |
| `BREAK` | `BR` | Break an object into two at a point |
| `STRETCH` | `S` | Stretch objects across a selection window |
| `LENGTHEN` | `LEN` | Change the length of an object |
| `ARRAY` | `AR` | Create a rectangular or polar array |
| `EXPLODE` | `X` | Explode blocks, dimensions, polylines, mlines |

### Trim and Extend

1. Type `TRIM`.
2. Select the cutting edges and press <kbd>Enter</kbd> — or press
   <kbd>Enter</kbd> right away to use everything as a cutting edge.
3. Click the parts to trim away. Done.

`EXTEND` works the same way but extends objects to the boundary instead.

### Offset

1. Type `OFFSET`.
2. Type the distance (e.g. `10`) and press <kbd>Enter</kbd>.
3. Click the object, then click which side the parallel copy goes on.

Perfect for wall thicknesses, road lanes, or concentric shapes.

## Drafting aids (make everything precise)

| Key | Aid | What it does |
|---|---|---|
| <kbd>F3</kbd> | Object snap | Snap to endpoints, midpoints, centers, intersections, quadrants, nearest, perpendicular |
| <kbd>F8</kbd> | Ortho | Lock angles to 0° / 90° |
| <kbd>F10</kbd> | Polar | Snap to 30° / 45° / 90° angles as you move |
| <kbd>F11</kbd> | OTrack | Track from object snap points |
| <kbd>F9</kbd> | Snap | Jump to grid increments |
| <kbd>F7</kbd> | Grid | Show/hide the grid |
| <kbd>F12</kbd> | Dynamic input | Type coordinates and lengths at the cursor |

### Using object snap

With OSNAP on (<kbd>F3</kbd>), move your cursor near an endpoint, midpoint, or
center and a colored marker appears — click to snap exactly to it. This is the
single most important habit for accurate drafting:

- Draw a line **from the midpoint** of another line
- Start a circle **at the center** of an existing circle
- Trim exactly **to an intersection**

You can also type a snap override mid-command: `END` (endpoint), `MID`
(midpoint), `CEN` (center), `INT` (intersection), `PER` (perpendicular),
`NEA` (nearest). For example, `LINE` → type `MID` + <kbd>Enter</kbd> → click
a line to start from its midpoint.

## Selecting objects

- **Click** an object to select it.
- **Window selection** — click-drag left-to-right selects only objects fully
  inside the box.
- **Crossing selection** — click-drag right-to-left selects anything the box
  touches.
- <kbd>Ctrl</kbd>+<kbd>A</kbd> selects everything.
- Press <kbd>Escape</kbd> to clear the selection.

## Measuring

| Command | What it does |
|---|---|
| `DIST` | Distance between two points |
| `AREA` | Area and perimeter of a picked outline or selected objects |
| `MASSPROP` | Area, perimeter, centroid of selected entities |
| `LIST` | Detailed data about selected objects |

## What's next?

- [Layers, colors & linetypes](/docs/layers/) — organize your drawing
- [Dimensions](/docs/dimensions/) — annotate sizes properly
