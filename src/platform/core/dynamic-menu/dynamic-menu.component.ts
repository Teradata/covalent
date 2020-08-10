import { Component, Input } from '@angular/core';

export interface IMenuTrigger {
  id?: string; // Optional identifier
  text?: string; // Text to display on button
  icon?: string; // Optional icon
  svgIcon?: string; // Optional svgIcon
  iconClasses?: string[]; // Optional styling classes
  tooltip?: string; // Hover help for button
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
  link?: string; // Link ref (relative or fully qualified)
  newTab?: boolean; // Indicates where link should be opened
}

@Component({
  selector: 'td-dynamic-menu',
  styleUrls: ['dynamic-menu.component.scss'],
  templateUrl: './dynamic-menu.component.html',
})
export class TdDynamicMenuComponent {
  @Input() trigger: IMenuTrigger;
  @Input() items: IMenuItem[];
}
