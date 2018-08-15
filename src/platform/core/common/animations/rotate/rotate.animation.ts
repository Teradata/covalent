import {
  trigger, state, style, transition, animate, AnimationTriggerMetadata,
  query, animateChild, group,
} from '@angular/animations';

import { IAnimationOptions } from '../common/interfaces';

export interface IRotateAnimation extends IAnimationOptions {
  degrees?: number;
  ease?: string;
}

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

/** @deprecated see tdRotateAnimation */
export function TdRotateAnimation(rotateOptions: IRotateAnimation = {}): AnimationTriggerMetadata {
  return trigger(rotateOptions.anchor || 'tdRotate', [
    state('0', style({
      transform: 'rotate(0deg)',
    })),
    state('1',  style({
      transform: 'rotate(' + (rotateOptions.degrees || 180) + 'deg)',
    })),
    transition('0 <=> 1', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate((rotateOptions.duration || 250) + 'ms ' +
          (rotateOptions.delay || 0) + 'ms ' +
          (rotateOptions.ease || 'ease-in')),
      ]),
    ]),
  ]);
}
