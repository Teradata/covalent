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

  /** pagination */
  private _pageSize: number = TdDataTableComponent.NO_PAGINATION;
  private _currentPage: number = 0;
  private _totalPages: number = 0;

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
      this._pageSize = parseInt(size);
    }
    else {
      this._pageSize = size;
    }
    this.resetPagination();
  }

  @Input('rowSelectionField')
  set rowSelectionField(field: string) {
    this._rowSelectionField = field;
  }

  @Input('rowSelection')
  set rowSelection(selection: string | boolean) {
    const settingAsString = typeof selection === 'string'
      && selection !== 'true' && selection !== 'false';

    if (settingAsString) {
      this._rowSelection = true;
      this._rowSelectionField = '' + selection;
    }
    else {
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
    this._data.forEach(row => {
      Object.keys(row).forEach(k => {
        if (!this._columns.find(c => c.name === k)) {
          this._columns.push({ name: k, label: k });
        }
      });
    });

    return this._columns;
  }

  constructor(private renderer: Renderer) {}

  ngOnInit() {
    this._searchTermControl.valueChanges
      .debounceTime(250)
      .subscribe(this.searchTermChanged.bind(this));
  }

  areAllSelected() {
    const match = this._data.find(d => !d[this._rowSelectionField]);
    return typeof match === "undefined";
  }

  selectAll(checked: boolean) {
    this._data.forEach(d => d[this._rowSelectionField] = checked);
  }

  select(row: any, checked: boolean) {
    // clears all the fields for the dataset
    if (!this._multiple) {
      this.selectAll(false);
    }

    // toggles the selection field
    row[this._rowSelectionField] = checked;
  }

  toggleSearch() {
    this._searchVisible = !this._searchVisible;

    if (this._searchVisible) {
      setTimeout(this.focusOnSearch.bind(this));
    }
  }

  focusOnSearch() {
    this.renderer.invokeElementMethod(this._searchTermInput.nativeElement, 'focus');
  }

  hasPagination() {
    return this._pageSize !== TdDataTableComponent.NO_PAGINATION;
  }

  nextPage() {
    if (this._currentPage < this._totalPages) {
      this._currentPage = this._currentPage + 1;
      this.filterData();
    }
  }

  prevPage() {
    this._currentPage = Math.max(this._currentPage - 1, 1);
    this.filterData();
  }

  private searchTermChanged(value: string) {
    this._searchTerm = value;
    this.resetPagination();
  }

  private resetPagination() {
    this._currentPage = 1;
    this._totalPages = 0;

    if (!this.hasPagination()) {
      this._visibleData = this._data;
      return;
    }

    this.filterData();
  }

  private filterData() {
    this._visibleData = this._data;

    let filter = this._searchTerm.toLowerCase();
    if (filter) {
      this._visibleData = this._visibleData.filter(item => {
        const res = Object.keys(item).find(key => {
          const itemValue = ('' + item[key]).toLowerCase();
          return itemValue.indexOf(filter) > -1;
        });
        return !(typeof res === 'undefined');
      });
    }

    if (this.hasPagination()) {
      const pageStart = (this._currentPage-1) * this._pageSize;
      const pageEnd = Math.min(pageStart + this._pageSize, this._visibleData.length);

      this._totalPages = Math.ceil(this._visibleData.length / this._pageSize);
      this._visibleData = this._visibleData.slice(pageStart, pageEnd);
    }
  }

}
