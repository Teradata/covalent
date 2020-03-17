import {
  trigger, state, style, transition, animate, AnimationTriggerMetadata,
  query, animateChild, group,
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

export interface IRotateAnimation extends IAnimationOptions {
  degrees?: number;
  ease?: string;
}

/**
 * const tdRotateAnimation
 *
 * Parameter Options:
 * * degressStart: Degrees of rotation that the dom object will end up in during the "false" state
 * * degreesEnd: Degrees of rotation that the dom object will end up in during the "true" state
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerates and decelerates. Defaults to ease-in.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a rotation animation.
 *
 * usage: [@tdRotate]="{ value: true | false, params: { degreesEnd: 90 }}"
 */

export const tdRotateAnimation: AnimationTriggerMetadata = trigger('tdRotate', [
  state('0', style({
    transform: 'rotate({{ degressStart }}deg)',
  }), { params: { degressStart: 0 }}),
  state('1',  style({
    transform: 'rotate({{ degreesEnd }}deg)',
  }), { params: { degreesEnd: 180 }}),
  transition('0 <=> 1', [
    group([
      query('@*', animateChild(), { optional: true }),
      animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
    ]),
  ], { params: { duration: 250, delay: '0', ease: 'ease-in' }}),
]);
