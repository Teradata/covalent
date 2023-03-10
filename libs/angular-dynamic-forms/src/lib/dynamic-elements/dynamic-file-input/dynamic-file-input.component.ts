import { Component, TemplateRef } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-file-input',
  styleUrls: ['./dynamic-file-input.component.scss'],
  templateUrl: './dynamic-file-input.component.html',
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
