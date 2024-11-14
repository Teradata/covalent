# Getting Started

Get started with Covalent using the Angular CLI.

See the [material getting started](https://v17.material.angular.io/guide/getting-started) for instructions.

## Install the CLI

```bash
npm install -g @angular/cli@17.3.6
```

## Create a new project

```bash
ng new my-project
```

The new command creates a project with a build system for your Angular app.

## Install Covalent Core module

```bash
npm install --save @covalent/core @covalent/tokens
## (optional) Additional Covalent Modules installs
npm install --save @covalent/highlight @covalent/markdown @covalent/flavored-markdown @covalent/dynamic-forms @covalent/echarts
```

To test (**only for testing!**) the latest changes from develop, install the nightly build:

```bash
npm install --save https://github.com/Teradata/covalent-nightly.git
npm install --save https://github.com/Teradata/covalent-echarts-nightly.git
```

## Import the Covalent Core NgModule

**In a module: src/app/app.module.ts**

```ts
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
// other imports
@NgModule({
  imports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentFlavoredMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentBaseEchartsModule,
  ],
  ...
})
export class AppModule { }
```

**In a standalone component: src/app/app.component.ts**

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Import any core or optional modules
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    // Add them to imports
    CovalentMarkdownModule,
    CovalentFlavoredMarkdownModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Covalent';
}
```

## Include the core, theme and typography:

This is **required** to apply all of the core, theme and typography styles to your application.

See the [material theming guide](https://v17.material.angular.io/guide/theming) and the [material typography guide](https://v17.material.angular.io/guide/typography) for instructions.

A theme file is a simple Sass file that defines your palettes and passes them to mixins that output the corresponding styles. A typical theme file will look something like this:

```scss
@use '@angular/material' as mat;

// (optional) Additional themes
@use '@covalent/markdown/markdown-theme' as markdown;
@use '@covalent/highlight/highlight-theme' as highlight;
@import '@covalent/flavored-markdown/flavored-markdown-theme';

// Covalent core themes
@import '@covalent/core/theming/all-theme';
@import '@covalent/core/theming/teradata-theme';

@include mat.core();

// Define a custom typography config that overrides the font-family
// or any typography level.
$typography: mat.define-typography-config(
  $font-family: 'Inter, monospace',
  $headline-1: mat.define-typography-level(32px, 48px, 700),
);

$primary: mat.define-palette($mat-blue, 700);
$accent: mat.define-palette($mat-orange, 800, A100, A400);
$warn: mat.define-palette($mat-red, 600);

$theme: mat.define-light-theme(
  (
    color: (
      primary: $primary,
      accent: $accent,
      warn: $warn,
    ),
    typography: $typography,
  )
);

// Include the Angular Material styles using the custom theme
@include mat.all-component-themes($theme);

@include covalent-theme($theme);

// (optional) Additional themes
@include markdown.covalent-markdown-theme($theme);
@include covalent-flavored-markdown-theme($theme);
@include highlight.covalent-highlight-theme($theme);
```

## Covalent Utility Classes

This is an **optional** set of CSS classes that will help to speed up development and standardize your application.

### Add via platform.css

The covalent utility CSS classes can be included via `platform.css` file as a new entry to the "styles" list in .angular-cli.json

**.angular-cli.json**

```json
"styles": [
  {
    "input": "node_modules/@covalent/core/common/platform.css",
    "bundleName": "covalent-styles",
    "inject": true
  }
],
```

This also includes the `material icons` by default.

#### Not interested in using ALL the CSS?

Click [here](https://teradata.github.io/covalent/v8/#/docs/theming/sass-mixins) if you want to cherry pick the utility classes instead of loading the `platform.css`

---
