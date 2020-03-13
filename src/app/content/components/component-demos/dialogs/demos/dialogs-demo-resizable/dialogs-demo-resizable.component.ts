import { Component, Renderer2, Inject, RendererFactory2 } from '@angular/core';
import { TdDialogService, IDraggableRefs, ResizableDraggableDialog, TdDialogComponent } from '@covalent/core/dialogs';
import { MatDialogRef, MatDialogConfig, DialogPosition } from '@angular/material/dialog';
import { DragRef } from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { Point } from '@angular/cdk/drag-drop/drag-ref';

const CDK_OVERLAY_CUSTOM_CLASS: string = 'td-draggable-markdown-navigator-window-wrapper';
const DEFAULT_WIDTH: string = '360px';
const DEFAULT_HEIGHT: string = '75vh';
const MIN_HEIGHT: string = '56px';
const MAX_WIDTH: string = '100vw';

const DEFAULT_DRAGGABLE_DIALOG_CONFIG: MatDialogConfig = {
  hasBackdrop: false,
  closeOnNavigation: true,
  panelClass: CDK_OVERLAY_CUSTOM_CLASS,
  height: DEFAULT_HEIGHT,
  width: DEFAULT_WIDTH,
  maxWidth: MAX_WIDTH,
};

interface IDialogDimensions {
  width: string;
  height: string;
}

@Component({
  selector: 'dialogs-demo-resizable',
  styleUrls: ['./dialogs-demo-resizable.component.scss'],
  templateUrl: './dialogs-demo-resizable.component.html',
})
export class DialogsDemoResizableComponent {
  private _renderer2: Renderer2;
  private dragRef: DragRef;
  private resizableDraggableDialog: ResizableDraggableDialog;
  private simpleDialog: MatDialogRef<TdDialogComponent> = undefined;
  private simpleDialogsOpen: number = 0;

  constructor(
    private _dialogService: TdDialogService,
    @Inject(DOCUMENT) private _document: any,
    private rendererFactory: RendererFactory2,
  ) {
    this._renderer2 = rendererFactory.createRenderer(undefined, undefined);
  }
  openResizableDialog(): MatDialogRef<TdDialogComponent> {
    this.close();
    const { matDialogRef, dragRefSubject }: IDraggableRefs<TdDialogComponent> = this._dialogService.openDraggable({
      component: TdDialogComponent,
      config: DEFAULT_DRAGGABLE_DIALOG_CONFIG,
      dragHandleSelectors: ['.td-markdown-navigator-window-toolbar'],
      draggableClass: 'td-draggable-markdown-navigator-window',
    });

    this.simpleDialog = matDialogRef;
    this.simpleDialogsOpen++;
    dragRefSubject.subscribe((dragRf: DragRef) => {
      this.dragRef = dragRf;
      this.resizableDraggableDialog = new ResizableDraggableDialog(
        this._document,
        this._renderer2,
        this.simpleDialog,
        this.dragRef,
      );
    });
    this._handleEvents();
    return this.simpleDialog;
  }

  public close(): void {
    if (this.simpleDialog) {
      if (this.resizableDraggableDialog) {
        this.resizableDraggableDialog.detach();
      }
      this.simpleDialog.close();
    }
  }

  public get isOpen(): boolean {
    return this.simpleDialogsOpen > 0;
  }

  private _handleEvents(): void {
    const position: any = this.dragRef.getFreeDragPosition();
    const dimensions: IDialogDimensions = this._getDialogSize(this.simpleDialog);
    this.simpleDialog.updateSize(dimensions.width, dimensions.height);
    this.simpleDialog.updatePosition(position);
    this.dragRef.reset();
    this.dragRef.disabled = false;
    this.resizableDraggableDialog.detach();
    this.simpleDialog
      .afterClosed()
      .toPromise()
      .then(() => {
        this.simpleDialogsOpen--;
      });
  }

  private _getDialogSize(dialogRef: MatDialogRef<TdDialogComponent>): IDialogDimensions {
    const { width, height } = getComputedStyle(
      (<HTMLElement>this._document.getElementById(dialogRef.id)).parentElement,
    );
    return {
      width,
      height,
    };
  }
}
