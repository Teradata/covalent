import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDifference',
})

export class TdTimeDifferencePipe implements PipeTransform {
  transform(start: any, end: any): string {
    let startTime: Date = new Date(start);
    let endTime: Date;

    if (end !== undefined) {
      endTime = new Date(end);
    } else {
      endTime = new Date();
    }

    if (!startTime.getTime() || !endTime.getTime()) {
      return 'Invalid Date';
    }

    let diff: number = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);

    let days: number = Math.floor(diff / (60 * 60 * 24));
    diff = diff - (days * (60 * 60 * 24));

    let hours: number = Math.floor(diff / (60 * 60));
    diff = diff - (hours * (60 * 60));

    let minutes: number = Math.floor(diff / (60));
    diff -= minutes * (60);

    let seconds: number = diff;

    let pad: string = '00';

    let daysFormatted: string = '';

    if (days > 0 && days < 2) {
      daysFormatted = ' day - ';
    } else if (days > 1) {
      daysFormatted = ' days - ' ;
    }

    return (days > 0 ? days + daysFormatted : daysFormatted) +
     pad.substring(0, pad.length - (hours + '').length) + hours + ':' +
     pad.substring(0, pad.length - (minutes + '').length) + minutes + ':' +
     pad.substring(0, pad.length - (seconds + '').length) + seconds;
  }
}
