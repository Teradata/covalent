import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'td-dynamic-slider',
  styleUrls: [ './dynamic-slider.component.scss' ],
  templateUrl: './dynamic-slider.component.html',
})
export class TdDynamicSliderComponent {

  control: FormControl;

  label: string = '';

  required: boolean = undefined;

  name: string = '';

  hint: string = '';

  min: number = undefined;

  max: number = undefined;

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  _handleBlur(): void {
    setTimeout(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
}
