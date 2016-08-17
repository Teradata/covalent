import { Component, Input, Output, forwardRef, DoCheck } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop: any = () => {
  // empty method
};

export const TD_CHIPS_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdChipsComponent),
  multi: true,
};

import { MdIcon } from '@angular2-material/icon';
import { TdAutoCompleteComponent } from './autocomplete/autocomplete.component';
import { TdChipComponent } from './chip.component';

@Component({
  directives: [
    MdIcon,
    TdAutoCompleteComponent,
    TdChipComponent,
  ],
  providers: [ TD_CHIPS_CONTROL_VALUE_ACCESSOR ],
  moduleId: module.id,
  selector: 'td-chips',
  styleUrls: [ 'chips.component.css' ],
  templateUrl: 'chips.component.html',
})
export class TdChipsComponent implements ControlValueAccessor, DoCheck {

  /**
   * Implemented as part of ControlValueAccessor.
   */
  private _value: any = [];
  private _length: number = 0;
  private _requireMatch: boolean = false;

  matches: boolean = true;

  @Input('items') items: string[] = [];
  @Input('requireMatch')
  set requireMatch(requireMatch: any) {
    this._requireMatch = requireMatch !== '' ? (requireMatch === 'true' || requireMatch === true) : true;
  }
  get requireMatch(): any {
    return this._requireMatch;
  }
  @Input('readOnly') readOnly: boolean = false;

  @Output('add') add: EventEmitter<string> = new EventEmitter<string>();
  @Output('remove') remove: EventEmitter<string> = new EventEmitter<string>();

  get value(): any { return this._value; };
  @Input() set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._length = this._value ? this._value.length : 0;
    }
  }

  ngDoCheck(): void {
    if (this._value && this._value.length !== this._length) {
      this._length = this._value.length;
      this.onChange(this._value);
    }
  }

  get filteredItems(): string[] {
    if (!this._value) {
      return [];
    }
    return this.items.filter((item: string) => {
      return this._value.indexOf(item) < 0;
    });
  }

  addItem(value: string): boolean {
    if (value.trim() === '' || this._value.indexOf(value) > -1) {
      return false;
    }
    if (this.items && this.requireMatch) {
      if (this.items.indexOf(value) < 0) {
        return false;
      }
    }
    this._value.push(value);
    this.add.emit(value);
    this.onChange(this._value);
    return true;
  }

  removeItem(value: string): boolean {
    let index: number = this._value.indexOf(value);
    if (index < 0) {
      return false;
    }
    this._value.splice(index, 1);
    this.remove.emit(value);
    this.onChange(this._value);
    return true;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  onChange = (_: any) => noop;

  /**
   * Implemented as part of ControlValueAccessor.
   */
  onTouched = () => noop;

}
