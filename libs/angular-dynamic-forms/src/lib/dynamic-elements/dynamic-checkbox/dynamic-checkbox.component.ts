import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'td-dynamic-checkbox',
  styleUrls: ['./dynamic-checkbox.component.scss'],
  templateUrl: './dynamic-checkbox.component.html',
  imports: [MatCheckbox, ReactiveFormsModule],
})
export class TdDynamicCheckboxComponent {
  control!: UntypedFormControl;

  label = '';

  name = '';

  hint = '';

  required = false;
}
