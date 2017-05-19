import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'td-confirm-against-value-dialog',
    templateUrl: './confirm-confirm-against-value-dialog.component.html',
    styleUrls: ['./confirm-against-value-dialog.component.scss'],
})
export class TdConfirmAgainstValueDialogComponent {
    title: string;
    message: string;
    cancelButton: string = 'CANCEL';
    acceptButton: string = 'ACCEPT';
    value: string;
    input: string;

    constructor(private _dialogRef: MdDialogRef<TdConfirmAgainstValueDialogComponent>) { }

    get match(): boolean {
        return this.value === this.input;
    }

    cancel(): void {
        this._dialogRef.close(false);
    }

    accept(): void {
        this._dialogRef.close(true);
    }
}
