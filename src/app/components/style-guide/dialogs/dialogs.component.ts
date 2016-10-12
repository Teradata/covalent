import { Component, ViewContainerRef } from '@angular/core';

import { TdDialogService } from '../../../../platform/core';

import { MdSnackBar, MdSnackBarConfig, MdSnackBarRef} from '@angular/material';

@Component({
  selector: 'design-patterns-dialogs',
  styleUrls: ['dialogs.component.scss'],
  templateUrl: 'dialogs.component.html',
})
export class DialogsToastsComponent {
  _snackBarConfig: MdSnackBarConfig;
  constructor(private _dialogService: TdDialogService,
              private _viewContainerRef: ViewContainerRef,
              private _snackBarService: MdSnackBar) {
    this._snackBarConfig = new MdSnackBarConfig(_viewContainerRef);
  }
  showSnackBar(): void {
    let snackBarRef: MdSnackBarRef<any> = this._snackBarService.open('Direct message sent!', 'Dismiss', this._snackBarConfig);
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 3000);
  }
  openAlert(): void {
    this._dialogService.openAlert({
      message: 'You don\'t have the required permissions to view this item! Contact an administrator!',
      viewContainerRef: this._viewContainerRef,
      title: '401 Permissions Error!',
      closeButton: 'Dismiss',
    });
  }
  openConfirm(): void {
    this._dialogService.openConfirm({
      message: 'Are you sure you want to delete this item? It\'s used on other items.',
      viewContainerRef: this._viewContainerRef,
      title: 'Confirm',
      cancelButton: 'No, Cancel',
      acceptButton: 'Yes, Delete',
    }).afterClosed().subscribe((accept: boolean) => {
      if (accept) {
        this.confirmDelete();
      } else {
        // DO SOMETHING ELSE
      }
    });
  }
  confirmDelete(): void {
    let snackBarRef: MdSnackBarRef<any> = this._snackBarService.open('Item deleted!', 'Ok', this._snackBarConfig);
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 3000);
  }
  openPrompt(): void {
    this._dialogService.openPrompt({
      message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
      viewContainerRef: this._viewContainerRef,
      title: 'Prompt',
      value: 'Prepopulated value',
      cancelButton: 'Cancel',
      acceptButton: 'Ok',
    }).afterClosed().subscribe((newValue: string) => {
      if (newValue) {
        // DO SOMETHING
      } else {
        // DO SOMETHING ELSE
      }
    });
  }
}