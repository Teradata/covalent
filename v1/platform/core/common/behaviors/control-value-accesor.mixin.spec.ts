import { mixinControlValueAccessor } from './control-value-accesor.mixin';
import { ChangeDetectorRef } from '@angular/core';

describe('ControlValueAccessorMixin', () => {

  it('should augment an existing class with a writeValue property', () => {
    const classWithControlValueAccess: any = mixinControlValueAccessor(TestClass);
    const instance: any = new classWithControlValueAccess();

    expect(instance.value)
      .toBeUndefined();
    expect(instance.writeValue)
      .toBeTruthy();
  });

  it('should agument and set an initial empty array', () => {
    const classWithControlValueAccess: any = mixinControlValueAccessor(TestClass, []);
    const instance: any = new classWithControlValueAccess();

    expect(instance.value instanceof Array).toBeTruthy();
    expect(instance.value.length === 0).toBeTruthy();
  });
});

class TestClass {
  /** Fake instance of an ChangeDetectorRef. */
  _changeDetectorRef: ChangeDetectorRef = {
    markForCheck: function(): void {
      /* empty */
    },
    detach: function(): void {
      /* empty */
    },
    detectChanges: function(): void {
      /* empty */
    },
    checkNoChanges: function (): void {
      /* empty */
    },
    reattach: function (): void {
      /* empty */
    },
  };
}
