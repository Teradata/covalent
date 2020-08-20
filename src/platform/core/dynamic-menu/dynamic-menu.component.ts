import { Component, EventEmitter, Input, Output } from '@angular/core';

// Trigger button launches top level menu. Must specify text and/or icon.
export interface IMenuTrigger {
  id?: string; // Optional identifier
  text?: string; // Text to display on button
  icon?: string; // Optional icon
  svgIcon?: string; // Optional svgIcon
  iconClasses?: string[]; // Optional styling classes
}

// Menu items can serve one of four roles:
// - Submenu trigger (has children property)
// - URL link (has link property)
// - Action link (has action property)
// - Grouping label (has neither children, link or action properties)
export interface IMenuItem {
  id?: string; // Optional identifier
  text: string; // Display text
  icon?: string; // Optional icon
  svgIcon?: string; // Optional svgIcon
  iconClasses?: string[]; // Optional styling classes
  // If provided, item is a submenu trigger
  // Represents the contents of the submenu
  children?: IMenuItem[];
  // If provided, item is a URL link item
  link?: string; // Link ref (relative or fully qualified). Optional if
  // Indicates where URL should be displayed, current or new browser tab
  newTab?: boolean;
  // If provided, item is an action link
  // A click on this item will emit itemClicked event
  action?: string;
}

// Click action event payload derived from IMenuItem
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

  @Output() itemClicked: EventEmitter<ITdDynamicMenuLinkClickEvent> = new EventEmitter<ITdDynamicMenuLinkClickEvent>();

  emitClicked(event: ITdDynamicMenuLinkClickEvent): void {
    this.itemClicked.emit(event);
  }
}
