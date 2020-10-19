import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

const EMAIL_REGEXP: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// tslint:disable: no-null-keyword
export class DialogValidator {
  static min(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isInvalid: boolean = min && !DialogValidator.isInputValueEmpty(control.value) && control.value.length < min;

      return isInvalid ? { min: { min: min, actual: control.value } } : null;
    };
  }
  static isInputValueEmpty(value: string): boolean {
    return value === null || value.length === 0;
  }

  static max(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isInvalid: boolean = max && !this.isInputValueEmpty(control.value) && control.value.length > max;
      return isInvalid ? { max: { max: max, actual: control.value } } : null;
    };
  }

  static pattern(pattern: string | RegExp): ValidatorFn {
    let regex: RegExp;
    let regexStr: string;
    if (pattern && pattern === 'string') {
      regexStr = '';
      if (pattern.charAt(0) !== '^') {
        regexStr += '^';
      }
      regexStr += pattern;
      if (pattern.charAt(pattern.length - 1) !== '$') {
        regexStr += '$';
      }
      regex = new RegExp(regexStr);
    } else {
      regex = new RegExp(pattern);
    }
    return (control: AbstractControl): ValidationErrors | null => {
      return pattern && !this.isInputValueEmpty(control.value) && !regex.test(control.value)
        ? { pattern: { requiredPattern: regex, actualValue: control.value } }
        : null;
    };
  }

  static required(required: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      return required && DialogValidator.isInputValueEmpty(control.value) ? { required: true } : null;
    };
  }

  static email(email: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isInvalid: boolean =
        email && !DialogValidator.isInputValueEmpty(control.value) && !EMAIL_REGEXP.test(control.value);
      return isInvalid ? { email: true } : null;
    };
  }
}
