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
  AfterViewInit,
  ViewChild,
  inject,
} from '@angular/core';

import { fromEvent, Subject } from 'rxjs';
import { debounceTime, startWith, takeUntil } from 'rxjs/operators';
import { MatMenuTrigger, MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { TdBreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@Component({
  selector: 'td-breadcrumbs',
  styleUrls: ['./breadcrumbs.component.scss'],
  templateUrl: './breadcrumbs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule, MatIconModule],
})
export class TdBreadcrumbsComponent
  implements OnInit, AfterContentInit, AfterViewInit, OnDestroy
{
  private _elementRef = inject(ElementRef);
  private _changeDetectorRef = inject(ChangeDetectorRef);
  private _resizing = false;
  private _separatorIcon = 'chevron_right';
  private _destroy$ = new Subject<void>();

  @HostBinding('class.td-breadcrumbs') tdBreadCrumbsClass = true;

  // all the sub components, which are the individual breadcrumbs
  @ContentChildren(TdBreadcrumbComponent, { descendants: true })
  _breadcrumbs!: QueryList<TdBreadcrumbComponent>;
  // the list of hidden breadcrumbs not shown right now (responsive)
  hiddenBreadcrumbs: TdBreadcrumbComponent[] = [];
  overFlowMenuItems: TdBreadcrumbComponent[] = [];
  showOverflowButton = false;
  overflowButtonOrder = 50;

  @ViewChild(MatMenuTrigger) overflowMenuTrigger!: MatMenuTrigger;

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

  @Input() size?:
    | 'headline1'
    | 'headline2'
    | 'headline3'
    | 'headline4'
    | 'headline5'
    | 'headline6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline';

  @HostBinding('style.font-family')
  get fontFamily(): string | undefined {
    return this.size
      ? `var(--cv-typography-${this.size}-font-family)`
      : undefined;
  }

  @HostBinding('style.font-size')
  get fontSize(): string | undefined {
    return this.size
      ? `var(--cv-typography-${this.size}-font-size)`
      : undefined;
  }

  @HostBinding('style.font-weight')
  get fontWeight(): string | undefined {
    return this.size
      ? `var(--cv-typography-${this.size}-font-weight)`
      : undefined;
  }

  @HostBinding('style.line-height')
  get lineHeight(): string | undefined {
    return this.size
      ? `var(--cv-typography-${this.size}-line-height)`
      : undefined;
  }
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

  ngAfterViewInit(): void {
    this._waitToCalculateVisibility();
  }

  ngAfterContentInit(): void {
    this._breadcrumbs.changes
      .pipe(startWith(this._breadcrumbs), takeUntil(this._destroy$))
      .subscribe(() => {
        this._waitToCalculateVisibility();
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

  handleOverflowItemClick(item: TdBreadcrumbComponent): void {
    const nativeElement = item.elementRef?.nativeElement;
    if (nativeElement) {
      nativeElement.click();
    }
  }

  getItemText(item: TdBreadcrumbComponent): string {
    return item.fullText || '';
  }

  /**
   * Set the crumb icon separators
   */
  private setCrumbIcons(): void {
    if (this._breadcrumbs) {
      const breadcrumbArray: TdBreadcrumbComponent[] =
        this._breadcrumbs.toArray();
      breadcrumbArray.forEach((breadcrumb: TdBreadcrumbComponent) => {
        breadcrumb.separatorIcon = this.separatorIcon;
        breadcrumb.displayIcon = true;
      });
    }
  }

  private _calculateVisibility(): void {
    const crumbsArray: TdBreadcrumbComponent[] = this._breadcrumbs.toArray();
    const totalBreadcrumbs = crumbsArray.length;

    // Reset all orders when there are 2 or fewer breadcrumbs
    if (totalBreadcrumbs <= 2) {
      crumbsArray.forEach((breadcrumb: TdBreadcrumbComponent) => {
        breadcrumb.displayCrumb = true;
        breadcrumb.shouldTruncate = false;
        breadcrumb.flexOrder = 0; // Default order
      });
      this.showOverflowButton = false;
      this.overFlowMenuItems = [];
      this.hiddenBreadcrumbs = [];
      this._changeDetectorRef.markForCheck();
      return;
    }

    const firstCrumb = crumbsArray[0];
    const lastCrumb = crumbsArray[totalBreadcrumbs - 1];
    const overflowButtonWidth = 48;
    const availableWidth = this.nativeElementWidth - overflowButtonWidth;
    let requiredWidth = firstCrumb.width + lastCrumb.width;
    const visibleMiddleCrumbs: number[] = [];

    // Try to fit breadcrumbs from right to left (favoring more recent items)
    for (let i = totalBreadcrumbs - 2; i >= 1; i--) {
      const breadcrumb = crumbsArray[i];
      if (requiredWidth + breadcrumb.width <= availableWidth) {
        requiredWidth += breadcrumb.width;
        visibleMiddleCrumbs.unshift(i);
      }
    }

    // Apply visibility and flexbox orders
    const hiddenBreadcrumbs: TdBreadcrumbComponent[] = [];
    let currentOrder = 10; // Start orders at 10 for middle breadcrumbs

    crumbsArray.forEach((breadcrumb: TdBreadcrumbComponent, index: number) => {
      if (index === 0) {
        // First breadcrumb - always visible, always first
        breadcrumb.displayCrumb = true;
        breadcrumb.shouldTruncate = false;
        breadcrumb.flexOrder = 0;
      } else if (index === totalBreadcrumbs - 1) {
        // Last breadcrumb - always visible, always last
        breadcrumb.displayCrumb = true;
        breadcrumb.shouldTruncate = false;
        breadcrumb.flexOrder = 1000;
      } else if (visibleMiddleCrumbs.includes(index)) {
        // Visible middle breadcrumbs - assign incremental orders
        breadcrumb.displayCrumb = true;
        breadcrumb.shouldTruncate = false;
        breadcrumb.flexOrder = currentOrder;
        currentOrder += 10;
      } else {
        // Hidden breadcrumbs
        breadcrumb.displayCrumb = false;
        breadcrumb.shouldTruncate = false;
        breadcrumb.flexOrder = 0; // Doesn't matter, it's hidden
        hiddenBreadcrumbs.push(breadcrumb);
      }
    });

    // Overflow button order comes after visible middle breadcrumbs
    this.overflowButtonOrder = currentOrder;

    // Truncate last breadcrumb if too long
    const lastBreadcrumbMaxWidth = availableWidth * 0.35;
    if (lastCrumb.width > lastBreadcrumbMaxWidth) {
      lastCrumb.shouldTruncate = true;
      lastCrumb.maxWidth = lastBreadcrumbMaxWidth;
    }

    this.showOverflowButton = hiddenBreadcrumbs.length > 0;
    this.overFlowMenuItems = hiddenBreadcrumbs;
    this.hiddenBreadcrumbs = hiddenBreadcrumbs;
    this._changeDetectorRef.markForCheck();
  }

  private _waitToCalculateVisibility(): void {
    setTimeout(() => {
      this._calculateVisibility();
    });
  }
}
