import { Component, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-datepicker',
  styleUrls: ['./dynamic-datepicker.component.scss'],
  templateUrl: './dynamic-datepicker.component.html',
})
export class TdDynamicDatepickerComponent {
  control!: FormControl;

  label = '';

  hint = '';

  name = '';

  type?: string;

  required = false;

  min?: number;

  max?: number;

  errorMessageTemplate!: TemplateRef<any>;

  placeholder = '';
}
