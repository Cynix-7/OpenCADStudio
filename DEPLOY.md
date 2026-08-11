# Cadelo — Deployment Guide

Free, ad-supported browser CAD (DWG/DXF) built from the OpenCADStudio fork.

## Architecture

```
https://cadelo.app/
├── /            → Astro content site (landing, blog, privacy, about, contact) + AdSense
├── /app/        → Host page: ad slots + iframe → /studio/
└── /studio/     → WASM CAD app (Trunk build), COOP/COEP isolated
```

Why the iframe: the app is a full-viewport iced canvas. Chrome around it would
overlap the app's own ribbon UI. The iframe host page keeps ads strictly outside
the app document, and COOP/COEP isolation applies only to /studio/* so ad
scripts on the host page are never affected.

## Build locally

Prereqs: Rust stable + wasm32 target, trunk, wasm-bindgen-cli (version must
match Cargo.lock — currently 0.2.108), Node 22+.

```bash
rustup target add wasm32-unknown-unknown
cargo install trunk
# match wasm-bindgen: grep -A1 'name = "wasm-bindgen"' Cargo.lock
cargo install wasm-bindgen-cli --version 0.2.108
cd site && npm install && cd ..

./scripts/build-web-site.sh
# Output: site/dist/ — site at root, app at dist/studio/, _headers included
```

## Deploy (Cloudflare Pages)

1. Domain in Cloudflare (AdSense requires a custom domain; free-host subdomains are rejected)
2. Create project: `npx wrangler pages project create cadelo --production-branch main`
3. Secrets in GitHub repo: `CF_API_TOKEN` (Pages:Edit), `CF_ACCOUNT_ID`
4. Push to main → `.github/workflows/deploy-cf-pages.yml` builds + deploys
5. Or manual: `npx wrangler pages deploy site/dist --project-name=cadelo`

Verify headers:

```bash
curl -sI https://<domain>/studio/ | grep -iE 'cross-origin'
# Expect: COOP: same-origin, COEP: require-corp
```

## AdSense

1. Content requirements (already built): landing page, 3+ blog posts, privacy,
   about, contact — all at /
2. Apply at https://adsense.google.com from the live domain
3. On approval: create ad units (leaderboard 728x90, in-article, responsive)
4. Set unit IDs in:
   - `site/src/components/AdSlot.astro` (slot + client props at call sites)
   - Call sites: `index.astro` (landing), `BlogPost.astro` (in-article),
     `app.astro` (host page above/below iframe)
5. Until approval, slots render a neutral "Advertisement" placeholder at fixed
   min-height — zero layout shift, no broken layout when blocked.

## Donate button

The app's DONATE button opens `https://ko-fi.com/cynixdev` by default
(Ko-fi — 0% platform fee, simple one-off tips and memberships). Override at
build time:
```bash
OCS_DONATE_URL=https://ko-fi.com/yourpage trunk build --release
```
The app's own support link (WEBVERSION) is similarly overridable via
`OCS_WEB_URL`.

## Revenue model

- All features free; ads in chrome slots only; never over the canvas
- AdSense pays 68% of ad revenue; CAD niche RPM ~$5–15 (Tier-1 traffic)
- 100k visits/mo @ $10 RPM ≈ $1k/mo
- Secondary networks (media.net, Adsterra, Ezoic) once traffic justifies

## GPL-3.0 compliance

- Source: https://github.com/Cynix-7/OpenCADStudio (linked in site footer + About)
- License: GPL-3.0, inherited from upstream OpenCADStudio
- Hosting a fork is fine; keep source link; no relicensing

## Files

| Path | Purpose |
|------|---------|
| `scripts/build-web-site.sh` | Combined build (Astro + Trunk + headers) |
| `site/` | Astro content site |
| `public/_headers` | COOP/COEP + security headers |
| `.github/workflows/deploy-cf-pages.yml` | CI deploy to Cloudflare Pages |
| `.github/workflows/pages.yml` | Upstream GitHub Pages workflow (reference) |
