import { Component, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-input',
  styleUrls: ['./dynamic-input.component.scss'],
  templateUrl: './dynamic-input.component.html',
})
export class TdDynamicInputComponent {
  control!: FormControl;

  label = '';

  hint = '';

  type!: string;

  required = false;

  name = '';

  min?: number;

  max?: number;

  minLength?: number;

  maxLength?: number;

  errorMessageTemplate!: TemplateRef<any>;

  placeholder = '';
}
