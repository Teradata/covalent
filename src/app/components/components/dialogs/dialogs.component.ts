import { Component } from '@angular/core';

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
  }, {
    description: `Opens a prompt dialog with the provided config.`,
    name: 'openPrompt',
    type: 'function(IPromptConfig): MdDialogRef<TdPromptDialogComponent>',
  }];

  constructor(private _dialogService: TdDialogService) {}

  openAlert(): void {
    this._dialogService.openAlert({
      title: 'Alert',
      disableClose: true,
      message: 'This is how simple it is to create an alert with this wrapper service.',
    });
  }

  openConfirm(): void {
    this._dialogService.openConfirm({
      title: 'Confirm',
      message: 'This is how simple it is to create a confirm with this wrapper service. Do you agree?',
      cancelButton: 'Disagree',
      acceptButton: 'Agree',
    });
  }

  openPrompt(): void {
    this._dialogService.openPrompt({
      title: 'Prompt',
      message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
      value: 'Populated value',
      cancelButton: 'Cancel',
      acceptButton: 'Ok',
    });
  }
}
