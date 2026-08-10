# Script C2 — Layers, Colors & Linetypes — Organize Like a Pro

- Series: Cadelo Tutorials (Tier C — workflow)
- Length target: 5:00
- SEO title: "How to Use LAYERS in CAD — Colors, Linetypes & Layer States"
- Target query: autocad layers tutorial
- Site links: /app/, /docs/layers/

---

## 00:00–00:06 HOOK

Screen: one-color mess → organized multi-layer drawing.

VO: "A drawing where everything is one color is a drawing nobody can work
with. Layers fix that — and it's free, in your browser."

[Title card: "LAYERS"]

## 00:06–00:35 WHY LAYERS

Screen: floor plan with everything visible vs same plan with furniture frozen.

VO: "Layers are folders for your geometry: walls in one, doors in another,
dimensions in a third. You get three superpowers: color control, visibility
control, and edit locking — all per group, not per object."

## 00:35–01:30 CREATE + ASSIGN

Screen: type LAYER; create WALLS/DOORS/DIMENSIONS; select geometry → layer
dropdown.

VO: "Type LAYER, or LA, to open the Layer Manager. Click New, name it WALLS,
click New again — DOORS, then DIMENSIONS. Give each a color by clicking the
swatch: walls white, doors yellow, dimensions cyan."

VO: "Now select the door geometry and assign it. The layer dropdown on the
ribbon shows the current layer — pick DOORS. Same for the dimensions. Objects
inherit their layer's color, so the whole drawing re-colors instantly."

## 01:30–02:30 ON/OFF, FREEZE, LOCK

Screen: toggle visibility, freeze, lock and try to edit.

VO: "Three switches per layer: the lightbulb toggles visibility — click it
and the door disappears from view. The sun freezes it — hidden AND skipped,
which speeds up big drawings. The padlock locks it — I can still see the
doors, but I can't edit them. Great for a background you don't want to
accidentally move."

## 02:30–03:20 LINETYPES

Screen: open layer properties, change WALLS linetype to Hidden; draw a line.

VO: "Linetypes are next. Set a layer's linetype to Hidden, or Center, or
Dashed, and everything on that layer draws with the pattern. Centerlines for
symmetry axes, hidden lines for obscured edges — the classic drafting
conventions. If a dashed line looks solid, the pattern is too small — bump
the linetype scale up until the dashes read clearly."

## 03:20–04:00 LAYER STATES

Screen: Layer State Manager — save "ALL", freeze DIMENSIONS, save "NO DIMS",
switch between.

VO: "The power move: layer states. The Layer State Manager saves a snapshot
of which layers are on, frozen, or locked. Save 'everything', then freeze the
dimensions and save 'no dims'. Flip between them with a click — one state for
working, one for presenting, one for plotting. No more toggling twenty layers
by hand."

## 04:00–04:40 BYLAYER HABIT

Screen: Properties panel showing BYLAYER on an object.

VO: "Final habit: keep objects on BYLAYER. That's the default — the object
uses its layer's color and linetype. The moment you start hard-coding colors
on objects, your layers stop meaning anything. BYLAYER, always. The SETBYLAYER
command resets any object that drifted."

## 04:40–05:00 RECAP + CTA

Screen: recap — Layer Manager → create/color → switches → states.

VO: "Layers: create them, color them, switch them, save their states. It's
the difference between a drawing and a mess. Try it free in Cadelo — link
below. Subscribe for the next video: dimensions."

---
## Notes for recording
- Use the floor plan from C1 as the demo drawing (continuity between videos).
- The lock demo (try to move a locked door, watch it refuse) is memorable —
  make it a full beat.
- On-screen captions: `LAYER`, `SETBYLAYER`, `LAYERSTATE`.
- Thumbnail: same drawing, half organized; overlay "ORGANIZE LIKE A PRO".
