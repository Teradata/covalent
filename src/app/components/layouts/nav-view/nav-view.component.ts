import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

import { fadeAnimation } from '../../../app.animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-nav-view',
  styleUrls: ['./nav-view.component.scss'],
  templateUrl: './nav-view.component.html',
  animations: [fadeAnimation],
})
export class NavViewComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
