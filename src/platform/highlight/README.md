# td-highlight

`td-highlight` is an HTML wrapper `<pre><code>` tags enhanced with styling and code parser for angular2 on top of the [highlightjs lib](https://highlightjs.org/).

This implementation supports all the Common languages in highlightjs and typescript.

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `lang` | `"typescript"|"html"|"css"|[any common language supported in highlightjs]` | The language of the code thats inside the component.

## Installation

This component can be installed as npm package and can be included by importing from `@covalent/highlight`.

## Setup

`highlight.pack.js` needs to be added as vendor (installed as a `highlightjs` dependency).

```typescript
module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      ...
      'highlightjs/highlight.pack.js'
    ]
  });
};
```
Reference the script in the `index.html` file.

```html
<script src="vendor/highlightjs/highlight.pack.js"></script>
```

Then, import the [CovalentHighlightModule] using the forRoot() method in your NgModule:

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

## Usage

Simply wrap your code snippets in `<td-highlight>`. To use HTML brackets `<` and `>` wrap the code with `<![CDATA[` and `]]>;` or replace with HTMLs character entities `&lt;` and `&gt;`. 
Also, to display model binding, add spaces between curly braces like: `{{'{'}} {{'{'}} } }` and wrap them  with `<![CDATA[` and `]]>;`

Example for HTML usage:

 ```html
<td-highlight lang="html">       
  <![CDATA[
    <h1>hello world!</h1>
    <span>{ {property} }</span>
  ]]>
</td-highlight>
 ```

Example for CSS usage:

 ```html
<td-highlight lang="css">       
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
</td-highlight>
 ```
 
Example for Typescript:

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
