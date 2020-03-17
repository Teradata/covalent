import { Component, ViewChild, TemplateRef, ChangeDetectorRef, ChangeDetectionStrategy, ElementRef, DoCheck } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { TemplatePortal } from '@angular/cdk/portal';
import { Observable, Subject } from 'rxjs';

export enum LoadingType {
  Circular = 'circular',
  Linear = 'linear',
}

export enum LoadingMode {
  Determinate = 'determinate',
  Indeterminate = 'indeterminate',
}

export enum LoadingStrategy {
  Overlay = 'overlay',
  Replace = 'replace',
}

export enum LoadingStyle {
  FullScreen = 'fullscreen',
  Overlay = 'overlay',
  None = 'none',
}

import { tdFadeInOutAnimation } from '@covalent/core/common';

export const TD_CIRCLE_DIAMETER: number = 100;

@Component({
  selector: 'td-loading',
  styleUrls: ['./loading.component.scss' ],
  templateUrl: './loading.component.html',
  animations: [
    tdFadeInOutAnimation,
  ],
})
export class TdLoadingComponent implements DoCheck {

  private _animationIn: Subject<any> = new Subject<any>();
  private _animationOut: Subject<any> = new Subject<any>();
  private _mode: LoadingMode = LoadingMode.Indeterminate;
  private _defaultMode: LoadingMode = LoadingMode.Indeterminate;
  private _value: number = 0;
  private _circleDiameter: number = TD_CIRCLE_DIAMETER;

  /**
   * Flag for animation
   */
  animation: boolean = false;

  /**
   * Content injected into loading component.
   */
  content: TemplatePortal<any>;

  /**
   * Sets mode of [TdLoadingComponent] to LoadingMode.Determinate or LoadingMode.Indeterminate
   */
  set mode(mode: LoadingMode) {
    this._defaultMode = mode;
  }
  get mode(): LoadingMode {
    return this._mode;
  }

  /**
   * Sets value of [TdLoadingComponent] if mode is 'LoadingMode.Determinate'
   */
  set value(value: number) {
    this._value = value;
    // Check for changes for `OnPush` change detection
    this._changeDetectorRef.markForCheck();
  }
  get value(): number {
    return this._value;
  }

  style: LoadingStyle = LoadingStyle.None;

  /**
   * height: number
   * Sets height of [TdLoadingComponent].
   */
  height: number;

  /**
   * type: LoadingType
   * Sets type of [TdLoadingComponent] rendered.
   */
  type: LoadingType = LoadingType.Circular;

  /**
   * color: primary' | 'accent' | 'warn'
   * Sets theme color of [TdLoadingComponent] rendered.
   */
  color: 'primary' | 'accent' | 'warn' = 'primary';

  constructor(private _elementRef: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef) {}

  ngDoCheck(): void {
    // When overlay is used and the host width has a value greater than 1px
    // set the circle diameter when possible incase the loading component was rendered in a hidden state
    if (this.isOverlay() && this._hostHeight() > 1) {
      if (this.animation) {
        this._setCircleDiameter();
        this._changeDetectorRef.markForCheck();
      }
    }
  }

  getHeight(): string {
    // Ignore height if style is `overlay` or `fullscreen`.
    // Add height if child elements have a height and style is `none`, else return default height.
    if (this.isOverlay() || this.isFullScreen()) {
      return undefined;
    } else {
      return this.height ? `${this.height}px` : '150px';
    }
  }

  getCircleDiameter(): number {
    return this._circleDiameter;
  }

  getCircleStrokeWidth(): number {
    // we calculate the stroke width by setting it as 10% of its diameter
    let strokeWidth: number = this.getCircleDiameter() / 10;
    return Math.abs(strokeWidth);
  }

  isCircular(): boolean {
    return this.type === LoadingType.Circular;
  }

  isLinear(): boolean {
    return this.type === LoadingType.Linear;
  }

  isFullScreen(): boolean {
    return this.style === LoadingStyle.FullScreen;
  }

  isOverlay(): boolean {
    return this.style === LoadingStyle.Overlay;
  }

  animationComplete(event: AnimationEvent): void {
    // Check to see if its "in" or "out" animation to execute the proper callback
    if (!event.fromState) {
      this.inAnimationCompleted();
    } else {
      this.outAnimationCompleted();
    }
  }

  inAnimationCompleted(): void {
    this._animationIn.next(undefined);
  }

  outAnimationCompleted(): void {
   /* little hack to reset the loader value and animation before removing it from DOM
    * else, the loader will appear with prev value when its registered again
    * and will do an animation going prev value to 0.
    */
    this.value = 0;
    // Check for changes for `OnPush` change detection
    this._changeDetectorRef.markForCheck();
    this._animationOut.next(undefined);
  }

  /**
   * Starts in animation and returns an observable for completition event.
   */
  startInAnimation(): Observable<any> {
    /* need to switch back to the selected mode, so we have saved it in another variable
    *  and then recover it. (issue with protractor)
    */
    this._mode = this._defaultMode;
    // Set values before the animations starts
    this._setCircleDiameter();
    // Check for changes for `OnPush` change detection
    this.animation = true;
    this._changeDetectorRef.markForCheck();
    return this._animationIn.asObservable();
  }

  /**
   * Starts out animation and returns an observable for completition event.
   */
  startOutAnimation(): Observable<any> {
    this.animation = false;
    /* need to switch back and forth from determinate/indeterminate so the setInterval()
    * inside mat-progress-spinner stops and protractor doesnt timeout waiting to sync.
    */
    this._mode = LoadingMode.Determinate;
    // Check for changes for `OnPush` change detection
    this._changeDetectorRef.markForCheck();
    return this._animationOut.asObservable();
  }

  /**
   * Calculate the proper diameter for the circle and set it
   */
  private _setCircleDiameter(): void {
    // we set a default diameter of 100 since this is the default in material
    let diameter: number = TD_CIRCLE_DIAMETER;
    // if height is provided, then we take that as diameter
    if (this.height) {
      diameter = this.height;
      // else if its not provided, then we take the host height
    } else if (this.height === undefined) {
      diameter = this._hostHeight();
    }
    // if the diameter is over TD_CIRCLE_DIAMETER, we set TD_CIRCLE_DIAMETER
    if (!!diameter && diameter <= TD_CIRCLE_DIAMETER) {
      this._circleDiameter = Math.floor(diameter);
    } else {
      this._circleDiameter = TD_CIRCLE_DIAMETER;
    }
  }

  /**
   * Returns the host height of the loading component
   */
  private _hostHeight(): number {
    if (<HTMLElement>this._elementRef.nativeElement) {
      return (<HTMLElement>this._elementRef.nativeElement).getBoundingClientRect().height;
    }
    return 0;
  }
}
