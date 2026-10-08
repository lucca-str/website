@AGENTS.md

# Project notes

Rebuild of Lucca Strecker's Framer portfolio. Read `README.md` first, then `docs/`.

- Content lives only in `src/content/` (typed; see `docs/content.md`). Components never hold copy.
- Colors via tokens (`bg-bg`, `text-fg`, `text-fg-subtle`, `ring-line`…), text via `type-*` utilities,
  timings via `src/lib/motion.ts` / `src/styles/motion.css`. No ad-hoc colors or durations (the only
  literals are the original's one-off state colors in `ContactForm` and `YouTubeFacade`).
- Breakpoints are Framer's: base = phone, `tablet:` ≥ 810px, `desktop:` ≥ 1200px.
- Server Components by default; client components never import `src/content` (registry is `server-only`).
- Before finishing a change: `pnpm lint && pnpm typecheck && pnpm build`, and `pnpm test:e2e` for behavior changes.
