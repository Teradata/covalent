import { TdTruncatePipe } from './truncate.pipe';

describe('TdTruncatePipe', () => {
  let pipe: TdTruncatePipe;
  let start: number = Date.now();
  let spaces: string = 'asdf asdf asdf asdf asdf asdf asdf asdf asdf asdf as';
  let nospaces: string = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';

  beforeEach(() => {
    pipe = new TdTruncatePipe();
  });

  it('should return blank with an invalid input', () => {
    expect(pipe.transform('', undefined)).toEqual('');
    expect(pipe.transform({}, undefined)).toEqual('');
    expect(pipe.transform(new Date(start), undefined)).toEqual('');
  });

  it('should truncate a string with spaces', () => {
    expect(pipe.transform(spaces, 1)).toEqual('a…');
    expect(pipe.transform(spaces, 4)).toEqual('asdf…');
    expect(pipe.transform(spaces, 5)).toEqual('asdf…');
    expect(pipe.transform(spaces, 15)).toEqual('asdf asdf asdf…');
    expect(pipe.transform(spaces, 30)).toEqual('asdf asdf asdf asdf asdf asdf…');
    expect(pipe.transform(spaces, 40)).toEqual('asdf asdf asdf asdf asdf asdf asdf asdf…');
    expect(pipe.transform(spaces, 60)).toEqual(spaces);
  });

  it('should truncate a string without spaces', () => {
    expect(pipe.transform(nospaces, 1)).toEqual('a…');
    expect(pipe.transform(nospaces, 4)).toEqual('abcd…');
    expect(pipe.transform(nospaces, 5)).toEqual('abcde…');
    expect(pipe.transform(nospaces, 15)).toEqual('abcdefghijklmno…');
    expect(pipe.transform(nospaces, 30)).toEqual('abcdefghijklmnopqrstuvwxyzabcd…');
    expect(pipe.transform(nospaces, 40)).toEqual('abcdefghijklmnopqrstuvwxyzabcdefghijklmn…');
    expect(pipe.transform(nospaces, 60)).toEqual(nospaces);
  });
});
