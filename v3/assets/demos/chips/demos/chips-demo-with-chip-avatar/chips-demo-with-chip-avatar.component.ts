import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chips-demo-with-chip-avatar',
  templateUrl: './chips-demo-with-chip-avatar.component.html',
  styleUrls: ['./chips-demo-with-chip-avatar.component.scss'],
})
export class ChipsDemoWithChipAvatarComponent {
  filteringAsync: boolean = false;

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

  filteredAsync: string[];

  asyncModel: string[] = this.strings.slice(0, 2);

  filterAsync(value: string): void {
    this.filteredAsync = undefined;
    if (value) {
      this.filteringAsync = true;
      // Timeout isn't actually needed here, only added for demo to simulate async behavior
      setTimeout(() => {
        this.filteredAsync = this.strings
          .filter((item: any) => {
            return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
          })
          .filter((filteredItem: any) => {
            return this.asyncModel ? this.asyncModel.indexOf(filteredItem) < 0 : true;
          });
        this.filteringAsync = false;
      }, 2000);
    }
  }
}
