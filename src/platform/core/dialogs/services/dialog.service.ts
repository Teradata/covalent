import { Injectable, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';

export interface IDialogConfig {
  title?: string;
  message: string;
  viewContainerRef?: ViewContainerRef;
}

export interface IAlertConfig extends IDialogConfig {
  closeButton?: string;
}

export interface IConfirmConfig extends IDialogConfig {
  acceptButton?: string;
  cancelButton?: string;
}

export interface IPromptConfig extends IConfirmConfig {
  value?: string;
}

@Injectable()
export class TdDialogService {

  private _viewContainerRef: ViewContainerRef;

  constructor(private _dialogService: MdDialog) {}

  /**
   * params:
   * - viewContainerRef: ViewContainerRef
   * 
   * Sets a detaulf ViewContainerRef object to which all dialogs will belong to.
   */
  public setDefaultViewContainerRef(viewContainerRef: ViewContainerRef): void {
    this._viewContainerRef = viewContainerRef;
  }

  /**
   * params:
   * - config: IAlertConfig {
   *     message: string;
   *     title?: string;
   *     viewContainerRef?: ViewContainerRef;
   *     closeButton?: string;
   * }
   *
   * Opens an alert dialog with the provided config.
   * Returns an MdDialogRef<TdAlertDialogComponent> object.
   */
  public openAlert(config: IAlertConfig): MdDialogRef<TdAlertDialogComponent> {
    let dialogConfig: MdDialogConfig = this._createConfig(config.viewContainerRef);
    let dialogRef: MdDialogRef<TdAlertDialogComponent> =
      this._dialogService.open(TdAlertDialogComponent, dialogConfig);
    let alertDialogComponent: TdAlertDialogComponent = dialogRef.componentInstance;
    alertDialogComponent.title = config.title;
    alertDialogComponent.message = config.message;
    if (config.closeButton) {
      alertDialogComponent.closeButton = config.closeButton;
    }
    return dialogRef;
  }

  /**
   * params:
   * - config: IConfirmConfig {
   *     message: string;
   *     title?: string;
   *     viewContainerRef?: ViewContainerRef;
   *     acceptButton?: string;
   *     cancelButton?: string;
   * }
   *
   * Opens a confirm dialog with the provided config.
   * Returns an MdDialogRef<TdConfirmDialogComponent> object.
   */
  public openConfirm(config: IConfirmConfig): MdDialogRef<TdConfirmDialogComponent> {
    let dialogConfig: MdDialogConfig = this._createConfig(config.viewContainerRef);
    let dialogRef: MdDialogRef<TdConfirmDialogComponent> =
      this._dialogService.open(TdConfirmDialogComponent, dialogConfig);
    let confirmDialogComponent: TdConfirmDialogComponent = dialogRef.componentInstance;
    confirmDialogComponent.title = config.title;
    confirmDialogComponent.message = config.message;
    if (config.acceptButton) {
      confirmDialogComponent.acceptButton = config.acceptButton;
    }
    if (config.cancelButton) {
      confirmDialogComponent.cancelButton = config.cancelButton;
    }
    return dialogRef;
  }

  /**
   * params:
   * - config: IPromptConfig {
   *     message: string;
   *     title?: string;
   *     value?: string;
   *     viewContainerRef?: ViewContainerRef;
   *     acceptButton?: string;
   *     cancelButton?: string;
   * }
   *
   * Opens a prompt dialog with the provided config.
   * Returns an MdDialogRef<TdPromptDialogComponent> object.
   */
  public openPrompt(config: IPromptConfig): MdDialogRef<TdPromptDialogComponent> {
    let dialogConfig: MdDialogConfig = this._createConfig(config.viewContainerRef);
    let dialogRef: MdDialogRef<TdPromptDialogComponent> =
      this._dialogService.open(TdPromptDialogComponent, dialogConfig);
    let promptDialogComponent: TdPromptDialogComponent = dialogRef.componentInstance;
    promptDialogComponent.title = config.title;
    promptDialogComponent.message = config.message;
    promptDialogComponent.value = config.value;
    if (config.acceptButton) {
      promptDialogComponent.acceptButton = config.acceptButton;
    }
    if (config.cancelButton) {
      promptDialogComponent.cancelButton = config.cancelButton;
    }
    return dialogRef;
  }

  private _createConfig(viewContainerRef: ViewContainerRef): MdDialogConfig {
    let dialogConfig: MdDialogConfig = new MdDialogConfig();
    dialogConfig.viewContainerRef = viewContainerRef ? viewContainerRef : this._viewContainerRef;
    if (!dialogConfig.viewContainerRef) {
      throw 'ViewContainerRef was not provided for dialog.';
    }
    return dialogConfig;
  }

}
