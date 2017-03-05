import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export interface IPageChangeEvent {
  page: number;
  maxPage: number;
  pageSize: number;
  total: number;
  fromRow: number;
  toRow: number;
}

@Component({
  selector: 'td-paging-bar',
  templateUrl: './paging-bar.component.html',
  styleUrls: ['./paging-bar.component.scss' ],
})
export class TdPagingBarComponent implements OnInit {

  private _pageSizes: number[] = [50, 100, 200, 500, 1000];
  private _pageSize: number = 50;
  private _total: number = 0;
  private _page: number = 1;
  private _fromRow: number = 1;
  private _toRow: number = 1;
  private _initialized: boolean = false;
  private _rtl = false;

  /**
   * pageSizeAll?: boolean
   * Shows or hides the 'all' menu item in the page size menu. Defaults to 'false'
   */
  @Input('pageSizeAll') pageSizeAll: boolean = false;

  /**
   * pageSizeAllText?: string
   * Text for the 'all' menu item in the page size menu. Defaults to 'All'
   */
  @Input('pageSizeAllText') pageSizeAllText: string = 'All';

  /**
   * firstLast?: boolean
   * Shows or hides the first and last page buttons of the paging bar. Defaults to 'false'
   */
  @Input('firstLast') firstLast: boolean = true;

  /**
   * initialPage?: number
   * Sets starting page for the paging bar. Defaults to '1'
   */
  @Input('initialPage') initialPage: number = 1;

  /**
   * pageSizes?: number[]
   * Array that populates page size menu. Defaults to [50, 100, 200, 500, 1000]
   */
  @Input('pageSizes')
  set pageSizes(pageSizes: number[]) {
    if (!(pageSizes instanceof Array)) {
      throw new Error('[pageSizes] needs to be an number array.');
    }
    this._pageSizes = pageSizes;
    this._pageSize = this._pageSizes[0];
  }
  get pageSizes(): number[] {
    return this._pageSizes;
  }

  /**
   * pageSize?: number
   * Selected page size for the pagination. Defaults to first element of the [pageSizes] array.
   */
  @Input('pageSize')
  set pageSize(pageSize: number) {
    if ((this._pageSizes.indexOf(pageSize) > -1 || this.total === pageSize) && this._pageSize !== pageSize) {
      this._pageSize = pageSize;
      this._page = 1;
      if (this._initialized) {
        this._handleOnChange();
      }
    }
  }
  get pageSize(): number {
    return this._pageSize;
  }

  /**
   * total: number
   * Total rows for the pagination.
   */
  @Input('total')
  set total(total: number) {
    this._total = total;
    this._calculateRows();
  }
  get total(): number {
    return this._total;
  }

  /**
   * rtl: boolean
   * direction for arrows.
   */
  @Input('rtl')
  set rtl(rtl: boolean) {
    this._rtl = rtl;
  }
  get rtl(): boolean {
    return this._rtl;
  }

  /**
   * range: string
   * Returns the range of the rows.
   */
  get range(): string {
    return `${!this._toRow ? 0 : this._fromRow}-${this._toRow}`;
  }

  /**
   * page: number
   * Returns the current page.
   */
  get page(): number {
    return this._page;
  }

  /**
   * page: number
   * Returns the max page for the current pageSize and total.
   */
  get maxPage(): number {
    return Math.ceil(this._total / this._pageSize);
  }

  /**
   * change?: function
   * Method to be executed when page size changes or any button is clicked in the paging bar.
   * Emits an [IPageChangeEvent] implemented object.
   */
  @Output('change') onChange: EventEmitter<IPageChangeEvent> = new EventEmitter<IPageChangeEvent>();

  ngOnInit(): void {
    this._page = this.initialPage;
    this._calculateRows();
    this._initialized = true;
  }

  /**
   * navigateToPage?: function
   * Navigates to a specific valid page. Returns 'true' if page is valid, else 'false'.
   */
  navigateToPage(page: number): boolean {
    if (page === 1 || (page >= 1 && page <= this.maxPage)) {
      this._page = page;
      this._handleOnChange();
      return true;
    }
    return false;
  }

  /**
   * firstPage?: function
   * Navigates to the first page. Returns 'true' if page is valid, else 'false'.
   */
  firstPage(): boolean {
    return this.navigateToPage(1);
  }

  /**
   * prevPage?: function
   * Navigates to the previous page. Returns 'true' if page is valid, else 'false'.
   */
  prevPage(): boolean {
    return this.navigateToPage(this._page - 1);
  }

  /**
   * nextPage?: function
   * Navigates to the next page. Returns 'true' if page is valid, else 'false'.
   */
  nextPage(): boolean {
    return this.navigateToPage(this._page + 1);
  }

  /**
   * lastPage?: function
   * Navigates to the last page. Returns 'true' if page is valid, else 'false'.
   */
  lastPage(): boolean {
    return this.navigateToPage(this.maxPage);
  }

  isMinPage(): boolean {
    return this._page <= 1;
  }

  isMaxPage(): boolean {
    return this._page >= this.maxPage;
  }

  private _calculateRows(): void {
    let top: number = (this._pageSize * this._page);
    this._fromRow = (this._pageSize * (this._page - 1)) + 1;
    this._toRow = this._total > top ? top : this._total;
  }

  private _handleOnChange(): void {
    this._calculateRows();
    let event: IPageChangeEvent = {
      page: this._page,
      maxPage: this.maxPage,
      pageSize: this._pageSize,
      total: this._total,
      fromRow: this._fromRow,
      toRow: this._toRow,
    };
    this.onChange.emit(event);
  }

}
