import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    MdIcon,
    MD_INPUT_DIRECTIVES,
    MdButton,
    MD_LIST_DIRECTIVES,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-design-patterns-cards',
  styleUrls: ['cards.component.css'],
  templateUrl: 'cards.component.html',
})
export class CardsComponent {

}
