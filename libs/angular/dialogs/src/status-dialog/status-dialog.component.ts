import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import {
  TdDialogActionsDirective,
  TdDialogComponent,
  TdDialogContentDirective,
  TdDialogStatusDirective,
  TdDialogTitleDirective,
} from '../dialog.component';
import { CommonModule } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';

export type TdStatusDialogStates = 'error' | 'positive' | 'warning';

export type TdStatusDialogDetailsLabels = {
  showDetailsLabel: string;
  hideDetailsLabel: string;
};

@Component({
  selector: 'td-status-dialog',
  templateUrl: './status-dialog.component.html',
  styleUrls: ['./status-dialog.component.scss'],
  imports: [
    CommonModule,
    MatIcon,
    MatIconButton,
    MatButton,
    TdDialogComponent,
    TdDialogTitleDirective,
    TdDialogContentDirective,
    TdDialogActionsDirective,
    TdDialogStatusDirective,
  ],
})
export class TdStatusDialogComponent {
  private _dialogRef =
    inject<MatDialogRef<TdStatusDialogComponent>>(MatDialogRef);

  // Label of the close button in the footer
  closeButton?: string = 'CLOSE';
  // Message to be displayed in the dialog
  message?: string;
  // State of the status dialog
  state?: TdStatusDialogStates = 'error';
  // Title of the status dialog
  title?: string;
  // Additional details to be displayed after the dialog message
  details?: string;
  // Toggles the additional details section
  showDetails? = false;
  // Labels for the toggle details link
  detailsLabels?: TdStatusDialogDetailsLabels = {
    showDetailsLabel: 'Show details',
    hideDetailsLabel: 'Hide details',
  };

  close(): void {
    this._dialogRef.close();
  }

  getStatusIcon(): string {
    switch (this.state) {
      case 'positive':
        return 'check';
      case 'error':
      case 'warning':
        return this.state;
      default:
        return 'error';
    }
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }
}
