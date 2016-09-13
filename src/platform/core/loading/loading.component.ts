import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export enum LoadingType {
  Circular = <any>'circular',
  Linear = <any>'linear'
}

@Component({
  selector: 'td-loading',
  styleUrls: [ 'platform/core/loading/loading.component.scss' ],
  templateUrl: 'platform/core/loading/loading.component.html',
})
export class TdLoadingComponent {

  private _animationIn: Subject<any> = new Subject<any>();
  private _animationOut: Subject<any> = new Subject<any>();
  private _overlay: boolean = false;

  /**
   * Flag for animation
   */
  animation: boolean = false;

  /**
   * Flag for mode
   */
  mode: string = 'indeterminate';

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
    this._animationOut.next(undefined);
  }

  /**
   * Starts in animation and returns an observable for completition event.
   */
  startInAnimation(): Observable<any> {
    this.animation = false;
    this.mode = 'indeterminate';
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
    this.mode = 'determinate';
    return this._animationOut.asObservable();
  }
}
