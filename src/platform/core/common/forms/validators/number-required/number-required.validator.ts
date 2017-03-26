import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { CovalentValidators } from '../validators';

export const NUMBER_INPUT_REQUIRED_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => TdNumberRequiredValidator),
  multi: true,
};

@Directive({
  selector: `[type=number][required][formControlName],
             [type=number][required][formControl],
             [type=number][required][ngModel]`,
  providers: [ NUMBER_INPUT_REQUIRED_VALIDATOR ],
})
export class TdNumberRequiredValidator implements Validator {

  static validate(c: AbstractControl): {[key: string]: any} {
    return CovalentValidators.numberRequired(c);
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return TdNumberRequiredValidator.validate(c);
  }
}
