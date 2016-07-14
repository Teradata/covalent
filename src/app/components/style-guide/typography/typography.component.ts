import { Component } from '@angular/core';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';

import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdIcon,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-style-guide-typography',
  styleUrls: ['typography.component.css'],
  templateUrl: 'typography.component.html',
})
export class TypographyComponent {
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
}
