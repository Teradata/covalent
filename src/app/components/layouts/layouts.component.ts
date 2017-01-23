import { Component, HostBinding } from '@angular/core';

import { fadeAnimation } from '../../app.animations';

@Component({
  selector: 'app-layouts',
  styleUrls: ['./layouts.component.scss'],
  templateUrl: './layouts.component.html',
  animations: [fadeAnimation],
})
export class LayoutsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
