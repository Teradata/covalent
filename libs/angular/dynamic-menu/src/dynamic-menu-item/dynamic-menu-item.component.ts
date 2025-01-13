import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';
import { IMenuItem, ITdDynamicMenuLinkClickEvent } from '../dynamic-menu.menu';
import { TdDynamicMenuLinkComponent } from './dynamic-menu-link/dynamic-menu-link.component';

@Component({
  selector: 'td-dynamic-menu-item',
  templateUrl: './dynamic-menu-item.component.html',
  styleUrls: ['./dynamic-menu-item.component.scss'],
  imports: [MatDivider, MatIcon, MatMenuModule, TdDynamicMenuLinkComponent],
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
