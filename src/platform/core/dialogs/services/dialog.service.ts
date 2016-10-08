import { Injectable, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';

interface IDialogConfig {
  title?: string;
  message: string;
  viewContainerRef: ViewContainerRef;
}

interface IAlertConfig extends IDialogConfig {
  closeButton?: string;
}

interface IConfirmConfig extends IDialogConfig {
  acceptButton?: string;
  cancelButton?: string;
}

interface IPromptConfig extends IConfirmConfig {
  value?: string;
}


@Injectable()
export class TdDialogService {

  constructor(private _dialogService: MdDialog) {}

  /**
   * params:
   * - alertConfig: IAlertConfig {
   *     title?: string;
   *     message: string;
   *     viewContainerRef: ViewContainerRef;
   *     closeButton?: string;
   * }
   *
   * Opens an alert dialog with the provided config.
   * Returns an MdDialogRef<TdAlertDialogComponent> object.
   */
  public openAlert(alertConfig: IAlertConfig): MdDialogRef<TdAlertDialogComponent> {
    let dialogConfig: MdDialogConfig = new MdDialogConfig();
    dialogConfig.viewContainerRef = alertConfig.viewContainerRef;
    let dialogRef: MdDialogRef<TdAlertDialogComponent> =
      this._dialogService.open(TdAlertDialogComponent, dialogConfig);
    let alertDialogComponent: TdAlertDialogComponent = dialogRef.componentInstance;
    alertDialogComponent.title = alertConfig.title;
    alertDialogComponent.message = alertConfig.message;
    if (alertConfig.closeButton) {
      alertDialogComponent.closeButton = alertConfig.closeButton;
    }
    return dialogRef;
  }

  /**
   * params:
   * - confirmConfig: IConfirmConfig {
   *     title?: string;
   *     message: string;
   *     viewContainerRef: ViewContainerRef;
   *     acceptButton?: string;
   *     cancelButton?: string;
   * }
   *
   * Opens a confirm dialog with the provided config.
   * Returns an MdDialogRef<TdConfirmDialogComponent> object.
   */
  public openConfirm(confirmConfig: IConfirmConfig): MdDialogRef<TdConfirmDialogComponent> {
    let dialogConfig: MdDialogConfig = new MdDialogConfig();
    dialogConfig.viewContainerRef = confirmConfig.viewContainerRef;
    let dialogRef: MdDialogRef<TdConfirmDialogComponent> =
      this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
    let confirmDialogComponent: TdConfirmDialogComponent = dialogRef.componentInstance;
    confirmDialogComponent.title = confirmConfig.title;
    confirmDialogComponent.message = confirmConfig.message;
    if (confirmConfig.acceptButton) {
      confirmDialogComponent.acceptButton = confirmConfig.acceptButton;
    }
    if (confirmConfig.cancelButton) {
      confirmDialogComponent.cancelButton = confirmConfig.cancelButton;
    }
    return dialogRef;
  }

  /**
   * params:
   * - promptConfig: IPromptConfig {
   *     title?: string;
   *     message: string;
   *     viewContainerRef: ViewContainerRef;
   *     acceptButton?: string;
   *     cancelButton?: string;
   * }
   *
   * Opens a prompt dialog with the provided config.
   * Returns an MdDialogRef<TdPromptDialogComponent> object.
   */
  public openPrompt(promptConfig: IPromptConfig): MdDialogRef<TdPromptDialogComponent> {
    let dialogConfig: MdDialogConfig = new MdDialogConfig();
    dialogConfig.viewContainerRef = promptConfig.viewContainerRef;
    let dialogRef: MdDialogRef<TdPromptDialogComponent> =
      this._dialogService.open(TdPromptDialogComponent, dialogConfig);
    let promptDialogComponent: TdPromptDialogComponent = dialogRef.componentInstance;
    promptDialogComponent.title = promptConfig.title;
    promptDialogComponent.message = promptConfig.message;
    promptDialogComponent.value = promptConfig.value;
    if (promptConfig.acceptButton) {
      promptDialogComponent.acceptButton = promptConfig.acceptButton;
    }
    if (promptConfig.cancelButton) {
      promptDialogComponent.cancelButton = promptConfig.cancelButton;
    }
    return dialogRef;
  }

}
