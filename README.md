# montenegro-2024

**What:** A simple, shareable one-page reference for an 11-day Montenegro
self-drive itinerary &mdash; coast to mountains and back. Day-by-day plan,
lodging shortlist, and getting-around notes.

**Why:** A clean starting point for anyone planning a similar loop. Not a
planner, not complex &mdash; just the shape of a trip that works.

**Decided:**

- One scrolling page. Calm, single-accent design (Adriatic teal + a sunset
  gold reserved for the Durmitor leg).
- Itinerary derived from a real July 2024 trip but presented generically:
  no personal anecdotes, no calendar dates inside the day rail. Months and
  approximate durations only.

**Built:**

- `index.html` &mdash; the whole page (hero, route, 11 days, lodging, getting around)
- `src/styles.css` &mdash; styles
- `src/main.ts` &mdash; tiny scroll fade-in (page works fine with no JS)
- Full stack: TypeScript (strict), ESLint, Prettier, Vite, GitHub Actions deploy

**Sources:** second-brain `creative/writing/montenegro.md` +
`montenegro-raw-notes.md` (narrative basis); Gmail booking confirmations
(lodging, flight context).

**Next:** push to a public repo + enable GitHub Pages, then share the link.

## Develop

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # type-check + production build to dist/
npm run lint
```
