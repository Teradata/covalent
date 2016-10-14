import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { TdNumberRequiredValidator } from './number-required.validator';

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
    this._validator = TdMinValidator.validate(min);
  }

  static validate(minValue: any): ValidatorFn {
    return (c: AbstractControl): {[key: string]: any} => {
      if (!!Validators.required(c) || !!TdNumberRequiredValidator.validate(c) || (!minValue && minValue !== 0)) {
        return undefined;
      }
      let v: number = c.value;
      return v < minValue ?
        { min: {minValue: minValue, actualValue: v} } :
        undefined;
    };
  };

  validate(c: AbstractControl): {[key: string]: any} {
    return this._validator(c);
  };
}
