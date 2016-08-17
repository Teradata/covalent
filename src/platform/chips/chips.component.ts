import { Component, Input, Output, forwardRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const noop: () => void = () => {
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
export class TdChipsComponent implements ControlValueAccessor {

  private _value: any = [];
  /** Callback registered via registerOnTouched (ControlValueAccessor) */
  private _onTouchedCallback: () => void = noop;
  /** Callback registered via registerOnChange (ControlValueAccessor) */
  private _onChangeCallback: (_: any) => void = noop;

  matches: boolean = true;

  @Input('searchItems') searchItems: string[] = [];
  @Input('requireMatch') requireMatch: boolean = false;
  @Input('readOnly') readOnly: boolean = false;

  @Output('add') add: EventEmitter<string> = new EventEmitter<string>();
  @Output('remove') remove: EventEmitter<string> = new EventEmitter<string>();

  get value(): any { return this._value; };
  @Input() set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._onChangeCallback(v);
    }
  }

  get filteredSearchItems(): string[] {
    return this.searchItems.filter((item: string) => {
      return this._value.indexOf(item) < 0;
    });
  }

  isEmpty(value: string): boolean {
    if (value.length === 0) {
      return true;
    }
    return false;
  }

  addItem(value: string): boolean {
    if (value.trim() === '' || this._value.indexOf(value) > -1) {
      return false;
    }
    if (this.searchItems && this.requireMatch) {
      if (this.searchItems.indexOf(value) < 0) {
        return false;
      }
    }
    this._value.push(value);
    this.add.emit(value);
    return true;
  }

  removeItem(value: string): boolean {
    let index: number = this._value.indexOf(value);
    if (index < 0) {
      return false;
    }
    this._value.splice(index, 1);
    this.remove.emit(value);
    return true;
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
