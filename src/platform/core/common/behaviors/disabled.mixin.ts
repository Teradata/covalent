import { Constructor } from './constructor';

/** Interface to implement when applying the disabled mixin */
export interface ICanDisable {
  disabled: boolean;
}

/** Mixin to augment a directive with a `disabled` property. */
export function mixinDisabled<T extends Constructor<{}>>(base: T): Constructor<ICanDisable> & T {
  return class extends base {
    private _disabled: boolean = false;

    constructor(...args: any[]) {
      super(...args);
    }

    public get disabled(): boolean {
      return this._disabled;
    }
    public set disabled(value: boolean) {
      this._disabled = <any>value !== '' ? (<any>value === 'true' || value === true) : true;
      this.onDisabledSet();
    }

    onDisabledSet(): void {
      /** NOT IMPLEMENTED, this needs to be overriden by subclasses if needed */
    }
  };
}
