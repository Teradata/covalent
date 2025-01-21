import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule } from '@angular/router';
import { TdLayoutComponent } from '@covalent/core/layout';
import { CovalentCommonModule } from '@covalent/core/common';

import { routeGroups } from '../../../utilities/route-trees';
import { IsActiveMatchOptions, Router } from '@angular/router';
import { ICombinedRouteGroup } from '../../../utilities/route-group';

@Component({
  selector: 'app-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss'],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,
    /** Material Modules */
    MatListModule,
    MatExpansionModule,
    /** Covalent Modules */
    CovalentCommonModule,
    TdLayoutComponent,
  ],
})
export class SidenavContentComponent {
  private readonly matchOptions: IsActiveMatchOptions = {
    paths: 'exact',
    queryParams: 'subset',
    matrixParams: 'ignored',
    fragment: 'ignored',
  };

  combinedRoutes: ICombinedRouteGroup[] = routeGroups;

  constructor(public router: Router) {}

  isActive(route: string): boolean {
    return this.router.isActive(route, this.matchOptions);
  }
}
