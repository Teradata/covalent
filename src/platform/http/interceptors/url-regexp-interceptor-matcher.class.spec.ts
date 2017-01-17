import { URLRegExpInterceptorMatcher } from './url-regexp-interceptor-matcher.class';

describe('Http: URLRegExpInterceptorMatcher', () => {
  let matcher: URLRegExpInterceptorMatcher;

  beforeEach(() => {
    matcher = new URLRegExpInterceptorMatcher();
  });

  it('should match all URLs', () => {
    expect(matcher.matches(
      {url: 'www.google.com/path/1_1_-_1/ano111_ther/11-22?query=1&query=2'},
      {interceptor: undefined, paths: ['**']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com/path/111/another/11-22'},
      {interceptor: undefined, paths: ['**']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com/path'},
      {interceptor: undefined, paths: ['**']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com?'},
      {interceptor: undefined, paths: ['**']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com/path/1_1_-_1/?query=1&query=2'},
      {interceptor: undefined, paths: ['**']},
    )).toBeTruthy();
  });

  it('should match routes that contain with /apps or /sys', () => {
    expect(matcher.matches(
      {url: 'www.google.com/apps/1_1_-_1/ano111_ther/11-22?query=1&query=2'},
      {interceptor: undefined, paths: ['/apps**', '/sys**']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com/path/111/sys/11-22'},
      {interceptor: undefined, paths: ['/apps**', '/sys**']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com/apps'},
      {interceptor: undefined, paths: ['/apps**', '/sys**']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com?'},
      {interceptor: undefined, paths: ['/apps**', '/sys**']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com/path/1_1_-_1/?query=1&query=2'},
      {interceptor: undefined, paths: ['/apps**', '/sys**']},
    )).toBeFalsy();
  });

  it('should match routes that end with /apps', () => {
    expect(matcher.matches(
      {url: 'www.google.com/apps/1_1_-_1/ano111_ther/11-22?query=1&query=2'},
      {interceptor: undefined, paths: ['/apps']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com/path/111/sys/11-22'},
      {interceptor: undefined, paths: ['/apps']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com/apps'},
      {interceptor: undefined, paths: ['/apps']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com?'},
      {interceptor: undefined, paths: ['/apps']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com/path/1_1_-_1/?query=1&query=2'},
      {interceptor: undefined, paths: ['/apps']},
    )).toBeFalsy();
  });

  it('should match routes that end with /apps/* (only with extra path)', () => {
    expect(matcher.matches(
      {url: 'www.google.com/apps/1_1_-_1/ano111_ther/11-22?query=1&query=2'},
      {interceptor: undefined, paths: ['/apps/*']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com/path/111/apps/11-22'},
      {interceptor: undefined, paths: ['/apps/*']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com/apps'},
      {interceptor: undefined, paths: ['/apps/*']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com?'},
      {interceptor: undefined, paths: ['/apps/*']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com/path/1_1_-_1/?query=1&query=2'},
      {interceptor: undefined, paths: ['/apps/*']},
    )).toBeFalsy();
  });

  it('should match routes that end with /apps/*/path (only one path in the middle)', () => {
    expect(matcher.matches(
      {url: 'www.google.com/apps/1_1_-_1/path?query=1&query=2'},
      {interceptor: undefined, paths: ['/apps/*/path']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com/apps/111/path/11-22'},
      {interceptor: undefined, paths: ['/apps/*/path']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com/apps'},
      {interceptor: undefined, paths: ['/apps/*/path']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com?'},
      {interceptor: undefined, paths: ['/apps/*/path']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com/path/1_1_-_1/?query=1&query=2'},
      {interceptor: undefined, paths: ['/apps/*/path']},
    )).toBeFalsy();
  });

  it('should match routes that end with /apps/**/path (any number of paths in the middle)', () => {
    expect(matcher.matches(
      {url: 'www.google.com/apps/1_1_-_1/path?query=1&query=2'},
      {interceptor: undefined, paths: ['/apps/**/path']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com/apps/111/122/path'},
      {interceptor: undefined, paths: ['/apps/**/path']},
    )).toBeTruthy();
    expect(matcher.matches(
      {url: 'www.google.com/apps'},
      {interceptor: undefined, paths: ['/apps/**/path']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com?'},
      {interceptor: undefined, paths: ['/apps/**/path']},
    )).toBeFalsy();
    expect(matcher.matches(
      {url: 'www.google.com/path/1_1_-_1/?query=1&query=2'},
      {interceptor: undefined, paths: ['/apps/**/path']},
    )).toBeFalsy();
  });
});
