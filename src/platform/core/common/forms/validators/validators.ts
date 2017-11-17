import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';

export class CovalentValidators {
  static min(minValue: any): (c: AbstractControl) => {[key: string]: any} | undefined {
    let func = (c: AbstractControl): {[key: string]: any} | undefined => {
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

  static max(maxValue: any): (c: AbstractControl) => {[key: string]: any} | undefined {
    let func = (c: AbstractControl): {[key: string]: any} | undefined => {
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

  static numberRequired(c: AbstractControl): {[key: string]: any} | undefined {
    return (Number.isNaN(c.value)) ?
        { required: true } :
        undefined;
  }

}
