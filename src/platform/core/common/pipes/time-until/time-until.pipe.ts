import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeUntil',
})
export class TdTimeUntilPipe implements PipeTransform {
  transform(time: any, reference?: any): string {
    // Convert time to date object if not already
    time = new Date(time);
    let ref: Date = new Date(reference);

    // If not a valid timestamp, return 'Invalid Date'
    if (!time.getTime()) {
      return 'Invalid Date';
    }

    // For unit testing, we need to be able to declare a static start time
    // for calculations, or else speed of tests can bork.
    let startTime: number = isNaN(ref.getTime()) ? Date.now() : ref.getTime();
    let diff: number = Math.floor((time.getTime() - startTime) / 1000);

    if (diff < 2) {
      return 'in 1 second';
    }
    if (diff < 60) {
      return 'in ' + Math.floor(diff) + ' seconds';
    }
    // Minutes
    diff = diff / 60;
    if (diff < 2) {
      return 'in 1 minute';
    }
    if (diff < 60) {
      return 'in ' + Math.floor(diff) + ' minutes';
    }
    // Hours
    diff = diff / 60;
    if (diff < 2) {
      return 'in 1 hour';
    }
    if (diff < 24) {
      return 'in ' + Math.floor(diff) + ' hours';
    }
    // Days
    diff = diff / 24;
    if (diff < 2) {
      return 'in 1 day';
    }
    if (diff < 30) {
      return 'in ' + Math.floor(diff) + ' days';
    }
    // Months
    diff = diff / 30;
    if (diff < 2) {
      return 'in 1 month';
    }
    if (diff < 12) {
      return 'in ' + Math.floor(diff) + ' months';
    }
    // Years
    diff = diff / 12;
    if (diff < 2) {
      return 'in 1 year';
    } else {
      return 'in ' + Math.floor(diff) + ' years';
    }
  }
}
