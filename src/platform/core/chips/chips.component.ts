import { Component, Input, Output, forwardRef, DoCheck, ViewChild, ViewChildren, QueryList, OnInit, HostListener,
        Directive, TemplateRef, ViewContainerRef, ContentChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';
import { MdChip, MdInputDirective, TemplatePortalDirective, MdOption, MdAutocompleteTrigger, UP_ARROW, DOWN_ARROW,
         ESCAPE, LEFT_ARROW, RIGHT_ARROW, DELETE, BACKSPACE, ENTER, SPACE } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';

const noop: any = () => {
  // empty method
};

@Directive({
  selector: '[td-basic-chip]ng-template',
})
export class TdBasicChipDirective extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

@Directive({
  selector: '[td-autocomplete-option]ng-template',
})
export class TdAutocompleteOptionDirective extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdChipsComponent),
    multi: true,
  }],
  selector: 'td-chips',
  styleUrls: ['./chips.component.scss' ],
  templateUrl: './chips.component.html',
})
export class TdChipsComponent implements ControlValueAccessor, DoCheck, OnInit {

  /**
   * Implemented as part of ControlValueAccessor.
   */
  private _value: any[] = [];

  private _items: any[] = [];
  private _length: number = 0;
  private _requireMatch: boolean = false;
  private _readOnly: boolean = false;
  private _chipAddition: boolean = true;

  @ViewChild(MdInputDirective) _inputChild: MdInputDirective;
  @ViewChild(MdAutocompleteTrigger) _autocompleteTrigger: MdAutocompleteTrigger;
  @ViewChildren(MdChip) _chipsChildren: QueryList<MdChip>;

  @ContentChild(TdBasicChipDirective) _basicChipTemplate: TdBasicChipDirective;
  @ContentChild(TdAutocompleteOptionDirective) _autocompleteOptionTemplate: TdAutocompleteOptionDirective;

  @ViewChildren(MdOption) _options: QueryList<MdOption>;

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
  subject: Subject<any[]> = new Subject<any[]>();

  /**
   * Observable of items to render in the autocomplete
   */
  filteredItems: Observable<any[]> = this.subject.asObservable();

  /**
   * items?: any[]
   * Renders the `md-autocomplete` with the provided list to display as options.
   */
  @Input('items')
  set items(items: any[]) {
    this._items = items;
    if (this.subject) {
      this.subject.next(items);
    }
  }
  
  /**
   * requireMatch?: boolean
   * Blocks custom inputs and only allows selections from the autocomplete list.
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
   * Disables the ability to add chips. When setting readOnly as true, this will be overriden.
   * Defaults to true.
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
   * debounce?: number
   * Debounce timeout between keypresses. Defaults to 200.
   */
  @Input('debounce') debounce: number = 200;

  /**
   * add?: function
   * Method to be executed when a chip is added.
   * Sends chip value as event.
   */
  @Output('add') onAdd: EventEmitter<any> = new EventEmitter<any>();

  /**
   * remove?: function
   * Method to be executed when a chip is removed.
   * Sends chip value as event.
   */
  @Output('remove') onRemove: EventEmitter<any> = new EventEmitter<any>();

  /**
   * inputChange?: function
   * Method to be executed when the value in the autocomplete input changes.
   * Sends string value as event.
   */
  @Output('inputChange') onInputChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Implemented as part of ControlValueAccessor.
   */
  @Input() set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this._length = this._value ? this._value.length : 0;
    }
  }
  get value(): any { return this._value; }

  ngOnInit(): void {
    this.inputControl.valueChanges
      .debounceTime(this.debounce)
      .subscribe((value: string) => {
        this.onInputChange.emit(value);
      });
    // check when options change and set first one as active everytime items change
    this.subject.subscribe(() => {
      this._setFirstOptionActive();
    });
    // render the items that are available if available
    Observable.timer().subscribe(() => {
      this.subject.next(this._items);
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
   * Method that is executed when trying to create a new chip from the autocomplete.
   * It check if [requireMatch] is enabled, and tries to add the first active option
   * else if just adds the value thats on the input
   * returns 'true' if successful, 'false' if it fails.
   */
  handleAddChip(): boolean {
    if (this.requireMatch) {
      let selectedOptions: MdOption[] = this._options.toArray().filter((option: MdOption) => {
        return option.active;
      });
      let selectedValue: any;
      if (selectedOptions.length > 0) {
        selectedValue = selectedOptions[0].value;
      }
      if (!selectedValue) {
        return false;
      }
      this._openAutocomplete();
      return this.addChip(selectedValue);
    } else {
      let value: string = this._inputChild.value;
      if (value.trim() === '') {
        return false;
      }
      this._openAutocomplete();
      return this.addChip(value);
    }
  }

  /**
   * Method thats exectuted when trying to add a value as chip
   * returns 'true' if successful, 'false' if it fails.
   */
  addChip(value: any): boolean {
    this.inputControl.setValue('');
    this._value.push(value);
    this.onAdd.emit(value);
    this.onChange(this._value);
    return true;
  }

  /**
   * Method that is executed when trying to remove a chip.
   * returns 'true' if successful, 'false' if it fails.
   */
  removeChip(index: number): boolean {
    let removedValues: any[] = this._value.splice(index, 1);
    if (removedValues.length === 0) {
      return false;
    }
    this.onRemove.emit(removedValues[0]);
    this.onChange(this._value);
    this.inputControl.setValue('');
    return true;
  }

  handleFocus(): boolean {
    this._setFirstOptionActive();
    this.focused = true;
    return true;
  }

  handleBlur(): boolean {
    this.focused = false;
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
      case UP_ARROW:
        /** 
         * Since the first item is highlighted on [requireMatch], we need to inactivate it
         * when pressing the up key
         */
        if (this.requireMatch) {
          let length: number = this._options.length;
          if (length > 0 && this._options.toArray()[0].active) {
            this._options.toArray()[0].setInactiveStyles();
            event.preventDefault();
          }
        }
        break;
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
          this.removeChip(index);
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
   * Method to remove from display the value added from the autocomplete since it goes directly as chip.
   */
  _removeInputDisplay(): string {
    return '';
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

  /**
   * Method to open the autocomplete manually if its not already opened
   */
  private _openAutocomplete(): void {
    if (!this._autocompleteTrigger.panelOpen) {
      this._autocompleteTrigger.openPanel();
    }
  }

  /**
   * Sets first option as active to let the user know which one will be added when pressing enter
   * Only if [requireMatch] has been set
   */
  private _setFirstOptionActive(): void {
    if (this.requireMatch) {
      // need to use a timer here to wait until the autocomplete has been opened (end of queue)
      Observable.timer().toPromise().then(() => {
        if (this.focused && this._options && this._options.length > 0) {
          // clean up of previously active options
          this._options.toArray().forEach((option: MdOption) => {
            option.setInactiveStyles();
          });
          // set the first one as active
          this._options.toArray()[0].setActiveStyles();
        }
      });
    }
  }
}
