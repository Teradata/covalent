## TdFileUploadComponent: td-file-upload

## Usage

Perfect component for file selection and upload in simple flows. Uses `TdFileInputComponent` internally.

Example for usage:

```html
<td-file-upload #fileUpload [(ngModel)]="files" defaultColor="accent" activeColor="warn" cancelColor="primary" (select)="selectEvent($event)"
  (upload)="uploadEvent($event)" (cancel)="cancelEvent()" accept=".ext,.anotherExt" [disabled]="disabled" multiple>
  <mat-icon>file_upload</mat-icon><span>{{ files?.name }}</span>
  <ng-template td-file-input-label>
    <mat-icon>attach_file</mat-icon>
    <span>
      Choose a file...
    </span>
  </ng-template>
</td-file-upload>
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

#### Inputs

+ defaultColor: string
  + Sets browse button color. Uses same color palette accepted as [MatButton] and defaults to 'primary'.
+ activeColor: string
  + Sets upload button color. Uses same color palette accepted as [MatButton] and defaults to 'accent'.
+ cancelColor: string
  + Sets cancel button color. Uses same color palette accepted as [MatButton] and defaults to 'warn'.
+ multiple: boolean
  + Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].
+ accept: string
  + Sets files accepted when opening the file browser dialog. Same as "accept" attribute in `<input/>` element.
+ disabled: boolean
  + Disables [TdFileUploadComponent] and clears selected/dropped files.

#### Events

+ upload: function($event)
  + Event emitted when upload button is clicked. Emits a [File or FileList] object.
+ select: function($event)
  + Event emitted when a file is selected. Emits a [File or FileList] object.
+ cancel: function
  + Event emitted when cancel button is clicked.

#### Methods

+ cancel: function
  + Method used to clear the files selected.

## Setup

Import the [CovalentFileModule] in your NgModule:

```typescript
import { CovalentFileModule } from '@covalent/core/file';
@NgModule({
  imports: [
    CovalentFileModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## tdFileService

Service provided with methods that wrap complexity for as easier file upload experience.

## API Summary

#### Methods

+ send: function(url: string, method: string, body: File | FormData, uploadExtras: IUploadExtras)
  + Uploads a file to a URL.

## Usage

```typescript
import { TdFileService } from '@covalent/core/file';

export class Demo {

  file: File;

  constructor(private fileUploadService: TdFileService) {
  };

  uploadEvent1(file: File) {
    this.fileService.send('https://url.to/API', 'post', file).subscribe((response) => {
      ...
    });
  };

}
```
