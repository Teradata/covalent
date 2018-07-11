import { Component, ElementRef, Renderer2, HostBinding, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'td-breadcrumb, a[td-breadcrumb]',
  styleUrls: ['./breadcrumb.component.scss'],
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdBreadcrumbComponent implements AfterViewInit {

  // Whether to display the crumb or not
  private _displayCrumb: boolean = true;
  // Width of the DOM element of the crumb
  private _width: number = 0;
  // Sets the icon url shown between breadcrumbs. Defaults to right chevron
  separatorIcon: string = 'navigate_next';
  // Should show the right chevron or not before the label
  _displayIcon: boolean = true;

  get displayCrumb(): boolean {
    return this._displayCrumb;
  }

  set displayCrumb(shouldDisplay: boolean) {
    this._displayCrumb = shouldDisplay;
    this._changeDetectorRef.markForCheck();
  }

  get width(): number {
    return this._width;
  }

  // Set the display to none on the component, just in case the end user is hiding
  // and showing them instead of the component doing itself for reasons like responsive
  @HostBinding('style.display')
  private get displayBinding(): string {
    return this._displayCrumb ? undefined : 'none';
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2, private _changeDetectorRef: ChangeDetectorRef) {
    this._renderer.addClass(this._elementRef.nativeElement, 'mat-button');
  }

  ngAfterViewInit(): void {
    // set the width from the actual rendered DOM element
    this._width = (<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().width;
    this._changeDetectorRef.markForCheck();
  }

}
