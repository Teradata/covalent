import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chips-demo-for-chip-events',
  templateUrl: './chips-demo-for-chip-events.component.html',
  styleUrls: ['./chips-demo-for-chip-events.component.scss'],
})
export class ChipsDemoForChipEventsComponent {
  events: string[] = [];
  strings: string[] = ['stepper', 'expansion-panel', 'markdown', 'highlight', 'loading'];
  stringsModel: string[] = this.strings.slice(0, 2);
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

  get logTime(): string {
    return new Date()
      .toISOString()
      .split('T')[1]
      .split('.')[0];
  }

  handleChipBlur(value: any): void {
    this.events.push(this.logTime + ': Blur Event received from ' + value);
  }

  handleChipFocus(value: any): void {
    this.events.push(this.logTime + ': Focus Event received from ' + value);
  }

  handleAdd(value: any): void {
    this.events.push(this.logTime + ': Add Event received from ' + value);
  }

  handleRemove(value: any): void {
    this.events.push(this.logTime + ': Remove Event received from ' + value);
  }
}
