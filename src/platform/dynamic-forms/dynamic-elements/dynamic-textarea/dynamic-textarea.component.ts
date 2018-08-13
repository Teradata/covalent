import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-textarea',
  styleUrls: [ './dynamic-textarea.component.scss' ],
  templateUrl: './dynamic-textarea.component.html',
})
export class TdDynamicTextareaComponent {

  control: FormControl;

  label: string = '';

  required: boolean = undefined;

}
