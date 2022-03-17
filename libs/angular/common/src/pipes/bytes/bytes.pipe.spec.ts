import { TdBytesPipe } from './bytes.pipe';

describe('TdBytesPipe', () => {
  let pipe: TdBytesPipe;

  beforeEach(() => {
    pipe = new TdBytesPipe();
  });

  it('should return with an empty or invalid input', () => {
    expect(pipe.transform(NaN)).toEqual('Invalid Number');
    expect(pipe.transform(undefined)).toEqual('Invalid Number');
    expect(pipe.transform(0.3)).toEqual('Invalid Number');
    expect(pipe.transform(0.76)).toEqual('Invalid Number');
  });

  it('should return a formatted bytes to larger units', () => {
    expect(pipe.transform(0)).toEqual('0 B');
    expect(pipe.transform(535)).toEqual('535 B');
    expect(pipe.transform(1024)).toEqual('1 KiB');
    expect(pipe.transform(138540)).toEqual('135.29 KiB');
    expect(pipe.transform(138540, 1)).toEqual('135.3 KiB');
    expect(pipe.transform(1571800)).toEqual('1.5 MiB');
    expect(pipe.transform(1571800, 4)).toEqual('1.499 MiB');
    expect(pipe.transform(10000000)).toEqual('9.54 MiB');
    expect(pipe.transform(10485760)).toEqual('10 MiB');
    expect(pipe.transform(10201000, 3)).toEqual('9.728 MiB');
    expect(pipe.transform(3.81861e10)).toEqual('35.56 GiB');
    expect(pipe.transform(1.890381861e14)).toEqual('171.93 TiB');
    expect(pipe.transform(5.35765e16)).toEqual('47.59 PiB');
  });
});
