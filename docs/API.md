# td-code-editor

`td-code-editor` element generates a monaco editor for inline code editing

## API Summary

### Events

#### The <td-code-editor> component has 3 events:

| Name | Description |
| --- | --- |
| `editorInitialized` | Emitted when Editor is finished initializing. Event passes a reference to the actual editor instance that can be used to call additional operations outside of the Angular component.  See usage example below.
| `onEditorConfigurationChanged` | Emitted when configuration of the Editor changes
| `onEditorLanguageChanged` | Emitted when the language of the Editor changes


### Properties

#### The <td-code-editor> component has 6 properties:

| Name | Type | Description |
| --- | --- | --- |
| `value?` | `string` | Value of Code in Editor
| `language` | `string` | Code Language used in Editor
| `registerLanguage` | `function()` | Registers a custom Language within the editor
| `editorStyle` | `string` | Additional Styling applied to Editor Container
| `theme` | `string` | Theme used to style the Editor
| `automaticLayout` | `boolean` | Implemented via setInterval that constantly probes for the container's size. Defaults to false.
| `editorOptions` | `Object` | Editor Options Object of valid Configurations listed here: <a href="https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html">https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.ieditoroptions.html</a>
| `layout` | `function()` | Instructs the editor to remeasure its container
| `isFullScreen` | `boolean` | Is the editor currently in Full Screen mode
| `fullScreenKeyBinding` | `number` | Sets the KeyCode for shortcutting to Fullscreen.  Options listed see here:
<a href="https://microsoft.github.io/monaco-editor/api/enums/monaco.keycode.html">https://microsoft.github.io/monaco-editor/api/enums/monaco.keycode.html</a>


### Usage

Example for HTML usage:

```html
<td-code-editor 
        style="height: 200px" 
        editorStyle="border:0;"
        flex 
        theme="vs" 
        language="sql"
        automaticLayout
        [editorOptions]="{readOnly:true, fontSize:20}"
        [(ngModel)]="model"
        (change)="callBackFunc()">
</td-code-editor>
```
Example of exposing editor instance

```html
<td-code-editor
        [editorOptions]="editorOptions"
        [(ngModel)]="model"
        (editorInitialized)="onInit($event)">
</td-code-editor>
```

```typescript
export class AppComponent {
  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  model: string= 'function x() {\nconsole.log("Hello world!");\n}';
  column: number = 0;
  lineNumber: number = 0;

  async onEditorInitialized(editor: any): Promise<void> {
    let line: any = await editor.getPosition();

    this.column = line.column;
    this.lineNumber = line.lineNumber;
  }
}
```

---
