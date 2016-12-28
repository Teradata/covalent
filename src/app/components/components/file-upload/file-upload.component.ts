import { Component } from '@angular/core';

@Component({
  selector: 'file-upload-demo',
  styleUrls: ['./file-upload.component.scss'],
  templateUrl: './file-upload.component.html',
})
export class FileUploadDemoComponent {

  uploadComponentAttrs: Object[] = [{
    description: 'Sets if multiple files can be dropped/selected at once in [TdFileUploadComponent].',
    name: 'multiple?',
    type: 'boolean',
  }, {
    description: `Sets files accepted when opening the file browser dialog.
                  Same as "accept" attribute in <input/> element.`,
    name: 'accept?',
    type: 'string',
  }, {
    description: 'Disables [TdFileUploadComponent] and clears selected/dropped files.',
    name: 'disabled?',
    type: 'boolean',
  }, {
    description: 'Event emitted when upload button is clicked. Emits a [File | FileList] object.',
    name: 'upload?',
    type: 'function($event)',
  }, {
    description: 'Sets browse button color. Uses same color palette accepted as [mdButton] and defaults to "primary".',
    name: 'defaultColor?',
    type: 'string',
  }, {
    description: 'Sets upload button color. Uses same color palette accepted as [mdButton] and defaults to "accent".',
    name: 'activeColor?',
    type: 'string',
  }, {
    description: 'Sets cancel button color. Uses same color palette accepted as [mdButton] and defaults to "warn".',
    name: 'cancelColor?',
    type: 'string',
  }];

  selectDirectiveAttrs: Object[] = [{
    description: `Sets whether multiple files can be selected at once in host element, or just a single file.
                  Can also be "multiple" native attribute.`,
    name: 'multiple?',
    type: 'boolean',
  }, {
    description: `Event emitted when a file or files are selected in host [HTMLInputElement].
                  Emits a [FileList | File] object. Alternative to not use [(ngModel)].`,
    name: 'fileSelect?',
    type: 'function($event)',
  }];

  dropDirectiveAttrs: Object[] = [{
    description: `Sets whether multiple files can be dropped at once in host element, or just a single file.
                  Can also be "multiple" native attribute.`,
    name: 'multiple?',
    type: 'boolean',
  }, {
    description: 'Disabled drop events for host element.',
    name: 'disabled?',
    type: 'boolean',
  }, {
    description: `Event emitted when a file or files are dropped in host element after being validated.
                  Emits a [FileList | File] object.`,
    name: 'fileDrop?',
    type: 'function($event)',
  }];

  uploadServiceMethods: Object[] = [{
    description: `Uses underlying [XMLHttpRequest] to upload a file to a url.
                  Will be depricated when angular2 fixes [Http] to allow [FormData] as body.`,
    name: 'upload',
    type: 'function(IUploadOptions)',
  }];

  fileUpload1Msg: string = 'No file selected yet.';
  fileUpload3Msg: string = 'No file(s) selected yet.';
  disabled: boolean = false;

  uploadEvent1(file: File): void {
    this.fileUpload1Msg = file.name;
  };

  uploadEvent3(files: FileList | File): void {
    if (files instanceof FileList) {
      let names: string[] = [];
      for (let i: number = 0; i < files.length; i++) {
        names.push(files[i].name);
      }
      this.fileUpload3Msg = names.join(',');
    } else {
      this.fileUpload3Msg = files.name;
    }

  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }
}
