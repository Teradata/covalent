import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-slide-toggle',
  styleUrls: ['./dynamic-slide-toggle.component.scss'],
  templateUrl: './dynamic-slide-toggle.component.html',
})
export class TdDynamicSlideToggleComponent {
  control!: UntypedFormControl;

  label = '';

  name = '';

  hint = '';

  required = false;
}
