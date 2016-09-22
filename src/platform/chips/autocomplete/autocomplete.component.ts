import { Component, Input, Output, forwardRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop: () => void = () => {
  // empty method
};

export const TD_AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdAutoCompleteComponent),
  multi: true,
};

@Component({
  providers: [ TD_AUTOCOMPLETE_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-autocomplete',
  styleUrls: [ 'autocomplete.component.scss' ],
  templateUrl: 'autocomplete.component.html',
})
export class TdAutoCompleteComponent implements ControlValueAccessor {

  private _value: any = '';
  /** Callback registered via registerOnTouched (ControlValueAccessor) */
  private _onTouchedCallback: () => void = noop;
  /** Callback registered via registerOnChange (ControlValueAccessor) */
  private _onChangeCallback: (_: any) => void = noop;

  listName: string = this.randomName();

  @Input('name') name: string;
  @Input('dividerColor') dividerColor: 'primary' | 'accent' | 'warn' = 'primary';
  @Input('placeholder') placeholder: string;
  @Input('searchItems') searchItems: string[] = [];
  @Input('readOnly') readOnly: boolean = false;
  @Input('required') required: boolean = false;
  @Input('disabled') disabled: boolean = false;
  @Input('autoFocus') autoFocus: boolean = false;
  @Input('max') max: string | number;
  @Input('maxLength') maxLength: number;
  @Input('min') min: string | number;
  @Input('minLength') minLength: number;

  get value(): any { return this._value; };
  @Input() set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
    }
  }

  @Output('itemSelect') itemSelect: EventEmitter<string> = new EventEmitter<string>();
  @Output('focus') focus: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output('blur') blur: EventEmitter<boolean> = new EventEmitter<boolean>();

  clear(): boolean {
    this.writeValue('');
    return true;
  }

  randomName(): string {
    let text: string = '';
    let possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i: number = 0; i < 7; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  handleItemSelect(): void {
    this.itemSelect.emit(this._value);
  }

  handleFocus(): void {
    this.focus.emit(true);
  }

  handleBlur(): void {
    this.blur.emit(false);
  }

  /**
   * Implemented as part of ControlValueAccessor.
   * TODO: internal
   */
  writeValue(value: any): void {
    this._value = value;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   * TODO: internal
   */
  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   * TODO: internal
   */
  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

}
