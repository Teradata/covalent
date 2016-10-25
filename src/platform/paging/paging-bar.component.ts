import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

export interface IPageChangeEvent {
  page: number;
  pageSize: number;
  total: number;
  fromRow: number;
  toRow: number;
}

@Component({
  selector: 'td-paging-bar',
  templateUrl: 'paging-bar.component.html',
  styleUrls: [ 'paging-bar.component.scss' ],
})
export class TdPagingBarComponent implements OnInit {

  private _pageSizes: number[] = [50, 100, 200, 500, 1000];
  private _pageSize: number = 100;
  private _total: number = 0;
  private _page: number = 1;
  private _fromRow: number = 1;
  private _toRow: number = 1;
  private _initialized: boolean = false;

  @Input('pageSizes')
  set pageSizes(pageSizes: number[]) {
    if (pageSizes instanceof Array) {
      this._pageSizes = pageSizes;
    }
  }
  get pageSizes(): number[] {
    return this._pageSizes;
  }

  @Input('pageSize')
  set pageSize(pageSize: number) {
    if (this._pageSizes.indexOf(pageSize) > -1 && this._pageSize !== pageSize) {
      this._pageSize = pageSize;
      this._page = 1;
      if (this._initialized) {
        this._pageChanged();
      }
    }
  }
  get pageSize(): number {
    return this._pageSize;
  }

  @Input('total')
  set total(total: number) {
    this._total = total;
  }
  get total(): number {
    return this._total;
  }

  get range(): string {
    return `${this._fromRow}-${this._toRow}`;
  }

  get page(): number {
    return this._page;
  }

  get maxPage(): number {
    return Math.ceil(this._total / this._pageSize);
  }

  @Output('change') change: EventEmitter<IPageChangeEvent> = new EventEmitter<IPageChangeEvent>();

  ngOnInit(): void {
    this._calculateRows();
    this._initialized = true;
  }

  navigateToPage(page: number): boolean {
    if (page >= 1 && page <= this.maxPage && page !== this._page) {
      this._page = page;
      this._pageChanged();
      return true;
    }
    return false;
  }

  firstPage(): boolean {
    return this.navigateToPage(1);
  }

  prevPage(): boolean {
    return this.navigateToPage(this._page - 1);
  }

  nextPage(): boolean {
    return this.navigateToPage(this._page + 1);
  }

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

  private _pageChanged(): void {
    this._calculateRows();
    let event: IPageChangeEvent = {
      page: this._page,
      pageSize: this._pageSize,
      total: this._total,
      fromRow: this._fromRow,
      toRow: this._toRow,
    };
    this.change.emit(event);
  }

}
