# Cadelo YouTube Tutorial Series — Research & Video Plan

Status: RESEARCH COMPLETE → PLAN + SCRIPTS (v1)

## 1. Research summary — what people search in CAD tutorials

Desktop research across YouTube search results, channel view counts, and
keyword patterns (2025–2026):

### Highest-volume evergreen operations (AutoCAD-tutorial demand)
1. **TRIM / EXTEND** — the single most-tutorialed modify command; every
   beginner channel has one. Huge volume.
2. **OFFSET** — second-tier modify command; walls, parallel geometry.
3. **FILLET / CHAMFER** — corner cleanup; classic "essential commands" pairing.
4. **ARRAY** (polar & rectangular) — pattern repetition; strong search.
5. **HATCH / HATCHEDIT** — fills and section marks.
6. **LAYERS** — organization; every "how to" beginner course covers it.
7. **DIMENSIONS** — annotation; "how to dimension" is a staple.
8. **Title blocks** — "how to make a title block" has multiple 40K+ view
   videos on AutoCAD channels.
9. **Floor plan from scratch** — the single most-watched project format
   (AutoCAD floor plan tutorials routinely pull 100K+ views).
10. **Practice drawings** — dimensioned 2D exercises (flange, bracket, gasket);
    strong engagement/retention format, usually part of course funnels.
11. **"Open DWG without AutoCAD"** — enormous evergreen search intent from
    contractors, PMs, clients, students who receive DWG files but have no
    AutoCAD. Autodesk's own free-viewer pages rank, plus Innerscene, DWGSee…
    This is Cadelo's **hero topic**: it's exactly what the app does, and the
    browser/no-install/no-account angle beats every competitor's friction.
12. **DWG → PDF / export** — sharing/printing intent; high volume.

