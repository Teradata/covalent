import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  TdDialogActionsDirective,
  TdDialogComponent,
  TdDialogContentDirective,
  TdDialogTitleDirective,
} from '../dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'td-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  imports: [
    CommonModule,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogContentDirective,
    TdDialogActionsDirective,
    MatButtonModule,
  ],
})
export class TdConfirmDialogComponent {
  private _dialogRef =
    inject<MatDialogRef<TdConfirmDialogComponent>>(MatDialogRef);

  title?: string;
  message?: string;
  cancelButton = 'CANCEL';
  acceptButton = 'ACCEPT';
  isDestructive = false;

  cancel(): void {
    this._dialogRef.close(false);
  }

  accept(): void {
    this._dialogRef.close(true);
  }
}
