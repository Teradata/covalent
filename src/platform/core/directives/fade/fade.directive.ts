import { Directive, ElementRef, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { Renderer, AnimationPlayer } from '@angular/core';
import { AnimationStyles } from '@angular/core/src/animation/animation_styles';
import { AnimationKeyframe } from '@angular/core/src/animation/animation_keyframe';
import { TimerWrapper } from '@angular/common/src/facade/async';

@Directive({
  selector: '[tdFade]',
})
export class TdFadeDirective {

  private _state: boolean;
  private _hiddenState: boolean;
  private _defaultOpacity: string;
  private _defaultDisplay: string;
  private _timeoutNumber: number;

  /**
   * duration?: number
   * Sets duration of fade animation in miliseconds.
   * Defaults to 500 ms.
   */
  @Input() duration: number = 500;

  /**
   * tdFade: boolean
   * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
   */
  @Input('tdFade')
  set state(state: boolean) {
    this._state = state;
    TimerWrapper.clearTimeout(this._timeoutNumber);
    if (state) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * fadeIn?: function
   * Method to be executed when fadeIn animation ends.
   */
  @Output('fadeIn') fadeIn: EventEmitter<void> = new EventEmitter<void>();

  /**
   * fadeOut?: function
   * Method to be executed when fadeOut animation ends.
   */
  @Output('fadeOut') fadeOut: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Binds native 'aria-expanded' attribute.
   */
  @HostBinding('attr.aria-expanded')
  get ariaExpandedBinding(): boolean {
    return !this._state;
  }

  /**
   * Binds native 'aria-hidden' attribute.
   */
  @HostBinding('attr.aria-hidden')
  get ariaHiddenBinding(): boolean {
    return this._state;
  }

  /**
   * Binds 'hidden' attribute.
   */
  @HostBinding('hidden')
  get hiddenBinding(): boolean {
    return this._hiddenState ? true : undefined;
  }

  constructor(private _renderer: Renderer, private _element: ElementRef) {
    this._defaultDisplay = this._element.nativeElement.style.display;
    this._defaultOpacity = !this._element.nativeElement.style.opacity ? 1 : this._element.nativeElement.style.opacity;
  }

  /**
   * Hides element: sets "display:[default]" so animation is shown,
   * starts animation and adds "display:'none'" style at the end.
   */
  hide(): void {
    let keyFrames: AnimationKeyframe[] = [
      new AnimationKeyframe(0, new AnimationStyles([{
        opacity: 1,
      }])),
      new AnimationKeyframe(1, new AnimationStyles([{
        opacity: 0,
      }])),
    ];

    this._renderer.setElementStyle(this._element.nativeElement, 'display', this._defaultDisplay);
    let animation: AnimationPlayer = this._renderer
      .animate(this._element.nativeElement, undefined, keyFrames, this.duration, 0, 'ease-in');
    animation.play();

    /**
     * Using timeout instead of onComplete since there is a bug if you start another animation
     * before the previous one ends. The onComplete event is not executed.
     * e.g.hide event started before show event is completed.
     */
    this._timeoutNumber = TimerWrapper.setTimeout(
      () => {
        TimerWrapper.setTimeout(
          () => { this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none'); }, 0);
        this._hiddenState = this._state;
        this.fadeOut.emit(undefined);
      },
      this.duration
    );
  }

  /**
   * Shows element: sets "display:[default]" so animation is shown,
   * starts animation and adds "display:[default]" style again at the end.
   */
  show(): void {
    this._hiddenState = this._state;
    let keyFrames: AnimationKeyframe[] = [
      new AnimationKeyframe(0, new AnimationStyles([{
        opacity: 0,
      }])),
      new AnimationKeyframe(1, new AnimationStyles([{
        opacity: 1,
      }])),
    ];

    this._renderer.setElementStyle(this._element.nativeElement, 'display', this._defaultDisplay);
    let animation: AnimationPlayer = this._renderer
      .animate(this._element.nativeElement, undefined, keyFrames, this.duration, 0, 'ease-in');
    animation.play();

    /**
     * Using timeout instead of onComplete since there is a bug if you start another animation
     * before the previous one ends. The onComplete event is not executed.
     * e.g. hide event started before show event is completed.
     */
    this._timeoutNumber = TimerWrapper.setTimeout(
      () => {
        this._renderer.setElementStyle(this._element.nativeElement, 'display', this._defaultDisplay);
        this.fadeIn.emit(undefined);
      },
      this.duration
    );
  }
}
