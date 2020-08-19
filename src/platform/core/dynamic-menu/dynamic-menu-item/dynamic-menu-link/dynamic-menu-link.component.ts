import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IMenuItem, ITdDynamicMenuLinkClickEvent } from '../../dynamic-menu.component';

@Component({
  selector: 'td-dynamic-menu-link',
  templateUrl: './dynamic-menu-link.component.html',
  styleUrls: ['./dynamic-menu-link.component.scss'],
})
export class TdDynamicMenuLinkComponent {
  @Input() item: IMenuItem;

  @Output() clicked: EventEmitter<ITdDynamicMenuLinkClickEvent> = new EventEmitter<ITdDynamicMenuLinkClickEvent>();

  emitClicked(): void {
    this.clicked.emit({ text: this.item.text, action: this.item.action });
  }
}
