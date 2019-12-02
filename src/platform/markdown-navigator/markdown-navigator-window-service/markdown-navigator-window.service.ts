import { Injectable, Inject, RendererFactory2, Renderer2 } from '@angular/core';
import { MatDialogRef, MatDialogConfig, DialogPosition } from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import {
  MarkdownNavigatorWindowComponent,
  IMarkdownNavigatorWindowLabels,
} from '../markdown-navigator-window/markdown-navigator-window.component';
import { TdDialogService, IDraggableRefs, ResizableDraggableDialog } from '@covalent/core/dialogs';
import { IMarkdownNavigatorItem } from '../markdown-navigator.component';
import { DragRef, Point } from '@angular/cdk/drag-drop/drag-ref';
import { DOCUMENT } from '@angular/common';

export interface IMarkdownNavigatorWindowConfig {
  items: IMarkdownNavigatorItem[];
  dialogConfig?: MatDialogConfig;
  labels?: IMarkdownNavigatorWindowLabels;
  toolbarColor?: ThemePalette;
}

const CDK_OVERLAY_CUSTOM_CLASS: string = 'td-draggable-markdown-navigator-window-wrapper';

const DEFAULT_POSITION: DialogPosition = { bottom: '0px', right: '0px' };
const DEFAULT_WIDTH: string = '360px';
const DEFAULT_HEIGHT: string = '75vh';
const MIN_HEIGHT: string = '56px';
const MAX_WIDTH: string = '100vw';

const DEFAULT_DRAGGABLE_DIALOG_CONFIG: MatDialogConfig = {
  hasBackdrop: false,
  closeOnNavigation: true,
  panelClass: CDK_OVERLAY_CUSTOM_CLASS,
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
export class MarkdownNavigatorWindowService {
  _renderer2: Renderer2;
  markdownNavigatorWindowDialog: MatDialogRef<MarkdownNavigatorWindowComponent> = undefined;
  markdownNavigatorWindowDialogsOpen: number = 0;
  dragRef: DragRef;
  resizableDraggableDialog: ResizableDraggableDialog;

  constructor(
    private _tdDialogService: TdDialogService,
    @Inject(DOCUMENT) private _document: any,
    private rendererFactory: RendererFactory2,
  ) {
    this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
  }

  public open(config: IMarkdownNavigatorWindowConfig): MatDialogRef<MarkdownNavigatorWindowComponent> {
    this.close();

    const draggableConfig: MatDialogConfig = {
      ...DEFAULT_DRAGGABLE_DIALOG_CONFIG,
      ...config.dialogConfig,
    };
    const {
      matDialogRef,
      dragRefSubject,
    }: IDraggableRefs<MarkdownNavigatorWindowComponent> = this._tdDialogService.openDraggable({
      component: MarkdownNavigatorWindowComponent,
      config: draggableConfig,
      dragHandleSelectors: ['.td-markdown-navigator-window-toolbar'],
      draggableClass: 'td-draggable-markdown-navigator-window',
    });
    this.markdownNavigatorWindowDialog = matDialogRef;
    this.markdownNavigatorWindowDialog.componentInstance.items = config.items;
    this.markdownNavigatorWindowDialog.componentInstance.labels = config.labels;
    this.markdownNavigatorWindowDialog.componentInstance.toolbarColor =
      'toolbarColor' in config ? config.toolbarColor : 'primary';
    this.markdownNavigatorWindowDialogsOpen++;
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
    this.markdownNavigatorWindowDialog.componentInstance.minimized.subscribe(() => {
      dimensions = this._getDialogSize(this.markdownNavigatorWindowDialog);
      position = this.dragRef.getFreeDragPosition();
      this.markdownNavigatorWindowDialog.componentInstance.isMinimized = true;
      this.markdownNavigatorWindowDialog.updateSize(DEFAULT_WIDTH, MIN_HEIGHT);
      this.markdownNavigatorWindowDialog.updatePosition(DEFAULT_POSITION);
      this.dragRef.reset();
      this.dragRef.disabled = true;
      this.resizableDraggableDialog.detach();
    });
    this.markdownNavigatorWindowDialog.componentInstance.maximized.subscribe(() => {
      this.markdownNavigatorWindowDialog.componentInstance.isMinimized = false;
      this.markdownNavigatorWindowDialog.updateSize(dimensions.width, dimensions.height);
      this.markdownNavigatorWindowDialog.updatePosition({ top: '0px', right: '0px', bottom: '0px', left: '0px' });
      this.dragRef.setFreeDragPosition(position);
      this.dragRef.disabled = false;
      this.resizableDraggableDialog.attach();
    });
    this.markdownNavigatorWindowDialog
      .afterClosed()
      .toPromise()
      .then(() => {
        this.markdownNavigatorWindowDialogsOpen--;
      });
  }

  private _getDialogSize(dialogRef: MatDialogRef<MarkdownNavigatorWindowComponent>): IDialogDimensions {
    const { width, height } = getComputedStyle(
      (<HTMLElement>this._document.getElementById(dialogRef.id)).parentElement,
    );
    return {
      width,
      height,
    };
  }
}
