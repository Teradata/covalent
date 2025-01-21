import { Component, TemplateRef } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'td-dynamic-datepicker',
  styleUrls: ['./dynamic-datepicker.component.scss'],
  templateUrl: './dynamic-datepicker.component.html',
  imports: [ ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule ],
})
export class TdDynamicDatepickerComponent {
  control!: UntypedFormControl;

  label = '';

  hint = '';

  name = '';

  type?: string;

  required = false;

  min?: number;

  max?: number;

  errorMessageTemplate!: TemplateRef<any>;

  placeholder = '';
}
