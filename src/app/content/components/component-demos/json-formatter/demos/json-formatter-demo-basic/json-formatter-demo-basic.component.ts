import { Component } from '@angular/core';

@Component({
  selector: 'json-formatter-demo-basic',
  styleUrls: ['./json-formatter-demo-basic.component.scss'],
  templateUrl: './json-formatter-demo-basic.component.html',
  preserveWhitespaces: true,
})
export class JsonFormatterDemoBasicComponent {
  data: object = {
    stringProperty: 'This is a string',
    dateProperty: new Date(),
    numberProperty: 10000,
    booleanProperty: true,
    numberArray: [1, 2, 3, 4, 5, 6],
    arrayOfArrays: [
      [1, [2, 3]],
      [3, 4],
    ],
    objectArray: [
      {
        prop: undefined,
      },
      {},
    ],
    functionProperty: (arg1: any, arg2: any): void => {
      // empty
    },
    undefinedProperty: undefined,
    longNameeeeeeeeeeeProoooopeeeeeeeeeeertyy: 'got truncated',
    emptyObject: {},
    emptyArray: [],
  };
}
