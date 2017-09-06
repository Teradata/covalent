
import { trigger, state, style, keyframes, transition, animate, AnimationTriggerMetadata, AUTO_STYLE } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

/**
 * Function TdHeadshakeAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based headshake animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
export function TdHeadshakeAnimation(headshakeOptions: IAnimationOptions = {}): AnimationTriggerMetadata {
  return trigger(headshakeOptions.anchor || 'tdHeadshake', [
    state('0', style({
      transform: 'translateX(0)',
    })),
    state('1',  style({
      transform: 'translateX(0)',
    })),
    transition('0 <=> 1', animate((headshakeOptions.duration || 500) + 'ms ' + (headshakeOptions.delay || 0) + 'ms', keyframes([
        style({transform: 'translateX(0)', offset: 0}),
        style({transform: 'translateX(-6px) rotateY(-9deg)', offset: 0.065}),
        style({transform: 'translateX(5px) rotateY(7deg)', offset: 0.185}),
        style({transform: 'translateX(-3px) rotateY(-5deg)', offset: 0.315}),
        style({transform: 'translateX(2px) rotateY(3deg)', offset: 0.435}),
        style({transform: 'translateX(0)', offset: 0.50}),
    ]))),
  ]);
}
