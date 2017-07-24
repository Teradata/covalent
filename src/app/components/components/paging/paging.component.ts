import { Component, HostBinding } from '@angular/core';

import { slideInDownAnimation } from '../../../app.animations';

import { IPageChangeEvent } from '../../../../platform/core';

@Component({
  selector: 'paging-demo',
  styleUrls: ['./paging.component.scss'],
  templateUrl: './paging.component.html',
  animations: [slideInDownAnimation],
})
export class PagingDemoComponent {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;
    
  event1: IPageChangeEvent;
  event2: IPageChangeEvent;
  firstLast: boolean = false;
  pageSizeAll: boolean = false;

  change1(event: IPageChangeEvent): void {
    this.event1 = event;
  }

  change2(event: IPageChangeEvent): void {
    this.event2 = event;
  }

  toggleFirstLast(): void {
    this.firstLast = !this.firstLast;
  }

  togglePageSizeAll(): void {
    this.pageSizeAll = !this.pageSizeAll;
  }

}
