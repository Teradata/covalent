import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})

export class TdTruncatePipe implements PipeTransform {
  transform(text: any, length: number): string {
    if (typeof text !== 'string') {
      return '';
    }

    // Truncate
    let truncated: string = text.substr(0, length);

    if (text.length > length) {
      if (truncated.lastIndexOf(' ') > 0) {
        truncated = truncated.trim();
      }

      truncated += '…';
    }

    return truncated;
  }
}
