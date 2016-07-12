import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes',
})

export class TdBytesPipe implements PipeTransform {
  /* `bytes` needs to be `any` or TypeScript complains 
  Tried both `number` and `number | string` */
  transform(bytes: any, precision: number): string {
    if (bytes === 0) {
      return '0 B';
    } else if (isNaN(parseInt(bytes, 10))) {
      /* If not a valid number, return 'Invalid Number' */
      return 'Invalid Number';
    }
    // Precision for number of decimal points
    if (!precision) {
      precision = 2;
    }
    let k: number = 1000;
    let p: number = precision;
    let sizes: string[] = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i: number = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(p)) + ' ' + sizes[i];
  }
}
