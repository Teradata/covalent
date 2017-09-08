import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * ANIMATIONS
 */

// Directives
import { TdToggleDirective } from './animations/toggle/toggle.directive';
import { TdFadeDirective } from './animations/fade/fade.directive';

const TD_ANIMATIONS: Type<any>[] = [
  TdToggleDirective,
  TdFadeDirective,
];
export { TdToggleDirective, TdFadeDirective };

// Utility functions
export { TdRotateAnimation, IRotateAnimation } from './animations/rotate/rotate.animation';
export { TdCollapseAnimation, ICollapseAnimation } from './animations/collapse/collapse.animation';
export { TdFadeInOutAnimation, IFadeInOutAnimation } from './animations/fade/fadeInOut.animation';
export { TdBounceAnimation } from './animations/bounce/bounce.animation';
export { TdFlashAnimation } from './animations/flash/flash.animation';
export { TdHeadshakeAnimation } from './animations/headshake/headshake.animation';
export { TdJelloAnimation } from './animations/jello/jello.animation';
export { TdPulseAnimation } from './animations/pulse/pulse.animation';

/**
 * BEHAVIORS
 */

export { ICanDisable, mixinDisabled } from './behaviors/disabled.mixin';
export { ICanDisableRipple, mixinDisableRipple } from './behaviors/disable-ripple.mixin';

/**
 * FORMS
 */

// Form Directives
import { TdAutoTrimDirective } from './forms/auto-trim/auto-trim.directive';

const TD_FORMS: Type<any>[] = [
  TdAutoTrimDirective,
];

export { TdAutoTrimDirective };

// Validators
const TD_VALIDATORS: Type<any>[] = [
];

export { CovalentValidators } from './forms/validators/validators';

/**
 * PIPES
 */
import { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { TdBytesPipe } from './pipes/bytes/bytes.pipe';
import { TdDigitsPipe } from './pipes/digits/digits.pipe';
import { TdTruncatePipe } from './pipes/truncate/truncate.pipe';

const TD_PIPES: Type<any>[] = [
  TdTimeAgoPipe,
  TdTimeDifferencePipe,
  TdBytesPipe,
  TdDigitsPipe,
  TdTruncatePipe,
];

export { TdTimeAgoPipe, TdTimeDifferencePipe,
         TdBytesPipe, TdDigitsPipe, TdTruncatePipe };

/**
 * Services
 */

import { RouterPathService } from './services/router-path.service';
import { IconService } from './services/icon.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [
    TD_FORMS,
    TD_PIPES,
    TD_ANIMATIONS,
    TD_VALIDATORS,
  ],
  exports: [
    FormsModule,
    CommonModule,
    TD_FORMS,
    TD_PIPES,
    TD_ANIMATIONS,
    TD_VALIDATORS,
  ],
  providers: [
    RouterPathService,
    IconService,
  ],
})
export class CovalentCommonModule {

}
