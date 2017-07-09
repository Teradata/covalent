import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

import { TdDialogService } from '../../../../platform/core';

import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'design-patterns-dialogs',
  styleUrls: ['./dialogs.component.scss'],
  templateUrl: './dialogs.component.html',
  animations: [slideInDownAnimation],
})
export class DialogsToastsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zip: string;

  constructor(private _dialogService: TdDialogService,
              private _snackBarService: MdSnackBar) {}

  showSnackBar(): void {
    this._snackBarService
      .open('Direct message sent!', 'Dismiss', { duration: 3000 });
  }
  openAlert(): void {
    this._dialogService.openAlert({
      message: 'You don\'t have the required permissions to view this item! Contact an administrator!',
      disableClose: true,
      title: '401 Permissions Error!',
      closeButton: 'Dismiss',
    });
  }
  openConfirm(): void {
    this._dialogService.openConfirm({
      message: 'Are you sure you want to delete this item? It\'s used on other items.',
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
    this._snackBarService.open('Item deleted!', 'Ok', { duration: 3000 });
  }
  openPrompt(): void {
    this._dialogService.openPrompt({
      message: 'This is how simple it is to create a prompt with this wrapper service. Prompt something.',
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
