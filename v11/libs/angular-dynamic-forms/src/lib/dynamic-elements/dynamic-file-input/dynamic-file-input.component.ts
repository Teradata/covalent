import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { CovalentFileModule } from '@covalent/core/file';

@Component({
  selector: 'td-dynamic-file-input',
  styleUrls: ['./dynamic-file-input.component.scss'],
  templateUrl: './dynamic-file-input.component.html',
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatInput, MatLabel, MatError, MatHint, MatIcon, CovalentFileModule],
})
export class TdDynamicFileInputComponent {
  control!: UntypedFormControl;

  required = false;

  label = '';

  name = '';

  hint = '';

  errorMessageTemplate!: TemplateRef<any>;

  placeholder = '';

  _handlefileDrop(value: any): void {
    this.control?.setValue(value);
  }
}
