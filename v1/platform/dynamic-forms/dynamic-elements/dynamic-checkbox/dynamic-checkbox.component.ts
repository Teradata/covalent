import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';

export const CHECKBOX_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdDynamicCheckboxComponent),
  multi: true,
};

@Component({
  providers: [ CHECKBOX_INPUT_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-dynamic-checkbox',
  styleUrls: [ './dynamic-checkbox.component.scss' ],
  templateUrl: './dynamic-checkbox.component.html',
})
export class TdDynamicCheckboxComponent extends AbstractControlValueAccessor implements ControlValueAccessor {

  control: FormControl;

  label: string = '';

  required: boolean = false;

}
