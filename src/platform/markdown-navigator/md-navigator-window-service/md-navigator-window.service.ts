import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { Overlay } from '@angular/cdk/overlay';
import { CovalentMdNavigatorModule } from '../md-navigator.module';
import { ThemePalette } from '@angular/material/core';
import {
  MdNavigatorWindowComponent,
  IMdNavigatorWindowLabels,
} from '../md-navigator-window/md-navigator-window.component';
import { TdDialogService } from '@covalent/core/dialogs';
import { IMdNavigatorItem } from '../md-navigator.component';

export interface IMdNavigatorWindowServiceConfig {
  items: IMdNavigatorItem[];
  dialogConfig?: MatDialogConfig;
  labels?: IMdNavigatorWindowLabels;
  toolbarColor?: ThemePalette;
}

@Injectable({
  providedIn: CovalentMdNavigatorModule,
})
export class MdNavigatorWindowService {
  constructor(private _overlay: Overlay, private _tdDialogService: TdDialogService) {}

  open(config: IMdNavigatorWindowServiceConfig): MatDialogRef<MdNavigatorWindowComponent> {
    const CDK_OVERLAY_CUSTOM_CLASS: string = 'td-draggable-md-navigator-window-wrapper';
    const DEFAULT_DRAGGABLE_DIALOG_CONFIG: MatDialogConfig = {
      hasBackdrop: false,
      closeOnNavigation: true,
      panelClass: CDK_OVERLAY_CUSTOM_CLASS,
      position: { bottom: '0', right: '0' },
      height: '475px',
      width: '360px',
      scrollStrategy: this._overlay.scrollStrategies.noop(),
    };

    const draggableDialog: MatDialogRef<MdNavigatorWindowComponent> = this._tdDialogService.openDraggable({
      component: MdNavigatorWindowComponent,
      config: {
        ...DEFAULT_DRAGGABLE_DIALOG_CONFIG,
        ...config.dialogConfig,
      },
      dragHandleSelectors: ['.td-md-navigator-window-toolbar'],
      draggableClass: 'td-draggable-md-navigator-window',
    });

    draggableDialog.componentInstance.items = config.items;
    draggableDialog.componentInstance.labels = config.labels;
    draggableDialog.componentInstance.toolbarColor = 'toolbarColor' in config ? config.toolbarColor : 'primary';
    draggableDialog.componentInstance.closed.subscribe(() => draggableDialog.close());

    return draggableDialog;
  }
}
