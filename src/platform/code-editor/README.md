## TdCodeEditorComponent: td-code-editor

`<td-code-editor>` is component for code editing based on Covalent and Monaco Editor. The component can run in both Electron and Web Browsers.

## API Summary

#### Inputs

+ value?: string
  + value of the code editor instance
+ language?: string
  + language used for syntax in the editor instance
+ registerLanguage?: function()
  + registers a custom Language within the editor
+ editorStyle?: string
  + Additional Styling applied to Editor Container
+ theme?: string
  + Theme used to style the Editor
+ automaticLayout?: boolean
  + Implemented via setInterval that constantly probes for the container's size. Defaults to false.
+ editorOptions?: object
  + Editor Options Object of valid Configurations listed here: <a href="https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html">https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html</a>
+ layout?: function()
  + Instructs the editor to remeasure its container

#### Properties

+ isFullScreen?: boolean
  + Is the editor currently in Full Screen mode
+ fullScreenKeyBinding?: number
  + Sets the KeyCode for shortcutting to Fullscreen.  Options listed see here: <a href="https://microsoft.github.io/monaco-editor/api/enums/monaco.keycode.html">https://microsoft.github.io/monaco-editor/api/enums/monaco.keycode.html</a>

#### Events

+ editorInitialized?: function($event)
  + Emitted when Editor is finished initializing. Event passes a reference to the actual editor instance that can be used to call additional operations outside of the Angular component.
+ editorConfigurationChanged?: function($event)
  + Emitted when configuration of the Editor changes
+ editorLanguageChanged?: function($event)
  + Emitted when the language of the Editor changes


## Installation

This component can be installed as npm package.

```bash
npm install @covalent/code-editor
```

## Setup

Add the glob to assets in angular.json (to make monaco-editor javascript available to the app)
```json
{
  "apps": [
    {
      "assets": [
        {
          "glob": "**/*",
          "input": "node_modules/monaco-editor/min",
          "output": "/assets/monaco"
        }
      ],
```

Then, import the **CovalentCodeEditorModule** in your NgModule:

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
        (ngModelChange)="callBackFunc()">
</td-code-editor>
```
