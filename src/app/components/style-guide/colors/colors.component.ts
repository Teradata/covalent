import { Component } from '@angular/core';

import { MdButton, MdAnchor } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

@Component({
  directives: [
    MdButton,
    MdAnchor,
    MD_CARD_DIRECTIVES,
    MdIcon,
    MdToolbar,
    MD_LIST_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
  ],
  moduleId: module.id,
  selector: 'td-style-guide-colors',
  styleUrls: ['colors.component.css'],
  templateUrl: 'colors.component.html',
})
export class ColorsComponent {

}
