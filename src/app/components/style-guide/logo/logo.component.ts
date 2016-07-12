import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MdButton, MdAnchor } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

import { TD_LAYOUT_DIRECTIVES } from '../../../../platform/core';
import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MdButton,
    MdAnchor,
    MD_CARD_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    ROUTER_DIRECTIVES,
    TD_LAYOUT_DIRECTIVES,
    MdIcon,
    MdToolbar,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-style-guide-logo',
  styleUrls: ['logo.component.css'],
  templateUrl: 'logo.component.html',
})
export class LogoComponent {

}
