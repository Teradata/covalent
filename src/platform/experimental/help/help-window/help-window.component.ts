import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IHelpMenuDataItem, MaximizedOrMinimized, IHelpWindowComponentLabels } from '../help.utils';

@Component({
  selector: 'td-help-window',
  templateUrl: './help-window.component.html',
  styleUrls: ['./help-window.component.scss'],
})
export class HelpWindowComponent {
  @Input() items: IHelpMenuDataItem[];
  @Input() windowState: MaximizedOrMinimized = MaximizedOrMinimized.Maximized;
  @Input() draggable: boolean = false;
  @Input() labels: IHelpWindowComponentLabels;

  // outputs only for non-draggable toolbar
  @Output() closed: EventEmitter<void> = new EventEmitter();
  @Output() minimized: EventEmitter<void> = new EventEmitter();
  @Output() maximized: EventEmitter<void> = new EventEmitter();

  get height(): number {
    return this.windowState === MaximizedOrMinimized.Maximized ? 475 : 0;
  }

  handleMinimized(): void {
    this.windowState = MaximizedOrMinimized.Minimized;
    this.minimized.emit();
  }

  handleMaximized(): void {
    this.windowState = MaximizedOrMinimized.Maximized;
    this.maximized.emit();
  }
}
