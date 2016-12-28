import { Component } from '@angular/core';
import { MdSnackBar, MdDialog } from '@angular/material';

@Component({
  selector: 'design-patterns-material-components',
  styleUrls: ['./material-components.component.scss'],
  templateUrl: './material-components.component.html',
})
export class MaterialComponentsComponent {

  isDisabled: boolean = false;
  isIndeterminate: boolean = false;
  favoriteSeason: string = 'Autumn';
  selectedValue: string;
  color: string;

  chips: Object = [
    { name: 'Default', color: '', selected: false },
    { name: 'Default (selected)', color: '', selected: true },
    { name: 'Primary (selected)', color: 'primary', selected: true },
    { name: 'Accent (selected)', color: 'accent', selected: true },
    { name: 'Warn (selected)', color: 'warn', selected: true },
  ];

  foods: Object = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

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
      color: 'primary',
    }, {
      name: 'Surround Sound',
      on: true,
      color: 'accent',
    }, {
      name: 'T.V.',
      on: true,
      color: 'warn',
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

  constructor(private _snackBarService: MdSnackBar,
              public dialog: MdDialog) { }

  showSnackBar(): void {
    this._snackBarService.open('Message', 'Action', { duration: 3000 });
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '60%',
    });
  }
}

@Component({
  selector: 'dialog-example',
  template: `
    <h3 md-dialog-title>Simple Dialog</h3>
    <md-dialog-content>
      <p>Apply a <code>md-dialog-title</code> attribute on a heading.</p>
      <p>Use a <code>md-dialog-content</code> element for content.</p>
      <p>Place actions in an <code>md-dialog-actions</code> element.</p>
    </md-dialog-content>
    <md-dialog-actions layout="row" layout-align="end center">
      <button md-button md-dialog-close>Close</button>
    </md-dialog-actions>
  `,
})
export class DialogComponent {}
