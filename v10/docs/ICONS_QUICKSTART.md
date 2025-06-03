Here's the revised guide based on your requests:

# Guide to Using Covalent Custom Icon Font

This guide provides step-by-step instructions for integrating and using Covalent's custom icon font (`@covalent/icons`) in your project. These icons are designed for specific use cases not covered by the standard [Material Symbols](https://fonts.google.com/icons) icon set.

---

## 1. Installation

Install the `@covalent/icons` package via npm:

```bash
npm install @covalent/icons
```

## 2. SCSS Setup

Import the Covalent icons SCSS file in your global stylesheet or component SCSS:

```scss
// In styles.scss or your component's SCSS file:
@use 'covalent/icons';
```

this stylesheet is meant to provide the `font-family` css definition for `Covalent Icons` as well as a css selector to override `--mdc-icon-fonts` css variable

## 3. Using Icons in HTML

Use the `iconfont="covalent-icons"` attribute-value pair with any covalent component that has support for material icons. this will overwrite the icon font that uses the `--mdc-icon-fonts` css variable.

### Example:

```html
<cv-icon iconfont="covalent-icons">teradata</cv-icon>
```

### Example: Icon in a Button

```html
<cv-button iconfont="covalent-icons" icon="teradata"></cv-button>
```

Replace `teradata` with the desired icon name (see available icons [here](https://teradata.github.io/covalent/docs/components/?path=/story/components-icon--all-covalent-icons)).

## 4. Available Icons

Browse all icons in the **Covalent Storybook**:  
🔗 [Covalent Icons Gallery](https://teradata.github.io/covalent/docs/components/?path=/story/components-icon--all-covalent-icons)

## 5. Troubleshooting

### Icons Not Displaying?

1. **Verify Installation**: Ensure `@covalent/icons` is in `node_modules`.
2. **Check SCSS Import**: Confirm `@use 'covalent/icons'` is added to your styles.
3. **Validate Icon Name**: Use exact names from the [Storybook](https://teradata.github.io/covalent/docs/components/?path=/story/components-icon--all-covalent-icons).
4. **Font Loading**: Check the browser's dev tools (Network tab) to ensure font files (e.g., `covalent-icons.woff2`) load.
5. **Correct Attribute Usage**: Ensure the `iconfont="covalent-icons"` attribute is applied to element you wish to overwrite.

### Adjusting SCSS Paths

If your build system can’t resolve `covalent/icons`, use a relative path to `node_modules`:

```scss
@use '~@covalent/icons';
```

## Adding a new icon

For directions on how to add a new svg icon to this icon font, refer to the [Covalent Icon's README](https://github.com/Teradata/covalent/tree/main/libs/icons).
