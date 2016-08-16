import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MdAnchor } from '@angular2-material/button';

import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  moduleId: module.id,
  directives: [ ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MdIcon, MdAnchor, TdHighlightComponent ],
  selector: 'td-docs-theme',
  templateUrl: 'theme.component.html',
  styleUrls: ['theme.component.css']
})
export class ThemeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
