import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-creating',
  styleUrls: ['./creating.component.scss'],
  templateUrl: './creating.component.html',
  animations: [slideInDownAnimation],
})
export class CreatingComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
