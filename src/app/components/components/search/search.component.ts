import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'search-demo',
  styleUrls: ['./search.component.scss'],
  templateUrl: './search.component.html',
  animations: [slideInDownAnimation],
})
export class SearchDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  searchInputAttrs: Object[] = [{
    description: `Debounce timeout between keypresses. Defaults to 400.`,
    name: 'debounce?',
    type: 'number',
  }, {
    description: `Placeholder for the underlying input component.`,
    name: 'placeholder?',
    type: 'string',
  }, {
    description: `Sets if the input underline should be visible. Defaults to 'false'.`,
    name: 'showUnderline?',
    type: 'boolean',
  }, {
    description: `Event emitted after the [debounce] timeout.`,
    name: 'searchDebounce',
    type: 'function($event)',
  }, {
    description: `Event emitted after the key enter has been pressed.`,
    name: 'search',
    type: 'function($event)',
  }, {
    description: `The icon used to clear the search input. Defaults to 'cancel' icon.`,
    name: 'clearIcon?',
    type: 'string',
  }, {
    description: `Event emitted after the clear icon has been clicked.`,
    name: 'clear',
    type: 'function($event)',
  }];

  searchBoxAttrs: Object[] = [{
    description: `Debounce timeout between keypresses. Defaults to 400.`,
    name: 'debounce?',
    type: 'number',
  }, {
    description: `Placeholder for the underlying input component.`,
    name: 'placeholder?',
    type: 'string',
  }, {
    description: `The icon used to close the search toggle, only shown when [alwaysVisible] is false.
                  Defaults to 'search' icon.`,
    name: 'backIcon?',
    type: 'string',
  }, {
    description: `The icon used to open/focus the search toggle.
                  Defaults to 'search' icon.`,
    name: 'searchIcon?',
    type: 'string',
  }, {
    description: `The icon used to clear the search input. Defaults to 'cancel' icon.`,
    name: 'clearIcon?',
    type: 'string',
  }, {
    description: `Sets if the input underline should be visible. Defaults to 'false'.`,
    name: 'showUnderline?',
    type: 'boolean',
  }, {
    description: `Sets if the input should always be visible. Defaults to 'false'.`,
    name: 'alwaysVisible?',
    type: 'boolean',
  }, {
    description: `Event emitted after the [debounce] timeout.`,
    name: 'searchDebounce',
    type: 'function($event)',
  }, {
    description: `Event emitted after the key enter has been pressed.`,
    name: 'search',
    type: 'function($event)',
  }, {
    description: `Event emitted after the clear icon has been clicked.`,
    name: 'clear',
    type: 'function($event)',
  }];

  searchInputTerm: string = '';
  searchBoxTerm: string = '';
  debounce: number = 0;
  alwaysVisible: boolean = false;

  modeChange(): void {
    this.searchInputTerm = '';
    this.searchBoxTerm = '';
  }

  toggleAlwaysVisible(): void {
    this.alwaysVisible = !this.alwaysVisible;
  }

}
