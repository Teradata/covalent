## Covalent-Editor is a Text and Code Editor built on Covalent and Angular Material

[![Build Status](https://travis-ci.org/Teradata/covalent.svg?branch=develop)](https://travis-ci.org/Teradata/covalent)
[![npm version](https://badge.fury.io/js/%40covalent%2Fcore.svg)](https://badge.fury.io/js/%40covalent%2Fcore)
[![Join the chat at https://gitter.im/Teradata/covalent](https://badges.gitter.im/Teradata/covalent.svg)](https://gitter.im/Teradata/covalent?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Dependency Status](https://dependencyci.com/github/Teradata/covalent/badge)](https://dependencyci.com/github/Teradata/covalent)

Covalent is a reusable UI platform from Teradata for building web applications with common standards and tooling. It is based on Angular 2 and Material Design.

Covalent Github Repo: https://github.com/Teradata/covalent

Covalent-Editor is an Angular Component for text and code editing based on Covalent

## Setup

* Add the following dependency to package.json
```
"dependencies": {
    "@covalent/editor": "^1.0.0-alpha.1"
  },
```
* **Important**: Add the glob to assets in .angular-cli.json (to make monaco-editor javascript available to the app)
```
{
  "apps": [
    {
      "assets": [
        { "glob": "**/*", "input": "../node_modules/monaco-editor/min", "output": "./assets/monaco/" }
      ],
```
* Add the following tag to html file
```
<td-editor theme="vs" flex language="sql"></td-editor>
```
* Import the covalent-editor component into app.module.ts
```
import { CovalentEditorModule } from '@covalent/editor';
...

imports: [
    CovalentEditorModule.forRoot(),

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

---

* [Contributing Guidelines](docs/CONTRIBUTING.md)