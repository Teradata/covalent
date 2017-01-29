import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

import { fadeAnimation } from '../../../app.animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-card-over',
  styleUrls: ['./card-over.component.scss'],
  templateUrl: './card-over.component.html',
  animations: [fadeAnimation],
})
export class CardOverComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
