import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'td-dynamic-datepicker',
  styleUrls: ['./dynamic-datepicker.component.scss'],
  templateUrl: './dynamic-datepicker.component.html',
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatInput, MatLabel, MatError, MatHint, MatDatepickerModule],
})
export class TdDynamicDatepickerComponent {
  control!: UntypedFormControl;

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
