import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export enum LoadingType {
  Circular = <any>'circular',
  Linear = <any>'linear'
}

export enum LoadingMode {
  Determinate = <any>'determinate',
  Indeterminate = <any>'indeterminate'
}

@Component({
  selector: 'td-loading',
  styleUrls: [ 'loading.component.scss' ],
  templateUrl: 'loading.component.html',
})
export class TdLoadingComponent {

  private _animationIn: Subject<any> = new Subject<any>();
  private _animationOut: Subject<any> = new Subject<any>();
  private _mode: LoadingMode = LoadingMode.Indeterminate;
  private _defaultMode: LoadingMode = LoadingMode.Indeterminate;
  private _reset: boolean = true;

  // Flag to reset the loader value and animation before removing it from DOM
  get reset(): boolean {
    return this._reset;
  }

  /**
   * Flag for animation
   */
  animation: boolean = false;

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
  value: number = 0;

  /**
   * overlay: boolean
   * Sets if [TdLoadingComponent] is fullscreen or not.
   */
  overlay: boolean = false;

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

  getHeight(): string {
    if (this.height) {
      return `${this.height}px`;
    }
    return '150px';
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

  inAnimationCompleted(): void {
    this._animationIn.next(undefined);
  }

  outAnimationCompleted(): void {
    /* little hack to reset the loader value and animation before removing it from DOM
    * else, the loader will appear with prev value when its registered again
    * and will do an animation going prev value to 0.
    */
    this._reset = false;
    this.value = 0;
    setTimeout(() => {
      this._reset = true;
      this._animationOut.next(undefined);
    });
  }

  /**
   * Starts in animation and returns an observable for completition event.
   */
  startInAnimation(): Observable<any> {
    this.animation = false;
    /* need to switch back to the selected mode, so we have saved it in another variable
    *  and then recover it. (issue with protractor)
    */
    this._mode = this._defaultMode;
    return this._animationIn.asObservable();
  }

  /**
   * Starts out animation and returns an observable for completition event.
   */
  startOutAnimation(): Observable<any> {
    this.animation = true;
    /* need to switch back and forth from determinate/indeterminate so the setInterval()
    * inside md-progress-circle stops and protractor doesnt timeout waiting to sync.
    */
    this._mode = LoadingMode.Determinate;
    return this._animationOut.asObservable();
  }
}
