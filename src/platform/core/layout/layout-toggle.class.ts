import { Input, HostBinding, HostListener, Renderer2, ElementRef, AfterViewInit } from '@angular/core';

import { MdSidenavToggleResult, MdSidenav } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { merge } from 'rxjs/observable/merge';

export interface ILayoutTogglable {
  sidenav: MdSidenav;
  toggle(): Promise<MdSidenavToggleResult>;
  open(): Promise<MdSidenavToggleResult>;
  close(): Promise<MdSidenavToggleResult>;
}

export abstract class LayoutToggle implements AfterViewInit {

  private _initialized: boolean = false;
  private _disabled: boolean = false;
  private _hideWhenOpened: boolean = false;

  set disabled(disabled: boolean) {
    this._disabled = disabled;
  }

  /**
   * hideWhenOpened?: boolean
   * When this is set to true, the host will be hidden when
   * the sidenav is opened.
   */
  @Input('hideWhenOpened') 
  set hideWhenOpened(hideWhenOpened: boolean) {
    this._hideWhenOpened = hideWhenOpened;
    if (this._initialized) {
      this._toggleVisibility();
    }
  }

  constructor(protected _layout: ILayoutTogglable,
              private _renderer: Renderer2,
              private _elementRef: ElementRef) {
    this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-menu-button');
  }

  ngAfterViewInit(): void {
    this._initialized = true;
    merge(this._layout.sidenav.onOpenStart, this._layout.sidenav.onCloseStart).subscribe(() => {
      this._toggleVisibility();
    });
  }

  /**
   * Listens to host click event to trigger the layout toggle
   */
  @HostListener('click', ['$event'])
  clickListener(event: Event): void {
    event.preventDefault();
    if (!this._disabled) {
      this.onClick();
    }
  }

  abstract onClick(): void;

  private _toggleVisibility(): void {
    if (this._layout.sidenav._opened && this._hideWhenOpened) {
      this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
    } else {
      this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
    }
  }

}
