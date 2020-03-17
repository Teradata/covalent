import { Pipe, PipeTransform, Inject, LOCALE_ID } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'digits',
})

export class TdDigitsPipe implements PipeTransform {

  private _decimalPipe: DecimalPipe;

  constructor(@Inject(LOCALE_ID) private _locale: string = 'en') {
    this._decimalPipe = new DecimalPipe(this._locale);
  }

  /* `digits` needs to be type `digits: any` or TypeScript complains */
  transform(digits: any, precision: number = 1): string {
    if (digits === 0) {
      return '0';
    } else if (isNaN(parseInt(digits, 10))) {
      /* If not a valid number, return the value */
      return digits;
    } else if (digits < 1) {
      return this._decimalPipe.transform(digits.toFixed(precision));
    }
    let k: number = 1000;
    let sizes: string[] = ['', 'K', 'M', 'B', 'T', 'Q'];
    let i: number = Math.floor(Math.log(digits) / Math.log(k));
    let size: string = sizes[i];
    return this._decimalPipe.transform(parseFloat((digits / Math.pow(k, i)).toFixed(precision))) + (size ? ' ' + size : '');
  }
}
