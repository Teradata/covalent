import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'json-formatter-demo',
  styleUrls: ['./json-formatter.component.scss'],
  templateUrl: './json-formatter.component.html',
  animations: [slideInDownAnimation],
})
export class JsonFormatterDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  jsonFormatterAttrs: Object[] = [{
    description: `Tag to be displayed as root of formatted object.`,
    name: 'key?',
    type: 'string',
  }, {
    description: `JS object to be formatted.`,
    name: 'data',
    type: 'any',
  }, {
    description: `Levels opened by default when JS object is formatted and rendered.`,
    name: 'levelsOpen?',
    type: 'number',
  }, {
    description: `Refreshes json-formatter and rerenders [data]`,
    name: 'refresh',
    type: `function()`,
  }];

  data: Object = {
    'stringProperty': 'This is a string',
    'dateProperty': new Date(),
    'numberProperty': 10000,
    'booleanProperty': true,
    'numberArray': [1, 2, 3, 4, 5, 6],
    'arrayOfArrays': [
      [1, [2, 3]],
      [3, 4],
    ],
    'objectArray': [{
        'prop': undefined,
      }, {
      },
    ],
    'functionProperty': function(arg1: any, arg2: any): void {
      // empty
    },
    'undefinedProperty': undefined,
    'longNameeeeeeeeeeeProoooopeeeeeeeeeeertyy': 'got truncated',
    'emptyObject': {
    },
    'emptyArray': [],
  };
}
