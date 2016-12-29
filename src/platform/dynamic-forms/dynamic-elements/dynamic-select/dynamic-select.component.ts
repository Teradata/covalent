import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';

export const SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdDynamicSelectComponent),
  multi: true,
};

@Component({
  providers: [ SELECT_TOGGLE_INPUT_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-dynamic-select',
  styleUrls: [ './dynamic-select.component.scss' ],
  templateUrl: './dynamic-select.component.html',
})
export class TdDynamicSelectComponent extends AbstractControlValueAccessor implements ControlValueAccessor {

  control: FormControl;

  label: string = '';

  required: boolean = undefined;

  selections: any[] = undefined;

}
