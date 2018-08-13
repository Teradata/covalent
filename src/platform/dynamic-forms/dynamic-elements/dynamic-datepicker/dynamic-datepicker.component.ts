import { Component, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { mixinControlValueAccessor, IControlValueAccessor } from '@covalent/core/common';

export class TdDynamicDatepickerBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdDynamicDatepickerMixinBase = mixinControlValueAccessor(TdDynamicDatepickerBase);

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicDatepickerComponent),
    multi: true,
  }],
  selector: 'td-dynamic-datepicker',
  styleUrls: ['./dynamic-datepicker.component.scss'],
  templateUrl: './dynamic-datepicker.component.html',
})
export class TdDynamicDatepickerComponent extends _TdDynamicDatepickerMixinBase implements IControlValueAccessor {

  control: FormControl;

  label: string = '';

  type: string = undefined;

  required: boolean = undefined;

  min: number = undefined;

  max: number = undefined;

}
