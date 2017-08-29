# td-text-editor

`td-text-editor` element generates a simplemde markdown editor

## API Summary

### Properties

#### The <td-text-editor> component has 0 properties:

| Name | Type | Description |
| --- | --- | --- |
| `value?` | `string` | Value of Text in Editor
| `options?` | `object` | Options Object of valid Configurations listed here: <a href="https://github.com/sparksuite/simplemde-markdown-editor#configuration">https://github.com/sparksuite/simplemde-markdown-editor#configuration</a>
| `isPreviewActive` | `function()` | Is the Preview Active. Returns boolean
| `isSideBySideActive` | `function()` | Is the Side By Side Active. Returns boolean
| `isFullscreenActive` | `function()` | Is Full Screen Active. Returns boolean
| `clearAutosavedValue` | `function()` | Clears Auto Saved Value. Returns void
| `toTextArea` | `function()` | Reverts to the Initial textarea. Returns void
| `simpleMDE` | `function()` | Getter function for the underlying simpleMDE Object. Returns SimpleMDE

### Usage

Example for HTML usage:

```html
<td-text-editor [value]="Some Text" [options]="options"></td-text-editor>
```

```typescript
class MyComponent {
  options: any = {
    lineWrapping: true,
    toolbar: false,
    ...
  };
}
```
---

Example for SimpleMDE Functions usage:

Any other SimpleMDE Functions can be used that are listed here:
<a href="https://github.com/sparksuite/simplemde-markdown-editor#toolbar-icons">https://github.com/sparksuite/simplemde-markdown-editor#toolbar-icons</a>

For example to use the TogglePreview to show or hide the markdown when the component loads:

```html
<td-text-editor [value]="Some Text" [options]="options" #textEditor></td-text-editor>
```

```typescript
import { TdTextEditorComponent } from '@covalent/text-editor';

...

class MyComponent {
  @ViewChild('textEditor') private _textEditor: TdTextEditorComponent;

  options: any = {
    lineWrapping: true,
    toolbar: false,
    ...
  };

  ngAfterViewInit(): void {
    this._textEditor.togglePreview();
  }
}
```

---
