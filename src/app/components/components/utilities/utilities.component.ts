import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { copyToClipboard } from '../../../../platform/core/common/functions'

@Component({
  selector: 'td-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss'],
  preserveWhitespaces: true,
})
export class UtilitiesDemoComponent {
  copytext: string = 'Lorem Ipsum';

  constructor(private _snackBar: MatSnackBar) {}

  doCopyToClipboard(): void {
    // Invoke utility function to copy input text to clipboard
    copyToClipboard(this.copytext);

    // Show snackbar to indicate task complete
    this._snackBar.open('Text copied!', undefined, {
      duration: 2000,
    });
  }
}
