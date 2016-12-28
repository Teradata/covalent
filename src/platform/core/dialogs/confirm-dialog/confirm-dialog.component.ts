import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'td-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss' ],
})
export class TdConfirmDialogComponent {
  title: string;
  message: string;
  cancelButton: string = 'CANCEL';
  acceptButton: string = 'ACCEPT';

  constructor(private _dialogRef: MdDialogRef<TdConfirmDialogComponent>) {}

  cancel(): void {
    this._dialogRef.close(false);
  }

  accept(): void {
    this._dialogRef.close(true);
  }
}
