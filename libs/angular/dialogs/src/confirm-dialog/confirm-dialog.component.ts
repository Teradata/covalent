import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TdDialogActionsDirective, TdDialogComponent, TdDialogContentDirective, TdDialogTitleDirective } from '../dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'td-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  imports: [CommonModule, TdDialogComponent, TdDialogTitleDirective, TdDialogContentDirective, TdDialogActionsDirective, MatButtonModule],
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
