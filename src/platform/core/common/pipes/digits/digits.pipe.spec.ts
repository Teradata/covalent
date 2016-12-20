import { TdDigitsPipe } from './digits.pipe';

describe('TdDigitsPipe', () => {
  let pipe: TdDigitsPipe;
  beforeEach(() => {
    pipe = new TdDigitsPipe();
  });

  it('should return with an empty or invalid input', () => {
    expect(pipe.transform('notanumber', undefined)).toEqual('Invalid Number');
    expect(pipe.transform(NaN, undefined)).toEqual('Invalid Number');
    expect(pipe.transform(undefined, undefined)).toEqual('Invalid Number');
  });

  it('should return formatted digits', () => {
    expect(pipe.transform('34', undefined)).toEqual('34');
    expect(pipe.transform(0.45, undefined)).toEqual(0.45);
    expect(pipe.transform(0.724, undefined)).toEqual(0.724);
    expect(pipe.transform(535, undefined)).toEqual('535');
    expect(pipe.transform(138540, undefined)).toEqual('138.5 K');
    expect(pipe.transform(138540, 2)).toEqual('138.54 K');
    expect(pipe.transform(1571800, undefined)).toEqual('1.6 M');
    expect(pipe.transform(1571800, 3)).toEqual('1.572 M');
    expect(pipe.transform(10000000, undefined)).toEqual('10 M');
    expect(pipe.transform(10200000, undefined)).toEqual('10.2 M');
    expect(pipe.transform(3.81861e+10, undefined)).toEqual('38.2 B');
    expect(pipe.transform(1.890381861e+14, undefined)).toEqual('189 T');
    expect(pipe.transform(5.35765e+16, undefined)).toEqual('53.6 Q');
  });
});
