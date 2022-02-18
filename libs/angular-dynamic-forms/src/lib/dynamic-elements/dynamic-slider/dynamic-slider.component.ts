import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-slider',
  styleUrls: ['./dynamic-slider.component.scss'],
  templateUrl: './dynamic-slider.component.html',
})
export class TdDynamicSliderComponent {
  control!: FormControl;

  label = '';

  required = false;

  name = '';

  hint = '';

  min?: number;

  max?: number;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  _handleBlur(): void {
    setTimeout(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
}
