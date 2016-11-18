import { Component, ViewContainerRef } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig, MdDialog, MdSnackBarRef,
        MdDialogConfig, MdDialogRef } from '@angular/material';

import { TdAlertDialogComponent } from '../../../../platform/core';
import { TdConfirmDialogComponent } from '../../../../platform/core';

@Component({
  selector: 'design-patterns-material-components',
  styleUrls: ['material-components.component.scss'],
  templateUrl: 'material-components.component.html',
})
export class MaterialComponentsComponent {

  isDisabled: boolean = false;
  isIndeterminate: boolean = false;
  favoriteSeason: string = 'Autumn';

  seasonOptions: string[] = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];

  user: Object = {
    agreesToTOS: false,
  };

  groceries: Object[] = [{
      bought: true,
      name: 'Seitan',
    }, {
      bought: false,
      name: 'Almond Meal Flour',
    }, {
      bought: false,
      name: 'Organic Eggs',
    },
  ];

  todos: Object[] = [{
      finished: true,
      name: 'Learn Angular 2.0',
    }, {
      finished: true,
      name: 'Learn Angular Material 2.0',
    }, {
      finished: false,
      name: 'Build examples',
    }, {
      finished: false,
      name: 'Documentation',
    }, {
      finished: false,
      name: 'Write about your findings',
    }, {
      finished: false,
      name: 'Contribute back to the community',
    },
  ];

  messages: Object[] = [{
      from: 'Ali Connors',
      message: 'I will be in your neighborhood',
      photo: 'https://api.adorable.io/avatars/40/1.png',
      subject: 'Brunch this weekend?',
    }, {
      from: 'Trevor Hansen',
      message: 'Wish I could but we have plans',
      photo: 'https://api.adorable.io/avatars/40/2.png',
      subject: 'Re: Brunch this weekend?',
    }, {
      from: 'Sandra Adams',
      message: 'Do you have Paris recommendations instead?',
      photo: 'https://api.adorable.io/avatars/40/3.png',
      subject: 'Re: Brunch this weekend?',
    },
  ];

  systems: Object[] = [{
      name: 'Lights',
      on: false,
    }, {
      name: 'Surround Sound',
      on: true,
    }, {
      name: 'T.V.',
      on: true,
    }, {
      name: 'Entertainment System',
      on: true,
    },
  ];

  dogs: Object[] = [
    { name: 'Porter', human: 'Kara' },
    { name: 'Mal', human: 'Jeremy' },
    { name: 'Koby', human: 'Igor' },
    { name: 'Razzle', human: 'Ward' },
    { name: 'Molly', human: 'Rob' },
    { name: 'Husi', human: 'Matias' },
  ];

  house: Object = {
    lockHouse: false,
  };

  _snackBarConfig: MdSnackBarConfig;
  _dialogConfig: MdDialogConfig;

  constructor(private _snackBarService: MdSnackBar,
              private _dialogService: MdDialog,
              viewContainerRef: ViewContainerRef) {
    this._snackBarConfig = new MdSnackBarConfig();
    this._snackBarConfig.viewContainerRef = viewContainerRef;
    this._dialogConfig = new MdDialogConfig();
    this._dialogConfig.viewContainerRef = viewContainerRef;
  }

  showSnackBar(): void {
    let snackBarRef: MdSnackBarRef<any> = this._snackBarService.open('Message', 'Action', this._snackBarConfig);
    setTimeout(() => {
      snackBarRef.dismiss();
    }, 3000);
  }

  showAlertDialog(): void {
    let dialogRef: MdDialogRef<TdAlertDialogComponent> =
    this._dialogService.open(TdAlertDialogComponent, this._dialogConfig);
    dialogRef.componentInstance.title = 'Alert Title';
    dialogRef.componentInstance.message = 'This is an alert dialog with a custom message.';
  }

  showConfirmDialog(): void {
    let dialogRef: MdDialogRef<TdConfirmDialogComponent> =
    this._dialogService.open(TdConfirmDialogComponent, this._dialogConfig);
    dialogRef.componentInstance.title = 'Confirmation Title';
    dialogRef.componentInstance.message = 'This is a confirmation dialog. Like what you see in covalent?';
    dialogRef.afterClosed().subscribe((data: any) => {
      let snackBarRef: MdSnackBarRef<any>;
      if (data) {
        snackBarRef = this._snackBarService.open('You clicked Yes :D', 'Ok', this._snackBarConfig);
      } else {
        snackBarRef = this._snackBarService.open('You clicked No :(', 'Ok', this._snackBarConfig);
      }
      setTimeout(() => {
        snackBarRef.dismiss();
      }, 3000);
    });
  }
}
