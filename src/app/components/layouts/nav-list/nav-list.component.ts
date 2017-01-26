import { Component, HostBinding, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { TdMediaService } from '@covalent/core';

import { fadeAnimation } from '../../../app.animations';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'layouts-nav-list',
  styleUrls: ['./nav-list.component.scss'],
  templateUrl: './nav-list.component.html',
  animations: [fadeAnimation],
})
export class NavListComponent implements AfterViewInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  items: Object[] = [{
    description: 'item description',
    icon: 'view_compact',
    title: 'Item Name',
  }, {
    description: 'item description',
    icon: 'view_quilt',
    title: 'Item Name',
  }, {
    description: 'item description',
    icon: 'view_day',
    title: 'Item Name',
  }, {
    description: 'item description',
    icon: 'view_list',
    title: 'Item Name',
  }];

  constructor(public media: TdMediaService) {}

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
  }

}
