import { trigger, state, style, transition, animate, AnimationEntryMetadata } from '@angular/core';

/**
 * Function TdFadeInOutAnimation
 *
 * params:
 * * duration: Duration of animation in miliseconds. Defaults to 150 ms.
 *
 * Returns an [AnimationEntryMetadata] object with states for a fading animation.
 *
 * usage: [@tdFadeInOut]="true|false"
 */
export function TdFadeInOutAnimation(duration: number = 150): AnimationEntryMetadata {
  return trigger('tdFadeInOut', [
    state('false', style({
      opacity: '0',
      display: 'none',
    })),
    state('true',  style({
      opacity: '*',
      display: '*',
    })),
    transition('0 => 1', animate(duration + 'ms ease-in')),
    transition('1 => 0', animate(duration + 'ms ease-out')),
  ]);
}
