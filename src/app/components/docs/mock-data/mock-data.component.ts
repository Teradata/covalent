import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-mock-data',
  styleUrls: ['./mock-data.component.scss'],
  templateUrl: './mock-data.component.html',
  animations: [slideInDownAnimation],
})
export class MockDataComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
