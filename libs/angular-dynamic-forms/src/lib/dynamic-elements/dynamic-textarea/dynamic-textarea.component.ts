import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'td-dynamic-textarea',
  styleUrls: ['./dynamic-textarea.component.scss'],
  templateUrl: './dynamic-textarea.component.html',
  imports: [CommonModule, ReactiveFormsModule, MatInput, MatLabel, MatError, MatHint, MatFormField],
})
export class TdDynamicTextareaComponent {
  control!: UntypedFormControl;

  label = '';

  hint = '';

  name = '';

  required = false;

  errorMessageTemplate!: TemplateRef<any>;

  placeholder = '';
}
