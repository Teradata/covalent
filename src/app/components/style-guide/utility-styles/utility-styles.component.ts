import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'utility-styles',
  templateUrl: './utility-styles.component.html',
  styleUrls: ['./utility-styles.component.scss'],
  animations: [slideInDownAnimation],
  preserveWhitespaces: true,
})
export class UtilityStylesComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
