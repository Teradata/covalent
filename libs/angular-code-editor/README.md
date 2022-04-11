## TdCodeEditorComponent: td-code-editor

`<td-code-editor>` is component for code editing based on Covalent and Monaco Editor. The component can run in both Electron and Web Browsers.

## API Summary

#### Inputs

- value?: string
  - value of the code editor instance
- language?: string
  - language used for syntax in the editor instance
- registerLanguage?: function()
  - registers a custom Language within the editor
- editorStyle?: string
  - Additional Styling applied to Editor Container
- theme?: string
  - Theme used to style the Editor
- editorOptions?: object
  - Editor Options Object of valid Configurations listed here: <a href="https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html">https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html</a>
- layout?: function()
  - Instructs the editor to remeasure its container

#### Properties

- isFullScreen?: boolean
  - Is the editor currently in Full Screen mode
- fullScreenKeyBinding?: number
  - Sets the KeyCode for shortcutting to Fullscreen. Options listed see here: <a href="https://microsoft.github.io/monaco-editor/api/enums/monaco.keycode.html">https://microsoft.github.io/monaco-editor/api/enums/monaco.keycode.html</a>

#### Events

- editorInitialized?: function($event)
  - Emitted when Editor is finished initializing. Event passes a reference to the actual editor instance that can be used to call additional operations outside of the Angular component.
- editorConfigurationChanged?: function($event)
  - Emitted when configuration of the Editor changes
- editorLanguageChanged?: function($event)
  - Emitted when the language of the Editor changes

## Installation

This component can be installed as npm package.

```bash
npm install @covalent/code-editor
```

## Setup

Due to an known issue in Monaco Editor version 0.20.0 <a href="https://github.com/microsoft/monaco-editor/issues/1842">https://github.com/microsoft/monaco-editor/issues/1842</a> regarding errors arising when quickly disposing editor instances, utilize the 0.17.1 version of monaco-editor.

We utilize the ESM build of the Monaco Editor. To include this build, you must utilize custom webpack. See <a href="https://github.com/Microsoft/monaco-editor/blob/master/docs/integrate-esm.md">https://github.com/Microsoft/monaco-editor/blob/master/docs/integrate-esm.md</a> for more information.

Install the webpack custom builder.

```bash
npm install --save-dev @angular-builders/custom-webpack
```

Install the Monaco Editor webpack extension plugin.

```bash
npm install --save-dev monaco-editor-webpack-plugin
```

Create a webpack config file utilizing the Monaco Editor webpack plugin. Languages and features can be included/excluded to control the resulting image size.

```javascript
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  // target should only be specified when including component in Electron app
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader'],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['css', 'html', 'javascript', 'sql', 'typescript'],
      features: ['contextmenu', 'clipboard', 'find'],
    }),
  ],
};
```

Note: If you are including this component in an Electron application, define the electron-renderer target. See Electron example here:
[https://github.com/Teradata/covalent-electron/blob/main/monaco-webpack.config.js](https://github.com/Teradata/covalent-electron/blob/main/monaco-webpack.config.js)

Reference the webpack file in your angular.json build config.

```json
...
"build": {
  "builder": "@angular-builders/custom-webpack:browser",
  "options": {
    "customWebpackConfig": {
      "path": "./monaco-webpack.config.js",
        "mergeStrategies": {
        "module.rules": "prepend"
      }
    },
...
```

Import the **CovalentCodeEditorModule** in your NgModule:

```typescript
import { CovalentCodeEditorModule } from '@covalent/code-editor';
@NgModule({
  imports: [
    CovalentCodeEditorModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Example

```html
<td-code-editor
  [style.height.px]="200"
  editorStyle="border:0;"
  flex
  theme="vs"
  language="sql"
  [editorOptions]="{readOnly:true, fontSize:20}"
  [(ngModel)]="model"
  (ngModelChange)="callBackFunc()"
>
</td-code-editor>
```

## Running unit tests

Run `nx test angular-code-editor` to execute the unit tests.
