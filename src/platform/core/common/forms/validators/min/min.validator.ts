import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { CovalentValidators } from '../validators';

export const MIN_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => TdMinValidator),
  multi: true,
};

@Directive({
  selector: '[min][formControlName],[min][formControl],[min][ngModel]',
  providers: [ MIN_VALIDATOR ],
})
export class TdMinValidator implements Validator {

  private _validator: ValidatorFn;

  @Input('min')
  set min(min: number) {
    this._validator = CovalentValidators.min(min);
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this._validator(c);
  }
}
