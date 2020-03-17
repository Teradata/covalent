import { Component, Optional, ContentChildren, ViewChild, QueryList, OnDestroy, ChangeDetectionStrategy, 
         AfterContentInit, AfterContentChecked, ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';

import { Subject, merge, of } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

import { Direction, Directionality } from '@angular/cdk/bidi';
import { RIGHT_ARROW, LEFT_ARROW } from '@angular/cdk/keycodes';
import { ViewportRuler } from '@angular/cdk/scrolling';

import { TdNavStepLinkComponent } from '../nav-step-link/nav-step-link.component';

/**
 * The directions that scrolling can go in when the header's tabs exceed the header width. 'After'
 * will scroll the header towards the end of the tabs list and 'before' will scroll towards the
 * beginning of the list.
 */
export type ScrollDirection = 'after' | 'before';

@Component({
  selector: 'nav[td-steps][horizontal]',
  styleUrls: ['./nav-steps-horizontal.component.scss'],
  templateUrl: './nav-steps-horizontal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  /* tslint:disable-next-line */
  host: {
    class: 'td-steps td-steps-horizontal',
    '[class.td-step-header-pagination-controls-enabled]': '_showPaginationControls',
    '[class.td-step-header-rtl]': "_getLayoutDirection() == 'rtl'",
  },
})
export class TdNavStepsHorizontalComponent implements AfterContentChecked, AfterContentInit, OnDestroy {

  private _separators: HTMLElement[] = [];

  /** Emits when the component is destroyed. */
  private readonly _destroyed: Subject<void> = new Subject<void>();

  private _widthSubject: Subject<number> = new Subject<number>();

  private _scrollDistance: number = 0;
  private _scrollDistanceChanged: boolean = false;

  /** Whether the controls for pagination should be displayed */
  _showPaginationControls: boolean = false;

  /** Whether the step list can be scrolled more towards the end. */
  _disableScrollAfter: boolean = true;

  /** Whether the step list can be scrolled more towards the beginning. */
  _disableScrollBefore: boolean = true;

  // all the sub components, which are the individual steps
  @ContentChildren(TdNavStepLinkComponent) _steps: QueryList<TdNavStepLinkComponent>;

  @ViewChild('stepListContainer') _stepListContainer: ElementRef;
  @ViewChild('stepList') _stepList: ElementRef;

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

  constructor(private _elementRef: ElementRef,
              private _viewportRuler: ViewportRuler,
              @Optional() private _dir: Directionality,
              private _renderer: Renderer2,
              private _changeDetectorRef: ChangeDetectorRef) { }

  ngAfterContentInit(): void {
    merge(
      this._widthSubject.asObservable().pipe(
        distinctUntilChanged(),
      ),
      this._viewportRuler.change(150),
      this._dir ? this._dir.change : of(undefined),
      this._steps.changes,
    ).pipe(
      takeUntil(this._destroyed),
    ).subscribe(() => {
      this._configureSteps();
      this.updatePagination();
      this._changeDetectorRef.markForCheck();
    });
    this._configureSteps();
    this._changeDetectorRef.markForCheck();
  }

  ngAfterContentChecked(): void {
    if (this._elementRef && this._elementRef.nativeElement) {
      this._widthSubject.next(this.nativeElementWidth);
    }
    if (this._scrollDistanceChanged) {
      this._updateStepScrollPosition();
      this._scrollDistanceChanged = false;
      this._changeDetectorRef.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  /**
   * Listen to right and left key events to move the the viewport.
   */
  _handleKeydown(event: KeyboardEvent): void {
    switch (event.keyCode) {
      case LEFT_ARROW:
        this._scrollHeader('before');
        event.preventDefault();
        break;
      case RIGHT_ARROW:
        this._scrollHeader('after');
        event.preventDefault();
        break;
      default:
        // do something
    }
  }

  /**
   * Updates the view whether pagination should be enabled or not.
   */
  updatePagination(): void {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateStepScrollPosition();
  }

  /** The layout direction of the containing app. */
  _getLayoutDirection(): Direction {
    return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
  }

    /** Performs the CSS transformation on the step list that will cause the list to scroll. */
  _updateStepScrollPosition(): void {
    const translateX: number = this._getLayoutDirection() === 'ltr' ? -this.scrollDistance : this.scrollDistance;
    // Move step list the amount of pixels scrolled
    this._stepList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;

    // Setting the `transform` on IE will change the scroll offset of the parent, causing the
    // position to be thrown off in some cases. We have to reset it ourselves to ensure that
    // it doesn't get thrown off.
    if (this._getLayoutDirection() === 'ltr') {
      this._stepListContainer.nativeElement.scrollLeft = 0;
    } else {
      this._stepListContainer.nativeElement.scrollLeft = this._getMaxScrollDistance();
    }
  }

  /** Sets the distance in pixels that the step header should be transformed in the X-axis. */
  get scrollDistance(): number { return this._scrollDistance; }
  set scrollDistance(v: number) {
    this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), v));

    // Mark that the scroll distance has changed so that after the view is checked, the CSS
    // transformation can move the header.
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
  }

  /**
   * Moves the step list in the 'before' or 'after' direction (towards the beginning of the list or
   * the end of the list, respectively).
   */
  _scrollHeader(scrollDir: ScrollDirection): void {
    // Move the scroll distance one-half the length of the step list's viewport.
    this.scrollDistance += (scrollDir === 'before' ? -1 : 1) * this._stepListContainer.nativeElement.offsetWidth / 2;
  }

  /**
   * Evaluate whether the pagination controls should be displayed. If the scroll width of the
   * step list is wider than the size of the header container, then the pagination controls should
   * be shown.
   */
  _checkPaginationEnabled(): void {
    const isEnabled: boolean =
        this._stepList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

    if (!isEnabled) {
      this.scrollDistance = 0;
    }

    if (isEnabled !== this._showPaginationControls) {
      this._changeDetectorRef.markForCheck();
    }

    this._showPaginationControls = isEnabled;
  }

  /**
   * Evaluate whether the before and after controls should be enabled or disabled.
   * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
   * before button. If the header is at the end of the list (scroll distance is equal to the
   * maximum distance we can scroll), then disable the after button.
   */
  _checkScrollingControls(): void {
    // Check if the pagination arrows should be activated.
    this._disableScrollBefore = this.scrollDistance === 0;
    this._disableScrollAfter = this.scrollDistance === this._getMaxScrollDistance();
    this._changeDetectorRef.markForCheck();
  }

  /**
   * Determines what is the maximum length in pixels that can be set for the scroll distance. This
   * is equal to the difference in width between the step list container and step header container.
   */
  _getMaxScrollDistance(): number {
    return (this._stepList.nativeElement.scrollWidth - this._stepListContainer.nativeElement.offsetWidth) || 0;
  }

  /**
   * Set the step line separators and display numbers
   */
  private _configureSteps(): void {
    this._separators.forEach((separator: HTMLElement) => {
      this._renderer.removeChild(this._stepList.nativeElement, separator);
    });
    let stepsArray: TdNavStepLinkComponent[] = this._steps.toArray();
    // set the index number of the step so can display that number in circle
    stepsArray.forEach((step: TdNavStepLinkComponent, index: number) => {
      if (index > 0 && index < stepsArray.length) {
        let separator: any = this._renderer.createElement('div');
        this._renderer.addClass(separator, 'td-horizontal-line');
        this._separators.push(separator);
        this._renderer.insertBefore(this._stepList.nativeElement, separator, step.elementRef.nativeElement);
      }
      step.number = index + 1;
    });
    
  }

}
