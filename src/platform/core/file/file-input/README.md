## TdFileInputComponent: td-file-input

## Usage

Add the element wherever you want to bind a [File | FileList] into a class model without additional elements.

Can also drop a file(s) into the component to bind the file(s) to it.

Example for usage:

```html
<td-file-input [(ngModel)]="files" color="primary" (select)="selectEvent($event)"
               accept=".ext,.anotherExt" [disabled]="disabled" multiple>
  <md-icon>attach_file</md-icon><span>Choose a file...</span>
</td-file-input>
```
 
```typescript
export class Demo {

  files: File | FileList;
  disabled: boolean = false;

  selectEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      ...
    } else {
      ...
    }
  };
} 
```

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| color | string | Sets button color. Uses same color palette accepted as [mdButton].
| multiple | boolean | Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
| accept | string | Sets files accepted when opening the file browser dialog. Same as "accept" attribute in `<input/>` element.
| disabled | boolean | Disables [TdFileUploadComponent] and clears selected/dropped files.
| select | function($event) | Event emitted when a file is selected. Emits a [File or FileList] object.
| clear | function() | Used to clear the selected files from the [TdFileInputComponent].

## Setup

Import the [CovalentFileModule] using the forRoot() method in your NgModule:

```typescript
import { HttpModule } from '@angular/http';
import { CovalentFileModule } from '@covalent/core';
@NgModule({
  imports: [
    HttpModule,
    CovalentFileModule.forRoot(), // or CovalentCoreModule.forRoot() (included inside of it)
    ...
  ],
  ...
})
export class MyModule {}
```

---

## TdFileSelectDirective: tdFileSelect

## Usage

Add the directive wherever you want to bind a [File | FileList] into a class model to an existing <input type="file"/> element.

Uses optional [(ngModel)] directive to bind file. (if [(ngModel]) exists, [fileSelect] is omitted)   

Example for usage:

```html
<input type="file" tdFileSelect (fileSelect)="files = $event" multiple>
```

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| multiple | boolean | Sets whether multiple files can be selected at once in host element, or just a single file. Can also be "multiple" native attribute.
| fileSelect | function($event) | Event emitted when a file or files are selected in host [HTMLInputElement]. Emits a [FileList or File] object. Alternative to not use [(ngModel)].

---

## TdFileDropDirective: tdFileDrop

## Usage

Add the directive wherever you want to add drop support to an element to bind a [File | FileList] into a class model.

To add effect when <code>ondragenter</code> event is executed, override <code>.drop-zone</code> class in the context you are using it.

Note: if element has child elements, add <code>* { pointer-events: none; }</code> to avoid event being thrown again while navigating in child elements.

Example for usage:

```html
<div tdFileDrop (fileDrop)="files = $event" multiple [disabled]="disabled">
</div> 
```


## API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| multiple | boolean | Sets whether multiple files can be dropped at once in host element, or just a single file. Can also be "multiple" native attribute.
| disabled | boolean | Disabled drop events for host element.
| fileDrop | function($event) | Event emitted when a file or files are dropped in host element after being validated. Emits a [FileList or File] object.


---
