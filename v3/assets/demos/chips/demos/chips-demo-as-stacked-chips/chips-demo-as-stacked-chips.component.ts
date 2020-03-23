import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chips-demo-as-stacked-chips',
  templateUrl: './chips-demo-as-stacked-chips.component.html',
  styleUrls: ['./chips-demo-as-stacked-chips.component.scss'],
})
export class ChipsDemoAsStackedChipsComponent {
  strings: string[] = [
    'stepper',
    'expansion-panel',
    'markdown',
    'highlight',
    'loading',
    'media',
    'chips',
    'http',
    'json-formatter',
    'pipes',
    'need more?',
  ];

  filteredStackedStrings: string[];

  stackedStringsModel: string[] = this.strings.slice(0, 2);

  filterStackedStrings(value: string): void {
    this.filteredStackedStrings = this.strings.filter((item: any) => {
      if (value) {
        return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
      } else {
        return false;
      }
    });
  }
}
