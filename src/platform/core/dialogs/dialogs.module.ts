import { Type } from '@angular/core';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdDialogModule, MdInputModule, MdButtonModule } from '@angular/material';

import { TdDialogComponent, TdDialogTitleDirective,
         TdDialogActionsDirective, TdDialogContentDirective } from './dialog.component';
import { TdAlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TdConfirmAgainstValueDialogComponent } from './confirm-against-value-dialog/confirm-against-value-dialog.component';
import { TdPromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { TdDialogService } from './services/dialog.service';

const TD_DIALOGS: Type<any>[] = [
  TdAlertDialogComponent,
  TdConfirmDialogComponent,
  TdConfirmAgainstValueDialogComponent,
  TdPromptDialogComponent,
  TdDialogComponent,
  TdDialogTitleDirective,
  TdDialogActionsDirective,
  TdDialogContentDirective,
];

const TD_DIALOGS_ENTRY_COMPONENTS: Type<any>[] = [
  TdAlertDialogComponent,
  TdConfirmDialogComponent,
  TdConfirmAgainstValueDialogComponent,
  TdPromptDialogComponent,  
];

export { IAlertConfig, IConfirmConfig, IPromptConfig } from './services/dialog.service';
export { TdDialogService, TdDialogComponent, TdDialogTitleDirective,
         TdAlertDialogComponent, TdConfirmDialogComponent, TdPromptDialogComponent };

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MdDialogModule,
    MdInputModule,
    MdButtonModule,
  ],
  declarations: [
    TD_DIALOGS,
  ],
  exports: [
    TD_DIALOGS,
  ],
  providers: [
    TdDialogService,
  ],
  entryComponents: [
    TD_DIALOGS_ENTRY_COMPONENTS,
  ],
})
export class CovalentDialogsModule {

}
