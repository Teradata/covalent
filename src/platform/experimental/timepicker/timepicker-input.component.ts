/* tslint:disable */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DOWN_ARROW } from '@angular/cdk/keycodes';
import {
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { TdTimepickerComponent } from './timepicker.component';
import { createMissingTimeImplError } from './timepicker-errors';
import { TimeAdapter } from './time-adapter';
import { TD_TIME_FORMATS, TdTimeFormats } from './time-formats';


export const MAT_TIMEPICKER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdTimepickerInputComponent),
  multi: true,
};

export const MAT_TIMEPICKER_VALITATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => TdTimepickerInputComponent),
  multi: true,
};

/**
 * An event used for timepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use TdTimepickerInputEvent instead.
 */
export class TdTimepickerInputEvent<T> {
  /** The new value for the target timepicker input. */
  value: T | null;

  constructor(
    /** Reference to the timepicker input component that emitted the event. */
    public target: TdTimepickerInputComponent<T>,
    /** Reference to the native input element associated with the timepicker input. */
    public targetElement: HTMLElement) {
    this.value = this.target.value;
  }
}


/** Tirective used to connect an input to a MatTimepicker. */
@Directive({
  selector: 'input[tdTimepicker]',
  providers: [
    MAT_TIMEPICKER_VALUE_ACCESSOR,
    MAT_TIMEPICKER_VALITATORS,
    {provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: TdTimepickerInputComponent},
  ],
  // host: {
  //   '[attr.aria-haspopup]': 'true',
  //   '[attr.aria-owns]': '(_timepicker?.opened && _timepicker.id) || null',
  //   '[attr.min]': 'min ? _timeAdapter.toIso8601(min) : null',
  //   '[attr.max]': 'max ? _timeAdapter.toIso8601(max) : null',
  //   '[disabled]': 'disabled',
  //   '(input)': '_onInput($event.target.value)',
  //   '(change)': '_onChange()',
  //   '(blur)': '_onBlur()',
  //   '(keydown)': '_onKeydown($event)',
  // },
  exportAs: 'tdTimepickerInput',
})
export class TdTimepickerInputComponent<T> implements ControlValueAccessor, OnDestroy, Validator {
  /** The timepicker that this input is associated with. */
  @Input()
  set tdTimepicker(value: TdTimepickerComponent<T>) {
    if (!value) {
      return;
    }

    this._timepicker = value;
    this._timepicker._registerInput(this);
    this._timepickerSubscription.unsubscribe();

    this._timepickerSubscription = this._timepicker._selectedChanged.subscribe((selected: T) => {
      this.value = selected;
      this._cvaOnChange(selected);
      this._onTouched();
      this.timeInput.emit(new TdTimepickerInputEvent(this, this._elementRef.nativeElement));
      this.timeChange.emit(new TdTimepickerInputEvent(this, this._elementRef.nativeElement));
    });
  }
  _timepicker: TdTimepickerComponent<T>;

  /** Function that can be used to filter out times within the timepicker. */
  @Input()
  set tdTimepickerFilter(value: (time: T | null) => boolean) {
    this._timeFilter = value;
    this._validatorOnChange();
  }
  _timeFilter: (time: T | null) => boolean;

  /** The value of the input. */
  @Input()
  get value(): T | null { return this._value; }
  set value(value: T | null) {
    value = this._timeAdapter.deserialize(value);
    this._lastValueValid = !value || this._timeAdapter.isValid(value);
    value = this._getValidTimeOrNull(value);
    const oldTime = this.value;
    this._value = value;
    this._formatValue(value);

    if (!this._timeAdapter.sameTime(oldTime, value)) {
      this._valueChange.emit(value);
    }
  }
  private _value: T | null;

  /** The minimum valid time. */
  @Input()
  get min(): T | null { return this._min; }
  set min(value: T | null) {
    this._min = this._getValidTimeOrNull(this._timeAdapter.deserialize(value));
    this._validatorOnChange();
  }
  private _min: T | null;

  /** The maximum valid time. */
  @Input()
  get max(): T | null { return this._max; }
  set max(value: T | null) {
    this._max = this._getValidTimeOrNull(this._timeAdapter.deserialize(value));
    this._validatorOnChange();
  }
  private _max: T | null;

  /** Whether the timepicker-input is disabled. */
  @Input()
  get disabled(): boolean { return !!this._disabled; }
  set disabled(value: boolean) {
    const newValue = coerceBooleanProperty(value);
    const element = this._elementRef.nativeElement;

    if (this._disabled !== newValue) {
      this._disabled = newValue;
      this._disabledChange.emit(newValue);
    }

    // We need to null check the `blur` method, because it's undefined during SSR.
    if (newValue && element.blur) {
      // Normally, native input elements automatically blur if they turn disabled. This behavior
      // is problematic, because it would mean that it triggers another change detection cycle,
      // which then causes a changed after checked error if the input element was focused before.
      element.blur();
    }
  }
  private _disabled: boolean;

  /** Emits when a `change` event is fired on this `<input>`. */
  @Output() readonly timeChange: EventEmitter<TdTimepickerInputEvent<T>> =
      new EventEmitter<TdTimepickerInputEvent<T>>();

  /** Emits when an `input` event is fired on this `<input>`. */
  @Output() readonly timeInput: EventEmitter<TdTimepickerInputEvent<T>> =
      new EventEmitter<TdTimepickerInputEvent<T>>();

  /** Emits when the value changes (either due to user input or programmatic change). */
  _valueChange = new EventEmitter<T | null>();

