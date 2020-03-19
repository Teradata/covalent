import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chips-demo-with-compareWith-function',
  templateUrl: './chips-demo-with-compareWith-function.component.html',
  styleUrls: ['./chips-demo-with-compareWith-function.component.scss'],
})
export class ChipsDemoWithCompareWithFunctionComponent {
  compareWith: (o1: any, o2: any) => boolean = (o1: any, o2: any) => {
    return o1.toUpperCase() === o2.toUpperCase();
  };
}
