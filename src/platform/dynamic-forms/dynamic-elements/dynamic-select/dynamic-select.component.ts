import { Component, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { mixinControlValueAccessor, IControlValueAccessor } from '@covalent/core/common';

export class TdDynamicSelectBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdDynamicSelectMixinBase = mixinControlValueAccessor(TdDynamicSelectBase);

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicSelectComponent),
    multi: true,
  }],
  selector: 'td-dynamic-select',
  styleUrls: [ './dynamic-select.component.scss' ],
  templateUrl: './dynamic-select.component.html',
})
export class TdDynamicSelectComponent extends _TdDynamicSelectMixinBase implements IControlValueAccessor {

  control: FormControl;

  label: string = '';

  required: boolean = undefined;

  selections: any[] = undefined;

}
