import { trigger, state, style, transition, animate, AnimationTriggerMetadata, AUTO_STYLE } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

export interface ICollapseAnimation extends IAnimationOptions {
   easeOnClose?: string;
   easeOnOpen?: string;
}

/**
 * Function TdCollapseAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation. Defaults to tdCollapse.
 * * duration: Duration the animation will run in milliseconds. Defaults to 150 ms.
 * * delay: Delay before the animation will run in milliseconds. Defaults to 0 ms.
 * * easeOnClose: Animation accelerates and decelerates when closing. Defaults to ease-in.
 * * easeOnOpen: Animation accelerates and decelerates when opening. Defaults to ease-out.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a collapse/expand animation.
 *
 * usage: [@tdCollapse]="true|false"
 */
export function TdCollapseAnimation(collapseOptions: ICollapseAnimation = {}): AnimationTriggerMetadata {
  return trigger(collapseOptions.anchor || 'tdCollapse', [
    state('1', style({
      height: '0',
      display: 'none',
      overflow: 'hidden',
    })),
    state('0',  style({
      height: AUTO_STYLE,
      display: AUTO_STYLE,
      overflow: 'hidden',
    })),
    transition('0 => 1', [
      animate((collapseOptions.duration || 150) + 'ms ' +
              (collapseOptions.delay || 0) + 'ms ' +
              (collapseOptions.easeOnClose || 'ease-in')),
    ]),
    transition('1 => 0', [
      animate((collapseOptions.duration || 150) + 'ms ' +
              (collapseOptions.delay || 0) + 'ms ' +
              (collapseOptions.easeOnOpen || 'ease-out')),
    ]),
  ]);
}
