[HC_Extract_README.md](https://github.com/user-attachments/files/27445322/HC_Extract_README.md)
# HC Extract — METRC Batch Builder
### Hydrocarbon Extraction Department · Batch Tracking & Yield Management

---

## Overview

HC Extract is a mobile-first web app built to streamline production batch creation for the hydrocarbon extraction department. Technicians log biomass inputs, output weights, and METRC tag assignments directly from their phones as each run is completed. All data syncs to a shared database in real time, giving management full visibility into daily production without requiring manual reporting.

---

## Getting Started

**URL:** `https://bertgoodie.github.io/ExtractionTracker/`

**Facility Code:** *(provided separately by management)*

On first open the app will ask for the facility code. Enter it and tap **Enter**. Your device will be remembered — you won't need to enter the code again unless you clear your browser data.

**Add to Home Screen (recommended)**
For the best experience, add the app to your phone's home screen so it opens full-screen like a native app.

- **iPhone (Safari):** Tap the Share icon → Add to Home Screen
- **Android (Chrome):** Tap the three-dot menu → Add to Home Screen

---

## Workflows

### Stage 1 — Extraction (Biomass → Product)

Used for all direct biomass runs. Biomass type is automatically assigned based on the product selected.

| Product | Biomass |
|---|---|
| Crude Oil | Fresh Frozen Flower, Cured Flower, or Trim (you select) |
| Live Badder | Whole Plant Fresh Frozen (auto) |
| Cured Badder | Cured Flower or Trim (you select) |

**Steps:**
1. Tap **+** to start a new batch
2. Select the output product
3. Enter strain name — the 4-character strain code generates automatically
4. Enter date and your name
5. Scan or manually enter each source package METRC tag and its weight
6. Record the output tag (scan or type) and output weight
7. Review the auto-generated batch ID and yield %
8. Save as **In Progress** or **Complete**

---

### Stage 2 — Diamonds Harvest (Crude → Diamonds / THCa)

Used when harvesting diamonds from crude. HTE mass remains on the crude tag and is logged separately.

- Batch ID is always formatted as `THCa-POW-MMDDYY`
- Source crude tags are scanned/entered manually along with the batch ID they came from
- Diamonds can be harvested from multiple crude batches onto one tag
- HTE weight is tracked per crude source package

---

### Stage 2 — Vape Cartridges (Live Resin Vape / Cured Resin Vape)

Used when filling carts directly from live or cured badder/crude.

- Select **Live Resin Vape** (from Live Badder) or **Cured Resin Vape** (from Crude / Cured Badder)
- Multiple flavors/SKUs can be added per batch, each with its own tag and weight

---

### Stage 3 — Liquid Diamonds (Diamonds → Liquid Diamonds)

Used to convert diamonds into liquid diamonds. No strain entry required — product is always derived from THCa.

---

### Stage 3 — Liquid Diamond Vape (Liquid Diamonds → Vape)

Used when blending liquid diamonds with terpenes for vape cartridges.

- The **flavor name** drives the batch ID — first 4 characters become the strain code
- Example: flavor "Watermelon" → Batch ID `WATE-LDV-050626`
- Multiple flavor/SKU outputs per batch are supported

---

## Barcode Scanning

Every tag input field has a scan button (barcode icon). Tap it to open the camera scanner. Align the METRC barcode within the frame — it will auto-confirm on a successful read.

If the camera is unavailable, all tag fields also accept manual keyboard entry. USB/Bluetooth barcode scanners (keyboard wedge mode) work automatically — just focus the tag field and scan.

**Massachusetts METRC tags are 24 characters.** The app will not accept shorter entries.

---

## Batch ID Format

Batch IDs are auto-generated based on strain, product, and date.

```
[STRAIN CODE] - [PRODUCT CODE] - [MMDDYY]

Examples:
  APFR-CRUDE-050626      Apple Fritter → Crude Oil, May 6 2026
  WEED-LBDR-050626       Wedding Cake → Live Badder
  THCa-POW-050626        Diamonds harvest (always this format)
  WATE-LDV-050626        Watermelon flavor Liquid Diamond Vape
```

**Strain codes** are 4 characters, auto-generated from the strain name:
- Single word: first 4 letters (`Gelato` → `GELA`)
- Two words: first 2 of each (`Apple Fritter` → `APFR`)
- Numbered strains: letters + number, 5 chars max (`GMO #5` → `GMO5`)

Strain codes can be manually edited at the strain code field during batch creation. Each code should be unique per strain — no two different strains should share a code.

---

## Managing Batches

### Active vs. Complete

When saving a batch you choose **In Progress** or **Complete**.

- **In Progress** batches appear on the dashboard Active section and are expected to still be processing (purging, curing, etc.)
- **Complete** batches move to the Recently Completed section

### Marking Complete

From any active batch's detail screen, tap **✓ Mark Complete**. A checklist prompt will appear reminding you to verify all details against METRC before confirming.

### Reopening a Batch

Completed batches can be moved back to In Progress from their detail screen using **↩ Reopen Batch**.

### Editing a Batch

Tap **✎ Edit Batch** from the batch detail screen (active batches only by default, but reopened batches can also be edited). Editable fields include:

- Batch ID
- Output tag
- Source package weights (and add/remove packages)
- Notes

### Weight Adjustments (Purge Tracking)

Use **+ Add Mass** or **− Subtract Mass** buttons in the Edit screen to adjust output weight over time. Each adjustment requires a reason (e.g. "Post-purge weigh-in", "Transfer loss"). A full history of all adjustments is visible on the batch detail screen.

---

## Dashboard

The dashboard shows a live snapshot of today's production:

**Biomass section** — counts and weights for Stage 1 runs only (crude, badder)

**Downstream section** — diamonds harvested, HTE collected, liquid diamonds, and vape output for the day

**Active Batches** — all in-progress runs; tap any card to view full detail

**Recently Completed** — last 4 completed batches

---

## Search

Tap the 🔍 icon in the top right from any screen. Search by:

- Full or partial batch ID (e.g. `APFR`, `THCa-POW`, `CRUDE`)
- Last 2–8 digits of any METRC tag number
- Full 24-character tag (scan or type)

Results show both active and completed batches. Tap any result to go to its detail screen.

---

## Settings

Tap the gear icon in the bottom nav to access Settings.

**Product Codes** — customize the code used in batch ID generation for each product type. Changes apply to all future batches.

**Yield Thresholds** — set the green/amber/red cutoffs for each product type. The yield bar and badge on every batch card reflects these thresholds.

---

## Yield Color Guide

| Color | Meaning |
|---|---|
| 🟢 Green | At or above your "Good" threshold |
| 🟡 Amber | Between your "OK" and "Good" thresholds |
| 🔴 Red | Below your "OK" threshold |

Default thresholds can be adjusted per product in Settings.

---

## Notes for Technicians

- Always confirm the output tag scanned matches the physical label on the package before saving
- For diamonds batches, record HTE weight accurately — it stays on the crude tag in METRC and affects your compliance reporting
- If you make a mistake after saving, use **Edit Batch** rather than deleting and re-creating — the edit history is preserved
- The app works offline if you lose WiFi during a run. Changes will sync automatically when connection is restored

---

*HC Extract v7 · Twisted Growers · Hydrocarbon Dept*
