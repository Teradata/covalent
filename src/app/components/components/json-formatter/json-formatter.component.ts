import { Component } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdButton } from '@angular2-material/button';

import { TdHighlightComponent } from '../../../../platform/highlight';
import { TdJsonFormatterComponent } from '../../../../platform/json-formatter';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdButton,
    TdHighlightComponent,
    TdJsonFormatterComponent,
  ],
  moduleId: module.id,
  selector: 'td-json-formatter-demo',
  styleUrls: ['json-formatter.component.css'],
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

  levelsOpen: number = 1;
  data: Object = {
    'stringProperty': 'This is a string',
    'dateProperty': new Date(),
    'numberProperty': 10000,
    'booleanProperty': true,
    'numberArray': [1, 2, 3, 4, 5, 6],
    'objectArray': [{
        prop: undefined,
      }, {
        prop: [1, 2],
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

  expandLevel(): void {
    if (this.levelsOpen < 3) {
      this.levelsOpen++;
    }
  }

  collapseLevel(): void {
    if (this.levelsOpen > 0) {
      this.levelsOpen--;
    }
  }

}
