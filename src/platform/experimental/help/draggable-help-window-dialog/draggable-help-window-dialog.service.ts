import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { DraggableHelpWindowDialogComponent } from './draggable-help-window-dialog.component';
import { IHelpMenuDataItem, IHelpWindowComponentLabels } from '../help.utils';
import { Overlay, NoopScrollStrategy } from '@angular/cdk/overlay';
import { CovalentHelpModule } from '../help.module';

@Injectable({
  providedIn: CovalentHelpModule,
})
export class DraggableHelpWindowDialogService {
  scrollStrategy: NoopScrollStrategy;

  constructor(private _dialog: MatDialog, overlay: Overlay) {
    this.scrollStrategy = overlay.scrollStrategies.noop();
  }

  open(
    items: IHelpMenuDataItem[],
    config?: MatDialogConfig,
    labels?: IHelpWindowComponentLabels,
  ): MatDialogRef<DraggableHelpWindowDialogComponent> {
    let draggableDialog: MatDialogRef<DraggableHelpWindowDialogComponent> = this._dialog.open(
      DraggableHelpWindowDialogComponent,
      {
        hasBackdrop: false,
        closeOnNavigation: true,
        panelClass: 'draggable-dialog-wrapper',
        position: { bottom: '0', right: '0' },
        scrollStrategy: this.scrollStrategy,
        ...config,
      },
    );
    draggableDialog.componentInstance.data = { items, labels };
    return draggableDialog;
  }
}
