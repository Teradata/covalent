import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { CovalentCommonModule } from '@covalent/core/common';
import { SidenavContentModule } from '../shared/sidenav-content/sidenav-content.module';

import { Observable, Subject, map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
  imports: [
    /** Angular Modules */
    CommonModule,
    RouterModule,
    /** Material Modules */
    MatSidenavModule,
    LayoutModule,
    /** Covalent Modules */
    CovalentCommonModule,
    SidenavContentModule,
  ]
})
export class ContentContainerComponent implements OnDestroy {
  isSmall!: Observable<boolean>;
  destroyed = new Subject<void>();

  constructor(breakpointObserver: BreakpointObserver) {
    this.isSmall = breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map((result) => result.matches),
        takeUntil(this.destroyed)
      );
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
