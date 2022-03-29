import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IMenuItem,
  IMenuTrigger,
  ITdDynamicMenuLinkClickEvent,
} from './dynamic-menu.menu';

@Component({
  selector: 'td-dynamic-menu',
  styleUrls: ['dynamic-menu.component.scss'],
  templateUrl: './dynamic-menu.component.html',
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
