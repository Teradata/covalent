import { Component, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { mixinControlValueAccessor, IControlValueAccessor } from '@covalent/core/common';

export class TdDynamicFileBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdDynamicFileInputMixinBase = mixinControlValueAccessor(TdDynamicFileBase);

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicFileInputComponent),
    multi: true,
  }],
  selector: 'td-dynamic-file-input',
  styleUrls: [ './dynamic-file-input.component.scss' ],
  templateUrl: './dynamic-file-input.component.html',
})
export class TdDynamicFileInputComponent extends _TdDynamicFileInputMixinBase implements IControlValueAccessor {

  control: FormControl;

  required: boolean = undefined;

  label: string = '';

  _handlefileDrop(value: File): void {
    this.control.setValue(value);
  }

}
