import { Component, HostBinding, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '../../../../platform/core';

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
  eventPageSize: IPageChangeEvent;
  eventLinks: IPageChangeEvent;
  eventInput: IPageChangeEvent;
  eventResponsive: IPageChangeEvent;
  pageSize: number = 100;
  pageSizeResponsive: number = 100;
  firstLast: boolean = true;

  constructor(private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {}

  change(event: IPageChangeEvent): void {
    this.event = event;
  }

  changePageSize(event: IPageChangeEvent): void {
    this.eventPageSize = event;
  }

  changeLinks(event: IPageChangeEvent): void {
    this.eventLinks = event;
  }

  changeInput(event: IPageChangeEvent): void {
    this.eventInput = event;
  }

  changeResponsive(event: IPageChangeEvent): void {
    this.eventResponsive = event;
  }

  toggleFirstLast(): void {
    this.firstLast = !this.firstLast;
  }

}
