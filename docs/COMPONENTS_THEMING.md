# Covalent Web Components: Theming Guide

In this guide we will help you understand and apply theming to your projects using Covalent's web component library. We'll cover how to integrate Covalent's theming tokens and apply them effectively using SCSS.

## Prerequisites

Before we dive into theming, ensure you have the following setup in your project:

1. SCSS preprocessor installed.
2. Covalent packages (`@covalent/tokens` and `@covalent/components`) installed in your project. read our [quick start guide](https://teradata.github.io/covalent/v9/#/docs/get-started/web-components) if you havent yet.
3. Optionally install the `@covalent/icons` package to leverage the custom covalent icons font.

## Understanding Theming Tokens

Covalent uses SCSS tokens as one way to manage its theming system. These tokens allow you to customize and apply consistent styling across your application. Let's break down the provided SCSS snippet to understand how theming tokens are used:

```scss
@use '@covalent/tokens' as covalent-tokens;
@use '@covalent/components' as covalent-theme;
@use '@covalent/icons';

// Extracting theme tokens
$theme-tokens: map-get(covalent-tokens.$tokens, 'theme');
$light-tokens: map-get($theme-tokens, 'light');
$dark-tokens: map-get($theme-tokens, 'dark');

// Extracting color tokens for light and dark themes
$light-colors: map-get($light-tokens, 'colors');
$dark-colors: map-get($dark-tokens, 'colors');

// Merging with deprecated tokens (if any)
$light-colors: map-merge($light-colors, map-get(covalent-tokens.$tokens, 'light'));
$dark-colors: map-merge($dark-colors, map-get(covalent-tokens.$tokens, 'dark'));
```

This snippet demonstrates how to extract and prepare color tokens for both light and dark themes.

## Applying the Theme

To apply the theme, you use the extracted tokens to define CSS custom properties or use them directly in your styles. The following snippet shows how to apply the light theme as the default and provides a mechanism to switch to the dark theme:

```scss
:root {
  // Apply the light theme by default
  @include covalent-theme.components-theme($light-colors, map-get(covalent-tokens.$tokens, typography));
}

// Dark theme class
.theme-dark {
  // Apply the dark theme when .theme-dark class is added to an element
  @include covalent-theme.components-theme($dark-colors, map-get(covalent-tokens.$tokens, typography));
}
```

## Example: Using Theming in a Project

Let's demonstrate how to use this theming in a simple project setup.

### 1. SCSS Setup

Ensure your project's main SCSS file includes the Covalent theming as shown in the snippets above.

### 2. HTML Structure

In your HTML, you can toggle between light and dark themes by adding or removing the `theme-dark` class on the root element (usually `<body>` or a top-level `<div>`).

```html
<body class="theme-dark">
  <!-- Your content here -->
</body>
```

### 3. Dynamically Changing Themes

You can add a mechanism to switch themes dynamically, for example, with a toggle switch. When the switch is toggled, you can add or remove the `theme-dark` class from the root element.

```javascript
function toggleTheme() {
  document.body.classList.toggle('theme-dark');
}
```

## Summary

By following this guide, you've learned how to use the Covalent theming system to apply consistent and dynamic themes to your application. The flexibility of SCSS theming allows for extensive customization and adaptability to your design requirements.
