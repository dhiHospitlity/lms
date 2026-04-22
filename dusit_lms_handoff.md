# Dusit LMS Project — Handoff Document
*For continuity across chat sessions*

---

## 1. Project Overview

**Client:** Dusit Hotels & Resorts
**Project:** Interactive Revenue Training Programme
**Delivery platform:** dusitlearning.com (Moodle, open-source LMS)
**LMS login:** Microsoft SSO (Azure AD)
**Demo URL:** https://learn.dhihospitality.com
**Hosted on:** GitHub Pages via custom subdomain (GoDaddy DNS — CNAME record pointing `learn.dhihospitality.com` to GitHub Pages)

---

## 2. Commercial Structure

### What is already signed and contracted
- Content writing only — $175/hr
- This covers instructional design, scripting, scenarios, quiz questions, do/don't, checklists for all 24 modules
- No tech build is included in this contract

### What is being proposed separately (tech build)
- One-time setup fee: $1,000 (covers the interactive engine, design system, SCORM framework, hosting configuration)
- Development rate: $100/hr
- Estimated effort for full curriculum (24 modules): 86–113 hours
- Total estimated tech investment: $9,600–$12,300 + $1,000 setup
- Both workstreams (content + tech) run in parallel — no delay between sign-off and delivery
- No additional software licenses, subscriptions, or recurring costs
- Output hosted on a dedicated Dusit subdomain, fully owned by the client

### Important notes
- Module 1 is already built and live at the demo URL — do not mention this to the client. The setup fee covers the framework that was built during this session.
- Estimate does not yet account for videos, screen recordings, or complex animations — this is a variable to discuss on a call before confirming scope
- Topics like Duetto RMS, Amadeus Tools, Synxis, D-Edge may require screen recordings or tool walkthroughs which add 3–5hrs per topic

---

## 3. Full Curriculum — 24 Modules

| # | Category | Topic | Sub-topic | Duration | GM | DOS | DOR | DOM |
|---|---|---|---|---|---|---|---|---|
| 1 | Rate Architecture | Dusit Rate Architecture | Rationale Rate Structure | 45 min | ✓ | ✓ | ✓ | ✓ |
| 2 | Rate Architecture | Dusit Tracking | Golden Rules of Tracking | 30 min | ✓ | | ✓ | |
| 3 | Rate Architecture | Dusit Rationale Pricing Strategy | Pricing Methods | 45 min | ✓ | ✓ | ✓ | ✓ |
| 4 | Rate Architecture | Rate Loading and Channel Management | Synxis and D-Edge | 30 min | ✓ | | ✓ | |
| 5 | Market | Understanding your Market | Defining your Comp Set | 30 min | ✓ | ✓ | ✓ | ✓ |
| 6 | Market | Driving RGI | Reading your Index | 30 min | ✓ | ✓ | ✓ | |
| 7 | Data | DDP Reports | List of reports | 60 min | ✓ | ✓ | ✓ | ✓ |
| 8 | Data | Using Amadeus Tools | Agency360 / Demand360 | 45 min | ✓ | ✓ | ✓ | |
| 9 | Automation | Duetto RMS | Setup + Reports | 60 min | ✓ | ✓ | ✓ | |
| 10 | Commercial | Total Commercial Mindset | Segment wise forecast | 60 min | ✓ | ✓ | ✓ | ✓ |
| 11 | Strategy | Dusit Reports | Budget prep + MPR | 45 min | ✓ | ✓ | ✓ | |
| 12 | OTA | Contracted OTAs | OTA commissions | 30 min | ✓ | ✓ | ✓ | ✓ |
| 13 | OTA | Endorsed Promotions | Rate products | 30 min | ✓ | ✓ | ✓ | ✓ |
| 14 | OTA | OTA Extranet | Mapping + restrictions | 30 min | | ✓ | ✓ | ✓ |
| 15 | Performance | Visibility & Conversion | Major OTAs | 15 min | | ✓ | ✓ | ✓ |
| 16 | Performance | Competitors & Fairshare | Market share | 15 min | | ✓ | ✓ | ✓ |
| 17 | Performance | OTA Reports | Reports | 15 min | | ✓ | ✓ | |
| 18 | BI | Dusit BI Report | Snapshot + DDP | 15 min | | ✓ | ✓ | |
| 19 | Parity | Rate Parity Tools | Fornova / Lighthouse | 15 min | ✓ | ✓ | ✓ | ✓ |
| 20 | Parity | Parity Score | Target tracking | 15 min | ✓ | ✓ | ✓ | ✓ |
| 21 | Tools | Fornova | Rate shopping | 15 min | | ✓ | ✓ | |
| 22 | Tools | Test Booking | Manual + automated | 15 min | | ✓ | ✓ | |
| 23 | Marketing | Media & Advertising | Paid ads | 15 min | | ✓ | ✓ | ✓ |
| 24 | Content | Content Management + ICE Portal + New OTA Setup + Roles & Responsibilities | Various | 60 min | ✓ | ✓ | ✓ | ✓ |

