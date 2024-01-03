import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { IMenuItem, ITdDynamicMenuLinkClickEvent } from '../dynamic-menu.menu';

@Component({
  selector: 'td-dynamic-menu-item',
  templateUrl: './dynamic-menu-item.component.html',
  styleUrls: ['./dynamic-menu-item.component.scss'],
})
export class TdDynamicMenuItemComponent {
  @Input() items!: IMenuItem[];

  @Output() itemClicked: EventEmitter<ITdDynamicMenuLinkClickEvent> =
    new EventEmitter<ITdDynamicMenuLinkClickEvent>();

  @ViewChild('childMenu', { static: true }) public childMenu!: MatMenu;

  emitClicked(event: ITdDynamicMenuLinkClickEvent): void {
    this.itemClicked.emit(event);
  }
}
