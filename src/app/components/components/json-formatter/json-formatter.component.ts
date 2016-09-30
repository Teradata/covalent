import { Component } from '@angular/core';

@Component({
  selector: 'json-formatter-demo',
  styleUrls: ['json-formatter.component.scss'],
  templateUrl: 'json-formatter.component.html',
})
export class JsonFormatterDemoComponent {

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
  }];

  data: Object = {
    'stringProperty': 'This is a string',
    'dateProperty': new Date(),
    'numberProperty': 10000,
    'booleanProperty': true,
    'numberArray': [1, 2, 3, 4, 5, 6],
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
