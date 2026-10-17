# HANDOVER — Be Fabulous (dress-shop)

> Living project memory. **Read at the start of every session.**
> Stable rules live in `AGENTS.md`; this file tracks volatile state: what's done, what's next, and key decisions.

_Last updated: 2026-10-17_

## Current state
- **Theme: black & gold (dark)** — applied & verified across all 6 pages.
  - `--cream:#000000  --sand:#100d0a  --blush:#241c13  --clay:#d9b75b  --wine:#e9cd8a  --charcoal:#1c1712  --muted:#9c8f78  --line:#2a2218  --white:#191410`
  - `--shadow:0 18px 50px -22px rgba(0,0,0,.6)`
  - CTAs (`.btn-dark`) are gold-filled with black text; header backdrop `rgba(0,0,0,.66)`.
- Preview server: `python3 -m http.server 8000` from this dir → http://localhost:8000
- `favicon.svg`: black tile + gold dress.
- **Catalog: 62 dresses across 11 categories** (was 37/9). New categories: `workwear` (Workwear), `guest` (Wedding Guest), 3 products each. All pexels photo IDs are reused from the original 37 — no new external assets. Product ids 38–62.
- Site: 6 static pages (`index`, `collection`, `product`, `account`, `cart`, `style-finder`) + `catalog.js`; each page embeds its own inline `<style>` (identical shared classes + `:root` — keep in sync).
- **Repo:** git initialized locally on branch `main`; identity `Conor <conor@localhost>`. No remote yet — pushes pending `gh auth login` / a remote URL. `backups/` is git-ignored (superseded by git history).
- **Desktop notifications:** global opencode plugin `~/.config/opencode/plugin/notify-complete.js` shows a **top-right toast** (via `notify-send`) whenever a prompt finishes — in every project. Title `opencode · done`; body = project name + a short snippet of the reply. Skips sub-agent sessions; dedupes idle events.

## Completed
- [2026-10-17] **Multi-step demo checkout on cart.html** (replaces the old "checkout is a demo" toast). "Proceed to Checkout" opens a 3-step modal: (1) contact + address + delivery method (Standard free over $120 else $8 / Express $15 / Nominated day $12), (2) payment — demo card fields with auto-formatting (card number groups of 4, expiry auto-slash, numeric CVC) + promo code, (3) review (line items, address, payment summary, subtotal/promo/shipping/total) → Place order → confirmation screen with `BF-XXXXXX` order number. Orders saved to `localStorage["maison.orders"]`; bag cleared on success; "Continue shopping" → index#shop. Promo `FAB10` = 10% off (only valid code). All client-side, no backend, nothing leaves the browser. Escape/backdrop/× close the modal; empty-bag guard on open. Verified via headless CDP script (30 assertions: validation blocking, auto-formatting, promo on/off, express pricing, order persistence, cart clear, zero JS errors).
- [2026-10-17] **Catalog expanded: 37 → 62 dresses, 9 → 11 categories.** Added `workwear` (Workwear — desk-to-dinner structure) and `guest` (Wedding Guest) categories with 3 products each (ids 57–62); 19 more dresses spread across the existing categories (ids 38–56). All 25 new products reuse existing pexels photo IDs (37 unique images across 62 products — tint overlays differentiate). Fixed orphan `midi` slug: P8/P9 `cat:"midi"` → `"maxi"` (category label is "Maxi & Midi"; `midi` was never in CATEGORIES so those dresses were invisible to category filters). Updated style-finder quiz `cats` arrays accordingly and added workwear/guest references. Made index "Everyday" tile kicker dynamic (`${PRODUCTS.length} looks`); updated hardcoded "37 styles" blurbs on index + collection to 62. Verified headless: All(62) filter pill, 11 category pills, correct per-category counts (workwear 3, guest 3, maxi 8), product pages for new ids, zero JS errors on all 6 pages.
- [2026-10-16] **Contact the owners** on all 6 pages: gold floating `.fab` (bottom-right) + footer "Contact Us" link (both `data-contact`) open `#contactModal` — name/email/message form, demo submit → toast + reset (no backend). Added a dim+blur backdrop to `.modal`, and a `≤560px` rule so the toast sits above the FAB (they overlapped on mobile). Also gave `style-finder.html` the `toast()` helper it was missing. Verified headless via CDP (open/Escape/close/submit on all 6 pages, desktop + 390px, zero runtime exceptions).
- [2026-10-15] Replaced the abandoned email-notify idea with a **desktop notification**: global plugin `~/.config/opencode/plugin/notify-complete.js` pops a top-right toast on prompt completion.
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
- [ ] **Restart opencode** to load the desktop-notification plugin (`notify-complete.js`).
- [ ] Connect a git remote when ready (`gh auth login` or a remote URL), then push `main`.

## Key decisions / gotchas
- Theme vars are overloaded: `--charcoal` = dark surfaces (and previously body text); `--sand`/`--white` = both surface bg and text-on-dark. A pure `:root` swap is insufficient — targeted rule edits are required (documented in each snapshot's `palette.css`).
- Each page's CSS is duplicated inline; **keep `:root` and the shared classes in sync across all 6 pages**.
- `catalog.js` product swatch colours are terracotta-based and independent of the site theme.
- History: git (branch `main`) plus `backups/` theme snapshots; no remote yet.
- Notification plugin runs inside opencode's Bun runtime and shells out to `/usr/bin/notify-send`; failures are caught and logged, never disrupt a session. Omarchy pins toasts **top-right** (see `/usr/share/omarchy/shell/plugins/notifications/Service.qml`).
- Verify without eyes: headless Chrome computed-style checks + `google-chrome-stable --headless=new --dump-dom` (see AGENTS.md Notes).

## Theme history
terracotta/burgundy (original) → pink/gold (2026-10-14) → terracotta (2026-10-15) → **black/gold (current, 2026-10-15)**.
Backups for each are in `backups/`.
