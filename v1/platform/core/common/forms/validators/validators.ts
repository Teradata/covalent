import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';

export class CovalentValidators {
  static min(minValue: any): ValidatorFn {
    let func: ValidatorFn = (c: AbstractControl): {[key: string]: any} => {
      if (!!Validators.required(c) || (!minValue && minValue !== 0)) {
        return undefined;
      }
      let v: number = c.value;
      return v < minValue ?
        { min: {minValue: minValue, actualValue: v} } :
        undefined;
    };
    return func;
  }

  static max(maxValue: any): ValidatorFn {
    let func: ValidatorFn = (c: AbstractControl): {[key: string]: any} => {
      if (!!Validators.required(c) || (!maxValue && maxValue !== 0)) {
        return undefined;
      }
      let v: number = c.value;
      return v > maxValue ?
        { max: {maxValue: maxValue, actualValue: v} } :
        undefined;
    };
    return func;
  }

  static numberRequired(c: AbstractControl): {[key: string]: any} {
    return (Number.isNaN(c.value)) ?
        { required: true } :
        undefined;
  }

}
