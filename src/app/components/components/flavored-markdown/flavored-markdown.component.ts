import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'flavored-markdown-demo',
  styleUrls: ['./flavored-markdown.component.scss'],
  templateUrl: './flavored-markdown.component.html',
  animations: [slideInDownAnimation],
  preserveWhitespaces: true,
})
export class FlavoredMarkdownDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
