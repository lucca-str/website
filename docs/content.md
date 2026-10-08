# Content guide

Everything a visitor reads or sees comes from `src/content/`. Components never contain copy.
All content files are TypeScript, so a typo in a layout name or a missing image fails `pnpm build`.

## Where things live

| Content                                                   | File                                               |
| --------------------------------------------------------- | -------------------------------------------------- |
| Name, nav, socials, footer, SEO defaults, template labels | `src/content/site.ts`                              |
| Home (portrait, statement, featured tiles)                | `src/content/home/index.ts`                        |
| Work page title and filters                               | `src/content/work.ts`                              |
| About (intro, carousel, columns, accordion)               | `src/content/about/index.tsx`                      |
| Contact (title, form copy)                                | `src/content/contact.ts`                           |
| Case studies                                              | `src/content/projects/<slug>/index.tsx` + `media/` |
| Order of case studies (Work order, "Next Project" chain)  | `src/content/projects/index.ts`                    |
| Videos                                                    | `public/videos/<slug>/NN.mp4`                      |

## The case-study model

A project (`src/content/types.ts`) has:

- **Header fields:** `title`, `tag` (Strategy, UX/UI or Case Study), `description` (for search results), `cover` (hero image, also used on the cards).
- **`intro`:** rich text, plus an optional `link` pill.
- **`meta`:** client, duration, deliverables, role.
- **`sections`:** the blocks, in page order:
  - `{ type: 'text', variant: 'split' | 'centered', heading, body, link? }`
  - `{ type: 'gallery', rows: [...] }`. Each row is one of:
    - `{ layout: 'full', item }`: full width, at the media's own aspect ratio.
    - `{ layout: 'grid', columns: 2 | 3 | 4, tabletColumns?, items }`: square tiles, which wrap.
    - `{ layout: 'bento', side: 'left' | 'right', large, small: [a, b] }`
  - `{ type: 'youtube', videoId, poster, title }`

Rich text is JSX limited to `<p>`, `<strong>`, `<em>`, `<ul>`/`<li>` and `<br />`. A `<br /><br />`
at the end of a paragraph or list item makes a blank line, as on the original.

Media helpers: `image(importedFile, 'alt text')` and `video('/videos/slug/01.mp4', width, height, 'label')`.

### Add a project

1. Create `src/content/projects/<slug>/` with an `index.tsx` (copy an existing one) and a `media/` folder.
2. Name media `cover.jpg` plus `01.jpg`, `02.png`, … in page order. Keep sources ≤ 2560px on the long edge; Next.js serves optimized WebP.
3. Put videos in `public/videos/<slug>/` and note their pixel size in `video(…)`.
4. Add the slug to `projectSlugs` in `src/content/projects/index.ts`, in the position it should have on the Work page.
5. To feature it on Home, add it to `featured` in `src/content/home/index.ts`.

Slugs are URLs (`lucca-strecker.com/<slug>`) and must not be `work`, `about` or `contact`.

## Changes from the Framer site (for Lucca to review)

**Typo fixes**

| Where               | Original                                    | Now                        |
| ------------------- | ------------------------------------------- | -------------------------- |
| All 7 case studies  | The Challange                               | The Challenge              |
| māra title          | … Urban Garden Communites                   | … Urban Garden Communities |
| Parcitypate section | Research&Strategy                           | Research & Strategy        |
| About → Experience  | M.A. Strategic Design (HfG Schwäbisch Gmünd | … Gmünd)                   |

**New text**

- **Per-page titles and descriptions.** Previously every page shared one title and description. The new ones are written from the intros; see `description` in each content file.
- **Alt text** for every image.
- **The "Page Not Found" page** now uses the site design. The copy is Framer's default.

**Intentional differences**

- **Theme.** The original always started in dark mode (a Framer default) and forgot the visitor's choice on reload. The rebuild follows the visitor's OS setting and remembers the toggle.
- **Spacing.** A few pages had stray whitespace from empty Framer template slots. The rebuild uses the template's regular spacing:
  - extra space before "Next Project" on sana
  - after the "Results" text on DG
  - after the last gallery on DG and Aroya
  - one 8px gap in Parcitypate's last gallery on phones
- **Footer year.** It's now the year of the latest deploy (was fixed at 2025).
- **Analytics.** Google Analytics is replaced by cookieless Vercel Web Analytics.
- **Contact form.** Submissions go through Web3Forms instead of Framer's form backend.
