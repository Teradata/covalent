import { Component, HostBinding, OnInit } from '@angular/core';

import { TdMediaService } from '@covalent/core/media';

import { slideInUpAnimation } from '../../../app.animations';
import { ActivatedRoute } from '@angular/router';
import { routeGroups } from 'app/utilities/route-trees';
import { ICombinedRouteGroup, IRouteGroup } from 'app/utilities/route-group';

const ANGULAR_DOCS_URL: string = 'https://material.angular.io/';
@Component({
  selector: 'component-overview',
  styleUrls: ['./component-overview.component.scss'],
  templateUrl: './component-overview.component.html',
  animations: [slideInUpAnimation],
})
export class ComponentOverviewComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  category: any;
  categoryGroups: any;
  angularDocsURL: string = ANGULAR_DOCS_URL;

  constructor(public media: TdMediaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this._initializeCategoryByName(data.category);
    });
  }

  private _initializeCategoryByName(category: string): void {
    this.category = routeGroups.find((group: ICombinedRouteGroup) => group.name.toLowerCase() === category);
    if (this.category) {
      this.categoryGroups = this.category.routeGroups;
    } else {
      routeGroups.forEach((group: ICombinedRouteGroup) => {
        const currentCategory: IRouteGroup = group.routeGroups.find(
          (subGroup: IRouteGroup) => subGroup.name.toLowerCase() === category,
        );
        if (currentCategory) {
          this.category = currentCategory;
          this.categoryGroups = this.category.routeGroups;
        }
      });
    }
  }
}
