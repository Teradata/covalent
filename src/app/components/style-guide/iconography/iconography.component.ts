import { Component, OnInit, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';
import { IconService } from '../../../../platform/core/common/services/icon.service';

@Component({
  selector: 'style-guide-iconography',
  styleUrls: ['./iconography.component.scss'],
  templateUrl: './iconography.component.html',
  animations: [slideInDownAnimation],
})
export class IconographyComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  colors: string[] = [
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
  ];
  neutrals: string[] = [
    'brown',
    'grey',
    'blue-grey',
  ];

  serviceAttrs: Object[] = [{
    description: `Searches query parameter and returns a new array with icons which match with the searched term.`,
    name: 'filter',
    type: `function(query: string): string[]`,
  }, {
    description: `Returns the complete icons array.`,
    name: 'icons',
    type: `function(): string[]`,
  }];

  icons: string[] = [];
  query: string = '';
  filteredList: string[] = [];

  constructor(private _iconService: IconService) {}

  ngOnInit(): void {
    this.icons = this._iconService.icons;
    this.filteredList = this.icons;
  }

  filter(): void {
    this.filteredList = this._iconService.filter(this.query);
  }
}
