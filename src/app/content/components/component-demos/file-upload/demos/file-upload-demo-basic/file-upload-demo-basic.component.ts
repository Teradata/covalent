import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'file-upload-demo-basic',
  templateUrl: './file-upload-demo-basic.component.html',
  styleUrls: ['./file-upload-demo-basic.component.scss'],
})
export class FileUploadDemoBasicComponent implements AfterViewInit {
  file: File = undefined;
  @ViewChild('fileInput', { static: true }) fileInput: ElementRef;

  ngAfterViewInit(): void {
    fromEvent(this.fileInput.nativeElement, 'change').subscribe((event: any) => {
      this.file = event.target.files[0];
    });
  }

  uploadDoc(): void {
    Promise.resolve('handle file being uploaded....').then(() => (this.file = undefined));
  }
}
