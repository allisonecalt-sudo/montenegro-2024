# montenegro-2024

**What:** A simple, shareable one-page recap of Allison & Avital's Montenegro
trip — **July 11–21, 2024**. Day-by-day itinerary, where they stayed, and how
they got around.

**Why:** So when people ask "what did you do on your trip?" there's one clean
link to send. Not a planner, not complex — just what actually happened.

**Decided:**

- One scrolling page. Calm, single-accent design (Adriatic teal + a sunset gold
  reserved only for the Durmitor leg and the birthday day).
- Shows only what actually happened. (The original Terrae-Car rental was
  cancelled — they drove a Toyota Yaris picked up at Tivat instead — so the
  recap reflects the real trip, not the cancelled booking.)

**Built:**

- `index.html` — the whole recap (hero, route, 11 days, lodging, getting around)
- `src/styles.css` — styles
- `src/main.ts` — tiny scroll fade-in (page works fine with no JS)
- Full stack: TypeScript (strict), ESLint, Prettier, Vite, GitHub Actions deploy

**Sources:** second-brain `creative/writing/montenegro.md` +
`montenegro-raw-notes.md` (narrative); Gmail booking confirmations (dates,
lodging, flights).

**Next:** push to a public repo + enable GitHub Pages, then share the link.

## Develop

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # type-check + production build to dist/
npm run lint
```
