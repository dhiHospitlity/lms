# Dusit rate constants — locked figures across all modules

**Status:** Locked 2026-08-28 by Prakash K after auditing Module 1's BAR propagation slide. Prior module drafts used placeholder figures inherited from an early spec (Corporate −12%, Wholesale −30%, Gold −10%, OTA −20%, GDS −18%) — **all wrong for Dusit**. Locked values below.

---

## Segment discounts (off BAR)

| Segment | Discount | Notes |
|---|---|---|
| **Dusit Gold** | **15% off** | Loyalty programme rate. Applied automatically at check-in when the member is tagged DLOYAL. |
| **Corporate** | **15% off** | Contracted corporate accounts (CORPP / CORGL / CORPK / CORPL). |
| **Wholesale** | **23% off** | Contracted wholesalers (WHODM / WHOLS / WHOLN / WHOPM). Updated from 22% → 23% on 2026-08-29 per Dusit. |

## Channel parity

| Channel | Rate to guest | Notes |
|---|---|---|
| **Direct** (dusit.com, phone, walk-in) | **BAR** | Hotel keeps the full amount |
| **OTA** | **BAR (parity)** | Same rate as Direct. Commission comes off hotel-net, not the guest rate |
| **GDS** | **BAR (parity)** | Same rate as Direct. Commission comes off hotel-net |

**Public rates hold parity across every public channel.** Qualified rates (Gold, Corporate, Wholesale) sit below BAR by design — they are earned, not public.

## Rate-plan discounts (separate from segment)

| Rate plan | Discount | Notes |
|---|---|---|
| **Flexible** | none | Full BAR. Hotel carries cancellation risk. |
| **Advance Saver** | **10% off** | Prepaid, non-refundable. Property sets the advance-window minimum. |
| **Stay Longer** | **15% off** | Minimum 3 nights. |

## Worked examples

At BAR = $133:
- Dusit Gold: $133 × 0.85 = **$113**
- Corporate: $133 × 0.85 = **$113** (same as Gold at 15%)
- Wholesale: $133 × 0.77 = **$102** (rounded)
- Direct / OTA / GDS: **$133** (parity)

At BAR = ฿4,000 (propagation animation, Module 1 The System slide):
- Corporate: ฿3,400
- Dusit Gold: ฿3,400
- Wholesale: ฿3,080
- Direct / OTA / GDS: ฿4,000

## Room supplements (Module 1)

Added AFTER the segment discount (the "wrong order, wrong price" rule):
- Deluxe: +$17
- Suite: +$50
- Ocean view: +$25
- Breakfast: +$10

## How to apply

- Any new module referencing segment discounts uses these numbers. Do not import from the module blueprints (`dusit-learning-v8/blueprints/*.docx`) without cross-checking here — the blueprints predate this correction.
- When authoring narration, spoken values use the "words" form ("fifteen percent," "one hundred and thirteen dollars"). See [tone-rubric.md](./tone-rubric.md).
- **OTA and GDS are parity channels.** Do NOT describe them as discounted rates. If you catch text saying "OTA rate at −20%" or similar, treat it as a bug.
- If Prakash / Moss / Gyan corrects any of these figures in future, update this file and the matching memory (`project_dusit_rate_constants.md`) first, then sweep every affected module.
