import { trigger, state, style, transition, animate, AnimationTriggerMetadata, AUTO_STYLE } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

export interface IRotateAnimation extends IAnimationOptions {
  degrees?: number;
  ease?: string;
}

/**
 * Function TdRotateAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation. Defaults to tdRotate.
 * * duration: Duration the animation will run in milliseconds. Defaults to 250 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * degrees: Degrees of rotation that the dom object will animation. A negative value will cause the animation to initially rotate counter-clockwise.
 * * ease: Animation accelerates and decelerates when rotation. Defaults to ease-in.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based rotation animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
export function TdRotateAnimation(rotateOptions: IRotateAnimation = {}): AnimationTriggerMetadata {
  return trigger(rotateOptions.anchor || 'tdRotate', [
    state('0', style({
      transform: 'rotate(0deg)',
    })),
    state('1',  style({
      transform: 'rotate(' + (rotateOptions.degrees || 180) + 'deg)',
    })),
    transition('0 <=> 1', [
      animate((rotateOptions.duration || 250) + 'ms ' +
              (rotateOptions.delay || 0) + 'ms ' +
              (rotateOptions.ease || 'ease-in')),
    ]),
  ]);
}
