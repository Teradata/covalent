import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IHelpMenuDataItem, IHelpWindowComponentLabels } from '../help.utils';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'td-help-window',
  templateUrl: './help-window.component.html',
  styleUrls: ['./help-window.component.scss'],
})
export class HelpWindowComponent {
  @Input() items: IHelpMenuDataItem[];
  @Input() draggable: boolean = false;
  @Input() labels: IHelpWindowComponentLabels;
  @Input() toolbarColor: ThemePalette;

  // outputs only for non-draggable toolbar
  @Output() closed: EventEmitter<void> = new EventEmitter();

  get height(): number {
    return 475;
  }
}
