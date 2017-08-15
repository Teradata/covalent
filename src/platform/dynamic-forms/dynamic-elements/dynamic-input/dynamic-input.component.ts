import { Component} from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';

@Component({
  selector: 'td-dynamic-input',
  styleUrls: [ './dynamic-input.component.scss' ],
  templateUrl: './dynamic-input.component.html',
})
export class TdDynamicInputComponent extends AbstractControlValueAccessor implements ControlValueAccessor {

  control: FormControl;

  label: string = '';

  type: string = undefined;

  required: boolean = undefined;

  min: number = undefined;

  max: number = undefined;

  value: any = undefined;

}
