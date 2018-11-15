import {
  Component,
  ElementRef,
  HostBinding,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'td-breadcrumb, a[td-breadcrumb]',
  styleUrls: ['./breadcrumb.component.scss'],
  templateUrl: './breadcrumb.component.html',
  /* tslint:disable-next-line */
  host: {
    class: 'mat-button td-breadcrumb',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdBreadcrumbComponent implements AfterViewInit {

  private _displayCrumb: boolean = true;
  private _width: number = 0;
  // Sets the icon url shown between breadcrumbs. Defaults to 'chevron_right'
  separatorIcon: string = 'chevron_right';
  // Should show the right chevron or not before the label
  _displayIcon: boolean = true;

  get displayCrumb(): boolean {
    return this._displayCrumb;
  }

  /**
   * Whether to display the crumb or not
   */
  set displayCrumb(shouldDisplay: boolean) {
    this._displayCrumb = shouldDisplay;
    this._changeDetectorRef.markForCheck();
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
  get displayBinding(): string {
    // Set the display to none on the component, just in case the end user is hiding
    // and showing them instead of the component doing itself for reasons like responsive
    return this._displayCrumb ? undefined : 'none';
  }

  constructor(private _elementRef: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    // set the width from the actual rendered DOM element
    setTimeout(() => {
      this._width = (<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().width;
      this._changeDetectorRef.markForCheck();
    });
  }

  /**
   * Stop click propagation when clicking on icon
   */
  _handleIconClick(event: Event): void {
    event.stopPropagation();
    event.preventDefault();
  }

}
