import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';
import { ITdCustomError } from './dynamic-forms.validators.interfaces';

export function tdContainsUppercaseCharacter(control: AbstractControl): { [key: string]: any } {

  // match any uppercase character
  let regex: RegExp = /[A-Z]/g;

  // Validate Logic
  let upperCaseCharacters: string[] = [];

  if (control.value && control.value.length) {
    upperCaseCharacters = control.value.match(regex) || [];
  }

  // ITdCustomError Object
  let error: ITdCustomError = {

    // Must be unique
    'tdContainsUppercaseCharacter': {

      // Static error message presented to UI
      message: 'Need uppercase character',
    },
  };

  // return error object if error true
  return !upperCaseCharacters.length ? error : undefined;
}
