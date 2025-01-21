import { Component, TemplateRef } from '@angular/core';
import { FormsModule, UntypedFormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { TdFileDropDirective, TdFileInputComponent } from '@covalent/core/file';

@Component({
  selector: 'td-dynamic-file-input',
  imports: [ FormsModule, MatIcon, MatFormFieldModule, TdFileDropDirective, TdFileInputComponent],
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
