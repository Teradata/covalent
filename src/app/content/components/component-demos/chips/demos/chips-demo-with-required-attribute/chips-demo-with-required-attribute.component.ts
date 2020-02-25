import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chips-demo-with-required-attribute',
  templateUrl: './chips-demo-with-required-attribute.component.html',
  styleUrls: ['./chips-demo-with-required-attribute.component.scss'],
})
export class ChipsDemoWithRequiredAttributeComponent {
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

  stackedStringsModel: string[] = this.strings.slice(0, 2);
}
