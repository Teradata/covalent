import { Component } from '@angular/core';

import { IPageChangeEvent } from '../../../../platform/paging';

@Component({
  selector: 'paging-demo',
  styleUrls: ['paging.component.scss'],
  templateUrl: 'paging.component.html',
})
export class PagingDemoComponent {

  pagingBarAttrs: Object[] = [{
    description: `Array that populates page size menu. Defaults to [50, 100, 200, 500, 1000]`,
    name: 'pageSizes?',
    type: 'number[]',
  }, {
    description: `Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'`,
    name: 'firstLast?',
    type: 'boolean',
  }, {
    description: `Shows or hides the 'all' menu item in the page size menu. Defaults to 'false'`,
    name: 'pageSizeAll?',
    type: 'boolean',
  }, {
    description: `Selected page size for the pagination. Defaults to first element of the [pageSizes] array.`,
    name: 'pageSize?',
    type: 'number',
  }, {
    description: `Total rows for the pagination.`,
    name: 'total',
    type: 'number',
  }, {
    description: `Method to be executed when page size changes or any button is clicked in the paging bar.`,
    name: 'change',
    type: 'function($event: IPageChangeEvent)',
  }, {
    description: `Navigates to a specific valid page.
                  Returns 'true' if page is valid, else 'false'.`,
    name: 'navigateToPage',
    type: 'function(page: number): boolean',
  }];

  event: IPageChangeEvent;
  firstLast: boolean = false;
  pageSizeAll: boolean = false;

  change(event: IPageChangeEvent): void {
    this.event = event;
  }

  toggleFirstLast(): void {
    this.firstLast = !this.firstLast;
  }

  togglePageSizeAll(): void {
    this.pageSizeAll = !this.pageSizeAll;
  }

}
