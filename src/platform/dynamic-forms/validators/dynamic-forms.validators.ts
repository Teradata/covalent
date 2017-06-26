import { ValidatorFn } from '@angular/forms';

// import TD custom validators migrated from products
import { tdContainsUppercaseCharacter } from './dynamic-forms.validators.tdContainsUppercaseCharacter';

// Add validator as optional interface
export interface ITdCustomValidators {
  tdContainsUppercaseCharacter?: boolean;
}

// Add validtor to tdValidators
//
// API object to find covalent validator from dynamic-forms config.
// This allows us to compose validators from raw functions
// as necessary, as long as the composite function on this
// API object is an Angular ValidatorFn.
export let tdValidators: { [prop: string]: ValidatorFn } = {
  tdContainsUppercaseCharacter: tdContainsUppercaseCharacter,
};
