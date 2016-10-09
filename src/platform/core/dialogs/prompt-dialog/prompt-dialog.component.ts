import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'td-prompt-dialog',
  templateUrl: 'prompt-dialog.component.html',
  styleUrls: [ 'prompt-dialog.component.scss' ],
})
export class TdPromptDialogComponent {
  title: string;
  message: string;
  value: string;
  cancelButton: string = 'CANCEL';
  acceptButton: string = 'ACCEPT';

  constructor(private _dialogRef: MdDialogRef<TdPromptDialogComponent>) {}

  cancel(): void {
    this._dialogRef.close(undefined);
  }

  accept(): void {
    this._dialogRef.close(this.value);
  }
}
