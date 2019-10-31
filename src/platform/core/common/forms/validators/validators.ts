import { Validators, AbstractControl, ValidatorFn } from '@angular/forms';

export class CovalentValidators {
  static min(minValue: any): ValidatorFn {
    return (c: AbstractControl): { [key: string]: any } => {
      if (!!Validators.required(c) || (!minValue && minValue !== 0)) {
        return undefined;
      }
      const v: number = c.value;
      return v < minValue ? { min: { minValue, actualValue: v } } : undefined;
    };
  }

  static max(maxValue: any): ValidatorFn {
    return (c: AbstractControl): { [key: string]: any } => {
      if (!!Validators.required(c) || (!maxValue && maxValue !== 0)) {
        return undefined;
      }
      const v: number = c.value;
      return v > maxValue ? { max: { maxValue, actualValue: v } } : undefined;
    };
  }

  static numberRequired(c: AbstractControl): { [key: string]: any } {
    return Number.isNaN(c.value) ? { required: true } : undefined;
  }
}
