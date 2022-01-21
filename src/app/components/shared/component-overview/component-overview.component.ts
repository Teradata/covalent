import { Component, HostBinding, OnInit } from '@angular/core';

import { slideInUpAnimation } from '../../../app.animations';
import { ActivatedRoute } from '@angular/router';
import { routeGroups } from 'app/utilities/route-trees';
import { ICombinedRouteGroup } from 'app/utilities/route-group';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.category = routeGroups.find((group: ICombinedRouteGroup) => group.name.toLowerCase() === data.category);
      this.categoryGroups = this.category.routeGroups;
    });
  }
}
