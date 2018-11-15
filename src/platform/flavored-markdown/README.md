## TdFlavoredMarkdownComponent: td-flavored-markdown

`<td-flavored-markdown>` is an @angular component for Material/Covalent flavored Javascript Markdown. It is parses markdown into material design / covalent elements for a more appealing look.

**Note:** This module uses the **DomSanitizer** service to ~sanitize~ the parsed `html` to avoid **XSS** issues.

By default, `--dev` build will log the following message in the console to let you know:

`WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).`

## API Summary

#### Inputs

+ content: string
  + Markdown format content to be parsed as material/covalent markup. 
  + Used to load data dynamically. e.g. `README.md` content.

#### Events

+ contentReady: function
  + Event emitted after the markdown content rendering is finished.


## Installation

This component can be installed as npm package.

```bash
npm i -save @angular/cdk
npm i -save @angular/material
npm i -save @covalent/core
npm i -save @covalent/markdown
npm i -save @covalent/highlight
npm i -save @covalent/flavored-markdown
```

## Setup

Then, import the **[CovalentFlavoredMarkdownModule]** in your NgModule:

```typescript
import { CovalentFlavoredMarkdownModule } from '@covalent/flavored-markdown';
@NgModule({
  imports: [
    CovalentFlavoredMarkdownModule,
    ...
  ],
  ...
})
export class MyModule {}
```

### Theming

The `flavored-markdown` module comes with its own `covalent` theme which uses the material *theme* which is used by importing our theme scss file. It also depends on all the covalent themes since the components being rendered by this module are from other packages.

```css
@import '~@angular/material/theming';
@import '~@covalent/core/theming/all-theme';
@import '~@covalent/markdown/markdown-theme';
@import '~@covalent/highlight/highlight-theme';
@import '~@covalent/flavored-markdown/flavored-markdown-theme';

@include mat-core();

$primary: mat-palette($mat-orange, 800);
$accent:  mat-palette($mat-light-blue, 600, A100, A400);
$warn:    mat-palette($mat-red, 600);

$theme: mat-light-theme($primary, $accent, $warn);

@include angular-material-theme($theme);
@include covalent-theme($theme);
@include covalent-markdown-theme($theme);
@include covalent-highlight-theme();
@include covalent-flavored-markdown-theme($theme);
```

## Example

```html
<td-flavored-markdown>
  - [x] checked action
  - [ ] unchecked action

  + list item
  + list item
</td-flavored-markdown>
```

