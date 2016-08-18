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

  /**
   * Boolean value that specifies if the input is valid against the provieded list.
   */
  matches: boolean = true;
  /**
   * Flag that is true when autocomplete is focused.
   */
  focused: boolean = false;

  /**
   * items?: string[]
   * Enables Autocompletion with the provided list of strings.
   */
  @Input('items') items: string[] = [];

  /**
   * requireMatch?: boolean
   * Validates input against the provided list before adding it to the model.
   * If it doesnt exist, it cancels the event.
   */
  @Input('requireMatch')
  set requireMatch(requireMatch: any) {
    this._requireMatch = requireMatch !== '' ? (requireMatch === 'true' || requireMatch === true) : true;
  }
  get requireMatch(): any {
    return this._requireMatch;
  }

  /**
   * readOnly?: boolean
   * Disables the chip input and removal.
   */
  @Input('readOnly') readOnly: boolean = false;

  /**
   * add?: function
   * Method to be executed when item is added as chip through the autocomplete.
   */
  @Output('add') add: EventEmitter<string> = new EventEmitter<string>();

  /**
   * add?: function
   * Method to be executed when item is removed as chip with the "remove" button.
   */
  @Output('remove') remove: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Implemented as part of ControlValueAccessor.
   */
  @Input() set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._length = this._value ? this._value.length : 0;
    }
  }
  get value(): any { return this._value; };

  ngDoCheck(): void {
    // Throw onChange event only if array changes size.
    if (this._value && this._value.length !== this._length) {
      this._length = this._value.length;
      this.onChange(this._value);
    }
  }

  /**
   * Returns a list of filtered items.
   * Removes the ones that have been added as value.
   */
  get filteredItems(): string[] {
    if (!this._value) {
      return [];
    }
    return this.items.filter((item: string) => {
      return this._value.indexOf(item) < 0;
    });
  }

  /**
   * Method that is executed when trying to create a new chip from the autocomplete.
   * returns 'true' if successful, 'false' if it fails.
   */
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

  /**
   * Method that is executed when trying to remove a chip.
   * returns 'true' if successful, 'false' if it fails.
   */
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

  handleFocus(): boolean {
    this.focused = true;
    return true;
  }

  handleBlur(): boolean {
    this.focused = false;
    this.onTouched();
    return true;
  }

  /**
   * Implemented as part of ControlValueAccessor.
   */
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onChange = (_: any) => noop;
  onTouched = () => noop;

}
