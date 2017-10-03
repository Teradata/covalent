import { Input, HostBinding, HostListener, Renderer2, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

import { MatDrawerToggleResult, MatSidenav } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { merge } from 'rxjs/observable/merge';

export interface ILayoutTogglable {
  sidenav: MatSidenav;
  toggle(): Promise<MatDrawerToggleResult>;
  open(): Promise<MatDrawerToggleResult>;
  close(): Promise<MatDrawerToggleResult>;
}

export abstract class LayoutToggle implements AfterViewInit, OnDestroy {

  private _toggleSubs: Subscription;

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
    this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(() => {
      this._toggleVisibility();
    });
    // execute toggleVisibility since the onOpenStart and onCloseStart
    // methods might not be executed always when the element is rendered
    this._toggleVisibility();
  }

  ngOnDestroy(): void {
    if (this._toggleSubs) {
      this._toggleSubs.unsubscribe();
      this._toggleSubs = undefined;
    }
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
    if (this._layout.sidenav.opened && this._hideWhenOpened) {
      this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
    } else {
      this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
    }
  }

}
