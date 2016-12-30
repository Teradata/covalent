import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'docs-build-tasks',
  styleUrls: ['./build-tasks.component.scss'],
  templateUrl: './build-tasks.component.html',
  animations: [slideInDownAnimation],
})
export class BuildTasksComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
