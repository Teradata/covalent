import { Injectable, ViewContainerRef, Provider, SkipSelf, Optional, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ComponentType, TemplatePortal, ComponentPortal } from '@angular/cdk/portal';

import { TdAlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { TdConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { TdPromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { DragDrop, DragRef } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';

export interface IDialogConfig extends MatDialogConfig {
  title?: string;
  message: string;
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
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _dialogService: MatDialog,
    private _dragDrop: DragDrop,
  ) {}

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
    let dialogRef: MatDialogRef<TdAlertDialogComponent> = this._dialogService.open(
      TdAlertDialogComponent,
      dialogConfig,
    );
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
    let dialogRef: MatDialogRef<TdConfirmDialogComponent> = this._dialogService.open(
      TdConfirmDialogComponent,
      dialogConfig,
    );
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
    let dialogRef: MatDialogRef<TdPromptDialogComponent> = this._dialogService.open(
      TdPromptDialogComponent,
      dialogConfig,
    );
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

  /**
   * Opens a draggable dialog containing the given component.
   */
  public openDraggable<T>(
    component: ComponentType<T>,
    config?: MatDialogConfig,
    dragHandleSelectors?: string[],
  ): MatDialogRef<T> {
    const dialogRef: MatDialogRef<T, any> = this._dialogService.open(component, config);

    const CDK_OVERLAY_PANE_SELECTOR: string = '.cdk-overlay-pane';
    const CDK_OVERLAY_CONTAINER_SELECTOR: string = '.cdk-overlay-container';

    dialogRef.afterOpened().subscribe(() => {
      const dialogElement: HTMLElement = <HTMLElement>this._document.getElementById(dialogRef.id);
      const draggableElement: DragRef = this._dragDrop.createDrag(dialogElement);

      if (dragHandleSelectors && dragHandleSelectors.length) {
        const dragHandles: Element[] = dragHandleSelectors.reduce(
          (acc: Element[], curr: string) => [...acc, ...Array.from(dialogElement.querySelectorAll(curr))],
          [],
        );
        if (dragHandles.length > 0) {
          draggableElement.withHandles(<HTMLElement[]>dragHandles);
        }
      }

      const rootElement: Element = dialogElement.closest(CDK_OVERLAY_PANE_SELECTOR);
      if (rootElement) {
        draggableElement.withRootElement(<HTMLElement>rootElement);
      }
      const boundaryElement: Element = dialogElement.closest(CDK_OVERLAY_CONTAINER_SELECTOR);
      if (boundaryElement) {
        draggableElement.withBoundaryElement(<HTMLElement>boundaryElement);
      }
    });

    return dialogRef;
  }

  private _createConfig(config: IDialogConfig): MatDialogConfig {
    let dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.width = '400px';
    Object.assign(dialogConfig, config);
    return dialogConfig;
  }
}
