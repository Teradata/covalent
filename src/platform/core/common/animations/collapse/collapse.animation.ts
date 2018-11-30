import { trigger, state, style, transition, animate,
         AnimationTriggerMetadata, AUTO_STYLE, query, animateChild, group } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

export interface ICollapseAnimation extends IAnimationOptions {
   easeOnClose?: string;
   easeOnOpen?: string;
}

/**
 * const tdCollapseAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnClose: Animation accelerates and decelerates when closing. Defaults to ease-in.
 * * easeOnOpen: Animation accelerates and decelerates when opening. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a collapse/expand animation.
 *
 * usage: [@tdCollapse]="{ value: true | false, params: { duration: 500 }}"
 */
export const tdCollapseAnimation: AnimationTriggerMetadata = trigger('tdCollapse', [
  state('1', style({
    height: '0',
    overflow: 'hidden',
  })),
  state('0',  style({
    height: AUTO_STYLE,
    overflow: AUTO_STYLE,
  })),
  transition('0 => 1', [
    style({
      overflow: 'hidden',
      height: AUTO_STYLE,
    }),
    group([
      query('@*', animateChild(), { optional: true }),
      animate('{{ duration }}ms {{ delay }}ms {{ ease }}', style({
        height: '0',
        overflow: 'hidden',
      })),
    ]),
  ], { params: { duration: 150, delay: '0', ease: 'ease-in' }}),
  transition('1 => 0', [
    style({
      height: '0',
      overflow: 'hidden',
    }),
    group([
      query('@*', animateChild(), { optional: true }),
      animate('{{ duration }}ms {{ delay }}ms {{ ease }}', style({
        overflow: 'hidden',
        height: AUTO_STYLE,
      })),
    ]),
  ], { params: { duration: 150, delay: '0', ease: 'ease-out' }}),
]);
