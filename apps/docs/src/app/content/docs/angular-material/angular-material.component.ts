import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-angular-material',
  styleUrls: ['./angular-material.component.scss'],
  templateUrl: './angular-material.component.html',
  animations: [slideInUpAnimation],
})
export class AngularMaterialComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;
}
