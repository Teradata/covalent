import { Injectable, Inject, RendererFactory2, Renderer2, Type } from '@angular/core';
import { MatDialogRef, MatDialogConfig, DialogPosition } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import {
  TdMarkdownNavigatorWindowComponent,
  IMarkdownNavigatorWindowLabels,
} from '../markdown-navigator-window/markdown-navigator-window.component';
import { TdDialogService, IDraggableRefs, ResizableDraggableDialog } from '@covalent/core/dialogs';
import { DragRef, Point } from '@angular/cdk/drag-drop/drag-ref';
import { DOCUMENT } from '@angular/common';
import { IMarkdownNavigatorItem, IMarkdownNavigatorCompareWith } from '../markdown-navigator.component';
import { ICopyCodeTooltips } from '@covalent/highlight';

export interface IMarkdownNavigatorWindowConfig {
  items: IMarkdownNavigatorItem[];
  dialogConfig?: MatDialogConfig;
  labels?: IMarkdownNavigatorWindowLabels;
  toolbarColor?: ThemePalette;
  startAt?: IMarkdownNavigatorItem | IMarkdownNavigatorItem[];
  compareWith?: IMarkdownNavigatorCompareWith;
  copyCodeToClipboard?: boolean;
  copyCodeTooltips?: ICopyCodeTooltips;
  footer?: Type<any>;
}

const CDK_OVERLAY_CUSTOM_CLASS: string = 'td-window-dialog';

const DEFAULT_POSITION: DialogPosition = { bottom: '0px', right: '0px' };
const DEFAULT_WIDTH: string = '360px';
const DEFAULT_HEIGHT: string = '75vh';
const MIN_HEIGHT: string = '56px';
const MAX_WIDTH: string = '100vw';

const DEFAULT_DRAGGABLE_DIALOG_CONFIG: MatDialogConfig = {
  hasBackdrop: false,
  closeOnNavigation: true,
  panelClass: [CDK_OVERLAY_CUSTOM_CLASS],
  position: DEFAULT_POSITION,
  height: DEFAULT_HEIGHT,
  width: DEFAULT_WIDTH,
  maxWidth: MAX_WIDTH,
};

interface IDialogDimensions {
  width: string;
  height: string;
}

@Injectable()
export class TdMarkdownNavigatorWindowService {
  private _renderer2: Renderer2;
  private dragRef: DragRef;
  private resizableDraggableDialog: ResizableDraggableDialog;
  private markdownNavigatorWindowDialog: MatDialogRef<TdMarkdownNavigatorWindowComponent> = undefined;
  private markdownNavigatorWindowDialogsOpen: number = 0;

  constructor(
    private _tdDialogService: TdDialogService,
    @Inject(DOCUMENT) private _document: any,
    private rendererFactory: RendererFactory2,
  ) {
    this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
  }

  public open(config: IMarkdownNavigatorWindowConfig): MatDialogRef<TdMarkdownNavigatorWindowComponent> {
    this.close();

    let panelClass: string[] = [...DEFAULT_DRAGGABLE_DIALOG_CONFIG.panelClass];
    if (config.dialogConfig && config.dialogConfig.panelClass) {
      if (Array.isArray(config.dialogConfig.panelClass)) {
        panelClass = [...config.dialogConfig.panelClass];
      } else {
        panelClass = [config.dialogConfig.panelClass];
      }
    }
    const draggableConfig: MatDialogConfig = {
      ...DEFAULT_DRAGGABLE_DIALOG_CONFIG,
      ...config.dialogConfig,
      panelClass,
    };
    const { matDialogRef, dragRefSubject }: IDraggableRefs<TdMarkdownNavigatorWindowComponent> =
      this._tdDialogService.openDraggable({
        component: TdMarkdownNavigatorWindowComponent,
        config: draggableConfig,
        dragHandleSelectors: ['.td-window-dialog-toolbar'],
        draggableClass: 'td-draggable-markdown-navigator-window',
      });
    this.markdownNavigatorWindowDialog = matDialogRef;
    this.markdownNavigatorWindowDialog.componentInstance.items = config.items;
    this.markdownNavigatorWindowDialog.componentInstance.labels = config.labels;
    this.markdownNavigatorWindowDialog.componentInstance.startAt = config.startAt;
    this.markdownNavigatorWindowDialog.componentInstance.copyCodeToClipboard = config.copyCodeToClipboard;
    this.markdownNavigatorWindowDialog.componentInstance.copyCodeTooltips = config.copyCodeTooltips;
    this.markdownNavigatorWindowDialog.componentInstance.compareWith = config.compareWith;
    this.markdownNavigatorWindowDialog.componentInstance.toolbarColor =
      'toolbarColor' in config ? config.toolbarColor : 'primary';
    this.markdownNavigatorWindowDialogsOpen++;
    this.markdownNavigatorWindowDialog.componentInstance.footer = config.footer;
    dragRefSubject.subscribe((dragRf: DragRef) => {
      this.dragRef = dragRf;
      this.resizableDraggableDialog = new ResizableDraggableDialog(
        this._document,
        this._renderer2,
        this.markdownNavigatorWindowDialog,
        this.dragRef,
      );
    });
    this._handleEvents();
    return this.markdownNavigatorWindowDialog;
  }

  public close(): void {
    if (this.markdownNavigatorWindowDialog) {
      if (this.resizableDraggableDialog) {
        this.resizableDraggableDialog.detach();
      }
      this.markdownNavigatorWindowDialog.close();
    }
  }

  public get isOpen(): boolean {
    return this.markdownNavigatorWindowDialogsOpen > 0;
  }

  private _handleEvents(): void {
    let position: Point;
    let dimensions: IDialogDimensions;
    this.markdownNavigatorWindowDialog.componentInstance.closed.subscribe(() => this.close());
    this.markdownNavigatorWindowDialog.componentInstance.dockToggled.subscribe((docked: boolean) => {
      if (docked) {
        this.markdownNavigatorWindowDialog.componentInstance.docked = false;
        this.markdownNavigatorWindowDialog.updateSize(dimensions.width, dimensions.height);
        this.markdownNavigatorWindowDialog.updatePosition({ top: '0px', right: '0px', bottom: '0px', left: '0px' });
        this.dragRef.setFreeDragPosition(position);
        this.dragRef.disabled = false;
        this.resizableDraggableDialog.attach();
      } else {
        dimensions = this._getDialogSize(this.markdownNavigatorWindowDialog);
        position = this.dragRef.getFreeDragPosition();
        this.markdownNavigatorWindowDialog.componentInstance.docked = true;
        this.markdownNavigatorWindowDialog.updateSize(DEFAULT_WIDTH, MIN_HEIGHT);
        this.markdownNavigatorWindowDialog.updatePosition(DEFAULT_POSITION);
        this.dragRef.reset();
        this.dragRef.disabled = true;
        this.resizableDraggableDialog.detach();
      }
    });
    this.markdownNavigatorWindowDialog
      .afterClosed()
      .toPromise()
      .then(() => {
        this.markdownNavigatorWindowDialogsOpen--;
      });
  }

  private _getDialogSize(dialogRef: MatDialogRef<TdMarkdownNavigatorWindowComponent>): IDialogDimensions {
    const { width, height } = getComputedStyle(
      (<HTMLElement>this._document.getElementById(dialogRef.id)).parentElement,
    );
    return {
      width,
      height,
    };
  }
}
