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

  /**
   * backIcon?: string
   * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
   * Defaults to 'search' icon.
   */
  @Input('backIcon') backIcon: string = 'search';

  /**
   * showUnderline?: boolean
   * Sets if the input underline should be visible. Defaults to 'false'.
   */
  @Input('showUnderline') showUnderline: boolean = false;

  /**
   * debounce?: number
   * Debounce timeout between keypresses. Defaults to 400.
   */
  @Input('debounce') debounce: number = 400;

  /**
   * alwaysVisible?: boolean
   * Sets if the input should always be visible. Defaults to 'false'.
   */
  @Input('alwaysVisible') alwaysVisible: boolean = false;

  /**
   * placeholder?: string
   * Placeholder for the underlying input component.
   */
  @Input('placeholder') placeholder: string;

  /**
   * searchDebounce: function($event)
   * Event emitted after the [debounce] timeout.
   */
  @Output('searchDebounce') onSearchDebounce: EventEmitter<string> = new EventEmitter<string>();

  /**
   * search: function($event)
   * Event emitted after the key enter has been pressed.
   */
  @Output('search') onSearch: EventEmitter<string> = new EventEmitter<string>();

  /**
   * clear: function()
   * Event emitted after the clear icon has been clicked.
   */
  @Output('clear') onClear: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Method executed when the search icon is clicked.
   */
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
