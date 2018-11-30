
import { trigger, state, style, keyframes, transition, animate,
         AnimationTriggerMetadata, AUTO_STYLE, query, animateChild, group } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

/**
 * const tdPulseAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a pulse animation.
 *
 * usage: [@tdPulse]="{ value: true | false, params: { duration: 200 }}"
 */
export const tdPulseAnimation: AnimationTriggerMetadata = trigger('tdPulse', [
  state('0', style({
    transform: 'scale3d(1, 1, 1)',
  })),
  state('1',  style({
    transform: 'scale3d(1, 1, 1)',
  })),
  transition('0 <=> 1', [
    group([
      query('@*', animateChild(), { optional: true }),
      animate('{{ duration }}ms {{ delay }}ms {{ ease }}',
      keyframes([
          style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
          style({ transform: 'scale3d(1.05, 1.05, 1.05)', offset: 0.5 }),
          style({ transform: 'scale3d(1, 1, 1)', offset: 1.0 }),
        ]),
      ),
    ]),
  ], { params: { duration: 500, delay: '0', ease: 'ease-out' }}),
]);
