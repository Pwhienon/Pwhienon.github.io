---
name: "mbds-build-app"
description: "Build app screens with the Multi-Brand Design System (Flutter multi_brand_components, React @mbds/react, tokens) in any app repo: setup, which component to use, tokens only, review for hardcoded values."
---

# Multi-Brand Design System: building apps

The kit is tokens plus components for Flutter apps and React web apps. Three brands (Codemate, Rebelapp, Hypno) x Light/Dark x Mobile/Desktop, all driven by tokens, so screens never contain raw colours, sizes or fonts. Repo: https://github.com/Pwhienon/multi-brand-design-system

This is the account copy of the repo skill `multi-brand-ds`, for working in app repos that use the kit. Changes to the kit itself happen in the design system repo (its `mbds-add-component` skill).

## Where the details live

Read these before guessing an API. They are the reference; this skill is the summary.

| What | File (in the design system repo) |
|---|---|
| Flutter widgets: Figma to code table with every constructor | `components/flutter/README.md` |
| React components: Figma to code table with every prop | `components/react/README.md` |
| Token usage on web and Flutter | `README.md` (Web, Flutter) |
| What each component is for, its rules and specs | `docs/token-rules.md`, one `###` section per component (also in the Claude project as `claude/design-system-token-rules.md`) |
| A working example of every Flutter widget | `components/flutter/example/lib/main.dart` (the gallery) |

In an app that depends on the kit, find the Flutter package source through `.dart_tool/package_config.json` (the `multi_brand_components` rootUri), or read the files on GitHub.

## Setup

### Flutter

```yaml
# pubspec.yaml
dependencies:
  multi_brand_components:
    git:
      url: https://github.com/Pwhienon/multi-brand-design-system.git
      path: components/flutter
      ref: main            # pin a tag (e.g. v0.1.0) once releases exist
  multi_brand_design_tokens:
    git:
      url: https://github.com/Pwhienon/multi-brand-design-system.git
      path: dist/flutter
      ref: main
  material_symbols_icons: ^4.2800.0
  material_ui: ^1.11.0     # Material is a package since Flutter 3.47 (flutter/material.dart deprecated in 3.50)
```

The components package points at the tokens with a relative path inside the repo. Listing both git dependencies (same `ref`) lets pub resolve them together; if `flutter pub get` still complains, report the exact error rather than copying the packages into the app (it should be fixed in the design system repo).

```dart
import 'package:material_ui/material_ui.dart'; // not package:flutter/material.dart: the kit's ThemeData comes from material_ui
import 'package:multi_brand_components/multi_brand_components.dart';
import 'package:multi_brand_design_tokens/app_tokens.dart';

MaterialApp(
  theme: ThemeData(extensions: appTokenExtensions(brand: AppBrand.codemate, brightness: Brightness.light, viewport: viewport)),
  darkTheme: ThemeData(extensions: appTokenExtensions(brand: AppBrand.codemate, brightness: Brightness.dark, viewport: viewport)),
);
// viewport: AppViewport.fromWidth(width), from MediaQuery or a LayoutBuilder
```

- Brand is `AppBrand.codemate`, `AppBrand.rebelapp` or `AppBrand.hypno`; a brand switch is only this line.
- Bundle the fonts the brand names (Codemate: Inter + Roboto; Rebelapp: Archivo; Hypno: Fraunces + DM Sans). See the gallery's `example/pubspec.yaml` and `example/assets/fonts`.
- Icons: `Symbols.<name>` from `material_symbols_icons`, the same name as Figma `Icon/<name>`.

### React (web)

`@mbds/react` is not published yet (`private` in its package.json). Use it from a checkout of the repo (a workspace or `file:` dependency on `components/react`, built with `npm run build`).

```tsx
import "multi-brand-design-system/dist/web/tokens.css";
import "material-symbols/outlined.css";
import "@mbds/react/styles.css";
import { Button, TextField } from "@mbds/react";
// <html data-brand="codemate|rebelapp|hypno" data-theme="light|dark">; leave data-theme out to follow the OS
```

## Rules

