## Setup

* Install Module
```
npm install @covalent/code-editor
```
* **Important**: Add the glob to assets in angular.json (to make monaco-editor javascript available to the app)
```json
{
  "apps": [
    {
      "assets": [
        {
          "glob": "**/*",
          "input": "node_modules/monaco-editor/min",
          /**
           * DEPRECATED and will be removed in 3.0.0
           * "input": "node_modules/@covalent/code-editor/assets/monaco",
           */
          "output": "/assets/monaco"
        }
      ],
```
* Add the following tag to html file
```html
<td-code-editor style="height: 200px" theme="vs" flex language="sql"></td-code-editor>
```
* Import the covalent-editor component into app.module.ts
```typescript
import { CovalentCodeEditorModule } from '@covalent/code-editor';
...

imports: [
    CovalentCodeEditorModule,

...
```