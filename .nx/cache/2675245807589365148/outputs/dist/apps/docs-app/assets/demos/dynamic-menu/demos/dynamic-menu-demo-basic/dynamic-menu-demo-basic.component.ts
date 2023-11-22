import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  IMenuItem,
  IMenuTrigger,
  ITdDynamicMenuLinkClickEvent,
} from '@covalent/core/dynamic-menu';

@Component({
  selector: 'dynamic-menu-demo-basic',
  styleUrls: ['./dynamic-menu-demo-basic.component.scss'],
  templateUrl: './dynamic-menu-demo-basic.component.html',
})
export class DynamicMenuDemoBasicComponent {
  trigger1: IMenuTrigger = {
    id: 'triggerbutton',
    icon: 'list',
    text: 'Trigger With Text And Icon',
  };

  items1: IMenuItem[] = [
    {
      // Grouping label
      id: 'platform',
      text: 'Platform',
    },
    {
      // Submenu trigger
      id: 'covalentlinkstrigger',
      text: 'Covalent Links',
      svgIcon: 'assets:covalent',
      children: [
        {
          // URL link
          id: 'quickstartlink',
          text: 'Quickstart',
          icon: 'flash_on',
          link: 'https://github.com/Teradata/covalent-quickstart',
          newTab: true,
        },
        {
          // URL link
          id: 'electronlink',
          text: 'Electron App',
          icon: 'laptop_mac',
          link: 'https://github.com/Teradata/covalent-electron',
          newTab: true,
        },
        {
          // URL link
          id: 'datalink',
          text: 'Covalent Data',
          icon: 'aspect_ratio',
          link: 'https://github.com/Teradata/covalent-data',
          newTab: true,
        },
      ],
    },
    {
      // Grouping label
      id: 'framework',
      text: 'Framework',
    },
    {
      // Submenu trigger
      id: 'angularlink',
      text: 'Angular Link',
      svgIcon: 'assets:angular',
      children: [
        {
          // URL link
          text: 'Angular Homepage',
          link: 'https://angular.io/',
          newTab: true,
        },
      ],
    },
    {
      // Grouping label
      id: 'actions',
      text: 'Actions',
    },
    {
      // Action link
      id: 'actionlink',
      text: 'Do Action',
      icon: 'directions_run',
      action: 'Go Run',
    },
  ];

  trigger2: IMenuTrigger = {
    icon: 'help',
  };

  items2: IMenuItem[] = [
    {
      text: 'Level 1',
      icon: 'filter_1',
      children: [
        {
          text: 'Level 2',
          icon: 'filter_2',
          children: [
            {
              text: 'Level 3',
              icon: 'filter_3',
              children: [
                {
                  text: 'Teradata - open in current tab',
                  icon: 'filter_4',
                  link: 'www.teradata.com',
                },
                {
                  text: 'Teradata - open in new tab',
                  icon: 'filter_4',
                  link: 'www.teradata.com',
                  newTab: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  constructor(private _snackBar: MatSnackBar) {}

  reportClick(event: ITdDynamicMenuLinkClickEvent): void {
    this._snackBar.open(
      `Item "${event.text}:${event.action}" clicked`,
      undefined,
      { duration: 2000 }
    );
  }
}
