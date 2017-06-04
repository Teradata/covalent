import { Input, HostBinding, HostListener, Renderer2, ElementRef } from '@angular/core';

import { MdSidenavToggleResult } from '@angular/material';

export interface ILayoutTogglable {
  opened: boolean;
  toggle(): Promise<MdSidenavToggleResult>;
}

export abstract class LayoutToggle {

  /**
   * hideWhenOpened?: boolean
   * When this is set to false, the host will not be hidden when
   * the layout is set to [opened]="true".
   */
  @Input('hideWhenOpened') hideWhenOpened: boolean = true;

  /**
   * Hides element if layout is opened and [hideWhenOpened] is set to true
   */
  @HostBinding('style.display')
  get hiddenBinding(): string {
    return this._layout.opened && this.hideWhenOpened ? 'none' : undefined;
  }

  constructor(private _layout: ILayoutTogglable,
              private _renderer: Renderer2,
              private _elementRef: ElementRef) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-menu-button');
  }

  /**
   * Listens to host click event to trigger the layout toggle
   */
  @HostListener('click', ['$event'])
  clickListener(event: Event): void {
    event.preventDefault();
    this._layout.toggle();
  }

}
