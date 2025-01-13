import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TdDialogComponent } from '../dialog.component';

@Component({
  selector: 'td-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
  imports: [TdDialogComponent],
})
export class TdAlertDialogComponent {
  title?: string;
  message?: string;
  closeButton?: string = 'CLOSE';

  constructor(private _dialogRef: MatDialogRef<TdAlertDialogComponent>) {}

  close(): void {
    this._dialogRef.close();
  }
}
