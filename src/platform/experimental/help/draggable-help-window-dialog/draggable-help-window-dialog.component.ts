import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-draggable-help-window-dialog',
  templateUrl: './draggable-help-window-dialog.component.html',
  styleUrls: ['./draggable-help-window-dialog.component.scss'],
})
export class DraggableHelpWindowDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DraggableHelpWindowDialogComponent>,
  ) {}

  handleClosed(): void {
    this.dialogRef.close();
  }

  handleMinimized(): void {
    // TODO: not working
    this.dialogRef.updatePosition({bottom: '0', right: '0'});
  }
  handleMaximized(): void {
    // TODO: not working
    this.dialogRef.updatePosition({bottom: '0', right: '0'});
  }
}
