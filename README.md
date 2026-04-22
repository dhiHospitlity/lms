# Dusit Learning — Interactive Revenue Training

**Live:** https://lmsdusit.dhihospitality.com/
**LMS:** dusitlearning.com (Moodle)
**Last updated:** April 2026

## Modules

| Path | Title | Status |
|------|-------|--------|
| `modules/module1-rate-architecture.html` | Rate Architecture & Market Segmentation | Complete |
| `modules/module2-segmentation.html` | Revenue Tracking Segmentation | In progress |

Root `/` redirects to Module 1.

## Workflow

**Local preview** — install the *Live Server* VS Code extension, right-click any `.html` file, pick **Open with Live Server**. Browser auto-reloads on save.

**Auto deploy** — double-click `start-auto-deploy.bat`. A terminal window opens and every change you save to any file is auto-committed and pushed to GitHub within ~5 seconds. Leave the window open while you work. Live site updates ~30s after each push.

Manual push (if you prefer):
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
├── auto-deploy.ps1             file watcher + git push
└── start-auto-deploy.bat       double-click to run the watcher
```

## Notes

See `dusit_lms_handoff.md` for full technical spec, commercial structure, and next steps.
