import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';
import {
  IHelpMenuDataItem,
  DraggableHelpWindowDialogService,
  DraggableHelpWindowDialogComponent,
} from '@covalent/experimental/help';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'help-demo',
  styleUrls: ['./help.component.scss'],
  templateUrl: './help.component.html',
  animations: [slideInDownAnimation],
  preserveWhitespaces: true,
})
export class HelpDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  oneItem: IHelpMenuDataItem[] = [
    {
      url: 'https://github.com/Teradata/covalent/blob/develop/README.md',
    },
  ];

  itemWithRawMarkdown: IHelpMenuDataItem[] = [
    {
      markdownString: '# Heading',
    },
  ];

  multipleItems: IHelpMenuDataItem[] = [
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md',
      title: 'Code Editor API',
    },
    {
      url: 'https://raw.githubusercontent.com/angular/angular/master/README.md',
      title: 'Angular',
    },
  ];

  oneItemWithAnchor: IHelpMenuDataItem[] = [
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/docs/DEVELOPER_GUIDE.md',
      anchor: 'Adding a new documentation component',
    },
  ];

  nestedItems: IHelpMenuDataItem[] = [
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

  options: { name: string; value: IHelpMenuDataItem[] }[] = [
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
  selected: { name: string; value: IHelpMenuDataItem[] } = this.options[0];
  currentItems: IHelpMenuDataItem[] = this.selected.value;
  userInput: string = this.prettyJson(this.currentItems);

  windowOpen: boolean = false;
  ref: MatDialogRef<DraggableHelpWindowDialogComponent>;

  constructor(private draggableHelpWindowDialogService: DraggableHelpWindowDialogService) {}

  select(): void {
    this.use(this.selected.value);
  }

  use(items: IHelpMenuDataItem[]): void {
    this.currentItems = items;
    this.userInput = this.prettyJson(this.currentItems);
    if (this.windowOpen) {
      this.openDialog();
    }
  }

  tryUserInput(): void {
    this.use(JSON.parse(this.userInput));
  }

  prettyJson(items: IHelpMenuDataItem[]): string {
    return JSON.stringify(items, undefined, 4);
  }

  openDialog(): void {
    if (this.windowOpen) {
      this.closeDialog();
    }
    this.ref = this.draggableHelpWindowDialogService.open(this.currentItems);
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
