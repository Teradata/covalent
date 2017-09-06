
import { trigger, state, style, keyframes, transition, animate, AnimationTriggerMetadata, AUTO_STYLE } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

/**
 * Function TdJelloAnimation
 *
 * params:
 * * anchor: Name of the anchor that will attach to a dom element in the components template that will contain the animation.
 * * duration: Duration the animation will run in milliseconds. Defaults to 500 ms.
 *
 * Returns an [AnimationTriggerMetadata] object with states for a boolean trigger based jello animation.
 *
 * usage: [@myAnchorName]="true|false"
 */
export function TdJelloAnimation(jelloOptions: IAnimationOptions = {}): AnimationTriggerMetadata {
  return trigger(jelloOptions.anchor || 'tdJello', [
    state('0', style({
      transform: 'none',
    })),
    state('1',  style({
      transform: 'none',
    })),
    transition('0 <=> 1', animate((jelloOptions.duration || 500) + 'ms ' + (jelloOptions.delay || 0) + 'ms', keyframes([
        style({transform: 'none', offset: 0}),
        style({transform: 'none', offset: 0.011}),
        style({transform: 'skewX(-12.5deg) skewY(-12.5deg)', offset: 0.222}),
        style({transform: 'skewX(6.25deg) skewY(6.25deg)', offset: 0.333}),
        style({transform: 'skewX(-3.125deg) skewY(-3.125deg)', offset: 0.444}),
        style({transform: 'skewX(1.5625deg) skewY(1.5625deg)', offset: 0.555}),
        style({transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', offset: 0.666}),
        style({transform: 'skewX(0.390625deg) skewY(0.390625deg)', offset: 0.777}),
        style({transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', offset: 0.888}),
    ]))),
  ]);
}
