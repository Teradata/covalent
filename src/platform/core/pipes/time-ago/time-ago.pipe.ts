import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TdTimeAgoPipe implements PipeTransform {
  transform(time: any, reference: any): string {
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
    let diff: number = Math.floor((startTime - time.getTime()) / 1000);

    if (diff < 2) {
      return '1 second ago';
    }
    if (diff < 60) {
      return Math.floor(diff) + ' seconds ago';
    }
    // Minutes
    diff = diff / 60;
    if (diff < 2) {
      return '1 minute ago';
    }
    if (diff < 60) {
      return Math.floor(diff) + ' minutes ago';
    }
    // Hours
    diff = diff / 60;
    if (diff < 2) {
      return '1 hour ago';
    }
    if (diff < 24) {
      return Math.floor(diff) + ' hours ago';
    }
    // Days
    diff = diff / 24;
    if (diff < 2) {
      return '1 day ago';
    }
    if (diff < 30) {
      return Math.floor(diff) + ' days ago';
    }
    // Months
    diff = diff / 30;
    if (diff < 2) {
      return '1 month ago';
    }
    if (diff < 12) {
      return Math.floor(diff) + ' months ago';
    }
    // Years
    diff = diff / 12;
    if (diff < 2) {
      return '1 year ago';
    } else {
      return Math.floor(diff) + ' years ago';
    }
  }
}
