import { Component } from '@angular/core';
import { TdDialogService } from '@covalent/core/dialogs';

@Component({
  selector: 'draggable-dialog',
  template: `
    <h2>Draggable dialog</h2>
    <p>Draggable via the drag handle</p>
    <button mat-icon-button class="drag-handle">
      <mat-icon>drag_handle</mat-icon>
    </button>
  `,
})
export class DraggableDialogComponent {}

@Component({
  selector: 'dialogs-demo-draggable',
  styleUrls: ['./dialogs-demo-draggable.component.scss'],
  templateUrl: './dialogs-demo-draggable.component.html',
})
export class DialogsDemoDraggableComponent {
  constructor(private _dialogService: TdDialogService) {}
  openDraggableDialog(): void {
    this._dialogService.openDraggable({
      component: DraggableDialogComponent,
      // CSS selectors of element(s) inside the component meant to be drag handle(s)
      dragHandleSelectors: ['.drag-handle'],
      // Class that will be added to the component signifying drag-ability
      draggableClass: 'custom-class',
    });
  }
}
