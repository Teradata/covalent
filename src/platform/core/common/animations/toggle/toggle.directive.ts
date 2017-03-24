import { Directive, ElementRef, Input, HostBinding, Renderer2, AnimationPlayer, OnInit, ChangeDetectorRef } from '@angular/core';
import { ɵAnimation as Animation, AnimationDriver,
         ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵDomAnimationEngine as DomAnimationEngine } from '@angular/animations/browser';
import { animate } from '@angular/animations';

@Directive({
  selector: '[tdToggle]',
})
export class TdToggleDirective {

  private _state: boolean;
  private _defaultOverflow: string;
  private _defaultDisplay: string;
  private _engine: DomAnimationEngine;
  private _animationPlayer: AnimationPlayer;

  /**
   * duration?: number
   * Sets duration of toggle animation in miliseconds.
   * Defaults to 150 ms.
   */
  @Input() duration: number = 150;

  /**
   * tdToggle: boolean
   * Toggles element, hides if its 'true', shows if its 'false'.
   */
  @Input('tdToggle')
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
   * Hides element: sets "display:[default]" so animation is shown,
   * starts animation and adds "display:'none'" style at the end.
   */
  hide(): void {
    this._defaultDisplay = this._element.nativeElement.style.display;
    this._defaultOverflow = this._element.nativeElement.style.overflow;
    this._animationPlayer = this._engine.animateTimeline(
        this._element.nativeElement,
        new Animation([animate(this.duration + 'ms ease-out')],
      ).buildTimelines([{height: this._element.nativeElement.scrollHeight + 'px'}], [{height: 0}]));
    this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
    this._changeDetectorRef.markForCheck();
    this._animationPlayer.play();
    this._animationPlayer.onDone(() => {
      this._animationPlayer.destroy();
      this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
      this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
      this._changeDetectorRef.markForCheck();
    });
  }

  /**
   * Shows element: sets "display:[default]" so animation is shown,
   * starts animation and adds "overflow:[default]" style again at the end.
   */
  show(): void {
    this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
    this._changeDetectorRef.markForCheck();
    this._animationPlayer = this._engine.animateTimeline(
        this._element.nativeElement,
        new Animation([animate(this.duration + 'ms ease-in')],
      ).buildTimelines([{height: 0}], [{height: this._element.nativeElement.scrollHeight + 'px'}]));
    this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
    this._animationPlayer.play();
    this._animationPlayer.onDone(() => {
      this._animationPlayer.destroy();
      this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
      this._changeDetectorRef.markForCheck();
    });
  }
}
