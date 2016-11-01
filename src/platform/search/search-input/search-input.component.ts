import { Component, ViewChild, OnInit, Input, Output, EventEmitter,
         trigger, state, style, transition, animate } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdInput } from '@angular/material';

@Component({
  selector: 'td-search-input',
  templateUrl: 'search-input.component.html',
  styleUrls: [ 'search-input.component.scss' ],
  animations: [
    trigger('searchState', [
      state('false', style({
        transform: 'translateX(150%)',
        display: 'none',
      })),
      state('true',  style({
        transform: 'translateX(0%)',
        display: 'block',
      })),
      transition('0 => 1', animate('200ms ease-in')),
      transition('1 => 0', animate('200ms ease-out')),
    ]),
  ],
})
export class TdSearchInputComponent implements OnInit {

  @ViewChild(MdInput) private _input: MdInput;

  searchTermControl: FormControl = new FormControl();

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
   * blur: function()
   * Event emitted after the blur event has been called in underlying input.
   */
  @Output('blur') onBlur: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    this.searchTermControl.valueChanges
      .debounceTime(this.debounce)
      .subscribe((value: string) => {
        this._searchTermChanged(value);
      });
  }

  /**
   * Method to focus to underlying input.
   */
  focus(): void {
    this._input.focus();
  }

  handleBlur(): void {
    this.onBlur.emit(undefined);
  }

  handleSearch(event: Event): void {
    event.stopPropagation();
    this.onSearch.emit(this.searchTermControl.value);
  }

  clearSearch(): void {
    this.searchTermControl.setValue('');
    this.onClear.emit(undefined);
  }

  private _searchTermChanged(value: string): void {
    this.onSearchDebounce.emit(value);
  }

}
