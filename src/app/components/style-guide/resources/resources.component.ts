import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'style-guide-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  animations: [slideInDownAnimation],
})
export class ResourcesComponent {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;

}
