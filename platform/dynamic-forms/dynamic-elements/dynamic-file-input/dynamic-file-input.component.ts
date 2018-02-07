import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';

export const UPLOAD_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdDynamicFileInputComponent),
  multi: true,
};

@Component({
  providers: [ UPLOAD_INPUT_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-dynamic-file-input',
  styleUrls: [ './dynamic-file-input.component.scss' ],
  templateUrl: './dynamic-file-input.component.html',
})
export class TdDynamicFileInputComponent extends AbstractControlValueAccessor implements ControlValueAccessor {

  control: FormControl;

  required: boolean = undefined;

  label: string = '';

}
