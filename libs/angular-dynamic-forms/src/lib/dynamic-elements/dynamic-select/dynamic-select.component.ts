import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'td-dynamic-select',
  styleUrls: ['./dynamic-select.component.scss'],
  templateUrl: './dynamic-select.component.html',
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatSelect, MatOption, MatLabel, MatError, MatHint],
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
