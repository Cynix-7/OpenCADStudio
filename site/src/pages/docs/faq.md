---
layout: ../../layouts/DocsLayout.astro
title: "FAQ"
description: "Frequently asked questions about Cadelo — privacy, offline use, DWG/DXF formats, cost, ads, and the GPL license."
group: "help"
---

## Is Cadelo really free?

Yes. Every feature is free — drawing, editing, DWG/DXF, exports, everything.
The site is supported by unobtrusive ads in the page chrome (never over your
drawing). There are no accounts, trials, or paywalls.

## Do my files get uploaded?

**No.** Cadelo runs entirely in your browser via WebAssembly. Files are opened,
edited, saved, and exported on your own device — nothing is ever uploaded to a
server. This is a core design principle, not a setting.

## Do I need an account?

No account, no email, no signup. Open the app and draw.

## Does it work offline?

Once the app is loaded (cached by your browser), the core drawing and file
operations work offline. You can open local files, edit them, and save. Ads
and the online tutorial links need a connection, but your drawings don't.

## What file formats does it support?

- **Open & save:** DWG and DXF, versions R13 through R2018
- **Export:** DWG, DXF, SVG, PDF, STL, STEP, OBJ, PNG
- **Import:** DWG, DXF, and OBJ meshes (plus blocks/xrefs/images from DWG/DXF)

See the [file formats guide](/docs/file-formats/) for details.

## Can I open AutoCAD files?

Yes. Cadelo reads DWG (AutoCAD's native format) from R13 (1994) to R2018, and
it can write DWG back too — so you can edit and return files to AutoCAD users.
Newer-than-R2018 files need a conversion first (ask the sender to Save As, or
convert online).

## Can I use it on my phone or tablet?

Cadelo works in any modern mobile browser for viewing and light editing.
Precision drafting is much easier with a mouse and keyboard on a laptop or
desktop — that's true of every CAD program.

## Why does the first load take a while?

You're downloading and starting a full CAD engine (compiled to WebAssembly)
plus the graphics pipeline. The first visit is the slowest; the browser caches
everything for much faster subsequent loads.

## What's the difference between DWG and DXF?

DWG is Autodesk's proprietary format; DXF is its open, documented exchange
format. DXF is the safest for sharing with other software (laser cutters, CNC
shops, Inkscape, FreeCAD). Cadelo reads and writes both. More in the
[file formats guide](/docs/file-formats/).

## Is my drawing private?

Yes. Files never leave your device. The flip side: there's no server-side
backup, so keep your own backups of important files.

## Why are there ads?

Ads are the business model that keeps Cadelo free for everyone — no
subscriptions, no per-feature fees, no selling your data. Ads only appear in
the page chrome around the app, never over the canvas, and the
**Maximize** button hides them entirely while you work.

## Is it open source?

Yes — GPL-3.0. Cadelo is built on OpenCADStudio, an open-source Rust CAD
application. The full source is on
[GitHub](https://github.com/Cynix-7/OpenCADStudio). You can audit it, fork it,
and contribute. See the [About page](/about/) for the license details.

## Can I 3D print from Cadelo?

Yes. Model or import a solid, then **Export → STL** — any slicer accepts STL.
STEP export covers manufacturing-grade CAD interchange. See the
[3D modeling guide](/docs/3d-modeling/).

## Can I collaborate with other people on a drawing?

Cadelo is a local-first tool — there's no multi-user editing or cloud
collaboration (that would require uploading your files). To share work, export
the drawing (DXF is the most portable) and send it; your colleague opens it in
Cadelo or any other CAD program.

## Where are my files saved?

When you save or export in the browser, the file downloads to your device's
Downloads folder (or wherever your browser saves downloads). There's also
recent-file history on the Start tab for files opened in this browser.

## What browsers are supported?

Chrome and Edge are best (full WebGPU). Firefox works well. Safari supports
the app but may be slower on very large drawings. The app automatically falls
back from WebGPU to WebGL2 when needed.

## How do I support the project?

There's a **Donate** button in the app (opens Ko-fi) — tips are appreciated
and go toward keeping Cadelo free. Sharing the site helps too, and
contributions to the open-source project are welcome on GitHub.

## More questions?

- [Troubleshooting](/docs/troubleshooting/) — problems and fixes
- [Contact us](/contact/) — we read everything
