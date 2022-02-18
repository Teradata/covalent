import { Component } from '@angular/core';

@Component({
  selector: 'json-formatter-demo',
  styleUrls: ['./json-formatter.component.scss'],
  templateUrl: './json-formatter.component.html',
})
export class JsonFormatterDemoComponent {
  data: Record<string, any> = {
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
