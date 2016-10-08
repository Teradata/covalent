import { Component, ViewContainerRef } from '@angular/core';

import { TdDialogService } from '../../../../platform/core';

@Component({
  selector: 'dialogs-demo',
  styleUrls: ['dialogs.component.scss'],
  templateUrl: 'dialogs.component.html',
})
export class DialogsDemoComponent {

  dialogServiceMethods: Object[] = [{
    description: `Opens an alert dialog with the provided config.`,
    name: 'openAlert',
    type: 'function(IAlertConfig): MdDialogRef<TdAlertDialogComponent>',
  }, {
    description: `Opens a confirm dialog with the provided config.`,
    name: 'openConfirm',
    type: 'function(IConfirmConfig): MdDialogRef<TdConfirmDialogComponent>',
  }];

  constructor(private _dialogService: TdDialogService,
              private _viewContainerRef: ViewContainerRef) {}

  openAlert(): void {
    this._dialogService.openAlert({
      title: 'Alert',
      message: 'This is how simple it is to create an alert with this wrapper service.',
      viewContainerRef: this._viewContainerRef,
    });
  }

  openConfirm(): void {
    this._dialogService.openConfirm({
      title: 'Confirm',
      message: 'This is how simple it is to create a confirm with this wrapper service. Do you agree?',
      cancelButton: 'Disagree',
      acceptButton: 'AGREE',
      viewContainerRef: this._viewContainerRef,
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        // DO SOMETHING
      } else {
        // DO SOMETHING ELSE
      }
    });
  }
}
