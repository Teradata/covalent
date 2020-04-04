import {
  Component,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, state, style, transition, animate, AUTO_STYLE } from '@angular/animations';

import { TdSearchInputComponent } from '../search-input/search-input.component';
import { IControlValueAccessor, mixinControlValueAccessor } from '@covalent/core/common';

export class TdSearchBoxBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdSearchBoxMixinBase = mixinControlValueAccessor(TdSearchBoxBase);

@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TdSearchBoxComponent),
      multi: true,
    },
  ],
  selector: 'td-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['value'],
  animations: [
    trigger('inputState', [
      state(
        '0',
        style({
          width: '0%',
          margin: '0px',
        }),
      ),
      state(
        '1',
        style({
          width: '100%',
          margin: AUTO_STYLE,
        }),
      ),
      transition('0 => 1', animate('200ms ease-in')),
      transition('1 => 0', animate('200ms ease-out')),
    ]),
  ],
})
export class TdSearchBoxComponent extends _TdSearchBoxMixinBase implements IControlValueAccessor {
  private _searchVisible: boolean = false;
  @ViewChild(TdSearchInputComponent, { static: true }) _searchInput: TdSearchInputComponent;

  get searchVisible(): boolean {
    return this._searchVisible;
  }

  /**
   * backIcon?: string
   * The icon used to close the search toggle, only shown when [alwaysVisible] is false.
   * Defaults to 'search' icon.
   */
  @Input() backIcon: string = 'search';

  /**
   * searchIcon?: string
   * The icon used to open/focus the search toggle.
   * Defaults to 'search' icon.
   */
  @Input() searchIcon: string = 'search';

  /**
   * clearIcon?: string
   * The icon used to clear the search input.
   * Defaults to 'cancel' icon.
   */
  @Input() clearIcon: string = 'cancel';

  /**
   * showUnderline?: boolean
   * Sets if the input underline should be visible. Defaults to 'false'.
   */
  @Input() showUnderline: boolean = false;

  /**
   * debounce?: number
   * Debounce timeout between keypresses. Defaults to 400.
   */
  @Input() debounce: number = 400;

  /**
   * alwaysVisible?: boolean
   * Sets if the input should always be visible. Defaults to 'false'.
   */
  @Input() alwaysVisible: boolean = false;

  /**
   * placeholder?: string
   * Placeholder for the underlying input component.
   */
  @Input() placeholder: string;

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
  @Output() blur: EventEmitter<void> = new EventEmitter<void>();

  constructor(_changeDetectorRef: ChangeDetectorRef) {
    super(_changeDetectorRef);
  }

  /**
   * Method executed when the search icon is clicked.
   */
  searchClicked(): void {
    if (!this.alwaysVisible && this._searchVisible) {
      this.value = '';
      this.handleClear();
    } else if (this.alwaysVisible || !this._searchVisible) {
      this._searchInput.focus();
    }
    this.toggleVisibility();
  }

  toggleVisibility(): void {
    this._searchVisible = !this._searchVisible;
    this._changeDetectorRef.markForCheck();
  }

  handleSearchDebounce(value: string): void {
    this.searchDebounce.emit(value);
  }

  handleSearch(value: string): void {
    this.search.emit(value);
  }

  handleClear(): void {
    this.clear.emit();
  }

  handleBlur(): void {
    this.blur.emit();
  }
}
