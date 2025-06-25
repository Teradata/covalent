import { Component, inject } from '@angular/core';

import { routeGroups } from '../../../utilities/route-trees';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { ICombinedRouteGroup } from '../../../utilities/route-group';

@Component({
  standalone: false,
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
})
export class SidenavContentComponent {
  router = inject(Router);

  private readonly matchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'subset',
    matrixParams: 'ignored',
    fragment: 'ignored',
  };

  combinedRoutes: ICombinedRouteGroup[] = routeGroups;

  isActive(route: string): boolean {
    return this.router.isActive(route, this.matchOptions);
  }
}
