import { Component } from '@angular/core';

@Component({
  selector: 'search-demo',
  styleUrls: ['search.component.scss'],
  templateUrl: 'search.component.html',
})
export class SearchDemoComponent {

  searchInputAttrs: Object[] = [{
    description: `Array that populates page size menu. Defaults to [50, 100, 200, 500, 1000]`,
    name: 'pageSizes?',
    type: 'number[]',
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

  searchBoxAttrs: Object[] = [{
    description: `Array that populates page size menu. Defaults to [50, 100, 200, 500, 1000]`,
    name: 'pageSizes?',
    type: 'number[]',
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

  searchInputTerm: string = '';
  searchBoxTerm: string = '';
  debounce: number = 0;
  alwaysVisible: boolean = false;

  modeChange(): void {
    this.searchInputTerm = '';
    this.searchBoxTerm = '';
  }

  toggleAlwaysVisible(): void {
    this.alwaysVisible = !this.alwaysVisible;
  }

}
