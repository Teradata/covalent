import { Pipe, PipeTransform } from '@angular/core';
/*
 * For errors that come in this type of object:
 *
 * {
 *   required: { message: 'Value is required },
 *   length: { min: 10, message, 'Minimum Characters is 10' },
 * }
 *
 * Show only one error message.
 */
@Pipe({name: 'showOneError'})
export class ShowOneErrorPipe implements PipeTransform {
  transform(errors: any): string {
    let message: string = undefined;

    if (errors) {
      if (errors.hasOwnProperty('max')) {
        message = 'Max: ' + errors.max.max;
      } else if (errors.hasOwnProperty('min')) {
        message = 'Min: ' + errors.min.min;
      } else {
        // Test if at least one error exists
        for ( let prop in errors ) {
          if (errors.hasOwnProperty(prop)) {
            message = errors[prop].message;
            break;
          }
        }
      }
    }
    return message;
  }
}
