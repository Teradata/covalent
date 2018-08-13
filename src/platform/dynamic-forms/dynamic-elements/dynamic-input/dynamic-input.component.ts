import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-input',
  styleUrls: [ './dynamic-input.component.scss' ],
  templateUrl: './dynamic-input.component.html',
})
export class TdDynamicInputComponent {

  control: FormControl;

  label: string = '';

  type: string = undefined;

  required: boolean = undefined;

  min: number = undefined;

  max: number = undefined;

  minLength: number = undefined;

  maxLength: number = undefined;

}
