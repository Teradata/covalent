
import { trigger, state, style, keyframes, transition, animate,
         AnimationTriggerMetadata, AUTO_STYLE, query, animateChild, group } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

/**
 * const tdJelloAnimation
 *
 * Parameter Options:
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * ease: Animation accelerate and decelerate style. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with boolean states for a jello animation.
 *
 * usage: [@tdJello]="{ value: true | false, params: { duration: 200 }}"
 */
export const tdJelloAnimation: AnimationTriggerMetadata = trigger('tdJello', [
  state('0', style({
    transform: 'none',
  })),
  state('1',  style({
    transform: 'none',
  })),
  transition('0 <=> 1', [
    group([
      query('@*', animateChild(), { optional: true }),
      animate('{{ duration }}ms {{ delay }}ms {{ ease }}',
      keyframes([
        style({transform: 'none', offset: 0}),
        style({transform: 'none', offset: 0.011}),
        style({transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222}),
        style({transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333}),
        style({transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444}),
        style({transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555}),
        style({transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666}),
        style({transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777}),
        style({transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888}),
      ])),
    ]),
  ], { params: { duration: 500, delay: '0', ease: 'ease-out' }}),
]);
