import { trigger, state, style, transition, animate, AnimationTriggerMetadata, AUTO_STYLE } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

export interface IFadeInOutAnimation extends IAnimationOptions {
  easeOnIn?: string;
  easeOnOut?: string;
}

/**
 * Function TdFadeInOutAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation. Defaults to tdFadeInOut
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
 * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a fading animation.
 *
 * usage: [@tdFadeInOut]="true|false"
 */
export function TdFadeInOutAnimation(fadeInOut: IFadeInOutAnimation = {}): AnimationTriggerMetadata {
  return trigger((fadeInOut.anchor || 'tdFadeInOut'), [
    state('0', style({
      opacity: '0',
      display: 'none',
    })),
    state('1',  style({
      opacity: AUTO_STYLE,
      display: AUTO_STYLE,
    })),
    transition('0 => 1',
      animate((fadeInOut.duration || 150) + 'ms ' +
              (fadeInOut.delay || 0) + 'ms ' +
              (fadeInOut.easeOnIn || 'ease-in'))),
    transition('1 => 0',
      animate((fadeInOut.duration || 150) + 'ms ' +
              (fadeInOut.delay || 0) + 'ms ' +
              (fadeInOut.easeOnOut || 'ease-out'))),
  ]);
}
