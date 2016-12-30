import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'layouts-nav-view',
  styleUrls: ['./nav-view.component.scss'],
  templateUrl: './nav-view.component.html',
  animations: [slideInDownAnimation],
})
export class NavViewComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;

}
