Get started with Covalent using the Angular CLI.

See the  [material2 getting started](https://github.com/angular/material2/blob/master/guides/getting-started.md) for instructions.

## Install the CLI
 
 ```bash
 npm install -g angular-cli
 ```
 
## Create a new project
 
 ```bash
 ng new my-project
 ```

The new command creates a project with a build system for your Angular app.

## Install Covalent Core components 

```bash
npm install --save @covalent/core
```

## Import the Covalent Core NgModule
  
**src/app/app.module.ts**
```ts
import { CovalentCoreModule } from '@covalent/core';
// other imports 
@NgModule({
  imports: [CovalentCoreModule.forRoot()],
  ...
})
export class AppModule { }
```

## Include the core and theme styles:
This is **required** to apply all of the core and theme styles to your application. 

See the [material2 theming guide](https://github.com/angular/material2/blob/master/guides/theming.md) for instructions.

A theme file is a simple Sass file that defines your palettes and passes them to mixins that output the corresponding styles. A typical theme file will look something like this:

```css
@import '~@angular/material/core/theming/all-theme';
@import '~@covalent/core/theming/all-theme';

@include md-core();

$primary: md-palette($md-orange, 800);
$accent:  md-palette($md-light-blue, 600, A100, A400);

$warn:    md-palette($md-red, 600);

$theme: md-light-theme($primary, $accent, $warn);

@include angular-material-theme($theme);
@include covalent-theme($theme);
```

You only need this single Sass file; you do not need to use Sass to style the rest of your app.

If you are using the Angular CLI, support for compiling Sass to css is built-in; you only have to add a new entry to the "styles" list in angular-cli.json pointing to the theme file (e.g., themes.scss).

If you're not using the Angular CLI, you can use any existing Sass tooling to build the file (such as gulp-sass or grunt-sass). The simplest approach is to use the node-sass CLI; you simply run:

node-sass src/themes.scss dist/themes.css
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
    '@covalent/core': 'npm:@covalent/core/core.umd.js'
  }
});
```

### Using platform.scss:

- The core covalent styles need to be included either in your `index.html` or as a new entry to the "styles" list in angular-cli.json
load the Material Design font in your `index.html`.  
       
**src/index.html**
```html
<link href="../node_modules/@covalent/core/common/platform.css" rel="stylesheet">
```

or

**angular-cli.json**
```json
"styles": [
  "../node_modules/@covalent/core/common/platform.scss"
],
```

## Sample Covalent projects
- [Covalent Quickstart](https://github.com/Teradata/covalent-quickstart)