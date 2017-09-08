
import { trigger, state, style, keyframes, transition, animate, AnimationTriggerMetadata, AUTO_STYLE } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

/**
 * Function TdPulseAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based pulse animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
export function TdPulseAnimation(pulseOptions: IAnimationOptions = {}): AnimationTriggerMetadata {
  return trigger(pulseOptions.anchor || 'tdPulse', [
    state('0', style({
      transform: 'scale3d(1, 1, 1)',
    })),
    state('1',  style({
      transform: 'scale3d(1, 1, 1)',
    })),
    transition('0 <=> 1', animate((pulseOptions.duration || 500) + 'ms ' + (pulseOptions.delay || 0) + 'ms', keyframes([
        style({transform: 'scale3d(1, 1, 1)', offset: 0}),
        style({transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5}),
        style({transform: 'scale3d(1, 1, 1)', offset: 1.0}),
    ]))),
  ]);
}
