import { Component, Input } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

export interface IFlavoredListItem {
  line: string;
  sublines?: string[];
}

@Component({
  selector: 'td-cfm-list',
  styleUrls: ['./cfm-list.component.scss'],
  templateUrl: './cfm-list.component.html',
  imports: [MatList, MatListItem, MatDivider],
})
export class TdFlavoredListComponent {
  @Input() lines!: IFlavoredListItem[];
  @Input() dense = false;
}
