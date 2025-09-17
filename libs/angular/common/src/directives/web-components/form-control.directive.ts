/* eslint-disable @angular-eslint/directive-selector */
import {
  DestroyRef,
  Directive,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Directive({
  selector: `cv-textfield[formControl],
     cv-textarea[formControl],
     cv-select[formControl],
     cv-checkbox[formControl],
     cv-checkbox-icon[formControl],
     cv-radio[formControl], 
     cv-radio-icon[formControl],
     cv-textfield[formControlName],
     cv-textarea[formControlName],
     cv-select[formControlName],
     cv-checkbox[formControlName],
     cv-checkbox-icon[formControlName],
     cv-radio[formControlName], 
     cv-radio-icon[formControlName],`,
})
export class CovalentTextfieldValueAccessorDirective
  implements ControlValueAccessor, OnInit
{
  private _onChange: (value: any) => void = () => {
    /* noop */
  };
  private _onTouched: () => void = () => {
    /* noop */
  };

  constructor(
    private _elementRef: ElementRef<any>,
    public _ngControl: NgControl,
    private _destroyRef: DestroyRef,
  ) {
    _ngControl.valueAccessor = this;
  }

  ngOnInit(): void {
    // Set up a subscription to monitor status changes
    if (this._ngControl.control) {
      this._ngControl.control.statusChanges
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe(() => {
          this._onTouched();
          this._updateValidity();
        });
    }
  }

  writeValue(value: string): void {
    if (this._isCheckBox()) {
      this._elementRef.nativeElement.value = value || '';
      this._elementRef.nativeElement.checked =
        this._elementRef.nativeElement.value === value;
    } else if (this._isRadio()) {
      this._elementRef.nativeElement.checked =
        this._elementRef.nativeElement.value === value;
    } else {
      this._elementRef.nativeElement.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  @HostListener('input')
  handleInput(): void {
    if (!this._isTextAreaOrField()) {
      return;
    }

    const value = this._elementRef.nativeElement.value;
    this._onChange(value);
    this._onTouched();
    this._updateValidity();
  }

  @HostListener('change', ['$event'])
  handleChange(event: Event): void {
    const value = this._isCheckBox()
      ? this._elementRef.nativeElement.checked
      : this._elementRef.nativeElement.value;

    this._onChange(value);
    this._onTouched();
    this._updateValidity();
  }

  @HostListener('blur')
  handleBlur(): void {
    this._onTouched();
  }

  // Optional: If you need to handle disabled states
  setDisabledState(isDisabled: boolean): void {
    this._elementRef.nativeElement.disabled = isDisabled;
  }

  private _isCheckBox() {
    const tagName = this._elementRef.nativeElement.tagName.toLowerCase();
    return tagName === 'cv-checkbox' || tagName === 'cv-checkbox-icon';
  }

  private _isRadio() {
    const tagName = this._elementRef.nativeElement.tagName.toLowerCase();
    return tagName === 'cv-radio' || tagName === 'cv-radio-icon';
  }

  private _isTextAreaOrField() {
    const tagName = this._elementRef.nativeElement.tagName.toLowerCase();
    return tagName === 'cv-textarea' || tagName === 'cv-textfield';
  }

  private _updateValidity(): void {
    const element = this._elementRef.nativeElement;
    const control = this._ngControl.control;

    if (this._isCheckBox() || this._isRadio()) {
      return;
    }

    if (control?.errors) {
      // Get the first validation error key (e.g., 'required', 'minlength')
      element.validityTransform = () => {
        return {
          valid: !control.invalid,
        };
      };
    }

    // Set the web component's custom validity message
    element.reportValidity();
  }
}
