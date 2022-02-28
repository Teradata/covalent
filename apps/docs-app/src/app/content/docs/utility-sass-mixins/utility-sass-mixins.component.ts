import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'utility-sass-mixins',
  styleUrls: ['./utility-sass-mixins.component.scss'],
  templateUrl: './utility-sass-mixins.component.html',
  animations: [slideInUpAnimation],
})
export class UtilitySASSMixinsComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;
}
