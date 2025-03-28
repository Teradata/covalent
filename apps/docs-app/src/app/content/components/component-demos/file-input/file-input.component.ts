import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'file-input-demo',
  styleUrls: ['./file-input.component.scss'],
  templateUrl: './file-input.component.html',
})
export class FileInputDemoComponent {
  files: any;
}
