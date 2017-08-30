
import { trigger, state, style, keyframes, transition, animate, AnimationTriggerMetadata, AUTO_STYLE } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

/**
 * Function TdBounceAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in miliseconds. Defaults to 250 ms.
 * * ease: String representing timing of animation 'duration delay easing' EX: '2s 300ms ease-in', duration=2000, delay=300, easing=ease-in.
 * Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based bounce animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
export function TdBounceAnimation(bounceOptions: IAnimationOptions = {}): AnimationTriggerMetadata {
  return trigger(bounceOptions.anchor || 'tdbounce', [
    state('0', style({
      transform: 'translate3d(0, 0, 0)',
    })),
    state('1',  style({
      transform: 'translate3d(0, 0, 0)',
    })),
    transition('0 <=> 1', animate((bounceOptions.duration || 250) + 'ms', keyframes([
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.2}),
        style({animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.4}),
        style({animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.43}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.53}),
        style({animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -15px, 0)', offset: .7}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.8}),
        style({transform: 'translate3d(0, -4px, 0)', offset: .9}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 1.0}),
    ]))),
  ]);
}
