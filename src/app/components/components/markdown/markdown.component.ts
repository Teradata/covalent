import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'markdown-demo',
  styleUrls: ['./markdown.component.scss'],
  templateUrl: './markdown.component.html',
  animations: [slideInDownAnimation],
})
export class MarkdownDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
