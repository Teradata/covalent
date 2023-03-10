import { Component, TemplateRef } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-textarea',
  styleUrls: ['./dynamic-textarea.component.scss'],
  templateUrl: './dynamic-textarea.component.html',
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
