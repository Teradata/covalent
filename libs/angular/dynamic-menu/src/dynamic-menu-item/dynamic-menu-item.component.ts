import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { IMenuItem, ITdDynamicMenuLinkClickEvent } from '../dynamic-menu.menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { TdDynamicMenuLinkComponent } from './dynamic-menu-link/dynamic-menu-link.component';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'td-dynamic-menu-item',
  templateUrl: './dynamic-menu-item.component.html',
  styleUrls: ['./dynamic-menu-item.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    TdDynamicMenuLinkComponent,
  ],
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
