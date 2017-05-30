import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { CovalentValidators } from '../validators';

export const MAX_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => TdMaxValidator),
  multi: true,
};

@Directive({
  selector: '[max][formControlName],[max][formControl],[max][ngModel]',
  providers: [ MAX_VALIDATOR ],
})
export class TdMaxValidator implements Validator {

  private _validator: ValidatorFn;

  @Input('max')
  set max(max: number) {
    this._validator = CovalentValidators.max(max);
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this._validator(c);
  }
}
