# Kit gaps (@mbds/react 0.1.0, portfolio brand)

One line per gap: what was needed, where, what the site uses instead.

- Skip link: needed on every page (`src/components/Shell.tsx`); a kit `Link` with a `.skip-link` class that is visually hidden until focused (`src/site.css`).
- Page container and section: needed for every page and section (`.container`, `.section`, `main` in `src/site.css`); hand-built from `--layout-gutter`, `--layout-content-max-width`, `--layout-section-gap`, `--spacing-*`.
- Theme toggle pattern: needed in the Top bar (`Shell.tsx` `ThemeToggle`); `SegmentedControl` (icon only) plus app logic for `data-theme`, localStorage and the pre-paint script in `index.html`.
- Display / eyebrow type: no display or overline style; the phone H1 (56px) overflows 320 in Inconsolata, so `.hero-title` uses the H3 tokens below 840 and H1 above; eyebrows use `.text-label-sm` + `Text/accent` (`Home.tsx`, `CaseStudy.tsx`, `Resume.tsx`).
- Metric / stat: needed for case-study outcomes (`CaseStudy.tsx` `.stats`); a `dl` with `.text-heading-h4` values and a `Border/default` top rule.
- Figure with caption: needed for case-study images (`CaseStudy.tsx` `Fig`, `.figure`); `figure` + `img` + `figcaption` in `.text-body-caption`.
- Case meta list: needed for role / years / team facts (`CaseStudy.tsx`, Home About, `.meta`); a `dl` grid with `.text-label-sm` terms.
- CV timeline semantics: `Timeline` is for steps in order, not a work history (Home Experience); used `Timeline marker="dot"` with every item `state="done"`, so the current job has no "Now" state.
- Chips don't wrap long labels: expertise tags (`Home.tsx` `.chips`) ellipsize instead of wrapping.
- Static tag / keyword: `Chip` with neither `selected` nor `onRemove` renders a static span that still looks like a filter chip, and `Badge` is for one or two words of status; used static `Chip size="sm"` for skills (`Home.tsx`).
- Inconsolata is not bundled and `--body-font-family` / `--heading-font-family` have no fallback stack: fonts come from `@fontsource/inconsolata` (`main.tsx`), and `body` / headings add `monospace` (`site.css`); the `.text-*` classes still set the family without a fallback.
- `--layout-content-max-width` is 390 below 840: `.container` stays fluid until 840 (`site.css`).
- Radii md, lg and xl are all 4px in the portfolio brand, so the figure, CTA panel and skip link can't differ in rounding.
- material-symbols ships the full outlined font (~4 MB woff2 in the build, `main.tsx`); no subset of the icons used.
- Custom media needs a transform: `custom-media.css` isn't usable without PostCSS / Lightning CSS custom-media, so `site.css` repeats 600 / 840 in plain media queries.
- Readable line length: `60ch` / `65ch` max widths for section heads, prose and decision lists (`site.css`); a `Layout/measure` token would remove them (`10rem` meta columns are fine as is).
- Top bar text wordmark: below 600 the Top bar shows only `.mbds-logo__mark`, so a text-only logo isn't handled; `.wordmark` wraps onto two lines at 320 instead.
- `color-scheme` isn't set by `tokens.css` for `data-theme`: a theme chosen in the toggle left scrollbars and native controls on the OS scheme; `site.css` sets `color-scheme` per `data-theme`.
- Layer / z-index tokens: the focused skip link needs to sit above the Top bar; `z-index: 100` in `site.css`.
- Card link action: `Card` `actions` takes md Buttons, but "full case study on request" is a mailto (navigation); passed a `Link` (`WorkCard.tsx`).
- Plain bulleted text list: resume bullets (`Resume.tsx`) use browser default `ul` padding and markers; `IconList` is for short icon points.
- Segmented control icon-only options have no Tooltip (theme toggle in `Shell.tsx`); names come only from `ariaLabel`.
- Showcase / project tile: the benchmark's large work tiles (wide + half, big media, stats) have no kit component. `Card` has fixed 320/480 widths and a 180px media slot; `WorkCard.tsx` passes an `<img>` as `media` and `.work-card` sets width 100% and the image crop.
- Display and section-title type: only H1–H6 classes exist, all fixed per viewport; `.display` and `.section-title` in `site.css` switch between heading tokens at 840.
- Menu items that navigate: `Menu` items are actions only (`onSelect`), so the header "Get in touch" menu opens mailto / LinkedIn / Resume from `onSelect` instead of real links (`Shell.tsx`).
- Responsive trigger: no Button that collapses to icon-only on phones; `Shell.tsx` swaps `Button` for `IconButton` below 600 with `matchMedia`.
- Numbered steps / chapter index: no component for a numbered horizontal step row ("How I work") or a case study chapter index; `.steps` and `.chapter-index` in `site.css`.
- Logo strip: no component for a client/logo strip; `.clients` text line in `Home.tsx`.
