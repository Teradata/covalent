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

  readOnly: boolean = false;
  chipAddition: boolean = true;
  chipRemoval: boolean = true;

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
      if (value) {
        return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
      } else {
        return false;
      }
    }).filter((filteredItem: any) => {
      return this.stringsModel ? this.stringsModel.indexOf(filteredItem) < 0 : true;
    });
  }

  filterObjects(value: string): void {
    this.filteredObjects = this.objects.filter((obj: any) => {
      if (value) {
        return obj.city.toLowerCase().indexOf(value.toLowerCase()) > -1;
      } else {
        return false;
      }
    }).filter((filteredObj: any) => {
      return this.objectsModel ? this.objectsModel.indexOf(filteredObj) < 0 : true;
    });
  }

  filterAsync(value: string): void {
    this.filteredAsync = undefined;
    if (value) {
      this.filteringAsync = true;
      setTimeout(() => {
        this.filteredAsync = this.strings.filter((item: any) => {
          return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
        }).filter((filteredItem: any) => {
          return this.asyncModel ? this.asyncModel.indexOf(filteredItem) < 0 : true;
        });
        this.filteringAsync = false;
      }, 2000);
    }
  }
}
