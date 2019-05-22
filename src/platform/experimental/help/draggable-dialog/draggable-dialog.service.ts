import { Injectable, TemplateRef,  } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';

import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { DraggableDialogComponent } from './draggable-dialog.component';

@Injectable()
export class DraggableDialogService {

  constructor(private _dialog: MatDialog) {
  }

  open(template: TemplateRef<any>, options: {title?: string}): MatDialogRef<DraggableDialogComponent> {
    let draggableDialog: MatDialogRef<DraggableDialogComponent> = this._dialog.open(DraggableDialogComponent, Object.assign({
      hasBackdrop: false,
      closeOnNavigation: true,
      panelClass: 'draggable-dialog-wrapper',
    }, options));
    draggableDialog.componentInstance.title = options.title;
    draggableDialog.componentInstance.template = template;
    return draggableDialog;
  }

  // open<T>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, options: MatDialogConfig): MatDialogRef<DraggableDialogComponent> {
  //   let draggableDialog: MatDialogRef<DraggableDialogComponent> = this._dialog.open(DraggableDialogComponent, Object.assign({
  //     hasBackdrop: false,
  //     closeOnNavigation: true,
  //     panelClass: 'draggable-dialog-wrapper',
  //   }, options));
  //   draggableDialog.componentInstance.title = options.title;
  //   draggableDialog.componentInstance.template = template;
  //   return draggableDialog;
  // }
}
