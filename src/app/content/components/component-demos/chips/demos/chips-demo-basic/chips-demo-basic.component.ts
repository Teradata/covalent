import { Component } from '@angular/core';

@Component({
  selector: 'chips-demo-basic',
  styleUrls: ['./chips-demo-basic.component.scss'],
  templateUrl: './chips-demo-basic.component.html',
  preserveWhitespaces: true,
})
export class ChipsDemoBasicComponent {
  strings: string[] = ['stepper', 'expansion-panel', 'markdown', 'highlight', 'loading'];
  stringsModel: string[] = this.strings.slice(0, 2);
}
