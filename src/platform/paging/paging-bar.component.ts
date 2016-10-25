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
      this._pageChanged();
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

  @Output('change') change: EventEmitter<IPageChangeEvent> = new EventEmitter<IPageChangeEvent>();

  ngOnInit(): void {
    this._calculateRows();
  }

  reset(): void {
    this._page = 1;
    this._pageChanged();
  }

  prevPage(): void {
    if (this.isMinPage()) {
      return;
    }
    this._page--;
    this._pageChanged();
  }

  nextPage(): void {
    if (this.isMaxPage()) {
      return;
    }
    this._page++;
    this._pageChanged();
  }

  isMinPage(): boolean {
    return this._page <= 1;
  }

  isMaxPage(): boolean {
    return this._page >= Math.ceil(this._total / this._pageSize);
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
