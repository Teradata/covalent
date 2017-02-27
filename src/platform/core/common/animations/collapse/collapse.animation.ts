import { trigger, state, style, transition, animate, AnimationEntryMetadata } from '@angular/core';

/**
 * Function TdCollapseAnimation
 *
 * params:
 * * duration: Duration of animation in miliseconds. Defaults to 150 ms.
 *
 * Returns an [AnimationEntryMetadata] object with states for a collapse/expand animation.
 *
 * usage: [@tdCollapse]="true|false"
 */
export function TdCollapseAnimation(duration: number = 150): AnimationEntryMetadata {
  return trigger('tdCollapse', [
    state('true', style({
      height: '0',
      display: 'none',
    })),
    state('false',  style({
      height: '*',
      display: '*',
    })),
    transition('0 => 1', animate(duration + 'ms ease-in')),
    transition('1 => 0', animate(duration + 'ms ease-out')),
  ]);
}
