import {
  Directive, ElementRef, Input, Output, EventEmitter, HostBinding, Renderer2, OnInit, ChangeDetectorRef, AnimationPlayer,
} from '@angular/core';
import { ɵAnimation as Animation, AnimationDriver,
         ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵDomAnimationEngine as DomAnimationEngine } from '@angular/animations/browser';
import { animate } from '@angular/animations';

@Directive({
  selector: '[tdFade]',
})
export class TdFadeDirective {

  private _state: boolean;
  private _defaultOpacity: string;
  private _defaultDisplay: string;
  private _engine: DomAnimationEngine;
  private _animationPlayer: AnimationPlayer;

  /**
   * duration?: number
   * Sets duration of fade animation in miliseconds.
   * Defaults to 150 ms.
   */
  @Input() duration: number = 150;

  /**
   * tdFade: boolean
   * Fades element, FadesOut if its 'true', FadesIn if its 'false'.
   */
  @Input('tdFade')
  set state(state: boolean) {
    this._state = state;
    if (this._animationPlayer) {
      this._animationPlayer.destroy();
      this._animationPlayer = undefined;
    }
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

  constructor(private _renderer: Renderer2,
              private _element: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef,
              animationDriver: AnimationDriver,
              animationStyleNormalizer: AnimationStyleNormalizer) {
    this._engine = new DomAnimationEngine(animationDriver, animationStyleNormalizer);
  }

  /**
   * Hides element: starts animation and adds "display:'none'" style at the end.
   */
  hide(): void {
    this._defaultDisplay = this._element.nativeElement.style.display;
    this._defaultOpacity = !this._element.nativeElement.style.opacity ? 1 : this._element.nativeElement.style.opacity;
    this._animationPlayer = this._engine.animateTimeline(
        this._element.nativeElement,
        new Animation([animate(this.duration + 'ms ease-out')],
      ).buildTimelines([{opacity: this._defaultOpacity}], [{opacity: 0}]));
    this._changeDetectorRef.markForCheck();
    this._animationPlayer.play();
    this._animationPlayer.onDone(() => {
      this._animationPlayer.destroy();
      this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
      this._changeDetectorRef.markForCheck();
    });
  }

  /**
   * Shows element: sets "display:[default]" so animation is shown.
   */
  show(): void {
    this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
    this._changeDetectorRef.markForCheck();
    this._animationPlayer = this._engine.animateTimeline(
        this._element.nativeElement,
        new Animation([animate(this.duration + 'ms ease-in')],
      ).buildTimelines([{opacity: 0}], [{opacity: this._defaultOpacity}]));
    this._animationPlayer.play();
    this._animationPlayer.onDone(() => {
      this._animationPlayer.destroy();
      this._changeDetectorRef.markForCheck();
    });
  }
}
