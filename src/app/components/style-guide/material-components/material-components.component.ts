import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'design-patterns-material-components',
  styleUrls: ['material-components.component.css'],
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

  house: Object = {
    lockHouse: false,
  };
}
