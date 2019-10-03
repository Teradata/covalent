import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';
import { IMdNavigatorItem, MdNavigatorWindowService, MdNavigatorWindowComponent } from '@covalent/markdown-navigator';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'md-navigator-demo',
  styleUrls: ['./md-navigator.component.scss'],
  templateUrl: './md-navigator.component.html',
  animations: [slideInDownAnimation],
  preserveWhitespaces: true,
})
export class MdNavigatorDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  oneItem: IMdNavigatorItem[] = [
    {
      url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
    },
  ];

  itemWithRawMarkdown: IMdNavigatorItem[] = [
    {
      markdownString: '# Heading',
    },
  ];

  multipleItems: IMdNavigatorItem[] = [
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md',
      title: 'Code Editor API',
    },
    {
      url: 'https://raw.githubusercontent.com/angular/angular/master/README.md',
      title: 'Angular',
    },
  ];

  oneItemWithAnchor: IMdNavigatorItem[] = [
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/docs/DEVELOPER_GUIDE.md',
      anchor: 'Adding a new documentation component',
    },
  ];

  nestedItems: IMdNavigatorItem[] = [
    {
      title: 'Covalent Components',
      children: [
        {
          title: 'Markdown Components',
          children: [
            {
              url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/src/platform/core/loading/README.md',
              title: 'td-markdown',
            },
          ],
        },
      ],
    },
  ];

  options: { name: string; value: IMdNavigatorItem[] }[] = [
    {
      name: 'One item',
      value: this.oneItem,
    },
    {
      name: 'Raw markdown',
      value: this.itemWithRawMarkdown,
    },
    { name: 'Multiple items', value: this.multipleItems },
    { name: 'One item with anchor', value: this.oneItemWithAnchor },
    { name: 'Nested items', value: this.nestedItems },
  ];
  selected: { name: string; value: IMdNavigatorItem[] } = this.options[0];
  currentItems: IMdNavigatorItem[] = this.selected.value;
  userInput: string = this.prettyJson(this.currentItems);

  windowOpen: boolean = false;
  ref: MatDialogRef<MdNavigatorWindowComponent>;

  constructor(private _mdNavigatorWindowService: MdNavigatorWindowService) {}

  select(): void {
    this.use(this.selected.value);
  }

  use(items: IMdNavigatorItem[]): void {
    this.currentItems = items;
    this.userInput = this.prettyJson(this.currentItems);
    if (this.windowOpen) {
      this.openDialog();
    }
  }

  tryUserInput(): void {
    this.use(JSON.parse(this.userInput));
  }

  prettyJson(items: IMdNavigatorItem[]): string {
    return JSON.stringify(items, undefined, 4);
  }

  openDialog(): void {
    if (this.windowOpen) {
      this.closeDialog();
    }
    this.ref = this._mdNavigatorWindowService.open({ items: this.currentItems });
    this.ref.afterOpened().subscribe(() => {
      this.windowOpen = true;
    });

    this.ref.afterClosed().subscribe(() => {
      this.windowOpen = false;
    });
  }
  closeDialog(): void {
    this.ref.close();
  }
}
