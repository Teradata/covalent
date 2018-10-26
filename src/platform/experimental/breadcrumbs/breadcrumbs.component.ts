import {
  Component,
  ContentChildren,
  QueryList,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  AfterContentInit,
  DoCheck,
  ChangeDetectorRef,
  ElementRef,
  Input,
} from '@angular/core';

import {
  Subscription,
  Subject,
  fromEvent,
  merge,
} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
} from 'rxjs/operators';

import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@Component({
  selector: 'td-breadcrumbs',
  styleUrls: ['./breadcrumbs.component.scss'],
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdBreadcrumbsComponent implements OnInit, DoCheck, AfterContentInit, OnDestroy {

  private _resizeSubscription: Subscription = Subscription.EMPTY;
  private _widthSubject: Subject<number> = new Subject<number>();
  private _resizing: boolean = false;

  // all the sub components, which are the individual breadcrumbs
  @ContentChildren(TdBreadcrumbComponent) _breadcrumbs: QueryList<TdBreadcrumbComponent>;
  // the list of hidden breadcrumbs not shown right now (responsive)
  hiddenBreadcrumbs: TdBreadcrumbComponent[] = new Array();

  /**
   * Sets the icon url shown between breadcrumbs. Defaults to right chevron.
   */
  @Input('separatorIcon') separatorIcon: string = 'navigate_next';

  constructor(private _elementRef: ElementRef, private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
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
      this._widthSubject.next(this.nativeElementWidth);
    }
  }

  ngAfterContentInit(): void {
    this.setCrumbIcons();
    this._changeDetectorRef.markForCheck();
  }

  ngOnDestroy(): void {
    this._resizeSubscription.unsubscribe();
  }

  /*
  * Current width of the element container
  */
  get nativeElementWidth(): number {
    let element: HTMLElement = (<HTMLElement>this._elementRef.nativeElement);
    // Need to take into account border, margin and padding that might be around all the crumbs
    let style: CSSStyleDeclaration = window.getComputedStyle(element);
    let borderLeft: number = parseInt(style.borderLeft, 10);
    let borderRight: number = parseInt(style.borderRight, 10);
    let marginLeft: number = parseInt(style.marginLeft, 10);
    let marginRight: number = parseInt(style.marginRight, 10);
    let paddingLeft: number = parseInt(style.paddingLeft, 10);
    let paddingRight: number = parseInt(style.paddingRight, 10);

    return element.getBoundingClientRect().width - borderLeft - borderRight - marginLeft - marginRight - paddingLeft - paddingRight;
  }

  /**
   * The total count of individual breadcrumbs
   */
  get count(): number {
    return this._breadcrumbs ? this._breadcrumbs.length : 0;
  }

  /**
   * Set the crumb icon separators
   */
  private setCrumbIcons(): void {
    let breadcrumbArray: TdBreadcrumbComponent[] = this._breadcrumbs.toArray();
    if (breadcrumbArray.length > 0) {
      // don't show the icon on the last breadcrumb
      breadcrumbArray[breadcrumbArray.length - 1]._displayIcon = false;
    }
    breadcrumbArray.forEach((breadcrumb: TdBreadcrumbComponent) => {
      breadcrumb.separatorIcon = this.separatorIcon;
    });
  }

  private displayWidthAvailableCrumbs(): void {
    let curTotCrumbWidth: number = 0;
    let crumbsArray: TdBreadcrumbComponent[] = this._breadcrumbs.toArray();
    // calculate the current width of the shown breadcrumbs
    for (let i: number = this.hiddenBreadcrumbs.length; i < crumbsArray.length; i++) {
      curTotCrumbWidth += crumbsArray[i].width;
    }
    // hide the first bread crumb if window size is smaller than all the crumb sizes
    if (this.nativeElementWidth < curTotCrumbWidth) {
      crumbsArray[this.hiddenBreadcrumbs.length].displayCrumb = false;
      this.hiddenBreadcrumbs.push(crumbsArray[this.hiddenBreadcrumbs.length]);
      this.displayWidthAvailableCrumbs();
    } else {
      // loop over all the hidden crumbs and see if adding them back in will
      // fit in the current window size
      let totalHidden: number = this.hiddenBreadcrumbs.length - 1;
      for (let i: number = totalHidden; i >= 0; i--) {
        let hiddenCrumbWidth: number = crumbsArray[i].width;
        if ((curTotCrumbWidth + hiddenCrumbWidth) < this.nativeElementWidth) {
          crumbsArray[i].displayCrumb = true;
          crumbsArray[i + 1]._displayIcon = true;
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
