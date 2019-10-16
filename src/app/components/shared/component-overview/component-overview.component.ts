import { Component, HostBinding, OnInit } from '@angular/core';

import { TdMediaService } from '@covalent/core/media';

import { slideInUpAnimation } from '../../../app.animations';
import { ActivatedRoute } from '@angular/router';
import { routeGroups } from 'app/utilities/route-trees';

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

  constructor(public media: TdMediaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.category = routeGroups.find((group) => group.name.toLowerCase() === data.category);
      this.categoryGroups = this.category.routeGroups;
    });
  }
}
