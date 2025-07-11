import {
  Component,
  Renderer2,
  Output,
  EventEmitter,
  OnDestroy,
  inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DragRef } from '@angular/cdk/drag-drop';
import {
  TdDialogService,
  IDraggableRefs,
  ResizableDraggableDialog,
} from '@covalent/core/dialogs';
import { Subject, takeUntil } from 'rxjs';

@Component({
  standalone: false,
  selector: 'draggable-resizable-window-dialog',
  template: `
    <td-window-dialog
      [title]="'Draggable resizable window dialog'"
      [toolbarColor]="'accent'"
      [closeLabel]="'Close'"
      (closed)="closed.emit()"
    >
      <div [style.padding.em]="1">
        <p>Comes with a handy toolbar</p>
        <p>Draggable via the toolbar</p>
        <p>Resizable via the corners</p>
      </div>
    </td-window-dialog>
  `,
})
export class DraggableResizableWindowDialogComponent {
  @Output() closed: EventEmitter<void> = new EventEmitter();
}

@Component({
  standalone: false,
  selector: 'dialogs-demo-draggable-resizable-window',
  styleUrls: ['./dialogs-demo-draggable-resizable-window.component.scss'],
  templateUrl: './dialogs-demo-draggable-resizable-window.component.html',
})
export class DialogsDemoDraggableResizableWindowComponent implements OnDestroy {
  private _dialogService = inject(TdDialogService);
  private _document = inject(DOCUMENT);
  private _renderer2 = inject(Renderer2);

  private _destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  openDraggableResizableWindowDialog(): void {
    const {
      matDialogRef,
      dragRefSubject,
    }: IDraggableRefs<DraggableResizableWindowDialogComponent> =
      this._dialogService.openDraggable({
        component: DraggableResizableWindowDialogComponent,
        dragHandleSelectors: ['mat-toolbar'],
        config: {
          panelClass: ['td-window-dialog'], // pass this class in to ensure certain css is properly added
        },
      });

    // listen to close event
    matDialogRef.componentInstance.closed
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => matDialogRef.close());

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
