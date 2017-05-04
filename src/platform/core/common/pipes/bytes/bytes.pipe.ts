import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytes',
})

export class TdBytesPipe implements PipeTransform {
  /* `bytes` needs to be `any` or TypeScript complains
  Tried both `number` and `number | string` */
  transform(bytes: any, precision: number = 2): string {
    if (bytes === 0) {
      return '0 B';
    } else if (isNaN(parseInt(bytes, 10))) {
      /* If not a valid number, return 'Invalid Number' */
      return 'Invalid Number';
    }
    let k: number = 1024;
    let sizes: string[] = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let i: number = Math.floor(Math.log(bytes) / Math.log(k));
    // if less than 1
    if (i < 0) {
      return 'Invalid Number';
    }
    return parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + sizes[i];
  }
}
