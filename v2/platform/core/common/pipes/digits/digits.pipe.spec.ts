import { TdDigitsPipe } from './digits.pipe';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// register 'es' locale
registerLocaleData(localeEs);

describe('TdDigitsPipe', () => {
  let pipe: TdDigitsPipe;
  let l10nEsPipe: TdDigitsPipe;
  let l10nFrPipe: TdDigitsPipe;
  beforeEach(() => {
    pipe = new TdDigitsPipe();
    l10nEsPipe = new TdDigitsPipe('es');
    l10nFrPipe = new TdDigitsPipe('fr');
  });

  it('should return with an empty or invalid input', () => {
    expect(pipe.transform('notanumber', undefined)).toEqual('notanumber');
    expect(<any>pipe.transform(NaN, undefined)).toEqual(NaN);
    expect(pipe.transform(undefined, undefined)).toEqual(undefined);
  });

  it('should return formatted digits', () => {
    /* transformations in 'en'*/
    expect(pipe.transform('34', undefined)).toEqual('34');
    expect(pipe.transform(0.45, 1)).toEqual('0.5');
    expect(pipe.transform(0.724, 2)).toEqual('0.72');
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

    /* transformations in 'es'*/
    expect(l10nEsPipe.transform('34', undefined)).toEqual('34');
    expect(l10nEsPipe.transform(0.45, 1)).toEqual('0,5');
    expect(l10nEsPipe.transform(0.724, 2)).toEqual('0,72');
    expect(l10nEsPipe.transform(535, undefined)).toEqual('535');
    expect(l10nEsPipe.transform(138540, undefined)).toEqual('138,5 K');
    expect(l10nEsPipe.transform(138540, 2)).toEqual('138,54 K');
    expect(l10nEsPipe.transform(1571800, undefined)).toEqual('1,6 M');
    expect(l10nEsPipe.transform(1571800, 3)).toEqual('1,572 M');
    expect(l10nEsPipe.transform(10000000, undefined)).toEqual('10 M');
    expect(l10nEsPipe.transform(10200000, undefined)).toEqual('10,2 M');
    expect(l10nEsPipe.transform(3.81861e+10, undefined)).toEqual('38,2 B');
    expect(l10nEsPipe.transform(1.890381861e+14, undefined)).toEqual('189 T');
    expect(l10nEsPipe.transform(5.35765e+16, undefined)).toEqual('53,6 Q');
  });

  it('should fail since locale is not registered', () => {
    /* not registered transformations */
    expect(() => {
      l10nFrPipe.transform(1000, undefined);
    }).toThrowError();
  });
});
