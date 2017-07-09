import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';

export const SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdDynamicSlideToggleComponent),
  multi: true,
};

@Component({
  providers: [ SLIDE_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-dynamic-slide-toggle',
  styleUrls: [ './dynamic-slide-toggle.component.scss' ],
  templateUrl: './dynamic-slide-toggle.component.html',
})
export class TdDynamicSlideToggleComponent extends AbstractControlValueAccessor implements ControlValueAccessor {

  control: FormControl;

  label: string = '';

  required: boolean = false;

}
