import { Component } from '@angular/core';

import { MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { MdButton } from '@angular2-material/button';
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

import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MdButton,
    MD_CARD_DIRECTIVES,
    MdIcon,
    MD_INPUT_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdProgressBar,
    MdProgressCircle,
    MdSpinner,
    MdRadioButton,
    MdRadioGroup,
    MD_SIDENAV_DIRECTIVES,
    MdToolbar,
    MdCheckbox,
    MD_TABS_DIRECTIVES,
    MD_SLIDE_TOGGLE_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
    TdHighlightComponent,
  ],
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
      from: 'Parsey McParseface',
      message: 'message example',
      photo: 'https://github.td.teradata.com/avatars/u/179?s=40',
      subject: 'subject line',
    }, {
      from: 'Parsey McParseface',
      message: 'message example',
      photo: 'https://github.td.teradata.com/avatars/u/179?s=40',
      subject: 'subject line',
    }, {
      from: 'Parsey McParseface',
      message: 'message example',
      photo: 'https://github.td.teradata.com/avatars/u/179?s=40',
      subject: 'subject line',
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
