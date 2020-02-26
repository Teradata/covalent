import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-icons',
  styleUrls: ['./icons.component.scss'],
  templateUrl: './icons.component.html',
  animations: [slideInUpAnimation],
  preserveWhitespaces: true,
})
export class IconsComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
}
