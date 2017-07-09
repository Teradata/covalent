import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-angular',
  styleUrls: ['./angular.component.scss'],
  templateUrl: './angular.component.html',
  animations: [slideInDownAnimation],
})
export class AngularComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
