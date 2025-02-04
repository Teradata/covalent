import { Type } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import {
  TdDialogComponent,
  TdDialogTitleDirective,
  TdDialogActionsDirective,
  TdDialogContentDirective,
  TdDialogStatusDirective,
} from './dialog.component';
import { TdAlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { TdStatusDialogComponent } from './status-dialog/status-dialog.component';
import { TdDialogService } from './services/dialog.service';
import { TdWindowDialogComponent } from './window-dialog/window-dialog.component';

const TD_DIALOGS: Type<any>[] = [
  TdAlertDialogComponent,
  TdConfirmDialogComponent,
  TdPromptDialogComponent,
  TdDialogComponent,
  TdDialogStatusDirective,
  TdDialogTitleDirective,
  TdDialogActionsDirective,
  TdDialogContentDirective,
  TdWindowDialogComponent,
  TdAlertDialogComponent,
  TdConfirmDialogComponent,
  TdPromptDialogComponent,
  TdStatusDialogComponent,
];

/**
 * @deprecated This module is deprecated and will be removed in future versions.
 * Please migrate to using standalone components as soon as possible.
 */
@NgModule({
  imports: [...TD_DIALOGS],
  exports: [...TD_DIALOGS],
  providers: [TdDialogService],
})
export class CovalentDialogsModule {}
