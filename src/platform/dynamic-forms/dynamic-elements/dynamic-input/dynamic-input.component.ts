import { Component, forwardRef, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

import { AbstractControlValueAccessor } from '../abstract-control-value-accesor';

export const INPUT_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TdDynamicInputComponent),
  multi: true,
};

@Component({
  providers: [ INPUT_INPUT_CONTROL_VALUE_ACCESSOR ],
  selector: 'td-dynamic-input',
  styleUrls: [ './dynamic-input.component.scss' ],
  templateUrl: './dynamic-input.component.html',
})
export class TdDynamicInputComponent extends AbstractControlValueAccessor implements ControlValueAccessor, AfterViewInit {

  control: FormControl;

  label: string = '';

  type: string = undefined;

  required: boolean = undefined;

  min: number = undefined;

  max: number = undefined;

  errorMessages: string[] = [];

  ngAfterViewInit(): void {
    this.control.valueChanges.subscribe(() => {

      // clear
      this.errorMessages = [];

      if (this.control.errors) {
        for (let key in this.control.errors) {

          let errorMessage: string = undefined;

          // Angular Standard

          // Not checking required

          if (key === 'min') {
            errorMessage = 'Min: ' + this.control.errors[key].min;
          }

          if (key === 'max') {
            errorMessage = 'Max: ' + this.control.errors[key].max;
          }

          // Custom Validation
          if (this.control.errors[key].hasOwnProperty('message')) {
            errorMessage = this.control.errors[key].message;
          }

          if (errorMessage) {
            this.errorMessages.push(errorMessage);
          }
        }
      }
    });
  }

}
