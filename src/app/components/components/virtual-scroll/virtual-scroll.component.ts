import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { finalize } from 'rxjs/operators';

import { InfiniteService } from './infinite.service';
import { tdCollapseAnimation } from '@covalent/core/common';
import { TdLoadingService } from '@covalent/core/loading';
import { slideInDownAnimation } from '../../../app.animations';

@Component({
  selector: 'virtual-scroll-demo',
  styleUrls: ['./virtual-scroll.component.scss'],
  templateUrl: './virtual-scroll.component.html',
  animations: [
    slideInDownAnimation,
    tdCollapseAnimation,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  preserveWhitespaces: true,
  providers: [InfiniteService],
})
export class VirtualScrollDemoComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;
  @HostBinding('class.td-route-animation') classAnimation: boolean = true;

  toggleDemoCode: boolean = false;
  data: any[] = [];

  infiniteData: any[] = [];
  page: number = 0;
  perPage: number = 10;

  constructor(
    private _infiniteService: InfiniteService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _loadingService: TdLoadingService,
  ) {}

  ngOnInit(): void {
    for (let index: number = 1; index <= 1200; index++) {
      this.data.push({index: index, name: 'element-' + index});
    }

    this.fetch();
  }

  fetchMore(): void {
    this.page++;
    this.fetch();
  }

  private fetch(): void {
    this._loadingService.register('loading');
    this._infiniteService.get({ page: this.page, perPage: this.perPage })
      .pipe(
        finalize(() => this._loadingService.resolve('loading')),
      )
      .subscribe((results: any[]) => {
        this.infiniteData = this.infiniteData.concat(results);
        this._changeDetectorRef.detectChanges();
      });
  }
}
