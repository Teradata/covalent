import { Component, ViewChild, TemplateRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { TemplatePortal } from '@angular/cdk/portal';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export enum LoadingType {
  Circular = <any>'circular',
  Linear = <any>'linear',
}

export enum LoadingMode {
  Determinate = <any>'determinate',
  Indeterminate = <any>'indeterminate',
}

export enum LoadingStrategy {
  Overlay = <any>'overlay',
  Replace = <any>'replace',
}

export enum LoadingStyle {
  FullScreen = <any>'fullscreen',
  Overlay = <any>'overlay',
  None = <any>'none',
}

import { TdFadeInOutAnimation } from '../common/common.module';

@Component({
  selector: 'td-loading',
  styleUrls: ['./loading.component.scss' ],
  templateUrl: './loading.component.html',
  animations: [
    TdFadeInOutAnimation(),
  ],
})
export class TdLoadingComponent {

  private _animationIn: Subject<any> = new Subject<any>();
  private _animationOut: Subject<any> = new Subject<any>();
  private _mode: LoadingMode = LoadingMode.Indeterminate;
  private _defaultMode: LoadingMode = LoadingMode.Indeterminate;
  private _value: number = 0;

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

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  getHeight(): string {
    // Ignore height if style is `overlay` or `fullscreen`.
    // Add height if child elements have a height and style is `none`, else return default height.
    if (this.isOverlay() || this.isFullScreen()) {
      return undefined;
    } else {
      return this.height ? `${this.height}px` : '150px';
    }
  }

  getCircleDiameter(): string {
    if (this.height) {
      let diameter: number = this.height * (2 / 3);
      if (diameter < 80) {
        return `${diameter}px`;
      }
    }
    return '80px';
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
}
