---
layout: ../../layouts/DocsLayout.astro
title: "Troubleshooting"
description: "Fix common Cadelo problems: slow first load, files that won't open, GPU and rendering issues, and drawing recovery."
group: "help"
next: "/docs/faq/"
---

Most Cadelo problems have simple fixes. Start with the quick checklist, then
work through the specifics below.

## Quick checklist

1. **Use Chrome or Edge.** They have the best WebGPU support and are the most
   tested browsers for Cadelo. Firefox works too; Safari is improving but can
   be slower.
2. **Give it a moment.** The first load downloads and starts a full CAD engine —
   a few seconds is normal. Reloading doesn't make it faster; the cache does.
3. **Hard-refresh once.** <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd> after
   a big update clears stale cached files.
4. **Check the console** (F12 → Console) for red errors — they often name the
   exact problem.

## Slow first load / app takes long to start

The CAD engine is a multi-megabyte WebAssembly binary — the first visit
downloads it, and the first launch compiles it. This is normal.

- Subsequent loads use the browser cache and are dramatically faster.
- If every load is slow, your browser may be clearing storage. Check that
  site data isn't being blocked (settings → site data → Cadelo → allow).
- The progress overlay tells you which phase it's in: reading, parsing,
  references, caches, finalizing. If it stalls at "reading" on a huge file,
  that file is just big.

## A file won't open

**DWG/DXF newer than R2018:** Cadelo reads R13–R2018. If the file is newer,
ask the sender to "Save As" an older DWG or DXF version, or convert it
online first.

**Corrupted or recovered file:** when a drawing has issues, Cadelo shows a
**recovery report** when it opens. You can:

- continue working (missing/bad records are skipped with a report), or
- **Save Repaired Copy** — write the recovered drawing to a new file.

A repaired drawing must be saved as a new file (the original is left
untouched).

**Really stuck?** Try opening the file in a DXF round-trip: open in a desktop
CAD tool and Save As DXF R2000, then open that in Cadelo. DXF is the most
forgiving format for exchange.

## Rendering problems (black canvas, glitches, crash)

Cadelo renders with **WebGPU** and falls back to **WebGL2**. If the canvas is
black or glitchy:

1. **Update your browser** — WebGPU support improves with every release.
2. **Check hardware acceleration** — browser settings → system → hardware
   acceleration → on. Restart the browser.
3. **Update your GPU drivers** — especially on Windows laptops with dual
   GPUs; the browser may be using the weak integrated GPU.
4. **Try WebGL2 fallback** — if the app detects WebGPU issues it falls back
   automatically. You can force the choice in the app's Options/display
   settings if available.
5. **Disable heavy extensions** — some ad-blockers/extensions interfere with
   WebGPU contexts. Try an incognito window with extensions off.

Very large drawings (hundreds of thousands of entities) can exhaust browser
memory. Close other tabs and reload. If it's a recurring problem, split the
drawing into smaller files and use xrefs to combine them.

## Saved file went missing

- Saving in a browser downloads the file to your **Downloads** folder (or
  wherever your browser puts downloads). Check there.
- If your browser asks, **allow multiple downloads** for the site.
- The app is local-first: there is no server copy. If the file is gone, it's
  gone from the device — this is the privacy trade-off. Keep backups of files
  you care about, and use the autosave/recovery copy when a crash happens.

## Keyboard shortcuts not working

- Make sure the canvas (not a dialog) has focus. Dialogs grab keyboard input.
- The **Keyboard Shortcuts** dialog (F1 → shortcuts, or `CUI`) shows and
  edits every binding — check nothing was remapped to something unexpected.
- On macOS, shortcuts use <kbd>⌘</kbd>, not <kbd>Ctrl</kbd>.

## Command line says "Unknown command"

- Check the spelling — commands are case-insensitive but must be spelled
  right (`POLYGON`, not `POLYGAN`).
- Some desktop-only commands don't exist in the browser build. If
  autocomplete doesn't list it, it isn't there.
- Try the ribbon: every ribbon tool maps to a command, so the tool exists
  even if you don't remember the verb.

## Still stuck?

- [FAQ](/docs/faq/) — common questions
- Open the app's **Help** (F1) — it includes the keyboard shortcuts
- [Contact us](/contact/) — describe what happened and what you tried
