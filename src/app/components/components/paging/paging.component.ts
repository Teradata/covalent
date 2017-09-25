import { Component, HostBinding, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { TdMediaService } from '../../../../platform/core';

import { slideInDownAnimation } from '../../../app.animations';

import { IPageChangeEvent } from '../../../../platform/core';

@Component({
  selector: 'paging-demo',
  styleUrls: ['./paging.component.scss'],
  templateUrl: './paging.component.html',
  animations: [slideInDownAnimation],
})
export class PagingDemoComponent implements AfterViewInit {

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

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    setTimeout(() => { // workaround since MdSidenav has issues redrawing at the beggining
      this.media.broadcast();
      this._changeDetectorRef.detectChanges();
    });
  }

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
