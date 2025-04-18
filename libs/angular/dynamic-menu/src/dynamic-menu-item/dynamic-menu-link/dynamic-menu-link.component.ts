import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IMenuItem,
  ITdDynamicMenuLinkClickEvent,
} from '../../dynamic-menu.menu';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatMenuItem } from '@angular/material/menu';

@Component({
  selector: 'td-dynamic-menu-link',
  templateUrl: './dynamic-menu-link.component.html',
  styleUrls: ['./dynamic-menu-link.component.scss'],
  imports: [CommonModule, MatIcon, MatMenuItem],
})
export class TdDynamicMenuLinkComponent {
  @Input() item!: IMenuItem;

  @Output() itemClicked: EventEmitter<ITdDynamicMenuLinkClickEvent> =
    new EventEmitter<ITdDynamicMenuLinkClickEvent>();

  emitClicked(): void {
    this.itemClicked.emit({ text: this.item.text, action: this.item.action });
  }
}
