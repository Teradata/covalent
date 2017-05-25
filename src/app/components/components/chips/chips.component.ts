import { Component, HostBinding, OnInit } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'chips-demo',
  styleUrls: ['./chips.component.scss'],
  templateUrl: './chips.component.html',
  animations: [slideInDownAnimation],
})
export class ChipsDemoComponent implements OnInit {

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

  filteringAsync: boolean = false;

  strings: string[] = [
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

  filteredStrings: string[];

  stringsModel: string[] = this.strings.slice(0, 6);

  objects: any[] = [
    {id: 1, city: 'San Diego', population: '4M'},
    {id: 2, city: 'San Franscisco', population: '6M'},
    {id: 3, city: 'Los Angeles', population: '5M'},
    {id: 4, city: 'Austin', population: '3M'},
    {id: 5, city: 'New York City', population: '10M'},
  ];

  filteredObjects: string[];

  objectsModel: string[] = this.objects.slice(0, 2);

  filteredAsync: string[];

  asyncModel: string[] = this.strings.slice(0, 2);

  ngOnInit(): void {
    this.filterStrings('');
    this.filterObjects('');
  }

  filterStrings(value: string): void {
    this.filteredStrings = this.strings.filter((item: any) => {
      return item.toLowerCase().indexOf(value ? value.toLowerCase() : '') > -1;
    }).filter((filteredItem: any) => {
      return this.stringsModel ? this.stringsModel.indexOf(filteredItem) < 0 : true;
    });
  }

  filterObjects(value: string): void {
    this.filteredObjects = this.objects.filter((obj: any) => {
      return obj.city.toLowerCase().indexOf(value ? value.toLowerCase() : '') > -1;
    }).filter((filteredObj: any) => {
      return this.objectsModel ? this.objectsModel.indexOf(filteredObj) < 0 : true;
    });
  }

  filterAsync(value: string): void {
    this.filteredAsync = undefined;
    if (value !== '') {
      this.filteringAsync = true;
      setTimeout(() => {
        this.filteredAsync = this.strings.filter((item: any) => {
          return item.toLowerCase().indexOf(value ? value.toLowerCase() : '') > -1;
        }).filter((filteredItem: any) => {
          return this.asyncModel ? this.asyncModel.indexOf(filteredItem) < 0 : true;
        });
        this.filteringAsync = false;
      }, 2000);
    }
  }
}
