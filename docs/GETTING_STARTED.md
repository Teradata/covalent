# Getting Started

Get started with Covalent using the Angular CLI.

See the  [material getting started](https://github.com/angular/material2/blob/master/guides/getting-started.md) for instructions.

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
npm install --save @covalent/http @covalent/highlight @covalent/markdown @covalent/dynamic-forms 
```

Playing with the latest changes from develop is also possible (for now, only the `core` module has a nightly build)

```bash
npm install --save https://github.com/Teradata/covalent-nightly.git
```

## Import the Covalent Core NgModule
  
**src/app/app.module.ts**
```ts
import { CovalentLayoutModule, CovalentStepsModule /*, any other modules */ } from '@covalent/core';
// (optional) Additional Covalent Modules imports
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
// other imports 
@NgModule({
  imports: [
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
  ],
  ...
})
export class AppModule { }
```

## Include the core and theme styles:
This is **required** to apply all of the core and theme styles to your application. 

See the [material theming guide](https://github.com/angular/material2/blob/master/guides/theming.md) for instructions.

A theme file is a simple Sass file that defines your palettes and passes them to mixins that output the corresponding styles. A typical theme file will look something like this:

```css
@import '~@angular/material/theming';
@import '~@covalent/core/theming/all-theme';

// (optional) Additional themes
@import '~@covalent/markdown/markdown-theme';
@import '~@covalent/highlight/highlight-theme';\

@include mat-core();

$primary: mat-palette($mat-orange, 800);
$accent:  mat-palette($mat-light-blue, 600, A100, A400);

$warn:    mat-palette($mat-red, 600);

$theme: mat-light-theme($primary, $accent, $warn);

@include angular-material-theme($theme);
@include covalent-theme($theme);

// (optional) Additional themes
@include covalent-markdown-theme($theme);
@include covalent-highlight-theme();
```

You only need this single Sass file; you do not need to use Sass to style the rest of your app.

If you are using the Angular CLI, support for compiling Sass to css is built-in but you have to add a new entry to the "styles" list in .angular-cli.json pointing to the theme file and the platform.css as follows:

### Using platform.css:

- The core covalent styles need to be included either in your `index.html` or as a new entry to the "styles" list in .angular-cli.json
load the Material Design font in your `index.html`.  
       
**src/index.html**
```html
<link href="../node_modules/@covalent/core/common/platform.css" rel="stylesheet">
```

or

**.angular-cli.json**
```json
"styles": [
  "../node_modules/@covalent/core/common/platform.scss"
],
```
### Other build tools

If you're not using the Angular CLI, you can use any existing Sass tooling to build the file (such as gulp-sass or grunt-sass). The simplest approach is to use the node-sass CLI; you simply run:

`node-sass src/themes.scss dist/themes.css`

and then include the output file in your application.

The theme file can be concatenated and minified with the rest of the application's css.

## Configuring SystemJS
If your project is using SystemJS for module loading, you will need to add `@covalent/core` 
to the SystemJS configuration:

```js
System.config({
  // existing configuration options
  map: {
    ...,
    '@covalent/core': 'npm:@covalent/core/core.umd.js',
    // (optional) Additional configuration options
    '@covalent/http': 'npm:@covalent/http/http.umd.js',
    '@covalent/highlight': 'npm:@covalent/highlight/highlight.umd.js',
    '@covalent/markdown': 'npm:@covalent/markdown/markdown.umd.js',
    '@covalent/dynamic-forms': 'npm:@covalent/dynamic-forms/dynamic-forms.umd.js'
  }
});
```

## Sample Covalent projects
- [Covalent Quickstart](https://github.com/Teradata/covalent-quickstart)
