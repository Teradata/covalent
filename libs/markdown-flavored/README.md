## TdFlavoredMarkdownComponent: td-flavored-markdown

`<td-flavored-markdown>` is component that parses Markdown and renders markdown with Material/Covalent components for a more appealing look.

This component uses `<td-markdown>` to render the markdown. See `<td-markdown>`'s documentation for more details on the markdown rendering and various inputs.

## API Summary

#### Inputs

- content?: string
  - Markdown format content to be parsed as material/covalent markup.
- simpleLineBreaks?: string
  - Sets whether newline characters inside paragraphs and spans are parsed as <br/>.
  - Defaults to false.
- hostedUrl?: string
  - If markdown contains relative paths, this is required to generate correct urls.
- anchor?: string
  - Anchor to jump to.
- copyCodeToClipboard?: boolean
  - Display copy button on code snippets to copy code to clipboard.
- copyCodeTooltips?: ICopyCodeTooltips
  - Tooltips for copy button to copy and upon copying.

For reference:

```
interface ICopyCodeTooltips {
  copy?: string;
  copied?: string;
}
```

#### Outputs

- buttonClicked: ITdFlavoredMarkdownButtonClickEvent
  - Emitted when a button is clicked

#### Events

- contentReady: undefined
  - Event emitted after the markdown content rendering is finished.

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

Then, import the **TdFlavoredMarkdownComponent** in your NgModule:

```typescript
import { TdFlavoredMarkdownComponent } from '@covalent/flavored-markdown';
@NgModule({
  imports: [
    TdFlavoredMarkdownComponent,
    ...
  ],
  ...
})
export class MyModule {}
```

### Theming

This module comes with its own Covalent theme which uses the material theme which is used by importing our theme scss file. It also depends on all the covalent themes since the components being rendered by this module are from other packages.

```scss
@use '@angular/material' as mat;
@use '@covalent/core/theming/all-theme' as cov;
@use '@covalent/markdown/markdown-theme' as markdown;
@use '@covalent/highlight/highlight-theme' as highlight;
@use '@covalent/flavored-markdown/flavored-markdown-theme' as markdown-flavored;

@include mat.core();

$primary: mat.define-palette($mat-orange, 800);
$accent: mat.define-palette($mat-light-blue, 600, A100, A400);
$warn: mat.define-palette($mat-red, 600);

$theme: mat.define-light-theme($primary, $accent, $warn);

@include mat.all-component-themes($theme);
@include cov.covalent-theme($theme);
@include markdown.covalent-markdown-theme($theme);
@include highlight.covalent-highlight-theme();
@include markdown-flavored.covalent-flavored-markdown-theme($theme);
```

## Example

```html
<td-flavored-markdown> - [x] checked action - [ ] unchecked action + list item + list item </td-flavored-markdown>
```

## TdFlavoredMarkdownLoaderComponent: td-flavored-markdown-loader

A component that fetches markdown from a GitHub url and renders it using `<td-flavored-markdown>`.

## API Summary

#### Inputs

- url: string

  - The url of the markdown file.

- httpOptions?: object

  - HTTP options that can be part of the request.

- anchor?: string
  - Anchor to jump to.

#### Outputs

- buttonClicked: ITdFlavoredMarkdownButtonClickEvent
  - Emitted when a button is clicked

#### Events

- contentReady: void

  - Emitted when markdown rendering is finished.

- loadFailed: Error
  - Emitted when loading of markdown file fails.

## Example

```html
<td-flavored-markdown-loader [url]="'https://github.com/Teradata/covalent/blob/main/README.md'"> </td-flavored-markdown-loader>
```
