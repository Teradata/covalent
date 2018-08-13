import { Component, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { mixinControlValueAccessor, IControlValueAccessor } from '@covalent/core/common';

export class TdDynamicSlideToggleBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdDynamicSlideToggleMixinBase = mixinControlValueAccessor(TdDynamicSlideToggleBase);

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicSlideToggleComponent),
    multi: true,
  }],
  selector: 'td-dynamic-slide-toggle',
  styleUrls: [ './dynamic-slide-toggle.component.scss' ],
  templateUrl: './dynamic-slide-toggle.component.html',
})
export class TdDynamicSlideToggleComponent extends _TdDynamicSlideToggleMixinBase implements IControlValueAccessor {

  control: FormControl;

  label: string = '';

  required: boolean = false;

}
