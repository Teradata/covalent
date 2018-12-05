import { ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

import { Observable, Subject } from 'rxjs';

type Constructor<T> = new (...args: any[]) => T;

const noop: any = () => {
  // empty method
};

export interface IControlValueAccessor extends ControlValueAccessor {
  value: any;
  valueChanges: Observable<any>;
  onChange: (_: any) => any;
  onTouched: () => any;
}

export interface IHasChangeDetectorRef {
  _changeDetectorRef: ChangeDetectorRef;
}

/** Mixin to augment a component with ngModel support. */
export function mixinControlValueAccessor<T extends Constructor<IHasChangeDetectorRef>>
                (base: T, initialValue?: any): Constructor<IControlValueAccessor> & T {
  return class extends base {
    private _value: any = initialValue instanceof Array ? Object.assign([], initialValue) : initialValue;
    private _subjectValueChanges: Subject<any>;
    valueChanges: Observable<any>;

    constructor(...args: any[]) {
      super(...args); 
      this._subjectValueChanges = new Subject<any>();
      this.valueChanges = this._subjectValueChanges.asObservable();
    }

    set value(v: any) {
      if (v !== this._value) {
        this._value = v;
        this.onChange(v);
        this._changeDetectorRef.markForCheck();
        this._subjectValueChanges.next(v);
      }
    }
    get value(): any {
      return this._value;
    }

    writeValue(value: any): void {
      this.value = value;
      this._changeDetectorRef.markForCheck();
    }

    registerOnChange(fn: any): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }

    onChange = (_: any) => noop;
    onTouched = () => noop;

  };
}
