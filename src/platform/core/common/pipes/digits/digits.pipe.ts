import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digits',
})

export class TdDigitsPipe implements PipeTransform {
  /* `digits` needs to be type `digits: any` or TypeScript complains */
  transform(digits: any, precision: number = 1): string {
    if (digits === 0) {
      return '0';
    } else if (isNaN(parseInt(digits, 10))) {
      /* If not a valid number, return 'Invalid Number' */
      return 'Invalid Number';
    } else if (digits < 1) {
      return digits;
    }
    let k: number = 1000;
    let sizes: string[] = ['', 'K', 'M', 'B', 'T', 'Q'];
    let i: number = Math.floor(Math.log(digits) / Math.log(k));
    let size: string = sizes[i];
    return parseFloat((digits / Math.pow(k, i)).toFixed(precision)) + (size ? ' ' + size : '');
  }
}