**Total training time:** 12.5 hours across 24 modules
**Audience roles:** GM (General Manager), DOS (Director of Sales), DOR (Director of Revenue), DOM (Director of Marketing)
**Format:** One module per topic, with role-based content tags — not separate versions per role

---

## 4. Module 1 — What Was Built

**Title:** Rate Architecture & Market Segmentation
**File:** `dusit_module1_rate_architecture.html`
**Status:** Complete, live at https://learn.dhihospitality.com

### Architecture
- Single self-contained HTML file (no external dependencies except Google Fonts)
- 14 navigable slides (index 0–13), results rendered as overlay inside slide 13
- No fake 15th slide — single clean navigation model
- SCORM-ready (needs manifest wrapper to deploy to Moodle)

### Design System
- **Fonts:** Outfit (headings, 400/600/700/800) + DM Sans (body, 400/500)
- **Primary blues:** `--b900:#001F3F` through `--b50:#EEF6FD`
- **Gold accent:** `--gold:#C9A84C`
- **Canvas:** 900×540px (16:9), scales via JS `scaleCanvas()` with `transform-origin:top left`, positioned absolutely within stage
- **Stage background:** `var(--g100)` light grey
- **Canvas background:** white (`var(--white)`)
- **Split-left panels:** `var(--b800)` navy blue
- **Logo:** Dusit logo from `https://cdn.prod.website-files.com/686e2126992edd7b040ec218/689a91cf61756f4f15c57114_dusit.avif`

### Slide Map
| Slide | ID | Type | Description |
|---|---|---|---|
| 0 | s-0 | s-dark (white bg) | Overview — 5 Questions, clickable card grid |
| 1 | s-1 | s-split | Right Guest — b800 left panel, vs-cards right |
| 2 | s-2 | s-split | Right Time — b800 left panel, vs-cards right |
| 3 | s-3 | s-split | Right Channel — b800 left panel, vs-cards right |
| 4 | s-4 | s-split | Right Conditions — b800 left panel, vs-cards right |
| 5 | s-5 | s-split | Right Room — b800 left panel, room ladder right |
| 6 | s-6 | s-dark (white+navy) | The System — animated BAR propagation diagram |
| 7 | s-7 | s-light | Do / Don't — two-column grid |
| 8 | s-8 | s-off | Checklist — 5 items, quiz unlock gate |
| 9–13 | s-9 to s-13 | s-quiz | Quiz Q1–Q5, one per slide |
| — | res-overlay | overlay inside s-13 | Results screen (not a separate slide) |

### Navigation Model
- `N = 14` navigable slides
- `CONTENT_END = 8`, `QUIZ_START = 9`
- Core functions: `nav(n)`, `prev()`, `next()`, `syncUI()`, `buildDots()`
- Quiz unlocks when: all content slides visited AND all 5 checklist items ticked
- Results: `finishQuiz()` shows `.results-overlay` inside s-13, `retryQuiz()` resets

### Slide 6 — Animated BAR Propagation
- BAR hub centre, 6 channel cards (Corporate, OTA, Dusit Gold, Direct, GDS, Wholesale)
- SVG pulse dots travel along dashed spokes on tap
- Channel cards flash and rate values update as pulses arrive
- BAR cycles: ฿4,000 → ฿5,000 → ฿3,500 → ฿4,500
- Auto-fires once when slide becomes visible via MutationObserver
- `window.triggerAnim()` exposed globally

