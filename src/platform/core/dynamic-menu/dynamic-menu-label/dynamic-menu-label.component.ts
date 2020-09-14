import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IMenuItem, ITdDynamicMenuLinkClickEvent } from '../dynamic-menu.component';

@Component({
  selector: 'td-dynamic-menu-label',
  templateUrl: './dynamic-menu-label.component.html',
  styleUrls: ['./dynamic-menu-label.component.scss'],
})
export class TdDynamicMenuLabelComponent {
  @Input() item: IMenuItem;
}
