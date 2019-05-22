/*
 * Copyright (C) 2016-2018 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { Component } from '@angular/core';
import { DraggableDialogService } from '@covalent/experimental/help/draggable-dialog/draggable-dialog.service';
import { SampleComponent } from './sample/sample.component';

interface IHelpMenuDataItem {
  title: string;
  url?: string;
  httpOptions?: object;
  markdownString?: string; // raw markdown
  anchor?: string;
  children?: IHelpMenuDataItem[];
}

@Component({
  selector: 'testbed-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  url: string = 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md';
  httpOptions: object = {};
  items: IHelpMenuDataItem[] = [
    {
      title: 'a',
      children: [
        {
          title: 'a1',
          children: [
            {
              url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/README.md',
              title: 'a1a',
            },
            {
              url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/README.md',
              title: 'a1b',
            },
          ],
        },
        {
          title: 'a2',
          children: [
            {
              url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/README.md',
              title: 'a2a',
            },
          ],
        },
      ],
    },
    {
      title: 'b',
      children: [
        {
          title: 'b1',
          children: [
            {
              url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/README.md',
              title: 'b1a',
            },
          ],
        },
      ],
    },
  ];

  // no menu
  singleItem: IHelpMenuDataItem[] = [
    {
      url: 'https://raw.githubusercontent.com/Teradata/covalent/develop/docs/DEVELOPER_GUIDE.md',
      title: 'Developer Guide',
    },
  ];

  singleItemWithOneChild: IHelpMenuDataItem[] = [
    {
      title: 'DEVELOPER_GUIDE',
      children: [
        {
          url: 'https://raw.githubusercontent.com/Teradata/covalent-code-editor/master/docs/API.md',
          title: 'API',
        },
      ],
    },
  ];

  listOfUrls: IHelpMenuDataItem[] = [
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
  ];
  constructor(
    private draggableDialogService: DraggableDialogService,
  ) {

  }

  ngOnInit(): void {
    // TODO
    // this.draggableDialogService.open(SampleComponent, {});
  }
}
