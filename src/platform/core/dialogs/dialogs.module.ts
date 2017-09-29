import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatInputModule, MatButtonModule } from '@angular/material';

import { TdDialogComponent, TdDialogTitleDirective,
         TdDialogActionsDirective, TdDialogContentDirective } from './dialog.component';
import { TdAlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { TdDialogService, DIALOG_PROVIDER } from './services/dialog.service';

const TD_DIALOGS: Type<any>[] = [
  TdAlertDialogComponent,
  TdConfirmDialogComponent,
  TdPromptDialogComponent,
  TdDialogComponent,
  TdDialogTitleDirective,
  TdDialogActionsDirective,
  TdDialogContentDirective,
];

const TD_DIALOGS_ENTRY_COMPONENTS: Type<any>[] = [
  TdAlertDialogComponent,
  TdConfirmDialogComponent,
  TdPromptDialogComponent,
];

export { IAlertConfig, IConfirmConfig, IPromptConfig } from './services/dialog.service';
export { TdDialogService, TdDialogComponent, TdDialogTitleDirective,
         TdAlertDialogComponent, TdConfirmDialogComponent, TdPromptDialogComponent };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [
    TD_DIALOGS,
  ],
  exports: [
    TD_DIALOGS,
  ],
  providers: [
    DIALOG_PROVIDER,
  ],
  entryComponents: [
    TD_DIALOGS_ENTRY_COMPONENTS,
  ],
})
export class CovalentDialogsModule {

}
