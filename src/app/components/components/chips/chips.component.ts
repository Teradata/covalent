import { Component } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { MdButton } from '@angular2-material/button';

import { TdChipsComponent } from '../../../../platform/chips';
import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    MdButton,
    TdChipsComponent,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-chips-demo',
  styleUrls: ['chips.component.css'],
  templateUrl: 'chips.component.html',
})
export class ChipsDemoComponent {

}
