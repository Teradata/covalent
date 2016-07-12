import { Component } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdAnchor } from '@angular2-material/button';

import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [ MD_CARD_DIRECTIVES, MdAnchor, TdHighlightComponent ],
  moduleId: module.id,
  selector: 'td-docs-overview',
  styleUrls: ['overview.component.css'],
  templateUrl: 'overview.component.html',
})
export class OverviewComponent {

}
