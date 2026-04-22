# Dusit Learning — Interactive Revenue Training

> A modular, self-paced revenue management training programme for Dusit Hotels & Resorts. Built for GMs, Directors of Sales, Revenue, and Marketing across the Dusit estate.

**Live:** https://lmsdusit.dhihospitality.com/
**LMS:** dusitlearning.com (Moodle)
**Last updated:** 22 April 2026

## Modules

| Path | Title | Status |
|------|-------|--------|
| `modules/module1-rate-architecture.html` | Rate Architecture & Market Segmentation | Complete |
| `modules/module2-segmentation.html` | Revenue Tracking Segmentation | In progress |

Root `/` redirects to Module 1.

## Workflow

**Local preview** — install the *Live Server* VS Code extension, right-click any `.html` file, pick **Open with Live Server**. Browser auto-reloads on save.

**Auto deploy** — configured via a Claude Code Stop hook in `.claude/settings.json`. Every time Claude finishes a turn in which files changed, the hook automatically runs `git add -A && git commit && git push`. No manual command, no extra terminal window. Live site updates ~30s after each push.

Manual push (for edits made outside Claude):
```
git add .
git commit -m "<message>"
git push
```

## Structure

```
.
├── index.html                  redirect to modules/module1-...
├── CNAME                       lmsdusit.dhihospitality.com
├── modules/                    module HTML files
├── assets/                     fonts, logos, fonts.css
└── .claude/settings.json       Stop hook for auto-deploy
```

## Notes

See `dusit_lms_handoff.md` for full technical spec, commercial structure, and next steps.
