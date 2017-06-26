## API

### Events

#### The <td-code-editor> component has 4 events:

* onEditorInitialized
  * Emitted when Editor is finished initializing.
* onEditorConfigurationChanged
  * Emitted when configuration of the Editor changes.
* onEditorLanguageChanged
  * Emitted when the language of the Editor changes.
* onEditorValueChange
  * Emitted when value of the Editor changes.

### Properties

#### The <td-code-editor> component has 6 properties:

* value?: string
   * Value of Code in Editor
* language: string
  * Code Language used in Editor
* registerLanguage: function()
  * Registers a custom Language within the editor
* editorStyle: string
  * Additional Styling applied to Editor Container
* theme: string
  * Theme used to style the Editor
* isElectronApp: function()
  * Returns true or false based on if running in Electron.