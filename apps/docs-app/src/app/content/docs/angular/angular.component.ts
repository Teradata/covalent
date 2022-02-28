import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-angular',
  styleUrls: ['./angular.component.scss'],
  templateUrl: './angular.component.html',
  animations: [slideInUpAnimation],
})
export class AngularComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;
}
