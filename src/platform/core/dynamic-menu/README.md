# td-dynamic-menu

`td-dynamic-menu` element supports the creation of n-level deep cascading menus with
group labels and URL/action links and actions using a JSON object.

## API Summary

#### Model

```typescript
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
  // If children provided, item is a submenu trigger
  // Represents the contents of the submenu
  children?: IMenuItem[];
  // If link provided, item is a URL link
  link?: string; // href (relative or fully qualified).
  newTab?: boolean; // Indicates where URL should be displayed, current or new browser tab
  // If action provided, item is an action link
  // A click on this item will emit itemClicked event
  action?: string;
}

// Click action event payload derived from IMenuItem
export interface ITdDynamicMenuLinkClickEvent {
  text: string;
  action: string;
}
```

#### Inputs

+ trigger: IMenuTrigger
  + Definition for trigger button.
+ items: IMenuItem[]
  + One or more items to be displayed in menu.

#### Output

+ itemClicked: ITdDynamicMenuLinkClickEvent
  + Emitted when an action link is pressed.

## Setup

Import the **[CovalentDynamicMenuModule]** in your NgModule:

```typescript
import { CovalentDynamicMenuModule } from '@covalent/core/dynamic-menu';
@NgModule({
  imports: [
    CovalentDynamicMenuModule,
    ...
  ],
  ...
})
export class MyModule {}
```

## Usage

Basic Example:

```typescript
trigger: IMenuTrigger = {
  id: 'triggerbutton',
  icon: 'list',
  text: 'Trigger With Text And Icon',
};

items: IMenuItem[] = [
    {  // Grouping label
      id: 'platform',
      text: 'Platform',
    },
    {  // Submenu trigger
      id: 'covalentlinkstrigger',
      text: 'Covalent Links',
      svgIcon: 'assets:covalent',
      children: [
        {  // URL link
          id: 'quickstartlink',
          text: 'Quickstart',
          icon: 'flash_on',
          link: 'https://github.com/Teradata/covalent-quickstart',
          newTab: true,
        },
        {  // URL link
          id: 'electronlink',
          text: 'Electron App',
          icon: 'laptop_mac',
          link: 'https://github.com/Teradata/covalent-electron',
          newTab: true,
        },
        {  // URL link
          id: 'datalink',
          text: 'Covalent Data',
          icon: 'aspect_ratio',
          link: 'https://github.com/Teradata/covalent-data',
          newTab: true,
        },
      ],
    },
    {  // Grouping label
      id: 'framework',
      text: 'Framework',
    },
    {  // Submenu trigger
      id: 'angularlink',
      text: 'Angular Link',
      svgIcon: 'assets:angular',
      children: [
        {  // URL link
          text: 'Angular Homepage',
          link: 'https://angular.io/',
          newTab: true,
        },
      ],
    },
    {  // Grouping label
      id: 'actions',
      text: 'Actions',
    },
    {  // Action link
      id: 'actionlink',
      text: 'Do Action',
      icon: 'directions_run',
      action: 'Go Run',
    },
  ];
```

```html
<td-dynamic-menu [trigger]="trigger" [items]="items"></td-dynamic-menu>
```
