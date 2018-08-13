import { Component, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { mixinControlValueAccessor, IControlValueAccessor } from '@covalent/core/common';

export class TdDynamicSliderBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdDynamicSliderMixinBase = mixinControlValueAccessor(TdDynamicSliderBase);

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicSliderComponent),
    multi: true,
  }],
  selector: 'td-dynamic-slider',
  styleUrls: [ './dynamic-slider.component.scss' ],
  templateUrl: './dynamic-slider.component.html',
})
export class TdDynamicSliderComponent extends _TdDynamicSliderMixinBase implements IControlValueAccessor {

  control: FormControl;

  label: string = '';

  required: boolean = undefined;

  min: number = undefined;

  max: number = undefined;

}
