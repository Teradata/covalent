# td-file-upload

### Usage

Add the element wherever you want to bind a [File | FileList] into a class model without additional elements.

Can also drop a file(s) into the 'Choose a File...' button to bind the file(s) to it.

Example for usage:

```html
<td-file-upload defaultColor="accent" activeColor="warn" cancelColor="primary"
  (upload)="uploadEvent($event)" accept=".ext,.anotherExt" [disabled]="disabled" multiple>
</td-file-upload>
```
 
```typescript
import { TdFileUploadComponent } from '@covalent/file-upload';
...
  directives: [ TdFileUploadComponent ]
})
export class Demo {

  disabled: boolean = false;
  
  uploadEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      ...
    } else {
      ...
    }
  };
} 
```

### API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `defaultColor` | `string` | Sets browse button color. Uses same color palette accepted as [mdButton] and defaults to 'primary'.
| `activeColor` | `string` | Sets upload button color. Uses same color palette accepted as [mdButton] and defaults to 'accent'.
| `cancelColor` | `string` | Sets cancel button color. Uses same color palette accepted as [mdButton] and defaults to 'warn'.
| `multiple` | `boolean` | Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
| `accept` | `string` | Sets files accepted when opening the file browser dialog. Same as "accept" attribute in <input/> element.
| `disabled` | `boolean` | Disables [TdFileUploadComponent] and clears selected/dropped files.
| `upload` | `function($event)` | Event emitted when upload button is clicked. Emits a [File or FileList] object.

# tdFileSelect

### Usage

Add the directive wherever you want to bind a [File | FileList] into a class model to an existing <input type="file"/> element.

Uses optional [(ngModel)] directive to bind file. (if [(ngModel]) exists, [fileSelect] is omitted)   

Example for usage:

```html
<input type="file" tdFileSelect [(ngModel)]="files" multiple>
```

### API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `multiple` | `boolean` | Sets whether multiple files can be selected at once in host element, or just a single file. Can also be "multiple" native attribute.
| `fileSelect` | `function($event)` | Event emitted when a file or files are selected in host [HTMLInputElement]. Emits a [FileList or File] object. Alternative to not use [(ngModel)].

# tdFileDrop

### Usage

Add the directive wherever you want to add drop support to an element to bind a [File | FileList] into a class model.

To add effect when <code>ongragenter</code> event is executed, override <code>.drop-zone</code> class in the context you are using it.

Note: if element has child elements, add <code>* { pointer-events: none; }</code> to avoid event being thrown again while navigating in child elements.

Example for usage:

```html
<div tdFileDrop (fileDrop)="files = $event" multiple [disabled]="disabled">
</div> 
```

### API Summary

Properties:

| Name | Type | Description |
| --- | --- | --- |
| `multiple` | `boolean` | Sets whether multiple files can be dropped at once in host element, or just a single file. Can also be "multiple" native attribute.
| `disabled` | `boolean` | Disabled drop events for host element.
| `fileDrop` | `function($event)` | Event emitted when a file or files are dropped in host element after being validated. Emits a [FileList or File] object.

# tdFileService

### Usage

Service provided with methods that wrap complexity for as easier file upload experience.

Recieves as parameter an object that implements the [IUploadOptions] interface.

```
interface IUploadOptions { 
  url: string; 
  method: 'post' | 'put'; 
  file: File;
  headers?: {[key: string]: string} 
}
```

Example for usage:

```html
import { TdFileService, IUploadOptions } from '@covalent/file-upload';
...
  providers: [ TdFileService ]
})
export class Demo {

  file: File;
  
  constructor(private fileUploadService: TdFileService){ 
  };
  
  uploadEvent1(file: File) {    
    let options: IUploadOptions = {
      url: 'https://url.to/API',
      method: 'post',
      file: file
    };    
    this.fileService.upload(options).subscribe((response) => {
      ...
    });
  };
  
}
```

### API Summary

Methods:

| Name | Type | Description |
| --- | --- | --- |
| `upload` | `function(IUploadState)` | Uses underlying [XMLHttpRequest] to upload a file to a url. Will be depricated when angular2 fixes [Http] to allow [FormData] as body.
