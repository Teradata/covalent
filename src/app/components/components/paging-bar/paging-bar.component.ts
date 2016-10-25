import { Component } from '@angular/core';

import { IPageChangeEvent } from '../../../../platform/paging';

@Component({
  selector: 'paging-bar-demo',
  styleUrls: ['paging-bar.component.scss'],
  templateUrl: 'paging-bar.component.html',
})
export class PagingBarDemoComponent {

  pagingBarAttrs: Object[] = [{
    description: `Array that populates page size menu.`,
    name: 'pageSizes',
    type: 'number[]',
  }, {
    description: `Selected page size for the pagination.`,
    name: 'pageSize',
    type: 'number',
  }, {
    description: `Total rows for the pagination.`,
    name: 'total',
    type: 'number',
  }, {
    description: `Event emmited when page size changes or any button is clicked in the paging bar.`,
    name: 'change',
    type: 'function($event: IPageChangeEvent)',
  }, {
    description: `Navigates to a specific valid page.
                  Returns 'true' if page is valid, else 'false'.`,
    name: 'navigateToPage',
    type: 'function(page: number): boolean',
  }];

  event: IPageChangeEvent;

  change(event: IPageChangeEvent): void {
    this.event = event;
  }

}
