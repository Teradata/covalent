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
  /* tslint:disable-next-line */
  host: {
    class: 'td-breadcrumbs',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdBreadcrumbsComponent implements OnInit, DoCheck, AfterContentInit, OnDestroy {

  private _resizeSubscription: Subscription = Subscription.EMPTY;
  private _widthSubject: Subject<number> = new Subject<number>();
  private _resizing: boolean = false;

  // all the sub components, which are the individual breadcrumbs
  @ContentChildren(TdBreadcrumbComponent) _breadcrumbs: QueryList<TdBreadcrumbComponent>;
  // the list of hidden breadcrumbs not shown right now (responsive)
  hiddenBreadcrumbs: TdBreadcrumbComponent[] = [];

  /**
   * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
   */
  @Input('separatorIcon') separatorIcon: string = 'chevron_right';

  constructor(private _elementRef: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef) {
  }

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
          this._calculateVisibility();
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

  private _calculateVisibility(): void {
    let crumbsArray: TdBreadcrumbComponent[] = this._breadcrumbs.toArray();
    let crumbWidthSum: number = 0;
    let hiddenCrumbs: TdBreadcrumbComponent[] = [];
    // loop through crumbs in reverse order to calculate which ones should be removed
    for (let i: number = crumbsArray.length - 1; i >= 0; i--) {
      let breadcrumb: TdBreadcrumbComponent = crumbsArray[i];
      // if crumb exceeds width, then we skip it from the sum and add it into the hiddencrumbs array
      // and hide it
      if ((crumbWidthSum + breadcrumb.width) > this.nativeElementWidth) {
        breadcrumb.displayCrumb = false;
        hiddenCrumbs.push(breadcrumb);
      } else {
        // else we show it
        breadcrumb.displayCrumb = true;
      }
      crumbWidthSum += breadcrumb.width;
    }
    this.hiddenBreadcrumbs = hiddenCrumbs;
    this._changeDetectorRef.markForCheck();
  }

}
