import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';

export const SLIDER_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdDynamicSliderComponent),
  multi: true,
};

@Component({
  providers: [ SLIDER_INPUT_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-dynamic-slider',
  styleUrls: [ './dynamic-slider.component.scss' ],
  templateUrl: './dynamic-slider.component.html',
})
export class TdDynamicSliderComponent extends AbstractControlValueAccessor implements ControlValueAccessor {

  control: FormControl;

  label: string = '';

  required: boolean = undefined;

  min: number = undefined;

  max: number = undefined;

}
