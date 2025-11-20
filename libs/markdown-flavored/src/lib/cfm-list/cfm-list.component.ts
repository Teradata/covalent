import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

export interface IFlavoredListItem {
  line: string;
  sublines?: string[];
  type?: 'ordered' | 'unordered';
  startNumber?: number;
}

@Component({
  selector: 'td-cfm-list',
  styleUrls: ['./cfm-list.component.scss'],
  templateUrl: './cfm-list.component.html',
  imports: [CommonModule, MatListModule, MatDividerModule],
})
export class TdFlavoredListComponent {
  @Input() lines!: IFlavoredListItem[];
  @Input() dense = false;
}
