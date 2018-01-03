import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';

export const DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdDynamicDatepickerComponent),
  multi: true,
};

@Component({
  providers: [DATEPICKER_INPUT_CONTROL_VALUE_ACCESSOR],
  selector: 'td-dynamic-datepicker',
  styleUrls: ['./dynamic-datepicker.component.scss'],
  templateUrl: './dynamic-datepicker.component.html',
})
export class TdDynamicDatepickerComponent extends AbstractControlValueAccessor implements ControlValueAccessor {

  control: FormControl;

  label: string = '';

  type: string = undefined;

  required: boolean = undefined;

  min: number = undefined;

  max: number = undefined;

}
