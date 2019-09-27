import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draggable-demo',
  template: `
    <h2>Draggable dialog</h2>
    <p>Draggable via the drag handle</p>
    <button mat-icon-button class="drag-handle">
      <mat-icon>drag_handle</mat-icon>
    </button>
  `,
})
export class DraggableDemoComponent {}
