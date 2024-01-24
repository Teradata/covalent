import { Type } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_ICON_DEFAULT_OPTIONS } from '@angular/material/icon';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

/**
 * Directives
 */
import { TdAutoTrimDirective } from './forms/auto-trim/auto-trim.directive';
import { TdFullscreenDirective } from './directives/fullscreen/fullscreen.directive';

const TD_DIRECTIVES: Type<any>[] = [TdAutoTrimDirective, TdFullscreenDirective];

// Validators
const TD_VALIDATORS: Type<any>[] = [];

/**
 * PIPES
 */
import { TdTimeAgoPipe } from './pipes/time-ago/time-ago.pipe';
import { TdTimeDifferencePipe } from './pipes/time-difference/time-difference.pipe';
import { TdTimeUntilPipe } from './pipes/time-until/time-until.pipe';
import { TdBytesPipe } from './pipes/bytes/bytes.pipe';
import { TdDecimalBytesPipe } from './pipes/decimal-bytes/decimal-bytes.pipe';
import { TdDigitsPipe } from './pipes/digits/digits.pipe';
import { TdTruncatePipe } from './pipes/truncate/truncate.pipe';

const TD_PIPES: Type<any>[] = [
  TdTimeAgoPipe,
  TdTimeDifferencePipe,
  TdTimeUntilPipe,
  TdBytesPipe,
  TdDecimalBytesPipe,
  TdDigitsPipe,
  TdTruncatePipe,
];

const TD_DEFAULT_ICON_OPTIONS = {
  provide: MAT_ICON_DEFAULT_OPTIONS,
  useValue: { fontSet: 'material-symbols-outlined' },
};

const TD_DEFAULT_FORM_FIELD_OPTIONS = {
  provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
  useValue: { appearance: 'outline' },
};

/**
 * Services
 */

import { RouterPathService } from './services/router-path.service';
import { IconService } from './services/icon.service';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
  exports: [FormsModule, CommonModule, TD_DIRECTIVES, TD_PIPES, TD_VALIDATORS],
  providers: [
    RouterPathService,
    IconService,
    TD_DEFAULT_ICON_OPTIONS,
    TD_DEFAULT_FORM_FIELD_OPTIONS,
  ],
})
export class CovalentCommonModule {}
