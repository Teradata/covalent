import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chips-demo-for-chip-events',
  templateUrl: './chips-demo-for-chip-events.component.html',
  styleUrls: ['./chips-demo-for-chip-events.component.scss'],
})
export class ChipsDemoForChipEventsComponent {
  event: string = 'Event:';
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
    return new Date().toISOString().split('T')[1].split('.')[0];
  }

  handleChipBlur(value: any): void {
    this.event = `Event: Blur event emitted for '${value}'`;
  }

  handleChipFocus(value: any): void {
    this.event = `Event: Focus event emitted for '${value}'`;
  }

  handleAdd(value: any): void {
    this.event = `Event: Add event emitted for '${value}'`;
  }

  handleRemove(value: any): void {
    this.event = `Event: Remove event emitted for '${value}'`;
  }
}
