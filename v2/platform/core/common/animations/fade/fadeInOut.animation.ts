import { trigger, state, style, transition, animate,
         AnimationTriggerMetadata, AUTO_STYLE, query, animateChild, group  } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

export interface IFadeInOutAnimation extends IAnimationOptions {
  easeOnIn?: string;
  easeOnOut?: string;
}

/**
 * const tdFadeInOutAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnIn: Animation accelerates and decelerates when fading in. Defaults to ease-in.
 * * easeOnOut: Animation accelerates and decelerates when fading out. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a fade animation.
 *
 * usage: [@tdFadeInOut]="{ value: true | false, params: { duration: 200 }}"
 */
export const tdFadeInOutAnimation: AnimationTriggerMetadata = trigger('tdFadeInOut', [
    state('0', style({
      opacity: '0',
      visibility: 'hidden',
    })),
    state('1',  style({
      opacity: AUTO_STYLE,
      visibility: AUTO_STYLE,
    })),
    transition('0 => 1', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate('{{ duration }}ms {{ delay }}ms {{ easeOnIn }}'),
      ]),
    ], { params: { duration: 150, delay: '0', easeOnIn: 'ease-in' }}),
    transition('1 => 0', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate('{{ duration }}ms {{ delay }}ms {{ easeOnOut }}'),
    ]),
  ], { params: { duration: 150, delay: '0', easeOnOut: 'ease-out' }}),
]);
