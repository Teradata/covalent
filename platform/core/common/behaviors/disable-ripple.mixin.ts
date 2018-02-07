import { Constructor } from './constructor';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

/** Interface to implement when applying the disabled mixin */
export interface ICanDisableRipple {
  disableRipple: boolean;
  onDisableRippleChange(v: boolean): void;
}

/** Mixin to augment a component or directive with a `disabled` property. */
export function mixinDisableRipple<T extends Constructor<{}>>(base: T): Constructor<ICanDisableRipple> & T {
  return class extends base {
    private _disableRipple: boolean = false;

    constructor(...args: any[]) {
      super(...args);
    }

    get disableRipple(): boolean {
      return this._disableRipple;
    }
    set disableRipple(value: boolean) {
      let newValue: boolean = coerceBooleanProperty(value);
      if (this._disableRipple !== newValue) {
        this._disableRipple = newValue;
        this.onDisableRippleChange(this._disableRipple);
      }
    }

    onDisableRippleChange(v: boolean): void {
      /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
    }
  };
}
