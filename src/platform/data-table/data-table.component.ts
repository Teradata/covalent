import { Component, OnInit, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'td-data-table',
  styleUrls: [ 'data-table.component.scss' ],
  templateUrl: 'data-table.component.html',
})
export class TdDataTableComponent implements OnInit {

  private static NO_PAGINATION: number = 0;

  /** internal attributes */
  private _data: any[];
  private _visibleData: any[];
  private _columns: { name: string, label: string }[];
  private _rowSelection: boolean;
  private _rowSelectionField: string = 'selected';
  private _multiple: boolean = true;
  private _search: boolean = false;
  private _hasData: boolean = false;

  /** pagination */
  private _pageSize: number = TdDataTableComponent.NO_PAGINATION;
  private _currentPage: number = 0;
  private _totalPages: number = 0;
  private _hasPagination: boolean = false;

  /** search by term */
  private _searchVisible: boolean = false;
  private _searchTerm: string = '';
  private _searchTermControl: FormControl = new FormControl();

  @ViewChild('searchTerm') _searchTermInput: ElementRef;

  /** td-data-table element attributes */
  @Input('title') _title: string;

  @Input('data')
  set data(data: any[]) {
    this._data = data;
    this.resetPagination();
  }

  @Input('pageSize')
  set pageSize(size: string | number) {
    if (typeof size === 'string') {
      this._pageSize = parseInt(size, 10);
    } else {
      this._pageSize = size;
    }
    this.hasPagination = true;
    this.resetPagination();
  }

  @Input('rowSelectionField')
  set rowSelectionField(field: string) {
    this._rowSelectionField = field;
  }

  @Input('rowSelection')
  set rowSelection(selection: string | boolean) {
    const settingAsString: boolean = typeof selection === 'string'
      && selection !== 'true' && selection !== 'false';

    if (settingAsString) {
      this._rowSelection = true;
      this._rowSelectionField = '' + selection;
    } else {
      this._rowSelection = selection !== '' ? (selection === 'true' || selection === true) : true;
    }
  }

  @Input('multiple')
  set multiple(multiple: string | boolean) {
    this._multiple = multiple !== '' ? (multiple === 'true' || multiple === true) : true;
  }

  @Input('search')
  set search(search: string | boolean) {
    this._search = search !== '' ? (search === 'true' || search === true) : true;
  }

  @Input('columns')
  set columns(cols: { name: string, label: string }[]) {
    this._columns = cols;
  }
  get columns(): { name: string, label: string }[] {
    if (this._columns) {
      return this._columns;
    }

    if (!this._data) {
      return [];
    }

    this._columns = [];
    this._data.forEach((row: any) => {
      Object.keys(row).forEach((k: string) => {
        if (!this._columns.find((c: any) => c.name === k)) {
          this._columns.push({ name: k, label: k });
        }
      });
    });

    return this._columns;
  }

  set hasPagination(pagination: boolean) {
    this._hasPagination = pagination;
  }
  get hasPagination(): boolean {
    return this._hasPagination;
  }

  get hasData(): boolean {
    return this._hasData;
  }

  constructor(private renderer: Renderer) {}

  ngOnInit(): void {
    this._searchTermControl.valueChanges
      .debounceTime(250)
      .subscribe(this.searchTermChanged.bind(this));
  }

  areAllSelected(): boolean {
    const match: string =
      this._data.find((d: any) => !d[this._rowSelectionField]);
    return typeof match === 'undefined';
  }

  selectAll(checked: boolean): void {
    this._data.forEach((d: any) => d[this._rowSelectionField] = checked);
  }

  select(row: any, checked: boolean): void {
    // clears all the fields for the dataset
    if (!this._multiple) {
      this.selectAll(false);
    }

    // toggles the selection field
    row[this._rowSelectionField] = checked;
  }

  toggleSearch(): void {
    this._searchVisible = !this._searchVisible;

    if (this._searchVisible) {
      setTimeout(this.focusOnSearch.bind(this));
    }
  }

  focusOnSearch(): void {
    this.renderer.invokeElementMethod(this._searchTermInput.nativeElement, 'focus');
  }

  nextPage(): void {
    if (this._currentPage < this._totalPages) {
      this._currentPage = this._currentPage + 1;
      this.filterData();
    }
  }

  prevPage(): void {
    this._currentPage = Math.max(this._currentPage - 1, 1);
    this.filterData();
  }

  private searchTermChanged(value: string): void {
    this._searchTerm = value;
    this.resetPagination();
  }

  private resetPagination(): void {
    this._currentPage = 1;
    this._totalPages = 0;

    this.filterData();
  }

  private filterData(): void {
    this._visibleData = this._data;

    let filter: string = this._searchTerm.toLowerCase();
    if (filter) {
      this._visibleData = this._visibleData.filter((item: any) => {
        const res: any = Object.keys(item).find((key: string) => {
          const itemValue: string = ('' + item[key]).toLowerCase();
          return itemValue.indexOf(filter) > -1;
        });
        return !(typeof res === 'undefined');
      });
    }

    if (this.hasPagination) {
      const pageStart: number = (this._currentPage - 1) * this._pageSize;
      const pageEnd: number = Math.min(pageStart + this._pageSize, this._visibleData.length);

      this._totalPages = Math.ceil(this._visibleData.length / this._pageSize);
      this._visibleData = this._visibleData.slice(pageStart, pageEnd);
    }

    this._hasData = this._visibleData.length > 0;
  }

}
