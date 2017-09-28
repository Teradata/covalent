## TdFileUploadComponent: td-file-upload

## Usage

Perfect component for file selection and upload in simple flows. Uses `TdFileInputComponent` internally.

Example for usage:

```html
<td-file-upload #fileUpload defaultColor="accent" activeColor="warn" cancelColor="primary" (select)="selectEvent($event)"
  (upload)="uploadEvent($event)" (cancel)="cancelEvent()" accept=".ext,.anotherExt" [disabled]="disabled" multiple>
  <mat-icon>file_upload</mat-icon><span>{{ fileUpload.files?.name }}</span>
  <ng-template td-file-input-label>
    <mat-icon>attach_file</mat-icon><span>Choose a file...</span>
  </ng-template>
</td-file-upload>
```
 
```typescript
export class Demo {

  disabled: boolean = false;

  selectEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      ...
    } else {
      ...
    }
  }

  uploadEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      ...
    } else {
      ...
    }
  }

  cancelEvent(): void {
    ...
  }
} 
```

## API Summary

Properties:

| Name | Type | Description |
| --- | --- | 650--- |
| `defaultColor` | `string` | Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
| `activeColor` | `string` | Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
| `cancelColor` | `string` | Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
| `multiple` | `boolean` | Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
| `accept` | `string` | Sets files accepted when opening the file browser dialog. Same as "accept" attribute in `<input/>` element.
| `disabled` | `boolean` | Disables [TdFileUploadComponent] and clears selected/dropped files.
| `upload` | `function($event)` | Event emitted when upload button is clicked. Emits a [File or FileList] object.
| `select` | `function($event)` | Event emitted when a file is selected. Emits a [File or FileList] object.
| `cancel` | `function()` | Event emitted when cancel button is clicked.

## Setup

Import the [CovalentFileModule] in your NgModule:

```typescript
import { HttpModule } from '@angular/http';
import { CovalentFileModule } from '@covalent/core';
@NgModule({
  imports: [
    HttpModule,
    CovalentFileModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## tdFileService

## Usage

Service provided with methods that wrap complexity for as easier file upload experience.

Recieves as parameter an object that implements the [IUploadOptions] interface. You have to assign a value either to `[file]` or to `[formData]`. If `[file]` is assigned then `[formData]` will be ignored; when only `[formData]` is assigned then it will be sent as form data.

```typescript
interface IUploadOptions { 
  url: string; 
  method: 'post' | 'put'; 
  file?: File;
  headers?: {[key: string]: string};
  formData?: FormData; 
}
```

Example for usage:

```typescript
import { TdFileService, IUploadOptions } from '@covalent/core';
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

## API Summary

Methods:

| Name | Type | Description |
| --- | --- | 650--- |
| upload | function(IUploadState) | Uses underlying [XMLHttpRequest] to upload a file to a url. Will be depricated when angular fixes [Http] to allow [FormData] as body.


---
