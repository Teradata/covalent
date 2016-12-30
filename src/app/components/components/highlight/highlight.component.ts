import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'highlight-demo',
  styleUrls: ['./highlight.component.scss'],
  templateUrl: './highlight.component.html',
  animations: [slideInDownAnimation],
})
export class HighlightDemoComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;

}
