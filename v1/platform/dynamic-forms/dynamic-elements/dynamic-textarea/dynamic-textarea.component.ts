import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';

export const TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdDynamicTextareaComponent),
  multi: true,
};

@Component({
  providers: [ TEXTAREA_INPUT_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-dynamic-textarea',
  styleUrls: [ './dynamic-textarea.component.scss' ],
  templateUrl: './dynamic-textarea.component.html',
})
export class TdDynamicTextareaComponent extends AbstractControlValueAccessor implements ControlValueAccessor {

  control: FormControl;

  label: string = '';

  required: boolean = undefined;

}