### What the official OpenCADStudio playlist already covers (avoid duplicating)
From `dist/videos.json` (the app's own tutorial feed):
- Create 2D Chair DWG Drawing in Open CAD Studio
- Open CAD Studio: Object Snap Explained
- How to Install Open CAD Studio – Free DWG Authoring Tool
- Open CAD Studio as a Free DWG File Viewer with No Login Needed
- Create a 2D DWG Drawing & Export to PDF

Those are **desktop-install** videos. None cover the **web version** (Cadelo),
and none are short single-command tutorials. Our series fills the gap: web
app, no install, focused operation videos.

### Channel strategy observations
- Short, focused, single-operation videos (2–6 min) win search traffic.
- Long "full course" videos win watch-time but take 10× the effort.
- The free/browser-CAD niche is under-served: almost all tutorials assume
  AutoCAD (paid). Positioning "the same commands, free, in your browser" is
  differentiated.
- Titles that mirror the search query ("How to Use the Trim Command in
  AutoCAD") get the click-through; we mirror the phrasing with "…in Cadelo"
  / "…without AutoCAD".

## 2. Recommended series structure

Three tiers, 10 videos in the launch batch (4 more in a follow-up batch).

### Tier A — Hero / top-of-funnel (highest search volume)
| # | Title (working) | Target query | Est. length |
|---|---|---|---|
| A1 | Open DWG Files Without AutoCAD — Free, No Install | "open dwg without autocad" | 3:30 |
| A2 | Cadelo in 5 Minutes — Free Browser CAD for Beginners | "free cad browser", "cad for beginners" | 5:00 |
| A3 | How to Convert DWG to PDF Online Free (No Upload) | "dwg to pdf" | 3:00 |

### Tier B — Core command tutorials (evergreen search)
| # | Title (working) | Target query | Est. length |
|---|---|---|---|
| B1 | How to Use the TRIM Command (in Your Browser) | "how to use trim command" | 3:00 |
| B2 | How to Use OFFSET — Parallel Lines & Walls | "how to use offset autocad" | 3:00 |
| B3 | FILLET & CHAMFER Explained | "fillet chamfer tutorial" | 3:30 |
| B4 | Polar & Rectangular ARRAY | "how to use array in cad" | 4:00 |
| B5 | HATCH Explained — Fills, Patterns, Scales | "how to hatch in autocad" | 3:30 |

### Tier C — Project / workflow videos (engagement + retention)
| # | Title (working) | Target query | Est. length |
|---|---|---|---|
| C1 | Draw a Floor Plan from Scratch (Free, Browser CAD) | "draw floor plan" | 10:00 |
| C2 | Layers, Colors & Linetypes — Organize Like a Pro | "autocad layers tutorial" | 5:00 |
| C3 | Dimension a Drawing Like a Pro | "how to dimension in autocad" | 5:30 |
| C4 | Make a Title Block (with Attributes) | "how to make a title block" | 6:00 |

### Follow-up batch (later)
- Practice Drawing #1: Split Flange (dimensioned exercise walkthrough)
- Practice Drawing #2: Bracket / Gasket
- Blocks & Attributes deep dive
- Export to STL for 3D printing
- DWG vs DXF — which format when (cross-post of blog post)

## 3. Launch order & cadence

Week 1: A1 (hero) → B1 (TRIM) → B2 (OFFSET)
Week 2: B3 (FILLET) → B4 (ARRAY) → C1 (floor plan)
Week 3: B5 (HATCH) → C2 (layers) → C3 (dimensions)
Week 4: C4 (title block) → A2 → A3

- 3 videos/week for the first month, then 1–2/week.
- Every video ends with the same CTA: "Open Cadelo free — link below — your
  files never leave your device."
- Description always links: /app/, the matching docs page, and the matching
  blog post (SEO interlink loop: YouTube → site → docs → YouTube).

## 4. Production format (consistent across all)

- **Length:** 3–6 min (Tier C up to 10).
- **Screen:** browser, Cadelo web app, dark theme. 1080p. Mouse cursor
  highlighted. Keystrokes shown as on-screen captions when typing commands.
- **Audio:** clean VO, no music bed (or -20 dB bed). Intro ≤ 8 seconds.
- **Intro hook (first 5 s):** state the pain + the payoff, e.g. "Got a DWG
  file and no AutoCAD? You can open and edit it right now, free, in your
  browser." Then logo stamp + title card.
- **Structure:** hook → what we're making → steps (one command per video) →
  result → CTA. No filler.
- **Captions:** burned-in lower-third for command names; full subtitles file
  (SRT) per video for accessibility + SEO.
- **Thumbnails:** dark bg (#16161c), cyan accent (#00b8d4), the drawing being
  made, 3–4 word overlay ("NO AUTOCAD?", "TRIM LIKE A PRO"). Big, readable.
- **End screen:** subscribe + next video (playlist auto-plays).

## 5. SEO kit per video (template)

- **Title:** mirrors the target query, ≤ 60 chars.
- **Description (first 2 lines):** what you'll learn + "Free, no install, no
  account — open Cadelo here: https://opencad.app/app/" (or deployed domain).
- **Tags:** command name, "cad tutorial", "free cad", "browser cad", "dwg
  without autocad", "dxf", "open source cad".
- **Hashtags:** #cad #dwg #cadtutorial #freecad #browser
- **Playlist:** "Cadelo Tutorials" — all videos go in it.
- **Docs/blog interlinks:** each script lists its matching site page.

## 6. Files in this package

- `00-video-plan.md` — this file
- `01-script-hero-open-dwg.md` — A1 full script
- `02-script-trim.md` — B1 full script
- `03-script-offset.md` — B2 full script
- `04-script-fillet-chamfer.md` — B3 full script
- `05-script-array.md` — B4 full script
- `06-script-floor-plan.md` — C1 full script
- `07-script-hatch.md` — B5 full script
- `08-script-layers.md` — C2 full script
- `09-script-dimensions.md` — C3 full script
- `10-script-title-block.md` — C4 full script
- `11-script-cadelo-in-5-min.md` — A2 full script
- `12-script-dwg-to-pdf.md` — A3 full script

## 7. Open questions / next steps

- Confirm the public domain for links (README says opencad.app once deployed;
  DEPLOY.md implies Cloudflare domain). Scripts use `/app/`-relative links
  with a placeholder that must be filled at publish time.
- Channel branding: channel name, banner, profile — assumed "Cadelo" with the
  site's dark/cyan identity unless told otherwise.
- Voiceover: recorded by user vs. TTS — scripts are written neutral (VO
  style), adaptable either way.
- Practice drawings (flange/bracket/gasket) need dimensioned source images —
  generate in-app and screenshot at recording time.
