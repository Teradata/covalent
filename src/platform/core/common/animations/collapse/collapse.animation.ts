import { trigger, state, style, transition, animate,
         AnimationTriggerMetadata, AUTO_STYLE, query, animateChild, group } from '@angular/animations';
import { IAnimationOptions } from '../common/interfaces';

export interface ICollapseAnimation extends IAnimationOptions {
   easeOnClose?: string;
   easeOnOpen?: string;
}

export const tdCollapseAnimation: AnimationTriggerMetadata = trigger('tdCollapse', [
    state('1', style({
      height: '0',
      display: 'none',
    })),
    state('0',  style({
      height: AUTO_STYLE,
      display: AUTO_STYLE,
    })),
    transition('0 => 1', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
      ]),
    ], { params: { duration: 150, delay: '0', ease: 'ease-in' }}),
    transition('1 => 0', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate('{{ duration }}ms {{ delay }}ms {{ ease }}'),
      ]),
    ], { params: { duration: 150, delay: '0', ease: 'ease-out' }}),
  ]);

/** @deprecated see tdCotateAnimation */
export function TdCollapseAnimation(collapseOptions: ICollapseAnimation = {}): AnimationTriggerMetadata {
  return trigger(collapseOptions.anchor || 'tdCollapse', [
    state('1', style({
      height: '0',
      display: 'none',
    })),
    state('0',  style({
      height: AUTO_STYLE,
      display: AUTO_STYLE,
    })),
    transition('0 => 1', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate((collapseOptions.duration || 150) + 'ms ' +
                (collapseOptions.delay || 0) + 'ms ' +
                (collapseOptions.easeOnClose || 'ease-in')),
      ]),
    ]),
    transition('1 => 0', [
      group([
        query('@*', animateChild(), { optional: true }),
        animate((collapseOptions.duration || 150) + 'ms ' +
                (collapseOptions.delay || 0) + 'ms ' +
                (collapseOptions.easeOnOpen || 'ease-out')),
      ]),
    ]),
  ]);
}
