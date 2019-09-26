import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { IHelpMenuDataItem, IHelpWindowComponentLabels } from '../help.utils';
import { Overlay } from '@angular/cdk/overlay';
import { CovalentHelpModule } from '../help.module';
import { ThemePalette } from '@angular/material/core';
import { HelpWindowComponent } from '../help-window/help-window.component';
import { TdDialogService } from '@covalent/core/dialogs';

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
  constructor(private _overlay: Overlay, private _tdDialogService: TdDialogService) {}

  open(config: IDraggableHelpWindowDialogServiceConfig): MatDialogRef<HelpWindowComponent> {
    const CDK_OVERLAY_CUSTOM_CLASS: string = 'td-draggable-help-window-wrapper';
    const draggableDialog: MatDialogRef<HelpWindowComponent> = this._tdDialogService.openDraggable({
      component: HelpWindowComponent,
      config: {
        hasBackdrop: false,
        closeOnNavigation: true,
        panelClass: CDK_OVERLAY_CUSTOM_CLASS,
        position: { bottom: '0', right: '0' },
        scrollStrategy: this._overlay.scrollStrategies.noop(),
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
