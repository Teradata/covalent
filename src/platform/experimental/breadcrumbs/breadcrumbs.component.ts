import { Component, ContentChildren, QueryList, AfterViewInit, DoCheck, ChangeDetectorRef, ElementRef } from '@angular/core';
import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Subscription, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';

@Component({
  selector: 'td-breadcrumbs',
  styleUrls: ['./breadcrumbs.component.scss'],
  templateUrl: './breadcrumbs.component.html',
})
export class TdBreadcrumbsComponent implements AfterViewInit, DoCheck {

  private _resizeSubscription: Subscription;
  private _widthSubject: Subject<number> = new Subject<number>();
  private _resizing: boolean = false;
  // Padding on the window when calculating the full size
  private _windowWidthPadding: number = 20;

  // all the sub components, which are the individual breadcrumbs
  @ContentChildren(TdBreadcrumbComponent) _breadcrumbs: QueryList<TdBreadcrumbComponent>;
  // the list of hidden breadcrumbs not shown right now (responsive)
  hiddenBreadcrumbs: TdBreadcrumbComponent[] = new Array();

  constructor(private _elementRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.setStyles();
    this.displayWidthAvailableCrumbs();
    this._resizeSubscription = merge(
      fromEvent(window, 'resize').pipe(
        debounceTime(10),
      ),
      this._widthSubject.asObservable().pipe(
        distinctUntilChanged(),
      ),
    ).subscribe(() => {
      if (!this._resizing) {
        this._resizing = true;
        setTimeout(() => {
          this.displayWidthAvailableCrumbs();
          this._resizing = false;
          this._changeDetectorRef.markForCheck();
        }, 100);
      }
    });
  }

  ngDoCheck(): void {
    if (this._elementRef && this._elementRef.nativeElement) {
      this._widthSubject.next((<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().width);
    }
  }

  /**
   * The total count of individual breadcrumbs
   */
  get count(): number {
    return this._breadcrumbs ? this._breadcrumbs.length : 0;
  }

  /**
   * Set prebaked styles on the crumbs depending on if 
   * they are the first or last crumb
   */
  setStyles(): void {
    let breadcrumbArray: TdBreadcrumbComponent[] = this._breadcrumbs.toArray();
    if (breadcrumbArray && breadcrumbArray.length > 0) {
      // don't show the right chevron on the first breadcrumb
      breadcrumbArray[0].displayIcon = false;
    }
  }

  private displayWidthAvailableCrumbs(): void {
    let curTotCrumbWidth: number = 0;
    let crumbsArray: TdBreadcrumbComponent[] = this._breadcrumbs.toArray();
    // calculate the current width of the shown breadcrumbs
    for (let i: number = this.hiddenBreadcrumbs.length; i < crumbsArray.length; i++) {
      curTotCrumbWidth += crumbsArray[i].width;
    }
    let winWidth: number = window.innerWidth - this._windowWidthPadding;
    // hide the first bread crumb if window size is smaller than all the crumb sizes
    if (winWidth < curTotCrumbWidth) {
      crumbsArray[this.hiddenBreadcrumbs.length].displayCrumb = false;
      crumbsArray[this.hiddenBreadcrumbs.length + 1].displayIcon = false;
      this.hiddenBreadcrumbs.push(crumbsArray[this.hiddenBreadcrumbs.length]);
    } else {
      // loop over all the hidden crumbs and see if adding them back in will 
      // fit in the current window size
      let totalHidden: number = this.hiddenBreadcrumbs.length - 1;
      for (let i: number = totalHidden; i >= 0; i--) {
        let hiddenCrumbWidth: number = crumbsArray[i].width;
        if ((curTotCrumbWidth + hiddenCrumbWidth) < winWidth) {
          crumbsArray[i].displayCrumb = true;
          crumbsArray[i + 1].displayIcon = true;
          this.hiddenBreadcrumbs.pop();
          // recalculate the total width based on adding back in a crumb
          let newTotCrumbWidth: number = 0;
          for (let j: number = this.hiddenBreadcrumbs.length; j < crumbsArray.length; j++) {
            newTotCrumbWidth += crumbsArray[j].width;
          }
          curTotCrumbWidth = newTotCrumbWidth;
        } else if (i === totalHidden) {
          // need to break out of loop here because the first in the hidden
          // list can't fit in current window size
          break;
        }
      }
    }
  }

}
