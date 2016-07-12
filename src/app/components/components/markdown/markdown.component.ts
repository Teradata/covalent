import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { TdMarkdownComponent } from '../../../../platform/markdown';
import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    MdIcon,
    TdMarkdownComponent,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  selector: 'td-markdown',
  styleUrls: ['markdown.component.css'],
  templateUrl: 'markdown.component.html',
})

export class MarkdownDemoComponent {

}
