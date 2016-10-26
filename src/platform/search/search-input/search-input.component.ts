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

  @Input('debounce') debounce: number = 400;
  @Input('placeholder') placeholder: string;

  @Output('searchDebounce') onSearchDebounce: EventEmitter<string> = new EventEmitter<string>();
  @Output('search') onSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output('clear') onClear: EventEmitter<void> = new EventEmitter<void>();
  @Output('blur') onBlur: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {
    this.searchTermControl.valueChanges
      .debounceTime(this.debounce)
      .subscribe((value: string) => {
        this._searchTermChanged(value);
      });
  }

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
