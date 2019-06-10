/*
 * Copyright (C) 2016-2018 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { Component, OnInit } from '@angular/core';
import {
  DraggableHelpWindowDialogComponent,
  DraggableHelpWindowDialogService,
  IHelpMenuDataItem,
} from '@covalent/experimental/help';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'testbed-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  url: string = 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md';
  httpOptions: object = {};

  oneItem: IHelpMenuDataItem[] = [
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/docs/DEVELOPER_GUIDE.md',
    },
  ];

  multipleItems: IHelpMenuDataItem[] = [
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md',
      title: 'API',
    },
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/docs/DEVELOPER_GUIDE.md',
      title: 'Developer Guide',
    },
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/src/platform/core/loading/README.md',
      title: 'Loading',
    },
    {
      url: 'https://raw.githubusercontent.com/angular/angular/master/README.md',
      title: 'Angular',
    },
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/README.md',
      title: 'Covalent',
    },
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent-tools/develop/docs/CLI.md',
      title: 'up a level: E2E Code Coverage',
    },
  ];

  oneItemWithAnchor: IHelpMenuDataItem[] = [
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md',
      title: 'API',
      anchor: 'Properties',
    },
  ];

  nestedItems: IHelpMenuDataItem[] = [
    {
      title: 'Nested Items',
      children: [
        {
          url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/src/platform/core/loading/README.md',
          title: 'Loading',
        },
        {
          url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/docs/DEVELOPER_GUIDE.md',
          title: 'Developer Guide',
        },
      ],
    },
  ];

  showOpenButton: boolean = false;
  currentItems: IHelpMenuDataItem[];
  ref: MatDialogRef<DraggableHelpWindowDialogComponent>;
  userInput: string = '';
  anchor: string = 'Adding-a-new-documentation-component';

  constructor(private draggableHelpWindowDialogService: DraggableHelpWindowDialogService) {}

  ngOnInit(): void {
    this.use(this.multipleItems);
  }

  openDialog(): void {
    this.ref = this.draggableHelpWindowDialogService.open(this.currentItems);
    this.ref.afterOpened().subscribe(() => {
      this.showOpenButton = false;
    });

    this.ref.afterClosed().subscribe(() => {
      this.showOpenButton = true;
    });
  }
  closeDialog(): void {
    if (this.ref) {
      this.ref.close();
    }
  }

  prettyJson(items: IHelpMenuDataItem[]): string {
    return JSON.stringify(items, undefined, 4);
  }

  use(items: IHelpMenuDataItem[]): void {
    this.currentItems = items;
    this.userInput = this.prettyJson(this.currentItems);
    this.closeDialog();
    this.openDialog();
  }

  tryUserInput(): void {
    this.use(JSON.parse(this.userInput));
  }
}
