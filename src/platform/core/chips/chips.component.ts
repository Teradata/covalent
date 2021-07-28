import {
  Component,
  Input,
  Output,
  forwardRef,
  DoCheck,
  ViewChild,
  ViewChildren,
  QueryList,
  OnInit,
  HostListener,
  ElementRef,
  Optional,
  Inject,
  Directive,
  TemplateRef,
  ViewContainerRef,
  ContentChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  AfterViewInit,
  OnDestroy,
  HostBinding,
  Renderer2,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { TemplatePortalDirective } from '@angular/cdk/portal';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  UP_ARROW,
  DOWN_ARROW,
  ESCAPE,
  LEFT_ARROW,
  RIGHT_ARROW,
  DELETE,
  BACKSPACE,
  ENTER,
  SPACE,
  TAB,
  HOME,
} from '@angular/cdk/keycodes';
import { MatChip } from '@angular/material/chips';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';

import { Observable, Subscription, timer, merge, fromEvent } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

import { ICanDisable, mixinDisabled, IControlValueAccessor, mixinControlValueAccessor } from '@covalent/core/common';

@Directive({
  selector: '[td-chip]ng-template',
})
export class TdChipDirective extends TemplatePortalDirective {
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

export class TdChipsBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdChipsMixinBase = mixinControlValueAccessor(mixinDisabled(TdChipsBase), []);

@Component({
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TdChipsComponent),
      multi: true,
    },
  ],
  selector: 'td-chips',
  inputs: ['disabled', 'value'],
  styleUrls: ['./chips.component.scss'],
  templateUrl: './chips.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdChipsComponent extends _TdChipsMixinBase
  implements IControlValueAccessor, DoCheck, OnInit, AfterViewInit, OnDestroy, ICanDisable {
  private _outsideClickSubs: Subscription = Subscription.EMPTY;
  private _inputValueChangesSubs: Subscription = Subscription.EMPTY;
  private _isMousedown: boolean = false;

  private _items: any[];
  private _length: number = 0;
  private _stacked: boolean = false;
  private _requireMatch: boolean = false;
  private _color: 'primary' | 'accent' | 'warn' = 'primary';
  private _inputPosition: 'before' | 'after' = 'after';
  private _chipAddition: boolean = true;
  private _chipRemoval: boolean = true;
  private _focused: boolean = false;
  private _required: boolean = false;
  private _tabIndex: number = 0;
  private _touchendDebounce: number = 100;

  _internalClick: boolean = false;
  _internalActivateOption: boolean = false;

  @ViewChild('input', { static: true }) _nativeInput: ElementRef;
  @ViewChild(MatInput, { static: true }) _inputChild: MatInput;
  @ViewChild(MatAutocompleteTrigger, { static: true }) _autocompleteTrigger: MatAutocompleteTrigger;
  @ViewChildren(MatChip) _chipsChildren: QueryList<MatChip>;

  @ContentChild(TdChipDirective) _chipTemplate: TdChipDirective;
  @ContentChild(TdAutocompleteOptionDirective)
  _autocompleteOptionTemplate: TdAutocompleteOptionDirective;

  @ViewChildren(MatOption) _options: QueryList<MatOption>;

  /**
   * Flag that is true when autocomplete is focused.
   */
  get focused(): boolean {
    return this._focused;
  }

  /**
   * FormControl for the matInput element.
   */
  inputControl: FormControl = new FormControl();

  /**
   * items?: any[]
   * Renders the `mat-autocomplete` with the provided list to display as options.
   */
  @Input('items')
  set items(items: any[]) {
    this._items = items;
    this._setFirstOptionActive();
    this._changeDetectorRef.markForCheck();
  }
  get items(): any[] {
    return this._items;
  }

  /**
   * stacked?: boolean
   * Set stacked or horizontal chips depending on value.
   * Defaults to false.
   */
  @Input('stacked')
  set stacked(stacked: boolean) {
    this._stacked = coerceBooleanProperty(stacked);
  }
  get stacked(): boolean {
    return this._stacked;
  }

  /**
   * inputPosition?: 'before' | 'after'
   * Set input position before or after the chips.
   * Defaults to 'after'.
   */
  @Input('inputPosition')
  set inputPosition(inputPosition: 'before' | 'after') {
    this._inputPosition = inputPosition;
  }
  get inputPosition(): 'before' | 'after' {
    return this._inputPosition;
  }

  /**
   * requireMatch?: boolean
   * Blocks custom inputs and only allows selections from the autocomplete list.
   */
  @Input('requireMatch')
  set requireMatch(requireMatch: boolean) {
    this._requireMatch = coerceBooleanProperty(requireMatch);
  }
  get requireMatch(): boolean {
    return this._requireMatch;
  }

  /**
   * required?: boolean
   * Value is set to true if at least one chip is needed
   * Defaults to false
   */
  @Input('required')
  set required(required: boolean) {
    this._required = coerceBooleanProperty(required);
  }
  get required(): boolean {
    return this._required;
  }

  /**
   * chipAddition?: boolean
   * Disables the ability to add chips. When setting disabled as true, this will be overriden.
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
   * Checks if not in disabled state and if chipAddition is set to 'true'
   * States if a chip can be added and if the input is available
   */
  get canAddChip(): boolean {
    return this.chipAddition && !this.disabled;
  }

  /**
   * chipRemoval?: boolean
   * Disables the ability to remove chips. If it doesn't exist chip remmoval defaults to true.
   * When setting disabled as true, this will be overriden to false.
   */
  @Input('chipRemoval')
  set chipRemoval(chipRemoval: boolean) {
    this._chipRemoval = chipRemoval;
  }
  get chipRemoval(): boolean {
    return this._chipRemoval;
  }

  /**
   * Checks if not in disabled state and if chipRemoval is set to 'true'
   * States if a chip can be removed
   */
  get canRemoveChip(): boolean {
    return this.chipRemoval && !this.disabled;
  }

  /**
   * returns the display placeholder
   */
  get displayPlaceHolder(): string {
    if (!this.canAddChip) {
      return '';
    }
    return this._required ? `${this.placeholder} *` : this.placeholder;
  }

  /**
   * placeholder?: string
   * Placeholder for the autocomplete input.
   */
  @Input() placeholder: string;

  /**
   * debounce?: number
   * Debounce timeout between keypresses. Defaults to 200.
   */
  @Input() debounce: number = 200;

  /**
   * color?: 'primary' | 'accent' | 'warn'
   * Sets the color for the input and focus/selected state of the chips.
   * Defaults to 'primary'
   */
  @Input('color')
  set color(color: 'primary' | 'accent' | 'warn') {
    if (color) {
      this._renderer.removeClass(this._elementRef.nativeElement, 'mat-' + this._color);
      this._color = color;
      this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
    }
  }
  get color(): 'primary' | 'accent' | 'warn' {
    return this._color;
  }

  /**
   * add?: function
   * Method to be executed when a chip is added.
   * Sends chip value as event.
   */
  @Output() add: EventEmitter<any> = new EventEmitter<any>();

  /**
   * remove?: function
   * Method to be executed when a chip is removed.
   * Sends chip value as event.
   */
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();

  /**
   * inputChange?: function
   * Method to be executed when the value in the autocomplete input changes.
   * Sends string value as event.
   */
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * chipFocus?: function
   * Method to be executed when a chip is focused.
   * Sends chip value as event.
   */
  @Output() chipFocus: EventEmitter<any> = new EventEmitter<any>();

  /**
   * blur?: function
   * Method to be executed when a chip is blurred.
   * Sends chip value as event.
   */
  @Output() chipBlur: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Hostbinding to set the a11y of the TdChipsComponent depending on its state
   */
  @HostBinding('attr.tabindex')
  get tabIndex(): number {
    return this.disabled ? -1 : this._tabIndex;
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    @Optional() @Inject(DOCUMENT) private _document: any,
    _changeDetectorRef: ChangeDetectorRef,
  ) {
    super(_changeDetectorRef);
    this._renderer.addClass(this._elementRef.nativeElement, 'mat-' + this._color);
  }

  /**
   * compareWith? function
   * Function used to check whether a chip value already exists.
   * Defaults to strict equality comparison ===
   */
  @Input() compareWith: (o1: any, o2: any) => boolean = (o1: any, o2: any) => {
    return o1 === o2;
  };

  /**
   * Listens to host focus event to act on it
   */
  @HostListener('focus', ['$event'])
  focusListener(event: FocusEvent): void {
    // should only focus if its not via mousedown to prevent clashing with autocomplete
    if (!this._isMousedown) {
      this.focus();
    }
    event.preventDefault();
  }

  /**
   * Listens to host mousedown event to act on it
   */
  @HostListener('mousedown', ['$event'])
  mousedownListener(event: FocusEvent): void {
    // sets a flag to know if there was a mousedown and then it returns it back to false
    this._isMousedown = true;
    timer()
      .toPromise()
      .then(() => {
        this._isMousedown = false;
      });
  }

  /**
   * If clicking on :host or `td-chips-wrapper`, then we stop the click propagation so the autocomplete
   * doesnt close automatically.
   */
  @HostListener('click', ['$event'])
  clickListener(event: Event): void {
    const clickTarget: HTMLElement = <HTMLElement>event.target;
    if (clickTarget === this._elementRef.nativeElement || clickTarget.className.indexOf('td-chips-wrapper') > -1) {
      this.focus();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /**
   * Listens to host keydown event to act on it depending on the keypress
   */
  @HostListener('keydown', ['$event'])
  keydownListener(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case TAB:
        // if tabing out, then unfocus the component
        timer()
          .toPromise()
          .then(() => {
            this.removeFocusedState();
          });
        break;
      case ESCAPE:
        if (this._inputChild.focused) {
          this._nativeInput.nativeElement.blur();
          this.removeFocusedState();
          this._closeAutocomplete();
        } else {
          this.focus();
        }
        break;
      default:
      // default
    }
  }

  ngOnInit(): void {
    this._inputValueChangesSubs = this.inputControl.valueChanges
      .pipe(debounceTime(this.debounce))
      .subscribe((value: string) => {
        this.inputChange.emit(value ? value : '');
      });
    this._changeDetectorRef.markForCheck();
  }

  ngAfterViewInit(): void {
    this._watchOutsideClick();
    this._changeDetectorRef.markForCheck();
  }

  ngDoCheck(): void {
    // Throw onChange event only if array changes size.
    if (this.value && this.value.length !== this._length) {
      this._length = this.value.length;
      this.onChange(this.value);
    }
  }

  ngOnDestroy(): void {
    this._outsideClickSubs.unsubscribe();
    this._inputValueChangesSubs.unsubscribe();
  }

  _setInternalClick(): void {
    this._internalClick = true;
  }

  /** Method executed when the disabled value changes */
  onDisabledChange(v: boolean): void {
    this._toggleInput();
  }

  /**
   * Method that is executed when trying to create a new chip from the autocomplete.
   * It check if [requireMatch] is enabled, and tries to add the first active option
   * else if just adds the value thats on the input
   * returns 'true' if successful, 'false' if it fails.
   */
  _handleAddChip(): boolean {
    let value: any;
    if (this.requireMatch) {
      const selectedOptions: MatOption[] = this._options.toArray().filter((option: MatOption) => {
        return option.active;
      });
      if (selectedOptions.length > 0) {
        value = selectedOptions[0].value;
        selectedOptions[0].setInactiveStyles();
      }
      if (!value) {
        return false;
      }
    } else {
      // if there is a selection, then use that
      // else use the input value as chip
      if (this._autocompleteTrigger.activeOption) {
        value = this._autocompleteTrigger.activeOption.value;
        this._autocompleteTrigger.activeOption.setInactiveStyles();
      } else {
        value = this._inputChild.value;
        if (value.trim() === '') {
          return false;
        }
      }
    }
    return this.addChip(value);
  }

  /**
   * Method thats exectuted when trying to add a value as chip
   * returns 'true' if successful, 'false' if it fails.
   */
  addChip(value: any): boolean {
    /**
     * add a debounce ms delay when reopening the autocomplete to give it time
     * to rerender the next list and at the correct spot
     */

    this._closeAutocomplete();
    timer(this.debounce)
      .toPromise()
      .then(() => {
        this.setFocusedState();
        this._setFirstOptionActive();
        this._openAutocomplete();
      });

    this.inputControl.setValue('');
    // check if value is already part of the model
    if (this.value.findIndex((item: any) => this.compareWith(item, value)) > -1) {
      return false;
    }

    this.value.push(value);
    this.add.emit(value);
    this.onChange(this.value);
    this._changeDetectorRef.markForCheck();
    return true;
  }

  /**
   * Method that is executed when trying to remove a chip.
   * returns 'true' if successful, 'false' if it fails.
   */
  removeChip(index: number): boolean {
    const removedValues: any[] = this.value.splice(index, 1);
    if (removedValues.length === 0) {
      return false;
    }

    /**
     * Checks if deleting last single chip, to focus input afterwards
     * Else check if its not the last chip of the list to focus the next one.
     */
    if (index === this._totalChips - 1 && index === 0) {
      this._inputChild.focus();
    } else if (index < this._totalChips - 1) {
      this._focusChip(index + 1);
    } else if (index > 0) {
      this._focusChip(index - 1);
    }

    this.remove.emit(removedValues[0]);
    this.onChange(this.value);
    this.inputControl.setValue('');
    this._changeDetectorRef.markForCheck();
    return true;
  }

  /**
   * Sets blur of chip and sends out event
   */
  _handleChipBlur(event: FocusEvent, value: any): void {
    this.chipBlur.emit(value);
  }

  /**
   * Sets focus of chip and sends out event
   */
  _handleChipFocus(event: FocusEvent, value: any): void {
    this.setFocusedState();
    this.chipFocus.emit(value);
  }

  _handleFocus(): boolean {
    this.setFocusedState();
    this._setFirstOptionActive();
    return true;
  }

  /**
   * Sets focus state of the component
   */
  setFocusedState(): void {
    if (!this.disabled) {
      this._focused = true;
      this._tabIndex = -1;
      this._changeDetectorRef.markForCheck();
    }
  }

  /**
   * Removes focus state of the component
   */
  removeFocusedState(): void {
    this._focused = false;
    this._tabIndex = 0;
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Programmatically focus the input or first chip. Since its the component entry point
   * depending if a user can add or remove chips
   */
  focus(): void {
    if (this.canAddChip) {
      this._inputChild.focus();
    } else if (!this.disabled) {
      this._focusFirstChip();
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
          const length: number = this._options.length;
          if (length > 1 && this._options.toArray()[0].active && this._internalActivateOption) {
            this._options.toArray()[0].setInactiveStyles();
            this._internalActivateOption = false;
            // prevent default window scrolling
            event.preventDefault();
          }
        }
        break;
      case LEFT_ARROW:
      case DELETE:
      case BACKSPACE:
        this._closeAutocomplete();
        /** Check to see if input is empty when pressing left arrow to move to the last chip */
        if (!this._inputChild.value) {
          this._focusLastChip();
          // prevent default window scrolling
          event.preventDefault();
        }
        break;
      case RIGHT_ARROW:
        this._closeAutocomplete();
        /** Check to see if input is empty when pressing right arrow to move to the first chip */
        if (!this._inputChild.value) {
          this._focusFirstChip();
          // prevent default window scrolling
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
        /** Check to see if we can delete a chip */
        if (this.canRemoveChip) {
          this.removeChip(index);
        }
        break;
      case UP_ARROW:
      case LEFT_ARROW:
        /**
         * Check to see if left/down arrow was pressed while focusing the first chip to focus input next
         * Also check if input should be focused
         */
        if (index === 0) {
          // only try to target input if pressing left
          if (this.canAddChip && event.keyCode === LEFT_ARROW) {
            this._inputChild.focus();
          } else {
            this._focusLastChip();
          }
        } else if (index > 0) {
          this._focusChip(index - 1);
        }
        // prevent default window scrolling
        event.preventDefault();
        break;
      case DOWN_ARROW:
      case RIGHT_ARROW:
        /**
         * Check to see if right/up arrow was pressed while focusing the last chip to focus input next
         * Also check if input should be focused
         */
        if (index === this._totalChips - 1) {
          // only try to target input if pressing right
          if (this.canAddChip && event.keyCode === RIGHT_ARROW) {
            this._inputChild.focus();
          } else {
            this._focusFirstChip();
          }
        } else if (index < this._totalChips - 1) {
          this._focusChip(index + 1);
        }
        // prevent default window scrolling
        event.preventDefault();
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
   * Method to open the autocomplete manually if its not already opened
   */
  _openAutocomplete(): void {
    if (!this._autocompleteTrigger.panelOpen) {
      this._autocompleteTrigger.openPanel();
      this._changeDetectorRef.markForCheck();
    }
  }

  /**
   * Method to close the autocomplete manually if its not already closed
   */
  _closeAutocomplete(): void {
    if (this._autocompleteTrigger.panelOpen) {
      this._autocompleteTrigger.closePanel();
      this._changeDetectorRef.markForCheck();
    }
  }

  /**
   * Get total of chips
   */
  get _totalChips(): number {
    const chips: MatChip[] = this._chipsChildren.toArray();
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
   * Checks if not in disabled state and if chipAddition is set to 'true'
   */
  private _toggleInput(): void {
    if (this.canAddChip) {
      this.inputControl.enable();
    } else {
      this.inputControl.disable();
    }
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Sets first option as active to let the user know which one will be added when pressing enter
   * Only if [requireMatch] has been set
   */
  private _setFirstOptionActive(): void {
    if (this.requireMatch) {
      // need to use a timer here to wait until the autocomplete has been opened (end of queue)
      timer()
        .toPromise()
        .then(() => {
          if (this.focused && this._options && this._options.length > 0) {
            // clean up of previously active options
            this._options.toArray().forEach((option: MatOption) => {
              option.setInactiveStyles();
            });
            // set the first one as active
            this._options.toArray()[0].setActiveStyles();
            this._internalActivateOption = true;
            this._changeDetectorRef.markForCheck();
          }
        });
    }
  }

  /**
   * Watches clicks outside of the component to remove the focus
   * The autocomplete panel is considered inside the component so we
   * need to use a flag to find out when its clicked.
   */
  private _watchOutsideClick(): void {
    if (this._document) {
      this._outsideClickSubs = merge(fromEvent(this._document, 'click'), fromEvent(this._document, 'touchend'))
        .pipe(
          debounceTime(this._touchendDebounce),
          filter((event: MouseEvent) => {
            const clickTarget: HTMLElement = <HTMLElement>event.target;
            setTimeout(() => {
              this._internalClick = false;
            });
            return (
              this.focused &&
              clickTarget !== this._elementRef.nativeElement &&
              !this._elementRef.nativeElement.contains(clickTarget) &&
              !this._internalClick
            );
          }),
        )
        .subscribe(() => {
          if (this.focused) {
            this._autocompleteTrigger.closePanel();
            this.removeFocusedState();
            this.onTouched();
            this._changeDetectorRef.markForCheck();
          }
        });
    }
    return undefined;
  }
}
