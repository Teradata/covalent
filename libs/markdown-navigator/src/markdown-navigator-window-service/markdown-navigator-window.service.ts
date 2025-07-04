import {
  Injectable,
  RendererFactory2,
  Renderer2,
  Type,
  inject,
} from '@angular/core';
import {
  MatDialogRef,
  MatDialogConfig,
  DialogPosition,
} from '@angular/material/dialog';
import { ThemePalette } from '@angular/material/core';
import {
  TdMarkdownNavigatorWindowComponent,
  IMarkdownNavigatorWindowLabels,
} from '../markdown-navigator-window/markdown-navigator-window.component';
import {
  TdDialogService,
  IDraggableRefs,
  ResizableDraggableDialog,
} from '@covalent/core/dialogs';
import { DragRef } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import {
  IMarkdownNavigatorItem,
  IMarkdownNavigatorCompareWith,
} from '../markdown-navigator.component';
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

const CDK_OVERLAY_CUSTOM_CLASS = 'td-window-dialog';

const DEFAULT_POSITION: DialogPosition = { bottom: '0px', right: '0px' };
const DEFAULT_WIDTH = '360px';
const DEFAULT_HEIGHT = '75vh';
const MAX_WIDTH = '100vw';

const DEFAULT_DRAGGABLE_DIALOG_CONFIG: MatDialogConfig = {
  hasBackdrop: false,
  closeOnNavigation: true,
  panelClass: [CDK_OVERLAY_CUSTOM_CLASS],
  position: DEFAULT_POSITION,
  height: DEFAULT_HEIGHT,
  width: DEFAULT_WIDTH,
  maxWidth: MAX_WIDTH,
};

@Injectable()
export class TdMarkdownNavigatorWindowService {
  private _tdDialogService = inject(TdDialogService);
  private _document = inject(DOCUMENT);
  private rendererFactory = inject(RendererFactory2);

  private _renderer2: Renderer2;
  private dragRef!: DragRef;
  private resizableDraggableDialog!: ResizableDraggableDialog;
  private markdownNavigatorWindowDialog!: MatDialogRef<TdMarkdownNavigatorWindowComponent>;
  private markdownNavigatorWindowDialogsOpen = 0;

  constructor() {
    const rendererFactory = this.rendererFactory;

    this._renderer2 = rendererFactory.createRenderer(undefined, null);
  }

  public open(
    config: IMarkdownNavigatorWindowConfig,
  ): MatDialogRef<TdMarkdownNavigatorWindowComponent> {
    this.close();

    const configClass = config?.dialogConfig?.panelClass;
    const panelClass =
      configClass && !Array.isArray(configClass) ? [configClass] : [];

    const draggableConfig: MatDialogConfig = {
      ...DEFAULT_DRAGGABLE_DIALOG_CONFIG,
      ...config.dialogConfig,
      ...panelClass,
    };
    const {
      matDialogRef,
      dragRefSubject,
    }: IDraggableRefs<TdMarkdownNavigatorWindowComponent> =
      this._tdDialogService.openDraggable({
        component: TdMarkdownNavigatorWindowComponent,
        config: draggableConfig,
        dragHandleSelectors: ['.td-window-dialog-toolbar'],
        draggableClass: 'td-draggable-markdown-navigator-window',
      });
    this.markdownNavigatorWindowDialog = matDialogRef;
    this.markdownNavigatorWindowDialog.componentInstance.items = config.items;
    this.markdownNavigatorWindowDialog.componentInstance.labels = config.labels;
    this.markdownNavigatorWindowDialog.componentInstance.startAt =
      config.startAt;
    this.markdownNavigatorWindowDialog.componentInstance.copyCodeToClipboard =
      config.copyCodeToClipboard;
    this.markdownNavigatorWindowDialog.componentInstance.copyCodeTooltips =
      config.copyCodeTooltips;
    this.markdownNavigatorWindowDialog.componentInstance.compareWith =
      config.compareWith;
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
    this.markdownNavigatorWindowDialog.componentInstance.closed.subscribe(() =>
      this.close(),
    );

    this.markdownNavigatorWindowDialog
      .afterClosed()
      .toPromise()
      .then(() => {
        this.markdownNavigatorWindowDialogsOpen--;
      });
  }
}
