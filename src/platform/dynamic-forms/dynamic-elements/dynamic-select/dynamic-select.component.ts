import { Component, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-select',
  styleUrls: [ './dynamic-select.component.scss' ],
  templateUrl: './dynamic-select.component.html',
})
export class TdDynamicSelectComponent {

  control: FormControl;

  label: string = '';

  hint: string = '';

  name: string = '';

  required: boolean = undefined;

  selections: any[] = undefined;

  multiple: boolean = undefined;

  errorMessageTemplate: TemplateRef<any> = undefined;

}
