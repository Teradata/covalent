import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'chips-demo',
  styleUrls: ['./chips.component.scss'],
  templateUrl: './chips.component.html',
  animations: [slideInDownAnimation],
})
export class ChipsDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  chipsAttrs: Object[] = [{
    description: `Enables Autocompletion with the provided list of strings.`,
    name: 'items?',
    type: 'string[]',
  }, {
    description: `Disables the chip input and removal.`,
    name: 'readOnly?',
    type: 'boolean',
  }, {
    description: `Validates input against the provided search list before adding it to the model.
                  If it doesnt exist, it cancels the event.`,
    name: 'requireMatch?',
    type: 'boolean',
  }, {
    description: `Placeholder for the autocomplete input.`,
    name: 'placeholder?',
    type: 'string',
  }, {
    description: `Method to be executed when string is added as chip through the autocomplete.
                  Sends chip value as event.`,
    name: 'add?',
    type: 'function',
  }, {
    description: `Method to be executed when string is removed as chip with the "remove" button.
                  Sends chip value as event.`,
    name: 'remove?',
    type: 'function',
  },  {
    description: `Disables the ability to add chips. If it doesn't exist chipAddition defaults to true.`,
    name: 'chipAddition?',
    type: 'boolean',
  }];

  readOnly: boolean = false;
  chipAddition: boolean = true;

  items: string[] = [
    'stepper',
    'expansion-panel',
    'markdown',
    'highlight',
    'loading',
    'media',
    'chips',
    'http',
    'json-formatter',
    'pipes',
    'need more?',
  ];

  itemsRequireMatch: string[] = this.items.slice(0, 6);

  objects: any[] = [
    {id: 1, city: 'San Diego', population: '4'},
    {id: 2, city: 'San Franscisco', population: '3'},
    {id: 3, city: 'Los Angeles', population: '6'},
    {id: 4, city: 'Austin', population: '2'},
    {id: 5, city: 'New York City', population: '1'},
    {id: 6, city: 'Tijuana', population: '0'},
  ];

  objectsRequireMatch: string[] = this.objects.slice(0, 2);

  compareWith(item: any, val: string): boolean {
    return val ? item.city.toLowerCase().indexOf(val) > -1 : true;
  }

}
