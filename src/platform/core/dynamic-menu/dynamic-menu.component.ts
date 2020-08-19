import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface IMenuTrigger {
  id?: string; // Optional identifier
  text?: string; // Text to display on button
  icon?: string; // Optional icon
  svgIcon?: string; // Optional svgIcon
  iconClasses?: string[]; // Optional styling classes
}

export interface IMenuItem {
  id?: string; // Optional identifier
  text: string; // Display text
  icon?: string; // Optional icon
  svgIcon?: string; // Optional svgIcon
  iconClasses?: string[]; // Optional styling classes
  // For submenu trigger items
  children?: IMenuItem[]; // List of items to be displayed in submenu
  // For link items
  link?: string; // Link ref (relative or fully qualified). Optional if
  // defining an "action" link
  newTab?: boolean; // Indicates where link should be opened
  // For action items (simply emits click event)
  action?: string; // Value returned on click event
}

// Click action payload derived from IMenuItem
export interface ITdDynamicMenuLinkClickEvent {
  text: string;
  action: string;
}

@Component({
  selector: 'td-dynamic-menu',
  styleUrls: ['dynamic-menu.component.scss'],
  templateUrl: './dynamic-menu.component.html',
})
export class TdDynamicMenuComponent {
  @Input() trigger: IMenuTrigger;
  @Input() items: IMenuItem[];

  @Output() clicked: EventEmitter<ITdDynamicMenuLinkClickEvent> = new EventEmitter<ITdDynamicMenuLinkClickEvent>();

  emitClicked(event: ITdDynamicMenuLinkClickEvent): void {
    this.clicked.emit(event);
  }
}
