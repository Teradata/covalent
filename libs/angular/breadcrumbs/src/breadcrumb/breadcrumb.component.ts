import { isPlatformServer } from '@angular/common';
import {
  Component,
  ElementRef,
  HostBinding,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
  NgZone,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { EMPTY, fromEvent, Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'td-breadcrumb, a[td-breadcrumb]',
  styleUrls: ['./breadcrumb.component.scss'],
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdBreadcrumbComponent implements AfterViewInit, OnDestroy {
  private _displayCrumb = true;
  private _width = 0;
  private _displayIcon = true;
  private _separatorIcon = 'chevron_right';

  @HostBinding('class.mat-button') matButtonClass = true;
  @HostBinding('class.td-breadcrumb') tdBreadCrumbClass = true;

  @ViewChild('icon', { read: ElementRef })
  set icon(icon: ElementRef<HTMLElement> | undefined) {
    this._icon$.next(icon?.nativeElement);
  }

  // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
  public get separatorIcon(): string {
    return this._separatorIcon;
  }
  public set separatorIcon(separatorIcon: string) {
    this._separatorIcon = separatorIcon;
    setTimeout(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

  // Should show the right chevron or not before the label
  public get displayIcon(): boolean {
    return this._displayIcon;
  }
  public set displayIcon(displayIcon: boolean) {
    this._displayIcon = displayIcon;
    setTimeout(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

  get displayCrumb(): boolean {
    return this._displayCrumb;
  }

  /**
   * Whether to display the crumb or not
   */
  set displayCrumb(shouldDisplay: boolean) {
    this._displayCrumb = shouldDisplay;
    setTimeout(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

  /**
   * Width of the DOM element of the crumb
   */
  get width(): number {
    return this._width;
  }

  /**
   * Gets the display style of the crumb
   */
  @HostBinding('style.display')
  get displayBinding(): string | undefined {
    // Set the display to none on the component, just in case the end user is hiding
    // and showing them instead of the component doing itself for reasons like responsive
    return this._displayCrumb ? undefined : 'none';
  }

  /**
   * This is used to notify the subscriber that the `mat-icon` has been rendered
   * since it's wrapped with `ngIf` which means it's always rendered asynchronously.
   * It also might be toggled within the DOM (added and removed multiple times).
   */
  private _icon$ = new Subject<HTMLElement | undefined>();

  private _destroy$ = new Subject<void>();

  constructor(
    @Inject(PLATFORM_ID) private _platformId: string,
    private _ngZone: NgZone,
    private _elementRef: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef
  ) {
    this._setupIconListener();
  }

  ngAfterViewInit(): void {
    // set the width from the actual rendered DOM element
    setTimeout(() => {
      this._width = (<HTMLElement>(
        this._elementRef.nativeElement
      )).getBoundingClientRect().width;
      this._changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }

  private _setupIconListener(): void {
    // There's no reason to handle the event listener when this code is
    // running on the Node.js side.
    if (isPlatformServer(this._platformId)) {
      return;
    }

    this._icon$
      .pipe(
        switchMap((icon) =>
          icon
            ? // Note: this is required to subscribe within the root zone since `addEventListener`
              // remembers the `Zone.current` when being called. There's no sense to just call `fromEvent`
              // within the root zone since `addEventListener` is called only when the `fromEvent` is
              // subscribed.
              new Observable<Event>((subscriber) =>
                this._ngZone.runOutsideAngular(() =>
                  fromEvent(icon, 'click').subscribe(subscriber)
                )
              )
            : // If the `mat-icon` is removed from the DOM then remove existing
              // event listeners.
              EMPTY
        ),
        takeUntil(this._destroy$)
      )
      .subscribe((event) => {
        // Stop click propagation when clicking on icon
        event.stopPropagation();
        event.preventDefault();
      });
  }
}
