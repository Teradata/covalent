import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';

@Component({
  selector: 'td-dynamic-slider',
  styleUrls: ['./dynamic-slider.component.scss'],
  templateUrl: './dynamic-slider.component.html',
  imports: [CommonModule, ReactiveFormsModule, MatSlider, MatSliderThumb],
})
export class TdDynamicSliderComponent {
  control!: UntypedFormControl;

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
