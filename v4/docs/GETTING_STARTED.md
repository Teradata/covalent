# Getting Started

Get started with Covalent using the Angular CLI.

See the [material getting started](https://github.com/angular/material2/blob/master/guides/getting-started.md) for instructions.

## Install the CLI

```bash
npm install -g @angular/cli@latest
```

## Create a new project

```bash
ng new my-project
```

The new command creates a project with a build system for your Angular app.

## Install Covalent Core module

```bash
npm install --save @covalent/core
## (optional) Additional Covalent Modules installs
npm install --save @covalent/highlight @covalent/markdown @covalent/dynamic-forms @covalent/echarts
```

To test (**only for testing!**) the latest changes from develop, install the nightly build:

```bash
npm install --save https://github.com/Teradata/covalent-nightly.git
npm install --save https://github.com/Teradata/covalent-echarts-nightly.git
```

## Import the Covalent Core NgModule

**src/app/app.module.ts**

```ts
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
/* any other core modules */
// (optional) Additional Covalent Modules imports
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
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
    CovalentDynamicFormsModule,
    CovalentBaseEchartsModule,
  ],
  ...
})
export class AppModule { }
```

## Include the core, theme and typography:

This is **required** to apply all of the core, theme and typography styles to your application.

See the [material theming guide](https://github.com/angular/material2/blob/master/guides/theming.md) and the [material typography guide](https://github.com/angular/material2/blob/master/guides/typography.md) for instructions.

A theme file is a simple Sass file that defines your palettes and passes them to mixins that output the corresponding styles. A typical theme file will look something like this:

```css
@import '~@angular/material/theming';
@import '~@covalent/core/theming/all-theme';

// (optional) Additional themes
@import '~@covalent/markdown/markdown-theme';
@import '~@covalent/highlight/highlight-theme';

// Define a custom typography config that overrides the font-family
// or any typography level.
$typography: mat-typography-config(
  $font-family: 'Roboto, monospace',
  $headline: mat-typography-level(32px, 48px, 700)
);

@include mat-core(
  $typography
); // $typography is an **optional** argument for the mat-core

$primary: mat-palette($mat-orange, 800, 100, 900);
$accent: mat-palette($mat-light-blue, 600, 100, 900);

$warn: mat-palette($mat-red, 600, 100, 900);

$theme: mat-light-theme($primary, $accent, $warn);

@include angular-material-theme($theme);
@include covalent-theme(
  $theme,
  $typography
); // $typography is an **optional** argument for the covalent-theme

// (optional) Additional themes
@include covalent-markdown-theme($theme);
@include covalent-highlight-theme();
```

You only need this single Sass file; you do not need to use Sass to style the rest of your app.

If you are using the Angular CLI, support for compiling Sass to css is built-in but you have to add a new entry to the "styles" list in .angular-cli.json pointing to the theme file and the platform.css as follows:

## Covalent Utility Classes

This is an **optional** set of CSS classes that will help to speed up development and standardize your application.

### Add via platform.css

The covalent utility CSS classes can be included via `platform.css` file either in your `index.html` or as a new entry to the "styles" list in .angular-cli.json

**src/index.html**

```html
<link
  href="../node_modules/@covalent/core/common/platform.css"
  rel="stylesheet"
/>
```

or

**.angular-cli.json**

```json
"styles": [
  "../node_modules/@covalent/core/common/platform.scss"
],
```

This also includes the `material icons` by default.

#### Not interested in using ALL the CSS?

Click [here](https://teradata.github.io/covalent/#/docs/theming/utility-sass-mixins) if you want to cherry pick the utility classes instead of loading the `platform.css`

---
