import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { Overlay } from '@angular/cdk/overlay';
import { CovalentHelpModule } from '../help.module';
import { ThemePalette } from '@angular/material/core';
import { HelpWindowComponent, IHelpWindowComponentLabels } from '../help-window/help-window.component';
import { TdDialogService } from '@covalent/core/dialogs';
import { IHelpItem } from '../help.component';

export interface IHelpWindowServiceConfig {
  items: IHelpItem[];
  dialogConfig?: MatDialogConfig;
  labels?: IHelpWindowComponentLabels;
  toolbarColor?: ThemePalette;
}

@Injectable({
  providedIn: CovalentHelpModule,
})
export class HelpWindowService {
  constructor(private _overlay: Overlay, private _tdDialogService: TdDialogService) {}

  open(config: IHelpWindowServiceConfig): MatDialogRef<HelpWindowComponent> {
    const CDK_OVERLAY_CUSTOM_CLASS: string = 'td-draggable-help-window-wrapper';
    const DEFAULT_DRAGGABLE_DIALOG_CONFIG: MatDialogConfig = {
      hasBackdrop: false,
      closeOnNavigation: true,
      panelClass: CDK_OVERLAY_CUSTOM_CLASS,
      position: { bottom: '0', right: '0' },
      height: '475px',
      width: '360px',
      scrollStrategy: this._overlay.scrollStrategies.noop(),
    };

    const draggableDialog: MatDialogRef<HelpWindowComponent> = this._tdDialogService.openDraggable({
      component: HelpWindowComponent,
      config: {
        ...DEFAULT_DRAGGABLE_DIALOG_CONFIG,
        ...config.dialogConfig,
      },
      dragHandleSelectors: ['.td-help-window-toolbar'],
      draggableClass: 'td-draggable-help-window',
    });

    draggableDialog.componentInstance.items = config.items;
    draggableDialog.componentInstance.labels = config.labels;
    draggableDialog.componentInstance.toolbarColor = 'toolbarColor' in config ? config.toolbarColor : 'primary';
    draggableDialog.componentInstance.closed.subscribe(() => draggableDialog.close());

    return draggableDialog;
  }
}
