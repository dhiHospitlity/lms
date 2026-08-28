# Dusit LMS brand tokens — locked design system

**Status:** Locked 2026-08-28 by Prakash K after Module 1 + Module 2 shipped. Every module going forward uses these tokens verbatim. Blueprint docs from Corporate Distribution sometimes carry their own color/type direction — override those with this palette; blueprint *content* is authoritative, blueprint *visual direction* is not.

## Colors

### Navy family (primary surfaces and text)
| Token | Hex | Use |
|---|---|---|
| `--b900` | `#001F3F` | Deep navy. Hero backgrounds, sidebar, key headlines |
| `--b800` | `#003570` | 900 hover / highlight |
| `--b700` | `#004B94` | Mid navy, chips |
| `--b600` | `#1A6DC0` | Accent navy |
| `--b400` | `#5B9FD4` | Soft navy |
| `--b200` | `#B5D4F4` | Tint |
| `--b100` | `#D8EAFB` | Tint |
| `--b50` | `#EEF6FD` | Ghost tint |

### Gold (accent, use sparingly)
| Token | Hex | Use |
|---|---|---|
| `--gold` | `#C9A84C` | The Dusit gold. Accents, key-box borders, section markers, eyebrow labels, active state. Never a large surface color. |
| `--gold-l` | `#F5EDD8` | Soft gold tint. Used on deep-number panels and larger gold surfaces. |

### Neutrals
| Token | Hex | Use |
|---|---|---|
| `--g50` | `#F8F9FA` | Page background |
| `--g100` | `#E5E7EB` | Borders, dividers |
| `--g300` | `#9CA3AF` | Disabled state, muted labels |
| `--g500` | `#6B7280` | Muted text |
| `--g700` | `#374151` | Secondary text |
| `--white` | `#FFFFFF` | Card backgrounds, main copy on navy |
| `--dark` | `#0A0A1A` | Near-black text |
| `--dark2` | `#12122A` | Sidebar background |

### Radii
| Token | Value | Use |
|---|---|---|
| `--r` | `12px` | Cards, panels |
| `--rs` | `8px` | Chips, small elements |

## Typography

**Families:**
- `DusitDisplay, sans-serif` — headings, numbers, labels (700–800 weight)
- `DusitText, sans-serif` — body copy (400–500 weight)

**Scale (5 tiers, locked):**
| Tier | Size | Weight | Use |
|---|---|---|---|
| Eyebrow | 10–11px | 700 uppercase, letter-spacing 0.12–0.16em | Section labels, module tags. Always gold. |
| Body | 13px | 400–500 | Card descriptions, feedback, notes |
| Slide heading | 17–22px | 800 DusitDisplay | Slide title / concept headline |
| Price / number | 26px | 800 DusitDisplay | Figures on slide ($133, ฿4,000) |
| Deep number | 38–44px | 800 DusitDisplay | Left-panel hero numerals (pillar `deep-n`) |

**No italic anywhere.** Emphasis is weight + color only.

## Layout primitives

- **Canvas: 900 × 540 px**, scaled to viewport via CSS transform. Same canvas for every module.
- **Sidebar left, main stage right, transport bar bottom.**
- **Full-bleed navy** reserved for hooks and section-marker transitions only. Content slides sit on `--g50` with white content panels.
- **Card grids** — 2 to 4 cards per row, `border-radius: var(--r)`, subtle grey border, gold left edge on emphasis cards.
- **Key-box** — "one principle per slide" bar. White bg, gold left border (3–4px), body text with **strong** or gold keyword.
- **Section markers** — full-bleed navy, giant section number in gold, thin gold rule beneath the title, no body copy.

## Reconciling blueprint doc visual direction

When a blueprint (e.g. `OTA1-Distribution-Basic-Knowledge-Blueprint-v3.2.docx`) calls for:

| Blueprint says | We do |
|---|---|
| "Gold and blue everywhere with 30% opacity fades" | Sparse gold-as-accent, navy-as-primary. Fade on inactive elements only. |
| "40/60 split with dense text panels" | Card grid + one-key-principle. Push the fuller explanation into the audio narration. |
| "Full-bleed navy for a content slide" | Navy is reserved for hooks and section markers. Rework as light-bg content. |
| "Multi-column text layouts" | Apply the on-slide copy budget from `tone-rubric.md` — cards, not paragraphs. |
| A color outside this palette | Map to the nearest token, or escalate to Prakash before deviating. |

**Blueprint content** (narration script, on-screen text, interaction mechanics, quiz questions and feedback) is the authoritative source — build to it verbatim. **Blueprint visual direction** is discretionary — build to the house system.

## How to apply

- Every module HTML uses the same `:root { ... }` token block at the top of `<style>`.
- Any new UI uses tokens, never raw hex.
- The memory-side mirror is `~/.claude/projects/.../memory/project_brand_tokens.md` — kept in sync with this file.
