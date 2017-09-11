import { Directive, ElementRef, Input, HostBinding, Renderer2, ChangeDetectorRef } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, AUTO_STYLE, style, animation } from '@angular/animations';

@Directive({
  selector: '[tdToggle]',
})
export class TdToggleDirective {

  private _state: boolean;
  private _defaultOverflow: string;
  private _defaultDisplay: string;
  private _animationShowPlayer: AnimationPlayer;
  private _animationHidePlayer: AnimationPlayer;

  /**
   * duration?: number
   * Sets duration of toggle animation in milliseconds.
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
    if (state) {
      if (this._animationShowPlayer) {
        this._animationShowPlayer.destroy();
        this._animationShowPlayer = undefined;
      }
      this.hide();
    } else {
      if (this._animationHidePlayer) {
        this._animationHidePlayer.destroy();
        this._animationHidePlayer = undefined;
      }
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
              private _animationBuilder: AnimationBuilder) {
    this._defaultDisplay = this._element.nativeElement.style.display;
    this._defaultOverflow = this._element.nativeElement.style.overflow;
  }

  /**
   * Hides element: sets "display:[default]" so animation is shown,
   * starts animation and adds "display:'none'" style at the end.
   */
  hide(): void {
    this._animationHidePlayer = this._animationBuilder.build(animation([
      style({
        height: AUTO_STYLE,
        display: AUTO_STYLE,
      }),
      animate(this.duration + 'ms ease-in', style({height: '0'})),
    ])).create(this._element.nativeElement);
    this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
    this._changeDetectorRef.markForCheck();
    this._animationHidePlayer.onDone(() => {
      this._onHideDone();
    });
    this._animationHidePlayer.play();
  }

  /**
   * Shows element: sets "display:[default]" so animation is shown,
   * starts animation and adds "overflow:[default]" style again at the end.
   */
  show(): void {
    this._renderer.setStyle(this._element.nativeElement, 'display', this._defaultDisplay);
    this._changeDetectorRef.markForCheck();
    this._animationShowPlayer = this._animationBuilder.build(animation([
      style({
        height: '0',
        display: 'none',
      }),
      animate(this.duration + 'ms ease-out', style({height: AUTO_STYLE})),
    ])).create(this._element.nativeElement);
    this._renderer.setStyle(this._element.nativeElement, 'overflow', 'hidden');
    this._animationShowPlayer.onDone(() => {
      this._onShowDone();
    });
    this._animationShowPlayer.play();
  }

  private _onHideDone(): void {
    if (this._animationHidePlayer) {
      this._animationHidePlayer.destroy();
      this._animationHidePlayer = undefined;
      this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
      this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
      this._changeDetectorRef.markForCheck();
    }
  }

  private _onShowDone(): void {
    if (this._animationShowPlayer) {
      this._animationShowPlayer.destroy();
      this._animationShowPlayer = undefined;
      this._renderer.setStyle(this._element.nativeElement, 'overflow', this._defaultOverflow);
      this._changeDetectorRef.markForCheck();
    }
  }
}
