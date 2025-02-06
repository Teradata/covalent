import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { IMenuItem, ITdDynamicMenuLinkClickEvent } from '../dynamic-menu.menu';
import { CommonModule } from '@angular/common';
import { TdDynamicMenuLinkComponent } from './dynamic-menu-link/dynamic-menu-link.component';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'td-dynamic-menu-item',
  templateUrl: './dynamic-menu-item.component.html',
  styleUrls: ['./dynamic-menu-item.component.scss'],
  imports: [CommonModule, MatIcon, MatDivider, MatMenu, MatMenuItem, MatMenuTrigger, TdDynamicMenuLinkComponent],
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
