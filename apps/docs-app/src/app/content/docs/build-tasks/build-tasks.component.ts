import { Component, HostBinding } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-build-tasks',
  styleUrls: ['./build-tasks.component.scss'],
  templateUrl: './build-tasks.component.html',
  animations: [slideInUpAnimation],
})
export class BuildTasksComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('class.td-route-animation') classAnimation = true;
}
