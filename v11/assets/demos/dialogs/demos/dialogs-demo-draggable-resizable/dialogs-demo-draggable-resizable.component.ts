import { Component, Renderer2, OnDestroy, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DragRef } from '@angular/cdk/drag-drop';
import {
  TdDialogService,
  IDraggableRefs,
  ResizableDraggableDialog,
} from '@covalent/core/dialogs';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'draggable-resizable-dialog',
  template: `
    <h2>Draggable resizable dialog</h2>
    <p>Draggable via the drag handle</p>
    <button mat-icon-button class="drag-handle">
      <mat-icon>drag_handle</mat-icon>
    </button>
    <p>Resizable via the corners</p>
  `,
})
export class DraggableResizableDialogComponent {}

@Component({
  standalone: false,
  selector: 'dialogs-demo-draggable-resizable',
  styleUrls: ['./dialogs-demo-draggable-resizable.component.scss'],
  templateUrl: './dialogs-demo-draggable-resizable.component.html',
})
export class DialogsDemoDraggableResizableComponent implements OnDestroy {
  private _dialogService = inject(TdDialogService);
  private _document = inject(DOCUMENT);
  private _renderer2 = inject(Renderer2);

  private _destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  openDraggableResizableDialog(): void {
    const {
      matDialogRef,
      dragRefSubject,
    }: IDraggableRefs<DraggableResizableDialogComponent> =
      this._dialogService.openDraggable({
        component: DraggableResizableDialogComponent,
        // CSS selectors of element(s) inside the component meant to be drag handle(s)
        dragHandleSelectors: ['.drag-handle'],
      });

    let resizableDraggableDialog: ResizableDraggableDialog;
    dragRefSubject
      .pipe(takeUntil(this._destroy$))
      .subscribe((dragRf: DragRef) => {
        resizableDraggableDialog = new ResizableDraggableDialog(
          this._document,
          this._renderer2,
          matDialogRef,
          dragRf,
        );
      });

    // Detach resize-ability event listeners after dialog closes
    matDialogRef
      .afterClosed()
      .subscribe(() => resizableDraggableDialog.detach());
  }
}
