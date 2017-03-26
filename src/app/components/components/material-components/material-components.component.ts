import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from '../../../app.animations';
import { MdSnackBar, MdDialog } from '@angular/material';

@Component({
  selector: 'design-patterns-material-components',
  styleUrls: ['./material-components.component.scss'],
  templateUrl: './material-components.component.html',
  animations: [slideInDownAnimation],
})
export class MaterialComponentsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  isDisabled: boolean = false;
  isIndeterminate: boolean = false;
  favoriteSeason: string = 'Autumn';
  selectedValue: string;
  color: string;
  alwaysVisible: boolean = false;

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

  user: any = {
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
      name: 'Learn Angular',
    }, {
      finished: true,
      name: 'Learn Angular Material',
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

  house: any = {
    lockHouse: false,
  };

  // Autocomplete
  currentState: string = '';

  reactiveStates: any;
  tdStates: any[];

  tdDisabled: boolean = false;

  states: Object[] = [
    {code: 'AL', name: 'Alabama'},
    {code: 'AK', name: 'Alaska'},
    {code: 'AZ', name: 'Arizona'},
    {code: 'AR', name: 'Arkansas'},
    {code: 'CA', name: 'California'},
    {code: 'CO', name: 'Colorado'},
    {code: 'CT', name: 'Connecticut'},
    {code: 'DE', name: 'Delaware'},
    {code: 'FL', name: 'Florida'},
    {code: 'GA', name: 'Georgia'},
    {code: 'HI', name: 'Hawaii'},
    {code: 'ID', name: 'Idaho'},
    {code: 'IL', name: 'Illinois'},
    {code: 'IN', name: 'Indiana'},
    {code: 'IA', name: 'Iowa'},
    {code: 'KS', name: 'Kansas'},
    {code: 'KY', name: 'Kentucky'},
    {code: 'LA', name: 'Louisiana'},
    {code: 'ME', name: 'Maine'},
    {code: 'MD', name: 'Maryland'},
    {code: 'MA', name: 'Massachusetts'},
    {code: 'MI', name: 'Michigan'},
    {code: 'MN', name: 'Minnesota'},
    {code: 'MS', name: 'Mississippi'},
    {code: 'MO', name: 'Missouri'},
    {code: 'MT', name: 'Montana'},
    {code: 'NE', name: 'Nebraska'},
    {code: 'NV', name: 'Nevada'},
    {code: 'NH', name: 'New Hampshire'},
    {code: 'NJ', name: 'New Jersey'},
    {code: 'NM', name: 'New Mexico'},
    {code: 'NY', name: 'New York'},
    {code: 'NC', name: 'North Carolina'},
    {code: 'ND', name: 'North Dakota'},
    {code: 'OH', name: 'Ohio'},
    {code: 'OK', name: 'Oklahoma'},
    {code: 'OR', name: 'Oregon'},
    {code: 'PA', name: 'Pennsylvania'},
    {code: 'RI', name: 'Rhode Island'},
    {code: 'SC', name: 'South Carolina'},
    {code: 'SD', name: 'South Dakota'},
    {code: 'TN', name: 'Tennessee'},
    {code: 'TX', name: 'Texas'},
    {code: 'UT', name: 'Utah'},
    {code: 'VT', name: 'Vermont'},
    {code: 'VA', name: 'Virginia'},
    {code: 'WA', name: 'Washington'},
    {code: 'WV', name: 'West Virginia'},
    {code: 'WI', name: 'Wisconsin'},
    {code: 'WY', name: 'Wyoming'},
  ];

  constructor(private _snackBarService: MdSnackBar,
              public dialog: MdDialog) {
                this.tdStates = this.states;
              }

  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.name : value;
  }

  filterStates(val: string): Object[] {
    return val ? this.states.filter((s: any) => s.name.match(new RegExp(val, 'gi'))) : this.states;
  }

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
