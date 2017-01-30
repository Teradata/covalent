import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-deployment',
  styleUrls: ['./deployment.component.scss'],
  templateUrl: './deployment.component.html',
  animations: [slideInDownAnimation],
})
export class DeploymentComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
