import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * ANIMATIONS
 */

import { TdToggleDirective } from './animations/toggle/toggle.directive';
import { TdFadeDirective } from './animations/fade/fade.directive';

const TD_ANIMATIONS: Type<any>[] = [
  TdToggleDirective,
  TdFadeDirective,
];

export { TdToggleDirective, TdFadeDirective };
export { TdCollapseAnimation } from './animations/collapse/collapse.animation';

/**
 * FORMS
 */

// Form Directives
import { TdAutoTrimDirective } from './forms/auto-trim/auto-trim.directive';

// Validators
import { TdMinValidator } from './forms/validators/min/min.validator';
import { TdMaxValidator } from './forms/validators/max/max.validator';
import { TdNumberRequiredValidator } from './forms/validators/number-required/number-required.validator';

const TD_VALIDATORS: Type<any>[] = [
  TdMinValidator,
  TdMaxValidator,
  TdNumberRequiredValidator,
];

export { TdAutoTrimDirective };
export { TdMinValidator, TdMaxValidator, TdNumberRequiredValidator };

/**
 * PIPES
 */
import { TdOrderByPipe } from './pipes/orderby/orderby.pipe';
import { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { TdBytesPipe } from './pipes/bytes/bytes.pipe';
import { TdDigitsPipe } from './pipes/digits/digits.pipe';
import { TdTruncatePipe } from './pipes/truncate/truncate.pipe';

const TD_PIPES: Type<any>[] = [
  TdOrderByPipe,
  TdTimeAgoPipe,
  TdTimeDifferencePipe,
  TdBytesPipe,
  TdDigitsPipe,
  TdTruncatePipe,
];

export { TdOrderByPipe, TdTimeAgoPipe, TdTimeDifferencePipe,
         TdBytesPipe, TdDigitsPipe, TdTruncatePipe };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [
    TD_PIPES,
    TD_ANIMATIONS,
    TD_VALIDATORS,
  ],
  exports: [
    FormsModule,
    CommonModule,
    TD_PIPES,
    TD_ANIMATIONS,
    TD_VALIDATORS,
  ],
})
export class CovalentNucleusModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CovalentNucleusModule,
      providers: [ ],
    };
  }
}
