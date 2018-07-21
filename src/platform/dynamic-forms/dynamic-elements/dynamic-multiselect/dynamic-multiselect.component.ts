import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';

export const MULTISELECT_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdDynamicMultiselectComponent),
  multi: true,
};
@Component({
  providers: [ MULTISELECT_INPUT_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-dynamic-multiselect',
  templateUrl: './dynamic-multiselect.component.html',
  styleUrls: ['./dynamic-multiselect.component.scss'],
})
export class TdDynamicMultiselectComponent extends AbstractControlValueAccessor implements ControlValueAccessor {

  control: FormControl;

  label: string = '';

  required: boolean = undefined;

  selections: any[] = undefined;

}
