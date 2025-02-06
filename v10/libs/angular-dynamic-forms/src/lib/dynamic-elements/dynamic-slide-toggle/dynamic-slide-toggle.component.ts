import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'td-dynamic-slide-toggle',
  styleUrls: ['./dynamic-slide-toggle.component.scss'],
  templateUrl: './dynamic-slide-toggle.component.html',
  imports: [ReactiveFormsModule, MatSlideToggle],
})
export class TdDynamicSlideToggleComponent {
  control!: UntypedFormControl;

  label = '';

  name = '';

  hint = '';

  required = false;
}
