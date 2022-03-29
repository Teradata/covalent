import { Component, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-textarea',
  styleUrls: ['./dynamic-textarea.component.scss'],
  templateUrl: './dynamic-textarea.component.html',
})
export class TdDynamicTextareaComponent {
  control!: FormControl;

  label = '';

  hint = '';

  name = '';

  required = false;

  errorMessageTemplate!: TemplateRef<any>;

  placeholder = '';
}
