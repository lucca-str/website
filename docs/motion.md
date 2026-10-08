# Motion & interactions

Every timing below was read from the original site's Framer bundles and checked side by side
against the live site. Presets live in `src/lib/motion.ts`; the CSS versions of the hover
springs live in `src/styles/motion.css`.

## Presets

| Name            | Value                                      | Used for                                                                    |
| --------------- | ------------------------------------------ | --------------------------------------------------------------------------- |
| `base`          | spring, 0.4s, bounce 0.2                   | Filter re-layout, accordion, cursor size, scroll-indicator hide, toggle dot |
| `snappy`        | spring 500 / 60 / 1                        | Cursor follow, button and tile hovers, theme icon                           |
| `reveal`        | spring 160 / 55 / 2, delay 0.1s            | Image reveals (case studies, Home portrait)                                 |
| `tile`          | spring, 1.2s, bounce 0.2                   | Project tile reveals, scroll-indicator travel                               |
| `menu`          | spring 300 / 60 / 2                        | Mobile menu + hamburger ✕                                                   |
| `carousel`      | spring 200 / 20 / 1                        | About carousel                                                              |
| `word`          | spring, 0.4s, bounce 0, stagger 0.075s     | Home statement word reveal                                                  |
| `fast` / `fade` | tween 0.2s / 0.3s, ease `[.44, 0, .56, 1]` | Submit states / scroll-indicator fade                                       |
| nav intro       | spring 200 / 40 / 1, delay 1.1s            | Desktop nav slide-in (CSS keyframes)                                        |

Hover and press states are CSS transitions: the springs are sampled into `linear()` easings by
`node scripts/spring-easings.mjs` (paste its output into `src/styles/motion.css` after changing
a preset). This keeps buttons, tiles and links as server components.

## Behaviors

| What              | How                                                                                                                                 | Where                               |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| Smooth scroll     | Lenis, duration 1; paused while the mobile menu is open                                                                             | `Providers`, `MobileMenu`           |
| Desktop nav intro | slides in from −60px after 1.1s, before JS runs                                                                                     | `animate-nav-intro` in `motion.css` |
| Image reveals     | opacity 0.001 → 1, y 30 → 0 when 50% visible, once                                                                                  | `Reveal`, `MediaTile`               |
| Project tiles     | same reveal with the `tile` spring                                                                                                  | `ProjectCard`, `FeaturedTile`       |
| Footer            | its content reveals once at 50% with `base`                                                                                         | `Footer`                            |
| Home statement    | words rise one by one on load (from opacity 0.001, y 10)                                                                            | `Statement`                         |
| Scroll indicator  | loop: rest 1s → drip down + fade (1s) → reset unseen (0.3s) → fade in; hides while scrolling down                                   | `ScrollIndicator`                   |
| Cursor            | 10px white dot, `mix-blend-difference`, 11px above the pointer; 52px over Home tiles; Home/Work/About/Contact only; hidden on touch | `CursorDot`                         |
| Tile hover        | image scales to 1.1 (`snappy`)                                                                                                      | `TileMedia`                         |
| Buttons           | primary: black → `--line` fill, dark text, no shadow. Link pill: opacity 1 → 0.75. Next Project: 0.75 → 1                           | `button-styles.ts`                  |
| Text links        | color → 50% over 0.4s                                                                                                               | `Nav`, `Footer`                     |
| Work filter       | cards fade and re-flow (`layout="position"`)                                                                                        | `WorkGrid`                          |
| Carousel          | endless, drag to swipe (a flick moves ≥ 1 slide, a slow drag needs half a slide), arrows                                            | `AboutCarousel`                     |
| Accordion         | independent rows, height + opacity with `base`; dot darkens on hover/open                                                           | `Accordion`                         |
| Theme             | stored choice or OS setting, applied before paint; colors fade 0.4s; dot ↔ crescent icon                                            | `lib/theme.ts`, `ThemeToggle`       |
| Contact submit    | idle → hover `#333` → pressed → loading spinner → "Thank you" / "Something went wrong"                                              | `ContactForm`                       |
| Videos            | muted, looping, play only while on screen                                                                                           | `LoopVideo`                         |
| YouTube           | poster + play button; the player loads on click (youtube-nocookie)                                                                  | `YouTubeFacade`                     |

Reveal targets render at opacity 0.001 (not 0, so they still count for Largest Contentful Paint).
Visitors without JavaScript see everything via a `<noscript>` style.

## Corrections to the first animation guide

Checked against the live site, the original guide was wrong about these:

- **No** hide-on-scroll for the nav, **no** fade-out of the hero content, **no** repeating footer fade.
- Text blocks on case studies do not reveal; only media does.
- There **is** a text animation: the Home statement's per-word reveal.
- The cursor sits above the pointer, exists only on the four main pages, and grows only over the Home tiles.
- Link pills fade _out_ on hover (1 → 0.75); the Next Project pill keeps its shadow.
