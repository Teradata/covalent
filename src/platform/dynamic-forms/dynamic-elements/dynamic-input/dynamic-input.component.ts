import { Component, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { mixinControlValueAccessor, IControlValueAccessor } from '@covalent/core/common';

export class TdDynamicInputBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdDynamicInputMixinBase = mixinControlValueAccessor(TdDynamicInputBase);

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicInputComponent),
    multi: true,
  }],
  selector: 'td-dynamic-input',
  styleUrls: [ './dynamic-input.component.scss' ],
  templateUrl: './dynamic-input.component.html',
})
export class TdDynamicInputComponent extends _TdDynamicInputMixinBase implements IControlValueAccessor {

  control: FormControl;

  label: string = '';

  type: string = undefined;

  required: boolean = undefined;

  min: number = undefined;

  max: number = undefined;

  minLength: number = undefined;

  maxLength: number = undefined;

}
