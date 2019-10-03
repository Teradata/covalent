import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';
import {
  IMarkdownNavigatorItem,
  MarkdownNavigatorWindowService,
  MarkdownNavigatorWindowComponent,
} from '@covalent/markdown-navigator';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'markdown-navigator-demo',
  styleUrls: ['./markdown-navigator.component.scss'],
  templateUrl: './markdown-navigator.component.html',
  animations: [slideInDownAnimation],
  preserveWhitespaces: true,
})
export class MarkdownNavigatorDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  oneItem: IMarkdownNavigatorItem[] = [
    {
      url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
    },
  ];

  itemWithRawMarkdown: IMarkdownNavigatorItem[] = [
    {
      markdownString: '# Heading',
    },
  ];

  multipleItems: IMarkdownNavigatorItem[] = [
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md',
      title: 'Code Editor API',
    },
    {
      url: 'https://raw.githubusercontent.com/angular/angular/master/README.md',
      title: 'Angular',
    },
  ];

  oneItemWithAnchor: IMarkdownNavigatorItem[] = [
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/docs/DEVELOPER_GUIDE.md',
      anchor: 'Adding a new documentation component',
    },
  ];

  nestedItems: IMarkdownNavigatorItem[] = [
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

  options: { name: string; value: IMarkdownNavigatorItem[] }[] = [
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
  selected: { name: string; value: IMarkdownNavigatorItem[] } = this.options[0];
  currentItems: IMarkdownNavigatorItem[] = this.selected.value;
  userInput: string = this.prettyJson(this.currentItems);

  windowOpen: boolean = false;
  ref: MatDialogRef<MarkdownNavigatorWindowComponent>;

  constructor(private _markdownNavigatorWindowService: MarkdownNavigatorWindowService) {}

  select(): void {
    this.use(this.selected.value);
  }

  use(items: IMarkdownNavigatorItem[]): void {
    this.currentItems = items;
    this.userInput = this.prettyJson(this.currentItems);
    if (this.windowOpen) {
      this.openDialog();
    }
  }

  tryUserInput(): void {
    this.use(JSON.parse(this.userInput));
  }

  prettyJson(items: IMarkdownNavigatorItem[]): string {
    return JSON.stringify(items, undefined, 4);
  }

  openDialog(): void {
    if (this.windowOpen) {
      this.closeDialog();
    }
    this.ref = this._markdownNavigatorWindowService.open({ items: this.currentItems });
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
