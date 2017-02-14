import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'file-input-demo',
  styleUrls: ['./file-input.component.scss'],
  templateUrl: './file-input.component.html',
  animations: [slideInDownAnimation],
})
export class FileInputDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  fileSelectMsg: string = 'No file selected yet.';
  fileSelectMultipleMsg: string = 'No file(s) selected yet.';
  disabled: boolean = false;

  selectEvent(file: File): void {
    this.fileSelectMsg = file.name;
  };

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

  toggleDisabled(): void {
    this.disabled = !this.disabled;
  }
}
