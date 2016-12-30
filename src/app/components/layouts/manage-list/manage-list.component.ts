import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'layouts-manage-list',
  styleUrls: ['./manage-list.component.scss'],
  templateUrl: './manage-list.component.html',
  animations: [slideInDownAnimation],
})
export class ManageListComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

}
