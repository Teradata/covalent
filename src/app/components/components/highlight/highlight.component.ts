import { Component } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-highlight-demo',
  styleUrls: ['highlight.component.css'],
  templateUrl: 'highlight.component.html',

})
export class HighlightDemoComponent {

}
