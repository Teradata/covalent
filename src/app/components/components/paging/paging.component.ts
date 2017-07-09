import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

import { IPageChangeEvent } from '../../../../platform/core';

@Component({
  selector: 'paging-demo',
  styleUrls: ['./paging.component.scss'],
  templateUrl: './paging.component.html',
  animations: [slideInDownAnimation],
})
export class PagingDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

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
    description: `Text for the 'all' menu item in the page size menu. Defaults to 'All'`,
    name: 'pageSizeAllText?',
    type: 'boolean',
  }, {
    description: `Selected page size for the pagination. Defaults to first element of the [pageSizes] array.`,
    name: 'pageSize?',
    type: 'number',
  }, {
    description: `Defines the number of PageLinks to display. PageLinks are used to jump to a specific page, default is 0.`,
    name: 'pageLinkCount?',
    type: 'number',
  }, {
    description: `ets starting page for the paging bar. Defaults to '1'`,
    name: 'initialPage?',
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
