import { Component } from '@angular/core';

@Component({
  selector: 'chips-demo-with-strings',
  styleUrls: ['./chips-demo-with-strings.component.scss'],
  templateUrl: './chips-demo-with-strings.component.html',
  preserveWhitespaces: true,
})
export class ChipsDemoWithStringsComponent {
  strings: string[] = ['stepper', 'expansion-panel', 'markdown', 'highlight', 'loading'];
  stringsModel: string[] = this.strings.slice(0, 2);
  disabled: boolean = false;
  chipAddition: boolean = true;
  chipRemoval: boolean = true;
  before: boolean = false;
  filteredStrings: string[];

  filterStrings(value: string): void {
    this.filteredStrings = this.strings
      .filter((item: any) => {
        if (value) {
          return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
        } else {
          return false;
        }
      })
      .filter((filteredItem: any) => {
        return this.stringsModel ? this.stringsModel.indexOf(filteredItem) < 0 : true;
      });
  }
}
