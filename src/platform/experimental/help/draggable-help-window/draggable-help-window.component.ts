import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHelpMenuDataItem } from '../help-menu-data.interface';

@Component({
  selector: 'td-draggable-help-window',
  templateUrl: './draggable-help-window.component.html',
  styleUrls: ['./draggable-help-window.component.scss']
})
export class DraggableHelpWindowComponent {

  @Input() items: IHelpMenuDataItem[];

  @Output() closed: EventEmitter<any> = new EventEmitter();
  @Output() minimized: EventEmitter<any> = new EventEmitter();
  @Output() maximized: EventEmitter<any> = new EventEmitter();

  constructor() {}

  emitClosed(): void {
    this.closed.emit();
  }

  emitMinimized(): void {
    this.minimized.emit();
  }

  emitMaximized(): void {
    this.maximized.emit();
  }

}
