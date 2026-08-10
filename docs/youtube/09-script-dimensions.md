# Script C3 — Dimension a Drawing Like a Pro

- Series: Cadelo Tutorials (Tier C — workflow)
- Length target: 5:30
- SEO title: "How to DIMENSION in CAD — Linear, Aligned, Radius & Styles"
- Target query: how to dimension in autocad
- Site links: /app/, /docs/dimensions/

---

## 00:00–00:06 HOOK

Screen: undimensioned part → dimensions appear one by one.

VO: "A part without dimensions is just a picture. With dimensions, it's a
specification. Here's how to dimension like a pro — free, in your browser."

[Title card: "DIMENSIONS"]

## 00:06–00:30 THE RULE

Screen: graphic — dimensions read from geometry, never typed.

VO: "One rule before we start: dimensions in real CAD are never typed. They
measure the geometry itself. Draw a 50-unit line, dimension it, and it says
50 — automatically. Move the line, it says the new number. That's the whole
philosophy."

## 00:30–01:30 LINEAR + ALIGNED

Screen: part outline; DIMLINEAR on a horizontal edge; DIMALIGNED on a diagonal.

VO: "Type DIMLINEAR. Click one endpoint of the edge you're measuring — use
object snap — then the other. Move the mouse out and click to place the
dimension line. Horizontal or vertical, whichever way you pull it."

VO: "For a slanted edge, DIMALIGNED measures the true distance along the
angle. Same two clicks. Linear for straight, aligned for slanted — that pair
covers most of drafting."

## 01:30–02:20 RADIUS, DIAMETER, ANGULAR

Screen: circle → DIMRADIUS; DIMDIAMETER; two lines → DIMANGULAR.

VO: "Circles: DIMRADIUS for the radius — click the circle, place it. Or
DIMDIAMETER for the full diameter across. And for angles between two lines,
DIMANGULAR — click line one, line two, place the arc. Radii get an R prefix
automatically, diameters the diameter symbol."

## 02:20–03:20 DIMENSION STYLES

Screen: open Dimension Style Manager; change arrow size, text height, units.

VO: "Now make it look right. The Dimension Style Manager controls everything:
arrowheads and their size, text height and font, extension line offsets, and
units — decimal, architectural, fractional. Change a setting and every
dimension using that style updates."

VO: "For a real drawing, put dimensions on their own layer — DIMENSIONS, cyan,
on top of everything. And set the style once, before you start dimensioning."

## 03:20–04:10 EDITING + TOLERANCES

Screen: double-click a dimension, edit text; Properties → tolerance.

VO: "Double-click a dimension to edit its text — add a prefix like 2x for a
repeated hole, or a note. And in the Properties panel you'll find tolerances:
symmetric plus-minus, deviation, or limits. A hole dimensioned 10 plus 0.1
minus 0 — that's a spec, not a suggestion."

## 04:10–04:50 CHAIN & BASELINE

Screen: DIMCONTINUE across a row of holes; DIMBASELINE from one edge.

VO: "For a row of holes, two accelerators: DIMCONTINUE chains dimension after
dimension from the last one — click, click, click down the row. DIMBASELINE
keeps measuring from the same starting edge, which machinists love because
every tolerance references one datum."

## 04:50–05:20 RECAP + CTA

Screen: recap — measure, style, layer, tolerance.

VO: "Recap: measure with DIMLINEAR and friends, style them with dimension
styles, keep them on a DIMENSIONS layer, and add tolerances for real specs.
Free, in your browser — link below. Subscribe for the next video: make a
title block."

---
## Notes for recording
- Demo on a machined part (flange or bracket) — not a floor plan — so
  radius/diameter/tolerance demos make sense. Different visual from C1/C2.
- The tolerance moment is the "pro" payoff — slow it down.
- On-screen captions: `DIMLINEAR`, `DIMALIGNED`, `DIMRADIUS`, `DIMANGULAR`,
  `DIMCONTINUE`, `DIMBASELINE`, `DIMSTYLE`.
- Thumbnail: part with callout arrows; overlay "SPEC IT RIGHT".
