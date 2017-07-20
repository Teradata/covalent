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
    
  event: IPageChangeEvent;
  firstLast: boolean = false;
  pageSizeAll: boolean = false;

  change(event: IPageChangeEvent): void {
    this.event = event;
  }

  toggleFirstLast(): void {
    this.firstLast = !this.firstLast;
  }

  togglePageSizeAll(): void {
    this.pageSizeAll = !this.pageSizeAll;
  }

}
