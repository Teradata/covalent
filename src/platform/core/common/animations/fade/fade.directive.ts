import { Directive, ElementRef, Input, Output, EventEmitter, HostBinding, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, AUTO_STYLE, style, animation } from '@angular/animations';

@Directive({
  selector: '[tdFade]',
})
export class TdFadeDirective {

  private _state: boolean;
  private _defaultDisplay: string;
  private _animationFadeInPlayer: AnimationPlayer;
  private _animationFadeOutPlayer: AnimationPlayer;

  /**
   * duration?: number
   * Sets duration of fade animation in milliseconds.
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
    if (state) {
      if (this._animationFadeOutPlayer) {
        this._animationFadeOutPlayer.destroy();
        this._animationFadeOutPlayer = undefined;
      }
      this.hide();
    } else {
      if (this._animationFadeInPlayer) {
        this._animationFadeInPlayer.destroy();
        this._animationFadeInPlayer = undefined;
      }
      this.show();
    }
  }

  /**
   * fadeIn?: function
   * Method to be executed when fadeIn animation ends.
   */
  @Output('fadeIn') onFadeIn: EventEmitter<void> = new EventEmitter<void>();

  /**
   * fadeOut?: function
   * Method to be executed when fadeOut animation ends.
   */
  @Output('fadeOut') onFadeOut: EventEmitter<void> = new EventEmitter<void>();

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
              private _animationBuilder: AnimationBuilder) {
    this._defaultDisplay = this._element.nativeElement.style.display;
  }

  /**
   * Hides element: starts animation and adds "display:'none'" style at the end.
   */
  hide(): void {
    this._animationFadeInPlayer = this._animationBuilder.build(animation([
      style({
        opacity: AUTO_STYLE,
        display: AUTO_STYLE,
      }),
      animate(this.duration + 'ms ease-out', style({opacity: '0'})),
    ])).create(this._element.nativeElement);
    this._animationFadeInPlayer.onDone(() => {
      this._onFadeInDone();
    });
    this._animationFadeInPlayer.play();
  }

  /**
   * Shows element: sets "display:[default]" so animation is shown.
   */
  show(): void {
    this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
    this._changeDetectorRef.markForCheck();
    this._animationFadeOutPlayer = this._animationBuilder.build(animation([
      style({
        opacity: '0',
        display: 'none',
      }),
      animate(this.duration + 'ms ease-in', style({opacity: AUTO_STYLE})),
    ])).create(this._element.nativeElement);
    this._animationFadeOutPlayer.onDone(() => {
      this._onFadeOutDone();
    });
    this._animationFadeOutPlayer.play();
  }

  private _onFadeInDone(): void {
    if (this._animationFadeInPlayer) {
      this._animationFadeInPlayer.destroy();
      this._animationFadeInPlayer = undefined;
      this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
      this._changeDetectorRef.markForCheck();
      this.onFadeIn.emit();
    }
  }

  private _onFadeOutDone(): void {
    if (this._animationFadeOutPlayer) {
      this._animationFadeOutPlayer.destroy();
      this._animationFadeOutPlayer = undefined;
      this._changeDetectorRef.markForCheck();
      this.onFadeOut.emit();
    }
  }
}
