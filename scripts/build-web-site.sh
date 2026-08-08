#!/usr/bin/env bash
# Combined build for OpenCAD Web: WASM app (Trunk) + content site (Astro).
# Output: dist/ — ready for `wrangler pages deploy dist`.
#
# Layout:
#   dist/            → Astro site (/, /app/, /blog/, legal pages)
#   dist/studio/     → Trunk WASM app (iframed by /app/)
#   dist/_headers    → COOP/COEP for /studio/* only
set -euo pipefail
cd "$(dirname "$0")/.."

echo "==> Building Astro site"
(cd site && npm run build)

echo "==> Building WASM app (Trunk)"
trunk build --release --public-url /studio/

echo "==> Merging app into site dist/studio/"
mkdir -p site/dist/studio
cp -r dist/* site/dist/studio/

echo "==> Generating content assets (supporters.json + video thumbnails)"
python3 - <<'PY'
import json, shutil, urllib.request
from pathlib import Path

studio = Path("site/dist/studio")

# supporters.json — placeholder until the Patreon CI generator runs.
supporters = studio / "supporters.json"
if not supporters.exists():
    supporters.write_text("[]\n", encoding="utf-8")

# video thumbnails — mirror the upstream CI generator (same-origin copies).
videos = json.loads((studio / "videos.json").read_text(encoding="utf-8"))
thumbs = studio / "video_thumbs"
thumbs.mkdir(exist_ok=True)
headers = {"User-Agent": "Mozilla/5.0"}
for entry in videos:
    vid = entry.get("id", "")
    if len(vid) != 11:
        continue
    out = thumbs / f"{vid}.jpg"
    if out.exists():
        continue
    try:
        req = urllib.request.Request(
            f"https://i.ytimg.com/vi/{vid}/mqdefault.jpg", headers=headers
        )
        with urllib.request.urlopen(req, timeout=20) as resp:
            out.write_bytes(resp.read())
    except Exception as exc:
        print(f"thumb {vid}: {exc}")
print(f"thumbs: {len(list(thumbs.glob('*.jpg')))}")
PY

echo "==> Copying _headers"
cp public/_headers site/dist/_headers

echo "==> Sizes"
du -sh site/dist site/dist/studio
ls -lh site/dist/studio/*.wasm site/dist/studio/worker_pkg/*.wasm 2>/dev/null || true

echo "==> Done: deploy site/dist with wrangler pages deploy site/dist"
