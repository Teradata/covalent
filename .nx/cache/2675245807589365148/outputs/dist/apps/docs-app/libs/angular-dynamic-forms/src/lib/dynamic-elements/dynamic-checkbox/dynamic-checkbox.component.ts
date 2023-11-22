import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-checkbox',
  styleUrls: ['./dynamic-checkbox.component.scss'],
  templateUrl: './dynamic-checkbox.component.html',
})
export class TdDynamicCheckboxComponent {
  control!: UntypedFormControl;

  label = '';

  name = '';

  hint = '';

  required = false;
}
