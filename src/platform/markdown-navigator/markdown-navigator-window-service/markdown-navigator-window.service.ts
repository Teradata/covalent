import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import {
  MarkdownNavigatorWindowComponent,
  IMarkdownNavigatorWindowLabels,
} from '../markdown-navigator-window/markdown-navigator-window.component';
import { TdDialogService } from '@covalent/core/dialogs';
import { IMarkdownNavigatorItem, IMarkdownNavigatorCompareWith } from '../markdown-navigator.component';

export interface IMarkdownNavigatorWindowConfig {
  items: IMarkdownNavigatorItem[];
  dialogConfig?: MatDialogConfig;
  labels?: IMarkdownNavigatorWindowLabels;
  toolbarColor?: ThemePalette;
  startAt?: IMarkdownNavigatorItem;
  compareWith?: IMarkdownNavigatorCompareWith;
}

const CDK_OVERLAY_CUSTOM_CLASS: string = 'td-draggable-markdown-navigator-window-wrapper';

const DEFAULT_DRAGGABLE_DIALOG_CONFIG: MatDialogConfig = {
  hasBackdrop: false,
  closeOnNavigation: true,
  panelClass: CDK_OVERLAY_CUSTOM_CLASS,
  position: { bottom: '0px', right: '0px' },
  height: '475px',
  width: '360px',
};
@Injectable()
export class MarkdownNavigatorWindowService {
  private markdownNavigatorWindowDialog: MatDialogRef<MarkdownNavigatorWindowComponent> = undefined;
  private markdownNavigatorWindowDialogsOpen: number = 0;

  constructor(private _tdDialogService: TdDialogService) {}

  public open(config: IMarkdownNavigatorWindowConfig): MatDialogRef<MarkdownNavigatorWindowComponent> {
    this.close();

    this.markdownNavigatorWindowDialog = this._tdDialogService.openDraggable({
      component: MarkdownNavigatorWindowComponent,
      config: {
        ...DEFAULT_DRAGGABLE_DIALOG_CONFIG,
        ...config.dialogConfig,
      },
      dragHandleSelectors: ['.td-markdown-navigator-window-toolbar'],
      draggableClass: 'td-draggable-markdown-navigator-window',
    });
    this.markdownNavigatorWindowDialogsOpen++;

    this.markdownNavigatorWindowDialog.componentInstance.items = config.items;
    this.markdownNavigatorWindowDialog.componentInstance.labels = config.labels;
    this.markdownNavigatorWindowDialog.componentInstance.startAt = config.startAt;
    this.markdownNavigatorWindowDialog.componentInstance.compareWith = config.compareWith;
    this.markdownNavigatorWindowDialog.componentInstance.toolbarColor =
      'toolbarColor' in config ? config.toolbarColor : 'primary';
    this.markdownNavigatorWindowDialog.componentInstance.closed.subscribe(() => this.close());
    this.markdownNavigatorWindowDialog
      .afterClosed()
      .toPromise()
      .then(() => {
        this.markdownNavigatorWindowDialogsOpen--;
      });

    return this.markdownNavigatorWindowDialog;
  }

  public close(): void {
    if (this.markdownNavigatorWindowDialog) {
      this.markdownNavigatorWindowDialog.close();
    }
  }

  public get isOpen(): boolean {
    return this.markdownNavigatorWindowDialogsOpen > 0;
  }
}
