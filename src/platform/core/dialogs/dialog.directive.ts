import { Directive, Input } from '@angular/core';
import { Validator, FormControl, ValidationErrors, Validators, NG_VALIDATORS } from '@angular/forms';
import { IInputValidator } from './services/dialog.service';

const EMAIL_REGEXP: RegExp = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

@Directive({
  selector: '[validateInput]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TdValidateInputDirective, multi: true }],
})
export class TdValidateInputDirective implements Validator {
  @Input() validator: IInputValidator;

  errorMessages: string[];
  validate(c: FormControl): ValidationErrors {
    const isInValid: boolean =
      this.isInputValueEmpty(c.value) ||
      this.isMinConditionInValid(c.value) ||
      this.isMaxConditionInValid(c.value) ||
      !this.isEmail(c.value) ||
      this.isRequired(c.value) ||
      this.isPatternApplied(c.value);
    return !isInValid ? null : { minlength: { requiredLength: this.validator.min } };
  }

  isInputValueEmpty(value: string): boolean {
    // we don't check for string here so it also works with arrays
    return value == null || value.length === 0;
  }

  isMinConditionInValid(value: string): boolean {
    return this.validator && this.validator.min && !this.isInputValueEmpty(value) && value.length < this.validator.min;
  }

  isMaxConditionInValid(value: string): boolean {
    return this.validator && this.validator.max && !this.isInputValueEmpty(value) && value.length > this.validator.max;
  }

  isEmail(value: string): boolean {
    return this.validator && this.validator.email && !this.isInputValueEmpty(value) && EMAIL_REGEXP.test(value);
  }

  isRequired(value: string): boolean {
    return this.validator && this.validator.required && this.isInputValueEmpty(value);
  }

  isPatternApplied(value: string): boolean {
    if (this.validator && !this.validator.pattern) {
      return null;
    }
    let regex: RegExp;
    let regexStr: string;
    if (this.validator && typeof this.validator.pattern === 'string') {
      regexStr = '';
      if (this.validator.pattern.charAt(0) !== '^') {
        regexStr += '^';
      }
      regexStr += this.validator.pattern;
      if (this.validator.pattern.charAt(this.validator.pattern.length - 1) !== '$') {
        regexStr += '$';
      }
      regex = new RegExp(regexStr);
    } else {
      regex = this.validator.pattern;
    }
    return regex.test(value);
  }
}
