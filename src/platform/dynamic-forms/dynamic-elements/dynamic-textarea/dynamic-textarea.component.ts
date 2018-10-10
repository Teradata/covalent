import { Component, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-textarea',
  styleUrls: [ './dynamic-textarea.component.scss' ],
  templateUrl: './dynamic-textarea.component.html',
})
export class TdDynamicTextareaComponent {

  control: FormControl;

  label: string = '';

  hint: string = '';

  name: string = '';

  required: boolean = undefined;

  errorMessageTemplate: TemplateRef<any> = undefined;

}
