import { Component } from '@angular/core';

import { IPageChangeEvent } from '../../../../platform/paging';


@Component({
  selector: 'paging-bar-demo',
  styleUrls: ['paging-bar.component.scss'],
  templateUrl: 'paging-bar.component.html',
})
export class PagingBarDemoComponent {

  pagingBarAttrs: Object[] = [{
    description: `Rows of data to be displayed`,
    name: 'data',
    type: 'any[]',
  }];

  pageSize: number = 5;
  event: IPageChangeEvent;

  change(event: IPageChangeEvent): void {
    this.event = event;
  }

}
