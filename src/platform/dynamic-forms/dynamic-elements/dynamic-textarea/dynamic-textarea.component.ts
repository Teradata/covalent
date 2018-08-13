import { Component, forwardRef, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

import { mixinControlValueAccessor, IControlValueAccessor } from '@covalent/core/common';

export class TdDynamicTextareaBase {
  constructor(public _changeDetectorRef: ChangeDetectorRef) {}
}

/* tslint:disable-next-line */
export const _TdDynamicTextareaMixinBase = mixinControlValueAccessor(TdDynamicTextareaBase);

@Component({
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TdDynamicTextareaComponent),
    multi: true,
  }],
  selector: 'td-dynamic-textarea',
  styleUrls: [ './dynamic-textarea.component.scss' ],
  templateUrl: './dynamic-textarea.component.html',
})
export class TdDynamicTextareaComponent extends _TdDynamicTextareaMixinBase implements IControlValueAccessor {

  control: FormControl;

  label: string = '';

  required: boolean = undefined;

  constructor(_changeDetectorRef: ChangeDetectorRef) {
    super(_changeDetectorRef);
  }

}
