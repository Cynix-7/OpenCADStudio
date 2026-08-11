# Cadelo

Free, ad-supported browser CAD — 2D drafting and 3D modeling with native DWG/DXF
support, running entirely in your browser via WebAssembly (WebGPU with WebGL2
fallback). No install, no account, no upload: your files never leave your device.

**Try it:** <https://cadelo.app>

Fork of [OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)
(GPL-3.0), rebuilt as a web-first product with a content site and ad-funded
model. All features are free; ads appear only in page chrome, never over the
canvas.

## Architecture

```
/            Astro content site (landing, blog, privacy, about, contact) + AdSense
/app/        Host page: ad slots + iframe → /studio/
/studio/     The WASM CAD app (Trunk build), COOP/COEP isolated for wasm threads
```

The app is a full-viewport iced canvas, so the host page iframes it — ads stay
strictly outside the app document, and cross-origin isolation (COOP/COEP) applies
only to `/studio/*` so ad scripts on the host page are unaffected.

## Features

- **DWG / DXF** read/write (R13–R2018), STL/STEP/OBJ export, PDF plot
- GPU-accelerated via WebGPU (wgpu), 4× MSAA, WebGL2 fallback
- 2D drafting: lines, polylines, circles, arcs, constraints, dimensions, layers
- 3D modeling via the truck kernel (native; solid3d excluded on web)
- Command line with autocomplete, ribbon UI, i18n (8 languages)
- Local-first persistence: browser OPFS + IndexedDB, no backend

## Web build

```bash
rustup target add wasm32-unknown-unknown
cargo install trunk
cargo install wasm-bindgen-cli --version 0.2.108   # match Cargo.lock
cd site && npm install && cd ..
./scripts/build-web-site.sh    # builds Astro site + WASM app + headers → site/dist
```

Bundle (release, wasm-opt): app ~10 MB gzipped, parse worker ~1 MB gzipped.

## Deploy

See [DEPLOY.md](DEPLOY.md) — Cloudflare Pages (free), COOP/COEP headers, CI
workflow included. AdSense application requires a live custom domain with
content (landing + blog + legal pages are all built in `site/`).

## License

GPL-3.0, inherited from upstream OpenCADStudio. Source is available in this
repository; see [LICENSE](LICENSE).

## Repository layout

| Path | Purpose |
|------|---------|
| `src/`, `crates/` | The CAD engine + web worker (Rust) |
| `site/` | Astro content site (landing, blog, legal, ad slots) |
| `scripts/build-web-site.sh` | Combined build (site + app + headers) |
| `public/_headers` | COOP/COEP + caching + security headers |
| `.github/workflows/deploy-cf-pages.yml` | CI deploy to Cloudflare Pages |
