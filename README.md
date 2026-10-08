# lucca-strecker.com

Portfolio of Lucca Strecker, product designer. A faithful rebuild of the original Framer site
(same layout, typography, motion and URLs) as a statically generated Next.js app.

## Stack

- **Next.js 16** (App Router, TypeScript): every page is prerendered at build time
- **Tailwind CSS 4**: design tokens and text styles live in `src/styles/`
- **Motion**: scroll reveals, word reveal, layout/drag animations; hovers use CSS with Framer's springs
- **Lenis**: smooth scrolling, as on the original
- **next/image + next/font**: optimized images and self-hosted Hanken Grotesk, Inter and Roboto
- **Vercel**: hosting, image optimization and Web Analytics (cookieless)
- **Web3Forms**: the contact form (no backend of our own)

## Getting started

```bash
nvm use            # Node 24
pnpm install
pnpm dev           # http://localhost:3000
```

| Script                      | Does                                                                                                                                                        |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm dev`                  | Dev server with hot reload                                                                                                                                  |
| `pnpm build` / `pnpm start` | Production build / serve it                                                                                                                                 |
| `pnpm lint`                 | ESLint                                                                                                                                                      |
| `pnpm typecheck`            | Route types + TypeScript                                                                                                                                    |
| `pnpm format`               | Prettier (incl. Tailwind class sorting)                                                                                                                     |
| `pnpm test:e2e`             | Playwright smoke tests against a production build (run `pnpm exec playwright install chromium` once, or set `PLAYWRIGHT_CHANNEL=chrome` to use your Chrome) |

### Environment variables

Copy `.env.example` to `.env.local`.

- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`: access key from [web3forms.com](https://web3forms.com), issued to the email address that should receive contact-form messages. It's public by design (the form posts from the browser).
- `NEXT_IMAGES_UNOPTIMIZED=1` (optional): emergency switch that serves images unoptimized if the Vercel image-optimization quota is ever exhausted.

## Project structure

```text
src/
├─ app/                    Routes only; pages compose components and read content
│  ├─ layout.tsx           <html>, fonts, theme script, nav, footer, analytics, default metadata
│  ├─ (site)/              Home, Work, About, Contact (+ the custom cursor in their layout)
│  ├─ [slug]/page.tsx      Every case study, from one template
│  └─ not-found.tsx · sitemap.ts · robots.ts
├─ content/                ALL copy and media; nothing user-facing is hardcoded in components
│  ├─ site.ts              Name, nav, socials, footer, SEO defaults, template labels
│  ├─ home/ · about/ · work.ts · contact.ts
│  ├─ projects/<slug>/     One folder per case study: index.tsx + media/
│  ├─ projects/index.ts    Ordered list of projects (Work order = "Next Project" chain)
│  └─ types.ts             The content model (Project, Section, GalleryRow, Media…)
├─ components/
│  ├─ layout/              Nav, MobileMenu, ThemeToggle, Footer, Container, Providers (Lenis), CursorDot
│  ├─ ui/                  Buttons, links, icons, page title, video, YouTube facade
│  ├─ motion/              Reveal (the one scroll-reveal wrapper)
│  ├─ case-study/          The case-study template: CaseStudy, Intro, TextSection, Gallery, …
│  ├─ projects/            Work cards, Home tiles, the filterable grid
│  ├─ home/ · about/ · contact/
├─ lib/                    motion presets, metadata, image `sizes`, project helpers, theme
└─ styles/                 theme.css (tokens) · typography.css (type-*) · motion.css · base.css
public/videos/<slug>/      Case-study videos
docs/                      Design tokens, motion, content guide
tests/                     Playwright smoke tests
```

Conventions:

- **Server Components by default.** Only interactive or animated leaves are client components.
  Client components receive data as props and never import `src/content` (the project
  registry is `server-only`, so a mistake fails the build).
- **Colors only from tokens** (`bg-bg`, `text-fg`, `text-fg-subtle`, `ring-line`, …): dark mode works everywhere for free.
- **Text styles only from `type-*` utilities**, switched per breakpoint like Framer does
  (e.g. `type-title tablet:type-statement`).
- **Timings only from `src/lib/motion.ts`** (and the matching CSS springs in `src/styles/motion.css`).

## Editing content

See [docs/content.md](docs/content.md). In short:

- **Change text:** edit the matching file in `src/content/`.
- **Add a project:**
  1. Create `src/content/projects/<slug>/index.tsx` and its `media/` folder (copy an existing project as a starting point).
  2. Add the slug to `projectSlugs` in `src/content/projects/index.ts`.

  The URL becomes `/<slug>`, and the project appears on the Work page and in the "Next Project" chain.

TypeScript checks every content file: a missing image or an unknown layout fails the build.

## Deployment (Vercel)

1. Import the repository in Vercel (framework preset: Next.js; no build settings needed).
2. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in Project → Settings → Environment Variables.
3. Enable **Web Analytics** in the project (cookieless, no consent banner needed).
4. Point `lucca-strecker.com` at Vercel (Project → Settings → Domains). Keep the Framer site
   until the new one is verified, as a fallback.

Image optimization runs on Vercel. `next.config.ts` keeps the number of image variants small
(WebP only, one quality, six widths, 31-day cache), well inside the Hobby plan's limits.

## Docs

- [docs/design-tokens.md](docs/design-tokens.md): colors, type styles, layout rules
- [docs/motion.md](docs/motion.md): every animation and interaction, with its timing
- [docs/content.md](docs/content.md): content model, adding projects, differences from the Framer site
