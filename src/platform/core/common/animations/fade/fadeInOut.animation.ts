import { trigger, state, style, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

/**
 * Function TdFadeInOutAnimation
 *
 * params:
 * * duration: Duration of animation in miliseconds. Defaults to 150 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a fading animation.
 *
 * usage: [@tdFadeInOut]="true|false"
 */
export function TdFadeInOutAnimation(duration: number = 150): AnimationTriggerMetadata {
  return trigger('tdFadeInOut', [
    state('0', style({
      opacity: '0',
      display: 'none',
    })),
    state('1',  style({
      opacity: '*',
      display: '*',
    })),
    transition('0 => 1', animate(duration + 'ms ease-in')),
    transition('1 => 0', animate(duration + 'ms ease-out')),
  ]);
}
