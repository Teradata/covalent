## TdMarkdownComponent: td-markdown

`<td-markdown>` is an @angular component for Github flavored Javascript Markdown to HTML converter. It is based on [showdown](https://github.com/showdownjs/showdown/) library.

## API Summary

Methods:

| Name | Type | Description |
| --- | --- | --- |
| `content` | `string` | Markdown format content to be parsed as html markup. Used to load data dynamically. e.g. `README.md` content.

**Note:** This module uses the **DomSanitizer** service to ~sanitize~ the parsed `html` from the `showdown` lib to avoid **XSS** issues.

By default, `--dev` build will log the following message in the console to let you know:

`WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).`

## Installation

This component can be installed as npm package.

```npm
npm i -save @covalent/markdown
```

## Setup

`showdown.js` needs to be added as script in the `angular-cli.json` OR referenced in `index.html` (installed as a `markdown` dependency).

**angular-cli.json**:

```json
"scripts": [
  "../node_modules/showdown/dist/showdown.js"
]
```

**index.html**:

```html
<script src="../node_modules/showdown/dist/showdown.js"></script>
```

Then, import the **[CovalentMarkdownModule]** using the *forRoot()* method in your NgModule:

```typescript
import { CovalentMarkdownModule } from '@covalent/markdown';
@NgModule({
  imports: [
    CovalentMarkdownModule.forRoot(),
    ...
  ],
  ...
})
export class MyModule {}
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

