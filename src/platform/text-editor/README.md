## TdTextEditorComponent: td-text-editor

`<td-text-editor>` element generates an easymde markdown editor.

## API Summary

#### Inputs

+ value?: string
  + value of text in editor
+ options?: object
  + Options Object of valid Configurations listed here: <a href="https://github.com/Ionaru/easy-markdown-editor#configuration">https://github.com/Ionaru/easy-markdown-editor#configuration</a>


#### Properties

+ isPreviewActive?: function()
  + is the Preview Active. Returns boolean
+ isSideBySideActive?: function()
  + is the Side By Side Active. Returns boolean
+ isFullscreenActive?: function()
  + is Full Screen Active. Returns boolean
+ clearAutosavedValue?: function()
  + clears Auto Saved Value. Returns void
+ toTextArea?: function()
  + reverts to the Initial textarea. Returns void
+ easyMDE?: function()
  + getter function for the underlying easyMDE Object. Returns EasyMDE

## Installation

This component can be installed as npm package.

```bash
npm install @covalent/text-editor
```

## Setup

Import the **CovalentTextEditorModule** in your NgModule:

```typescript
import { CovalentTextEditorModule } from '@covalent/text-editor';
@NgModule({
  imports: [
    CovalentTextEditorModule,
    ...
  ],
  ...
})
export class MyModule {}
```

### Usage

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