### Fullscreen System
- Toggle: `toggleFS()` — browser Fullscreen API, CSS fallback for iframes
- `#fs-top` (44px, logo + exit button) overlays top in fullscreen
- `#fs-bot` (50px, prev/next/dots) overlays bottom in fullscreen
- `scaleCanvas()` measures real DOM element heights — no hardcoded magic numbers
- `webkitfullscreenchange` listener added for Safari

### Quiz System
- `QA = [1,2,1,1,1]` — correct answer indices (0-based)
- `answer(qi, chosen, btn)` — disables options, shows feedback, reveals next button
- `finishQuiz()` — shows results overlay, marks quiz complete in sidebar
- `retryQuiz()` — resets all state, returns to s-9
- Quiz dots update via `updateQDots()` — single `cur - QUIZ_START` rule

### Known Resolved Issues
- Stray `res-overlay` div in s-9 removed (was causing wrong overlay to show)
- Split-right now has `display:flex; justify-content:center` for vertical centering
- Canvas uses `position:absolute; transform-origin:top left` with JS centering
- Fullscreen class driven by browser API promise, not pre-emptive toggle
- Unlock logic requires BOTH all content visited AND all checklist items ticked

---

## 5. GitHub & Hosting Setup

- **Repo:** GitHub Pages (main branch, root folder)
- **File name:** must be `index.html` for GitHub Pages to serve it as homepage
- **Custom domain:** `learn.dhihospitality.com`
- **DNS:** GoDaddy CNAME record — Name: `learn`, Value: `yourgithubusername.github.io`
- **SSL:** Auto-provisioned by GitHub Pages
- **Deployment:** Push `index.html` to repo → live within ~60 seconds

---

## 6. SCORM Packaging (pending)

Not yet built. When needed:
- Wrap HTML file + `imsmanifest.xml` in a zip
- Target: **SCORM 1.2** (most compatible with Moodle)
- Manifest needs: course title, SCO identifier, launch file reference
- Moodle upload: Admin → Course → Add activity → SCORM package → upload zip
- Tracks: completion status, quiz score, time spent
- Staff login via existing Microsoft SSO — no new accounts needed

---

## 7. Pending Decisions Before Proceeding

1. **Client approval** — waiting for response to the demo email sent to K. Gyan and K. Moss
2. **Format clarification** — need to confirm on a call whether any modules require videos, screen recordings, or tool walkthroughs (Duetto, Amadeus, Synxis, D-Edge). This affects the hour estimate.
3. **Tech contract** — separate SOW needed for the interactive build ($1,000 setup + $100/hr)
4. **Brand alignment** — colours, fonts, tone to be confirmed once client responds
5. **SCORM vs hosted** — client to confirm preferred delivery method (SCORM upload to Moodle or external link from Moodle)

---

## 8. Next Modules to Build (in order of curriculum)

| Priority | Module | Category | Duration | Notes |
|---|---|---|---|---|
| 2 | Dusit Rationale Pricing Strategy | Rate Architecture | 45 min | Similar format to Module 1 |
| 3 | Rate Loading and Channel Management | Rate Architecture | 30 min | May need Synxis/D-Edge screenshots |
| 4 | Dusit Tracking | Rate Architecture | 30 min | |
| 5 | Total Commercial Mindset | Commercial | 60 min | Complex — segment forecast content |
| 6 | DDP Reports | Data | 60 min | Report walkthroughs needed |
| 7 | Duetto RMS | Automation | 60 min | Screen recording likely needed |
| 8 | Using Amadeus Tools | Data | 45 min | Agency360/Demand360 walkthroughs |

---

## 9. File Reference

| File | Location | Status |
|---|---|---|
| Module 1 HTML | `/mnt/user-data/outputs/dusit_module1_rate_architecture.html` | Complete |
| This handoff doc | `/mnt/user-data/outputs/dusit_lms_handoff.md` | Current |
| SCORM wrapper | Not yet created | Pending |
| Course landing page | Not yet created | Pending |

---

*Last updated: April 2026*
*Prepared by: DHI Hospitality / Claude*
