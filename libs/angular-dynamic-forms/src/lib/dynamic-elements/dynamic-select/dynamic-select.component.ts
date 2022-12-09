import { Component, TemplateRef } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-select',
  styleUrls: ['./dynamic-select.component.scss'],
  templateUrl: './dynamic-select.component.html',
})
export class TdDynamicSelectComponent {
  control!: UntypedFormControl;

  label = '';

  hint = '';

  name = '';

  required = false;

  selections?: any[];

  multiple?: boolean;

  errorMessageTemplate!: TemplateRef<any>;

  placeholder = '';
}