  /** Emits when the disabled state has changed */
  _disabledChange = new EventEmitter<boolean>();

  _onTouched = () => {};

  private _cvaOnChange: (value: any) => void = () => {};

  private _validatorOnChange = () => {};

  private _timepickerSubscription = Subscription.EMPTY;

  private _localeSubscription = Subscription.EMPTY;

  /** The form control validator for whether the input parses. */
  private _parseValidator: ValidatorFn = (): ValidationErrors | null => {
    return this._lastValueValid ?
        null : {'tdTimepickerParse': {'text': this._elementRef.nativeElement.value}};
  }

  /** The form control validator for the min time. */
  private _minValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const controlValue = this._getValidTimeOrNull(this._timeAdapter.deserialize(control.value));
    return (!this.min || !controlValue ||
        this._timeAdapter.compareDate(this.min, controlValue) <= 0) ?
        null : {'tdTimepickerMin': {'min': this.min, 'actual': controlValue}};
  }

  /** The form control validator for the max time. */
  private _maxValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const controlValue = this._getValidTimeOrNull(this._timeAdapter.deserialize(control.value));
    return (!this.max || !controlValue ||
        this._timeAdapter.compareDate(this.max, controlValue) >= 0) ?
        null : {'tdTimepickerMax': {'max': this.max, 'actual': controlValue}};
  }

  /** The form control validator for the time filter. */
  private _filterValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const controlValue = this._getValidTimeOrNull(this._timeAdapter.deserialize(control.value));
    return !this._timeFilter || !controlValue || this._timeFilter(controlValue) ?
        null : {'tdTimepickerFilter': true};
  }

  /** The combined form control validator for this input. */
  private _validator: ValidatorFn | null =
      Validators.compose(
          [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);

  /** Whether the last value set on the input was valid. */
  private _lastValueValid = false;

  constructor(
      private _elementRef: ElementRef,
      @Optional() public _timeAdapter: TimeAdapter<T>,
      @Optional() @Inject(TD_TIME_FORMATS) private _timeFormats: TdTimeFormats,
      @Optional() private _formField: MatFormField) {
    // if (!this._timeAdapter) {
    //   throw createMissingTimeImplError('TimeAdapter');
    // }
    // if (!this._timeFormats) {
    //   throw createMissingTimeImplError('TD_TIME_FORMATS');
    // }

    // Uptime the displayed time when the locale changes.
    // this._localeSubscription = _timeAdapter.localeChanges.subscribe(() => {
    //   this.value = this.value;
    // });
  }

  ngOnDestroy() {
    this._timepickerSubscription.unsubscribe();
    this._localeSubscription.unsubscribe();
    this._valueChange.complete();
    this._disabledChange.complete();
  }

  /** @docs-private */
  registerOnValidatorChange(fn: () => void): void {
    this._validatorOnChange = fn;
  }

  /** @docs-private */
  validate(c: AbstractControl): ValidationErrors | null {
    return this._validator ? this._validator(c) : null;
  }

  /**
   * @deprecated
   * @breaking-change 7.0.0 Use `getConnectedOverlayOrigin` instead
   */
  getPopupConnectionElementRef(): ElementRef {
    return this.getConnectedOverlayOrigin();
  }

  /**
   * Gets the element that the timepicker popup should be connected to.
   * @return The element to connect the popup to.
   */
  getConnectedOverlayOrigin(): ElementRef {
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
  }

  // Implemented as part of ControlValueAccessor.
  writeValue(value: T): void {
    this.value = value;
  }

  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn: (value: any) => void): void {
    this._cvaOnChange = fn;
  }

  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  // Implemented as part of ControlValueAccessor.
  setDisabledState(isTisabled: boolean): void {
    this.disabled = isTisabled;
  }

  _onKeydown(event: KeyboardEvent) {
    if (this._timepicker && event.altKey && event.keyCode === DOWN_ARROW) {
//      this._timepicker.open();
      event.preventDefault();
    }
  }

  _onInput(value: string) {
    let time = this._timeAdapter.parse(value, this._timeFormats.parse.timeInput);
    this._lastValueValid = !time || this._timeAdapter.isValid(time);
    time = this._getValidTimeOrNull(time);

    if (!this._timeAdapter.sameTime(time, this._value)) {
      this._value = time;
      this._cvaOnChange(time);
      this._valueChange.emit(time);
      this.timeInput.emit(new TdTimepickerInputEvent(this, this._elementRef.nativeElement));
    }
  }

  _onChange() {
    this.timeChange.emit(new TdTimepickerInputEvent(this, this._elementRef.nativeElement));
  }

  /** Returns the palette used by the input's form field, if any. */
  _getThemePalette() {
    return this._formField ? this._formField.color : undefined;
  }

  /** Handles blur events on the input. */
  _onBlur() {
    // Reformat the input only if we have a valid value.
    if (this.value) {
      this._formatValue(this.value);
    }

    this._onTouched();
  }

  /** Formats a value and sets it on the input element. */
  private _formatValue(value: T | null) {
    this._elementRef.nativeElement.value =
        value ? this._timeAdapter.format(value, this._timeFormats.display.timeInput) : '';
  }

  /**
   * @param obj The object to check.
   * @returns The given object if it is both a time instance and valid, otherwise null.
   */
  private _getValidTimeOrNull(obj: any): T | null {
    return (this._timeAdapter.isTimeInstance(obj) && this._timeAdapter.isValid(obj)) ? obj : null;
  }
}
