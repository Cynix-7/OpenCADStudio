---
layout: ../../layouts/DocsLayout.astro
title: "Layers, Colors & Linetypes"
description: "Organize your CAD drawing with layers in Cadelo: create layers, assign colors and linetypes, lock, freeze, and save layer states."
group: "drafting"
next: "/docs/dimensions/"
---

Layers are the backbone of any serious CAD drawing. They let you separate
different kinds of content — walls, furniture, dimensions, text — so you can
control visibility, color, and line style for whole groups at once.

## Opening the Layer Manager

Click **Manage → Layer Manager**, or type `LAYER` (alias `LA`) at the command
line. The dialog lists every layer in the current drawing with its:

- **Name**
- **On/Off** — hidden layers are invisible but still part of the drawing
- **Freeze/Thaw** — frozen layers are hidden *and* skipped for performance
- **Lock/Unlock** — locked layers can't be edited (but stay visible)
- **Color**
- **Linetype**
- **Lineweight**

## Creating a layer

1. Open the Layer Manager.
2. Click **New** (or type a name in the new-layer field).
3. Give it a meaningful name: `WALLS`, `DOORS`, `DIMENSIONS`, `TEXT`…
4. Set its color and linetype (see below).
5. Close the dialog and make it current.

Everything you draw from now on lands on the **current layer** (shown in the
ribbon/status area). To switch layers, select one in the manager and make it
current — or use the layer dropdown on the ribbon.

## Colors

Each layer has a color that all its objects inherit. Click the color swatch in
the Layer Manager to pick one — the classic CAD palette (red, yellow, green,
cyan, blue, magenta, white…) is available, plus custom colors.

Objects can also have their own color override (via the **Properties** panel).
The `BYLAYER` setting (default) means "use my layer's color" — keep it that way
for sane drawings. The `SETBYLAYER` command resets selected objects' overrides
back to following their layer.

## Linetypes

Linetypes define dashed, dotted, and other repeating patterns:

- **Continuous** — solid line (default)
- **Dashed**, **Hidden**, **Center**, **Phantom**, **Dotted**, and more

Set a layer's linetype from the Layer Manager. Individual objects can override
it through Properties. If a dashed line looks solid, it's usually because the
pattern is too small for your drawing scale — check the **Linetype Scale**
(global scale factor, or per-object via Properties).

## Layer states

Complex drawings accumulate many layers. **Layer states** (Manage → Layer
State Manager, or `LAYERSTATE` / `LMAN`) save a snapshot of which layers are
on/off, frozen, locked, and current — so you can switch between "all layers",
"dimensions only", "plotting setup" with one click instead of toggling
twenty layers by hand.

Create a state, tweak your layers, create another state, and flip between them
freely. Each drawing tab keeps its own layer states.

## Practical workflow

A clean, professional layer setup for a floor plan might look like:

| Layer | Color | Linetype | Purpose |
|---|---|---|---|
| WALLS | White | Continuous | Building walls |
| DOORS | Yellow | Continuous | Doors and swings |
| FURNITURE | Green | Continuous | Furniture blocks |
| DIMENSIONS | Cyan | Continuous | Dimension objects |
| HIDDEN | Red | Hidden | Hidden lines |
| CENTER | Magenta | Center | Centerlines |
| TEXT | White | Continuous | Notes and labels |

## What's next?

- [Dimensions](/docs/dimensions/) — annotate sizes
- [Blocks & attributes](/docs/blocks/) — reuse geometry
