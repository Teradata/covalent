import { Component, Input, Output, forwardRef, DoCheck, ViewChild, ViewChildren, QueryList, OnInit, HostListener } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { MdChip, MdInputDirective, ESCAPE, LEFT_ARROW, RIGHT_ARROW, DELETE, BACKSPACE } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/debounceTime';

const noop: any = () => {
  // empty method
};

export const TD_CHIPS_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdChipsComponent),
  multi: true,
};

@Component({
  providers: [ TD_CHIPS_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-chips',
  styleUrls: ['./chips.component.scss' ],
  templateUrl: './chips.component.html',
})
export class TdChipsComponent implements ControlValueAccessor, DoCheck, OnInit {

  /**
   * Implemented as part of ControlValueAccessor.
   */
  private _value: any = [];

  private _length: number = 0;
  private _requireMatch: boolean = false;
  private _readOnly: boolean = false;
  private _chipAddition: boolean = true;

  @ViewChild(MdInputDirective) _inputChild: MdInputDirective;
  @ViewChildren(MdChip) _chipsChildren: QueryList<MdChip>;

  /**
   * Boolean value that specifies if the input is valid against the provieded list.
   */
  matches: boolean = true;
  /**
   * Flag that is true when autocomplete is focused.
   */
  focused: boolean = false;

  /**
   * FormControl for the mdInput element.
   */
  inputControl: FormControl = new FormControl();

  /**
   * Subject to control what items to render in the autocomplete
   */
  subject: Subject<string[]> = new Subject<string[]>();

  /**
   * Observable of items to render in the autocomplete
   */
  filteredItems: Observable<string[]> = this.subject.asObservable();

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
   * Disables the chips input and chip removal icon.
   */
  @Input('readOnly')
  set readOnly(readOnly: boolean) {
    this._readOnly = readOnly;
    this._toggleInput();
  }
  get readOnly(): boolean {
    return this._readOnly;
  }

  /**
   * chipAddition?: boolean
   * Disables the ability to add chips. If it doesn't exist chip addition defaults to true.
   * When setting readOnly as true, this will be overriden.
   */
  @Input('chipAddition')
  set chipAddition(chipAddition: boolean) {
    this._chipAddition = chipAddition;
    this._toggleInput();
  }
  get chipAddition(): boolean {
    return this._chipAddition;
  }

  /**
   * Checks if not in readOnly state and if chipAddition is set to 'true'
   * States if a chip can be added and if the input is available
   */
  get canAddChip(): boolean {
    return this.chipAddition && !this.readOnly;
  }

  /**
   * placeholder?: string
   * Placeholder for the autocomplete input.
   */
  @Input('placeholder') placeholder: string;

  /**
   * add?: function
   * Method to be executed when string is added as chip through the autocomplete.
   * Sends chip value as event.
   */
  @Output('add') add: EventEmitter<string> = new EventEmitter<string>();

  /**
   * remove?: function
   * Method to be executed when string is removed as chip with the "remove" button.
   * Sends chip value as event.
   */
  @Output('remove') remove: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Implemented as part of ControlValueAccessor.
   */
  @Input() set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._length = this._value ? this._value.length : 0;
      if (this._value) {
        this._filter(this.inputControl.value);
      }
    }
  }
  get value(): any { return this._value; }

  ngOnInit(): void {
    this.inputControl.valueChanges
      .debounceTime(100)
      .subscribe((value: string) => {
        this.matches = true;
        this._filter(value);
      });
    // filter the autocomplete options after everything is rendered
    Observable.timer().subscribe(() => {
      this._filter(this.inputControl.value);
    });
  }

  ngDoCheck(): void {
    // Throw onChange event only if array changes size.
    if (this._value && this._value.length !== this._length) {
      this._length = this._value.length;
      this.onChange(this._value);
    }
  }

  /**
   * Returns a list of filtered items.
   */
  filter(val: string): string[] {
    return this.items.filter((item: string) => {
      return val ? item.indexOf(val) > -1 : true;
    });
  }

  /**
   * Method that is executed when trying to create a new chip from the autocomplete.
   * returns 'true' if successful, 'false' if it fails.
   */
  addChip(value: string): boolean {
    if (value.trim() === '' || this._value.indexOf(value) > -1) {
      this.matches = false;
      return false;
    }
    if (this.items && this.requireMatch) {
      if (this.items.indexOf(value) < 0) {
        this.matches = false;
        return false;
      }
    }
    this._value.push(value);
    this.add.emit(value);
    this.onChange(this._value);
    this.inputControl.setValue('');
    this.matches = true;
    return true;
  }

  /**
   * Method that is executed when trying to remove a chip.
   * returns 'true' if successful, 'false' if it fails.
   */
  removeChip(value: string): boolean {
    let index: number = this._value.indexOf(value);
    if (index < 0) {
      return false;
    }
    this._value.splice(index, 1);
    this.remove.emit(value);
    this.onChange(this._value);
    this.inputControl.setValue('');
    return true;
  }

  handleFocus(): boolean {
    this.focused = true;
    return true;
  }

  handleBlur(): boolean {
    this.focused = false;
    this.matches = true;
    this.onTouched();
    return true;
  }

  /**
   * Programmatically focus the input. Since its the component entry point
   */
  focus(): void {
    if (this.canAddChip) {
      this._inputChild.focus();
    }
  }

  /**
   * Passes relevant input key presses.
   */
  _inputKeydown(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case LEFT_ARROW:
      case DELETE:
      case BACKSPACE:
        /** Check to see if input is empty when pressing left arrow to move to the last chip */
        if (!this._inputChild.value) {
          this._focusLastChip();
          event.preventDefault();
        }
        break;
      case RIGHT_ARROW:
        /** Check to see if input is empty when pressing right arrow to move to the first chip */
        if (!this._inputChild.value) {
          this._focusFirstChip();
          event.preventDefault();
        }
        break;
      default:
        // default
    }
  }

  /**
   * Passes relevant chip key presses.
   */
  _chipKeydown(event: KeyboardEvent, index: number): void {
    switch (event.keyCode) {
      case DELETE:
      case BACKSPACE:
        /** Check to see if not in [readOnly] state to delete a chip */
        if (!this.readOnly) {
          /**
           * Checks if deleting last single chip, to focus input afterwards
           * Else check if its not the last chip of the list to focus the next one.
           */
          if (index === (this._totalChips - 1) && index === 0) {
            this.focus();
          } else if (index < (this._totalChips - 1)) {
            this._focusChip(index + 1);
          }
          this.removeChip(this.value[index]);
        }
        break;
      case LEFT_ARROW:
        /**
         * Check to see if left arrow was pressed while focusing the first chip to focus input next
         * Also check if input should be focused
         */
        if (index === 0 && this.canAddChip) {
          this.focus();
          event.stopPropagation();
        }
        break;
      case RIGHT_ARROW:
        /**
         * Check to see if right arrow was pressed while focusing the last chip to focus input next
         * Also check if input should be focused
         */
        if (index === (this._totalChips - 1) && this.canAddChip) {
          this.focus();
          event.stopPropagation();
        }
        break;
      case ESCAPE:
        this.focus();
        break;
      default:
        // default
    }
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

  /**
   *
   * Method to filter the options for the autocomplete
   */
  private _filter(value: string): void {
    let items: string[] = this.filter(value);
    items = items.filter((filteredItem: string) => {
      return this._value && filteredItem ? this._value.indexOf(filteredItem) < 0 : true;
    });
    this.subject.next(items);
  }

  /**
   * Get total of chips
   */
  private get _totalChips(): number {
    let chips: MdChip[] = this._chipsChildren.toArray();
    return chips.length;
  }

  /**
   * Method to focus a desired chip by index
   */
  private _focusChip(index: number): void {
    /** check to see if index exists in the array before focusing */
    if (index > -1 && this._totalChips > index) {
      this._chipsChildren.toArray()[index].focus();
    }
  }

  /** Method to focus first chip */
  private _focusFirstChip(): void {
    this._focusChip(0);
  }

  /** Method to focus last chip */
  private _focusLastChip(): void {
    this._focusChip(this._totalChips - 1);
  }

  /**
   * Method to toggle the disable state of input
   * Checks if not in readOnly state and if chipAddition is set to 'true'
   */
  private _toggleInput(): void {
    if (this.canAddChip) {
      this.inputControl.enable();
    } else {
      this.inputControl.disable();
    }
  }
}
