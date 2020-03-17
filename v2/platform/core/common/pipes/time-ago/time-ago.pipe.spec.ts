import { TdTimeAgoPipe } from './time-ago.pipe';

describe('TdTimeAgoPipe', () => {
  let pipe: TdTimeAgoPipe;
  let time: number = Date.now();

  beforeEach(() => {
    pipe = new TdTimeAgoPipe();
  });

  it('should return "Invalid Date" with an invalid date', () => {
    expect(pipe.transform(undefined, undefined)).toEqual('Invalid Date');
    expect(pipe.transform(undefined, time)).toEqual('Invalid Date');
    expect(pipe.transform('', undefined)).toEqual('Invalid Date');
    expect(pipe.transform('', '')).toEqual('Invalid Date');
    expect(pipe.transform({}, {})).toEqual('Invalid Date');
    expect(pipe.transform('this is not a valid date', 'not a valid date either')).toEqual('Invalid Date');
  });

  it('should return a time ago string', () => {
    // 1 second
    expect(pipe.transform(time, time)).toEqual('1 second ago');
    expect(pipe.transform(new Date(time), time)).toEqual('1 second ago');
    expect(pipe.transform(new Date(time).toString(), time)).toEqual('1 second ago');
    // < 1 minute
    expect(pipe.transform(time - 1000 * 37, time)).toEqual('37 seconds ago');
    // 1 minute
    expect(pipe.transform(time - 1000 * 60, time)).toEqual('1 minute ago');
    // < 1 hour
    expect(pipe.transform(time - 1000 * 60 * 6, time)).toEqual('6 minutes ago');
    // 1 hour
    expect(pipe.transform(time - 1000 * 60 * 60, time)).toEqual('1 hour ago');
    // < 1 day
    expect(pipe.transform(time - 1000 * 60 * 60 * 13, time)).toEqual('13 hours ago');
    // 1 day
    expect(pipe.transform(time - 1000 * 60 * 60 * 24, time)).toEqual('1 day ago');
    // < 1 month
    expect(pipe.transform(time - 1000 * 60 * 60 * 24 * 17, time)).toEqual('17 days ago');
    // 1 month
    expect(pipe.transform(time - 1000 * 60 * 60 * 24 * 30, time)).toEqual('1 month ago');
    // < 1 year
    expect(pipe.transform(time - 1000 * 60 * 60 * 24 * 30 * 3, time)).toEqual('3 months ago');
    // 1 year
    expect(pipe.transform(time - 1000 * 60 * 60 * 24 * 30 * 12, time)).toEqual('1 year ago');
    // years
    expect(pipe.transform(time - 1000 * 60 * 60 * 24 * 30 * 12 * 4, time)).toEqual('4 years ago');
  });
});
