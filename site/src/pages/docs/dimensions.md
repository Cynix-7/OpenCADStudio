---
layout: ../../layouts/DocsLayout.astro
title: "Dimensions"
description: "Add linear, aligned, angular, radius and diameter dimensions in Cadelo, and control their look with dimension styles."
group: "drafting"
next: "/docs/blocks/"
---

Dimensions are what turn a drawing into a specification. Cadelo supports the
full classic dimension toolset — linear, aligned, angular, radial, diameter,
and more — with dimension styles to control exactly how they look.

## Adding a dimension

The **Annotate** ribbon tab holds all dimension tools; the commands work the
same from the command line:

| Command | Alias | What it measures |
|---|---|---|
| `DIMLINEAR` | `DLI` | Horizontal or vertical distance between two points |
| `DIMALIGNED` | `DAL` | True distance between two points (any angle) |
| `DIMANGULAR` | `DAN` | Angle between two lines or three points |
| `DIMRADIUS` | `DRA` | Radius of a circle or arc |
| `DIMDIAMETER` | `DDI` | Diameter of a circle or arc |
| `DIMARC` | `DAR` | Arc length |
| `DIMJOGGED` | `DJO` | Jogged radius for large radii |
| `DIMORDINATE` | `DOR` | X or Y coordinate of a point |
| `DIMCONTINUE` | `DCO` | Continue a dimension chain from the last one |
| `DIMBASELINE` | `DBA` | Continue from the same baseline |
| `LEADER` | `LE` | Callout with a leader line and note |

### Linear dimension, step by step

1. Type `DIMLINEAR`.
2. Click the two points you're measuring (use object snap — endpoints,
   midpoints — for accuracy).
3. Move the mouse to position the dimension line and click. Done.

The measured value is inserted automatically from the geometry — no typing, no
math, and it stays accurate if you later move the points.

### Angular dimension

1. Type `DIMANGULAR`.
2. Click the first line, then the second line.
3. Click where the dimension arc should go.

## Selecting and editing dimensions

- **Click** a dimension to select it. Its **Properties** panel shows the full
  text, the measured value, the arrow size, and more.
- **Double-click** a dimension (or run `DDEDIT`) to edit its text — e.g. add a
  prefix like `2×` or a tolerance like `±0.1`.
- Press <kbd>Delete</kbd> to remove a dimension.
- **Stretch** a dimension's definition points with `STRETCH` and it updates
  automatically.

## Dimension styles

Dimension styles bundle every visual setting — arrow size, text height,
extension line offsets, units, precision, and more — under one name. Open the
**Dimension Style Manager** (Annotate tab, or `DIMSTYLE` / `DDIM`).

Create a style, set:

- **Lines** — extension line color/linetype/lineweight, offsets
- **Symbols and Arrows** — arrow style and size
- **Text** — text style, height, placement (inside/outside, horizontal/vertical)
- **Fit** — how the dimension adapts when space is tight
- **Units** — format (decimal, architectural, fractional), precision, prefix/suffix
- **Alternate units** — display a second unit (e.g. inches + mm)

Switch a drawing between styles anytime; every dimension using that style
updates to match. The `<>` in a style's measurement template is replaced by the
measured value — put text before it for a prefix, after it for a suffix.

## Tolerances

Add tolerances to any dimension via its Properties — symmetric
(`±0.05`), deviation (`+0.05 / -0.02`), or limits. For geometric tolerances
(GD&T feature control frames), use the tolerance tools on the Annotate tab.

## What's next?

- [Blocks & attributes](/docs/blocks/) — reuse geometry with intelligence
- [Text & annotation](/docs/text/) — notes, labels, callouts
