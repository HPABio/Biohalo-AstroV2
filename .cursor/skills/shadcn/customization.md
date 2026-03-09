# Customization & Theming

Components reference semantic CSS variable tokens. Change the variables to change every component.

## Contents

- How it works (CSS variables → Tailwind utilities → components)
- Color variables and OKLCH format
- Dark mode setup
- Changing the theme (presets, CSS variables)
- Adding custom colors (Tailwind v3 and v4)
- Border radius
- Customizing components (variants, className, wrappers)
- Checking for updates

---

## How It Works

1. CSS variables defined in `:root` (light) and `.dark` (dark mode).
2. Tailwind maps them to utilities: `bg-primary`, `text-muted-foreground`, etc.
3. Components use these utilities — changing a variable changes all components that reference it.

---

## Color Variables

Every color follows the `name` / `name-foreground` convention.

| Variable                                     | Purpose                          |
| -------------------------------------------- | -------------------------------- |
| `--background` / `--foreground`              | Page background and default text |
| `--card` / `--card-foreground`               | Card surfaces                    |
| `--primary` / `--primary-foreground`         | Primary buttons and actions      |
| `--secondary` / `--secondary-foreground`     | Secondary actions                |
| `--muted` / `--muted-foreground`             | Muted/disabled states            |
| `--accent` / `--accent-foreground`           | Hover and accent states          |
| `--destructive` / `--destructive-foreground` | Error and destructive actions    |
| `--border`, `--input`, `--ring`              | Borders and focus                |
| `--chart-1` through `--chart-5`              | Chart colors                     |
| `--sidebar-*`                                | Sidebar-specific                 |
| `--surface` / `--surface-foreground`         | Secondary surface                |

Colors use OKLCH: `--primary: oklch(0.205 0 0)` (lightness, chroma, hue).

---

## Dark Mode

Class-based toggle via `.dark` on the root. In Next.js, use `next-themes` with `attribute="class"`.

---

## Changing the Theme

```bash
npx shadcn@latest init --preset a2r6bw --force
npx shadcn@latest init --preset radix-nova --force
```

Or edit CSS variables directly in the file at `tailwindCssFile` from `npx shadcn@latest info`.

---

## Adding Custom Colors

Add variables to the global CSS file (from `tailwindCssFile`). Never create a new CSS file.

1. Define in `:root` and `.dark`.
2. Register with Tailwind v4: `@theme inline { --color-warning: var(--warning); }`. For v3: extend `theme.colors` in `tailwind.config.js`.
3. Use in components: `bg-warning text-warning-foreground`.

---

## Border Radius

`--radius` controls border radius globally. Components derive values from it.

---

## Customizing Components

Prefer in order: (1) Built-in variants, (2) `className` for layout, (3) New variant via `cva`, (4) Wrapper components. See [rules/styling.md](rules/styling.md) for examples.

---

## Checking for Updates

```bash
npx shadcn@latest add button --dry-run
npx shadcn@latest add button --diff button.tsx
```

See SKILL.md “Updating Components” for the smart merge workflow.
