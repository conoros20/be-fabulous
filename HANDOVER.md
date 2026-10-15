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

## Completed
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
- (nothing pending — awaiting direction)

## Key decisions / gotchas
- Theme vars are overloaded: `--charcoal` = dark surfaces (and previously body text); `--sand`/`--white` = both surface bg and text-on-dark. A pure `:root` swap is insufficient — targeted rule edits are required (documented in each snapshot's `palette.css`).
- Each page's CSS is duplicated inline; **keep `:root` and the shared classes in sync across all 6 pages**.
- `catalog.js` product swatch colours are terracotta-based and independent of the site theme.
- No git repo; history is captured via `backups/` snapshots and this file.
- Verify without eyes: headless Chrome computed-style checks + `google-chrome-stable --headless=new --dump-dom` (see AGENTS.md Notes).

## Theme history
terracotta/burgundy (original) → pink/gold (2026-10-14) → terracotta (2026-10-15) → **black/gold (current, 2026-10-15)**.
Backups for each are in `backups/`.
