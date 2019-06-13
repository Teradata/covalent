import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MaximizedOrMinimized, IHelpWindowToolbarComponentLabels } from '../help.utils';

@Component({
  selector: 'td-help-window-toolbar',
  templateUrl: './help-window-toolbar.component.html',
  styleUrls: ['./help-window-toolbar.component.scss'],
})
export class HelpWindowToolbarComponent {
  @Input() windowState: MaximizedOrMinimized;
  @Input() labels: IHelpWindowToolbarComponentLabels;

  @Output() minimized: EventEmitter<void> = new EventEmitter();
  @Output() maximized: EventEmitter<void> = new EventEmitter();
  @Output() closed: EventEmitter<void> = new EventEmitter();

  get showMinimizeButton(): boolean {
    return this.windowState === MaximizedOrMinimized.Maximized;
  }

  get showMaximizeButton(): boolean {
    return this.windowState === MaximizedOrMinimized.Minimized;
  }

  get helpLabel(): string {
    return (this.labels && this.labels.help) || 'Help';
  }

  get minimizeLabel(): string {
    return (this.labels && this.labels.minimize) || 'Minimize';
  }

  get maximizeLabel(): string {
    return (this.labels && this.labels.maximize) || 'Maximize';
  }

  get closeLabel(): string {
    return (this.labels && this.labels.close) || 'Close';
  }
}
