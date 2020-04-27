import { Component } from '@angular/core';

@Component({
  selector: 'chips-demo',
  styleUrls: ['./chips.component.scss'],
  templateUrl: './chips.component.html',
})
export class ChipsDemoComponent {
  strings: string[] = ['stepper', 'expansion-panel', 'markdown', 'highlight', 'loading'];
  stringsModel: string[] = this.strings.slice(0, 2);
}
