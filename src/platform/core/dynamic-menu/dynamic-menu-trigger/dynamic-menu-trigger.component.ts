import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { IMenuItem, ITdDynamicMenuLinkClickEvent } from '../dynamic-menu.component';

@Component({
  selector: 'td-dynamic-menu-trigger',
  templateUrl: './dynamic-menu-trigger.component.html',
  styleUrls: ['./dynamic-menu-trigger.component.scss'],
})
export class TdDynamicMenuTriggerComponent {
  @Input() item: IMenuItem;

  @Output() itemClicked: EventEmitter<ITdDynamicMenuLinkClickEvent> = new EventEmitter<ITdDynamicMenuLinkClickEvent>();

  // @ViewChild('subMenu', { static: true }) public subMenu: MatMenu;

  emitClicked(event: ITdDynamicMenuLinkClickEvent): void {
    this.itemClicked.emit(event);
  }
}
