import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'utility-styles',
  templateUrl: './utility-styles.component.html',
  styleUrls: ['./utility-styles.component.scss'],
  animations: [slideInDownAnimation],
})
export class UtilityStylesComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;

}
