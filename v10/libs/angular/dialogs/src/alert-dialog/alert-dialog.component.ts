import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { TdDialogActionsDirective, TdDialogComponent, TdDialogContentDirective, TdDialogTitleDirective } from '../dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'td-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
  imports: [CommonModule, MatButtonModule, TdDialogComponent, TdDialogTitleDirective, TdDialogContentDirective, TdDialogActionsDirective],
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
