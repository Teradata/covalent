import { Component, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { mixinControlValueAccessor, IControlValueAccessor } from '@covalent/core/common';

export class TdDynamicCheckboxBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdDynamicCheckboxMixinBase = mixinControlValueAccessor(TdDynamicCheckboxBase);

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicCheckboxComponent),
    multi: true,
  }],
  selector: 'td-dynamic-checkbox',
  styleUrls: [ './dynamic-checkbox.component.scss' ],
  templateUrl: './dynamic-checkbox.component.html',
})
export class TdDynamicCheckboxComponent extends _TdDynamicCheckboxMixinBase implements IControlValueAccessor {

  control: FormControl;

  label: string = '';

  required: boolean = false;

}
