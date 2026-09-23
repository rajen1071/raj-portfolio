# Raj Narayan — Portfolio (React + Vite)

React port of the original static portfolio, rebuilt with functional components,
`useState`/`useEffect` hooks, and a data-driven structure (see `src/data/content.js`) —
so updating text/projects/skills no longer means editing HTML by hand.

## What changed vs the old static site
- Bootstrap's JS (modals, navbar collapse, carousel) replaced with plain React state —
  no jQuery-style DOM toggling, no `data-bs-*` attributes.
- All repeated content (skills, projects, experience, certifications, automation cards)
  now lives in `src/data/content.js` as arrays — add/edit an entry there instead of
  duplicating markup.
- Terminal "code demo" widget and hero stat counters converted to proper React
  components with `IntersectionObserver` hooks instead of inline `<script>` logic.
- Bootstrap **CSS** is kept (for the grid/utility classes) via CDN; Bootstrap **JS** is
  no longer loaded.

## Run locally
```bash
npm install
npm run dev
```
Opens at `http://localhost:5173`.

## Build for production
```bash
npm run build
```
Output goes to `dist/` — a static folder you can host anywhere.

## Deploy
- **Vercel / Netlify**: import the repo, build command `npm run build`, output dir `dist`.
- **GitHub Pages**: run `npm run build`, push the `dist/` folder to a `gh-pages` branch
  (or use the `gh-pages` npm package), and set the repo's Pages source to that branch.

## Project structure
```
src/
  components/   one file per section (Navbar, Hero, About, Experience, ...)
  data/         content.js — all text/links/images as data
  hooks/        useReveal.js — scroll-reveal hook
  App.jsx       assembles all sections
  index.css     full stylesheet (same design as the original)
public/
  assets/       all images, resume PDF
```
