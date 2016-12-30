import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-angular-material',
  styleUrls: ['./angular-material.component.scss'],
  templateUrl: './angular-material.component.html',
  animations: [slideInDownAnimation],
})
export class AngularMaterialComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
