import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'file-upload-demo',
  styleUrls: ['./file-upload.component.scss'],
  templateUrl: './file-upload.component.html',
  animations: [slideInDownAnimation],
})
export class FileUploadDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  fileSelectMsg: string = 'No file selected yet.';
  fileUploadMsg: string = 'No file uploaded yet.';
  fileSelectMultipleMsg: string = 'No file(s) selected yet.';
  fileUploadMultipleMsg: string = 'No file(s) uploaded yet.';
  disabled: boolean = false;
  files: FileList | File;

  cancelEvent(): void {
    this.fileSelectMsg = 'No file selected yet.';
    this.fileUploadMsg = 'No file uploaded yet.';
  }

  selectEvent(file: File): void {
    this.fileSelectMsg = file.name;
  }

  uploadEvent(file: File): void {
    this.fileUploadMsg = file.name;
  }

  selectMultipleEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      let names: string[] = [];
      for (let i: number = 0; i < files.length; i++) {
        names.push(files[i].name);
      }
      this.fileSelectMultipleMsg = names.join(',');
    } else {
      this.fileSelectMultipleMsg = files.name;
    }
  }

  uploadMultipleEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      let names: string[] = [];
      for (let i: number = 0; i < files.length; i++) {
        names.push(files[i].name);
      }
      this.fileUploadMultipleMsg = names.join(',');
    } else {
      this.fileUploadMultipleMsg = files.name;
    }
  }

  cancelMultipleEvent(): void {
    this.fileSelectMultipleMsg = 'No file(s) selected yet.';
    this.fileUploadMultipleMsg = 'No file(s) uploaded yet.';
  }

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }
}
