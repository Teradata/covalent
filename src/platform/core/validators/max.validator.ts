import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { TdNumberRequiredValidator } from './number-required.validator';

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
    this._validator = TdMaxValidator.validate(max);
  }

  static validate(maxValue: any): ValidatorFn {
    return (c: AbstractControl): {[key: string]: any} => {
      if (!!Validators.required(c) || !!TdNumberRequiredValidator.validate(c) || (!maxValue && maxValue !== 0)) {
        return undefined;
      }
      let v: number = c.value;
      return v > maxValue ?
        { max: {maxValue: maxValue, actualValue: v} } :
        undefined;
    };
  };

  validate(c: AbstractControl): {[key: string]: any} {
    return this._validator(c);
  };
}
