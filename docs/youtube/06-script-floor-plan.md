# Script C1 — Draw a Floor Plan from Scratch (Free, Browser CAD)

- Series: Cadelo Tutorials (Tier C — project)
- Length target: 10:00
- SEO title: "Draw a Floor Plan from Scratch — Free, in Your Browser (No AutoCAD)"
- Target query: draw floor plan
- Site links: /app/, /docs/getting-started/, /docs/layers/, /docs/dimensions/

---

## 00:00–00:08 HOOK

Screen: empty canvas → fast montage of the finished floor plan appearing.

VO: "A full floor plan, from a blank canvas — for free, in your browser, with
no install and no account. Here's exactly how."

[Title card: "FLOOR PLAN FROM SCRATCH"]

## 00:08–00:40 PLAN + SETUP

Screen: the finished plan on screen as reference; then new drawing.

VO: "Here's what we're building: a two-room layout with walls, a door, a
window, and dimensions. The whole workflow is: outline the rooms with OFFSET,
add the door and window, then dimension it. Three steps."

VO: "Start at Cadelo — link below — and press Ctrl+N for a new drawing. First,
turn on the grid and set Ortho on — F7 and F8. Ortho keeps every line at 0 or
90 degrees, which is exactly what we want for a plan."

## 00:40–02:00 ROOM OUTLINES

Screen: draw outer rectangle, then OFFSET inward for walls.

VO: "Step one, the outer wall. Type RECTANG, click a start corner, and type
the size — 8000 by 5000, Enter. That's our 8 by 5 meter building."

VO: "Now the wall thickness. Type OFFSET, distance 200, Enter. Click the
rectangle, click inside — a wall outline, 200 thick, all the way around. That
one command did the whole perimeter."

VO: "For the inner wall, draw a line from the midpoints of the top and bottom
walls — use object snap, F3, to catch the midpoints. Then OFFSET that line by
200 to make the divider wall between the two rooms."

## 02:00–03:30 DOOR

Screen: trim the wall line where the door goes; draw the door swing.

VO: "The door needs a gap in the wall. Type TRIM, press Enter to use
everything as a cutting edge, and click the wall section where the door goes.
Then draw the door leaf — a short line, and an arc for the swing."

VO: "Quick recap of the arc: ARC, click the hinge point, click the door leaf
end, then click the open position. It doesn't need to be perfect — the
dimensions will lock it down in a minute."

## 03:30–05:00 WINDOW

Screen: trim a gap on the outer wall; draw double line + centerline.

VO: "Same idea for the window: TRIM a gap in the outer wall, then draw the
window with two parallel lines — a quick OFFSET of one line by 80 — and a
centerline through the middle."

VO: "Put the window on its own layer. Which brings us to step two: layers."

## 05:00–06:30 LAYERS

Screen: open Layer Manager; create WALLS, DOORS, WINDOWS, DIMENSIONS, TEXT;
assign colors; set WALLS current and recolor existing objects.

VO: "Type LAYER. Create four layers: WALLS, DOORS, WINDOWS, and DIMENSIONS.
Give each a color — walls white, doors yellow, windows green, dimensions cyan.
Now select the door geometry and move it to the DOORS layer — the Properties
panel or the layer dropdown does it. Same for the window."

VO: "Now the drawing is organized: I can freeze DIMENSIONS later, or toggle
furniture on and off. This is the habit that separates clean CAD from a
drawing nobody can untangle."

## 06:30–08:00 DIMENSIONS

Screen: DIMLINEAR on outer wall; then the door width; set DIMENSION layer
current first.

VO: "Step three, dimensions. Set DIMENSIONS as the current layer, then type
DIMLINEAR. Click the two corners of the outer wall — use object snap — and
pull the dimension line out. 8000 appears, measured from the geometry, no
typing."

VO: "Dimension the door opening and the window the same way. Because the
dimensions read the real geometry, if I move the door later, the dimension
updates. Try it — grab the door, move it, watch the number follow."

## 08:00–09:00 TITLE INFO + FINISH

Screen: add TEXT for room labels ("LIVING", "KITCHEN"); turn grid off.

VO: "Last touch: labels. Type TEXT, click in each room, and type the room
name — LIVING, KITCHEN. Press Enter twice to finish. Turn the grid off with
F7, zoom to fit, and there's the plan: walls, door, window, layers,
dimensions, labels — a complete, presentable floor plan."

## 09:00–09:40 SAVE + EXPORT

Screen: Ctrl+S save as DWG; mention DXF for sharing.

VO: "Save with Ctrl+S as a DWG. Sending it to someone with other software?
Export as DXF instead — every CAD program reads it. Or Ctrl+P and export a
PDF to email it."

## 09:40–10:00 CTA

Screen: end card — finished plan + "OPEN CADELO — FREE" + subscribe.

VO: "That's a full floor plan in about ten minutes, free, in your browser.
Everything you saw is in the links below: the app, and the written guides on
layers and dimensions. Subscribe for more projects — next up: HATCH, fills
and patterns."

---
## Notes for recording
- This is the flagship project video: slow, deliberate, every keystroke
  visible. Cut between the live drawing and title cards naming each phase
  (STEP 1 OUTLINES / STEP 2 LAYERS / STEP 3 DIMENSIONS).
- Keep the plan simple (2 rooms) — the point is the workflow, not the layout.
- Record at 60fps; zoom in tight for the TRIM/ARC moments so clicks are
  readable.
- On-screen captions: all commands + values (`RECTANG 8000,5000`,
  `OFFSET 200`, `TRIM`, `ARC`, `LAYER`, `DIMLINEAR`, `TEXT`).
- Thumbnail: finished floor plan split with a browser-tab badge; overlay
  "FREE BROWSER CAD".
