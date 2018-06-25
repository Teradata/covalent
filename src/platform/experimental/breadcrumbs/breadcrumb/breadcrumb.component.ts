import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'td-breadcrumb, a[td-breadcrumb]',
  styleUrls: ['./breadcrumb.component.scss'],
  templateUrl: './breadcrumb.component.html',
})
export class TdBreadcrumbComponent {

  // Should show the right chevron or not before the label
  private _displayIcon: boolean = true;

  get displayIcon(): boolean {
    return this._displayIcon;
  }

  set displayIcon(shouldDisplay: boolean) {
    this._displayIcon = shouldDisplay;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {
    this._renderer.addClass(this._elementRef.nativeElement, 'mat-button');
  }

}
