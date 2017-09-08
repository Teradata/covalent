## TdMarkdownComponent: td-markdown

`<td-markdown>` is an @angular component for Github flavored Javascript Markdown to HTML converter. It is based on [showdown](https://github.com/showdownjs/showdown/) library.

## API Summary

Methods:

| Name | Type | Description |
| --- | --- | 650--- |
| `content` | `string` | Markdown format content to be parsed as html markup. Used to load data dynamically. e.g. `README.md` content.
| `contentReady` | `function` |  Event emitted after the markdown content rendering is finished.

**Note:** This module uses the **DomSanitizer** service to ~sanitize~ the parsed `html` from the `showdown` lib to avoid **XSS** issues.

By default, `--dev` build will log the following message in the console to let you know:

`WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).`

## Installation

This component can be installed as npm package.

```bash
npm i -save @covalent/markdown
```

## Setup

`showdown.js` needs to be added as script in the `.angular-cli.json` OR referenced in `index.html` (installed as a `markdown` dependency).

**.angular-cli.json**:

```json
"scripts": [
  "path/to/node_modules/showdown/dist/showdown.js"
]
```

**index.html**:

```html
<script src="path/to/node_modules/showdown/dist/showdown.js"></script>
```

Then, import the **[CovalentMarkdownModule]** in your NgModule:

```typescript
import { CovalentMarkdownModule } from '@covalent/markdown';
@NgModule({
  imports: [
    CovalentMarkdownModule,
    ...
  ],
  ...
})
export class MyModule {}
```

### Theming

The `markdown` module comes with its own `covalent` theme which uses the material *theme* which is used by importing our theme scss file.

```css
@import '~@angular/material/theming';
@import '~@covalent/markdown/markdown-theme';

@include mat-core();

$primary: mat-palette($mat-orange, 800);
$accent:  mat-palette($mat-light-blue, 600, A100, A400);
$warn:    mat-palette($mat-red, 600);

$theme: mat-light-theme($primary, $accent, $warn);

@include markdown-markdown-theme($theme);
```

Or by loading them in the `index.html` file:

```html
<link rel="stylesheet" href="/path/to/node_modules/highlight.js/styles/vs.css">
```

## Example

**Html:**

```html
<td-markdown>
  # Heading 
  ## Sub Heading (H2)
  ### Steps (H2)
</td-markdown>
```

**Output:**

# Heading 
## Sub Heading (H2)
### Steps (H2)

