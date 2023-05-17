import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'td-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class TdConfirmDialogComponent {
  title?: string;
  message?: string;
  cancelButton = 'CANCEL';
  acceptButton = 'ACCEPT';
  isDestructive = false;

  constructor(private _dialogRef: MatDialogRef<TdConfirmDialogComponent>) {}

  cancel(): void {
    this._dialogRef.close(false);
  }

  accept(): void {
    this._dialogRef.close(true);
  }
}
