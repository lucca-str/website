# Design tokens & layout

All values were measured on the original Framer site (computed CSS at 1440 / 1200 / 1024 / 810 / 390 px)
and are implemented in `src/styles/`. This supersedes the first extraction guide.

## Breakpoints

| Name    | Range          | Tailwind prefix     |
| ------- | -------------- | ------------------- |
| Phone   | < 810 px       | (none, base styles) |
| Tablet  | 810 to 1199 px | `tablet:`           |
| Desktop | ≥ 1200 px      | `desktop:`          |

Page gutter: **16 / 48 / 100 px**; content never wider than **1600 px** (`Container`).

## Colors (`src/styles/theme.css`)

| Token         | Utility                | Light                    | Dark                     |
| ------------- | ---------------------- | ------------------------ | ------------------------ |
| `--bg`        | `bg-bg`                | `#F8FAFB`                | `#050505`                |
| `--fg`        | `text-fg`, `bg-fg`     | `#111111`                | `#FFFFFF`                |
| `--fg-muted`  | `text-fg-muted`        | `rgb(0 0 0 / .75)`       | `rgb(255 255 255 / .75)` |
| `--fg-subtle` | `text-fg-subtle`       | `rgb(17 17 17 / .5)`     | `rgb(255 255 255 / .5)`  |
| `--line`      | `bg-line`, `ring-line` | `rgb(171 171 171 / .15)` | `rgb(255 255 255 / .15)` |

Also used: `surface-dark #0F0E0E`. Form fields are filled with `--line`; Framer's focus ring is `#0099FF`.
Tailwind's default palette is switched off, so only these tokens exist.

## Text styles (`src/styles/typography.css`)

| Utility            | Font                                   | Size / line height | Weight                | Tracking | Paragraph gap |
| ------------------ | -------------------------------------- | ------------------ | --------------------- | -------- | ------------- |
| `type-display`     | Hanken Grotesk                         | 80 / 1.2           | 600                   | −0.4px   | 40            |
| `type-statement`   | Hanken Grotesk                         | 48 / 1.15          | 700                   | −0.6px   | 40            |
| `type-title`       | Hanken Grotesk                         | 32 / 1.15          | 600                   | −0.6px   | 0             |
| `type-section`     | Hanken Grotesk                         | 24 / 1             | 500                   | −0.03em  | 40            |
| `type-logo`        | Hanken Grotesk                         | 18 / 1.2           | 500 (700 as rendered) | −0.18px  |               |
| `type-card`        | Roboto                                 | 20 / 1.2           | 600                   | −0.01em  | 40            |
| `type-accordion`   | Roboto                                 | 20 / 1.2           | 400                   | 0        | 20            |
| `type-button`      | Roboto                                 | 16 / 1.2           | 500                   | −0.02em  |               |
| `type-input`       | Roboto (name, email) / Inter (message) | 14 / 1.2           | 400                   | 0        |               |
| `type-meta`        | Inter                                  | 18 / 1.4           | 600                   | 0        | 20            |
| `type-body`        | Inter                                  | 16 / 1.6           | 400                   | 0        | 16            |
| `type-body-center` | Inter                                  | 16 / 1.4           | 400                   | 0        | 20            |
| `type-label`       | Inter                                  | 12 / 1             | 500                   | 0.03px   |               |

Like Framer, a style never changes size by itself; an element switches style per breakpoint:

| Element                                                  | Desktop                | Tablet                 | Phone               |
| -------------------------------------------------------- | ---------------------- | ---------------------- | ------------------- |
| Page titles (Home name, My Work, Hey there!, Let's Talk) | display                | display                | statement           |
| Home statement, case-study title                         | statement              | statement              | title               |
| About intro                                              | title                  | title                  | section             |
| Home tile titles                                         | title                  | card                   | card                |
| Case-study "centered" body                               | body-center (centered) | body-center (centered) | body (left-aligned) |

`rich-text` (for content JSX) adds the paragraph gap of the current style, Framer-style bullets
(`•` in a 3ch gutter) and bold = 700. Lists get no gap above them, as on the original.
Long words break instead of overflowing (`word-break: break-word`), as Framer does.

## Radius, shadows

| Token           | Value                        | Used for                                  |
| --------------- | ---------------------------- | ----------------------------------------- |
| `rounded-media` | 6px                          | Case-study images, videos, About carousel |
| `rounded-tile`  | 12px                         | Project tiles (Home, Work), Home portrait |
| `rounded-field` | 8px                          | Form fields                               |
| `rounded-full`  | pill                         | All buttons and pills                     |
| `shadow-tile`   | `0 1px 2px rgb(0 0 0 / .25)` | Project tile images                       |
| `shadow-pill`   | Framer's layered soft shadow | Primary buttons, Next Project             |
| `shadow-submit` | Deeper layered shadow        | Contact Submit                            |

Outlined pills use inset rings (`ring-1 ring-inset`): like Framer's borders, they don't change the size.

## Layout rules

**Page title band** (`PageTitle`): 60vh on desktop. Tablet: 60vh (Contact) or 40vh (Work, About). Phone: 60vh, except Work (40vh).

**Home:** hero is one full viewport (portrait 200 / 240px phone, rounded 12). The statement section is one viewport tall,
vertically centered. Featured tiles: two equal columns with an 88px gap and 48px on the text's outer side;
tiles are 124px apart (80px below desktop).

**Work:** 3 columns × 40px gaps on desktop, one column below; cards are a 1.1:1 image, title 16px below, tag 8px below the title.

**Case studies:**

|                                      | Phone                            | Tablet | Desktop |
| ------------------------------------ | -------------------------------- | ------ | ------- |
| Space before the title band          | 10px                             | 0      | 110px   |
| Title to hero                        | 40px                             | 60px   | 60px    |
| Block gap                            | 56px                             | 80px   | 120px   |
| Next Project                         | 120px below the last block's gap | same   | same    |
| After the last block or Next Project | 110px                            | 100px  | 110px   |

- **Intro:** text and pill in the left column (40px right padding from tablet up). The meta details sit in two independent stacks on the right.
- **Split text:** two columns with a 16px gap. **Centered text:** body is 66% wide.
- **Galleries:** 16px gaps.
  - _full_: the media's own ratio.
  - _grid_: square cells.
  - _bento_: the large tile is 66% wide.
- **Galleries on phones:** one column, 8px after a full-width row. Bento images: 8px gaps and a 236px-tall large image.
