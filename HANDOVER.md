# HANDOVER — Be Fabulous (dress-shop)

> Living project memory. **Read at the start of every session.**
> Stable rules live in `AGENTS.md`; this file tracks volatile state: what's done, what's next, and key decisions.

_Last updated: 2026-10-15_

## Current state
- **Theme: black & gold (dark)** — applied & verified across all 6 pages.
  - `--cream:#000000  --sand:#100d0a  --blush:#241c13  --clay:#d9b75b  --wine:#e9cd8a  --charcoal:#1c1712  --muted:#9c8f78  --line:#2a2218  --white:#191410`
  - `--shadow:0 18px 50px -22px rgba(0,0,0,.6)`
  - CTAs (`.btn-dark`) are gold-filled with black text; header backdrop `rgba(0,0,0,.66)`.
- Preview server: `python3 -m http.server 8000` from this dir → http://localhost:8000
- `favicon.svg`: black tile + gold dress.
- Site: 6 static pages (`index`, `collection`, `product`, `account`, `cart`, `style-finder`) + `catalog.js`; each page embeds its own inline `<style>` (identical shared classes + `:root` — keep in sync).
- **Repo:** git initialized locally on branch `main`; identity `Conor <conor@localhost>`. No remote yet — pushes pending `gh auth login` / a remote URL. `backups/` is git-ignored (superseded by git history).
- **Mail notifications:** project plugin `.opencode/plugin/mail-notify.js` emails `conorseanosullivan@gmail.com` after every completed turn in this project (last assistant text + project path + timestamp + files changed). Sends via `~/.config/opencode/mail/send.py` using Gmail SMTP creds in `~/.config/opencode/mail/.env` (user-maintained App Password, chmod 600).

## Completed
- [2026-10-15] Added email-notification automation: `.opencode/plugin/mail-notify.js` (fires on `session.idle`, skips sub-agent sessions) + `~/.config/opencode/mail/send.py` SMTP helper.
- [2026-10-15] Initialized local git repo (`main`), initial commit `afc836e`; `backups/` ignored.
- [2026-10-15] Applied black & gold dark theme to all 6 pages (verified headless: correct palette, zero JS/console errors).
- [2026-10-15] Fixed search-bar typed-text colour (was browser-default black → invisible on the black bar; now gold `var(--clay)`).
- [2026-10-15] Recoloured `favicon.svg` to black tile + gold dress.
- [2026-10-15] Updated style-finder colour-mood swatch palettes to the dark/gold family.
- [2026-10-15] Theme snapshots saved under `backups/` (`terracotta-burgundy-2026-10-15`, `black-gold-2026-10-15`).
- [2026-10-14] Menu overlay fix (`#mobOverlay` + hamburger/backdrop JS) across all pages.
- [2026-10-14] Fixed TDZ bug (`let io` → `var io`) in index/collection/style-finder — root cause of dead menu/search.
- [2026-10-14] Site-wide search: icon+bar+Enter → `collection.html?q=`; `collection.html` reads `?q=`.
- [2026-10-14] Robust product matching in `catalog.js` (`COLOR_NAMES`, `colorNames`, `productSearchText`, `matchProduct`).
- [2026-10-14] Renamed site "Maison Élan" → "Be Fabulous".

## TODO
- [ ] Mail automation activation: paste the Gmail **App Password** into `~/.config/opencode/mail/.env` (`MAIL_PASS=...`), then **restart opencode** so the plugin loads. Test-send with `python3 ~/.config/opencode/mail/send.py --subject test --body-file <(echo hi)`, then a real turn.
- [ ] Connect a git remote when ready (`gh auth login` or a remote URL), then push `main`.

## Key decisions / gotchas
- Theme vars are overloaded: `--charcoal` = dark surfaces (and previously body text); `--sand`/`--white` = both surface bg and text-on-dark. A pure `:root` swap is insufficient — targeted rule edits are required (documented in each snapshot's `palette.css`).
- Each page's CSS is duplicated inline; **keep `:root` and the shared classes in sync across all 6 pages**.
- `catalog.js` product swatch colours are terracotta-based and independent of the site theme.
- History: git (branch `main`) plus `backups/` theme snapshots; no remote yet.
- Mail plugin runs inside opencode's Bun runtime and uses the plugin's `$` shell; a send failure is caught and logged, never disrupts a session.
- Verify without eyes: headless Chrome computed-style checks + `google-chrome-stable --headless=new --dump-dom` (see AGENTS.md Notes).

## Theme history
terracotta/burgundy (original) → pink/gold (2026-10-14) → terracotta (2026-10-15) → **black/gold (current, 2026-10-15)**.
Backups for each are in `backups/`.
