# td-text-editor

`td-code-editor` element generates a simplemde markdown editor

## API Summary

### Properties

#### The <td-code-editor> component has 0 properties:

| Name | Type | Description |
| --- | --- | --- |
| `value?` | `string` | Value of Text in Editor
| `options?` | `object` | Options Object of valid Configurations listed here: <a href="https://github.com/sparksuite/simplemde-markdown-editor#configuration">https://github.com/sparksuite/simplemde-markdown-editor#configuration</a>
| `isPreviewActive` | `function()` | Is the Preview Active. Returns boolean
| `isSideBySideActive` | `function()` | Is the Side By Side Active. Returns boolean
| `isFullscreenActive` | `function()` | Is Full Screen Active. Returns boolean
| `clearAutosavedValue` | `function()` | Clears Auto Saved Value. Returns void
| `toTextArea` | `function()` | Reverts to the initial textarea. Returns void

### Usage

Example for HTML usage:

```html
<td-text-editor [value]="Some Text" options="opts"></td-text-editor>
```

```typescript
class MyComponent {
  opts: any = {
    lineWrapping: true,
    toolbar: false,
    ...
  };
}
---
