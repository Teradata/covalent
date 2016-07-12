import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { MD_PROGRESS_BAR_DIRECTIVES } from '@angular2-material/progress-bar';
import { MD_PROGRESS_CIRCLE_DIRECTIVES } from '@angular2-material/progress-circle';

import { TdFadeDirective } from '../directives/fade/fade.directive';

export enum LoadingType {
  Circular = <any>'circular',
  Linear = <any>'linear'
}

@Component({
  directives: [
    MD_PROGRESS_BAR_DIRECTIVES,
    MD_PROGRESS_CIRCLE_DIRECTIVES,
    TdFadeDirective,
  ],
  moduleId: module.id,
  selector: 'td-loading',
  styleUrls: [ 'loading.component.css' ],
  templateUrl: 'loading.component.html',
})
export class TdLoadingComponent {

  private _animationIn: Subject<any> = new Subject<any>();
  private _animationOut: Subject<any> = new Subject<any>();
  private _animation: boolean = true;
  private _overlay: boolean = false;

  /**
   * Flag for animation
   */
  set animation(animation: boolean) {
    this._animation = animation;
  }
  get animation(): boolean {
    return this._animation;
  }

  /**
   * overlay: boolean
   * Sets if [TdLoadingComponent] is fullscreen or not.
   */
  @Input('overlay')
  set overlay(overlay: boolean) {
    this._overlay = overlay;
  }
  get overlay(): boolean {
    return this._overlay;
  }

  /**
   * height: number
   * Sets height of [TdLoadingComponent].
   */
  @Input() height: number;

  /**
   * type: LoadingType
   * Sets type of [TdLoadingComponent] rendered.
   */
  @Input() type: LoadingType = LoadingType.Circular;

  getHeight(): string {
    if (this.height) {
      return `${this.height}px`;
    }
    return 'auto';
  }

  getCircleDiameter(): string {
    if (this.height) {
      return `${this.height / 2}px`;
    }
    return 'auto';
  }

  isCircular(): boolean {
    return this.type === LoadingType.Circular;
  }

  isLinear(): boolean {
    return this.type === LoadingType.Linear;
  }

  inAnimationCompleted(): void {
    this._animationIn.next(undefined);
  }

  outAnimationCompleted(): void {
    this._animationOut.next(undefined);
  }

  /**
   * Starts in animation and returns an observable for completition event.
   */
  startInAnimation(): Observable<any> {
    this._animation = false;
    return this._animationIn.asObservable();
  }

  /**
   * Starts out animation and returns an observable for completition event.
   */
  startOutAnimation(): Observable<any> {
    this._animation = true;
    return this._animationOut.asObservable();
  }
}
