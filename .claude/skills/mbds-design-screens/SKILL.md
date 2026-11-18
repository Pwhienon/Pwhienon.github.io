---
name: "mbds-design-screens"
description: "Design or review app and web screens in Figma with the Multi-Brand Design System library: pick the right component, use tokens and modes, check every brand and theme, hand off to code."
---

# Designing with the Multi-Brand Design System

For designers building screens and flows with the kit, and for reviewing a design against it. Adding a new component to the kit itself is a different job (the repo's `mbds-add-component` skill).

- Library file: Multi-Brand Design System, Figma file key `DsvZRgCgbYNKkY0AsW10oe`. In other files, use its components and variables as a published library.
- Rules and every component's spec: `docs/token-rules.md` in https://github.com/Pwhienon/multi-brand-design-system (also in the Claude project as `claude/design-system-token-rules.md`). Each component's page in the library has a docs card with sizes, states, properties and when to use it.
- Three brands (Codemate, Rebelapp, Hypno) x Light / Dark x Desktop / Mobile. Flutter apps and web apps share most components; some are one platform only (marked "(web)" or "(Flutter)" on their page).

## Working with Figma through Claude

- Call `create_session` for the file first, and load the `figma-use` skill before any `use_figma` call (plus `figma-generate-design` when building a whole screen).
- Search the library before drawing anything (`search_design_system`), then place instances. Never detach a kit component, and never redraw one.
- One step per call (frame and layout, then a section, then the next), returning the created ids. Check results by reading the layers back (names, sizes, bound variables); screenshots often can't be fetched.
- Load fonts before editing text: Inter and Roboto for Codemate, Archivo for Rebelapp, Fraunces and DM Sans for Hypno.

## Rules

1. **Kit components first.** If the kit has it, use the instance and set its properties (variants, Label, Show icon, Icon swaps). States (Hover, Pressed, Focus) are only for showing a state in a spec, not for the default screen.
2. **Tokens for everything else.** Every fill, stroke, padding, gap, radius and text in your own frames is bound: colours from the Mapped collection (`Surface/page`, `Text/body`, `Border/default`), spacing from `Spacing/*` and `Layout/*`, text from the text styles (Heading/H1 to H6, Body/lg to caption, Label/lg to sm), shadows from Elevation/sm to xl. No hex values, no unbound numbers.
3. **Auto layout everywhere.** Instances Fill their container where they should stretch (Text field, Card, List item).
4. **Modes, not copies.** Show a brand or theme by setting the frame's variable modes: Alias for the brand (Codemate, Rebelapp), Mapped for the theme (Light, Dark), Responsive for the viewport (Desktop, Mobile). Never duplicate components per brand.
5. **Slots for content.** Dialog and Bottom sheet take any layers in their `content` slot; follow the slot description for what fits.
6. **Layout.** Page background `Surface/page`. Mobile: 4 fluid columns, `Layout/gutter` margins, `Layout/grid gap` gaps (Layout guide/Mobile). Desktop: 12 columns at `Layout/content max width` (Layout guide/Desktop). Sections `Layout/section gap` apart. Breakpoints: 600 tablet (`Breakpoint/sm`), 840 desktop layout (`Breakpoint/md`).
   **Gaps on an 8px scale, related items closer.** Every gap between layout elements is `Spacing/sm` (8), `lg` (16), `xl` (24) or `2xl` (32), or a `Layout/*` token. Group what belongs together: a heading and its text, a label and its value, the cards of one set sit 8 apart; groups 16 to 24 apart; sections 32 (or `Layout/section gap`). `Spacing/xs` (4) and `md` (12) are for inside components, not between layout elements.
7. **Accessible by default.** Every icon-only button has a label (its tooltip); fields keep visible labels; text stays on the colour roles meant for its surface (on Surface/inverse use the `-on-inverse` tokens). Nothing should rely on colour alone.
8. **Selection has its own tokens.** Current and selected states use `Surface/selected` (the tint behind the item) and `Surface/indicator` (the bar, underline, check or on-state fill, in the brand's selection colour), with `Text/heading` for the label and `Icon/on-indicator` for a check or thumb on the fill. List item and Option card have a Selected state for chosen options. A custom selected or current item follows the kit: tint plus a bar (side nav: 4px at the start; horizontal navs and tabs: 2px at the bottom), never an outline, so it can't be mistaken for the keyboard focus ring (`Border/focus`). Buttons and links keep the action colour.
9. **Errors use the Error variants.** Text field, Textarea and Select have an Error state with a 2px `Border/error` and an `Icon/error` before the message; use it rather than recolouring a field. Write the message as what's wrong and how to fix it.
10. **Leave room around small controls.** sm buttons, icon buttons and chips are 32px in Figma, but in code they take taps up to 44px around them, and selection rows are 44 tall on touch. Don't pack small controls edge to edge; keep at least `Spacing/sm` between them.
11. **Platform buttons come from the platform.** Sign in with Apple / Google use the platform's own button; keep a clearly named placeholder in Figma.
12. **Missing piece?** Don't invent a new style or a local component that looks like the kit. Compose from kit components and tokens, mark it clearly as a proposal, and tell the user what's missing so it can be added to the kit.

## Which component (Figma names)

| Need | Component |
|---|---|
| Do something | Button (Primary, Secondary, Tertiary, Destructive; one Primary per area), Icon button (xl 64 is the media button: Primary play / pause with `Icon/play_arrow (filled)` / `Icon/pause (filled)`, skips beside it in Tertiary lg) |
| Finish a form, dialog or card | Actions (Row on desktop, Stacked on mobile) |
| Go somewhere | Link |
| The one main action of an app screen | FAB (Flutter): Icon, Small, Extended; FAB menu for a speed dial |
| Row, card or toolbar overflow actions | Menu (from an Icon button with more_vert) |
| Text input | Text field, Textarea, Search |
| Pick one from a list | Select; a few options always visible: Radio |
| Pick an option that needs more than a label (plans, tiers, delivery) | Option card (Control Radio or Checkbox) |
| On/off | Switch (applies at once), Checkbox (in a form, saved later) |
| A value or range | Slider |
| Change the view of the same content | Segmented control |
| Sections of a page | Tabs |
| Filters, entered values | Chip |
| Rows of items | List item (State=Selected for chosen options in a pick list) |
| Short points with an icon (what a plan includes, before you start) | Icon list (not a notification: a risk the person must notice is an Alert) |
| Steps in order (a free trial, an order, an onboarding) | Timeline (Marker Dot or Icon) |
| Records to compare and sort | Table (web) |
| A summary of one thing | Card (Media size=Compact for phone rows and carousels; Show progress for things in progress) |
| Show and hide sections | Accordion |
| A person | Avatar |
| Status or count | Badge, Count badge |
| Hint on hover or focus | Tooltip |
| Message on the page | Alert (Inline, Banner) |
| Short feedback after an action | Snackbar |
| A decision that must be answered | Dialog (over the Scrim) |
| A short choice or task from the bottom of a phone | Bottom sheet (Flutter) |
| Loading | Progress, Skeleton |
| Nothing to show | Empty state |
| Separators | Divider |
| App screen top / sections | App bar (Flutter); Bottom nav on phones, Nav rail from 600 (Flutter) |
| Web app shell | Top bar + Side nav (web); Breadcrumbs, Pagination (web) |

When two could fit, the component's "Not for" line in its docs card or in `token-rules.md` decides.

## Screen recipes

- **Flutter screen:** App bar at the top; content on `Surface/page`; Bottom nav (3 to 5 sections) at the bottom on phones; FAB bottom end, `Spacing/lg` from the edge and above the nav; from 600 wide the Nav rail replaces the Bottom nav and holds the FAB at its top.
- **Modal:** Scrim stretched over the whole frame, then the Dialog or Bottom sheet on top.
- **Web page:** Top bar, Side nav (a drawer over the Scrim on phones), page title (with Breadcrumbs on deep sites), content in the grid.

## Before you hand off

- Check the screen in Light and Dark, in every brand the product uses, and on a phone width (360 to 390; nothing may need more than 320).
- No detached instances, no local look-alikes, no unbound fills, strokes, spacing or text.
- Show the states that matter (error, empty, loading, disabled, long text) as separate frames.
- Annotate behaviour a static frame can't show (scrolling, what hides, what opens).
- Developers map Figma names straight to code: `Button` is `AppButton` (Flutter) and `Button` (React), and the same pattern holds for the rest. Their `multi-brand-ds` skill (`mbds-build-app` on their account) and the READMEs carry the details.

## Reviewing a design

Go through the rules above and report, per frame: components that should be kit instances, detached or overridden instances, unbound values (with the token that should be used), wrong component for the job, missing states, selected items drawn with an outline or in the action colour, errors shown by colour alone, small controls packed too tightly, and contrast or label problems. Recommend a fix for each and say which ones are blocking.