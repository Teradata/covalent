## Covalent-Code-Editor is a Text and Code Editor built on Covalent, Monaco Editor and Angular Material

[![Build Status](https://travis-ci.org/Teradata/covalent.svg?branch=develop)](https://travis-ci.org/Teradata/covalent-code-editor)
[![npm version](https://badge.fury.io/js/%40covalent%2Fcore.svg)](https://badge.fury.io/js/%40covalent%2Fcode-editor)
[![Join the chat at https://gitter.im/Teradata/covalent](https://badges.gitter.im/Teradata/covalent.svg)](https://gitter.im/Teradata/covalent?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://dependencyci.com/github/Teradata/covalent/badge)](https://dependencyci.com/github/Teradata/covalent-code-editor)

<img alt="Covalent" src="https://cdn.rawgit.com/Teradata/covalent/develop/src/app/assets/icons/covalent.svg" width="150">

Covalent is a reusable UI platform from Teradata for building web applications with common standards and tooling. It is based on Angular 2 and Material Design.

Covalent-Code-Editor is an Angular Component for text and code editing based on Covalent and Monaco Editor.  Covalent-Code-Editor can run in both Electron and Web Browsers.

Covalent Github Repo: https://github.com/Teradata/covalent

Covalent Electron Github Repo: https://github.com/Teradata/covalent-electron

Monaco Editor Repo: https://github.com/Microsoft/monaco-editor

## Setup

* Add the following dependency to package.json
```
"dependencies": {
    "@covalent/code-editor": "^1.0.0-alpha.4"
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
<td-code-editor theme="vs" flex language="sql"></td-code-editor>
```
* Import the covalent-editor component into app.module.ts
```
import { CovalentCodeEditorModule } from '@covalent/code-editor';
...

imports: [
    CovalentCodeEditorModule.forRoot(),

...
```

## API

### Events
* onEditorInitialized
* onEditorConfigurationChanged
* onEditorLanguageChanged
* onEditorValueChange

### Getters and Setters
* value
* language
* registerLanguage
* editorStyle
* theme
* isElectronApp

### Electron

<img alt="Covalent" src="https://cdn.rawgit.com/Teradata/covalent-electron/develop/src/app/assets/icons/covalent-and-electron.svg" width="150">

*  Covalent-Code-Editor can run in Electron as well as Web Browsers.  When running in Electron the component automatically runs itself inside a "webview" to sandbox away the AMDRequires used in Monaco Editor so it doesn't cause issues with the Requires in Electron.
   * See:
     * https://github.com/Microsoft/monaco-editor/issues/90
     * https://electron.atom.io/docs/api/webview-tag/

---

* [Contributing Guidelines](docs/CONTRIBUTING.md)