import { Component, ViewChild, Input, Output, EventEmitter,
         trigger, state, style, transition, animate } from '@angular/core';

import { TdSearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'td-search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: [ 'search-box.component.scss' ],
  animations: [
    trigger('inputState', [
      state('false', style({
        width: '0%',
        'margin-left': '0px',
      })),
      state('true',  style({
        width: '100%',
        'margin-left': '*',
      })),
      transition('0 => 1', animate('200ms ease-in')),
      transition('1 => 0', animate('200ms ease-out')),
    ]),
  ],
})
export class TdSearchBoxComponent {

  private _searchVisible: boolean = false;
  @ViewChild(TdSearchInputComponent) private _searchInput: TdSearchInputComponent;

  get searchVisible(): boolean {
    return this._searchVisible;
  }

  @Input('debounce') debounce: number = 400;
  @Input('alwaysVisible') alwaysVisible: boolean = false;
  @Input('placeholder') placeholder: string;

  @Output('searchDebounce') onSearchDebounce: EventEmitter<string> = new EventEmitter<string>();
  @Output('search') onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output('clear') onClear: EventEmitter<void> = new EventEmitter<void>();

  searchClicked(): void {
    if (this.alwaysVisible || !this._searchVisible) {
      this._searchInput.focus();
    }
    this.toggleVisibility();
  }

  toggleVisibility(): void {
    this._searchVisible = !this._searchVisible;
  }

  handleSearchDebounce(value: string): void {
    this.onSearchDebounce.emit(value);
  }

  handleSearch(value: string): void {
    this.onSearch.emit(value);
  }

  handleClear(): void {
    this.onClear.emit(undefined);
  }

}
