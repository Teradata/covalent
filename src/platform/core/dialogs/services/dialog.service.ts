import { Injectable, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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

@Injectable()
export class TdDialogService {

  constructor(private _dialogService: MdDialog) {}

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

}
