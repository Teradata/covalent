import { Component, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-datepicker',
  styleUrls: ['./dynamic-datepicker.component.scss'],
  templateUrl: './dynamic-datepicker.component.html',
})
export class TdDynamicDatepickerComponent {

  control: FormControl;

  label: string = '';

  hint: string = '';

  name: string = '';

  type: string = undefined;

  required: boolean = undefined;

  min: number = undefined;

  max: number = undefined;

  errorMessageTemplate: TemplateRef<any> = undefined;

}
