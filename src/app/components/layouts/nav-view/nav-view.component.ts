import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';

import { TD_LAYOUT_DIRECTIVES, TD_STEPS_DIRECTIVES } from '../../../../platform/core';
import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    TdHighlightComponent,
    TD_STEPS_DIRECTIVES,
    ROUTER_DIRECTIVES,
  ],
  moduleId: module.id,
  selector: 'td-layouts-nav-view',
  styleUrls: ['nav-view.component.css'],
  templateUrl: 'nav-view.component.html',
})
export class NavViewComponent {

}
