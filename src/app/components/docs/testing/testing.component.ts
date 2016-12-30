import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-testing',
  styleUrls: ['./testing.component.scss'],
  templateUrl: './testing.component.html',
  animations: [slideInDownAnimation],
})
export class TestingComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
