import { Component, ElementRef, Renderer2, HostBinding, Host, AfterViewInit } from '@angular/core';

@Component({
  selector: 'td-breadcrumb, a[td-breadcrumb]',
  styleUrls: ['./breadcrumb.component.scss'],
  templateUrl: './breadcrumb.component.html',
})
export class TdBreadcrumbComponent implements AfterViewInit {

  // Should show the right chevron or not before the label
  private _displayIcon: boolean = true;
  // Whether to display the crumb or not
  private _displayCrumb: boolean = true;
  // Width of the DOM element of the crumb
  private _width: number = 0;
  // Sets the icon url shown between breadcrumbs. Defaults to right chevron
  separatorIcon: string = 'navigate_next';

  get displayIcon(): boolean {
    return this._displayIcon;
  }

  set displayIcon(shouldDisplay: boolean) {
    this._displayIcon = shouldDisplay;
  }

  get displayCrumb(): boolean {
    return this._displayCrumb;
  }

  set displayCrumb(shouldDisplay: boolean) {
    this._displayCrumb = shouldDisplay;
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

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'mat-button');
  }

  ngAfterViewInit(): void {
    // set the width from the actual rendered DOM element
    this._width = (<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().width;
  }

}
