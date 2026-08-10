# Script C4 — Make a Title Block (with Attributes)

- Series: Cadelo Tutorials (Tier C — workflow)
- Length target: 6:00
- SEO title: "How to Make a TITLE BLOCK in CAD (with Attributes)"
- Target query: how to make a title block
- Site links: /app/, /docs/blocks/, /docs/text/, /docs/printing/

---

## 00:00–00:06 HOOK

Screen: blank border → title block fills with PROJECT/DATE/SCALE fields.

VO: "Every professional drawing has one — a title block with the project, the
date, the scale. Here's how to build one that auto-fills — free, in your
browser."

[Title card: "TITLE BLOCK"]

## 00:06–00:35 WHAT WE'RE BUILDING

Screen: finished title block on screen: border rectangle, grid of fields,
labels on the left, values on the right.

VO: "A title block is a border plus a set of labeled fields: PROJECT, DRAWING
NO, DATE, SCALE, DRAWN BY. The trick is to make the fields ATTRIBUTES — text
that changes per drawing — inside one BLOCK, so every sheet gets the same
frame and only the values change."

## 00:35–01:30 THE FRAME

Screen: new drawing; RECTANG for the sheet border; inner lines to make cells.

VO: "Start with the frame. Draw the sheet border with RECTANG — A3 landscape
is 420 by 297. Offset it inward by 10 for the margin line. Then draw the
cell dividers on the right side with LINE — a few quick lines at exact
offsets, and the grid is done."

## 01:30–02:30 LABELS + ATTRIBUTES

Screen: TEXT for labels; ATTDEF for the value fields.

VO: "Labels first: type TEXT and write PROJECT, DRAWING NO, DATE, SCALE,
DRAWN BY — small text, left-aligned in each cell. These never change."

VO: "Now the values as attributes. Type ATTDEF. Give the first one a TAG —
PROJECT — a prompt like 'Enter project name', and a default value. Place it
next to its label. Repeat for DATE, SCALE, DRAWN BY. Each attribute is a
field that will ask for a value."

## 02:30–03:30 MAKE IT A BLOCK

Screen: select everything; BLOCK; name TITLE_BLOCK_A3; base point corner.

VO: "Now select everything — the frame, the labels, the attributes — and type
BLOCK. Name it TITLE_BLOCK_A3, pick a base point at the corner, and confirm.
The whole thing is now one block with five attributes waiting for values."

## 03:30–04:30 INSERT + FILL VALUES

Screen: INSERT TITLE_BLOCK_A3 into a new drawing; answer the prompts.

VO: "Here's the payoff. Start a new drawing, type INSERT, pick
TITLE_BLOCK_A3, click where the corner goes — and it asks for each attribute:
project name, date, scale, drawn by. Type them, Enter, and the title block is
fully filled in, perfectly placed."

## 04:30–05:15 EDIT LATER

Screen: ATTEDIT / double-click block, change the date.

VO: "Need to change something? Double-click the title block — the Attribute
Editor lists every field. Change the date, and done. Every sheet of a
multi-sheet set can carry its own values while sharing the same frame. If you
tweak the frame itself — say, a bigger logo box — the block updates everywhere
it's inserted."

## 05:15–05:45 RECAP + CTA

Screen: recap — frame → ATTDEF fields → BLOCK → INSERT.

VO: "Recap: draw the frame, add attribute fields with ATTDEF, bundle it all
into a block, and insert it fresh for every drawing. Free in your browser —
link below. Subscribe for more CAD in the browser."

---
## Notes for recording
- Keep the cell layout to 4-5 fields — the point is the workflow, not a
  fancy title block.
- Show the insert-time prompts slowly; that's the magic moment.
- On-screen captions: `RECTANG`, `OFFSET`, `TEXT`, `ATTDEF`, `BLOCK`,
  `INSERT`, `ATTEDIT`.
- Thumbnail: title block with blinking fields; overlay "AUTO-FILLING".
