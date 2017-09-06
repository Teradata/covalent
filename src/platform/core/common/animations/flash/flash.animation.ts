
import { trigger, state, style, keyframes, transition, animate, AnimationTriggerMetadata, AUTO_STYLE } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

/**
 * Function TdFlashAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based flash animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
export function TdFlashAnimation(flashOptions: IAnimationOptions = {}): AnimationTriggerMetadata {
  return trigger(flashOptions.anchor || 'tdFlash', [
    state('0', style({
      opacity: 1,
    })),
    state('1',  style({
      opacity: 1,
    })),
    transition('0 <=> 1', animate((flashOptions.duration || 500) + 'ms ' + (flashOptions.delay || 0) + 'ms', keyframes([
        style({opacity: 1, offset: 0}),
        style({opacity: 0, offset: 0.25}),
        style({opacity: 1, offset: 0.5}),
        style({opacity: 0, offset: 0.75}),
        style({opacity: 1, offset: 1.0}),
    ]))),
  ]);
}
