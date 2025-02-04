import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IMenuItem,
  IMenuTrigger,
  ITdDynamicMenuLinkClickEvent,
} from './dynamic-menu.menu';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TdDynamicMenuItemComponent } from './dynamic-menu-item/dynamic-menu-item.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'td-dynamic-menu',
  styleUrls: ['dynamic-menu.component.scss'],
  templateUrl: './dynamic-menu.component.html',
  imports: [CommonModule, MatIcon, MatMenuModule, MatButtonModule, TdDynamicMenuItemComponent],
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
