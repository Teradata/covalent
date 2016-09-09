import { TdTimeDifferencePipe } from './time-difference.pipe';

describe('TdTimeDifferencePipe', () => {
  let pipe: TdTimeDifferencePipe;
  let start: number = Date.now();
  let end: number = new Date(start).getTime();

  beforeEach(() => {
    pipe = new TdTimeDifferencePipe();
  });

  it('should return blank with an invalid date', () => {
    expect(pipe.transform(undefined, undefined)).toEqual('Invalid Date');
    expect(pipe.transform(undefined, end)).toEqual('Invalid Date');
    expect(pipe.transform('', undefined)).toEqual('Invalid Date');
    expect(pipe.transform('', '')).toEqual('Invalid Date');
    expect(pipe.transform({}, {})).toEqual('Invalid Date');
    expect(pipe.transform('this is not a valid date', 'not a valid date either')).toEqual('Invalid Date');
  });

  it('should return a time ago string', () =>  {
    // 0 second
    expect(pipe.transform(start, end)).toEqual('00:00:00');
    expect(pipe.transform(new Date(start), end)).toEqual('00:00:00');
    expect(pipe.transform(new Date(start).toString(), end)).toEqual('00:00:00');
    // < 1 minute
    expect(pipe.transform(start - 1000 * 37, end)).toEqual('00:00:37');
    // 1 minute
    expect(pipe.transform(start - 1000 * 60, end)).toEqual('00:01:00');
    // < 1 hour
    expect(pipe.transform(start - 1000 * 60 * 6, end)).toEqual('00:06:00');
    // 1 hour
    expect(pipe.transform(start - 1000 * 60 * 60, end)).toEqual('01:00:00');
    // < 1 day
    expect(pipe.transform(start - 1000 * 60 * 60 * 13, end)).toEqual('13:00:00');
    // 1 day
    expect(pipe.transform(start - 1000 * 60 * 60 * 24, end)).toEqual('1 day - 00:00:00');
    // < 1 month
    expect(pipe.transform(start - 1000 * 60 * 60 * 24 * 17, end)).toEqual('17 days - 00:00:00');
  });
});
