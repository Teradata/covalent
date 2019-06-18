## TdFlavoredMarkdownComponent: td-flavored-markdown

`<td-flavored-markdown>` is component that parses Markdown and renders markdown with Material/Covalent components for a more appealing look.

This component uses `<td-markdown>` to render the markdown. See `<td-markdown>`'s documentation for more details on the markdown rendering and various inputs.

## API Summary

#### Inputs

+ content?: string
  + Markdown format content to be parsed as material/covalent markup.

+ simpleLineBreaks?: string
  + Sets whether newline characters inside paragraphs and spans are parsed as <br/>.
  + Defaults to false.

+ hostedUrl?: string
  + If markdown contains relative paths, this is required to generate correct urls.

+ anchor?: string
  + Anchor to jump to.

#### Events

+ contentReady: undefined
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

Then, import the **CovalentFlavoredMarkdownModule** in your NgModule:

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

This module comes with its own Covalent theme which uses the material theme which is used by importing our theme scss file. It also depends on all the covalent themes since the components being rendered by this module are from other packages.

```scss
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



## TdFlavoredMarkdownLoaderComponent: td-flavored-markdown-loader

A component that fetches markdown from a GitHub url and renders it using `<td-flavored-markdown>`.

## API Summary

#### Inputs

+ url: string
  + The url of the markdown file.

+ httpOptions?: object
  + HTTP options that can be part of the request.

+ anchor?: string
  + Anchor to jump to.

#### Events

+ contentReady: void
  + Emitted when markdown rendering is finished.

+ loadFailed: Error
  + Emitted when loading of markdown file fails.


## Example

```html
<td-flavored-markdown-loader
  [url]="'https://github.com/Teradata/covalent/blob/develop/README.md'"
>
</td-flavored-markdown-loader>
```
