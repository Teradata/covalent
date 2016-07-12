import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';

import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MdButton,
    MD_CARD_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-style-guide-product-icons',
  styleUrls: ['product-icons.component.css'],
  templateUrl: 'product-icons.component.html',
})
export class ProductIconsComponent {

}
