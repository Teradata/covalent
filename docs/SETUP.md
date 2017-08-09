## Setup

* Install Module
```
npm install @covalent/text-editor
```
* Add the following tag to html file
```html
<td-text-editor [value]="Some Text" [options]="options"></td-text-editor>
```
* Fill in options with any options listed here: 
  * <a href="https://github.com/sparksuite/simplemde-markdown-editor#configuration">https://github.com/sparksuite/simplemde-markdown-editor#configuration</a>
```typescript
class MyComponent {
  options: any = {
    lineWrapping: true,
    toolbar: false,
    ...
  };
}
```
* Import the covalent-editor component into app.module.ts
```typescript
import { CovalentTextEditorModule } from '@covalent/text-editor';
...

imports: [
    CovalentTextEditorModule,

...
```