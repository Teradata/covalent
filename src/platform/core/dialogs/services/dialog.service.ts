import { Injectable, ViewContainerRef, Provider, SkipSelf, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { ComponentType } from '@angular/cdk/portal';

import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';

export interface IDialogConfig {
  title?: string;
  message: string;
  viewContainerRef?: ViewContainerRef;
  disableClose?: boolean;
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

  constructor(private _dialogService: MatDialog) {}

  /**
   * params:
   * - component: ComponentType<T>
   * - config: MatDialogConfig
   * Wrapper function over the open() method in MatDialog.
   * Opens a modal dialog containing the given component.
   */
  public open<T>(component: ComponentType<T>, config?: MatDialogConfig): MatDialogRef<T> {
    return this._dialogService.open(component, config);
  }

  /**
   * Wrapper function over the closeAll() method in MatDialog.
   * Closes all of the currently-open dialogs.
   */
  public closeAll(): void {
    this._dialogService.closeAll();
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
   * Returns an MatDialogRef<TdAlertDialogComponent> object.
   */
  public openAlert(config: IAlertConfig): MatDialogRef<TdAlertDialogComponent> {
    let dialogConfig: MatDialogConfig = this._createConfig(config);
    let dialogRef: MatDialogRef<TdAlertDialogComponent> =
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
   * Returns an MatDialogRef<TdConfirmDialogComponent> object.
   */
  public openConfirm(config: IConfirmConfig): MatDialogRef<TdConfirmDialogComponent> {
    let dialogConfig: MatDialogConfig = this._createConfig(config);
    let dialogRef: MatDialogRef<TdConfirmDialogComponent> =
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
   * Returns an MatDialogRef<TdPromptDialogComponent> object.
   */
  public openPrompt(config: IPromptConfig): MatDialogRef<TdPromptDialogComponent> {
    let dialogConfig: MatDialogConfig = this._createConfig(config);
    let dialogRef: MatDialogRef<TdPromptDialogComponent> =
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

  private _createConfig(config: MatDialogConfig): MatDialogConfig {
    let dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.viewContainerRef = config.viewContainerRef;
    dialogConfig.disableClose = config.disableClose;
    return dialogConfig;
  }

}

export function DIALOG_PROVIDER_FACTORY(
    parent: TdDialogService, dialog: MatDialog): TdDialogService {
  return parent || new TdDialogService(dialog);
}

export const DIALOG_PROVIDER: Provider = {
  // If there is already service available, use that. Otherwise, provide a new one.
  provide: TdDialogService,
  deps: [[new Optional(), new SkipSelf(), TdDialogService], MatDialog],
  useFactory: DIALOG_PROVIDER_FACTORY,
};
