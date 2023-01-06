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
  OnDestroy,
  ElementRef,
  NgZone,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';
import { MatInput } from '@angular/material/input';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, skip, takeUntil } from 'rxjs/operators';
import {
  IControlValueAccessor,
  mixinControlValueAccessor,
} from '@covalent/core/common';

export class TdSearchInputBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

export const _TdSearchInputMixinBase =
  mixinControlValueAccessor(TdSearchInputBase);

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
export class TdSearchInputComponent
  extends _TdSearchInputMixinBase
  implements IControlValueAccessor, OnInit, OnDestroy
{
  @ViewChild(MatInput, { static: true }) _input?: MatInput;

  @ViewChild('searchElement', { static: true, read: ElementRef })
  _searchElement!: ElementRef<HTMLInputElement>;

  /**
   * appearance?: MatFormFieldAppearance
   * Appearance style for the underlying input component.
   */
  @Input() appearance: MatFormFieldAppearance = 'legacy';

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

  @Input() override value!: unknown;

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

  private _destroy$ = new Subject<void>();

  constructor(
    @Optional() private _dir: Dir,
    override _changeDetectorRef: ChangeDetectorRef,
    private _ngZone: NgZone
  ) {
    super(_changeDetectorRef);
  }

  ngOnInit(): void {
    this._input?.ngControl?.valueChanges
      ?.pipe(
        debounceTime(this.debounce),
        skip(1), // skip first change when value is set to undefined
        takeUntil(this._destroy$)
      )
      .subscribe((value: string) => {
        this._searchTermChanged(value);
      });

    this._ngZone.runOutsideAngular(() =>
      fromEvent(this._searchElement.nativeElement, 'search')
        .pipe(takeUntil(this._destroy$))
        .subscribe(this._stopPropagation)
    );
  }

  ngOnDestroy(): void {
    this._destroy$.next();
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

  handleSearch(event: Event): void {
    this._stopPropagation(event);
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

  private _stopPropagation(event: Event): void {
    event.stopPropagation();
  }
}
