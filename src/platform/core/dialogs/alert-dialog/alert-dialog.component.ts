import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'td-alert-dialog',
  templateUrl: 'alert-dialog.component.html',
  styleUrls: [ 'alert-dialog.component.scss' ],
})
export class TdAlertDialogComponent {
  title: string;
  message: string;
  closeButton: string = 'CLOSE';

  constructor(private _dialogRef: MdDialogRef<TdAlertDialogComponent>) {}

  close(): void {
    this._dialogRef.close();
  }
}
