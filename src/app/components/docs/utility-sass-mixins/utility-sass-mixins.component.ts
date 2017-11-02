import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'utility-sass-mixins',
  styleUrls: ['./utility-sass-mixins.component.scss'],
  templateUrl: './utility-sass-mixins.component.html',
  animations: [slideInDownAnimation],
})
export class UtilitySASSMixinsComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
