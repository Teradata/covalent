import { Directive, ElementRef, Input, HostBinding, Renderer, AnimationPlayer } from '@angular/core';

@Directive({
  selector: '[tdToggle]',
})
export class TdToggleDirective {

  private _state: boolean;
  private _hiddenState: boolean;
  private _defaultDisplay: string;
  private _timeoutNumber: number;

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
    clearTimeout(this._timeoutNumber);
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

  /**
   * Binds 'hidden' attribute.
   */
  @HostBinding('hidden')
  get hiddenBinding(): boolean {
    return this._hiddenState ? true : undefined;
  }

  constructor(private _renderer: Renderer, private _element: ElementRef) {
    this._defaultDisplay = this._element.nativeElement.style.display;
  }

  /**
   * Hides element: sets "display:[default]" so animation is shown,
   * starts animation and adds "display:'none'" style at the end.
   */
  hide(): void {
    this._renderer.setElementStyle(this._element.nativeElement, 'display', this._defaultDisplay);
    let animation: AnimationPlayer = this._renderer
      .animate(this._element.nativeElement, undefined, [{
          styles: {
            styles: [
              {'height': this._element.nativeElement.scrollHeight + 'px'},
              {'overflow': 'hidden'},
            ],
          },
          offset: 0,
        }, {
          styles: {
            styles: [
              {'height': 0},
              {'overflow': 'hidden'},
            ],
          },
          offset: 1,
        },
      ], this.duration, 0, 'ease-in');
    animation.play();

    /**
     * Using timeout instead of onComplete since there is a bug if you start another animation
     * before the previous one ends. The onComplete event is not executed.
     * e.g. hide event started before show event is completed.
     */
    this._timeoutNumber = setTimeout(() => {
      this._renderer.setElementStyle(this._element.nativeElement, 'display', 'none');
      this._hiddenState = this._state;
    }, this.duration);
  }

  /**
   * Shows element: sets "display:[default]" so animation is shown,
   * starts animation and adds "display:[default]" style again at the end.
   */
  show(): void {
    this._hiddenState = this._state;

    this._renderer.setElementStyle(this._element.nativeElement, 'display', this._defaultDisplay);
    let startingAnimation: AnimationPlayer = this._renderer
      .animate(this._element.nativeElement, undefined, [{
          styles: {
            styles: [
              {'overflow': 'hidden'},
            ],
          },
          offset: 0,
        }, {
          styles: {
            styles: [
              {'overflow': 'hidden'},
            ],
          },
          offset: 1,
        },
      ], 0, 0, 'ease-in');
    startingAnimation.play();
    startingAnimation.onDone(() => {
      let animation: AnimationPlayer = this._renderer
        .animate(this._element.nativeElement, undefined, [{
            styles: {
              styles: [
                {'height': 0},
                {'overflow': 'hidden'},
              ],
            },
            offset: 0,
          }, {
            styles: {
              styles: [
                {'height': this._element.nativeElement.scrollHeight + 'px'},
                {'overflow': 'hidden'},
              ],
            },
            offset: 1,
          },
        ], this.duration, 0, 'ease-in');
      animation.play();

      /**
       * Using timeout instead of onComplete since there is a bug if you start another animation
       * before the previous one ends. The onComplete event is not executed.
       * e.g. hide event started before show event is completed.
       */
      this._timeoutNumber = setTimeout(() => {
        this._renderer.setElementStyle(this._element.nativeElement, 'display', this._defaultDisplay);
      }, this.duration);
    });
  }
}
