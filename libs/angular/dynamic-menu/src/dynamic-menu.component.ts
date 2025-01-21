import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  IMenuItem,
  IMenuTrigger,
  ITdDynamicMenuLinkClickEvent,
} from './dynamic-menu.menu';
import { MatMenuTrigger } from '@angular/material/menu';
import { TdDynamicMenuItemComponent } from './dynamic-menu-item/dynamic-menu-item.component';

@Component({
  selector: 'td-dynamic-menu',
  styleUrls: ['dynamic-menu.component.scss'],
  templateUrl: './dynamic-menu.component.html',
  imports: [MatIcon, MatMenuTrigger, TdDynamicMenuItemComponent],
})
export class TdDynamicMenuComponent {
  @Input() trigger!: IMenuTrigger;
  @Input() items!: IMenuItem[];

  @Output() itemClicked: EventEmitter<ITdDynamicMenuLinkClickEvent> =
    new EventEmitter<ITdDynamicMenuLinkClickEvent>();

  emitClicked(event: ITdDynamicMenuLinkClickEvent): void {
    this.itemClicked.emit(event);
  }
}
