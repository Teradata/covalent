import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-checkbox',
  styleUrls: [ './dynamic-checkbox.component.scss' ],
  templateUrl: './dynamic-checkbox.component.html',
})
export class TdDynamicCheckboxComponent {

  control: FormControl;

  label: string = '';

  name: string = '';

  hint: string = '';

  required: boolean = false;

}
