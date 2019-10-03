import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';

import { Overlay } from '@angular/cdk/overlay';
import { CovalentMarkdownNavigatorModule } from '../markdown-navigator.module';
import { ThemePalette } from '@angular/material/core';
import {
  MarkdownNavigatorWindowComponent,
  IMarkdownNavigatorWindowLabels,
} from '../markdown-navigator-window/markdown-navigator-window.component';
import { TdDialogService } from '@covalent/core/dialogs';
import { IMarkdownNavigatorItem } from '../markdown-navigator.component';

export interface IMarkdownNavigatorWindowConfig {
  items: IMarkdownNavigatorItem[];
  dialogConfig?: MatDialogConfig;
  labels?: IMarkdownNavigatorWindowLabels;
  toolbarColor?: ThemePalette;
}

@Injectable({
  providedIn: CovalentMarkdownNavigatorModule,
})
export class MarkdownNavigatorWindowService {
  constructor(private _overlay: Overlay, private _tdDialogService: TdDialogService) {}

  open(config: IMarkdownNavigatorWindowConfig): MatDialogRef<MarkdownNavigatorWindowComponent> {
    const CDK_OVERLAY_CUSTOM_CLASS: string = 'td-draggable-markdown-navigator-window-wrapper';
    const DEFAULT_DRAGGABLE_DIALOG_CONFIG: MatDialogConfig = {
      hasBackdrop: false,
      closeOnNavigation: true,
      panelClass: CDK_OVERLAY_CUSTOM_CLASS,
      position: { bottom: '0', right: '0' },
      height: '475px',
      width: '360px',
      scrollStrategy: this._overlay.scrollStrategies.noop(),
    };

    const draggableDialog: MatDialogRef<MarkdownNavigatorWindowComponent> = this._tdDialogService.openDraggable({
      component: MarkdownNavigatorWindowComponent,
      config: {
        ...DEFAULT_DRAGGABLE_DIALOG_CONFIG,
        ...config.dialogConfig,
      },
      dragHandleSelectors: ['.td-markdown-navigator-window-toolbar'],
      draggableClass: 'td-draggable-markdown-navigator-window',
    });

    draggableDialog.componentInstance.items = config.items;
    draggableDialog.componentInstance.labels = config.labels;
    draggableDialog.componentInstance.toolbarColor = 'toolbarColor' in config ? config.toolbarColor : 'primary';
    draggableDialog.componentInstance.closed.subscribe(() => draggableDialog.close());

    return draggableDialog;
  }
}
