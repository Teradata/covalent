import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  IMenuItem,
  ITdDynamicMenuLinkClickEvent,
} from '../../dynamic-menu.menu';

@Component({
  selector: 'td-dynamic-menu-link',
  templateUrl: './dynamic-menu-link.component.html',
  styleUrls: ['./dynamic-menu-link.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDividerModule, MatMenuModule],
})
export class TdDynamicMenuLinkComponent {
  @Input() item!: IMenuItem;

  @Output() itemClicked: EventEmitter<ITdDynamicMenuLinkClickEvent> =
    new EventEmitter<ITdDynamicMenuLinkClickEvent>();

  emitClicked(): void {
    this.itemClicked.emit({ text: this.item.text, action: this.item.action });
  }
}
