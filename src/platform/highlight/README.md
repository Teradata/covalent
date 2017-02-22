## TdHighlightComponent: td-highlight

`td-highlight` is an @angular component that uses native **@angular** to parse code to HTML elements. It is based on [highlight.js](https://highlightjs.org/) library.

This implementation supports all the Common languages in *highlight.js*.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `lang` | `[any common language supported in highlight.js]` | Language of the code content to be parsed as highlighted html.
| `content` | `string` | Code content to be parsed as highlighted html. Used to load data dynamically. e.g. `.ts` content.

**Note:** This module uses the **DomSanitizer** service to ~sanitize~ the parsed `html` from the `highlight.js` lib to avoid **XSS** issues.

By default, `--dev` build will log the following message in the console to let you know:

`WARNING: sanitizing HTML stripped some content (see http://g.co/ng/security#xss).`

## Installation

This component can be installed as npm package.

```bash
npm i -save @covalent/highlight
```

## Setup

Import the **[CovalentHighlightModule]** using the *forRoot()* method in your NgModule:

```typescript
import { CovalentHighlightModule } from '@covalent/highlight';

@NgModule({
  imports: [
    CovalentHighlightModule.forRoot(),
    ...
  ],
  ...
})
export class MyModule {}
```

### Theming

The `highlight` module comes with its own default `covalent` theme which you can use by importing our theme scss file.

```css
@import '~@covalent/highlight/highlight-theme';

@include covalent-highlight-theme();
```

Alternatively, you can use the *highlight.js* pre-built [themes](https://github.com/isagalaev/highlight.js/tree/master/src/styles) by loading them either by an import:

```css
@import '~highlight.js/styles/vs.css';
```

Loading them in the `.angular-cli.json`:

```json
"styles": [
  "/path/to/node_modules/highlight.js/styles/vs.css"
]
```

Or by loading them in the `index.html` file:

```html
<link rel="stylesheet" href="/path/to/node_modules/highlight.js/styles/vs.css">
```

## Usage

Simply wrap your code snippets in `<td-highlight>`. To use HTML brackets `<` and `>` wrap the code with `<![CDATA[` and `]]>;` or replace with HTMLs character entities `&lt;` and `&gt;`.

Also, to display model binding, add spaces between curly braces like: `{ { } }` and wrap them  with `<![CDATA[` and `]]>;`

Example for **HTML** usage:

```html
<td-highlight lang="html">
  <![CDATA[
    <td-highlight lang="html">
      <h1>hello world!</h1>
      <span>{ {property} }</span>
    </td-highlight>
  ]]>
</td-highlight>
```

Example for **CSS** usage:

```html
<td-highlight lang="css">    
  <![CDATA[   
    pre {
      display: block;
      overflow-x: auto;
      padding: 0;
      margin: 0;
      background: #002451;
      color: white;
      font-family: Menlo, Monaco, "Andale Mono", "lucida console", "Courier New", monospace;
      line-height: 1.45;
      tab-size: 2;
      -webkit-font-smoothing: auto;
      -webkit-text-size-adjust: none;
      position: relative;
      border-radius: 2px;
    }
  ]]>
</td-highlight>
```
 
Example for **Typescript**:

```html
<td-highlight lang="typescript">
  <![CDATA[
    import { Injectable } from '@angular/core';
    import { Subject } from 'rxjs/Subject';
    import { Observable } from 'rxjs/Observable';

    @Injectable()
    export class Service {

      private _sources: {[key : string]: Subject<any>} = {};
      private _observables: {[key: string]: Observable<any>} = {};

      constructor(){

      }

      public register(name) : Observable<any> {
        this._sources[name] = new Subject<any>();
        this._observables[name] = this._sources[name].asObservable();
        return this._observables[name];
      }

      public emit(name: string): void {
        if(this._sources[name]){
          this._sources[name].next(null);
        }
      }
    }
  ]]>
</td-highlight>
```
