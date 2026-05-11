# @covalent/foundations

Foundation CSS utility classes for Covalent Design System. Use these classes to apply Covalent styling to standard HTML elements in any framework or vanilla JavaScript project.

## ⚡ Quick Start (Bundles - Recommended for Designers)

**Single import with automatic dark mode:**

```html
<!-- Utility classes with auto dark mode -->
<link href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/bundles/covalent.adaptive.css" />

<!-- OR classless with auto dark mode -->
<link href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/bundles/elements.adaptive.css" />
```

**That's it!** Themes automatically switch based on your OS preference (dark mode on macOS/Windows).

<details>
<summary><strong>📦 All Bundle Options</strong></summary>

### Adaptive Bundles (Auto Dark Mode)

Perfect for designers and quick prototyping. Automatically switches between light/dark themes.

```html
<!-- Utility classes + auto theme switching -->
<link href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/bundles/covalent.adaptive.css" />

<!-- Classless + auto theme switching -->
<link href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/bundles/elements.adaptive.css" />
```

### Theme-Specific Bundles

When you need a fixed theme (e.g., always light for mockups).

```html
<!-- Light theme bundles -->
<link href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/bundles/covalent-light.bundle.css" />
<link href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/bundles/elements-light.bundle.css" />

<!-- Dark theme bundles -->
<link href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/bundles/covalent-dark.bundle.css" />
<link href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/bundles/elements-dark.bundle.css" />
```

### Modular (Advanced)

For dynamic theme switching or custom combinations.

```html
<link href="themes/light.css" id="theme" />
<link href="covalent.css" />

<script>
  // Switch theme dynamically
  document.getElementById('theme').href = 'themes/dark.css';
</script>
```

</details>

---

## 🎯 Two Usage Modes

### 1️⃣ Utility Classes (`covalent.css`) - **Full Control**

Use explicit classes for complete control over styling.

```html
<h1 class="cv-headline-1">Title</h1>
<p class="cv-body-1">Paragraph</p>
<ul class="cv-list-unordered">
  <li>Item</li>
</ul>
```

### 2️⃣ Classless/Semantic (`elements.css`) - **Zero Config**

HTML elements are automatically styled. No classes needed!

```html
<h1>Title</h1>
<!-- Automatically styled as headline-1 -->
<p>Paragraph</p>
<!-- Automatically styled as body-1 -->
<ul>
  <li>Item</li>
  <!-- Automatically styled list -->
</ul>
```

**When to use each:**

- 🎨 **Utility Classes**: Need different styles for same elements (e.g., multiple `h1` styles)
- ⚡ **Classless**: Markdown content, prototyping, documentation sites, blogs

---

## � Detailed Usage Guide

### Option 1: Bundles (Easiest - Recommended for Designers)

Single file import with everything included:

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- ONE import - theme + styles + auto dark mode -->
    <link href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/bundles/covalent.adaptive.css" />
  </head>
  <body>
    <h1 class="cv-headline-1">Hello Covalent!</h1>
    <p class="cv-body-1">Theme switches automatically with OS preference.</p>
  </body>
</html>
```

### Option 2: Modular (Advanced - For Dynamic Theme Switching)

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Choose theme -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/themes/light.css" />

    <!-- Include utility classes -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/covalent.css" />
  </head>
  <body>
    <h1 class="cv-headline-1">Hello Covalent!</h1>
    <p class="cv-body-1">Use explicit classes for control.</p>
    <ul class="cv-list-unordered">
      <li>Easy to customize</li>
      <li>Specificity control</li>
    </ul>
  </body>
</html>
```

### Option 2: Classless/Semantic (Recommended for Content)

```html
<!DOCTYPE html>
<html>
  <head>
    <!-- Choose theme -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/themes/light.css" />

    <!-- Include classless styles -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@covalent/foundations@latest/elements.css" />
  </head>
  <body>
    <h1>Hello Covalent!</h1>
    <!-- No classes needed! -->
    <p>Elements are automatically styled.</p>
    <ul>
      <li>Zero configuration</li>
      <li>Perfect for Markdown</li>
    </ul>
  </body>
</html>
```

## 📦 Installation

```bash
npm install @covalent/foundations @covalent/tokens
```

## 💻 Usage

### With Build Tools - Utility Classes

```html
<!-- In your HTML -->
<link rel="stylesheet" href="node_modules/@covalent/foundations/themes/light.css" />
<link rel="stylesheet" href="node_modules/@covalent/foundations/covalent.css" />
```

### With Build Tools - Classless

```html
<!-- In your HTML -->
<link rel="stylesheet" href="node_modules/@covalent/foundations/themes/light.css" />
<link rel="stylesheet" href="node_modules/@covalent/foundations/elements.css" />
```

