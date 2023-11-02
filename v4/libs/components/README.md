# Covalent components

Covalent components is a coded implementation of Covalent Design System using [lit](https://lit.dev/) framework to compile to native HTML elements, ready to use any where HTML is supported.

## Getting started

### Using a CDN

All components are published in npm and available on any CDN that host npm modules like [jsdelivr](https://www.jsdelivr.com/package/npm/@covalent/components) or [unpkg](https://unpkg.com/@covalent/components@latest). For convenience we include a single bundled js asset with all components.

```html
<!-- using a specific version -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@covalent/components@4.10.0/theme.css"
/>
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@covalent/components@4.10.0/index.js"
></script>

<!-- using the latest version -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@covalent/components@latest/theme.css"
/>
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@covalent/components@latest/index.js"
></script>
```

the component bundles are also available individually

```html
<!-- just include the button component -->
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@covalent/components@latest/button.js"
></script>
```

### Basic usage

once the script is loaded, its now possible to start using our custom HTML elements anywhere.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@covalent/components@latest/theme.css" />
    <script type="module" src="https://cdn.jsdelivr.net/npm/@covalent/components@latest/index.js"></script>
  </head>
  <body>
    <td-button raised>Hello world<td-button>
  </body>
</html>
```

### Using ES imports

### Installing

Use your favorite package management tool to add covalent components to your project.

```bash
# Using npm
npm install --save @covalent/components

# Using yarn
yarn add @covalent/components
```

### Angular

Applications using angular can use covalent components in the same way they use HTML elements today adding [`CUSTOM_ELEMENTS_SCHEMA`](https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA) schema to any Angular module or standalone component.

```javascript
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

import '@covalent/components/button.js';

@component({
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<td-button>Hello world</td-button>',
})
export class AppComponent {}
```

## Running the storybook docs

Run `nx storybook components` to start the main storybook documentation site for this project

## Running the build

Run `nx build components` to get a publishable set of build assets using webpack

## Running linting

Run `nx lint components` to execute the linting via [ESlint](https://eslint.org/)

Run `nx scsslint components` to execute scsslint via [Stylelint](https://stylelint.io/)

## Running unit tests

Run `nx test components` to execute the unit tests via [Jest](https://jestjs.io).
