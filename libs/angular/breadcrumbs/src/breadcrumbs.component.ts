import {
  Component,
  ContentChildren,
  QueryList,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  AfterContentInit,
  ChangeDetectorRef,
  ElementRef,
  Input,
  HostBinding,
} from '@angular/core';

import { fromEvent, Subject } from 'rxjs';
import { debounceTime, startWith, takeUntil } from 'rxjs/operators';

import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@Component({
  selector: 'td-breadcrumbs',
  styleUrls: ['./breadcrumbs.component.scss'],
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdBreadcrumbsComponent
  implements OnInit, AfterContentInit, OnDestroy
{
  private _resizing = false;
  private _separatorIcon = 'chevron_right';
  private _destroy$ = new Subject<void>();

  @HostBinding('class.td-breadcrumbs') tdBreadCrumbsClass = true;

  // all the sub components, which are the individual breadcrumbs
  @ContentChildren(TdBreadcrumbComponent, { descendants: true })
  _breadcrumbs!: QueryList<TdBreadcrumbComponent>;
  // the list of hidden breadcrumbs not shown right now (responsive)
  hiddenBreadcrumbs: TdBreadcrumbComponent[] = [];

  /**
   * Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'.
   */
  @Input() public set separatorIcon(separatorIcon: string) {
    this._separatorIcon = separatorIcon;
    this.setCrumbIcons();
  }
  public get separatorIcon(): string {
    return this._separatorIcon;
  }

  constructor(
    private _elementRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    fromEvent(window, 'resize')
      .pipe(debounceTime(10), takeUntil(this._destroy$))
      .subscribe(() => {
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

  ngAfterContentInit(): void {
    // Note: doesn't need to unsubscribe since `QueryList.changes`
    // gets completed by Angular when the view is destroyed.
    this._breadcrumbs.changes
      .pipe(startWith(this._breadcrumbs))
      .subscribe(() => {
        this.setCrumbIcons();
        this._changeDetectorRef.markForCheck();
      });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  /*
   * Current width of the element container
   */
  get nativeElementWidth(): number {
    const element: HTMLElement = <HTMLElement>this._elementRef.nativeElement;
    // Need to take into account border, margin and padding that might be around all the crumbs
    const style: CSSStyleDeclaration = window.getComputedStyle(element);
    const borderLeft: number = parseInt(style.borderLeft, 10);
    const borderRight: number = parseInt(style.borderRight, 10);
    const marginLeft: number = parseInt(style.marginLeft, 10);
    const marginRight: number = parseInt(style.marginRight, 10);
    const paddingLeft: number = parseInt(style.paddingLeft, 10);
    const paddingRight: number = parseInt(style.paddingRight, 10);

    return (
      element.getBoundingClientRect().width -
      borderLeft -
      borderRight -
      marginLeft -
      marginRight -
      paddingLeft -
      paddingRight
    );
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
    if (this._breadcrumbs) {
      const breadcrumbArray: TdBreadcrumbComponent[] =
        this._breadcrumbs.toArray();
      breadcrumbArray.forEach(
        (breadcrumb: TdBreadcrumbComponent, index: number) => {
          breadcrumb.separatorIcon = this.separatorIcon;
          // don't show the icon on the last breadcrumb
          breadcrumb.displayIcon = index < breadcrumbArray.length - 1;
        }
      );
    }
  }

  private _calculateVisibility(): void {
    const crumbsArray: TdBreadcrumbComponent[] = this._breadcrumbs.toArray();
    let crumbWidthSum = 0;
    const hiddenCrumbs: TdBreadcrumbComponent[] = [];
    // loop through crumbs in reverse order to calculate which ones should be removed
    for (let i: number = crumbsArray.length - 1; i >= 0; i--) {
      const breadcrumb: TdBreadcrumbComponent = crumbsArray[i];

      // if crumb exceeds width, then we skip it from the sum and add it into the hiddencrumbs array
      // and hide it
      if (crumbWidthSum + breadcrumb.width > this.nativeElementWidth) {
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
