import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'td-dynamic-input',
  styleUrls: ['./dynamic-input.component.scss'],
  templateUrl: './dynamic-input.component.html',
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatInput, MatLabel, MatError, MatHint],
})
export class TdDynamicInputComponent {
  control!: UntypedFormControl;

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
