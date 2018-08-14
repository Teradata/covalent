import { Component } from '@angular/core';
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

  min: number = undefined;

  max: number = undefined;

}
