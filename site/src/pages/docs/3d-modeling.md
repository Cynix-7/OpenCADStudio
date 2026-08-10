---
layout: ../../layouts/DocsLayout.astro
title: "3D Modeling"
description: "Model in 3D inside your browser with Cadelo — solid primitives, extrusions, revolves, and boolean operations, with GPU-accelerated rendering."
group: "files"
next: "/docs/troubleshooting/"
---

Cadelo can model in 3D right in the browser tab — create solids from 2D
profiles, combine them, view them from any angle, and export STL/STEP for
printing or manufacturing. The **Model** ribbon tab holds the 3D toolset, and
the GPU pipeline (WebGPU, WebGL2 fallback) renders shaded solids.

## The 3D workflow

The classic way to model a part:

1. Draw a **2D profile** in model space (a rectangle, a circle, a closed
   polyline outline).
2. Turn it into a solid with **EXTRUDE** (push) or **REVOLVE** (spin around an
   axis).
3. Add or subtract features with **boolean operations** (union, subtract,
   intersect).
4. View it from any angle — orbit with the mouse wheel or use the preset views.
5. Export as **STL** (3D printing) or **STEP** (manufacturing).

## Solid primitives

| Command | What it makes |
|---|---|
| `BOX` | Box / rectangular solid |
| `SPHERE` | Ball |
| `CYLINDER` | Cylinder (or partial) |
| `CONE` | Cone |
| `WEDGE` | Wedge |
| `PYRAMID` | Pyramid |

Each command prompts for dimensions the CAD way — e.g. `BOX` asks for the two
corners of the base, then the height.

## Profiles to solids

| Command | What it does |
|---|---|
| `EXTRUDE` | Push a 2D profile into a solid (with taper option) |
| `REVOLVE` | Spin a profile around an axis (full 360° or partial angle) |
| `LOFT` | Blend between two or more cross-sections |
| `SWEEP` | Slide a profile along a path |
| `PRESSPULL` | Click a face and push/pull it directly (extrude or pocket) |
| `THICKEN` | Give a closed planar profile a thickness |

### Extrude, step by step

1. Draw a closed outline — a `RECTANG` or a closed `PLINE` (type `C` to
   close).
2. Type `EXTRUDE`.
3. Select the outline, press <kbd>Enter</kbd>.
4. Type the height (e.g. `20`) and press <kbd>Enter</kbd>.

You now have a solid. Orbit to check it, then continue adding features.

## Modifying solids

- **Boolean ops** — `UNION` (join), `SUBTRACT` (cut away), `INTERSECT` (keep
  the overlap). The classic bracket-with-a-hole:
  1. Draw a box, then a cylinder through where the hole goes.
  2. `SUBTRACT`, select the box, <kbd>Enter</kbd>, select the cylinder,
     <kbd>Enter</kbd> — hole done.
- **FILLET / CHAMFER** work on solid edges too — round or bevel edges.
- **3D transforms** — `3DMOVE`, `3DROTATE`, `3DMIRROR`, `3DALIGN` position
  solids in space; `ARRAY3D` patterns them.
- **SLICE** cuts a solid with a plane — great for section views.

## Viewing 3D

- **Orbit** — hold the mouse wheel and drag to spin around the model.
- **Preset views** — top, bottom, left, right, front, back, and isometric
  presets in the View tab.
- **Visual styles** — `SHADEMODE` / `VSCURRENT` toggles between wireframe and
  shaded display.
- **Perspective vs. parallel** — toggle for a natural or orthographic look
  (`PERSP` / `PARALLEL`).

## Exporting 3D

- **STL** — mesh for 3D printing. The standard format every slicer accepts.
- **STEP** — the CAD interchange format (SolidWorks, Fusion 360, FreeCAD all
  read STEP AP203).
- **OBJ** — mesh with material-friendly layout for Blender/game engines.
- Cadelo also **imports OBJ** meshes (Insert tab) and opens DWG/DXF files
  containing 3D solids — they render via ACIS tessellation.

> **Honest caveat (web build):** the browser version covers the workflows
> above — solids you create this session. A few kernel-level operations that
> need the full native solid-modeler (mesh interference analysis, e.g.
> `SECTION` on created solids, and embedding exact solid geometry when saving
> 3D bodies back to DWG/DXF) are available in the desktop app but not in this
> web build. For heavy 3D kernel work, the desktop version of OpenCADStudio is
> the better tool; for drafting plus everyday 3D, the browser version is
> enough.

## What's next?

- [Troubleshooting](/docs/troubleshooting/) — performance, GPU, and file issues
- [File formats](/docs/file-formats/) — STL vs STEP vs OBJ explained
