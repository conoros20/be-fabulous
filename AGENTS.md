# Dress Shop Project
User: Sir (Conor)

> START OF SESSION: read `HANDOVER.md` first — it holds the living project state, completed tasks, and TODOs.

Project: Be Fabulous — static HTML/CSS/JS storefront
- `index.html` — main storefront (hero, collections, shop grid, story, reviews, newsletter, footer)
- `style-finder.html` — "Browse My Style" quiz page + results (linked from the hero button)
- `account.html` — sign in / create account (client-side demo: localStorage, no backend, password not stored)
- `cart.html` — full cart/bag page: lists items, qty ±, remove, subtotal, demo checkout (reads `localStorage["maison.cart"]`)
- `collection.html` — category/collection page; reads `?cat=<slug>` (or no param = all) and lists that category's dresses; category pills + footer "Shop by style" links point here
- `catalog.js` — shared data/logic: SIZE_CHART/ALL_SIZES, CATEGORIES, IMG, P, PRODUCTS, money, stars, catLabel
- `favicon.svg` — black tile with gold dress silhouette; linked via `<link rel="icon">` in every page
- `HANDOVER.md` — living project memory (current state / completed / TODO); read at the start of every session and keep updated
- Fonts: Cormorant Garamond + Jost
- Color palette + design system defined in CSS vars (--cream/--sand/--clay/--wine/--charcoal...)
- Each page has its own inline <style> (shared classes, e.g. .card/.btn/.foot-grid) — keep them in sync
- All pages load catalog.js before their inline <script>
- Header account button (index.html + style-finder.html) links to account.html
- Cart is persisted client-side in `localStorage["maison.cart"]` as `[{ key, id, size, qty }]`; the header cart icon on every page links to `cart.html`
- Product detail links use `product.html?id=<id>` (one photo per dress; colour switch = CSS tint overlay)
- Contact the owners: floating `.fab` button + footer `[data-contact]` link open `#contactModal` on every page (name/email/message form → demo toast, no backend); its CSS/JS is duplicated across all 6 pages — keep in sync

## Workflow (live preview)
- Serve: `python3 -m http.server 8000` from `/home/da/Work/dress-shop`
- View: http://localhost:8000 (browser in left pane), terminal on right
- Edits: modify `index.html` directly; browser refresh needed (Ctrl+R) to see changes
- Keep server running while editing
- Browser refresh: use wtype -M ctrl r -m ctrl (if browser focused) or request refresh

## Backups (theme snapshots)
- `backups/` holds dated full-copy snapshots (all pages + `catalog.js` + `favicon.svg` + `palette.css`) of previous themes
- `backups/black-gold-2026-10-15/` — current theme (black / gold dark)
- `backups/terracotta-burgundy-2026-10-15/` — terracotta / burgundy / cream theme
- `backups/pink-gold-2026-10-14/` — pink / gold / white / cream theme
- Each snapshot's `palette.css` lists the exact colour vars; restore by copying those vars into every page's inline `:root` (plus matching `rgba()` values and the rule tweaks noted in the file)

## Knowledge & handover
- `HANDOVER.md` is the durable project memory across sessions/compactions — read it at the start of every session
- Keep it current: move finished work into "Completed", add new work to "TODO", record key decisions/gotchas
- Division of labour: `AGENTS.md` = stable rules/conventions; `HANDOVER.md` = volatile state

## Conventions
- Edit existing files only (don't create new files unless explicitly requested)
- Match existing code style, indentation, naming
- Add code comments where they aid understanding — aim for clear, meaningful, accurate comments (not noise)
- Keep changes minimal and focused
- Call user: Sir

## Notes
- Auto-refresh not configured. Can add tiny live-reload script if desired.
- Hyprland (v0.56.2): `hyprctl dispatch ...` prints a spurious lua-parser error but the legacy dispatch still runs; prefer wtype for keystrokes.
- Verify without eyes: `google-chrome-stable --headless=new --dump-dom http://localhost:8000/<page>` runs the JS so you can grep rendered output.
