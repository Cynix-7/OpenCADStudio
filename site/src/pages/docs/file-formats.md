---
layout: ../../layouts/DocsLayout.astro
title: "File Formats"
description: "DWG, DXF, STL, STEP, OBJ, PDF — what each CAD file format is for, which versions Cadelo supports, and which format to pick for your use case."
group: "files"
next: "/docs/saving-exporting/"
---

Cadelo opens and writes the file formats that matter for real CAD work. Here's
what each one is, when to use it, and what Cadelo supports.

## The two drawing formats

### DWG (.dwg)

Autodesk's proprietary drawing format — the de-facto standard in architecture,
engineering, and manufacturing. When someone sends you "a CAD file", it's
usually DWG.

- **Cadelo reads and writes DWG from R13 (1994) through R2018** — virtually
  every DWG you'll encounter in the wild.
- DWG stores geometry, layers, text, dimensions, blocks, attributes, linetypes,
  xrefs, and layout/paper-space data.

### DXF (.dxf)

Autodesk's **open, documented** exchange format (Drawing Exchange Format,
introduced 1982). Every serious CAD program reads DXF — AutoCAD, Fusion 360,
SolidWorks, FreeCAD, Inkscape, and browser tools like Cadelo.

- Comes in **ASCII** (human-readable, larger) and **binary** (smaller, faster)
  flavors. Cadelo reads and writes R13–R2018.
- **Use DXF when sharing with other software** — it's the universal handshake
  and what laser cutters, CNC shops, and makers expect.

> **Quick rule:** receiving or sending to another CAD program → DXF is the
> safest. Keeping everything inside the AutoCAD world → DWG is fine. Either
> way, Cadelo handles both.

## Export formats

| Format | Extension | Best for |
|---|---|---|
| **SVG** | `.svg` | Vector graphics — logos, web, Illustrator/Inkscape |
| **PDF** | `.pdf` | Sharing, printing, submitting — universal |
| **STL** | `.stl` | 3D printing (mesh of triangles) |
| **STEP** | `.step` | 3D CAD interchange with full solid geometry |
| **OBJ** | `.obj` | 3D mesh interchange — game engines, Blender |
| **PNG** | `.png` | Raster image of the drawing |

## Which format should you pick?

- **"My client needs to edit it in AutoCAD"** → DWG (R2018 or older)
- **"Send it to the laser cutter / CNC shop"** → DXF (R2000 is the safe sweet spot)
- **"Print it / put it in a proposal"** → PDF
- **"I'm 3D printing this part"** → STL
- **"Give the solid model to a manufacturer"** → STEP
- **"Put it on a website / in a doc"** → SVG or PNG

## Version notes

- DWG/DXF version tags (R12, R2000, R2018…) matter for compatibility: R2000+
  for general use, R12 for maximum compatibility with ancient software.
- If you receive a DWG **newer than R2018**, ask the sender to Save As an older
  version (or DXF), or convert it online — then open it in Cadelo.
- Cadelo saves new drawings as DWG R2018 by default; you can change the default
  or pick per file in the save dialog.

## What's next?

- [Saving & exporting](/docs/saving-exporting/) — the actual save/export steps
- [Printing & PDF](/docs/printing/) — get it on paper
