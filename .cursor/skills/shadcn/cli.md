# shadcn CLI Reference

Configuration is read from `components.json`.

> **IMPORTANT:** Always run commands using the project's package runner: `npx shadcn@latest`, `pnpm dlx shadcn@latest`, or `bunx --bun shadcn@latest`. Check `packageManager` from project context to choose the right one. Examples below use `npx shadcn@latest` but substitute the correct runner for the project.

> **IMPORTANT:** Only use the flags documented below. Do not invent or guess flags — if a flag isn't listed here, it doesn't exist. The CLI auto-detects the package manager from the project's lockfile; there is no `--package-manager` flag.

## Contents

- Commands: init, add (dry-run, smart merge), search, view, docs, info, build
- Templates: next, vite, start, react-router, astro
- Presets: named, code, URL formats and fields
- Switching presets

---

## Commands

### `init` — Initialize or create a project

```bash
npx shadcn@latest init [components...] [options]
```

Initializes shadcn/ui in an existing project or creates a new project (when `--name` is provided). Optionally installs components in the same step.

| Flag                    | Short | Description                                               | Default |
| ----------------------- | ----- | --------------------------------------------------------- | ------- |
| `--template <template>` | `-t`  | Template (next, start, vite, next-monorepo, react-router) | —       |
| `--preset [name]`       | `-p`  | Preset configuration (named, code, or URL)                | —       |
| `--yes`                 | `-y`  | Skip confirmation prompt                                  | `true`  |
| `--defaults`            | `-d`  | Use defaults (`--template=next --preset=base-nova`)       | `false` |
| `--force`               | `-f`  | Force overwrite existing configuration                    | `false` |
| `--cwd <cwd>`           | `-c`  | Working directory                                         | current |
| `--name <name>`         | `-n`  | Name for new project                                      | —       |
| `--silent`              | `-s`  | Mute output                                               | `false` |
| `--rtl`                 |       | Enable RTL support                                        | —       |
| `--reinstall`           |       | Re-install existing UI components                         | `false` |
| `--monorepo`            |       | Scaffold a monorepo project                               | —       |
| `--no-monorepo`         |       | Skip the monorepo prompt                                  | —       |

`npx shadcn@latest create` is an alias for `npx shadcn@latest init`.

### `add` — Add components

> **IMPORTANT:** To compare local components against upstream or to preview changes, ALWAYS use `npx shadcn@latest add <component> --dry-run`, `--diff`, or `--view`. NEVER fetch raw files from GitHub or other sources manually. The CLI handles registry resolution, file paths, and CSS diffing automatically.

```bash
npx shadcn@latest add [components...] [options]
```

Accepts component names, registry-prefixed names (`@magicui/shimmer-button`), URLs, or local paths.

| Flag            | Short | Description                                                                                                          | Default |
| --------------- | ----- | -------------------------------------------------------------------------------------------------------------------- | ------- |
| `--yes`         | `-y`  | Skip confirmation prompt                                                                                             | `false` |
| `--overwrite`   | `-o`  | Overwrite existing files                                                                                             | `false` |
| `--cwd <cwd>`   | `-c`  | Working directory                                                                                                    | current |
| `--all`         | `-a`  | Add all available components                                                                                         | `false` |
| `--path <path>` | `-p`  | Target path for the component                                                                                        | —       |
| `--silent`      | `-s`  | Mute output                                                                                                          | `false` |
| `--dry-run`     |       | Preview all changes without writing files                                                                            | `false` |
| `--diff [path]` |       | Show diffs. Without a path, shows the first 5 files. With a path, shows that file only (implies `--dry-run`)         | —       |
| `--view [path]` |       | Show file contents. Without a path, shows the first 5 files. With a path, shows that file only (implies `--dry-run`) | —       |

#### Dry-Run Mode

Use `--dry-run` to preview what `add` would do without writing any files. `--diff` and `--view` both imply `--dry-run`.

```bash
npx shadcn@latest add button --dry-run
npx shadcn@latest add button --diff
npx shadcn@latest add button --diff button.tsx
npx shadcn@latest add button --view
npx shadcn@latest add button --view button.tsx
```

### `search` — Search registries

```bash
npx shadcn@latest search <registries...> [options]
```

Fuzzy search across registries. Flag: `--query <query>`, `--limit`, `--offset`, `--cwd`.

### `view` — View item details

```bash
npx shadcn@latest view <items...> [options]
```

Displays item info including file contents. Example: `npx shadcn@latest view @shadcn/button`.

### `docs` — Get component documentation URLs

```bash
npx shadcn@latest docs <components...> [options]
```

Outputs resolved URLs for component documentation, examples, and API references. Fetch the URLs to get the actual content.

### `info` — Project information

```bash
npx shadcn@latest info [options]
```

Displays project info and `components.json` configuration. Use `--json` for machine-readable output.

**Project Info fields:** `framework`, `frameworkVersion`, `isSrcDir`, `isRSC`, `isTsx`, `tailwindVersion`, `tailwindConfigFile`, `tailwindCssFile`, `aliasPrefix`, `packageManager`.

**Components.json fields:** `base`, `style`, `rsc`, `tsx`, `tailwind.config`, `tailwind.css`, `iconLibrary`, `aliases.components`, `aliases.utils`, `aliases.ui`, `aliases.lib`, `aliases.hooks`, `resolvedPaths`, `registries`.

### `build` — Build a custom registry

```bash
npx shadcn@latest build [registry] [options]
```

Builds `registry.json` into individual JSON files. Flags: `--output`, `--cwd`.

---

## Templates

| Value          | Framework      | Monorepo support |
| -------------- | -------------- | ---------------- |
| `next`         | Next.js        | Yes              |
| `vite`         | Vite           | Yes              |
| `start`        | TanStack Start | Yes              |
| `react-router` | React Router   | Yes              |
| `astro`        | Astro          | Yes              |
| `laravel`      | Laravel        | No               |

---

## Presets

Three ways to specify a preset via `--preset`:

1. **Named:** `--preset base-nova` or `--preset radix-nova`
2. **Code:** `--preset a2r6bw` (base62 string, starts with lowercase `a`)
3. **URL:** `--preset "https://ui.shadcn.com/init?base=radix&style=nova&..."`

> **IMPORTANT:** Never try to decode, fetch, or resolve preset codes manually. Pass them directly to `npx shadcn@latest init --preset <code>`.

## Switching Presets

Ask the user first: **reinstall**, **merge**, or **skip**?

- **Re-install** → `npx shadcn@latest init --preset <code> --force --reinstall`
- **Merge** → `npx shadcn@latest init --preset <code> --force --no-reinstall`, then smart-merge each component
- **Skip** → `npx shadcn@latest init --preset <code> --force --no-reinstall` (config and CSS only)
