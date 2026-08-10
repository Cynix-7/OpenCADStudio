---
layout: ../../layouts/DocsLayout.astro
title: "Blocks & Attributes"
description: "Create and insert blocks in Cadelo, define attributes, and edit block references — reuse geometry with intelligence."
group: "drafting"
next: "/docs/text/"
---

A **block** is a named group of objects that behaves as one unit. Draw a door
once, save it as a block, and insert it a hundred times — every insert is a
reference, so the file stays small and the geometry stays consistent.

## Creating a block

1. Draw the geometry you want to reuse (e.g. a door, a bolt, a title block).
2. Select it.
3. Type `BLOCK` (alias `B`), or use **Insert → Block**.
4. Give the block a **name**, pick a **base point** (the point it will snap by
   when inserted — usually a corner or the center), and confirm.

The selected geometry is replaced by a block reference. The definition is
stored in the drawing.

> **Tip:** `WBLOCK` writes a block definition to its own file so you can reuse
> it across drawings. `BMAKE` opens the block-creation dialog.

## Inserting a block

Type `INSERT` (alias `I`), or use **Insert → Block**.

1. Pick the block from the list.
2. Click the insertion point — or type coordinates.
3. Set scale (or press <kbd>Enter</kbd> for 1:1) and rotation (or press
   <kbd>Enter</kbd> for 0°).

You can insert a block **multiple times** — each insert is an independent
reference. To place a whole row, use `ARRAY` on the inserted block.

## Editing blocks

- **Double-click** a block reference to edit its geometry in place
  (`REFEDIT`). Changes apply to every insert of that block.
- **Explode** a block reference (`EXPLODE`, alias `X`) to break it back into
  plain objects — useful for one-off edits, but it loses the block link.
- **Properties** on a block reference lets you change its scale, rotation, and
  per-insert overrides.

## Attributes

Attributes are text fields attached to a block — the classic use case is a
title block with PROJECT, DRAWING NO, DATE, and REV fields, or a chair tag with
a chair number.

### Defining attributes

1. Type `ATTDEF` (Insert tab → Attribute).
2. Set the **tag** (the field name, e.g. `CHAIR_NO`), the **prompt**
   (what the user is asked when inserting), and a **default value**.
3. Place the attribute text in the block.
4. Create the block as usual — the attributes travel with it.

### Inserting with attributes

When you insert a block that has attributes, you're prompted for each value.
Every insert can carry different values — same chair symbol, different numbers.

### Editing attributes

- Type `ATTEDIT` (or `-ATTEDIT` for the command-line form) to change attribute
  values on selected block references.
- `ATTSYNC` synchronizes attribute definitions across all inserts of a block
  after you change the definition.
- The **Attribute Editor** dialog (double-click a block with attributes) is the
  quickest way to edit values by hand.

## Blocks across files

- **Drag and drop** a `.dwg` or `.dxf` file into the drawing to insert its
  blocks — or use `INSERT` → Browse.
- Copy objects to the clipboard with <kbd>Ctrl</kbd>+<kbd>C</kbd>, then
  <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> pastes them as a new block.
- **Nested blocks** (blocks inside blocks) are fully supported — structure
  your drawing like a folder tree.

## What's next?

- [Text & annotation](/docs/text/) — notes and labels
- [Saving & exporting](/docs/saving-exporting/) — get your blocks into other files
