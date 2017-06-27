## Setup

* Add the following dependency to package.json
```
"dependencies": {
    "@covalent/code-editor": "^1.0.0-alpha.5"
  },
```
* **Important**: Add the glob to assets in .angular-cli.json (to make monaco-editor javascript available to the app)
```
{
  "apps": [
    {
      "assets": [
        { "glob": "**/*", "input": "../node_modules/@covalent/code-editor/assets/monaco", "output": "./assets/monaco/" }
      ],
```
* Add the following tag to html file
```
<td-code-editor style="height: 200px" theme="vs" flex language="sql"></td-code-editor>
```
* Import the covalent-editor component into app.module.ts
```
import { CovalentCodeEditorModule } from '@covalent/code-editor';
...

imports: [
    CovalentCodeEditorModule.forRoot(),

...
```