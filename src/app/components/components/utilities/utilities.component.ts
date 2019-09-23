/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { copyToClipboard } from '../../../../platform/utilities'

@Component({
  selector: 'td-utilities',
  templateUrl: './utilities.component.html',
  styleUrls: ['./utilities.component.scss'],
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
