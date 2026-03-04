# Figma Code Connect

This project uses [Figma Code Connect](https://github.com/figma/code-connect) to link Covalent web components to their Figma component counterparts. When developers inspect a component in Figma's Dev Mode, they see a live code snippet that reflects the current variant/prop selections.

## Setup

### Config

`figma.config.json` in `libs/components/` configures the Code Connect CLI:

- **Parser**: `html` (for web components, not React)
- **Include**: `src/**/*.{ts,js}` — picks up all `*.figma.ts` files
- **Label**: `"Web Components"` — displayed in Figma's Dev Mode

### Auth

A Figma access token is required in `.env`:

```
FIGMA_ACCESS_TOKEN=<your-token>
```

The token needs `file_content:read` and `file_code_connect:write` scopes.

### Publishing

```bash
# Dry run (validate without uploading)
npx figma connect publish --dir libs/components --dry-run

# Publish (with batching for large payloads like icons)
npx figma connect publish --dir libs/components --batch-size 500 --skip-validation
```

All commands assume you're running from the repo root. Alternatively, `cd libs/components` and omit the `--dir` flag.

The `--batch-size` flag is required because the icon files push the payload past Figma's 5MB limit. `--skip-validation` avoids rate limiting on the Figma API during validation of 4000+ icon entries.

**Note:** The dry-run always shows "undefined" for component names with the HTML parser. This is a known limitation — the parser doesn't set the `component` field. Names resolve correctly during actual publish via the Figma API.

## Figma Files

| File                                                                                           | Purpose                                      |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------- |
| [Covalent Principles](https://www.figma.com/design/KvXVAmYdCVAS7hzkOa73Em/Covalent-Principles) | Main design system components (button, etc.) |
| [Material Symbols](https://www.figma.com/design/5y0VXufoAsspMzd8G0bl0i/Material-Symbols)       | Icon library (~2188 icons per style)         |

## Component Code Connect Files

Code Connect files live alongside their component source at `src/<component>/`.

### Naming Convention

- `cv-<component>.figma.ts` — component connections
- `icons-filled.figma.ts` / `icons-outlined.figma.ts` — generated icon connections

## How It Works (HTML Parser)

### Basic Props

The HTML parser uses `figma.connect(figmaUrl, config)` where the first argument is always the Figma component URL (unlike React which takes a component reference).

**Figma TEXT properties** map with `figma.string()`:

```ts
label: figma.string('label');
// Used as: label="${props.label}"
```

**Figma VARIANT properties** (boolean-like) map with `figma.enum()`:

```ts
raised: figma.enum('raised', { true: true, false: false });
// Used as: raised=${props.raised}
// Renders as boolean HTML attribute (present when true, absent when false)
```

**Figma VARIANT properties** (multi-value) map with `figma.enum()` using `undefined` to omit:

```ts
color: figma.enum('color', {
  none: undefined, // omitted from output
  negative: 'negative', // renders as color="negative"
  caution: 'caution',
  // ...
});
```

### Nested Instance Properties (Icons)

When a component contains a nested instance with its own properties (e.g., cv-button contains a cv-icon with an instance swap for icon selection), use `figma.nestedProps()` + `figma.instance()`:

```ts
cvIcon: figma.nestedProps('cv-icon', {
  icon: figma.instance('icon'), // resolves to the icon's string name
});
// Used as: icon=${props.cvIcon.icon}
```

**This only works if the swapped instances have their own Code Connect** that returns a string. See the Icons section below.

### What Doesn't Work

- `figma.string()` on an INSTANCE_SWAP property returns the raw node ID (e.g. `"50000000:935"`), not the component name
- `figma.instance()` used directly as an HTML attribute value returns an object, causing `"Code Connect Error: Unsupported type 'object' for attribute"`
- There is no `name` or `component` field on the config object that the HTML parser reads — both are silently ignored

## Icons

Icons are from a separate Figma library (Material Symbols) containing ~2188 icons per style (outlined, outlined filled).

### How Icon Resolution Works

Each icon component gets a Code Connect entry that returns its name as a plain string:

```ts
figma.connect('https://www.figma.com/design/.../Material-Symbols?node-id=507-49654', {
  example: () => 'add',
});
```

When a parent component uses `figma.instance("icon")` via `nestedProps`, Code Connect looks up the swapped icon's Code Connect and gets back the string `"add"`, which can then be used as an HTML attribute value.

### Regenerating Icons

If icons are added/removed from the Material Symbols library, regenerate the connection files:

```bash
export FIGMA_ACCESS_TOKEN=<your-token>
python3 libs/components/generate-icon-code-connect.py
npx figma connect publish --dir libs/components --batch-size 500 --skip-validation
```

The script (`libs/components/generate-icon-code-connect.py`) fetches all icon components from both pages of the Material Symbols file via the Figma API and generates:

- `src/icon/icons-filled.figma.ts` — outlined filled style (no suffix)
- `src/icon/icons-outlined.figma.ts` — outlined style (`_outlined` suffix)

### Material Symbols File Structure

| Page            | Node ID  | Icons | Naming                               |
| --------------- | -------- | ----- | ------------------------------------ |
| Outlined filled | `502:2`  | ~2188 | `add`, `home`, `search`, ...         |
| Outlined        | `273:12` | ~2188 | `add_outlined`, `home_outlined`, ... |

## Connecting a New Component

1. Find the component's node ID in Figma (right-click > Copy link, or use Dev Mode)
2. Create `src/<component>/cv-<component>.figma.ts`
3. Fetch the component's properties via the Figma API to see exact property names:
   ```bash
   curl -H "X-Figma-Token: $FIGMA_ACCESS_TOKEN" \
     "https://api.figma.com/v1/files/<file-key>/nodes?ids=<node-id>" \
     | python3 -m json.tool
   ```
4. Map each Figma property to its Code Connect equivalent using the patterns above
5. Skip visual-only properties (e.g. `state` for hover/focus/pressed) that have no code equivalent
6. Publish with `npx figma connect publish --dir libs/components`