### With SCSS

```scss
// Import utility classes
@use '@covalent/foundations/classes' as cv;

// Or import specific modules for customization
@use '@covalent/foundations/typography';
@use '@covalent/foundations/code';
@use '@covalent/foundations/lists';
```

## 📚 Available Classes

### Typography - Headings (H1-H6)

All typography classes use the Inter font family with optimized sizes, weights, and spacing.

| Class            | Description    | Font Size | Weight |
| ---------------- | -------------- | --------- | ------ |
| `.cv-headline-1` | Display Large  | 96px      | 300    |
| `.cv-headline-2` | Display Medium | 60px      | 300    |
| `.cv-headline-3` | Display Small  | 48px      | 400    |
| `.cv-headline-4` | Large Title    | 34px      | 400    |
| `.cv-headline-5` | Medium Title   | 24px      | 400    |
| `.cv-headline-6` | Small Title    | 20px      | 500    |

**Example:**

```html
<h1 class="cv-headline-1">Page Title</h1>
<h2 class="cv-headline-2">Section Title</h2>
<h3 class="cv-headline-3">Subsection</h3>
<h4 class="cv-headline-4">Article Title</h4>
```

### Typography - Body & Subtitles

| Class             | Description               | Font Size | Weight |
| ----------------- | ------------------------- | --------- | ------ |
| `.cv-subtitle-1`  | Large subtitle            | 16px      | 500    |
| `.cv-subtitle-2`  | Small subtitle            | 14px      | 500    |
| `.cv-body-1`      | Primary body text         | 16px      | 400    |
| `.cv-body-2`      | Secondary body text       | 14px      | 400    |
| `.cv-caption`     | Small helper text         | 12px      | 400    |
| `.cv-button-text` | Button labels (uppercase) | 14px      | 500    |

**Example:**

```html
<p class="cv-subtitle-1">Section Introduction</p>
<p class="cv-body-1">Main paragraph text with optimal readability.</p>
<p class="cv-body-2">Secondary information or helper text.</p>
<p class="cv-caption">Small annotation or label text.</p>
```

### Lists

Styled lists using Covalent tokens with support for nesting and variants.

| Class                   | Description                  |
| ----------------------- | ---------------------------- |
| `.cv-list`              | Base list (no bullets)       |
| `.cv-list-unordered`    | Unordered list with bullets  |
| `.cv-list-ordered`      | Ordered list with numbers    |
| `.cv-list-nested`       | Utility for nested lists     |
| `.cv-list-dense`        | Compact spacing variant      |
| `.cv-list-item-divider` | List item with bottom border |

**Example:**

```html
<!-- Unordered List -->
<ul class="cv-list-unordered">
  <li>First item</li>
  <li>
    Second item
    <ul>
      <li>Nested item</li>
    </ul>
  </li>
  <li>Third item</li>
</ul>

<!-- Ordered List -->
<ol class="cv-list-ordered">
  <li>Step one</li>
  <li>
    Step two
    <ol>
      <li>Sub-step 2.1</li>
      <li>Sub-step 2.2</li>
    </ol>
  </li>
  <li>Step three</li>
</ol>

<!-- Dense List -->
<ul class="cv-list-unordered cv-list-dense">
  <li>Compact item 1</li>
  <li>Compact item 2</li>
</ul>
```

### Code

Code styling with Roboto Mono monospace font.

| Class            | Description           |
| ---------------- | --------------------- |
| `.cv-code`       | Inline code styling   |
| `.cv-code-block` | Block code formatting |

**Example:**

```html
<p>Use <code class="cv-code">const x = 1;</code> for inline code.</p>

<pre class="cv-code-block">
function example() {
  return 'Hello World';
}
</pre>
```

### Links

Styled hyperlinks with the primary brand color.

| Class      | Description                   |
| ---------- | ----------------------------- |
| `.cv-link` | Styled link with hover states |

**Example:**

```html
<a href="#" class="cv-link">Click here</a>
```

## 🎨 Theming

### Available Themes

- ✨ **light.css** - Light theme with bright surfaces
- 🌙 **dark.css** - Dark theme with elevated surfaces

### Theme Switching

```html
<!-- Light Theme -->
<link rel="stylesheet" href="path/to/light.css" id="theme" />

<!-- JavaScript to switch themes -->
<script>
  function setTheme(theme) {
    document.getElementById('theme').href = `path/to/${theme}.css`;
  }
</script>
```

### CSS Variables

All themes provide CSS variables using the `--cv-theme-*` prefix:

**Color Variables:**

