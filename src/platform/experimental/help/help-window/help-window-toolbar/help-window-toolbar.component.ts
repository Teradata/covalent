import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IHelpWindowToolbarComponentLabels } from '../../help.utils';

@Component({
  selector: 'td-help-window-toolbar',
  templateUrl: './help-window-toolbar.component.html',
  styleUrls: ['./help-window-toolbar.component.scss'],
})
export class HelpWindowToolbarComponent {
  @Input() labels: IHelpWindowToolbarComponentLabels;

  @Output() closed: EventEmitter<void> = new EventEmitter();

  get helpLabel(): string {
    return (this.labels && this.labels.help) || 'Help';
  }

  get closeLabel(): string {
    return (this.labels && this.labels.close) || 'Close';
  }
}
