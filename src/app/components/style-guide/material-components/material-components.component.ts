import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdProgressBar } from '@angular2-material/progress-bar';
import { MdProgressCircle, MdSpinner } from '@angular2-material/progress-circle';
import { MdRadioButton, MdRadioGroup } from '@angular2-material/radio';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_SLIDE_TOGGLE_DIRECTIVES } from '@angular2-material/slide-toggle';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { MD_MENU_DIRECTIVES } from '@angular2-material/menu';

import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  moduleId: module.id,
  providers: [ MdUniqueSelectionDispatcher ],
  selector: 'td-design-patterns-material-components',
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
