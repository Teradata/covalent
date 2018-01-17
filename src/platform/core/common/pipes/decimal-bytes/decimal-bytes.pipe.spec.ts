import { TdDecimalBytesPipe } from './decimal-bytes.pipe';

describe('TdDecimalBytesPipe', () => {
  let pipe: TdDecimalBytesPipe;

  beforeEach(() => {
    pipe = new TdDecimalBytesPipe();
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
    expect(pipe.transform(1000, undefined)).toEqual('1 KB');
    expect(pipe.transform(1024, undefined)).toEqual('1.02 KB');
    expect(pipe.transform(1024, 1)).toEqual('1 KB');
    expect(pipe.transform(138540, undefined)).toEqual('138.54 KB');
    expect(pipe.transform(138540, 1)).toEqual('138.5 KB');
    expect(pipe.transform(1571800, undefined)).toEqual('1.57 MB');
    expect(pipe.transform(1571800, 4)).toEqual('1.5718 MB');
    expect(pipe.transform(10000000, undefined)).toEqual('10 MB');
    expect(pipe.transform(10485760, undefined)).toEqual('10.49 MB');
    expect(pipe.transform(10201000, 3)).toEqual('10.201 MB');
    expect(pipe.transform(3.81861e+10, undefined)).toEqual('38.19 GB');
    expect(pipe.transform(1.890381861e+14, undefined)).toEqual('189.04 TB');
    expect(pipe.transform(5.35765e+16, undefined)).toEqual('53.58 PB');
  });
});
