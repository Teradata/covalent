import { TdTimeUntilPipe } from './time-until.pipe';

describe('TdTimeUntilPipe', () => {
  let pipe: TdTimeUntilPipe;
  let time: number = Date.now();

  beforeEach(() => {
    pipe = new TdTimeUntilPipe();
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
    let fixedTime: number = Date.parse('2017-01-01T00:00:00Z');
    // 1 second
    expect(pipe.transform(Date.parse('2017-01-01T00:00:01Z'), fixedTime)).toEqual('in 1 second');
    // < 1 minute
    expect(pipe.transform(Date.parse('2017-01-01T00:00:37Z'), fixedTime)).toEqual('in 37 seconds');
    // 1 minute
    expect(pipe.transform(Date.parse('2017-01-01T00:01:00Z'), fixedTime)).toEqual('in 1 minute');
    // < 1 hour
    expect(pipe.transform(Date.parse('2017-01-01T00:06:00Z'), fixedTime)).toEqual('in 6 minutes');
    // 1 hours
    expect(pipe.transform(Date.parse('2017-01-01T01:00:00Z'), fixedTime)).toEqual('in 1 hour');
    // < 1 day
    expect(pipe.transform(Date.parse('2017-01-01T13:00:00Z'), fixedTime)).toEqual('in 13 hours');
    // 1 day
    expect(pipe.transform(Date.parse('2017-01-02T00:00:00Z'), fixedTime)).toEqual('in 1 day');
    // < 1 month
    expect(pipe.transform(Date.parse('2017-01-18T00:00:00Z'), fixedTime)).toEqual('in 17 days');
    // 1 month
    expect(pipe.transform(Date.parse('2017-02-01T00:00:00Z'), fixedTime)).toEqual('in 1 month');
    // < 1 year
    expect(pipe.transform(Date.parse('2017-04-01T00:00:00Z'), fixedTime)).toEqual('in 3 months');
    // 1 year
    expect(pipe.transform(Date.parse('2018-01-01T00:00:00Z'), fixedTime)).toEqual('in 1 year');
    // years
    expect(pipe.transform(Date.parse('2021-01-01T00:00:00Z'), fixedTime)).toEqual('in 4 years');
  });
});
