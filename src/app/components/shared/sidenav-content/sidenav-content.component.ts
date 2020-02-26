import { Component } from '@angular/core';

import { routeGroups } from '../../../utilities/route-trees';
import { Router } from '@angular/router';
import { ICombinedRouteGroup } from 'app/utilities/route-group';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent {
  combinedRoutes: ICombinedRouteGroup[] = routeGroups;

  constructor(public router: Router) {}
}
