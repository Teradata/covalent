# td-dynamic-menu

`td-dynamic-menu` element supports the creation of n-level deep cascading menus with links using a JSON object.

## API Summary

#### Model

```typescript
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
  {
    id: 'covalentlinkstrigger',
    text: 'Covalent Links',
    svgIcon: 'assets:covalent',
    children: [
      {
        id: 'quickstartlink',
        text: 'Quickstart',
        icon: 'flash_on',
        link: 'https://github.com/Teradata/covalent-quickstart',
        newTab: true,
      },
      {
        id: 'electronlink',
        text: 'Electron App',
        icon: 'laptop_mac',
        link: 'https://github.com/Teradata/covalent-electron',
        newTab: true,
      },
      {
        id: 'datalink',
        text: 'Covalent Data',
        icon: 'aspect_ratio',
        link: 'https://github.com/Teradata/covalent-data',
        newTab: true,
      },
    ],
  },
  {
    id: 'angularlink',
    text: 'Angular Link',
    svgIcon: 'assets:angular',
    children: [
      {
        text: 'Angular Homepage',
        icon: 'star_rate',
        link: 'https://angular.io/',
        newTab: true,
      },
    ],
  },
  {
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
