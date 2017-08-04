## Setup

* Install Module
```
npm install @covalent/text-editor
```
* **Important**: Add to the styles in .angular-cli.json (to make SimpleMDE css available to the app)
```json
{
  "apps": [
    {
      "styles": [
        "../node_modules/simplemde/dist/simplemde.min.css"
      ],
```
* Add the following tag to html file
```html
<td-text-editor></td-text-editor>
```
* Import the covalent-editor component into app.module.ts
```typescript
import { CovalentTextEditorModule } from '@covalent/text-editor';
...

imports: [
    CovalentTextEditorModule,

...
```