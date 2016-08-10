import { Component } from '@angular/core';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  moduleId: module.id,
  selector: 'td-style-guide-colors',
  styleUrls: ['colors.component.css'],
  templateUrl: 'colors.component.html',
})
export class ColorsComponent {
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
