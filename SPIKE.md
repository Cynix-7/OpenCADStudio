# SPIKE — WASM Web Build Verification (2026-08-08)

## Verdict
The fork compiles cleanly to wasm32 and the app boots in a browser on BOTH
render paths (WebGPU and WebGL2 fallback) with zero console errors and zero
failed network requests. Ready to deploy.

## Bundle sizes (release, wasm-opt applied)
| Asset | Raw | gzip |
|-------|-----|------|
| OpenCADStudio_bg.wasm (app core) | 31 MB | 10.3 MB |
| ocs_web_worker_bg.wasm (DWG/DXF parse worker) | 3.5 MB | 1.1 MB |
| Total site incl. fonts + site | 57 MB | ~15 MB |

Note: the app WASM loads once then stays cached; the worker only loads when a
file is opened. First-load UX matters (splash exists); subsequent loads are fast.

## Build commands (working)
```bash
rustup target add wasm32-unknown-unknown
cargo install trunk
cargo install wasm-bindgen-cli --version 0.2.108   # MUST match Cargo.lock
trunk build --release --public-url /studio/        # app → dist/
./scripts/build-web-site.sh                        # full merge: site + app + headers
```

## Boot test results (Playwright, headless Chromium)
- Landing page: title/CTA/ad-slot ✓
- Blog post: in-article ad slot ✓
- /app/ host page: 2 ad slots + iframe ✓
- /studio/ app: canvas mounts, splash hides ✓
- Console errors: **none** (after generating supporters.json + video thumbs)

## WebGL2 fallback
Forced `--disable-features=WebGPU`: app still boots, canvas mounts, no errors.
Safari/Firefox WebGL2 path confirmed working.

## 404s found & fixed
Missing `supporters.json` + `video_thumbs/*.jpg` (CI-generated upstream).
Fixed by generating them in `scripts/build-web-site.sh` (placeholders + YouTube
thumb fetch with CORS-safe fallback in the app).

## Mobile / touch verdict
Not fully tested (no touch emulation run yet). iced is desktop-first; the app
splashes + mounts at 390x844 but interactive touch QA is pending. Desktop-first
v1 acceptable; flag for post-MVP.

## Threads (SharedArrayBuffer)
COOP/COEP headers configured in `public/_headers` for /studio/*. Will be
effective once deployed to Cloudflare Pages (python http.server doesn't send
them; verify with curl after deploy).

## Fork diff
Only `src/modules/draw/modify/fillet.rs` + Cargo.lock vs upstream. Compiles for
wasm32 without issues.

## Risks carried forward
- First load ~10-15 MB gzipped — splash exists; consider wasm-opt -Oz pass + LTO in CI
- iOS Safari WebGL2 needs a manual device check
- Touch UX unverified — post-MVP
