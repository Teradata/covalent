
import { trigger, state, style, keyframes, transition, animate,
         AnimationTriggerMetadata, query, animateChild, group } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

/**
 * const tdBounceAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a bounce animation.
 *
 * usage: [@tdBounce]="{ value: true | false, params: { duration: 200 }}"
 */
export const tdBounceAnimation: AnimationTriggerMetadata = trigger('tdBounce', [
  state('0', style({
    transform: 'translate3d(0, 0, 0)',
  })),
  state('1',  style({
    transform: 'translate3d(0, 0, 0)',
  })),
  transition('0 <=> 1', [
    group([
      query('@*', animateChild(), { optional: true }),
      animate('{{ duration }}ms {{ delay }}ms {{ ease }}',
      keyframes([
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.2}),
        style({animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.4}),
        style({animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -30px, 0)', offset: 0.43}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.53}),
        style({animationTimingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)', transform: 'translate3d(0, -15px, 0)', offset: .7}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 0.8}),
        style({transform: 'translate3d(0, -4px, 0)', offset: .9}),
        style({animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)', transform: 'translate3d(0, 0, 0)', offset: 1.0}),
      ])),
    ]),
  ], { params: { duration: 500, delay: '0', ease: 'ease-out' }}),
]);
