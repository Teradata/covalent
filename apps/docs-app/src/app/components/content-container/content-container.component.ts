import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, map, takeUntil } from 'rxjs';

@Component({
  standalone: false,
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
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
