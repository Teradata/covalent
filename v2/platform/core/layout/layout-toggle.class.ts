import { Input, HostBinding, HostListener, Renderer2, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

import { MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';

import { ICanDisable, mixinDisabled } from '@covalent/core/common';

import { Subscription } from 'rxjs';

export interface ILayoutTogglable {
  opened: boolean;
  sidenav: MatSidenav;
  toggle(): Promise<MatDrawerToggleResult>;
  open(): Promise<MatDrawerToggleResult>;
  close(): Promise<MatDrawerToggleResult>;
}

export class LayoutToggleBase { }

/* tslint:disable-next-line */
export const _TdLayoutToggleMixinBase = mixinDisabled(LayoutToggleBase);

export abstract class LayoutToggle extends _TdLayoutToggleMixinBase implements AfterViewInit, OnDestroy, ICanDisable {

  private _toggleSubs: Subscription;

  private _initialized: boolean = false;
  private _hideWhenOpened: boolean = false;

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
    super();
    // if layout has not been provided
    // show warn message
    if (!this._layout) {
      this._noLayoutMessage();
    }
    this._renderer.addClass(this._elementRef.nativeElement, 'td-layout-menu-button');
  }

  ngAfterViewInit(): void {
    this._initialized = true;
    if (this._layout && this._layout.sidenav) {
      this._toggleSubs = this._layout.sidenav._animationStarted.subscribe(() => {
        this._toggleVisibility();
      });
    }
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
    if (!this.disabled) {
      // if layout has been provided, try triggering the click on it
      // else show warn message
      if (this._layout && this._layout.open) {
        this.onClick();
      } else {
        this._noLayoutMessage();
      }
    }
  }

  abstract onClick(): void;

  private _toggleVisibility(): void {
    if (this._layout) {
      if (this._layout.sidenav.opened && this._hideWhenOpened) {
        this._renderer.setStyle(this._elementRef.nativeElement, 'display', 'none');
      } else {
        this._renderer.setStyle(this._elementRef.nativeElement, 'display', '');
      }
    }
  }

  private _noLayoutMessage(): void {
    /* tslint:disable-next-line */
    console.warn('Covalent: Parent layout not found for layout toggle directive');
  }

}
