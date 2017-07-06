# td-code-editor

`td-code-editor` element generates a monaco editor for inline code editing

## API Summary

### Events

#### The <td-code-editor> component has 5 events:

| Name | Description |
| --- | --- |
| `onEditorInitialized` | Emitted when Editor is finished initializing
| `onEditorConfigurationChanged` | Emitted when configuration of the Editor changes
| `onEditorLanguageChanged` | Emitted when the language of the Editor changes
| `onEditorValueChange` | Emitted when value of the Editor changes
| `(change)` | Calls the provided callback function when value of the Editor changes

### Properties

#### The <td-code-editor> component has 7 properties:

| Name | Type | Description |
| --- | --- | --- |
| `value?` | `string` | Value of Code in Editor
| `language` | `string` | Code Language used in Editor
| `registerLanguage` | `function()` | Registers a custom Language within the editor
| `editorStyle` | `string` | Additional Styling applied to Editor Container
| `theme` | `string` | Theme used to style the Editor
| `isElectronApp` | `function()` | Returns true or false based on if running in Electron
| `[(ngModel)]` | `directive` | One-way or two-way binding of the variable value provided

---
