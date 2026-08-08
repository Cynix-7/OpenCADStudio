---
layout: ../../layouts/BlogPost.astro
title: "Browser CAD: Why WebAssembly Changes Drafting Forever"
description: "Desktop CAD apps are heavy, expensive, and locked to one machine. WebAssembly lets a full CAD engine run in your browser at native speed. Here's how."
date: 2026-08-06
---

For forty years, serious CAD software has lived on the desktop. You installed a 5-gigabyte application, prayed the license server was up, and hoped the IT department didn't lock down your machine. Browser "CAD" meant either a slow JavaScript approximation or a thin client streaming pixels from a server farm.

**WebAssembly changed that.** And the implications for anyone who drafts are bigger than most people realize.

## What WebAssembly actually is

WebAssembly (WASM) is a low-level bytecode format that browsers can execute at near-native speed. Here's the part that matters for CAD: **you can compile existing C++ and Rust codebases to WASM and run them in the browser, unchanged.**

That's not a toy. The Rust CAD engine inside OpenCAD Web — the same engine that runs as a native desktop app — is compiled straight to WASM. The browser is running the real thing, not a reimplementation.

## What that means for rendering

CAD is GPU work. Lines, arcs, shaded solids, pan and zoom across a 10,000-entity drawing — that used to require native OpenGL.

- **WebGPU** — the modern browser graphics API — is now available in Chrome, Edge, and Android, with Firefox and Safari following. It gives WASM CAD direct access to your GPU.
- **WebGL2** covers the rest as a fallback.

OpenCAD Web uses [wgpu](https://wgpu.rs/), the same Rust graphics abstraction used by the desktop version. The rendering path is identical; only the driver changes. GPU-accelerated CAD in a browser tab, at desktop-app framerates.

## What that means for files

DWG parsing is a hard problem — it's a 40-year-old binary format with layers, blocks, xrefs, and more edge cases than anyone wants to count. Doing it in JavaScript would be a decade-long rewrite. Doing it in WASM means:

- The **existing, battle-tested Rust parser** (acadifc, from the OpenAEC Foundation) runs in your browser
- DWG R13 through R2018 reads and writes work exactly as they do on desktop
- Parsing happens **on your device** — no uploading your engineering drawings to a stranger's server

## Why "no upload" matters

Almost every "free online CAD" tool before WASM worked by uploading your file to a server, converting it, and streaming the result back. That model has three problems:

1. **Privacy** — your floor plan, machine part, or patent-pending bracket now lives on someone else's disk
2. **Latency** — every pan, zoom, and click is a round trip to a data center
3. **Cost** — the server has to render for you, so "free" means either ads out the wazoo or a paywall

WASM inverts all three: the file never leaves your machine, interaction is instant, and the compute is free (your own CPU and GPU). All a static site has to pay for is bandwidth — which is why a free, ad-supported model is sustainable.

## The new CAD stack, summed up

| Old stack | New stack (WASM) |
|---|---|
| 5 GB desktop install | One browser tab |
| License server / dongle | Free, open source |
| Upload to render | Render locally on your GPU |
| One machine | Any device with a browser |
| Proprietary format lock-in | DWG/DXF/SVG/STL/STEP export |

## The honest caveats

WASM CAD isn't magic:

- **First load is heavier** — a full CAD engine is a few megabytes of WASM. Subsequent loads hit the cache.
- **Huge assemblies** need memory; browsers are generous but not infinite. Fine for 2D drafting and moderate 3D.
- **Bleeding-edge GPU features** arrive on desktop first, then browsers. The core workflows — 2D drafting, DWG/DXF, dimensioning — are already solid.

## Try it

OpenCAD Web puts a real CAD engine in your browser, free, with no account. Open a DWG, draft a part, export to DXF for your laser cutter — all in one tab.

**[Open the app](/app/) — it's free and private.**

**Related:** [Open DWG Files Online Free](/blog/open-dwg-online-free/) · [What Is a DXF File?](/blog/what-is-dxf-file/)