```css
--cv-theme-primary          /* Primary brand color */
--cv-theme-secondary        /* Secondary accent */
--cv-theme-surface          /* Surface background */
--cv-theme-on-surface       /* Text on surface */
--cv-theme-on-surface-variant  /* Secondary text */
--cv-theme-outline          /* Border color */
--cv-theme-outline-variant  /* Subtle borders */
```

**Typography Variables:**

```css
--cv-typography-font-family
--cv-typography-headline1-font-size
--cv-typography-body1-font-size
/* ...and many more */
```

### Custom Styling

Use CSS variables for custom components:

```css
.my-custom-card {
  background: var(--cv-theme-surface);
  color: var(--cv-theme-on-surface);
  border: 1px solid var(--cv-theme-outline);
  font-family: var(--cv-typography-font-family);
}
```

## 🛠️ Local Development

```bash
# Build tokens first (required dependency)
nx build tokens

# Build the styles
nx build foundations

# View demo
npm run dev:foundations
# Open http://localhost:8000
```

## 📁 Files Included

```
@covalent/foundations/
├── covalent.css                         # Utility classes (expanded)
├── covalent.min.css                     # Utility classes (minified)
├── elements.css                         # Classless/semantic styles (expanded)
├── elements.min.css                     # Classless/semantic styles (minified)
├── themes/
│   ├── light.css                       # Light theme CSS variables
│   └── dark.css                        # Dark theme CSS variables
├── bundles/
│   ├── covalent.adaptive.css           # Utility + auto dark mode ⭐
│   ├── covalent.adaptive.min.css
│   ├── elements.adaptive.css           # Classless + auto dark mode ⭐
│   ├── elements.adaptive.min.css
│   ├── covalent-light.bundle.css       # Utility + light theme
│   ├── covalent-light.bundle.min.css
│   ├── covalent-dark.bundle.css        # Utility + dark theme
│   ├── covalent-dark.bundle.min.css
│   ├── elements-light.bundle.css       # Classless + light theme
│   ├── elements-light.bundle.min.css
│   ├── elements-dark.bundle.css        # Classless + dark theme
│   └── elements-dark.bundle.min.css
├── package.json
└── README.md
```

### 📦 Which Bundle Should I Use?

| Use Case                 | Recommended File                    | Size     | Features                     |
| ------------------------ | ----------------------------------- | -------- | ---------------------------- |
| **Designer mockups**     | `bundles/covalent.adaptive.css`     | ~41KB    | One file, auto dark mode     |
| **Quick prototype**      | `bundles/elements.adaptive.css`     | ~39KB    | Zero classes, auto dark mode |
| **Always light theme**   | `bundles/covalent-light.bundle.css` | ~23KB    | Fixed light theme            |
| **Always dark theme**    | `bundles/covalent-dark.bundle.css`  | ~23KB    | Fixed dark theme             |
| **Dynamic theme switch** | `themes/light.css` + `covalent.css` | ~23KB    | Can swap themes with JS      |
| **Production app**       | Modular imports + tree-shaking      | Smallest | Import only what you need    |

## 🔄 Choosing Between Utility vs Classless

| Feature               | Utility Classes (`covalent.css`) | Classless (`elements.css`) |
| --------------------- | -------------------------------- | -------------------------- |
| **Setup**             | Add classes to HTML              | Just import CSS            |
| **Control**           | ✅ Full control per element      | ⚠️ One style per tag type  |
| **Bundle Size**       | Smaller (only used classes)      | Smaller (fewer selectors)  |
| **Best For**          | Apps, complex UIs                | Docs, blogs, prototypes    |
| **Markdown**          | ❌ Requires post-processing      | ✅ Works directly          |
| **Specificity**       | Low (classes)                    | Very low (tags)            |
| **Custom Variations** | ✅ Mix and match classes         | ❌ Override with classes   |

**Pro Tip:** You can use both! Import `elements.css` for base styling, then add utility classes for specific overrides:

```html
<link rel="stylesheet" href="themes/light.css" /> <link rel="stylesheet" href="elements.css" />
<!-- Base styles -->
<link rel="stylesheet" href="covalent.css" />
<!-- Override utilities -->

<h1>Normal heading</h1>
<!-- Uses elements.css -->
<h1 class="cv-headline-3">Smaller heading</h1>
<!-- Override with utility -->
```

## 🔗 Related Packages

- [`@covalent/tokens`](../tokens) - Design tokens (required peer dependency)
- [`@covalent/components`](../components) - Web Components library
- [`@covalent/angular`](../angular) - Angular components

## 🌐 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)

## 📄 License

MIT © Teradata

## 🤝 Contributing

See [CONTRIBUTING.md](../../docs/CONTRIBUTING.md) for contribution guidelines.
