# Markdown : td-markdown

```<td-markdown>``` is a directive for Github flavored Javascript Markdown to HTML converter. It is based on Showdown Library (https://github.com/showdownjs/showdown/).

------

## Installation

### This component can be installed as npm package and can be included by importing from @covalent/markdown.

#### Steps
* `showdown.js` needs to be added as vendor (installed as a `markdown` dependency).
```
module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      ...
      'showdown/dist/showdown.js'
    ]
  });
};
```
* Reference the script in the `index.html` file.
```
<script src="vendor/showdown/dist/showdown.js"></script>
```
Markdown has been tested successfully with:

  * Chrome 
  * Firefox
  * Safari

## Extended documentation
Check our [http://localhost:4200/components/markdown] for examples and a more in-depth documentation on usage.


## Quick Example

```ts
import { TdMarkdownComponent } from '@covalent/markdown';
...
  directives: [ TdMarkdownComponent ]
})
export class Demo {

}
```

### html

```html
<td-markdown>
  <pre><code>
# Heading 
## Sub Heading (H2)
### Steps (H2)
  </code></pre>
</td-markdown>
```

### Output 

Above examples should output...

    <h1 id="headingh1">Heading (H1)</h1>
    <h2 id="subheadingh2">Sub Heading (H2)</h2>
    <h3 id="stepsh3">Steps (H3)</h3>

 * **It also has support for GFM code block style & GFM takslists. Example:
 
   ```md
    - [x] This task is done
    - [ ] This is still pending
   ```


## Live DEMO

Check a live Demo here http://localhost:4200/components/markdown

