import { TdBytesPipe } from './bytes.pipe';

describe('TdBytesPipe', () => {
  let pipe: TdBytesPipe;

  beforeEach(() => {
    pipe = new TdBytesPipe();
  });

  it('should return with an empty or invalid input', () => {
    expect(pipe.transform(NaN, undefined)).toEqual('Invalid Number');
    expect(pipe.transform(undefined, undefined)).toEqual('Invalid Number');
    expect(pipe.transform(0.3, undefined)).toEqual('Invalid Number');
    expect(pipe.transform(0.76, undefined)).toEqual('Invalid Number');
  });

  it('should return a formatted bytes to larger units', () => {
    expect(pipe.transform(0, undefined)).toEqual('0 B');
    expect(pipe.transform(535, undefined)).toEqual('535 B');
    expect(pipe.transform(1024, undefined)).toEqual('1 KB');
    expect(pipe.transform(138540, undefined)).toEqual('135.29 KB');
    expect(pipe.transform(138540, 1)).toEqual('135.3 KB');
    expect(pipe.transform(1571800, undefined)).toEqual('1.5 MB');
    expect(pipe.transform(1571800, 4)).toEqual('1.499 MB');
    expect(pipe.transform(10000000, undefined)).toEqual('9.54 MB');
    expect(pipe.transform(10485760, undefined)).toEqual('10 MB');
    expect(pipe.transform(10201000, 3)).toEqual('9.728 MB');
    expect(pipe.transform(3.81861e+10, undefined)).toEqual('35.56 GB');
    expect(pipe.transform(1.890381861e+14, undefined)).toEqual('171.93 TB');
    expect(pipe.transform(5.35765e+16, undefined)).toEqual('47.59 PB');
  });
});
