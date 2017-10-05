import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'td-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss' ],
})
export class TdAlertDialogComponent {
  title: string;
  message: string;
  closeButton: string = 'CLOSE';

  constructor(private _dialogRef: MatDialogRef<TdAlertDialogComponent>) {}

  close(): void {
    this._dialogRef.close();
  }
}
