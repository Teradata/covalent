import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-testing',
  styleUrls: ['./testing.component.scss'],
  templateUrl: './testing.component.html',
  animations: [slideInUpAnimation],
})
export class TestingComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;
}
