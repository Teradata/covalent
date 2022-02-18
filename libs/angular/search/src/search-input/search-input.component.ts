import {
  Component,
  ViewChild,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Optional,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';
import { MatInput } from '@angular/material/input';
import { MatFormFieldAppearance } from '@angular/material/form-field';

import { debounceTime, skip } from 'rxjs/operators';
import { noop } from 'rxjs';

export class TdSearchInputBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TdSearchInputComponent),
      multi: true,
    },
  ],
  selector: 'td-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('searchState', [
      state(
        'hide-left',
        style({
          transform: 'translateX(-150%)',
          display: 'none',
        })
      ),
      state(
        'hide-right',
        style({
          transform: 'translateX(150%)',
          display: 'none',
        })
      ),
      state(
        'show',
        style({
          transform: 'translateX(0%)',
          display: 'block',
        })
      ),
      transition('* => show', animate('200ms ease-in')),
      transition('show => *', animate('200ms ease-out')),
    ]),
  ],
})
export class TdSearchInputComponent implements ControlValueAccessor, OnInit {
  @ViewChild(MatInput, { static: true }) _input?: MatInput;

  /**
   * appearance?: MatFormFieldAppearance
   * Appearance style for the underlying input component.
   */
  @Input() appearance: MatFormFieldAppearance = 'outline';

  /**
   * showUnderline?: boolean
   * Sets if the input underline should be visible. Defaults to 'false'.
   */
  @Input() showUnderline = false;

  /**
   * debounce?: number
   * Debounce timeout between keypresses. Defaults to 400.
   */
  @Input() debounce = 400;

  /**
   * placeholder?: string
   * Placeholder for the underlying input component.
   */
  @Input() placeholder = '';

  /**
   * clearIcon?: string
   * The icon used to clear the search input.
   * Defaults to 'cancel' icon.
   */
  @Input() clearIcon = 'cancel';

  @Input() value?: unknown;

  /**
   * searchDebounce: function($event)
   * Event emitted after the [debounce] timeout.
   */
  @Output() searchDebounce: EventEmitter<string> = new EventEmitter<string>();

  /**
   * search: function($event)
   * Event emitted after the key enter has been pressed.
   */
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  /**
   * clear: function()
   * Event emitted after the clear icon has been clicked.
   */
  @Output() clear: EventEmitter<void> = new EventEmitter<void>();

  /**
   * blur: function()
   * Event emitted after the blur event has been called in underlying input.
   */
  @Output() blurSearch: EventEmitter<void> = new EventEmitter<void>();

  get isRTL(): boolean {
    if (this._dir) {
      return this._dir.dir === 'rtl';
    }
    return false;
  }

  constructor(
    @Optional() private _dir: Dir,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this._input?.ngControl?.valueChanges
      ?.pipe(
        debounceTime(this.debounce),
        skip(1) // skip first change when value is set to undefined
      )
      .subscribe((value: string) => {
        this._searchTermChanged(value);
      });
  }

  writeValue(value: unknown): void {
    this.value = value;
    this._changeDetectorRef.markForCheck();
  }

  registerOnChange(): void {
    noop;
  }

  registerOnTouched(): void {
    noop;
  }

  /**
   * Method to focus to underlying input.
   */
  focus(): void {
    this._input?.focus();
  }

  handleBlur(): void {
    this.blurSearch.emit();
  }

  stopPropagation(event: Event): void {
    event.stopPropagation();
  }

  handleSearch(event: Event): void {
    this.stopPropagation(event);
    if (typeof this.value == 'string') {
      this.search.emit(this.value);
    }
  }

  /**
   * Method to clear the underlying input.
   */
  clearSearch(): void {
    this.value = '';
    this._changeDetectorRef.markForCheck();
    this.clear.emit();
  }

  private _searchTermChanged(value: string): void {
    this.searchDebounce.emit(value);
  }
}
