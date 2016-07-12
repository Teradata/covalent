import { Component } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { MdAnchor } from '@angular2-material/button';

import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [ MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MdIcon, MdAnchor, TdHighlightComponent ],
  moduleId: module.id,
  selector: 'td-docs-testing',
  styleUrls: ['testing.component.css'],
  templateUrl: 'testing.component.html',
})
export class TestingComponent {

}