1. **Kit component first.** If the kit has it, use it instead of a Material/Cupertino widget or a hand-built one: `AppButton` not `ElevatedButton`, `AppTextField` not `TextField`, `showAppDialog` not `showDialog`, `showAppSnackbar` not `ScaffoldMessenger...showSnackBar`.
2. **Tokens for everything else.** Layout glue (padding, gaps, backgrounds of your own containers, text) reads tokens: Flutter `AppColors.of(context).surfacePage`, `AppSpacing.of(context).md`, `AppTextStyles.of(context).bodyMd`, `AppRadius`, `AppElevation`, `AppIconSize`, `AppControlSize`, `AppMotion`; web `var(--color-surface-page)`, `var(--spacing-md)`, `.text-body-md`. Never hex colours, `Colors.*`, raw font sizes or magic pixel numbers. `--brand-*` and `--alias-*` are internal: don't use them. Gaps between layout elements are on an 8px scale (`sm` 8, `lg` 16, `xl` 24, `2xl` 32, or `Layout/*`), with related items closer together than separate groups; `xs` (4) and `md` (12) are for inside components.
3. **Selection has its own tokens.** Selected and current states use `Surface/selected` (tint), `Surface/indicator` (bar, underline, checked fill) and `Icon/on-indicator`; buttons and links use the action colour; focus is `Border/focus`. A custom selected item follows the same pattern: tint plus a bar, never an outline.
4. **States are not props.** Hover, Pressed and Focus come from the platform. Disabled is `onPressed: null` / `enabled: false` / `disabled`.
5. **Pick by purpose** (table below). If two components could fit, the "Not for" lines in `docs/token-rules.md` decide.
6. **Accessible names.** Every icon-only control gets a `label` (it's the name and the tooltip). Don't hide form labels; use `hideLabel` only when the label is shown some other way.
7. **Fits 320 wide and touch-friendly.** Nothing may widen the screen at 320; long text wraps or ellipsizes. Leave a little room around small (sm) controls so their 44px touch target can work.
8. **Missing piece?** Don't invent a new visual style or token. Compose from kit components and tokens, and tell the user what's missing so it can be added to the kit (Figma first, then code).

## Which component

| Need | Flutter | React |
|---|---|---|
| Do something | `AppButton` (one Primary per area), `AppIconButton` | `Button`, `IconButton` |
| Media play / pause (one main action) | `AppIconButton(size: AppButtonSize.xl, variant: primary, iconFilled: true)` | `IconButton size="xl" variant="primary" iconFilled` |
| Finish a form, dialog or card | `AppActions` | `Actions` |
| Go somewhere | `AppLink` | `Link` |
| A screen's one main action (mobile) | `AppFab`, `AppFab.extended`, `AppFabMenu` (speed dial) | (put it in the page or Top bar) |
| Row, card or toolbar overflow actions | `AppMenu` + `AppIconButton(expanded:)` | `Menu` |
| Text input | `AppTextField`, `AppTextarea`, `AppSearch` | `TextField`, `Textarea`, `Search` |
| Pick one from a list | `AppSelect`; few options visible: `AppRadioGroup` | `Select`, `RadioGroup` |
| Pick an option that needs more than a label (plans, tiers) | `AppOptionCard.radio` / `.checkbox` | `OptionCard type="radio"` / `"checkbox"` |
| On/off, yes/no | `AppSwitch` (applies at once), `AppCheckbox` (in forms) | `Switch`, `Checkbox` |
| A number or range | `AppSlider`, `AppRangeSlider` | `Slider` |
| Change the view of the same content | `AppSegmentedControl` | `SegmentedControl` |
| Switch between sections of a page | `AppTabs` | `Tabs` |
| Filters or entered values | `AppChip` | `Chip` |
| Lists of rows | `AppList` + `AppListItem` (`.checkbox`, `.radio`, `.toggle`; `selected:` for chosen options) | `List`, `ListItem` (`selected`) |
| Short points with an icon | `AppIconList` + `AppIconListItem` | `IconList`, `IconListItem` |
| Steps in order (trial, order, onboarding) | `AppTimeline` + `AppTimelineItem` | `Timeline`, `TimelineItem` |
| Records to compare and sort | (none) | `Table` |
| A summary of one thing | `AppCard` (`mediaSize: compact`, `progress:`) | `Card` (`titleAs` for the heading level; `mediaSize="compact"`, `progress`) |
| Show/hide sections | `AppAccordion` | `Accordion` |
| Person | `AppAvatar` | `Avatar` |
| Status or count | `AppBadge`, `AppCountBadge` | `Badge`, `CountBadge` |
| Hint on hover/focus | `AppTooltip` | `Tooltip` |
| Message on the page | `AppAlert` | `Alert` |
| Short feedback after an action | `showAppSnackbar` | `useSnackbar` |
| A decision that must be answered | `showAppDialog` | `Dialog` |
| A short choice or task from the bottom (mobile) | `showAppBottomSheet` | (none) |
| Loading | `AppProgress`, `AppSkeleton*` | `Progress`, `Skeleton*` |
| Nothing to show | `AppEmptyState` | `EmptyState` |
| Separators | `AppDivider` | `Divider` |

## Screen skeletons

**Flutter screen:**

```dart
Scaffold(
  backgroundColor: AppColors.of(context).surfacePage,
  appBar: AppAppBar(title: 'Projects', actions: [AppAppBarAction(icon: Symbols.search, label: 'Search', onPressed: search)]),
  body: wide ? Row(children: [AppNavRail(items: items, selectedIndex: i, onSelected: go, leading: fab), Expanded(child: body)]) : body,
  bottomNavigationBar: wide ? null : AppBottomNav(items: items, selectedIndex: i, onSelected: go, hideOnScroll: true),
  floatingActionButton: wide ? null : AppFab(icon: Symbols.add, label: 'New project', onPressed: create, hideOnScroll: true),
  floatingActionButtonLocation: AppFab.location(context),
);
// wide = MediaQuery.sizeOf(context).width >= AppBreakpoints.sm (600)
```

- 3 to 5 main sections: `AppBottomNav` below 600, `AppNavRail` (same items) from 600. The floating nav style needs `Scaffold(extendBody: true)`.
- Large titles: `CustomScrollView(slivers: [AppLargeAppBar(title: ...), ...])`.
- Modals: `showAppDialog`, `showAppBottomSheet`; both bring the scrim, back button and return value.

**Web page:** `TopBar` + `SideNav` for the app shell (the Side nav becomes a drawer on phones), `Breadcrumbs` above the page title on deep sites, `Pagination` under long tables.

## Before you finish

- No raw colours, sizes, fonts or `Colors.*` / hex in the UI code you wrote.
- Check the screen in every brand the app uses and both themes (and at 320 wide), not only Codemate Light.
- Icon-only controls have labels; text fields have labels; only one Primary button and at most one FAB per screen.
- List anything the kit was missing, so it can be added in the design system repo.