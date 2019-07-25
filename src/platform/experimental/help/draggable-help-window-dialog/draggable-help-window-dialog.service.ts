import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { DraggableHelpWindowDialogComponent } from './draggable-help-window-dialog.component';
import { IHelpMenuDataItem, IHelpWindowComponentLabels } from '../help.utils';
import { Overlay, NoopScrollStrategy } from '@angular/cdk/overlay';
import { CovalentHelpModule } from '../help.module';
import { ThemePalette } from '@angular/material/core';

interface IDraggableHelpWindowDialogServiceConfig {
  items: IHelpMenuDataItem[];
  dialogConfig?: MatDialogConfig;
  labels?: IHelpWindowComponentLabels;
  toolbarColor?: ThemePalette;
}

@Injectable({
  providedIn: CovalentHelpModule,
})
export class DraggableHelpWindowDialogService {
  scrollStrategy: NoopScrollStrategy;

  constructor(private _dialog: MatDialog, overlay: Overlay) {
    this.scrollStrategy = overlay.scrollStrategies.noop();
  }

  open(config: IDraggableHelpWindowDialogServiceConfig): MatDialogRef<DraggableHelpWindowDialogComponent> {
    let draggableDialog: MatDialogRef<DraggableHelpWindowDialogComponent> = this._dialog.open(
      DraggableHelpWindowDialogComponent,
      {
        hasBackdrop: false,
        closeOnNavigation: true,
        panelClass: 'draggable-dialog-wrapper',
        position: { bottom: '0', right: '0' },
        scrollStrategy: this.scrollStrategy,
        ...config.dialogConfig,
      },
    );
    draggableDialog.componentInstance.data = {
      items: config.items,
      labels: config.labels,
      toolbarColor: config.toolbarColor,
    };
    return draggableDialog;
  }
}
